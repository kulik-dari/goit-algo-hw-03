import "./node-environment";
import "./require-hook";
import "./node-polyfill-fetch";
import "./node-polyfill-form";
import "./node-polyfill-web-streams";
import "./node-polyfill-crypto";
import { DecodeError, PageNotFoundError, MiddlewareNotFoundError } from "../shared/lib/utils";
import { getRouteMatcher } from "../shared/lib/router/utils/route-matcher";
import fs from "fs";
import { join, resolve, isAbsolute } from "path";
import { addRequestMeta, getRequestMeta } from "./request-meta";
import { PAGES_MANIFEST, BUILD_ID_FILE, MIDDLEWARE_MANIFEST, PRERENDER_MANIFEST, ROUTES_MANIFEST, CLIENT_PUBLIC_FILES_PATH, APP_PATHS_MANIFEST, SERVER_DIRECTORY, NEXT_FONT_MANIFEST, PHASE_PRODUCTION_BUILD, INTERNAL_HEADERS } from "../shared/lib/constants";
import { findDir } from "../lib/find-pages-dir";
import { NodeNextRequest, NodeNextResponse } from "./base-http/node";
import { sendRenderResult } from "./send-payload";
import { parseUrl } from "../shared/lib/router/utils/parse-url";
import * as Log from "../build/output/log";
import BaseServer, { NoFallbackError } from "./base-server";
import { getMaybePagePath, getPagePath, requireFontManifest } from "./require";
import { denormalizePagePath } from "../shared/lib/page-path/denormalize-page-path";
import { normalizePagePath } from "../shared/lib/page-path/normalize-page-path";
import { loadComponents } from "./load-components";
import isError, { getProperError } from "../lib/is-error";
import { splitCookiesString, toNodeOutgoingHttpHeaders } from "./web/utils";
import { getMiddlewareRouteMatcher } from "../shared/lib/router/utils/middleware-route-matcher";
import { loadEnvConfig } from "@next/env";
import { urlQueryToSearchParams } from "../shared/lib/router/utils/querystring";
import { removeTrailingSlash } from "../shared/lib/router/utils/remove-trailing-slash";
import { getNextPathnameInfo } from "../shared/lib/router/utils/get-next-pathname-info";
import { getCloneableBody } from "./body-streams";
import { checkIsOnDemandRevalidate } from "./api-utils";
import ResponseCache from "./response-cache";
import { IncrementalCache } from "./lib/incremental-cache";
import { normalizeAppPath } from "../shared/lib/router/utils/app-paths";
import { setHttpClientAndAgentOptions } from "./setup-http-agent-env";
import { isPagesAPIRouteMatch } from "./future/route-matches/pages-api-route-match";
import { INSTRUMENTATION_HOOK_FILENAME } from "../lib/constants";
import { getTracer } from "./lib/trace/tracer";
import { NextNodeServerSpan } from "./lib/trace/constants";
import { nodeFs } from "./lib/node-fs-methods";
import { getRouteRegex } from "../shared/lib/router/utils/route-regex";
import { invokeRequest } from "./lib/server-ipc/invoke-request";
import { pipeReadable } from "./pipe-readable";
import { filterReqHeaders, ipcForbiddenHeaders } from "./lib/server-ipc/utils";
import { createRequestResponseMocks } from "./lib/mock-request";
import { NEXT_RSC_UNION_QUERY } from "../client/components/app-router-headers";
import { signalFromNodeResponse } from "./web/spec-extension/adapters/next-request";
import { RouteModuleLoader } from "./future/helpers/module-loader/route-module-loader";
import { loadManifest } from "./load-manifest";
export * from "./base-server";
function writeStdoutLine(text) {
    process.stdout.write(" " + text + "\n");
}
function formatRequestUrl(url, maxLength) {
    return maxLength !== undefined && url.length > maxLength ? url.substring(0, maxLength) + ".." : url;
}
const MiddlewareMatcherCache = new WeakMap();
function getMiddlewareMatcher(info) {
    const stored = MiddlewareMatcherCache.get(info);
    if (stored) {
        return stored;
    }
    if (!Array.isArray(info.matchers)) {
        throw new Error(`Invariant: invalid matchers for middleware ${JSON.stringify(info)}`);
    }
    const matcher = getMiddlewareRouteMatcher(info.matchers);
    MiddlewareMatcherCache.set(info, matcher);
    return matcher;
}
export default class NextNodeServer extends BaseServer {
    constructor(options){
        // Initialize super class
        super(options);
        /**
     * This sets environment variable to be used at the time of SSR by head.tsx.
     * Using this from process.env allows targeting SSR by calling
     * `process.env.__NEXT_OPTIMIZE_CSS`.
     */ if (this.renderOpts.optimizeFonts) {
            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(this.renderOpts.optimizeFonts);
        }
        if (this.renderOpts.optimizeCss) {
            process.env.__NEXT_OPTIMIZE_CSS = JSON.stringify(true);
        }
        if (this.renderOpts.nextScriptWorkers) {
            process.env.__NEXT_SCRIPT_WORKERS = JSON.stringify(true);
        }
        if (this.nextConfig.experimental.deploymentId) {
            process.env.NEXT_DEPLOYMENT_ID = this.nextConfig.experimental.deploymentId;
        }
        if (!this.minimalMode) {
            this.imageResponseCache = new ResponseCache(this.minimalMode);
        }
        const { appDocumentPreloading } = this.nextConfig.experimental;
        const isDefaultEnabled = typeof appDocumentPreloading === "undefined";
        if (!options.dev && (appDocumentPreloading === true || !(this.minimalMode && isDefaultEnabled))) {
            // pre-warm _document and _app as these will be
            // needed for most requests
            loadComponents({
                distDir: this.distDir,
                page: "/_document",
                isAppPath: false
            }).catch(()=>{});
            loadComponents({
                distDir: this.distDir,
                page: "/_app",
                isAppPath: false
            }).catch(()=>{});
        }
        if (!options.dev) {
            const { dynamicRoutes = [] } = this.getRoutesManifest() ?? {};
            this.dynamicRoutes = dynamicRoutes.map((r)=>{
                // TODO: can we just re-use the regex from the manifest?
                const regex = getRouteRegex(r.page);
                const match = getRouteMatcher(regex);
                return {
                    match,
                    page: r.page,
                    re: regex.re
                };
            });
        }
        // ensure options are set when loadConfig isn't called
        setHttpClientAndAgentOptions(this.nextConfig);
        // Intercept fetch and other testmode apis.
        if (this.serverOptions.experimentalTestProxy) {
            const { interceptTestApis } = require("../experimental/testmode/server");
            interceptTestApis();
        }
        this.middlewareManifestPath = join(this.serverDistDir, MIDDLEWARE_MANIFEST);
    }
    async handleUpgrade() {
    // The web server does not support web sockets, it's only used for HMR in
    // development.
    }
    async prepareImpl() {
        await super.prepareImpl();
        if (!this.serverOptions.dev && this.nextConfig.experimental.instrumentationHook) {
            try {
                const instrumentationHook = await require(resolve(this.serverOptions.dir || ".", this.serverOptions.conf.distDir, "server", INSTRUMENTATION_HOOK_FILENAME));
                await (instrumentationHook.register == null ? void 0 : instrumentationHook.register.call(instrumentationHook));
            } catch (err) {
                if (err.code !== "MODULE_NOT_FOUND") {
                    err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
                    throw err;
                }
            }
        }
    }
    loadEnvConfig({ dev, forceReload, silent }) {
        loadEnvConfig(this.dir, dev, silent ? {
            info: ()=>{},
            error: ()=>{}
        } : Log, forceReload);
    }
    getIncrementalCache({ requestHeaders, requestProtocol }) {
        const dev = !!this.renderOpts.dev;
        let CacheHandler;
        const { incrementalCacheHandlerPath } = this.nextConfig.experimental;
        if (incrementalCacheHandlerPath) {
            CacheHandler = require(isAbsolute(incrementalCacheHandlerPath) ? incrementalCacheHandlerPath : join(this.distDir, incrementalCacheHandlerPath));
            CacheHandler = CacheHandler.default || CacheHandler;
        }
        // incremental-cache is request specific
        // although can have shared caches in module scope
        // per-cache handler
        return new IncrementalCache({
            fs: this.getCacheFilesystem(),
            dev,
            requestHeaders,
            requestProtocol,
            appDir: this.hasAppDir,
            allowedRevalidateHeaderKeys: this.nextConfig.experimental.allowedRevalidateHeaderKeys,
            minimalMode: this.minimalMode,
            serverDistDir: this.serverDistDir,
            fetchCache: true,
            fetchCacheKeyPrefix: this.nextConfig.experimental.fetchCacheKeyPrefix,
            maxMemoryCacheSize: this.nextConfig.experimental.isrMemoryCacheSize,
            flushToDisk: !this.minimalMode && this.nextConfig.experimental.isrFlushToDisk,
            getPrerenderManifest: ()=>this.getPrerenderManifest(),
            CurCacheHandler: CacheHandler
        });
    }
    getResponseCache() {
        return new ResponseCache(this.minimalMode);
    }
    getPublicDir() {
        return join(this.dir, CLIENT_PUBLIC_FILES_PATH);
    }
    getHasStaticDir() {
        return fs.existsSync(join(this.dir, "static"));
    }
    getPagesManifest() {
        return loadManifest(join(this.serverDistDir, PAGES_MANIFEST));
    }
    getAppPathsManifest() {
        if (!this.hasAppDir) return undefined;
        return loadManifest(join(this.serverDistDir, APP_PATHS_MANIFEST));
    }
    async hasPage(pathname) {
        var _this_nextConfig_i18n;
        return !!getMaybePagePath(pathname, this.distDir, (_this_nextConfig_i18n = this.nextConfig.i18n) == null ? void 0 : _this_nextConfig_i18n.locales, this.hasAppDir);
    }
    getBuildId() {
        const buildIdFile = join(this.distDir, BUILD_ID_FILE);
        try {
            return fs.readFileSync(buildIdFile, "utf8").trim();
        } catch (err) {
            if (!fs.existsSync(buildIdFile)) {
                throw new Error(`Could not find a production build in the '${this.distDir}' directory. Try building your app with 'next build' before starting the production server. https://nextjs.org/docs/messages/production-start-no-build-id`);
            }
            throw err;
        }
    }
    getHasAppDir(dev) {
        return Boolean(findDir(dev ? this.dir : this.serverDistDir, "app"));
    }
    sendRenderResult(req, res, options) {
        return sendRenderResult({
            req: req.originalRequest,
            res: res.originalResponse,
            ...options
        });
    }
    async runApi(req, res, query, match) {
        const edgeFunctionsPages = this.getEdgeFunctionsPages();
        for (const edgeFunctionsPage of edgeFunctionsPages){
            if (edgeFunctionsPage === match.definition.pathname) {
                const handledAsEdgeFunction = await this.runEdgeFunction({
                    req,
                    res,
                    query,
                    params: match.params,
                    page: match.definition.pathname,
                    appPaths: null
                });
                if (handledAsEdgeFunction) {
                    return true;
                }
            }
        }
        // The module supports minimal mode, load the minimal module.
        const module = await RouteModuleLoader.load(match.definition.filename);
        query = {
            ...query,
            ...match.params
        };
        delete query.__nextLocale;
        delete query.__nextDefaultLocale;
        delete query.__nextInferredLocaleFromDefault;
        await module.render(req.originalRequest, res.originalResponse, {
            previewProps: this.renderOpts.previewProps,
            revalidate: this.revalidate.bind(this),
            trustHostHeader: this.nextConfig.experimental.trustHostHeader,
            allowedRevalidateHeaderKeys: this.nextConfig.experimental.allowedRevalidateHeaderKeys,
            hostname: this.fetchHostname,
            minimalMode: this.minimalMode,
            dev: this.renderOpts.dev === true,
            query,
            params: match.params,
            page: match.definition.pathname
        });
        return true;
    }
    async renderHTML(req, res, pathname, query, renderOpts) {
        return getTracer().trace(NextNodeServerSpan.renderHTML, async ()=>this.renderHTMLImpl(req, res, pathname, query, renderOpts));
    }
    async renderHTMLImpl(req, res, pathname, query, renderOpts) {
        if (process.env.NEXT_MINIMAL) {
            throw new Error("invariant: renderHTML should not be called in minimal mode");
        // the `else` branch is needed for tree-shaking
        } else {
            // Due to the way we pass data by mutating `renderOpts`, we can't extend the
            // object here but only updating its `nextFontManifest` field.
            // https://github.com/vercel/next.js/blob/df7cbd904c3bd85f399d1ce90680c0ecf92d2752/packages/next/server/render.tsx#L947-L952
            renderOpts.nextFontManifest = this.nextFontManifest;
            if (this.hasAppDir && renderOpts.isAppPath) {
                const { renderToHTMLOrFlight: appRenderToHTMLOrFlight } = require("./future/route-modules/app-page/module.compiled");
                return appRenderToHTMLOrFlight(req.originalRequest, res.originalResponse, pathname, query, renderOpts);
            }
            // TODO: re-enable this once we've refactored to use implicit matches
            // throw new Error('Invariant: render should have used routeModule')
            return require("./future/route-modules/pages/module.compiled").renderToHTML(req.originalRequest, res.originalResponse, pathname, query, renderOpts);
        }
    }
    async imageOptimizer(req, res, paramsResult) {
        if (process.env.NEXT_MINIMAL) {
            throw new Error("invariant: imageOptimizer should not be called in minimal mode");
        } else {
            const { imageOptimizer } = require("./image-optimizer");
            return imageOptimizer(req.originalRequest, res.originalResponse, paramsResult, this.nextConfig, this.renderOpts.dev, async (newReq, newRes, newParsedUrl)=>{
                if (newReq.url === req.url) {
                    throw new Error(`Invariant attempted to optimize _next/image itself`);
                }
                if (this.isRenderWorker) {
                    const invokeRes = await invokeRequest(`http://${this.fetchHostname || "localhost"}:${this.port}${newReq.url || ""}`, {
                        method: newReq.method || "GET",
                        headers: newReq.headers,
                        signal: signalFromNodeResponse(res.originalResponse)
                    });
                    const filteredResHeaders = filterReqHeaders(toNodeOutgoingHttpHeaders(invokeRes.headers), ipcForbiddenHeaders);
                    for (const key of Object.keys(filteredResHeaders)){
                        newRes.setHeader(key, filteredResHeaders[key] || "");
                    }
                    newRes.statusCode = invokeRes.status || 200;
                    if (invokeRes.body) {
                        await pipeReadable(invokeRes.body, newRes);
                    } else {
                        res.send();
                    }
                    return;
                }
                return this.getRequestHandler()(new NodeNextRequest(newReq), new NodeNextResponse(newRes), newParsedUrl);
            });
        }
    }
    getPagePath(pathname, locales) {
        return getPagePath(pathname, this.distDir, locales, this.hasAppDir);
    }
    async renderPageComponent(ctx, bubbleNoFallback) {
        const edgeFunctionsPages = this.getEdgeFunctionsPages() || [];
        if (edgeFunctionsPages.length) {
            const appPaths = this.getOriginalAppPaths(ctx.pathname);
            const isAppPath = Array.isArray(appPaths);
            let page = ctx.pathname;
            if (isAppPath) {
                // When it's an array, we need to pass all parallel routes to the loader.
                page = appPaths[0];
            }
            for (const edgeFunctionsPage of edgeFunctionsPages){
                if (edgeFunctionsPage === page) {
                    await this.runEdgeFunction({
                        req: ctx.req,
                        res: ctx.res,
                        query: ctx.query,
                        params: ctx.renderOpts.params,
                        page,
                        appPaths
                    });
                    return null;
                }
            }
        }
        return super.renderPageComponent(ctx, bubbleNoFallback);
    }
    async findPageComponents({ page, query, params, isAppPath }) {
        return getTracer().trace(NextNodeServerSpan.findPageComponents, {
            spanName: `resolving page into components`,
            attributes: {
                "next.route": isAppPath ? normalizeAppPath(page) : page
            }
        }, ()=>this.findPageComponentsImpl({
                page,
                query,
                params,
                isAppPath
            }));
    }
    async findPageComponentsImpl({ page, query, params, isAppPath }) {
        const pagePaths = [
            page
        ];
        if (query.amp) {
            // try serving a static AMP version first
            pagePaths.unshift((isAppPath ? normalizeAppPath(page) : normalizePagePath(page)) + ".amp");
        }
        if (query.__nextLocale) {
            pagePaths.unshift(...pagePaths.map((path)=>`/${query.__nextLocale}${path === "/" ? "" : path}`));
        }
        for (const pagePath of pagePaths){
            try {
                const components = await loadComponents({
                    distDir: this.distDir,
                    page: pagePath,
                    isAppPath
                });
                if (query.__nextLocale && typeof components.Component === "string" && !pagePath.startsWith(`/${query.__nextLocale}`)) {
                    continue;
                }
                return {
                    components,
                    query: {
                        ...components.getStaticProps ? {
                            amp: query.amp,
                            __nextDataReq: query.__nextDataReq,
                            __nextLocale: query.__nextLocale,
                            __nextDefaultLocale: query.__nextDefaultLocale
                        } : query,
                        // For appDir params is excluded.
                        ...(isAppPath ? {} : params) || {}
                    }
                };
            } catch (err) {
                // we should only not throw if we failed to find the page
                // in the pages-manifest
                if (!(err instanceof PageNotFoundError)) {
                    throw err;
                }
            }
        }
        return null;
    }
    getFontManifest() {
        return requireFontManifest(this.distDir);
    }
    getNextFontManifest() {
        return loadManifest(join(this.distDir, "server", NEXT_FONT_MANIFEST + ".json"));
    }
    async getFallback(page) {
        page = normalizePagePath(page);
        const cacheFs = this.getCacheFilesystem();
        const html = await cacheFs.readFile(join(this.serverDistDir, "pages", `${page}.html`));
        return html.toString("utf8");
    }
    async handleNextImageRequest(req, res, parsedUrl) {
        if (this.minimalMode || this.nextConfig.output === "export" || process.env.NEXT_MINIMAL) {
            res.statusCode = 400;
            res.body("Bad Request").send();
            return {
                finished: true
            };
        // the `else` branch is needed for tree-shaking
        } else {
            const { ImageOptimizerCache } = require("./image-optimizer");
            const imageOptimizerCache = new ImageOptimizerCache({
                distDir: this.distDir,
                nextConfig: this.nextConfig
            });
            const { getHash, sendResponse, ImageError } = require("./image-optimizer");
            if (!this.imageResponseCache) {
                throw new Error("invariant image optimizer cache was not initialized");
            }
            const imagesConfig = this.nextConfig.images;
            if (imagesConfig.loader !== "default" || imagesConfig.unoptimized) {
                await this.render404(req, res);
                return {
                    finished: true
                };
            }
            const paramsResult = ImageOptimizerCache.validateParams(req.originalRequest, parsedUrl.query, this.nextConfig, !!this.renderOpts.dev);
            if ("errorMessage" in paramsResult) {
                res.statusCode = 400;
                res.body(paramsResult.errorMessage).send();
                return {
                    finished: true
                };
            }
            const cacheKey = ImageOptimizerCache.getCacheKey(paramsResult);
            try {
                var _cacheEntry_value;
                const { getExtension } = require("./serve-static");
                const cacheEntry = await this.imageResponseCache.get(cacheKey, async ()=>{
                    const { buffer, contentType, maxAge } = await this.imageOptimizer(req, res, paramsResult);
                    const etag = getHash([
                        buffer
                    ]);
                    return {
                        value: {
                            kind: "IMAGE",
                            buffer,
                            etag,
                            extension: getExtension(contentType)
                        },
                        revalidate: maxAge
                    };
                }, {
                    incrementalCache: imageOptimizerCache
                });
                if ((cacheEntry == null ? void 0 : (_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== "IMAGE") {
                    throw new Error("invariant did not get entry from image response cache");
                }
                sendResponse(req.originalRequest, res.originalResponse, paramsResult.href, cacheEntry.value.extension, cacheEntry.value.buffer, paramsResult.isStatic, cacheEntry.isMiss ? "MISS" : cacheEntry.isStale ? "STALE" : "HIT", imagesConfig, cacheEntry.revalidate || 0, Boolean(this.renderOpts.dev));
            } catch (err) {
                if (err instanceof ImageError) {
                    res.statusCode = err.statusCode;
                    res.body(err.message).send();
                    return {
                        finished: true
                    };
                }
                throw err;
            }
            return {
                finished: true
            };
        }
    }
    async handleCatchallRenderRequest(req, res, parsedUrl) {
        let { pathname, query } = parsedUrl;
        if (!pathname) {
            throw new Error("Invariant: pathname is undefined");
        }
        // This is a catch-all route, there should be no fallbacks so mark it as
        // such.
        query._nextBubbleNoFallback = "1";
        try {
            var _this_i18nProvider;
            // next.js core assumes page path without trailing slash
            pathname = removeTrailingSlash(pathname);
            const options = {
                i18n: (_this_i18nProvider = this.i18nProvider) == null ? void 0 : _this_i18nProvider.fromQuery(pathname, query)
            };
            const match = await this.matchers.match(pathname, options);
            // If we don't have a match, try to render it anyways.
            if (!match) {
                await this.render(req, res, pathname, query, parsedUrl, true);
                return {
                    finished: true
                };
            }
            // Add the match to the request so we don't have to re-run the matcher
            // for the same request.
            addRequestMeta(req, "_nextMatch", match);
            // TODO-APP: move this to a route handler
            const edgeFunctionsPages = this.getEdgeFunctionsPages();
            for (const edgeFunctionsPage of edgeFunctionsPages){
                // If the page doesn't match the edge function page, skip it.
                if (edgeFunctionsPage !== match.definition.page) continue;
                if (this.nextConfig.output === "export") {
                    await this.render404(req, res, parsedUrl);
                    return {
                        finished: true
                    };
                }
                delete query._nextBubbleNoFallback;
                delete query[NEXT_RSC_UNION_QUERY];
                const handled = await this.runEdgeFunction({
                    req,
                    res,
                    query,
                    params: match.params,
                    page: match.definition.page,
                    match,
                    appPaths: null
                });
                // If we handled the request, we can return early.
                if (handled) return {
                    finished: true
                };
            }
            // If the route was detected as being a Pages API route, then handle
            // it.
            // TODO: move this behavior into a route handler.
            if (isPagesAPIRouteMatch(match)) {
                if (this.nextConfig.output === "export") {
                    await this.render404(req, res, parsedUrl);
                    return {
                        finished: true
                    };
                }
                delete query._nextBubbleNoFallback;
                const handled = await this.handleApiRequest(req, res, query, match);
                if (handled) return {
                    finished: true
                };
            }
            await this.render(req, res, pathname, query, parsedUrl, true);
            return {
                finished: true
            };
        } catch (err) {
            if (err instanceof NoFallbackError) {
                if (this.isRenderWorker) {
                    throw err;
                }
                return {
                    finished: false
                };
            }
            try {
                if (this.renderOpts.dev) {
                    const { formatServerError } = require("../lib/format-server-error");
                    formatServerError(err);
                    await this.logErrorWithOriginalStack(err);
                } else {
                    this.logError(err);
                }
                res.statusCode = 500;
                await this.renderError(err, req, res, pathname, query);
                return {
                    finished: true
                };
            } catch  {}
            throw err;
        }
    }
    // Used in development only, overloaded in next-dev-server
    async logErrorWithOriginalStack(_err, _type) {
        throw new Error("Invariant: logErrorWithOriginalStack can only be called on the development server");
    }
    // Used in development only, overloaded in next-dev-server
    async ensurePage(_opts) {
        throw new Error("Invariant: ensurePage can only be called on the development server");
    }
    /**
   * Resolves `API` request, in development builds on demand
   * @param req http request
   * @param res http response
   * @param pathname path of request
   */ async handleApiRequest(req, res, query, match) {
        return this.runApi(req, res, query, match);
    }
    async getPrefetchRsc(pathname) {
        return this.getCacheFilesystem().readFile(join(this.serverDistDir, "app", `${pathname}.prefetch.rsc`)).then((res)=>res.toString());
    }
    getCacheFilesystem() {
        return nodeFs;
    }
    normalizeReq(req) {
        return !(req instanceof NodeNextRequest) ? new NodeNextRequest(req) : req;
    }
    normalizeRes(res) {
        return !(res instanceof NodeNextResponse) ? new NodeNextResponse(res) : res;
    }
    getRequestHandler() {
        const handler = this.makeRequestHandler();
        if (this.serverOptions.experimentalTestProxy) {
            const { wrapRequestHandlerNode } = require("../experimental/testmode/server");
            return wrapRequestHandlerNode(handler);
        }
        return handler;
    }
    makeRequestHandler() {
        // This is just optimization to fire prepare as soon as possible
        // It will be properly awaited later
        void this.prepare();
        const handler = super.getRequestHandler();
        return (req, res, parsedUrl)=>{
            var _this_nextConfig_experimental_logging, _this_nextConfig_experimental_logging1;
            const normalizedReq = this.normalizeReq(req);
            const normalizedRes = this.normalizeRes(res);
            const enabledVerboseLogging = ((_this_nextConfig_experimental_logging = this.nextConfig.experimental.logging) == null ? void 0 : _this_nextConfig_experimental_logging.level) === "verbose";
            const shouldTruncateUrl = !((_this_nextConfig_experimental_logging1 = this.nextConfig.experimental.logging) == null ? void 0 : _this_nextConfig_experimental_logging1.fullUrl);
            if (this.renderOpts.dev) {
                const chalk = require("next/dist/compiled/chalk");
                const _req = req;
                const _res = res;
                const origReq = "originalRequest" in _req ? _req.originalRequest : _req;
                const origRes = "originalResponse" in _res ? _res.originalResponse : _res;
                const reqStart = Date.now();
                const reqCallback = ()=>{
                    // if we already logged in a render worker
                    // don't log again in the router worker.
                    // we also don't log for middleware alone
                    if (normalizedReq.didInvokePath || origReq.headers["x-middleware-invoke"]) {
                        return;
                    }
                    const reqEnd = Date.now();
                    const fetchMetrics = normalizedReq.fetchMetrics || [];
                    const reqDuration = reqEnd - reqStart;
                    const getDurationStr = (duration)=>{
                        let durationStr = duration.toString();
                        if (duration < 500) {
                            durationStr = chalk.green(duration + "ms");
                        } else if (duration < 2000) {
                            durationStr = chalk.yellow(duration + "ms");
                        } else {
                            durationStr = chalk.red(duration + "ms");
                        }
                        return durationStr;
                    };
                    if (Array.isArray(fetchMetrics) && fetchMetrics.length) {
                        if (enabledVerboseLogging) {
                            writeStdoutLine(`${chalk.white.bold(req.method || "GET")} ${req.url} ${res.statusCode} in ${getDurationStr(reqDuration)}`);
                        }
                        const calcNestedLevel = (prevMetrics, start)=>{
                            let nestedLevel = 0;
                            for(let i = 0; i < prevMetrics.length; i++){
                                const metric = prevMetrics[i];
                                const prevMetric = prevMetrics[i - 1];
                                if (metric.end <= start && !(prevMetric && prevMetric.start < metric.end)) {
                                    nestedLevel += 1;
                                }
                            }
                            return `${"  │ ".repeat(nestedLevel)}`;
                        };
                        for(let i = 0; i < fetchMetrics.length; i++){
                            const metric = fetchMetrics[i];
                            let { cacheStatus, cacheReason } = metric;
                            let cacheReasonStr = "";
                            const duration = metric.end - metric.start;
                            if (cacheStatus === "hit") {
                                cacheStatus = chalk.green("HIT");
                            } else if (cacheStatus === "skip") {
                                cacheStatus = `${chalk.yellow("SKIP")}`;
                                cacheReasonStr = `${chalk.grey(`Cache missed reason: (${chalk.white(cacheReason)})`)}`;
                            } else {
                                cacheStatus = chalk.yellow("MISS");
                            }
                            let url = metric.url;
                            if (url.length > 48) {
                                const parsed = new URL(url);
                                const truncatedHost = formatRequestUrl(parsed.host, shouldTruncateUrl ? 16 : undefined);
                                const truncatedPath = formatRequestUrl(parsed.pathname, shouldTruncateUrl ? 24 : undefined);
                                const truncatedSearch = formatRequestUrl(parsed.search, shouldTruncateUrl ? 16 : undefined);
                                url = parsed.protocol + "//" + truncatedHost + truncatedPath + truncatedSearch;
                            }
                            if (enabledVerboseLogging) {
                                const newLineLeadingChar = "│";
                                const nestedIndent = calcNestedLevel(fetchMetrics.slice(0, i), metric.start);
                                writeStdoutLine(`${`${newLineLeadingChar}${nestedIndent}${i === 0 ? " " : ""}${chalk.white.bold(metric.method)} ${chalk.grey(url)} ${metric.status} in ${getDurationStr(duration)} (cache: ${cacheStatus})`}`);
                                if (cacheReasonStr) {
                                    const nextNestedIndent = calcNestedLevel(fetchMetrics.slice(0, i + 1), metric.start);
                                    writeStdoutLine(newLineLeadingChar + nextNestedIndent + (i > 0 ? " " : "  ") + newLineLeadingChar + "  " + cacheReasonStr);
                                }
                            }
                        }
                    } else {
                        if (enabledVerboseLogging) {
                            writeStdoutLine(`${chalk.white.bold(req.method || "GET")} ${req.url} ${res.statusCode} in ${getDurationStr(reqDuration)}`);
                        }
                    }
                    origRes.off("close", reqCallback);
                };
                origRes.on("close", reqCallback);
            }
            return handler(normalizedReq, normalizedRes, parsedUrl);
        };
    }
    async revalidate({ urlPath, revalidateHeaders, opts }) {
        const mocked = createRequestResponseMocks({
            url: urlPath,
            headers: revalidateHeaders
        });
        const handler = this.getRequestHandler();
        await handler(new NodeNextRequest(mocked.req), new NodeNextResponse(mocked.res));
        await mocked.res.hasStreamed;
        if (mocked.res.getHeader("x-nextjs-cache") !== "REVALIDATED" && !(mocked.res.statusCode === 404 && opts.unstable_onlyGenerated)) {
            throw new Error(`Invalid response ${mocked.res.statusCode}`);
        }
    }
    async render(req, res, pathname, query, parsedUrl, internal = false) {
        return super.render(this.normalizeReq(req), this.normalizeRes(res), pathname, query, parsedUrl, internal);
    }
    async renderToHTML(req, res, pathname, query) {
        return super.renderToHTML(this.normalizeReq(req), this.normalizeRes(res), pathname, query);
    }
    async renderErrorToResponseImpl(ctx, err) {
        const { req, res, query } = ctx;
        const is404 = res.statusCode === 404;
        if (is404 && this.hasAppDir && this.isRenderWorker) {
            const notFoundPathname = this.renderOpts.dev ? "/not-found" : "/_not-found";
            if (this.renderOpts.dev) {
                await this.ensurePage({
                    page: notFoundPathname,
                    clientOnly: false
                }).catch(()=>{});
            }
            if (this.getEdgeFunctionsPages().includes(notFoundPathname)) {
                await this.runEdgeFunction({
                    req: req,
                    res: res,
                    query: query || {},
                    params: {},
                    page: notFoundPathname,
                    appPaths: null
                });
                return null;
            }
        }
        return super.renderErrorToResponseImpl(ctx, err);
    }
    async renderError(err, req, res, pathname, query, setHeaders) {
        return super.renderError(err, this.normalizeReq(req), this.normalizeRes(res), pathname, query, setHeaders);
    }
    async renderErrorToHTML(err, req, res, pathname, query) {
        return super.renderErrorToHTML(err, this.normalizeReq(req), this.normalizeRes(res), pathname, query);
    }
    async render404(req, res, parsedUrl, setHeaders) {
        return super.render404(this.normalizeReq(req), this.normalizeRes(res), parsedUrl, setHeaders);
    }
    getMiddlewareManifest() {
        if (this.minimalMode) return null;
        const manifest = require(this.middlewareManifestPath);
        return manifest;
    }
    /** Returns the middleware routing item if there is one. */ getMiddleware() {
        var _manifest_middleware;
        const manifest = this.getMiddlewareManifest();
        const middleware = manifest == null ? void 0 : (_manifest_middleware = manifest.middleware) == null ? void 0 : _manifest_middleware["/"];
        if (!middleware) {
            return;
        }
        return {
            match: getMiddlewareMatcher(middleware),
            page: "/"
        };
    }
    getEdgeFunctionsPages() {
        const manifest = this.getMiddlewareManifest();
        if (!manifest) {
            return [];
        }
        return Object.keys(manifest.functions);
    }
    /**
   * Get information for the edge function located in the provided page
   * folder. If the edge function info can't be found it will throw
   * an error.
   */ getEdgeFunctionInfo(params) {
        const manifest = this.getMiddlewareManifest();
        if (!manifest) {
            return null;
        }
        let foundPage;
        try {
            foundPage = denormalizePagePath(normalizePagePath(params.page));
        } catch (err) {
            return null;
        }
        let pageInfo = params.middleware ? manifest.middleware[foundPage] : manifest.functions[foundPage];
        if (!pageInfo) {
            if (!params.middleware) {
                throw new PageNotFoundError(foundPage);
            }
            return null;
        }
        return {
            name: pageInfo.name,
            paths: pageInfo.files.map((file)=>join(this.distDir, file)),
            wasm: (pageInfo.wasm ?? []).map((binding)=>({
                    ...binding,
                    filePath: join(this.distDir, binding.filePath)
                })),
            assets: (pageInfo.assets ?? []).map((binding)=>{
                return {
                    ...binding,
                    filePath: join(this.distDir, binding.filePath)
                };
            })
        };
    }
    /**
   * Checks if a middleware exists. This method is useful for the development
   * server where we need to check the filesystem. Here we just check the
   * middleware manifest.
   */ async hasMiddleware(pathname) {
        const info = this.getEdgeFunctionInfo({
            page: pathname,
            middleware: true
        });
        return Boolean(info && info.paths.length > 0);
    }
    /**
   * A placeholder for a function to be defined in the development server.
   * It will make sure that the root middleware or an edge function has been compiled
   * so that we can run it.
   */ async ensureMiddleware() {}
    async ensureEdgeFunction(_params) {}
    /**
   * This method gets all middleware matchers and execute them when the request
   * matches. It will make sure that each middleware exists and is compiled and
   * ready to be invoked. The development server will decorate it to add warns
   * and errors with rich traces.
   */ async runMiddleware(params) {
        if (process.env.NEXT_MINIMAL) {
            throw new Error("invariant: runMiddleware should not be called in minimal mode");
        }
        // Middleware is skipped for on-demand revalidate requests
        if (checkIsOnDemandRevalidate(params.request, this.renderOpts.previewProps).isOnDemandRevalidate) {
            return {
                response: new Response(null, {
                    headers: {
                        "x-middleware-next": "1"
                    }
                })
            };
        }
        let url;
        if (this.nextConfig.skipMiddlewareUrlNormalize) {
            url = getRequestMeta(params.request, "__NEXT_INIT_URL");
        } else {
            // For middleware to "fetch" we must always provide an absolute URL
            const query = urlQueryToSearchParams(params.parsed.query).toString();
            const locale = params.parsed.query.__nextLocale;
            url = `${getRequestMeta(params.request, "_protocol")}://${this.fetchHostname || "localhost"}:${this.port}${locale ? `/${locale}` : ""}${params.parsed.pathname}${query ? `?${query}` : ""}`;
        }
        if (!url.startsWith("http")) {
            throw new Error("To use middleware you must provide a `hostname` and `port` to the Next.js Server");
        }
        const page = {};
        const middleware = this.getMiddleware();
        if (!middleware) {
            return {
                finished: false
            };
        }
        if (!await this.hasMiddleware(middleware.page)) {
            return {
                finished: false
            };
        }
        await this.ensureMiddleware();
        const middlewareInfo = this.getEdgeFunctionInfo({
            page: middleware.page,
            middleware: true
        });
        if (!middlewareInfo) {
            throw new MiddlewareNotFoundError();
        }
        const method = (params.request.method || "GET").toUpperCase();
        const { run } = require("./web/sandbox");
        const result = await run({
            distDir: this.distDir,
            name: middlewareInfo.name,
            paths: middlewareInfo.paths,
            edgeFunctionEntry: middlewareInfo,
            request: {
                headers: params.request.headers,
                method,
                nextConfig: {
                    basePath: this.nextConfig.basePath,
                    i18n: this.nextConfig.i18n,
                    trailingSlash: this.nextConfig.trailingSlash
                },
                url: url,
                page,
                body: getRequestMeta(params.request, "__NEXT_CLONABLE_BODY"),
                signal: signalFromNodeResponse(params.response.originalResponse)
            },
            useCache: true,
            onWarning: params.onWarning
        });
        if (!this.renderOpts.dev) {
            result.waitUntil.catch((error)=>{
                console.error(`Uncaught: middleware waitUntil errored`, error);
            });
        }
        if (!result) {
            this.render404(params.request, params.response, params.parsed);
            return {
                finished: true
            };
        }
        for (let [key, value] of result.response.headers){
            if (key.toLowerCase() !== "set-cookie") continue;
            // Clear existing header.
            result.response.headers.delete(key);
            // Append each cookie individually.
            const cookies = splitCookiesString(value);
            for (const cookie of cookies){
                result.response.headers.append(key, cookie);
            }
            // Add cookies to request meta.
            addRequestMeta(params.request, "_nextMiddlewareCookie", cookies);
        }
        return result;
    }
    async handleCatchallMiddlewareRequest(req, res, parsed) {
        const isMiddlewareInvoke = this.isRenderWorker && req.headers["x-middleware-invoke"];
        const handleFinished = (finished = false)=>{
            if (isMiddlewareInvoke && !finished) {
                res.setHeader("x-middleware-invoke", "1");
                res.body("").send();
                return {
                    finished: true
                };
            }
            return {
                finished
            };
        };
        if (this.isRenderWorker && !isMiddlewareInvoke) {
            return {
                finished: false
            };
        }
        const middleware = this.getMiddleware();
        if (!middleware) {
            return handleFinished();
        }
        const initUrl = getRequestMeta(req, "__NEXT_INIT_URL");
        const parsedUrl = parseUrl(initUrl);
        const pathnameInfo = getNextPathnameInfo(parsedUrl.pathname, {
            nextConfig: this.nextConfig,
            i18nProvider: this.i18nProvider
        });
        parsedUrl.pathname = pathnameInfo.pathname;
        const normalizedPathname = removeTrailingSlash(parsed.pathname || "");
        if (!middleware.match(normalizedPathname, req, parsedUrl.query)) {
            return handleFinished();
        }
        let result;
        let bubblingResult = false;
        for (const key of INTERNAL_HEADERS){
            delete req.headers[key];
        }
        // Strip the internal headers.
        this.stripInternalHeaders(req);
        try {
            await this.ensureMiddleware();
            result = await this.runMiddleware({
                request: req,
                response: res,
                parsedUrl: parsedUrl,
                parsed: parsed
            });
            if ("response" in result) {
                if (isMiddlewareInvoke) {
                    bubblingResult = true;
                    const err = new Error();
                    err.result = result;
                    err.bubble = true;
                    throw err;
                }
                for (const [key, value] of Object.entries(toNodeOutgoingHttpHeaders(result.response.headers))){
                    if (key !== "content-encoding" && value !== undefined) {
                        res.setHeader(key, value);
                    }
                }
                res.statusCode = result.response.status;
                const { originalResponse } = res;
                if (result.response.body) {
                    await pipeReadable(result.response.body, originalResponse);
                } else {
                    originalResponse.end();
                }
                return {
                    finished: true
                };
            }
        } catch (err) {
            if (bubblingResult) {
                throw err;
            }
            if (isError(err) && err.code === "ENOENT") {
                await this.render404(req, res, parsed);
                return {
                    finished: true
                };
            }
            if (err instanceof DecodeError) {
                res.statusCode = 400;
                await this.renderError(err, req, res, parsed.pathname || "");
                return {
                    finished: true
                };
            }
            const error = getProperError(err);
            console.error(error);
            res.statusCode = 500;
            await this.renderError(error, req, res, parsed.pathname || "");
            return {
                finished: true
            };
        }
        if ("finished" in result) {
            return result;
        }
        return {
            finished: false
        };
    }
    getPrerenderManifest() {
        var _this_renderOpts, _this_serverOptions, _this_renderWorkerOpts;
        if (this._cachedPreviewManifest) {
            return this._cachedPreviewManifest;
        }
        if (((_this_renderOpts = this.renderOpts) == null ? void 0 : _this_renderOpts.dev) || ((_this_serverOptions = this.serverOptions) == null ? void 0 : _this_serverOptions.dev) || ((_this_renderWorkerOpts = this.renderWorkerOpts) == null ? void 0 : _this_renderWorkerOpts.dev) || process.env.NODE_ENV === "development" || process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
            this._cachedPreviewManifest = {
                version: 4,
                routes: {},
                dynamicRoutes: {},
                notFoundRoutes: [],
                preview: {
                    previewModeId: require("crypto").randomBytes(16).toString("hex"),
                    previewModeSigningKey: require("crypto").randomBytes(32).toString("hex"),
                    previewModeEncryptionKey: require("crypto").randomBytes(32).toString("hex")
                }
            };
            return this._cachedPreviewManifest;
        }
        const manifest = loadManifest(join(this.distDir, PRERENDER_MANIFEST));
        return this._cachedPreviewManifest = manifest;
    }
    getRoutesManifest() {
        return getTracer().trace(NextNodeServerSpan.getRoutesManifest, ()=>{
            const manifest = loadManifest(join(this.distDir, ROUTES_MANIFEST));
            let rewrites = manifest.rewrites ?? {
                beforeFiles: [],
                afterFiles: [],
                fallback: []
            };
            if (Array.isArray(rewrites)) {
                rewrites = {
                    beforeFiles: [],
                    afterFiles: rewrites,
                    fallback: []
                };
            }
            return {
                ...manifest,
                rewrites
            };
        });
    }
    attachRequestMeta(req, parsedUrl, isUpgradeReq) {
        var _this, _req_originalRequest, _req_headers_xforwardedproto;
        const protocol = ((_this = (_req_originalRequest = req.originalRequest) == null ? void 0 : _req_originalRequest.socket) == null ? void 0 : _this.encrypted) || ((_req_headers_xforwardedproto = req.headers["x-forwarded-proto"]) == null ? void 0 : _req_headers_xforwardedproto.includes("https")) ? "https" : "http";
        // When there are hostname and port we build an absolute URL
        const initUrl = this.fetchHostname && this.port ? `${protocol}://${this.fetchHostname}:${this.port}${req.url}` : this.nextConfig.experimental.trustHostHeader ? `https://${req.headers.host || "localhost"}${req.url}` : req.url;
        addRequestMeta(req, "__NEXT_INIT_URL", initUrl);
        addRequestMeta(req, "__NEXT_INIT_QUERY", {
            ...parsedUrl.query
        });
        addRequestMeta(req, "_protocol", protocol);
        if (!isUpgradeReq) {
            addRequestMeta(req, "__NEXT_CLONABLE_BODY", getCloneableBody(req.body));
        }
    }
    async runEdgeFunction(params) {
        if (process.env.NEXT_MINIMAL) {
            throw new Error("Middleware is not supported in minimal mode. Please remove the `NEXT_MINIMAL` environment variable.");
        }
        let edgeInfo;
        const { query, page, match } = params;
        if (!match) await this.ensureEdgeFunction({
            page,
            appPaths: params.appPaths
        });
        edgeInfo = this.getEdgeFunctionInfo({
            page,
            middleware: false
        });
        if (!edgeInfo) {
            return null;
        }
        // For edge to "fetch" we must always provide an absolute URL
        const isDataReq = !!query.__nextDataReq;
        const initialUrl = new URL(getRequestMeta(params.req, "__NEXT_INIT_URL") || "/", "http://n");
        const queryString = urlQueryToSearchParams({
            ...Object.fromEntries(initialUrl.searchParams),
            ...query,
            ...params.params
        }).toString();
        if (isDataReq) {
            params.req.headers["x-nextjs-data"] = "1";
        }
        initialUrl.search = queryString;
        const url = initialUrl.toString();
        if (!url.startsWith("http")) {
            throw new Error("To use middleware you must provide a `hostname` and `port` to the Next.js Server");
        }
        const { run } = require("./web/sandbox");
        const result = await run({
            distDir: this.distDir,
            name: edgeInfo.name,
            paths: edgeInfo.paths,
            edgeFunctionEntry: edgeInfo,
            request: {
                headers: params.req.headers,
                method: params.req.method,
                nextConfig: {
                    basePath: this.nextConfig.basePath,
                    i18n: this.nextConfig.i18n,
                    trailingSlash: this.nextConfig.trailingSlash
                },
                url,
                page: {
                    name: params.page,
                    ...params.params && {
                        params: params.params
                    }
                },
                body: getRequestMeta(params.req, "__NEXT_CLONABLE_BODY"),
                signal: signalFromNodeResponse(params.res.originalResponse)
            },
            useCache: true,
            onWarning: params.onWarning,
            incrementalCache: globalThis.__incrementalCache || getRequestMeta(params.req, "_nextIncrementalCache")
        });
        if (!params.res.statusCode || params.res.statusCode < 400) {
            params.res.statusCode = result.response.status;
            params.res.statusMessage = result.response.statusText;
        }
        // TODO: (wyattjoh) investigate improving this
        result.response.headers.forEach((value, key)=>{
            // The append handling is special cased for `set-cookie`.
            if (key.toLowerCase() === "set-cookie") {
                // TODO: (wyattjoh) replace with native response iteration when we can upgrade undici
                for (const cookie of splitCookiesString(value)){
                    params.res.appendHeader(key, cookie);
                }
            } else {
                params.res.appendHeader(key, value);
            }
        });
        const nodeResStream = params.res.originalResponse;
        if (result.response.body) {
            await pipeReadable(result.response.body, nodeResStream);
        } else {
            nodeResStream.end();
        }
        return result;
    }
    get serverDistDir() {
        if (this._serverDistDir) {
            return this._serverDistDir;
        }
        const serverDistDir = join(this.distDir, SERVER_DIRECTORY);
        this._serverDistDir = serverDistDir;
        return serverDistDir;
    }
    async getFallbackErrorComponents() {
        // Not implemented for production use cases, this is implemented on the
        // development server.
        return null;
    }
}

//# sourceMappingURL=next-server.js.map