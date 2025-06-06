"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    React: null,
    ReactDOM: null,
    ReactServerDOMWebpackServerNode: null,
    ReactServerDOMWebpackServerEdge: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    React: function() {
        return _react;
    },
    ReactDOM: function() {
        return _serverrenderingstub;
    },
    ReactServerDOMWebpackServerNode: function() {
        return _servernode;
    },
    ReactServerDOMWebpackServerEdge: function() {
        return _serveredge;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _serverrenderingstub = /*#__PURE__*/ _interop_require_wildcard(require("react-dom/server-rendering-stub"));
const _servernode = /*#__PURE__*/ _interop_require_wildcard(require("react-server-dom-webpack/server.node"));
const _serveredge = /*#__PURE__*/ _interop_require_wildcard(require("react-server-dom-webpack/server.edge"));
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

//# sourceMappingURL=entrypoints.js.map