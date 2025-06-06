"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DevServer;
    }
});
const _jestworker = require("next/dist/compiled/jest-worker");
const _path = require("path");
const _output = require("../../build/output");
const _constants = require("../../lib/constants");
const _fileexists = require("../../lib/file-exists");
const _findpagesdir = require("../../lib/find-pages-dir");
const _constants1 = require("../../shared/lib/constants");
const _nextserver = /*#__PURE__*/ _interop_require_wildcard(require("../next-server"));
const _normalizepagepath = require("../../shared/lib/page-path/normalize-page-path");
const _pathhasprefix = require("../../shared/lib/router/utils/path-has-prefix");
const _removepathprefix = require("../../shared/lib/router/utils/remove-path-prefix");
const _storage = require("../../telemetry/storage");
const _trace = require("../../trace");
const _findpagefile = require("../lib/find-page-file");
const _utils = require("../lib/utils");
const _coalescedfunction = require("../../lib/coalesced-function");
const _loaddefaulterrorcomponents = require("../load-default-error-components");
const _utils1 = require("../../shared/lib/utils");
const _log = /*#__PURE__*/ _interop_require_wildcard(require("../../build/output/log"));
const _iserror = /*#__PURE__*/ _interop_require_wildcard(require("../../lib/is-error"));
const _utils2 = require("../../build/utils");
const _formatservererror = require("../../lib/format-server-error");
const _devroutematchermanager = require("../future/route-matcher-managers/dev-route-matcher-manager");
const _devpagesroutematcherprovider = require("../future/route-matcher-providers/dev/dev-pages-route-matcher-provider");
const _devpagesapiroutematcherprovider = require("../future/route-matcher-providers/dev/dev-pages-api-route-matcher-provider");
const _devapppageroutematcherprovider = require("../future/route-matcher-providers/dev/dev-app-page-route-matcher-provider");
const _devapprouteroutematcherprovider = require("../future/route-matcher-providers/dev/dev-app-route-route-matcher-provider");
const _nodemanifestloader = require("../future/route-matcher-providers/helpers/manifest-loaders/node-manifest-loader");
const _batchedfilereader = require("../future/route-matcher-providers/dev/helpers/file-reader/batched-file-reader");
const _defaultfilereader = require("../future/route-matcher-providers/dev/helpers/file-reader/default-file-reader");
const _buildcontext = require("../../build/build-context");
const _lrucache = /*#__PURE__*/ _interop_require_default(require("next/dist/compiled/lru-cache"));
const _middlewareroutematcher = require("../../shared/lib/router/utils/middleware-route-matcher");
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
// Load ReactDevOverlay only when needed
let ReactDevOverlayImpl;
const ReactDevOverlay = (props)=>{
    if (ReactDevOverlayImpl === undefined) {
        ReactDevOverlayImpl = require("next/dist/compiled/@next/react-dev-overlay/dist/client").ReactDevOverlay;
    }
    return ReactDevOverlayImpl(props);
};
class DevServer extends _nextserver.default {
    invokeDevMethod({ method, args }) {
        return global._nextDevHandlers[method](this.dir, ...args);
    }
    getStaticPathsWorker() {
        const worker = new _jestworker.Worker(require.resolve("./static-paths-worker"), {
            maxRetries: 1,
            // For dev server, it's not necessary to spin up too many workers as long as you are not doing a load test.
            // This helps reusing the memory a lot.
            numWorkers: 1,
            enableWorkerThreads: this.nextConfig.experimental.workerThreads,
            forkOptions: {
                env: {
                    ...process.env,
                    // discard --inspect/--inspect-brk flags from process.env.NODE_OPTIONS. Otherwise multiple Node.js debuggers
                    // would be started if user launch Next.js in debugging mode. The number of debuggers is linked to
                    // the number of workers Next.js tries to launch. The only worker users are interested in debugging
                    // is the main Next.js one
                    NODE_OPTIONS: (0, _utils.getNodeOptionsWithoutInspect)()
                }
            }
        });
        worker.getStdout().pipe(process.stdout);
        worker.getStderr().pipe(process.stderr);
        return worker;
    }
    constructor(options){
        var _this_nextConfig_experimental_amp, _this_nextConfig_experimental;
        try {
            // Increase the number of stack frames on the server
            Error.stackTraceLimit = 50;
        } catch  {}
        super({
            ...options,
            dev: true
        });
        this.originalFetch = global.fetch;
        this.renderOpts.dev = true;
        this.renderOpts.appDirDevErrorLogger = (err)=>this.logErrorWithOriginalStack(err, "app-dir");
        this.renderOpts.ErrorDebug = ReactDevOverlay;
        this.devReady = new Promise((resolve)=>{
            this.setDevReady = resolve;
        });
        this.staticPathsCache = new _lrucache.default({
            // 5MB
            max: 5 * 1024 * 1024,
            length (value) {
                return JSON.stringify(value.staticPaths).length;
            }
        });
        this.renderOpts.ampSkipValidation = ((_this_nextConfig_experimental = this.nextConfig.experimental) == null ? void 0 : (_this_nextConfig_experimental_amp = _this_nextConfig_experimental.amp) == null ? void 0 : _this_nextConfig_experimental_amp.skipValidation) ?? false;
        this.renderOpts.ampValidator = (html, pathname)=>{
            const validatorPath = this.nextConfig.experimental && this.nextConfig.experimental.amp && this.nextConfig.experimental.amp.validator;
            const AmpHtmlValidator = require("next/dist/compiled/amphtml-validator");
            return AmpHtmlValidator.getInstance(validatorPath).then((validator)=>{
                const result = validator.validateString(html);
                (0, _output.ampValidation)(pathname, result.errors.filter((e)=>e.severity === "ERROR").filter((e)=>this._filterAmpDevelopmentScript(html, e)), result.errors.filter((e)=>e.severity !== "ERROR"));
            });
        };
        const { pagesDir, appDir } = (0, _findpagesdir.findPagesDir)(this.dir);
        this.pagesDir = pagesDir;
        this.appDir = appDir;
    }
    getRouteMatchers() {
        const { pagesDir, appDir } = (0, _findpagesdir.findPagesDir)(this.dir);
        const ensurer = {
            ensure: async (match)=>{
                await this.ensurePage({
                    match,
                    page: match.definition.page,
                    clientOnly: false
                });
            }
        };
        const matchers = new _devroutematchermanager.DevRouteMatcherManager(super.getRouteMatchers(), ensurer, this.dir);
        const extensions = this.nextConfig.pageExtensions;
        const extensionsExpression = new RegExp(`\\.(?:${extensions.join("|")})$`);
        // If the pages directory is available, then configure those matchers.
        if (pagesDir) {
            const fileReader = new _batchedfilereader.BatchedFileReader(new _defaultfilereader.DefaultFileReader({
                // Only allow files that have the correct extensions.
                pathnameFilter: (pathname)=>extensionsExpression.test(pathname)
            }));
            matchers.push(new _devpagesroutematcherprovider.DevPagesRouteMatcherProvider(pagesDir, extensions, fileReader, this.localeNormalizer));
            matchers.push(new _devpagesapiroutematcherprovider.DevPagesAPIRouteMatcherProvider(pagesDir, extensions, fileReader, this.localeNormalizer));
        }
        if (appDir) {
            // We create a new file reader for the app directory because we don't want
            // to include any folders or files starting with an underscore. This will
            // prevent the reader from wasting time reading files that we know we
            // don't care about.
            const fileReader = new _batchedfilereader.BatchedFileReader(new _defaultfilereader.DefaultFileReader({
                // Ignore any directory prefixed with an underscore.
                ignorePartFilter: (part)=>part.startsWith("_")
            }));
            matchers.push(new _devapppageroutematcherprovider.DevAppPageRouteMatcherProvider(appDir, extensions, fileReader));
            matchers.push(new _devapprouteroutematcherprovider.DevAppRouteRouteMatcherProvider(appDir, extensions, fileReader));
        }
        return matchers;
    }
    getBuildId() {
        return "development";
    }
    async prepareImpl() {
        (0, _trace.setGlobal)("distDir", this.distDir);
        (0, _trace.setGlobal)("phase", _constants1.PHASE_DEVELOPMENT_SERVER);
        const telemetry = new _storage.Telemetry({
            distDir: this.distDir
        });
        await super.prepareImpl();
        await this.runInstrumentationHookIfAvailable();
        await this.matchers.reload();
        this.setDevReady();
        // This is required by the tracing subsystem.
        (0, _trace.setGlobal)("appDir", this.appDir);
        (0, _trace.setGlobal)("pagesDir", this.pagesDir);
        (0, _trace.setGlobal)("telemetry", telemetry);
        process.on("unhandledRejection", (reason)=>{
            this.logErrorWithOriginalStack(reason, "unhandledRejection").catch(()=>{});
        });
        process.on("uncaughtException", (err)=>{
            this.logErrorWithOriginalStack(err, "uncaughtException").catch(()=>{});
        });
    }
    async close() {}
    async hasPage(pathname) {
        let normalizedPath;
        try {
            normalizedPath = (0, _normalizepagepath.normalizePagePath)(pathname);
        } catch (err) {
            console.error(err);
            // if normalizing the page fails it means it isn't valid
            // so it doesn't exist so don't throw and return false
            // to ensure we return 404 instead of 500
            return false;
        }
        if ((0, _utils2.isMiddlewareFile)(normalizedPath)) {
            return (0, _findpagefile.findPageFile)(this.dir, normalizedPath, this.nextConfig.pageExtensions, false).then(Boolean);
        }
        let appFile = null;
        let pagesFile = null;
        if (this.appDir) {
            appFile = await (0, _findpagefile.findPageFile)(this.appDir, normalizedPath + "/page", this.nextConfig.pageExtensions, true);
        }
        if (this.pagesDir) {
            pagesFile = await (0, _findpagefile.findPageFile)(this.pagesDir, normalizedPath, this.nextConfig.pageExtensions, false);
        }
        if (appFile && pagesFile) {
            return false;
        }
        return Boolean(appFile || pagesFile);
    }
    async runMiddleware(params) {
        try {
            const result = await super.runMiddleware({
                ...params,
                onWarning: (warn)=>{
                    this.logErrorWithOriginalStack(warn, "warning");
                }
            });
            if ("finished" in result) {
                return result;
            }
            result.waitUntil.catch((error)=>{
                this.logErrorWithOriginalStack(error, "unhandledRejection");
            });
            return result;
        } catch (error) {
            if (error instanceof _utils1.DecodeError) {
                throw error;
            }
            /**
       * We only log the error when it is not a MiddlewareNotFound error as
       * in that case we should be already displaying a compilation error
       * which is what makes the module not found.
       */ if (!(error instanceof _utils1.MiddlewareNotFoundError)) {
                this.logErrorWithOriginalStack(error);
            }
            const err = (0, _iserror.getProperError)(error);
            err.middleware = true;
            const { request, response, parsedUrl } = params;
            /**
       * When there is a failure for an internal Next.js request from
       * middleware we bypass the error without finishing the request
       * so we can serve the required chunks to render the error.
       */ if (request.url.includes("/_next/static") || request.url.includes("/__nextjs_original-stack-frame")) {
                return {
                    finished: false
                };
            }
            response.statusCode = 500;
            await this.renderError(err, request, response, parsedUrl.pathname);
            return {
                finished: true
            };
        }
    }
    async runEdgeFunction(params) {
        try {
            return super.runEdgeFunction({
                ...params,
                onWarning: (warn)=>{
                    this.logErrorWithOriginalStack(warn, "warning");
                }
            });
        } catch (error) {
            if (error instanceof _utils1.DecodeError) {
                throw error;
            }
            this.logErrorWithOriginalStack(error, "warning");
            const err = (0, _iserror.getProperError)(error);
            const { req, res, page } = params;
            res.statusCode = 500;
            await this.renderError(err, req, res, page);
            return null;
        }
    }
    async handleRequest(req, res, parsedUrl) {
        await this.devReady;
        return await super.handleRequest(req, res, parsedUrl);
    }
    async run(req, res, parsedUrl) {
        await this.devReady;
        const { basePath } = this.nextConfig;
        let originalPathname = null;
        // TODO: see if we can remove this in the future
        if (basePath && (0, _pathhasprefix.pathHasPrefix)(parsedUrl.pathname || "/", basePath)) {
            // strip basePath before handling dev bundles
            // If replace ends up replacing the full url it'll be `undefined`, meaning we have to default it to `/`
            originalPathname = parsedUrl.pathname;
            parsedUrl.pathname = (0, _removepathprefix.removePathPrefix)(parsedUrl.pathname || "/", basePath);
        }
        const { pathname } = parsedUrl;
        if (pathname.startsWith("/_next")) {
            if (await (0, _fileexists.fileExists)((0, _path.join)(this.publicDir, "_next"))) {
                throw new Error(_constants.PUBLIC_DIR_MIDDLEWARE_CONFLICT);
            }
        }
        if (originalPathname) {
            // restore the path before continuing so that custom-routes can accurately determine
            // if they should match against the basePath or not
            parsedUrl.pathname = originalPathname;
        }
        try {
            return await super.run(req, res, parsedUrl);
        } catch (error) {
            const err = (0, _iserror.getProperError)(error);
            (0, _formatservererror.formatServerError)(err);
            this.logErrorWithOriginalStack(err).catch(()=>{});
            if (!res.sent) {
                res.statusCode = 500;
                try {
                    return await this.renderError(err, req, res, pathname, {
                        __NEXT_PAGE: (0, _iserror.default)(err) && err.page || pathname || ""
                    });
                } catch (internalErr) {
                    console.error(internalErr);
                    res.body("Internal Server Error").send();
                }
            }
        }
    }
    async logErrorWithOriginalStack(err, type) {
        if (this.isRenderWorker) {
            await this.invokeDevMethod({
                method: "logErrorWithOriginalStack",
                args: [
                    err,
                    type
                ]
            });
            return;
        }
        throw new Error("Invariant logErrorWithOriginalStack called outside render worker");
    }
    getPagesManifest() {
        return _nodemanifestloader.NodeManifestLoader.require((0, _path.join)(this.serverDistDir, _constants1.PAGES_MANIFEST)) ?? undefined;
    }
    getAppPathsManifest() {
        if (!this.hasAppDir) return undefined;
        return _nodemanifestloader.NodeManifestLoader.require((0, _path.join)(this.serverDistDir, _constants1.APP_PATHS_MANIFEST)) ?? undefined;
    }
    getMiddleware() {
        var _this_middleware;
        // We need to populate the match
        // field as it isn't serializable
        if (((_this_middleware = this.middleware) == null ? void 0 : _this_middleware.match) === null) {
            this.middleware.match = (0, _middlewareroutematcher.getMiddlewareRouteMatcher)(this.middleware.matchers || []);
        }
        return this.middleware;
    }
    getNextFontManifest() {
        return undefined;
    }
    async hasMiddleware() {
        return this.hasPage(this.actualMiddlewareFile);
    }
    async ensureMiddleware() {
        return this.ensurePage({
            page: this.actualMiddlewareFile,
            clientOnly: false
        });
    }
    async runInstrumentationHookIfAvailable() {
        if (this.actualInstrumentationHookFile && await this.ensurePage({
            page: this.actualInstrumentationHookFile,
            clientOnly: false
        }).then(()=>true).catch(()=>false)) {
            _buildcontext.NextBuildContext.hasInstrumentationHook = true;
            try {
                const instrumentationHook = await require((0, _path.join)(this.distDir, "server", _constants.INSTRUMENTATION_HOOK_FILENAME));
                await instrumentationHook.register();
            } catch (err) {
                err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
                throw err;
            }
        }
    }
    async ensureEdgeFunction({ page, appPaths }) {
        return this.ensurePage({
            page,
            appPaths,
            clientOnly: false
        });
    }
    generateRoutes(_dev) {
    // In development we expose all compiled files for react-error-overlay's line show feature
    // We use unshift so that we're sure the routes is defined before Next's default routes
    // routes.unshift({
    //   match: getPathMatch('/_next/development/:path*'),
    //   type: 'route',
    //   name: '_next/development catchall',
    //   fn: async (req, res, params) => {
    //     const p = pathJoin(this.distDir, ...(params.path || []))
    //     await this.serveStatic(req, res, p)
    //     return {
    //       finished: true,
    //     }
    //   },
    // })
    }
    _filterAmpDevelopmentScript(html, event) {
        if (event.code !== "DISALLOWED_SCRIPT_TAG") {
            return true;
        }
        const snippetChunks = html.split("\n");
        let snippet;
        if (!(snippet = html.split("\n")[event.line - 1]) || !(snippet = snippet.substring(event.col))) {
            return true;
        }
        snippet = snippet + snippetChunks.slice(event.line).join("\n");
        snippet = snippet.substring(0, snippet.indexOf("</script>"));
        return !snippet.includes("data-amp-development-mode-only");
    }
    async getStaticPaths({ pathname, requestHeaders, page, isAppPath }) {
        // we lazy load the staticPaths to prevent the user
        // from waiting on them for the page to load in dev mode
        const __getStaticPaths = async ()=>{
            const { configFileName, publicRuntimeConfig, serverRuntimeConfig, httpAgentOptions } = this.nextConfig;
            const { locales, defaultLocale } = this.nextConfig.i18n || {};
            const staticPathsWorker = this.getStaticPathsWorker();
            try {
                const pathsResult = await staticPathsWorker.loadStaticPaths({
                    distDir: this.distDir,
                    pathname,
                    config: {
                        configFileName,
                        publicRuntimeConfig,
                        serverRuntimeConfig
                    },
                    httpAgentOptions,
                    locales,
                    defaultLocale,
                    page,
                    isAppPath,
                    requestHeaders,
                    incrementalCacheHandlerPath: this.nextConfig.experimental.incrementalCacheHandlerPath,
                    fetchCacheKeyPrefix: this.nextConfig.experimental.fetchCacheKeyPrefix,
                    isrFlushToDisk: this.nextConfig.experimental.isrFlushToDisk,
                    maxMemoryCacheSize: this.nextConfig.experimental.isrMemoryCacheSize
                });
                return pathsResult;
            } finally{
                // we don't re-use workers so destroy the used one
                staticPathsWorker.end();
            }
        };
        const result = this.staticPathsCache.get(pathname);
        const nextInvoke = (0, _coalescedfunction.withCoalescedInvoke)(__getStaticPaths)(`staticPaths-${pathname}`, []).then((res)=>{
            const { paths: staticPaths = [], fallback } = res.value;
            if (!isAppPath && this.nextConfig.output === "export") {
                if (fallback === "blocking") {
                    throw new Error('getStaticPaths with "fallback: blocking" cannot be used with "output: export". See more info here: https://nextjs.org/docs/advanced-features/static-html-export');
                } else if (fallback === true) {
                    throw new Error('getStaticPaths with "fallback: true" cannot be used with "output: export". See more info here: https://nextjs.org/docs/advanced-features/static-html-export');
                }
            }
            const value = {
                staticPaths,
                fallbackMode: fallback === "blocking" ? "blocking" : fallback === true ? "static" : fallback
            };
            this.staticPathsCache.set(pathname, value);
            return value;
        }).catch((err)=>{
            this.staticPathsCache.del(pathname);
            if (!result) throw err;
            _log.error(`Failed to generate static paths for ${pathname}:`);
            console.error(err);
        });
        if (result) {
            return result;
        }
        return nextInvoke;
    }
    restorePatchedGlobals() {
        global.fetch = this.originalFetch;
    }
    async ensurePage(opts) {
        if (!this.isRenderWorker) {
            throw new Error("Invariant ensurePage called outside render worker");
        }
        await this.invokeDevMethod({
            method: "ensurePage",
            args: [
                opts
            ]
        });
    }
    async findPageComponents({ page, query, params, isAppPath, appPaths = null, shouldEnsure }) {
        await this.devReady;
        const compilationErr = await this.getCompilationError(page);
        if (compilationErr) {
            // Wrap build errors so that they don't get logged again
            throw new _nextserver.WrappedBuildError(compilationErr);
        }
        try {
            if (shouldEnsure || this.renderOpts.customServer) {
                await this.ensurePage({
                    page,
                    appPaths,
                    clientOnly: false
                });
            }
            this.nextFontManifest = super.getNextFontManifest();
            // before we re-evaluate a route module, we want to restore globals that might
            // have been patched previously to their original state so that we don't
            // patch on top of the previous patch, which would keep the context of the previous
            // patched global in memory, creating a memory leak.
            this.restorePatchedGlobals();
            return await super.findPageComponents({
                page,
                query,
                params,
                isAppPath,
                shouldEnsure
            });
        } catch (err) {
            if (err.code !== "ENOENT") {
                throw err;
            }
            return null;
        }
    }
    async getFallbackErrorComponents() {
        if (this.isRenderWorker) {
            await this.invokeDevMethod({
                method: "getFallbackErrorComponents",
                args: []
            });
            return await (0, _loaddefaulterrorcomponents.loadDefaultErrorComponents)(this.distDir);
        }
        throw new Error(`Invariant getFallbackErrorComponents called outside render worker`);
    }
    async getCompilationError(page) {
        if (this.isRenderWorker) {
            return await this.invokeDevMethod({
                method: "getCompilationError",
                args: [
                    page
                ]
            });
        }
        throw new Error("Invariant getCompilationError called outside render worker");
    }
}

//# sourceMappingURL=next-dev-server.js.map