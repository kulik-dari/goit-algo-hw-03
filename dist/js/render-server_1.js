"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    clearModuleContext: null,
    deleteAppClientCache: null,
    deleteCache: null,
    propagateServerField: null,
    initialize: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearModuleContext: function() {
        return clearModuleContext;
    },
    deleteAppClientCache: function() {
        return deleteAppClientCache;
    },
    deleteCache: function() {
        return deleteCache;
    },
    propagateServerField: function() {
        return propagateServerField;
    },
    initialize: function() {
        return initialize;
    }
});
const _next = /*#__PURE__*/ _interop_require_default(require("../next"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const result = {};
let apps = {};
let sandboxContext;
let requireCacheHotReloader;
if (process.env.NODE_ENV !== "production") {
    sandboxContext = require("../web/sandbox/context");
    requireCacheHotReloader = require("../../build/webpack/plugins/nextjs-require-cache-hot-reloader");
}
function clearModuleContext(target) {
    return sandboxContext == null ? void 0 : sandboxContext.clearModuleContext(target);
}
function deleteAppClientCache() {
    return requireCacheHotReloader == null ? void 0 : requireCacheHotReloader.deleteAppClientCache();
}
function deleteCache(filePaths) {
    for (const filePath of filePaths){
        requireCacheHotReloader == null ? void 0 : requireCacheHotReloader.deleteCache(filePath);
    }
}
async function propagateServerField(dir, field, value) {
    const app = apps[dir];
    if (!app) {
        throw new Error("Invariant cant propagate server field, no app initialized");
    }
    let appField = app.server;
    if (appField) {
        if (typeof appField[field] === "function") {
            await appField[field].apply(app.server, Array.isArray(value) ? value : []);
        } else {
            appField[field] = value;
        }
    }
}
async function initialize(opts) {
    // if we already setup the server return as we only need to do
    // this on first worker boot
    if (result[opts.dir]) {
        return result[opts.dir];
    }
    const type = process.env.__NEXT_PRIVATE_RENDER_WORKER;
    if (type) {
        process.title = "next-render-worker-" + type;
    }
    let requestHandler;
    let upgradeHandler;
    const app = (0, _next.default)({
        ...opts,
        _routerWorker: opts.workerType === "router",
        _renderWorker: opts.workerType === "render",
        hostname: opts.hostname || "localhost",
        customServer: false,
        httpServer: opts.server,
        port: opts.port,
        isNodeDebugging: opts.isNodeDebugging
    });
    apps[opts.dir] = app;
    requestHandler = app.getRequestHandler();
    upgradeHandler = app.getUpgradeHandler();
    await app.prepare(opts.serverFields);
    result[opts.dir] = {
        requestHandler,
        upgradeHandler
    };
    return result[opts.dir];
}

//# sourceMappingURL=render-server.js.map