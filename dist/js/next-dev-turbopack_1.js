// TODO: Remove use of `any` type.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _interop_require_default = require("@swc/helpers/_/_interop_require_default");
const _ = require("./");
const _hotmiddlewareclient = /*#__PURE__*/ _interop_require_default._(require("./dev/hot-middleware-client"));
require("./setup-hydration-warning");
const _pagebootstrap = require("./page-bootstrap");
const _websocket = require("./dev/error-overlay/websocket");
const _hmrclientts = require("@vercel/turbopack-ecmascript-runtime/dev/client/hmr-client.ts");
window.next = {
    version: "" + _.version + "-turbo",
    // router is initialized later so it has to be live-binded
    get router () {
        return _.router;
    },
    emitter: _.emitter
};
self.__next_set_public_path__ = ()=>{};
self.__webpack_hash__ = "";
const devClient = (0, _hotmiddlewareclient.default)("turbopack");
(0, _.initialize)({
    devClient
}).then((param)=>{
    let { assetPrefix } = param;
    // for the page loader
    async function loadPageChunk(chunkData) {
        if (typeof chunkData === "string") {
            const fullPath = assetPrefix + chunkData;
            await __turbopack_load__(fullPath);
        } else {
            let fullChunkData = {
                ...chunkData,
                path: assetPrefix + chunkData.path
            };
            await __turbopack_load__(fullChunkData);
        }
    }
    self.__turbopack_load_page_chunks__ = (page, chunksData)=>{
        const chunkPromises = chunksData.map(loadPageChunk);
        Promise.all(chunkPromises).catch((err)=>console.error("failed to load chunks for page " + page, err));
    };
    (0, _hmrclientts.connect)({
        addMessageListener (cb) {
            (0, _websocket.addMessageListener)((msg)=>{
                var _msg_type;
                if (!("type" in msg)) {
                    return;
                }
                // Only call Turbopack's message listener for turbopack messages
                if ((_msg_type = msg.type) == null ? void 0 : _msg_type.startsWith("turbopack-")) {
                    cb(msg);
                }
            });
        },
        sendMessage: _websocket.sendMessage
    });
    return (0, _pagebootstrap.pageBootrap)(assetPrefix);
}).catch((err)=>{
    console.error("Error was not caught", err);
});

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=next-dev-turbopack.js.map