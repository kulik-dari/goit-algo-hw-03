"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NoFallbackError: null,
    WrappedBuildError: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NoFallbackError: function() {
        return NoFallbackError;
    },
    WrappedBuildError: function() {
        return WrappedBuildError;
    },
    default: function() {
        return Server;
    }
});
const _utils = require("../shared/lib/utils");
const _url = require("url");
const _formathostname = require("./lib/format-hostname");
const _redirectstatus = require("../lib/redirect-status");
const _isedgeruntime = require("../lib/is-edge-runtime");
const _constants = require("../shared/lib/constants");
const _utils1 = require("../shared/lib/router/utils");
const _apiutils = require("./api-utils");
const _runtimeconfigexternal = require("../shared/lib/runtime-config.external");
const _revalidateheaders = require("./send-payload/revalidate-headers");
const _utils2 = require("./utils");
const _isbot = require("../shared/lib/router/utils/is-bot");
const _renderresult = /*#__PURE__*/ _interop_require_default(require("./render-result"));
const _removetrailingslash = require("../shared/lib/router/utils/remove-trailing-slash");
const _denormalizepagepath = require("../shared/lib/page-path/denormalize-page-path");
const _log = /*#__PURE__*/ _interop_require_wildcard(require("../build/output/log"));
const _escapepathdelimiters = /*#__PURE__*/ _interop_require_default(require("../shared/lib/router/utils/escape-path-delimiters"));
const _serverutils = require("./server-utils");
const _iserror = /*#__PURE__*/ _interop_require_wildcard(require("../lib/is-error"));
const _requestmeta = require("./request-meta");
const _removepathprefix = require("../shared/lib/router/utils/remove-path-prefix");
const _apppaths = require("../shared/lib/router/utils/app-paths");
const _gethostname = require("../shared/lib/get-hostname");
const _parseurl = require("../shared/lib/router/utils/parse-url");
const _getnextpathnameinfo = require("../shared/lib/router/utils/get-next-pathname-info");
const _approuterheaders = require("../client/components/app-router-headers");
const _localeroutenormalizer = require("./future/normalizers/locale-route-normalizer");
const _defaultroutematchermanager = require("./future/route-matcher-managers/default-route-matcher-manager");
const _apppageroutematcherprovider = require("./future/route-matcher-providers/app-page-route-matcher-provider");
const _approuteroutematcherprovider = require("./future/route-matcher-providers/app-route-route-matcher-provider");
const _pagesapiroutematcherprovider = require("./future/route-matcher-providers/pages-api-route-matcher-provider");
const _pagesroutematcherprovider = require("./future/route-matcher-providers/pages-route-matcher-provider");
const _servermanifestloader = require("./future/route-matcher-providers/helpers/manifest-loaders/server-manifest-loader");
const _tracer = require("./lib/trace/tracer");
const _constants1 = require("./lib/trace/constants");
const _i18nprovider = require("./future/helpers/i18n-provider");
const _sendresponse = require("./send-response");
const _routekind = require("./future/route-kind");
const _responsehandlers = require("./future/route-modules/helpers/response-handlers");
const _utils3 = require("./web/utils");
const _constants2 = require("../lib/constants");
const _normalizelocalepath = require("../shared/lib/i18n/normalize-locale-path");
const _nextrequest = require("./web/spec-extension/adapters/next-request");
const _matchnextdatapathname = require("./lib/match-next-data-pathname");
const _getroutefromassetpath = /*#__PURE__*/ _interop_require_default(require("../shared/lib/router/utils/get-route-from-asset-path"));
const _internalutils = require("./internal-utils");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
class NoFallbackError extends Error {
}
class WrappedBuildError extends Error {
    constructor(innerError){
        super();
        this.innerError = innerError;
    }
}
class Server {
    constructor(options){
        var _this_nextConfig_i18n, _this_nextConfig_experimental_amp, _this_nextConfig_i18n1;
        this.prepared = false;
        this.preparedPromise = null;
        this.customErrorNo404Warn = (0, _utils.execOnce)(()=>{
            _log.warn(`You have added a custom /_error page without a custom /404 page. This prevents the 404 page from being auto statically optimized.\nSee here for info: https://nextjs.org/docs/messages/custom-error-no-custom-404`);
        });
        const { dir = ".", quiet = false, conf, dev = false, minimalMode = false, customServer = true, hostname, port } = options;
        this.serverOptions = options;
        this.isRenderWorker = options._renderWorker;
        this.dir = process.env.NEXT_RUNTIME === "edge" ? dir : require("path").resolve(dir);
        this.quiet = quiet;
        this.loadEnvConfig({
            dev
        });
        // TODO: should conf be normalized to prevent missing
        // values from causing issues as this can be user provided
        this.nextConfig = conf;
        this.hostname = hostname;
        if (this.hostname) {
            // we format the hostname so that it can be fetched
            this.fetchHostname = (0, _formathostname.formatHostname)(this.hostname);
        }
        this.port = port;
        this.distDir = process.env.NEXT_RUNTIME === "edge" ? this.nextConfig.distDir : require("path").join(this.dir, this.nextConfig.distDir);
        this.publicDir = this.getPublicDir();
        this.hasStaticDir = !minimalMode && this.getHasStaticDir();
        this.i18nProvider = ((_this_nextConfig_i18n = this.nextConfig.i18n) == null ? void 0 : _this_nextConfig_i18n.locales) ? new _i18nprovider.I18NProvider(this.nextConfig.i18n) : undefined;
        // Configure the locale normalizer, it's used for routes inside `pages/`.
        this.localeNormalizer = this.i18nProvider ? new _localeroutenormalizer.LocaleRouteNormalizer(this.i18nProvider) : undefined;
        // Only serverRuntimeConfig needs the default
        // publicRuntimeConfig gets it's default in client/index.js
        const { serverRuntimeConfig = {}, publicRuntimeConfig, assetPrefix, generateEtags } = this.nextConfig;
        this.buildId = this.getBuildId();
        // this is a hack to avoid Webpack knowing this is equal to this.minimalMode
        // because we replace this.minimalMode to true in production bundles.
        const minimalModeKey = "minimalMode";
        this[minimalModeKey] = minimalMode || !!process.env.NEXT_PRIVATE_MINIMAL_MODE;
        this.hasAppDir = this.getHasAppDir(dev);
        const serverComponents = this.hasAppDir;
        this.nextFontManifest = this.getNextFontManifest();
        if (process.env.NEXT_RUNTIME !== "edge") {
            if (this.nextConfig.experimental.deploymentId) {
                process.env.NEXT_DEPLOYMENT_ID = this.nextConfig.experimental.deploymentId;
            }
        }
        this.renderOpts = {
            deploymentId: this.nextConfig.experimental.deploymentId,
            strictNextHead: !!this.nextConfig.experimental.strictNextHead,
            poweredByHeader: this.nextConfig.poweredByHeader,
            canonicalBase: this.nextConfig.amp.canonicalBase || "",
            buildId: this.buildId,
            generateEtags,
            previewProps: this.getPrerenderManifest().preview,
            customServer: customServer === true ? true : undefined,
            ampOptimizerConfig: (_this_nextConfig_experimental_amp = this.nextConfig.experimental.amp) == null ? void 0 : _this_nextConfig_experimental_amp.optimizer,
            basePath: this.nextConfig.basePath,
            images: this.nextConfig.images,
            optimizeFonts: this.nextConfig.optimizeFonts,
            fontManifest: this.nextConfig.optimizeFonts && !dev ? this.getFontManifest() : undefined,
            optimizeCss: this.nextConfig.experimental.optimizeCss,
            nextConfigOutput: this.nextConfig.output,
            nextScriptWorkers: this.nextConfig.experimental.nextScriptWorkers,
            disableOptimizedLoading: this.nextConfig.experimental.disableOptimizedLoading,
            domainLocales: (_this_nextConfig_i18n1 = this.nextConfig.i18n) == null ? void 0 : _this_nextConfig_i18n1.domains,
            distDir: this.distDir,
            serverComponents,
            crossOrigin: this.nextConfig.crossOrigin ? this.nextConfig.crossOrigin : undefined,
            largePageDataBytes: this.nextConfig.experimental.largePageDataBytes,
            // Only the `publicRuntimeConfig` key is exposed to the client side
            // It'll be rendered as part of __NEXT_DATA__ on the client side
            runtimeConfig: Object.keys(publicRuntimeConfig).length > 0 ? publicRuntimeConfig : undefined
        };
        // Initialize next/config with the environment configuration
        (0, _runtimeconfigexternal.setConfig)({
            serverRuntimeConfig,
            publicRuntimeConfig
        });
        this.pagesManifest = this.getPagesManifest();
        this.appPathsManifest = this.getAppPathsManifest();
        this.appPathRoutes = this.getAppPathRoutes();
        // Configure the routes.
        this.matchers = this.getRouteMatchers();
        // Start route compilation. We don't wait for the routes to finish loading
        // because we use the `waitTillReady` promise below in `handleRequest` to
        // wait. Also we can't `await` in the constructor.
        void this.matchers.reload();
        this.setAssetPrefix(assetPrefix);
        this.responseCache = this.getResponseCache({
            dev
        });
    }
    reloadMatchers() {
        return this.matchers.reload();
    }
    async handleNextDataRequest(req, res, parsedUrl) {
        const middleware = this.getMiddleware();
        const params = (0, _matchnextdatapathname.matchNextDataPathname)(parsedUrl.pathname);
        // ignore for non-next data URLs
        if (!params || !params.path) {
            return {
                finished: false
            };
        }
        if (params.path[0] !== this.buildId) {
            // Ignore if its a middleware request when we aren't on edge.
            if (process.env.NEXT_RUNTIME !== "edge" && req.headers["x-middleware-invoke"]) {
                return {
                    finished: false
                };
            }
            // Make sure to 404 if the buildId isn't correct
            await this.render404(req, res, parsedUrl);
            return {
                finished: true
            };
        }
        // remove buildId from URL
        params.path.shift();
        const lastParam = params.path[params.path.length - 1];
        // show 404 if it doesn't end with .json
        if (typeof lastParam !== "string" || !lastParam.endsWith(".json")) {
            await this.render404(req, res, parsedUrl);
            return {
                finished: true
            };
        }
        // re-create page's pathname
        let pathname = `/${params.path.join("/")}`;
        pathname = (0, _getroutefromassetpath.default)(pathname, ".json");
        // ensure trailing slash is normalized per config
        if (middleware) {
            if (this.nextConfig.trailingSlash && !pathname.endsWith("/")) {
                pathname += "/";
            }
            if (!this.nextConfig.trailingSlash && pathname.length > 1 && pathname.endsWith("/")) {
                pathname = pathname.substring(0, pathname.length - 1);
            }
        }
        if (this.i18nProvider) {
            var _req_headers_host;
            // Remove the port from the hostname if present.
            const hostname = req == null ? void 0 : (_req_headers_host = req.headers.host) == null ? void 0 : _req_headers_host.split(":")[0].toLowerCase();
            const domainLocale = this.i18nProvider.detectDomainLocale(hostname);
            const defaultLocale = (domainLocale == null ? void 0 : domainLocale.defaultLocale) ?? this.i18nProvider.config.defaultLocale;
            const localePathResult = this.i18nProvider.analyze(pathname);
            // If the locale is detected from the path, we need to remove it
            // from the pathname.
            if (localePathResult.detectedLocale) {
                pathname = localePathResult.pathname;
            }
            // Update the query with the detected locale and default locale.
            parsedUrl.query.__nextLocale = localePathResult.detectedLocale;
            parsedUrl.query.__nextDefaultLocale = defaultLocale;
            // If the locale is not detected from the path, we need to mark that
            // it was not inferred from default.
            if (!localePathResult.detectedLocale) {
                delete parsedUrl.query.__nextInferredLocaleFromDefault;
            }
            // If no locale was detected and we don't have middleware, we need
            // to render a 404 page.
            if (!localePathResult.detectedLocale && !middleware) {
                parsedUrl.query.__nextLocale = defaultLocale;
                await this.render404(req, res, parsedUrl);
                return {
                    finished: true
                };
            }
        }
        parsedUrl.pathname = pathname;
        parsedUrl.query.__nextDataReq = "1";
        return {
            finished: false
        };
    }
    async handleNextImageRequest(_req, _res, _parsedUrl) {
        return {
            finished: false
        };
    }
    async handleCatchallRenderRequest(_req, _res, _parsedUrl) {
        return {
            finished: false
        };
    }
    async handleCatchallMiddlewareRequest(_req, _res, _parsedUrl) {
        return {
            finished: false
        };
    }
    getRouteMatchers() {
        // Create a new manifest loader that get's the manifests from the server.
        const manifestLoader = new _servermanifestloader.ServerManifestLoader((name)=>{
            switch(name){
                case _constants.PAGES_MANIFEST:
                    return this.getPagesManifest() ?? null;
                case _constants.APP_PATHS_MANIFEST:
                    return this.getAppPathsManifest() ?? null;
                default:
                    return null;
            }
        });
        // Configure the matchers and handlers.
        const matchers = new _defaultroutematchermanager.DefaultRouteMatcherManager();
        // Match pages under `pages/`.
        matchers.push(new _pagesroutematcherprovider.PagesRouteMatcherProvider(this.distDir, manifestLoader, this.i18nProvider));
        // Match api routes under `pages/api/`.
        matchers.push(new _pagesapiroutematcherprovider.PagesAPIRouteMatcherProvider(this.distDir, manifestLoader, this.i18nProvider));
        // If the app directory is enabled, then add the app matchers and handlers.
        if (this.hasAppDir) {
            // Match app pages under `app/`.
            matchers.push(new _apppageroutematcherprovider.AppPageRouteMatcherProvider(this.distDir, manifestLoader));
            matchers.push(new _approuteroutematcherprovider.AppRouteRouteMatcherProvider(this.distDir, manifestLoader));
        }
        return matchers;
    }
    logError(err) {
        if (this.quiet) return;
        console.error(err);
    }
    async handleRequest(req, res, parsedUrl) {
        await this.prepare();
        const method = req.method.toUpperCase();
        return (0, _tracer.getTracer)().trace(_constants1.BaseServerSpan.handleRequest, {
            spanName: `${method} ${req.url}`,
            kind: _tracer.SpanKind.SERVER,
            attributes: {
                "http.method": method,
                "http.target": req.url
            }
        }, async (span)=>this.handleRequestImpl(req, res, parsedUrl).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    "http.status_code": res.statusCode
                });
                const rootSpanAttributes = (0, _tracer.getTracer)().getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) return;
                if (rootSpanAttributes.get("next.span_type") !== _constants1.BaseServerSpan.handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get("next.route");
                if (route) {
                    const newName = `${method} ${route}`;
                    span.setAttributes({
                        "next.route": route,
                        "http.route": route,
                        "next.span_name": newName
                    });
                    span.updateName(newName);
                }
            }));
    }
    async handleRequestImpl(req, res, parsedUrl) {
        try {
            var _this_i18nProvider, _this_nextConfig_i18n;
            // Wait for the matchers to be ready.
            await this.matchers.waitTillReady();
            // ensure cookies set in middleware are merged and
            // not overridden by API routes/getServerSideProps
            const _res = res.originalResponse || res;
            const origSetHeader = _res.setHeader.bind(_res);
            _res.setHeader = (name, val)=>{
                if (name.toLowerCase() === "set-cookie") {
                    const middlewareValue = (0, _requestmeta.getRequestMeta)(req, "_nextMiddlewareCookie");
                    if (!middlewareValue || !Array.isArray(val) || !val.every((item, idx)=>item === middlewareValue[idx])) {
                        val = [
                            // TODO: (wyattjoh) find out why this is called multiple times resulting in duplicate cookies being added
                            ...new Set([
                                ...middlewareValue || [],
                                ...typeof val === "string" ? [
                                    val
                                ] : Array.isArray(val) ? val : []
                            ])
                        ];
                    }
                }
                return origSetHeader(name, val);
            };
            const urlParts = (req.url || "").split("?");
            const urlNoQuery = urlParts[0];
            // this normalizes repeated slashes in the path e.g. hello//world ->
            // hello/world or backslashes to forward slashes, this does not
            // handle trailing slash as that is handled the same as a next.config.js
            // redirect
            if (urlNoQuery == null ? void 0 : urlNoQuery.match(/(\\|\/\/)/)) {
                const cleanUrl = (0, _utils.normalizeRepeatedSlashes)(req.url);
                res.redirect(cleanUrl, 308).body(cleanUrl).send();
                return;
            }
            // Parse url if parsedUrl not provided
            if (!parsedUrl || typeof parsedUrl !== "object") {
                parsedUrl = (0, _url.parse)(req.url, true);
            }
            // Parse the querystring ourselves if the user doesn't handle querystring parsing
            if (typeof parsedUrl.query === "string") {
                parsedUrl.query = Object.fromEntries(new URLSearchParams(parsedUrl.query));
            }
            // in minimal mode we detect RSC revalidate if the .rsc
            // path is requested
            if (this.minimalMode) {
                if (req.url.endsWith(".rsc")) {
                    parsedUrl.query.__nextDataReq = "1";
                } else if (req.headers["x-now-route-matches"]) {
                    for (const param of _approuterheaders.FLIGHT_PARAMETERS){
                        delete req.headers[param.toString().toLowerCase()];
                    }
                }
            }
            req.url = (0, _apppaths.normalizeRscPath)(req.url, this.hasAppDir);
            parsedUrl.pathname = (0, _apppaths.normalizeRscPath)(parsedUrl.pathname || "", this.hasAppDir);
            this.attachRequestMeta(req, parsedUrl);
            const domainLocale = (_this_i18nProvider = this.i18nProvider) == null ? void 0 : _this_i18nProvider.detectDomainLocale((0, _gethostname.getHostname)(parsedUrl, req.headers));
            const defaultLocale = (domainLocale == null ? void 0 : domainLocale.defaultLocale) || ((_this_nextConfig_i18n = this.nextConfig.i18n) == null ? void 0 : _this_nextConfig_i18n.defaultLocale);
            parsedUrl.query.__nextDefaultLocale = defaultLocale;
            const url = (0, _parseurl.parseUrl)(req.url.replace(/^\/+/, "/"));
            const pathnameInfo = (0, _getnextpathnameinfo.getNextPathnameInfo)(url.pathname, {
                nextConfig: this.nextConfig,
                i18nProvider: this.i18nProvider
            });
            url.pathname = pathnameInfo.pathname;
            if (pathnameInfo.basePath) {
                req.url = (0, _removepathprefix.removePathPrefix)(req.url, this.nextConfig.basePath);
                (0, _requestmeta.addRequestMeta)(req, "_nextHadBasePath", true);
            }
            const useMatchedPathHeader = this.minimalMode && typeof req.headers["x-matched-path"] === "string";
            // TODO: merge handling with x-invoke-path
            if (useMatchedPathHeader) {
                try {
                    var _this_i18nProvider1, _this_getRoutesManifest;
                    if (this.hasAppDir) {
                        // ensure /index path is normalized for prerender
                        // in minimal mode
                        if (req.url.match(/^\/index($|\?)/)) {
                            req.url = req.url.replace(/^\/index/, "/");
                        }
                        parsedUrl.pathname = parsedUrl.pathname === "/index" ? "/" : parsedUrl.pathname;
                    }
                    // x-matched-path is the source of truth, it tells what page
                    // should be rendered because we don't process rewrites in minimalMode
                    let matchedPath = (0, _apppaths.normalizeRscPath)(new URL(req.headers["x-matched-path"], "http://localhost").pathname, this.hasAppDir);
                    let urlPathname = new URL(req.url, "http://localhost").pathname;
                    // For ISR  the URL is normalized to the prerenderPath so if
                    // it's a data request the URL path will be the data URL,
                    // basePath is already stripped by this point
                    if (urlPathname.startsWith(`/_next/data/`)) {
                        parsedUrl.query.__nextDataReq = "1";
                    }
                    const normalizedUrlPath = this.stripNextDataPath(urlPathname);
                    matchedPath = this.stripNextDataPath(matchedPath, false);
                    // Perform locale detection and normalization.
                    const localeAnalysisResult = (_this_i18nProvider1 = this.i18nProvider) == null ? void 0 : _this_i18nProvider1.analyze(matchedPath, {
                        defaultLocale
                    });
                    // The locale result will be defined even if the locale was not
                    // detected for the request because it will be inferred from the
                    // default locale.
                    if (localeAnalysisResult) {
                        parsedUrl.query.__nextLocale = localeAnalysisResult.detectedLocale;
                        // If the detected locale was inferred from the default locale, we
                        // need to modify the metadata on the request to indicate that.
                        if (localeAnalysisResult.inferredFromDefault) {
                            parsedUrl.query.__nextInferredLocaleFromDefault = "1";
                        } else {
                            delete parsedUrl.query.__nextInferredLocaleFromDefault;
                        }
                    }
                    // TODO: check if this is needed any more?
                    matchedPath = (0, _denormalizepagepath.denormalizePagePath)(matchedPath);
                    let srcPathname = matchedPath;
                    const match = await this.matchers.match(matchedPath, {
                        i18n: localeAnalysisResult
                    });
                    // Update the source pathname to the matched page's pathname.
                    if (match) srcPathname = match.definition.pathname;
                    // The page is dynamic if the params are defined.
                    const pageIsDynamic = typeof (match == null ? void 0 : match.params) !== "undefined";
                    // The rest of this function can't handle i18n properly, so ensure we
                    // restore the pathname with the locale information stripped from it
                    // now that we're done matching if we're using i18n.
                    if (localeAnalysisResult) {
                        matchedPath = localeAnalysisResult.pathname;
                    }
                    const utils = (0, _serverutils.getUtils)({
                        pageIsDynamic,
                        page: srcPathname,
                        i18n: this.nextConfig.i18n,
                        basePath: this.nextConfig.basePath,
                        rewrites: ((_this_getRoutesManifest = this.getRoutesManifest()) == null ? void 0 : _this_getRoutesManifest.rewrites) || {
                            beforeFiles: [],
                            afterFiles: [],
                            fallback: []
                        },
                        caseSensitive: !!this.nextConfig.experimental.caseSensitiveRoutes
                    });
                    // Ensure parsedUrl.pathname includes locale before processing
                    // rewrites or they won't match correctly.
                    if (defaultLocale && !pathnameInfo.locale) {
                        parsedUrl.pathname = `/${defaultLocale}${parsedUrl.pathname}`;
                    }
                    const pathnameBeforeRewrite = parsedUrl.pathname;
                    const rewriteParams = utils.handleRewrites(req, parsedUrl);
                    const rewriteParamKeys = Object.keys(rewriteParams);
                    const didRewrite = pathnameBeforeRewrite !== parsedUrl.pathname;
                    if (didRewrite) {
                        (0, _requestmeta.addRequestMeta)(req, "_nextRewroteUrl", parsedUrl.pathname);
                        (0, _requestmeta.addRequestMeta)(req, "_nextDidRewrite", true);
                    }
                    const routeParamKeys = new Set();
                    for (const key of Object.keys(parsedUrl.query)){
                        const value = parsedUrl.query[key];
                        if (key !== _constants2.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants2.NEXT_QUERY_PARAM_PREFIX)) {
                            const normalizedKey = key.substring(_constants2.NEXT_QUERY_PARAM_PREFIX.length);
                            parsedUrl.query[normalizedKey] = value;
                            routeParamKeys.add(normalizedKey);
                            delete parsedUrl.query[key];
                        }
                    }
                    // interpolate dynamic params and normalize URL if needed
                    if (pageIsDynamic) {
                        let params = {};
                        let paramsResult = utils.normalizeDynamicRouteParams(parsedUrl.query);
                        // for prerendered ISR paths we attempt parsing the route
                        // params from the URL directly as route-matches may not
                        // contain the correct values due to the filesystem path
                        // matching before the dynamic route has been matched
                        if (!paramsResult.hasValidParams && pageIsDynamic && !(0, _utils1.isDynamicRoute)(normalizedUrlPath)) {
                            let matcherParams = utils.dynamicRouteMatcher == null ? void 0 : utils.dynamicRouteMatcher.call(utils, normalizedUrlPath);
                            if (matcherParams) {
                                utils.normalizeDynamicRouteParams(matcherParams);
                                Object.assign(paramsResult.params, matcherParams);
                                paramsResult.hasValidParams = true;
                            }
                        }
                        if (paramsResult.hasValidParams) {
                            params = paramsResult.params;
                        }
                        if (req.headers["x-now-route-matches"] && (0, _utils1.isDynamicRoute)(matchedPath) && !paramsResult.hasValidParams) {
                            const opts = {};
                            const routeParams = utils.getParamsFromRouteMatches(req, opts, parsedUrl.query.__nextLocale || "");
                            // If this returns a locale, it means that the locale was detected
                            // from the pathname.
                            if (opts.locale) {
                                parsedUrl.query.__nextLocale = opts.locale;
                                // As the locale was parsed from the pathname, we should mark
                                // that the locale was not inferred as the default.
                                delete parsedUrl.query.__nextInferredLocaleFromDefault;
                            }
                            paramsResult = utils.normalizeDynamicRouteParams(routeParams, true);
                            if (paramsResult.hasValidParams) {
                                params = paramsResult.params;
                            }
                        }
                        // handle the actual dynamic route name being requested
                        if (pageIsDynamic && utils.defaultRouteMatches && normalizedUrlPath === srcPathname && !paramsResult.hasValidParams && !utils.normalizeDynamicRouteParams({
                            ...params
                        }, true).hasValidParams) {
                            params = utils.defaultRouteMatches;
                        }
                        if (params) {
                            matchedPath = utils.interpolateDynamicPath(srcPathname, params);
                            req.url = utils.interpolateDynamicPath(req.url, params);
                        }
                    }
                    if (pageIsDynamic || didRewrite) {
                        var _utils_defaultRouteRegex;
                        utils.normalizeVercelUrl(req, true, [
                            ...rewriteParamKeys,
                            ...Object.keys(((_utils_defaultRouteRegex = utils.defaultRouteRegex) == null ? void 0 : _utils_defaultRouteRegex.groups) || {})
                        ]);
                    }
                    for (const key of routeParamKeys){
                        delete parsedUrl.query[key];
                    }
                    parsedUrl.pathname = matchedPath;
                    url.pathname = parsedUrl.pathname;
                    const normalizeResult = await this.handleNextDataRequest(req, res, parsedUrl);
                    if (normalizeResult.finished) {
                        return;
                    }
                } catch (err) {
                    if (err instanceof _utils.DecodeError || err instanceof _utils.NormalizeError) {
                        res.statusCode = 400;
                        return this.renderError(null, req, res, "/_error", {});
                    }
                    throw err;
                }
            }
            if (// Edge runtime always has minimal mode enabled.
            process.env.NEXT_RUNTIME !== "edge" && !this.minimalMode && defaultLocale) {
                const { getLocaleRedirect } = require("../shared/lib/i18n/get-locale-redirect");
                const redirect = getLocaleRedirect({
                    defaultLocale,
                    domainLocale,
                    headers: req.headers,
                    nextConfig: this.nextConfig,
                    pathLocale: pathnameInfo.locale,
                    urlParsed: {
                        ...url,
                        pathname: pathnameInfo.locale ? `/${pathnameInfo.locale}${url.pathname}` : url.pathname
                    }
                });
                if (redirect) {
                    return res.redirect(redirect, _constants.TEMPORARY_REDIRECT_STATUS).body(redirect).send();
                }
            }
            (0, _requestmeta.addRequestMeta)(req, "__nextIsLocaleDomain", Boolean(domainLocale));
            if (pathnameInfo.locale) {
                req.url = (0, _url.format)(url);
                (0, _requestmeta.addRequestMeta)(req, "__nextStrippedLocale", true);
            }
            // If we aren't in minimal mode or there is no locale in the query
            // string, add the locale to the query string.
            if (!this.minimalMode || !parsedUrl.query.__nextLocale) {
                // If the locale is in the pathname, add it to the query string.
                if (pathnameInfo.locale) {
                    parsedUrl.query.__nextLocale = pathnameInfo.locale;
                } else if (defaultLocale) {
                    parsedUrl.query.__nextLocale = defaultLocale;
                    parsedUrl.query.__nextInferredLocaleFromDefault = "1";
                }
            }
            // set incremental cache to request meta so it can
            // be passed down for edge functions and the fetch disk
            // cache can be leveraged locally
            if (!this.serverOptions.webServerConfig && !(0, _requestmeta.getRequestMeta)(req, "_nextIncrementalCache")) {
                let protocol = "https:";
                try {
                    const parsedFullUrl = new URL((0, _requestmeta.getRequestMeta)(req, "__NEXT_INIT_URL") || "/", "http://n");
                    protocol = parsedFullUrl.protocol;
                } catch  {}
                const incrementalCache = this.getIncrementalCache({
                    requestHeaders: Object.assign({}, req.headers),
                    requestProtocol: protocol.substring(0, protocol.length - 1)
                });
                (0, _requestmeta.addRequestMeta)(req, "_nextIncrementalCache", incrementalCache);
                globalThis.__incrementalCache = incrementalCache;
            }
            // when x-invoke-path is specified we can short short circuit resolving
            // we only honor this header if we are inside of a render worker to
            // prevent external users coercing the routing path
            const invokePath = req.headers["x-invoke-path"];
            const useInvokePath = !useMatchedPathHeader && process.env.NEXT_RUNTIME !== "edge" && invokePath;
            if (useInvokePath) {
                var _this_nextConfig_i18n1;
                if (req.headers["x-invoke-status"]) {
                    const invokeQuery = req.headers["x-invoke-query"];
                    if (typeof invokeQuery === "string") {
                        Object.assign(parsedUrl.query, JSON.parse(decodeURIComponent(invokeQuery)));
                    }
                    res.statusCode = Number(req.headers["x-invoke-status"]);
                    let err = null;
                    if (typeof req.headers["x-invoke-error"] === "string") {
                        const invokeError = JSON.parse(req.headers["x-invoke-error"] || "{}");
                        err = new Error(invokeError.message);
                    }
                    return this.renderError(err, req, res, "/_error", parsedUrl.query);
                }
                const parsedMatchedPath = new URL(invokePath || "/", "http://n");
                const invokePathnameInfo = (0, _getnextpathnameinfo.getNextPathnameInfo)(parsedMatchedPath.pathname, {
                    nextConfig: this.nextConfig,
                    parseData: false
                });
                if (invokePathnameInfo.locale) {
                    parsedUrl.query.__nextLocale = invokePathnameInfo.locale;
                }
                if (parsedUrl.pathname !== parsedMatchedPath.pathname) {
                    parsedUrl.pathname = parsedMatchedPath.pathname;
                    (0, _requestmeta.addRequestMeta)(req, "_nextRewroteUrl", invokePathnameInfo.pathname);
                    (0, _requestmeta.addRequestMeta)(req, "_nextDidRewrite", true);
                }
                const normalizeResult = (0, _normalizelocalepath.normalizeLocalePath)((0, _removepathprefix.removePathPrefix)(parsedUrl.pathname, this.nextConfig.basePath || ""), ((_this_nextConfig_i18n1 = this.nextConfig.i18n) == null ? void 0 : _this_nextConfig_i18n1.locales) || []);
                if (normalizeResult.detectedLocale) {
                    parsedUrl.query.__nextLocale = normalizeResult.detectedLocale;
                }
                parsedUrl.pathname = normalizeResult.pathname;
                for (const key of Object.keys(parsedUrl.query)){
                    if (!key.startsWith("__next") && !key.startsWith("_next")) {
                        delete parsedUrl.query[key];
                    }
                }
                const invokeQuery = req.headers["x-invoke-query"];
                if (typeof invokeQuery === "string") {
                    Object.assign(parsedUrl.query, JSON.parse(decodeURIComponent(invokeQuery)));
                }
                if (parsedUrl.pathname.startsWith("/_next/image")) {
                    const imageResult = await this.handleNextImageRequest(req, res, parsedUrl);
                    if (imageResult.finished) {
                        return;
                    }
                }
                const nextDataResult = await this.handleNextDataRequest(req, res, parsedUrl);
                if (nextDataResult.finished) {
                    return;
                }
                await this.handleCatchallRenderRequest(req, res, parsedUrl);
                return;
            }
            if (process.env.NEXT_RUNTIME !== "edge" && req.headers["x-middleware-invoke"]) {
                const nextDataResult = await this.handleNextDataRequest(req, res, parsedUrl);
                if (nextDataResult.finished) {
                    return;
                }
                const result = await this.handleCatchallMiddlewareRequest(req, res, parsedUrl);
                if (result.finished) {
                    return;
                } else {
                    const err = new Error();
                    err.result = {
                        response: new Response(null, {
                            headers: {
                                "x-middleware-next": "1"
                            }
                        })
                    };
                    err.bubble = true;
                    throw err;
                }
            }
            // ensure we strip the basePath when not using an invoke header
            if (!(useMatchedPathHeader || useInvokePath) && pathnameInfo.basePath) {
                parsedUrl.pathname = (0, _removepathprefix.removePathPrefix)(parsedUrl.pathname, pathnameInfo.basePath);
            }
            res.statusCode = 200;
            return await this.run(req, res, parsedUrl);
        } catch (err) {
            if (err instanceof NoFallbackError) {
                throw err;
            }
            if (err && typeof err === "object" && err.code === "ERR_INVALID_URL" || err instanceof _utils.DecodeError || err instanceof _utils.NormalizeError) {
                res.statusCode = 400;
                return this.renderError(null, req, res, "/_error", {});
            }
            if (this.minimalMode || this.renderOpts.dev || err.bubble) {
                throw err;
            }
            this.logError((0, _iserror.getProperError)(err));
            res.statusCode = 500;
            res.body("Internal Server Error").send();
        }
    }
    getRequestHandler() {
        return this.handleRequest.bind(this);
    }
    setAssetPrefix(prefix) {
        this.renderOpts.assetPrefix = prefix ? prefix.replace(/\/$/, "") : "";
    }
    /**
   * Runs async initialization of server.
   * It is idempotent, won't fire underlying initialization more than once.
   */ async prepare() {
        if (this.prepared) return;
        if (this.preparedPromise === null) {
            this.preparedPromise = this.prepareImpl().then(()=>{
                this.prepared = true;
                this.preparedPromise = null;
            });
        }
        return this.preparedPromise;
    }
    async prepareImpl() {}
    // Backwards compatibility
    async close() {}
    getAppPathRoutes() {
        const appPathRoutes = {};
        Object.keys(this.appPathsManifest || {}).forEach((entry)=>{
            const normalizedPath = (0, _apppaths.normalizeAppPath)(entry);
            if (!appPathRoutes[normalizedPath]) {
                appPathRoutes[normalizedPath] = [];
            }
            appPathRoutes[normalizedPath].push(entry);
        });
        return appPathRoutes;
    }
    async run(req, res, parsedUrl) {
        return (0, _tracer.getTracer)().trace(_constants1.BaseServerSpan.run, async ()=>this.runImpl(req, res, parsedUrl));
    }
    async runImpl(req, res, parsedUrl) {
        await this.handleCatchallRenderRequest(req, res, parsedUrl);
    }
    async pipe(fn, partialContext) {
        return (0, _tracer.getTracer)().trace(_constants1.BaseServerSpan.pipe, async ()=>this.pipeImpl(fn, partialContext));
    }
    async pipeImpl(fn, partialContext) {
        const isBotRequest = (0, _isbot.isBot)(partialContext.req.headers["user-agent"] || "");
        const ctx = {
            ...partialContext,
            renderOpts: {
                ...this.renderOpts,
                supportsDynamicHTML: !isBotRequest,
                isBot: !!isBotRequest
            }
        };
        const payload = await fn(ctx);
        if (payload === null) {
            return;
        }
        const { req, res } = ctx;
        const { body, type, revalidateOptions } = payload;
        if (!res.sent) {
            const { generateEtags, poweredByHeader, dev } = this.renderOpts;
            if (dev) {
                // In dev, we should not cache pages for any reason.
                res.setHeader("Cache-Control", "no-store, must-revalidate");
            }
            return this.sendRenderResult(req, res, {
                result: body,
                type,
                generateEtags,
                poweredByHeader,
                options: revalidateOptions
            });
        }
    }
    async getStaticHTML(fn, partialContext) {
        const ctx = {
            ...partialContext,
            renderOpts: {
                ...this.renderOpts,
                supportsDynamicHTML: false
            }
        };
        const payload = await fn(ctx);
        if (payload === null) {
            return null;
        }
        return payload.body.toUnchunkedString();
    }
    async render(req, res, pathname, query = {}, parsedUrl, internalRender = false) {
        return (0, _tracer.getTracer)().trace(_constants1.BaseServerSpan.render, async ()=>this.renderImpl(req, res, pathname, query, parsedUrl, internalRender));
    }
    async renderImpl(req, res, pathname, query = {}, parsedUrl, internalRender = false) {
        var _req_url;
        if (!pathname.startsWith("/")) {
            console.warn(`Cannot render page with path "${pathname}", did you mean "/${pathname}"?. See more info here: https://nextjs.org/docs/messages/render-no-starting-slash`);
        }
        if (this.renderOpts.customServer && pathname === "/index" && !await this.hasPage("/index")) {
            // maintain backwards compatibility for custom server
            // (see custom-server integration tests)
            pathname = "/";
        }
        // we allow custom servers to call render for all URLs
        // so check if we need to serve a static _next file or not.
        // we don't modify the URL for _next/data request but still
        // call render so we special case this to prevent an infinite loop
        if (!internalRender && !this.minimalMode && !query.__nextDataReq && (((_req_url = req.url) == null ? void 0 : _req_url.match(/^\/_next\//)) || this.hasStaticDir && req.url.match(/^\/static\//))) {
            return this.handleRequest(req, res, parsedUrl);
        }
        if ((0, _utils2.isBlockedPage)(pathname)) {
            return this.render404(req, res, parsedUrl);
        }
        return this.pipe((ctx)=>this.renderToResponse(ctx), {
            req,
            res,
            pathname,
            query
        });
    }
    async getStaticPaths({ pathname }) {
        var _this_getPrerenderManifest_dynamicRoutes_pathname;
        // Read whether or not fallback should exist from the manifest.
        const fallbackField = (_this_getPrerenderManifest_dynamicRoutes_pathname = this.getPrerenderManifest().dynamicRoutes[pathname]) == null ? void 0 : _this_getPrerenderManifest_dynamicRoutes_pathname.fallback;
        return {
            // `staticPaths` is intentionally set to `undefined` as it should've
            // been caught when checking disk data.
            staticPaths: undefined,
            fallbackMode: typeof fallbackField === "string" ? "static" : fallbackField === null ? "blocking" : fallbackField
        };
    }
    async renderToResponseWithComponents(requestContext, findComponentsResult) {
        return (0, _tracer.getTracer)().trace(_constants1.BaseServerSpan.renderToResponseWithComponents, async ()=>this.renderToResponseWithComponentsImpl(requestContext, findComponentsResult));
    }
    stripInternalHeaders(req) {
        // Skip stripping internal headers in test mode while the header stripping
        // has been explicitly disabled. This allows tests to verify internal
        // routing behavior.
        if (process.env.__NEXT_TEST_MODE && process.env.__NEXT_NO_STRIP_INTERNAL_HEADERS === "1") {
            return;
        }
        // Strip the internal headers from both the request and the original
        // request.
        (0, _internalutils.stripInternalHeaders)(req.headers);
        if ("originalRequest" in req && "headers" in req.originalRequest) {
            (0, _internalutils.stripInternalHeaders)(req.originalRequest.headers);
        }
    }
    async renderToResponseWithComponentsImpl({ req, res, pathname, renderOpts: opts }, { components, query }) {
        var _components_Component, _this_nextConfig_i18n, _this_nextConfig_i18n1;
        const is404Page = // For edge runtime 404 page, /_not-found needs to be treated as 404 page
        process.env.NEXT_RUNTIME === "edge" && pathname === "/_not-found" || pathname === "/404";
        // Strip the internal headers.
        this.stripInternalHeaders(req);
        const is500Page = pathname === "/500";
        const isAppPath = components.isAppPath === true;
        const hasServerProps = !!components.getServerSideProps;
        let hasStaticPaths = !!components.getStaticPaths;
        const actionId = req.headers[_approuterheaders.ACTION.toLowerCase()];
        const contentType = req.headers["content-type"];
        const isMultipartAction = req.method === "POST" && (contentType == null ? void 0 : contentType.startsWith("multipart/form-data"));
        const isFetchAction = actionId !== undefined && typeof actionId === "string" && req.method === "POST";
        const isServerAction = isFetchAction || isMultipartAction;
        const hasGetInitialProps = !!((_components_Component = components.Component) == null ? void 0 : _components_Component.getInitialProps);
        let isSSG = !!components.getStaticProps;
        // Compute the iSSG cache key. We use the rewroteUrl since
        // pages with fallback: false are allowed to be rewritten to
        // and we need to look up the path by the rewritten path
        let urlPathname = (0, _url.parse)(req.url || "").pathname || "/";
        let resolvedUrlPathname = (0, _requestmeta.getRequestMeta)(req, "_nextRewroteUrl") || urlPathname;
        let staticPaths;
        let fallbackMode;
        let hasFallback = false;
        const isDynamic = (0, _utils1.isDynamicRoute)(components.page);
        if (isAppPath && isDynamic) {
            const pathsResult = await this.getStaticPaths({
                pathname,
                page: components.page,
                isAppPath,
                requestHeaders: req.headers
            });
            staticPaths = pathsResult.staticPaths;
            fallbackMode = pathsResult.fallbackMode;
            hasFallback = typeof fallbackMode !== "undefined";
            if (this.nextConfig.output === "export") {
                const page = components.page;
                if (fallbackMode !== "static") {
                    throw new Error(`Page "${page}" is missing exported function "generateStaticParams()", which is required with "output: export" config.`);
                }
                const resolvedWithoutSlash = (0, _removetrailingslash.removeTrailingSlash)(resolvedUrlPathname);
                if (!(staticPaths == null ? void 0 : staticPaths.includes(resolvedWithoutSlash))) {
                    throw new Error(`Page "${page}" is missing param "${resolvedWithoutSlash}" in "generateStaticParams()", which is required with "output: export" config.`);
                }
            }
            if (hasFallback) {
                hasStaticPaths = true;
            }
        }
        if (hasFallback || (staticPaths == null ? void 0 : staticPaths.includes(resolvedUrlPathname)) || // this signals revalidation in deploy environments
        // TODO: make this more generic
        req.headers["x-now-route-matches"]) {
            isSSG = true;
        } else if (!this.renderOpts.dev) {
            const manifest = this.getPrerenderManifest();
            isSSG = isSSG || !!manifest.routes[pathname === "/index" ? "/" : pathname];
        }
        // Toggle whether or not this is a Data request
        let isDataReq = !!(query.__nextDataReq || req.headers["x-nextjs-data"] && this.serverOptions.webServerConfig) && (isSSG || hasServerProps);
        // when we are handling a middleware prefetch and it doesn't
        // resolve to a static data route we bail early to avoid
        // unexpected SSR invocations
        if (!isSSG && req.headers["x-middleware-prefetch"] && !(is404Page || pathname === "/_error")) {
            res.setHeader("x-middleware-skip", "1");
            res.setHeader("cache-control", "private, no-cache, no-store, max-age=0, must-revalidate");
            res.body("{}").send();
            return null;
        }
        delete query.__nextDataReq;
        // normalize req.url for SSG paths as it is not exposed
        // to getStaticProps and the asPath should not expose /_next/data
        if (isSSG && this.minimalMode && req.headers["x-matched-path"] && req.url.startsWith("/_next/data")) {
            req.url = this.stripNextDataPath(req.url);
        }
        if (!!req.headers["x-nextjs-data"] && (!res.statusCode || res.statusCode === 200)) {
            res.setHeader("x-nextjs-matched-path", `${query.__nextLocale ? `/${query.__nextLocale}` : ""}${pathname}`);
        }
        // Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
        const isFlightRequest = Boolean(req.headers[_approuterheaders.RSC.toLowerCase()]);
        // For pages we need to ensure the correct Vary header is set too, to avoid
        // caching issues when navigating between pages and app
        if (!isAppPath && isFlightRequest) {
            res.setHeader("vary", _approuterheaders.RSC_VARY_HEADER);
        }
        // we need to ensure the status code if /404 is visited directly
        if (is404Page && !isDataReq && !isFlightRequest) {
            res.statusCode = 404;
        }
        // ensure correct status is set when visiting a status page
        // directly e.g. /500
        if (_constants.STATIC_STATUS_PAGES.includes(pathname)) {
            res.statusCode = parseInt(pathname.slice(1), 10);
        }
        // static pages can only respond to GET/HEAD
        // requests so ensure we respond with 405 for
        // invalid requests
        if (!isServerAction && !is404Page && !is500Page && pathname !== "/_error" && req.method !== "HEAD" && req.method !== "GET" && (typeof components.Component === "string" || isSSG)) {
            res.statusCode = 405;
            res.setHeader("Allow", [
                "GET",
                "HEAD"
            ]);
            await this.renderError(null, req, res, pathname);
            return null;
        }
        // handle static page
        if (typeof components.Component === "string") {
            return {
                type: "html",
                // TODO: Static pages should be serialized as RenderResult
                body: _renderresult.default.fromStatic(components.Component)
            };
        }
        if (!query.amp) {
            delete query.amp;
        }
        if (opts.supportsDynamicHTML === true) {
            var _components_Document;
            const isBotRequest = (0, _isbot.isBot)(req.headers["user-agent"] || "");
            const isSupportedDocument = typeof ((_components_Document = components.Document) == null ? void 0 : _components_Document.getInitialProps) !== "function" || // The built-in `Document` component also supports dynamic HTML for concurrent mode.
            _constants.NEXT_BUILTIN_DOCUMENT in components.Document;
            // Disable dynamic HTML in cases that we know it won't be generated,
            // so that we can continue generating a cache key when possible.
            // TODO-APP: should the first render for a dynamic app path
            // be static so we can collect revalidate and populate the
            // cache if there are no dynamic data requirements
            opts.supportsDynamicHTML = !isSSG && !isBotRequest && !query.amp && isSupportedDocument;
            opts.isBot = isBotRequest;
        }
        // In development, we always want to generate dynamic HTML.
        if (!isDataReq && isAppPath && opts.dev && opts.supportsDynamicHTML === false) {
            opts.supportsDynamicHTML = true;
        }
        const defaultLocale = isSSG ? (_this_nextConfig_i18n = this.nextConfig.i18n) == null ? void 0 : _this_nextConfig_i18n.defaultLocale : query.__nextDefaultLocale;
        const locale = query.__nextLocale;
        const locales = (_this_nextConfig_i18n1 = this.nextConfig.i18n) == null ? void 0 : _this_nextConfig_i18n1.locales;
        let previewData;
        let isPreviewMode = false;
        if (hasServerProps || isSSG) {
            // For the edge runtime, we don't support preview mode in SSG.
            if (process.env.NEXT_RUNTIME !== "edge") {
                const { tryGetPreviewData } = require("./api-utils/node");
                previewData = tryGetPreviewData(req, res, this.renderOpts.previewProps);
                isPreviewMode = previewData !== false;
            }
        }
        if (isAppPath) {
            res.setHeader("vary", _approuterheaders.RSC_VARY_HEADER);
            // We don't clear RSC headers in development since SSG doesn't apply
            // These headers are cleared for SSG as we need to always generate the
            // full RSC response for ISR
            if (!this.renderOpts.dev && !isPreviewMode && isSSG && req.headers[_approuterheaders.RSC.toLowerCase()]) {
                if (!this.minimalMode) {
                    isDataReq = true;
                }
                // strip header so we generate HTML still
                if (!(0, _isedgeruntime.isEdgeRuntime)(opts.runtime) || this.serverOptions.webServerConfig) {
                    for (const param of _approuterheaders.FLIGHT_PARAMETERS){
                        delete req.headers[param.toString().toLowerCase()];
                    }
                }
            }
        }
        let isOnDemandRevalidate = false;
        let revalidateOnlyGenerated = false;
        if (isSSG) {
            ({ isOnDemandRevalidate, revalidateOnlyGenerated } = (0, _apiutils.checkIsOnDemandRevalidate)(req, this.renderOpts.previewProps));
        }
        if (isSSG && this.minimalMode && req.headers["x-matched-path"]) {
            // the url value is already correct when the matched-path header is set
            resolvedUrlPathname = urlPathname;
        }
        urlPathname = (0, _removetrailingslash.removeTrailingSlash)(urlPathname);
        resolvedUrlPathname = (0, _removetrailingslash.removeTrailingSlash)(resolvedUrlPathname);
        if (this.localeNormalizer) {
            resolvedUrlPathname = this.localeNormalizer.normalize(resolvedUrlPathname);
        }
        const handleRedirect = (pageData)=>{
            const redirect = {
                destination: pageData.pageProps.__N_REDIRECT,
                statusCode: pageData.pageProps.__N_REDIRECT_STATUS,
                basePath: pageData.pageProps.__N_REDIRECT_BASE_PATH
            };
            const statusCode = (0, _redirectstatus.getRedirectStatus)(redirect);
            const { basePath } = this.nextConfig;
            if (basePath && redirect.basePath !== false && redirect.destination.startsWith("/")) {
                redirect.destination = `${basePath}${redirect.destination}`;
            }
            if (redirect.destination.startsWith("/")) {
                redirect.destination = (0, _utils.normalizeRepeatedSlashes)(redirect.destination);
            }
            res.redirect(redirect.destination, statusCode).body(redirect.destination).send();
        };
        // remove /_next/data prefix from urlPathname so it matches
        // for direct page visit and /_next/data visit
        if (isDataReq) {
            resolvedUrlPathname = this.stripNextDataPath(resolvedUrlPathname);
            urlPathname = this.stripNextDataPath(urlPathname);
        }
        let ssgCacheKey = isPreviewMode || !isSSG || opts.supportsDynamicHTML || isServerAction ? null // Preview mode, on-demand revalidate, server actions, flight request can bypass the cache
         : `${locale ? `/${locale}` : ""}${(pathname === "/" || resolvedUrlPathname === "/") && locale ? "" : resolvedUrlPathname}${query.amp ? ".amp" : ""}`;
        if ((is404Page || is500Page) && isSSG) {
            ssgCacheKey = `${locale ? `/${locale}` : ""}${pathname}${query.amp ? ".amp" : ""}`;
        }
        if (ssgCacheKey) {
            // we only encode path delimiters for path segments from
            // getStaticPaths so we need to attempt decoding the URL
            // to match against and only escape the path delimiters
            // this allows non-ascii values to be handled e.g. Japanese characters
            // TODO: investigate adding this handling for non-SSG pages so
            // non-ascii names work there also
            ssgCacheKey = ssgCacheKey.split("/").map((seg)=>{
                try {
                    seg = (0, _escapepathdelimiters.default)(decodeURIComponent(seg), true);
                } catch (_) {
                    // An improperly encoded URL was provided
                    throw new _utils.DecodeError("failed to decode param");
                }
                return seg;
            }).join("/");
            // ensure /index and / is normalized to one key
            ssgCacheKey = ssgCacheKey === "/index" && pathname === "/" ? "/" : ssgCacheKey;
        }
        let protocol = "https:";
        try {
            const parsedFullUrl = new URL((0, _requestmeta.getRequestMeta)(req, "__NEXT_INIT_URL") || "/", "http://n");
            protocol = parsedFullUrl.protocol;
        } catch  {}
        // use existing incrementalCache instance if available
        const incrementalCache = globalThis.__incrementalCache || this.getIncrementalCache({
            requestHeaders: Object.assign({}, req.headers),
            requestProtocol: protocol.substring(0, protocol.length - 1)
        });
        const doRender = async ()=>{
            var _components_routeModule, _components_routeModule1, _components_routeModule2;
            // In development, we always want to generate dynamic HTML.
            const supportsDynamicHTML = !isDataReq && opts.dev || !(isSSG || hasStaticPaths);
            let headers;
            const origQuery = (0, _url.parse)(req.url || "", true).query;
            // clear any dynamic route params so they aren't in
            // the resolvedUrl
            if (opts.params) {
                Object.keys(opts.params).forEach((key)=>{
                    delete origQuery[key];
                });
            }
            const hadTrailingSlash = urlPathname !== "/" && this.nextConfig.trailingSlash;
            const resolvedUrl = (0, _url.format)({
                pathname: `${resolvedUrlPathname}${hadTrailingSlash ? "/" : ""}`,
                // make sure to only add query values from original URL
                query: origQuery
            });
            const renderOpts = {
                ...components,
                ...opts,
                ...isAppPath ? {
                    incrementalCache,
                    isRevalidate: isSSG,
                    originalPathname: components.ComponentMod.originalPathname,
                    serverActionsBodySizeLimit: this.nextConfig.experimental.serverActionsBodySizeLimit
                } : {},
                isDataReq,
                resolvedUrl,
                locale,
                locales,
                defaultLocale,
                // For getServerSideProps and getInitialProps we need to ensure we use the original URL
                // and not the resolved URL to prevent a hydration mismatch on
                // asPath
                resolvedAsPath: hasServerProps || hasGetInitialProps ? (0, _url.format)({
                    // we use the original URL pathname less the _next/data prefix if
                    // present
                    pathname: `${urlPathname}${hadTrailingSlash ? "/" : ""}`,
                    query: origQuery
                }) : resolvedUrl,
                supportsDynamicHTML,
                isOnDemandRevalidate,
                isDraftMode: isPreviewMode,
                isServerAction
            };
            // Legacy render methods will return a render result that needs to be
            // served by the server.
            let result;
            if (((_components_routeModule = components.routeModule) == null ? void 0 : _components_routeModule.definition.kind) === _routekind.RouteKind.APP_ROUTE) {
                const routeModule = components.routeModule;
                const context = {
                    params: opts.params,
                    prerenderManifest: this.getPrerenderManifest(),
                    staticGenerationContext: {
                        originalPathname: components.ComponentMod.originalPathname,
                        supportsDynamicHTML,
                        incrementalCache,
                        isRevalidate: isSSG
                    }
                };
                try {
                    const request = _nextrequest.NextRequestAdapter.fromBaseNextRequest(req, (0, _nextrequest.signalFromNodeResponse)(res.originalResponse));
                    const response = await routeModule.handle(request, context);
                    req.fetchMetrics = context.staticGenerationContext.fetchMetrics;
                    const cacheTags = context.staticGenerationContext.fetchTags;
                    // If the request is for a static response, we can cache it so long
                    // as it's not edge.
                    if (isSSG && process.env.NEXT_RUNTIME !== "edge") {
                        var _context_staticGenerationContext_store;
                        const blob = await response.blob();
                        // Copy the headers from the response.
                        headers = (0, _utils3.toNodeOutgoingHttpHeaders)(response.headers);
                        if (cacheTags) {
                            headers[_constants2.NEXT_CACHE_TAGS_HEADER] = cacheTags;
                        }
                        if (!headers["content-type"] && blob.type) {
                            headers["content-type"] = blob.type;
                        }
                        const revalidate = ((_context_staticGenerationContext_store = context.staticGenerationContext.store) == null ? void 0 : _context_staticGenerationContext_store.revalidate) ?? false;
                        // Create the cache entry for the response.
                        const cacheEntry = {
                            value: {
                                kind: "ROUTE",
                                status: response.status,
                                body: Buffer.from(await blob.arrayBuffer()),
                                headers
                            },
                            revalidate
                        };
                        return cacheEntry;
                    }
                    // Send the response now that we have copied it into the cache.
                    await (0, _sendresponse.sendResponse)(req, res, response);
                    return null;
                } catch (err) {
                    // If this is during static generation, throw the error again.
                    if (isSSG) throw err;
                    _log.error(err);
                    // Otherwise, send a 500 response.
                    await (0, _sendresponse.sendResponse)(req, res, (0, _responsehandlers.handleInternalServerErrorResponse)());
                    return null;
                }
            } else if (((_components_routeModule1 = components.routeModule) == null ? void 0 : _components_routeModule1.definition.kind) === _routekind.RouteKind.PAGES) {
                const module1 = components.routeModule;
                // Due to the way we pass data by mutating `renderOpts`, we can't extend
                // the object here but only updating its `clientReferenceManifest` and
                // `nextFontManifest` properties.
                // https://github.com/vercel/next.js/blob/df7cbd904c3bd85f399d1ce90680c0ecf92d2752/packages/next/server/render.tsx#L947-L952
                renderOpts.nextFontManifest = this.nextFontManifest;
                renderOpts.clientReferenceManifest = components.clientReferenceManifest;
                // Call the built-in render method on the module.
                result = await module1.render(req.originalRequest ?? req, res.originalResponse ?? res, {
                    page: pathname,
                    params: opts.params,
                    query,
                    renderOpts
                });
            } else if (((_components_routeModule2 = components.routeModule) == null ? void 0 : _components_routeModule2.definition.kind) === _routekind.RouteKind.APP_PAGE) {
                const isAppPrefetch = req.headers[_approuterheaders.NEXT_ROUTER_PREFETCH.toLowerCase()];
                if (isAppPrefetch && ssgCacheKey && process.env.NODE_ENV === "production") {
                    try {
                        const prefetchRsc = await this.getPrefetchRsc(ssgCacheKey);
                        if (prefetchRsc) {
                            res.setHeader("cache-control", "private, no-cache, no-store, max-age=0, must-revalidate");
                            res.setHeader("content-type", _approuterheaders.RSC_CONTENT_TYPE_HEADER);
                            res.body(prefetchRsc).send();
                            return null;
                        }
                    } catch (_) {
                    // we fallback to invoking the function if prefetch
                    // data is not available
                    }
                }
                const module1 = components.routeModule;
                // Due to the way we pass data by mutating `renderOpts`, we can't extend the
                // object here but only updating its `nextFontManifest` field.
                // https://github.com/vercel/next.js/blob/df7cbd904c3bd85f399d1ce90680c0ecf92d2752/packages/next/server/render.tsx#L947-L952
                renderOpts.nextFontManifest = this.nextFontManifest;
                // Call the built-in render method on the module.
                result = await module1.render(req.originalRequest ?? req, res.originalResponse ?? res, {
                    page: is404Page ? "/404" : pathname,
                    params: opts.params,
                    query,
                    renderOpts
                });
            } else {
                // If we didn't match a page, we should fallback to using the legacy
                // render method.
                result = await this.renderHTML(req, res, pathname, query, renderOpts);
            }
            const { metadata } = result;
            // Add any fetch tags that were on the page to the response headers.
            const cacheTags = metadata.fetchTags;
            if (cacheTags) {
                headers = {
                    [_constants2.NEXT_CACHE_TAGS_HEADER]: cacheTags
                };
            }
            req.fetchMetrics = metadata.fetchMetrics;
            // we don't throw static to dynamic errors in dev as isSSG
            // is a best guess in dev since we don't have the prerender pass
            // to know whether the path is actually static or not
            if (isAppPath && isSSG && metadata.revalidate === 0 && !this.renderOpts.dev) {
                const staticBailoutInfo = metadata.staticBailoutInfo || {};
                const err = new Error(`Page changed from static to dynamic at runtime ${urlPathname}${staticBailoutInfo.description ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`);
                if (staticBailoutInfo.stack) {
                    const stack = staticBailoutInfo.stack;
                    err.stack = err.message + stack.substring(stack.indexOf("\n"));
                }
                throw err;
            }
            // Based on the metadata, we can determine what kind of cache result we
            // should return.
            // Handle `isNotFound`.
            if (metadata.isNotFound) {
                return {
                    value: null,
                    revalidate: metadata.revalidate
                };
            }
            // Handle `isRedirect`.
            if (metadata.isRedirect) {
                return {
                    value: {
                        kind: "REDIRECT",
                        props: metadata.pageData
                    },
                    revalidate: metadata.revalidate
                };
            }
            // Handle `isNull`.
            if (result.isNull) {
                return null;
            }
            // We now have a valid HTML result that we can return to the user.
            return {
                value: {
                    kind: "PAGE",
                    html: result,
                    pageData: metadata.pageData,
                    headers,
                    status: isAppPath ? res.statusCode : undefined
                },
                revalidate: metadata.revalidate
            };
        };
        const cacheEntry = await this.responseCache.get(ssgCacheKey, async (hasResolved, hadCache)=>{
            const isProduction = !this.renderOpts.dev;
            const didRespond = hasResolved || res.sent;
            if (!staticPaths) {
                ({ staticPaths, fallbackMode } = hasStaticPaths ? await this.getStaticPaths({
                    pathname,
                    requestHeaders: req.headers,
                    isAppPath,
                    page: components.page
                }) : {
                    staticPaths: undefined,
                    fallbackMode: false
                });
            }
            if (fallbackMode === "static" && (0, _isbot.isBot)(req.headers["user-agent"] || "")) {
                fallbackMode = "blocking";
            }
            // skip on-demand revalidate if cache is not present and
            // revalidate-if-generated is set
            if (isOnDemandRevalidate && revalidateOnlyGenerated && !hadCache && !this.minimalMode) {
                await this.render404(req, res);
                return null;
            }
            if ((hadCache == null ? void 0 : hadCache.isStale) === -1) {
                isOnDemandRevalidate = true;
            }
            // only allow on-demand revalidate for fallback: true/blocking
            // or for prerendered fallback: false paths
            if (isOnDemandRevalidate && (fallbackMode !== false || hadCache)) {
                fallbackMode = "blocking";
            }
            // We use `ssgCacheKey` here as it is normalized to match the encoding
            // from getStaticPaths along with including the locale.
            //
            // We use the `resolvedUrlPathname` for the development case when this
            // is an app path since it doesn't include locale information.
            let staticPathKey = ssgCacheKey ?? (opts.dev && isAppPath ? resolvedUrlPathname : null);
            if (staticPathKey && query.amp) {
                staticPathKey = staticPathKey.replace(/\.amp$/, "");
            }
            const isPageIncludedInStaticPaths = staticPathKey && (staticPaths == null ? void 0 : staticPaths.includes(staticPathKey));
            // When we did not respond from cache, we need to choose to block on
            // rendering or return a skeleton.
            //
            // - Data requests always block.
            // - Blocking mode fallback always blocks.
            // - Preview mode toggles all pages to be resolved in a blocking manner.
            // - Non-dynamic pages should block (though this is an impossible
            //   case in production).
            // - Dynamic pages should return their skeleton if not defined in
            //   getStaticPaths, then finish the data request on the client-side.
            //
            if (process.env.NEXT_RUNTIME !== "edge" && !this.minimalMode && fallbackMode !== "blocking" && staticPathKey && !didRespond && !isPreviewMode && isDynamic && (isProduction || !staticPaths || !isPageIncludedInStaticPaths)) {
                if (// In development, fall through to render to handle missing
                // getStaticPaths.
                (isProduction || staticPaths && (staticPaths == null ? void 0 : staticPaths.length) > 0) && // When fallback isn't present, abort this render so we 404
                fallbackMode !== "static") {
                    throw new NoFallbackError();
                }
                if (!isDataReq) {
                    // Production already emitted the fallback as static HTML.
                    if (isProduction) {
                        const html = await this.getFallback(locale ? `/${locale}${pathname}` : pathname);
                        return {
                            value: {
                                kind: "PAGE",
                                html: _renderresult.default.fromStatic(html),
                                pageData: {}
                            }
                        };
                    } else {
                        query.__nextFallback = "true";
                        const result = await doRender();
                        if (!result) {
                            return null;
                        }
                        // Prevent caching this result
                        delete result.revalidate;
                        return result;
                    }
                }
            }
            const result = await doRender();
            if (!result) {
                return null;
            }
            return {
                ...result,
                revalidate: result.revalidate !== undefined ? result.revalidate : /* default to minimum revalidate (this should be an invariant) */ 1
            };
        }, {
            incrementalCache,
            isOnDemandRevalidate: isOnDemandRevalidate,
            isPrefetch: req.headers.purpose === "prefetch"
        });
        if (!cacheEntry) {
            if (ssgCacheKey && !(isOnDemandRevalidate && revalidateOnlyGenerated)) {
                // A cache entry might not be generated if a response is written
                // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                // have a cache key. If we do have a cache key but we don't end up
                // with a cache entry, then either Next.js or the application has a
                // bug that needs fixing.
                throw new Error("invariant: cache entry required but not generated");
            }
            return null;
        }
        if (isSSG && !this.minimalMode) {
            // set x-nextjs-cache header to match the header
            // we set for the image-optimizer
            res.setHeader("x-nextjs-cache", isOnDemandRevalidate ? "REVALIDATED" : cacheEntry.isMiss ? "MISS" : cacheEntry.isStale ? "STALE" : "HIT");
        }
        const { revalidate, value: cachedData } = cacheEntry;
        const revalidateOptions = typeof revalidate !== "undefined" && (!this.renderOpts.dev || hasServerProps && !isDataReq) ? {
            // When the page is 404 cache-control should not be added unless
            // we are rendering the 404 page for notFound: true which should
            // cache according to revalidate correctly
            private: isPreviewMode || is404Page && cachedData,
            stateful: !isSSG,
            revalidate
        } : undefined;
        if (!cachedData) {
            if (revalidateOptions) {
                (0, _revalidateheaders.setRevalidateHeaders)(res, revalidateOptions);
            }
            if (isDataReq) {
                res.statusCode = 404;
                res.body('{"notFound":true}').send();
                return null;
            } else {
                if (this.renderOpts.dev) {
                    query.__nextNotFoundSrcPage = pathname;
                }
                await this.render404(req, res, {
                    pathname,
                    query
                }, false);
                return null;
            }
        } else if (cachedData.kind === "REDIRECT") {
            if (revalidateOptions) {
                (0, _revalidateheaders.setRevalidateHeaders)(res, revalidateOptions);
            }
            if (isDataReq) {
                return {
                    type: "json",
                    body: _renderresult.default.fromStatic(// @TODO: Handle flight data.
                    JSON.stringify(cachedData.props)),
                    revalidateOptions
                };
            } else {
                await handleRedirect(cachedData.props);
                return null;
            }
        } else if (cachedData.kind === "IMAGE") {
            throw new Error("invariant SSG should not return an image cache value");
        } else if (cachedData.kind === "ROUTE") {
            const headers = {
                ...cachedData.headers
            };
            if (!(this.minimalMode && isSSG)) {
                delete headers[_constants2.NEXT_CACHE_TAGS_HEADER];
            }
            await (0, _sendresponse.sendResponse)(req, res, new Response(cachedData.body, {
                headers: (0, _utils3.fromNodeOutgoingHttpHeaders)(headers),
                status: cachedData.status || 200
            }));
            return null;
        } else {
            if (isAppPath) {
                var _cachedData_headers;
                if (this.minimalMode && isSSG && ((_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[_constants2.NEXT_CACHE_TAGS_HEADER])) {
                    res.setHeader(_constants2.NEXT_CACHE_TAGS_HEADER, cachedData.headers[_constants2.NEXT_CACHE_TAGS_HEADER]);
                }
                if (isDataReq && typeof cachedData.pageData !== "string") {
                    throw new Error("invariant: Expected pageData to be a string for app data request but received " + typeof cachedData.pageData + ". This is a bug in Next.js.");
                }
                if (cachedData.status) {
                    res.statusCode = cachedData.status;
                }
                return {
                    type: isDataReq ? "rsc" : "html",
                    body: isDataReq ? _renderresult.default.fromStatic(cachedData.pageData) : cachedData.html,
                    revalidateOptions
                };
            }
            return {
                type: isDataReq ? "json" : "html",
                body: isDataReq ? _renderresult.default.fromStatic(JSON.stringify(cachedData.pageData)) : cachedData.html,
                revalidateOptions
            };
        }
    }
    stripNextDataPath(path, stripLocale = true) {
        if (path.includes(this.buildId)) {
            const splitPath = path.substring(path.indexOf(this.buildId) + this.buildId.length);
            path = (0, _denormalizepagepath.denormalizePagePath)(splitPath.replace(/\.json$/, ""));
        }
        if (this.localeNormalizer && stripLocale) {
            return this.localeNormalizer.normalize(path);
        }
        return path;
    }
    // map the route to the actual bundle name
    getOriginalAppPaths(route) {
        if (this.hasAppDir) {
            var _this_appPathRoutes;
            const originalAppPath = (_this_appPathRoutes = this.appPathRoutes) == null ? void 0 : _this_appPathRoutes[route];
            if (!originalAppPath) {
                return null;
            }
            return originalAppPath;
        }
        return null;
    }
    async renderPageComponent(ctx, bubbleNoFallback) {
        var _this_nextConfig_experimental_sri;
        const { query, pathname } = ctx;
        const appPaths = this.getOriginalAppPaths(pathname);
        const isAppPath = Array.isArray(appPaths);
        let page = pathname;
        if (isAppPath) {
            // the last item in the array is the root page, if there are parallel routes
            page = appPaths[appPaths.length - 1];
        }
        const result = await this.findPageComponents({
            page,
            query,
            params: ctx.renderOpts.params || {},
            isAppPath,
            sriEnabled: !!((_this_nextConfig_experimental_sri = this.nextConfig.experimental.sri) == null ? void 0 : _this_nextConfig_experimental_sri.algorithm),
            appPaths,
            // Ensuring for loading page component routes is done via the matcher.
            shouldEnsure: false
        });
        if (result) {
            try {
                return await this.renderToResponseWithComponents(ctx, result);
            } catch (err) {
                const isNoFallbackError = err instanceof NoFallbackError;
                if (!isNoFallbackError || isNoFallbackError && bubbleNoFallback) {
                    throw err;
                }
            }
        }
        return false;
    }
    async renderToResponse(ctx) {
        return (0, _tracer.getTracer)().trace(_constants1.BaseServerSpan.renderToResponse, {
            spanName: `rendering page`,
            attributes: {
                "next.route": ctx.pathname
            }
        }, async ()=>{
            return this.renderToResponseImpl(ctx);
        });
    }
    async renderToResponseImpl(ctx) {
        var _this_i18nProvider;
        const { res, query, pathname } = ctx;
        let page = pathname;
        const bubbleNoFallback = !!query._nextBubbleNoFallback;
        delete query[_approuterheaders.NEXT_RSC_UNION_QUERY];
        delete query._nextBubbleNoFallback;
        const options = {
            i18n: (_this_i18nProvider = this.i18nProvider) == null ? void 0 : _this_i18nProvider.fromQuery(pathname, query)
        };
        try {
            for await (const match of this.matchers.matchAll(pathname, options)){
                // when a specific invoke-output is meant to be matched
                // ensure a prior dynamic route/page doesn't take priority
                const invokeOutput = ctx.req.headers["x-invoke-output"];
                if (!this.minimalMode && this.isRenderWorker && typeof invokeOutput === "string" && (0, _utils1.isDynamicRoute)(invokeOutput || "") && invokeOutput !== match.definition.pathname) {
                    continue;
                }
                const result = await this.renderPageComponent({
                    ...ctx,
                    pathname: match.definition.pathname,
                    renderOpts: {
                        ...ctx.renderOpts,
                        params: match.params
                    }
                }, bubbleNoFallback);
                if (result !== false) return result;
            }
            // currently edge functions aren't receiving the x-matched-path
            // header so we need to fallback to matching the current page
            // when we weren't able to match via dynamic route to handle
            // the rewrite case
            // @ts-expect-error extended in child class web-server
            if (this.serverOptions.webServerConfig) {
                // @ts-expect-error extended in child class web-server
                ctx.pathname = this.serverOptions.webServerConfig.page;
                const result = await this.renderPageComponent(ctx, bubbleNoFallback);
                if (result !== false) return result;
            }
        } catch (error) {
            const err = (0, _iserror.getProperError)(error);
            if (error instanceof _utils.MissingStaticPage) {
                console.error("Invariant: failed to load static page", JSON.stringify({
                    page,
                    url: ctx.req.url,
                    matchedPath: ctx.req.headers["x-matched-path"],
                    initUrl: (0, _requestmeta.getRequestMeta)(ctx.req, "__NEXT_INIT_URL"),
                    didRewrite: (0, _requestmeta.getRequestMeta)(ctx.req, "_nextDidRewrite"),
                    rewroteUrl: (0, _requestmeta.getRequestMeta)(ctx.req, "_nextRewroteUrl")
                }, null, 2));
                throw err;
            }
            if (err instanceof NoFallbackError && bubbleNoFallback) {
                throw err;
            }
            if (err instanceof _utils.DecodeError || err instanceof _utils.NormalizeError) {
                res.statusCode = 400;
                return await this.renderErrorToResponse(ctx, err);
            }
            res.statusCode = 500;
            // if pages/500 is present we still need to trigger
            // /_error `getInitialProps` to allow reporting error
            if (await this.hasPage("/500")) {
                ctx.query.__nextCustomErrorRender = "1";
                await this.renderErrorToResponse(ctx, err);
                delete ctx.query.__nextCustomErrorRender;
            }
            const isWrappedError = err instanceof WrappedBuildError;
            if (!isWrappedError) {
                if (this.minimalMode && process.env.NEXT_RUNTIME !== "edge" || this.renderOpts.dev) {
                    if ((0, _iserror.default)(err)) err.page = page;
                    throw err;
                }
                this.logError((0, _iserror.getProperError)(err));
            }
            const response = await this.renderErrorToResponse(ctx, isWrappedError ? err.innerError : err);
            return response;
        }
        if (this.getMiddleware() && !!ctx.req.headers["x-nextjs-data"] && (!res.statusCode || res.statusCode === 200 || res.statusCode === 404)) {
            res.setHeader("x-nextjs-matched-path", `${query.__nextLocale ? `/${query.__nextLocale}` : ""}${pathname}`);
            res.statusCode = 200;
            res.setHeader("content-type", "application/json");
            res.body("{}");
            res.send();
            return null;
        }
        res.statusCode = 404;
        return this.renderErrorToResponse(ctx, null);
    }
    async renderToHTML(req, res, pathname, query = {}) {
        return (0, _tracer.getTracer)().trace(_constants1.BaseServerSpan.renderToHTML, async ()=>{
            return this.renderToHTMLImpl(req, res, pathname, query);
        });
    }
    async renderToHTMLImpl(req, res, pathname, query = {}) {
        return this.getStaticHTML((ctx)=>this.renderToResponse(ctx), {
            req,
            res,
            pathname,
            query
        });
    }
    async renderError(err, req, res, pathname, query = {}, setHeaders = true) {
        return (0, _tracer.getTracer)().trace(_constants1.BaseServerSpan.renderError, async ()=>{
            return this.renderErrorImpl(err, req, res, pathname, query, setHeaders);
        });
    }
    async renderErrorImpl(err, req, res, pathname, query = {}, setHeaders = true) {
        if (setHeaders) {
            res.setHeader("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate");
        }
        return this.pipe(async (ctx)=>{
            const response = await this.renderErrorToResponse(ctx, err);
            if (this.minimalMode && res.statusCode === 500) {
                throw err;
            }
            return response;
        }, {
            req,
            res,
            pathname,
            query
        });
    }
    async renderErrorToResponse(ctx, err) {
        return (0, _tracer.getTracer)().trace(_constants1.BaseServerSpan.renderErrorToResponse, async ()=>{
            return this.renderErrorToResponseImpl(ctx, err);
        });
    }
    async renderErrorToResponseImpl(ctx, err) {
        // Short-circuit favicon.ico in development to avoid compiling 404 page when the app has no favicon.ico.
        // Since favicon.ico is automatically requested by the browser.
        if (this.renderOpts.dev && ctx.pathname === "/favicon.ico") {
            return {
                type: "html",
                body: new _renderresult.default("")
            };
        }
        const { res, query } = ctx;
        try {
            let result = null;
            const is404 = res.statusCode === 404;
            let using404Page = false;
            if (is404) {
                if (this.hasAppDir) {
                    // Use the not-found entry in app directory
                    result = await this.findPageComponents({
                        page: this.renderOpts.dev ? "/not-found" : "/_not-found",
                        query,
                        params: {},
                        isAppPath: true,
                        shouldEnsure: true
                    });
                    using404Page = result !== null;
                }
                if (!result && await this.hasPage("/404")) {
                    result = await this.findPageComponents({
                        page: "/404",
                        query,
                        params: {},
                        isAppPath: false,
                        // Ensuring can't be done here because you never "match" a 404 route.
                        shouldEnsure: true
                    });
                    using404Page = result !== null;
                }
            }
            let statusPage = `/${res.statusCode}`;
            if (!ctx.query.__nextCustomErrorRender && !result && _constants.STATIC_STATUS_PAGES.includes(statusPage)) {
                // skip ensuring /500 in dev mode as it isn't used and the
                // dev overlay is used instead
                if (statusPage !== "/500" || !this.renderOpts.dev) {
                    result = await this.findPageComponents({
                        page: statusPage,
                        query,
                        params: {},
                        isAppPath: false,
                        // Ensuring can't be done here because you never "match" a 500
                        // route.
                        shouldEnsure: true
                    });
                }
            }
            if (!result) {
                result = await this.findPageComponents({
                    page: "/_error",
                    query,
                    params: {},
                    isAppPath: false,
                    // Ensuring can't be done here because you never "match" an error
                    // route.
                    shouldEnsure: true
                });
                statusPage = "/_error";
            }
            if (process.env.NODE_ENV !== "production" && !using404Page && await this.hasPage("/_error") && !await this.hasPage("/404")) {
                this.customErrorNo404Warn();
            }
            if (!result) {
                // this can occur when a project directory has been moved/deleted
                // which is handled in the parent process in development
                if (this.renderOpts.dev) {
                    return {
                        type: "html",
                        // wait for dev-server to restart before refreshing
                        body: _renderresult.default.fromStatic(`
              <pre>missing required error components, refreshing...</pre>
              <script>
                async function check() {
                  const res = await fetch(location.href).catch(() => ({}))

                  if (res.status === 200) {
                    location.reload()
                  } else {
                    setTimeout(check, 1000)
                  }
                }
                check()
              </script>`)
                    };
                }
                throw new WrappedBuildError(new Error("missing required error components"));
            }
            // If the page has a route module, use it for the new match. If it doesn't
            // have a route module, remove the match.
            if (result.components.routeModule) {
                (0, _requestmeta.addRequestMeta)(ctx.req, "_nextMatch", {
                    definition: result.components.routeModule.definition,
                    params: undefined
                });
            } else {
                (0, _requestmeta.removeRequestMeta)(ctx.req, "_nextMatch");
            }
            try {
                return await this.renderToResponseWithComponents({
                    ...ctx,
                    pathname: statusPage,
                    renderOpts: {
                        ...ctx.renderOpts,
                        err
                    }
                }, result);
            } catch (maybeFallbackError) {
                if (maybeFallbackError instanceof NoFallbackError) {
                    throw new Error("invariant: failed to render error page");
                }
                throw maybeFallbackError;
            }
        } catch (error) {
            const renderToHtmlError = (0, _iserror.getProperError)(error);
            const isWrappedError = renderToHtmlError instanceof WrappedBuildError;
            if (!isWrappedError) {
                this.logError(renderToHtmlError);
            }
            res.statusCode = 500;
            const fallbackComponents = await this.getFallbackErrorComponents();
            if (fallbackComponents) {
                // There was an error, so use it's definition from the route module
                // to add the match to the request.
                (0, _requestmeta.addRequestMeta)(ctx.req, "_nextMatch", {
                    definition: fallbackComponents.routeModule.definition,
                    params: undefined
                });
                return this.renderToResponseWithComponents({
                    ...ctx,
                    pathname: "/_error",
                    renderOpts: {
                        ...ctx.renderOpts,
                        // We render `renderToHtmlError` here because `err` is
                        // already captured in the stacktrace.
                        err: isWrappedError ? renderToHtmlError.innerError : renderToHtmlError
                    }
                }, {
                    query,
                    components: fallbackComponents
                });
            }
            return {
                type: "html",
                body: _renderresult.default.fromStatic("Internal Server Error")
            };
        }
    }
    async renderErrorToHTML(err, req, res, pathname, query = {}) {
        return this.getStaticHTML((ctx)=>this.renderErrorToResponse(ctx, err), {
            req,
            res,
            pathname,
            query
        });
    }
    async render404(req, res, parsedUrl, setHeaders = true) {
        const { pathname, query } = parsedUrl ? parsedUrl : (0, _url.parse)(req.url, true);
        if (this.nextConfig.i18n) {
            query.__nextLocale ||= this.nextConfig.i18n.defaultLocale;
            query.__nextDefaultLocale ||= this.nextConfig.i18n.defaultLocale;
        }
        res.statusCode = 404;
        return this.renderError(null, req, res, pathname, query, setHeaders);
    }
}

//# sourceMappingURL=base-server.js.map