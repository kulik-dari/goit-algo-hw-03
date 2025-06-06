import MODERN_BROWSERSLIST_TARGET from "./modern-browserslist-target";
export { MODERN_BROWSERSLIST_TARGET };
export const COMPILER_NAMES = {
    client: "client",
    server: "server",
    edgeServer: "edge-server"
};
export const INTERNAL_HEADERS = [
    "x-invoke-path",
    "x-invoke-status",
    "x-invoke-error",
    "x-invoke-query",
    "x-middleware-invoke"
];
export const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
export const PHASE_EXPORT = "phase-export";
export const PHASE_PRODUCTION_BUILD = "phase-production-build";
export const PHASE_PRODUCTION_SERVER = "phase-production-server";
export const PHASE_DEVELOPMENT_SERVER = "phase-development-server";
export const PHASE_TEST = "phase-test";
export const PHASE_INFO = "phase-info";
export const PAGES_MANIFEST = "pages-manifest.json";
export const APP_PATHS_MANIFEST = "app-paths-manifest.json";
export const APP_PATH_ROUTES_MANIFEST = "app-path-routes-manifest.json";
export const BUILD_MANIFEST = "build-manifest.json";
export const APP_BUILD_MANIFEST = "app-build-manifest.json";
export const FUNCTIONS_CONFIG_MANIFEST = "functions-config-manifest.json";
export const SUBRESOURCE_INTEGRITY_MANIFEST = "subresource-integrity-manifest";
export const NEXT_FONT_MANIFEST = "next-font-manifest";
export const EXPORT_MARKER = "export-marker.json";
export const EXPORT_DETAIL = "export-detail.json";
export const PRERENDER_MANIFEST = "prerender-manifest.json";
export const ROUTES_MANIFEST = "routes-manifest.json";
export const IMAGES_MANIFEST = "images-manifest.json";
export const SERVER_FILES_MANIFEST = "required-server-files.json";
export const DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
export const MIDDLEWARE_MANIFEST = "middleware-manifest.json";
export const DEV_MIDDLEWARE_MANIFEST = "_devMiddlewareManifest.json";
export const REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
export const FONT_MANIFEST = "font-manifest.json";
export const SERVER_DIRECTORY = "server";
export const CONFIG_FILES = [
    "next.config.js",
    "next.config.mjs"
];
export const BUILD_ID_FILE = "BUILD_ID";
export const BLOCKED_PAGES = [
    "/_document",
    "/_app",
    "/_error"
];
export const CLIENT_PUBLIC_FILES_PATH = "public";
export const CLIENT_STATIC_FILES_PATH = "static";
export const STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
export const NEXT_BUILTIN_DOCUMENT = "__NEXT_BUILTIN_DOCUMENT__";
// server/[entry]/page_client-reference-manifest.js
export const CLIENT_REFERENCE_MANIFEST = "client-reference-manifest";
// server/server-reference-manifest
export const SERVER_REFERENCE_MANIFEST = "server-reference-manifest";
// server/middleware-build-manifest.js
export const MIDDLEWARE_BUILD_MANIFEST = "middleware-build-manifest";
// server/middleware-react-loadable-manifest.js
export const MIDDLEWARE_REACT_LOADABLE_MANIFEST = "middleware-react-loadable-manifest";
// static/runtime/main.js
export const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
export const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
// next internal client components chunk for layouts
export const APP_CLIENT_INTERNALS = "app-pages-internals";
// static/runtime/react-refresh.js
export const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
// static/runtime/amp.js
export const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
// static/runtime/webpack.js
export const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
// static/runtime/polyfills.js
export const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
export const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
export const EDGE_RUNTIME_WEBPACK = "edge-runtime-webpack";
export const TEMPORARY_REDIRECT_STATUS = 307;
export const PERMANENT_REDIRECT_STATUS = 308;
export const STATIC_PROPS_ID = "__N_SSG";
export const SERVER_PROPS_ID = "__N_SSP";
export const PAGE_SEGMENT_KEY = "__PAGE__";
export const GOOGLE_FONT_PROVIDER = "https://fonts.googleapis.com/";
export const OPTIMIZED_FONT_PROVIDERS = [
    {
        url: GOOGLE_FONT_PROVIDER,
        preconnect: "https://fonts.gstatic.com"
    },
    {
        url: "https://use.typekit.net",
        preconnect: "https://use.typekit.net"
    }
];
export const DEFAULT_SERIF_FONT = {
    name: "Times New Roman",
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
export const DEFAULT_SANS_SERIF_FONT = {
    name: "Arial",
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
export const STATIC_STATUS_PAGES = [
    "/500"
];
export const TRACE_OUTPUT_VERSION = 1;
// in `MB`
export const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
export const RSC_MODULE_TYPES = {
    client: "client",
    server: "server"
};
// comparing
// https://nextjs.org/docs/api-reference/edge-runtime
// with
// https://nodejs.org/docs/latest/api/globals.html
export const EDGE_UNSUPPORTED_NODE_APIS = [
    "clearImmediate",
    "setImmediate",
    "BroadcastChannel",
    "ByteLengthQueuingStrategy",
    "CompressionStream",
    "CountQueuingStrategy",
    "DecompressionStream",
    "DomException",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "ReadableByteStreamController",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "TransformStreamDefaultController",
    "WritableStreamDefaultController"
];
export const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);

//# sourceMappingURL=constants.js.map