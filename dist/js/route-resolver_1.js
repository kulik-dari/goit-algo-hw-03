"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "makeResolver", {
    enumerable: true,
    get: function() {
        return makeResolver;
    }
});
require("../require-hook");
require("../node-polyfill-fetch");
const _url = /*#__PURE__*/ _interop_require_default(require("url"));
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _findpagefile = require("./find-page-file");
const _requestmeta = require("../request-meta");
const _debug = /*#__PURE__*/ _interop_require_default(require("next/dist/compiled/debug"));
const _bodystreams = require("../body-streams");
const _findpagesdir = require("../../lib/find-pages-dir");
const _filesystem = require("./router-utils/filesystem");
const _proxyrequest = require("./router-utils/proxy-request");
const _resolveroutes = require("./router-utils/resolve-routes");
const _constants = require("../../shared/lib/constants");
const _formathostname = require("./format-hostname");
const _nextrequest = require("../web/spec-extension/adapters/next-request");
const _middlewareroutematcher = require("../../shared/lib/router/utils/middleware-route-matcher");
const _pipereadable = require("../pipe-readable");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const debug = (0, _debug.default)("next:router-server");
async function makeResolver(dir, nextConfig, middleware, { hostname = "localhost", port = 3000 }) {
    const fsChecker = await (0, _filesystem.setupFsCheck)({
        dir,
        dev: true,
        minimalMode: false,
        config: nextConfig
    });
    const { appDir, pagesDir } = (0, _findpagesdir.findPagesDir)(dir);
    // we format the hostname so that it can be fetched
    const fetchHostname = (0, _formathostname.formatHostname)(hostname);
    fsChecker.ensureCallback(async (item)=>{
        let result = null;
        if (item.type === "appFile") {
            if (!appDir) {
                throw new Error("no app dir present");
            }
            result = await (0, _findpagefile.findPageFile)(appDir, item.itemPath, nextConfig.pageExtensions, true);
        } else if (item.type === "pageFile") {
            if (!pagesDir) {
                throw new Error("no pages dir present");
            }
            result = await (0, _findpagefile.findPageFile)(pagesDir, item.itemPath, nextConfig.pageExtensions, false);
        }
        if (!result) {
            throw new Error(`failed to find page file ${item.type} ${item.itemPath}`);
        }
    });
    const distDir = _path.default.join(dir, nextConfig.distDir);
    const middlewareInfo = middleware ? {
        name: "middleware",
        paths: middleware.files.map((file)=>_path.default.join(process.cwd(), file)),
        wasm: [],
        assets: []
    } : {};
    if (middleware == null ? void 0 : middleware.files.length) {
        var _middleware_matcher;
        fsChecker.middlewareMatcher = (0, _middlewareroutematcher.getMiddlewareRouteMatcher)(((_middleware_matcher = middleware.matcher) == null ? void 0 : _middleware_matcher.map((item)=>({
                regexp: item,
                originalSource: item
            }))) || [
            {
                regexp: ".*",
                originalSource: "/:path*"
            }
        ]);
    }
    const resolveRoutes = (0, _resolveroutes.getResolveRoutes)(fsChecker, nextConfig, {
        dir,
        port,
        hostname,
        isNodeDebugging: false,
        dev: true,
        workerType: "render"
    }, {
        pages: {
            async initialize () {
                return {
                    async requestHandler (req, res) {
                        if (!req.headers["x-middleware-invoke"]) {
                            throw new Error(`Invariant unexpected request handler call`);
                        }
                        const cloneableBody = (0, _bodystreams.getCloneableBody)(req);
                        const { run } = require("../web/sandbox");
                        const result = await run({
                            distDir,
                            name: middlewareInfo.name || "/",
                            paths: middlewareInfo.paths || [],
                            edgeFunctionEntry: middlewareInfo,
                            request: {
                                headers: req.headers,
                                method: req.method || "GET",
                                nextConfig: {
                                    i18n: nextConfig.i18n,
                                    basePath: nextConfig.basePath,
                                    trailingSlash: nextConfig.trailingSlash
                                },
                                url: `http://${fetchHostname}:${port}${req.url}`,
                                body: cloneableBody,
                                signal: (0, _nextrequest.signalFromNodeResponse)(res)
                            },
                            useCache: true,
                            onWarning: console.warn
                        });
                        const err = new Error();
                        err.result = result;
                        throw err;
                    },
                    async upgradeHandler () {
                        throw new Error(`Invariant: unexpected upgrade handler call`);
                    }
                };
            },
            deleteAppClientCache () {},
            async deleteCache () {},
            async clearModuleContext () {},
            async propagateServerField () {}
        }
    }, {});
    return async function resolveRoute(req, res) {
        const routeResult = await resolveRoutes({
            req,
            res,
            isUpgradeReq: false,
            signal: (0, _nextrequest.signalFromNodeResponse)(res)
        });
        const { matchedOutput, bodyStream, statusCode, parsedUrl, resHeaders, finished } = routeResult;
        debug("requestHandler!", req.url, {
            matchedOutput,
            statusCode,
            resHeaders,
            bodyStream: !!bodyStream,
            parsedUrl: {
                pathname: parsedUrl.pathname,
                query: parsedUrl.query
            },
            finished
        });
        for (const key of Object.keys(resHeaders || {})){
            res.setHeader(key, resHeaders[key]);
        }
        if (!bodyStream && statusCode && statusCode > 300 && statusCode < 400) {
            const destination = _url.default.format(parsedUrl);
            res.statusCode = statusCode;
            res.setHeader("location", destination);
            if (statusCode === _constants.PERMANENT_REDIRECT_STATUS) {
                res.setHeader("Refresh", `0;url=${destination}`);
            }
            res.end(destination);
            return;
        }
        // handle middleware body response
        if (bodyStream) {
            res.statusCode = statusCode || 200;
            return await (0, _pipereadable.pipeReadable)(bodyStream, res);
        }
        if (finished && parsedUrl.protocol) {
            var _getRequestMeta;
            await (0, _proxyrequest.proxyRequest)(req, res, parsedUrl, undefined, (_getRequestMeta = (0, _requestmeta.getRequestMeta)(req, "__NEXT_CLONABLE_BODY")) == null ? void 0 : _getRequestMeta.cloneBodyStream(), nextConfig.experimental.proxyTimeout);
            return;
        }
        res.setHeader("x-nextjs-route-result", "1");
        res.end();
        return {
            type: "rewrite",
            statusCode: 200,
            headers: resHeaders,
            url: _url.default.format(parsedUrl)
        };
    };
}

//# sourceMappingURL=route-resolver.js.map