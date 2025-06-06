"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    SUPPORTED_NATIVE_MODULES: null,
    getEdgePolyfilledModules: null,
    handleWebpackExternalForEdgeRuntime: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return MiddlewarePlugin;
    },
    SUPPORTED_NATIVE_MODULES: function() {
        return SUPPORTED_NATIVE_MODULES;
    },
    getEdgePolyfilledModules: function() {
        return getEdgePolyfilledModules;
    },
    handleWebpackExternalForEdgeRuntime: function() {
        return handleWebpackExternalForEdgeRuntime;
    }
});
const _routeregex = require("../../../shared/lib/router/utils/route-regex");
const _getmodulebuildinfo = require("../loaders/get-module-build-info");
const _utils = require("../../../shared/lib/router/utils");
const _webpack = require("next/dist/compiled/webpack/webpack");
const _micromatch = require("next/dist/compiled/micromatch");
const _path = /*#__PURE__*/ _interop_require_default(require("path"));
const _constants = require("../../../shared/lib/constants");
const _shared = require("../../../trace/shared");
const _events = require("../../../telemetry/events");
const _apppaths = require("../../../shared/lib/router/utils/app-paths");
const _constants1 = require("../../../lib/constants");
const _buildcontext = require("../../build-context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const KNOWN_SAFE_DYNAMIC_PACKAGES = require("../../../lib/known-edge-safe-packages.json");
const NAME = "MiddlewarePlugin";
/**
 * Checks the value of usingIndirectEval and when it is a set of modules it
 * check if any of the modules is actually being used. If the value is
 * simply truthy it will return true.
 */ function isUsingIndirectEvalAndUsedByExports(args) {
    const { moduleGraph, runtime, module: module1, usingIndirectEval, wp } = args;
    if (typeof usingIndirectEval === "boolean") {
        return usingIndirectEval;
    }
    const exportsInfo = moduleGraph.getExportsInfo(module1);
    for (const exportName of usingIndirectEval){
        if (exportsInfo.getUsed(exportName, runtime) !== wp.UsageState.Unused) {
            return true;
        }
    }
    return false;
}
function getEntryFiles(entryFiles, meta, opts) {
    const files = [];
    if (meta.edgeSSR) {
        if (meta.edgeSSR.isServerComponent) {
            files.push(`server/${_constants.SERVER_REFERENCE_MANIFEST}.js`);
            if (opts.sriEnabled) {
                files.push(`server/${_constants.SUBRESOURCE_INTEGRITY_MANIFEST}.js`);
            }
            files.push(...entryFiles.filter((file)=>file.startsWith("app/") && !file.endsWith(".hot-update.js")).map((file)=>"server/" + file.replace(".js", "_" + _constants.CLIENT_REFERENCE_MANIFEST + ".js")));
        }
        files.push(`server/${_constants.MIDDLEWARE_BUILD_MANIFEST}.js`, `server/${_constants.MIDDLEWARE_REACT_LOADABLE_MANIFEST}.js`);
        files.push(`server/${_constants.NEXT_FONT_MANIFEST}.js`);
    }
    if (_buildcontext.NextBuildContext.hasInstrumentationHook) {
        files.push(`server/edge-${_constants1.INSTRUMENTATION_HOOK_FILENAME}.js`);
    }
    if (process.env.NODE_ENV === "production") {
        files.push(_constants.PRERENDER_MANIFEST.replace("json", "js"));
    }
    files.push(...entryFiles.filter((file)=>!file.endsWith(".hot-update.js")).map((file)=>"server/" + file));
    return files;
}
function getCreateAssets(params) {
    const { compilation, metadataByEntry, opts } = params;
    return (assets)=>{
        const middlewareManifest = {
            sortedMiddleware: [],
            middleware: {},
            functions: {},
            version: 2
        };
        for (const entrypoint of compilation.entrypoints.values()){
            var _metadata_edgeMiddleware, _metadata_edgeSSR, _metadata_edgeApiFunction, _metadata_edgeSSR1, _metadata_edgeMiddleware1;
            if (!entrypoint.name) {
                continue;
            }
            // There should always be metadata for the entrypoint.
            const metadata = metadataByEntry.get(entrypoint.name);
            const page = (metadata == null ? void 0 : (_metadata_edgeMiddleware = metadata.edgeMiddleware) == null ? void 0 : _metadata_edgeMiddleware.page) || (metadata == null ? void 0 : (_metadata_edgeSSR = metadata.edgeSSR) == null ? void 0 : _metadata_edgeSSR.page) || (metadata == null ? void 0 : (_metadata_edgeApiFunction = metadata.edgeApiFunction) == null ? void 0 : _metadata_edgeApiFunction.page);
            if (!page) {
                continue;
            }
            const matcherSource = ((_metadata_edgeSSR1 = metadata.edgeSSR) == null ? void 0 : _metadata_edgeSSR1.isAppDir) ? (0, _apppaths.normalizeAppPath)(page) : page;
            const catchAll = !metadata.edgeSSR && !metadata.edgeApiFunction;
            const { namedRegex } = (0, _routeregex.getNamedMiddlewareRegex)(matcherSource, {
                catchAll
            });
            const matchers = (metadata == null ? void 0 : (_metadata_edgeMiddleware1 = metadata.edgeMiddleware) == null ? void 0 : _metadata_edgeMiddleware1.matchers) ?? [
                {
                    regexp: namedRegex,
                    originalSource: page === "/" && catchAll ? "/:path*" : matcherSource
                }
            ];
            const edgeFunctionDefinition = {
                files: getEntryFiles(entrypoint.getFiles(), metadata, opts),
                name: entrypoint.name,
                page: page,
                matchers,
                wasm: Array.from(metadata.wasmBindings, ([name, filePath])=>({
                        name,
                        filePath
                    })),
                assets: Array.from(metadata.assetBindings, ([name, filePath])=>({
                        name,
                        filePath
                    })),
                ...metadata.regions && {
                    regions: metadata.regions
                }
            };
            if (metadata.edgeApiFunction || metadata.edgeSSR) {
                middlewareManifest.functions[page] = edgeFunctionDefinition;
            } else {
                middlewareManifest.middleware[page] = edgeFunctionDefinition;
            }
        }
        middlewareManifest.sortedMiddleware = (0, _utils.getSortedRoutes)(Object.keys(middlewareManifest.middleware));
        assets[_constants.MIDDLEWARE_MANIFEST] = new _webpack.sources.RawSource(JSON.stringify(middlewareManifest, null, 2));
    };
}
function buildWebpackError({ message, loc, compilation, entryModule, parser }) {
    const error = new compilation.compiler.webpack.WebpackError(message);
    error.name = NAME;
    const module1 = entryModule ?? (parser == null ? void 0 : parser.state.current);
    if (module1) {
        error.module = module1;
    }
    error.loc = loc;
    return error;
}
function isInMiddlewareLayer(parser) {
    var _parser_state_module;
    return ((_parser_state_module = parser.state.module) == null ? void 0 : _parser_state_module.layer) === "middleware";
}
function isNodeJsModule(moduleName) {
    return require("module").builtinModules.includes(moduleName);
}
function isDynamicCodeEvaluationAllowed(fileName, middlewareConfig, rootDir) {
    // Some packages are known to use `eval` but are safe to use in the Edge
    // Runtime because the dynamic code will never be executed.
    if (KNOWN_SAFE_DYNAMIC_PACKAGES.some((pkg)=>fileName.includes(`/node_modules/${pkg}/`.replace(/\//g, _path.default.sep)))) {
        return true;
    }
    const name = fileName.replace(rootDir ?? "", "");
    return (0, _micromatch.isMatch)(name, (middlewareConfig == null ? void 0 : middlewareConfig.unstable_allowDynamicGlobs) ?? []);
}
function buildUnsupportedApiError({ apiName, loc, ...rest }) {
    return buildWebpackError({
        message: `A Node.js API is used (${apiName} at line: ${loc.start.line}) which is not supported in the Edge Runtime.
Learn more: https://nextjs.org/docs/api-reference/edge-runtime`,
        loc,
        ...rest
    });
}
function registerUnsupportedApiHooks(parser, compilation) {
    for (const expression of _constants.EDGE_UNSUPPORTED_NODE_APIS){
        const warnForUnsupportedApi = (node)=>{
            if (!isInMiddlewareLayer(parser)) {
                return;
            }
            compilation.warnings.push(buildUnsupportedApiError({
                compilation,
                parser,
                apiName: expression,
                ...node
            }));
            return true;
        };
        parser.hooks.call.for(expression).tap(NAME, warnForUnsupportedApi);
        parser.hooks.expression.for(expression).tap(NAME, warnForUnsupportedApi);
        parser.hooks.callMemberChain.for(expression).tap(NAME, warnForUnsupportedApi);
        parser.hooks.expressionMemberChain.for(expression).tap(NAME, warnForUnsupportedApi);
    }
    const warnForUnsupportedProcessApi = (node, [callee])=>{
        if (!isInMiddlewareLayer(parser) || callee === "env") {
            return;
        }
        compilation.warnings.push(buildUnsupportedApiError({
            compilation,
            parser,
            apiName: `process.${callee}`,
            ...node
        }));
        return true;
    };
    parser.hooks.callMemberChain.for("process").tap(NAME, warnForUnsupportedProcessApi);
    parser.hooks.expressionMemberChain.for("process").tap(NAME, warnForUnsupportedProcessApi);
}
function getCodeAnalyzer(params) {
    return (parser)=>{
        const { dev, compiler: { webpack: wp }, compilation } = params;
        const { hooks } = parser;
        /**
     * For an expression this will check the graph to ensure it is being used
     * by exports. Then it will store in the module buildInfo a boolean to
     * express that it contains dynamic code and, if it is available, the
     * module path that is using it.
     */ const handleExpression = ()=>{
            if (!isInMiddlewareLayer(parser)) {
                return;
            }
            wp.optimize.InnerGraph.onUsage(parser.state, (used = true)=>{
                const buildInfo = (0, _getmodulebuildinfo.getModuleBuildInfo)(parser.state.module);
                if (buildInfo.usingIndirectEval === true || used === false) {
                    return;
                }
                if (!buildInfo.usingIndirectEval || used === true) {
                    buildInfo.usingIndirectEval = used;
                    return;
                }
                buildInfo.usingIndirectEval = new Set([
                    ...Array.from(buildInfo.usingIndirectEval),
                    ...Array.from(used)
                ]);
            });
        };
        /**
     * This expression handler allows to wrap a dynamic code expression with a
     * function call where we can warn about dynamic code not being allowed
     * but actually execute the expression.
     */ const handleWrapExpression = (expr)=>{
            if (!isInMiddlewareLayer(parser)) {
                return;
            }
            const { ConstDependency } = wp.dependencies;
            const dep1 = new ConstDependency("__next_eval__(function() { return ", expr.range[0]);
            dep1.loc = expr.loc;
            parser.state.module.addPresentationalDependency(dep1);
            const dep2 = new ConstDependency("})", expr.range[1]);
            dep2.loc = expr.loc;
            parser.state.module.addPresentationalDependency(dep2);
            handleExpression();
            return true;
        };
        /**
     * This expression handler allows to wrap a WebAssembly.compile invocation with a
     * function call where we can warn about WASM code generation not being allowed
     * but actually execute the expression.
     */ const handleWrapWasmCompileExpression = (expr)=>{
            if (!isInMiddlewareLayer(parser)) {
                return;
            }
            const { ConstDependency } = wp.dependencies;
            const dep1 = new ConstDependency("__next_webassembly_compile__(function() { return ", expr.range[0]);
            dep1.loc = expr.loc;
            parser.state.module.addPresentationalDependency(dep1);
            const dep2 = new ConstDependency("})", expr.range[1]);
            dep2.loc = expr.loc;
            parser.state.module.addPresentationalDependency(dep2);
            handleExpression();
        };
        /**
     * This expression handler allows to wrap a WebAssembly.instatiate invocation with a
     * function call where we can warn about WASM code generation not being allowed
     * but actually execute the expression.
     *
     * Note that we don't update `usingIndirectEval`, i.e. we don't abort a production build
     * since we can't determine statically if the first parameter is a module (legit use) or
     * a buffer (dynamic code generation).
     */ const handleWrapWasmInstantiateExpression = (expr)=>{
            if (!isInMiddlewareLayer(parser)) {
                return;
            }
            if (dev) {
                const { ConstDependency } = wp.dependencies;
                const dep1 = new ConstDependency("__next_webassembly_instantiate__(function() { return ", expr.range[0]);
                dep1.loc = expr.loc;
                parser.state.module.addPresentationalDependency(dep1);
                const dep2 = new ConstDependency("})", expr.range[1]);
                dep2.loc = expr.loc;
                parser.state.module.addPresentationalDependency(dep2);
            }
        };
        /**
     * Handler to store original source location of static and dynamic imports into module's buildInfo.
     */ const handleImport = (node)=>{
            var _node_source;
            if (isInMiddlewareLayer(parser) && ((_node_source = node.source) == null ? void 0 : _node_source.value) && (node == null ? void 0 : node.loc)) {
                var _node_source_value;
                const { module: module1, source } = parser.state;
                const buildInfo = (0, _getmodulebuildinfo.getModuleBuildInfo)(module1);
                if (!buildInfo.importLocByPath) {
                    buildInfo.importLocByPath = new Map();
                }
                const importedModule = (_node_source_value = node.source.value) == null ? void 0 : _node_source_value.toString();
                buildInfo.importLocByPath.set(importedModule, {
                    sourcePosition: {
                        ...node.loc.start,
                        source: module1.identifier()
                    },
                    sourceContent: source.toString()
                });
                if (!dev && isNodeJsModule(importedModule)) {
                    compilation.warnings.push(buildWebpackError({
                        message: `A Node.js module is loaded ('${importedModule}' at line ${node.loc.start.line}) which is not supported in the Edge Runtime.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`,
                        compilation,
                        parser,
                        ...node
                    }));
                }
            }
        };
        /**
     * A noop handler to skip analyzing some cases.
     * Order matters: for it to work, it must be registered first
     */ const skip = ()=>isInMiddlewareLayer(parser) ? true : undefined;
        for (const prefix of [
            "",
            "global."
        ]){
            hooks.expression.for(`${prefix}Function.prototype`).tap(NAME, skip);
            hooks.expression.for(`${prefix}Function.bind`).tap(NAME, skip);
            hooks.call.for(`${prefix}eval`).tap(NAME, handleWrapExpression);
            hooks.call.for(`${prefix}Function`).tap(NAME, handleWrapExpression);
            hooks.new.for(`${prefix}Function`).tap(NAME, handleWrapExpression);
            hooks.call.for(`${prefix}WebAssembly.compile`).tap(NAME, handleWrapWasmCompileExpression);
            hooks.call.for(`${prefix}WebAssembly.instantiate`).tap(NAME, handleWrapWasmInstantiateExpression);
        }
        hooks.importCall.tap(NAME, handleImport);
        hooks.import.tap(NAME, handleImport);
        if (!dev) {
            // do not issue compilation warning on dev: invoking code will provide details
            registerUnsupportedApiHooks(parser, compilation);
        }
    };
}
function getExtractMetadata(params) {
    const { dev, compilation, metadataByEntry, compiler } = params;
    const { webpack: wp } = compiler;
    return async ()=>{
        metadataByEntry.clear();
        const telemetry = _shared.traceGlobals.get("telemetry");
        for (const [entryName, entry] of compilation.entries){
            var _entry_dependencies, _route_middlewareConfig;
            if (entry.options.runtime !== _constants.EDGE_RUNTIME_WEBPACK) {
                continue;
            }
            const entryDependency = (_entry_dependencies = entry.dependencies) == null ? void 0 : _entry_dependencies[0];
            const { rootDir, route } = (0, _getmodulebuildinfo.getModuleBuildInfo)(compilation.moduleGraph.getResolvedModule(entryDependency));
            const { moduleGraph } = compilation;
            const modules = new Set();
            const addEntriesFromDependency = (dependency)=>{
                const module1 = moduleGraph.getModule(dependency);
                if (module1) {
                    modules.add(module1);
                }
            };
            entry.dependencies.forEach(addEntriesFromDependency);
            entry.includeDependencies.forEach(addEntriesFromDependency);
            const entryMetadata = {
                wasmBindings: new Map(),
                assetBindings: new Map()
            };
            if (route == null ? void 0 : (_route_middlewareConfig = route.middlewareConfig) == null ? void 0 : _route_middlewareConfig.regions) {
                entryMetadata.regions = route.middlewareConfig.regions;
            }
            if (route == null ? void 0 : route.preferredRegion) {
                const preferredRegion = route.preferredRegion;
                entryMetadata.regions = // Ensures preferredRegion is always an array in the manifest.
                typeof preferredRegion === "string" ? [
                    preferredRegion
                ] : preferredRegion;
            }
            let ogImageGenerationCount = 0;
            for (const module1 of modules){
                const buildInfo = (0, _getmodulebuildinfo.getModuleBuildInfo)(module1);
                /**
         * Check if it uses the image generation feature.
         */ if (!dev) {
                    const resource = module1.resource;
                    const hasOGImageGeneration = resource && /[\\/]node_modules[\\/]@vercel[\\/]og[\\/]dist[\\/]index\.(edge|node)\.js$|[\\/]next[\\/]dist[\\/](esm[\\/])?server[\\/]web[\\/]spec-extension[\\/]image-response\.js$/.test(resource);
                    if (hasOGImageGeneration) {
                        ogImageGenerationCount++;
                    }
                }
                /**
         * When building for production checks if the module is using `eval`
         * and in such case produces a compilation error. The module has to
         * be in use.
         */ if (!dev && buildInfo.usingIndirectEval && isUsingIndirectEvalAndUsedByExports({
                    module: module1,
                    moduleGraph,
                    runtime: wp.util.runtime.getEntryRuntime(compilation, entryName),
                    usingIndirectEval: buildInfo.usingIndirectEval,
                    wp
                })) {
                    var _route_middlewareConfig1;
                    const id = module1.identifier();
                    if (/node_modules[\\/]regenerator-runtime[\\/]runtime\.js/.test(id)) {
                        continue;
                    }
                    if (route == null ? void 0 : (_route_middlewareConfig1 = route.middlewareConfig) == null ? void 0 : _route_middlewareConfig1.unstable_allowDynamicGlobs) {
                        telemetry == null ? void 0 : telemetry.record({
                            eventName: "NEXT_EDGE_ALLOW_DYNAMIC_USED",
                            payload: {
                                file: route == null ? void 0 : route.absolutePagePath.replace(rootDir ?? "", ""),
                                config: route == null ? void 0 : route.middlewareConfig,
                                fileWithDynamicCode: module1.userRequest.replace(rootDir ?? "", "")
                            }
                        });
                    }
                    if (!isDynamicCodeEvaluationAllowed(module1.userRequest, route == null ? void 0 : route.middlewareConfig, rootDir)) {
                        compilation.errors.push(buildWebpackError({
                            message: `Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime ${typeof buildInfo.usingIndirectEval !== "boolean" ? `\nUsed by ${Array.from(buildInfo.usingIndirectEval).join(", ")}` : ""}\nLearn More: https://nextjs.org/docs/messages/edge-dynamic-code-evaluation`,
                            entryModule: module1,
                            compilation
                        }));
                    }
                }
                /**
         * The entry module has to be either a page or a middleware and hold
         * the corresponding metadata.
         */ if (buildInfo == null ? void 0 : buildInfo.nextEdgeSSR) {
                    entryMetadata.edgeSSR = buildInfo.nextEdgeSSR;
                } else if (buildInfo == null ? void 0 : buildInfo.nextEdgeMiddleware) {
                    entryMetadata.edgeMiddleware = buildInfo.nextEdgeMiddleware;
                } else if (buildInfo == null ? void 0 : buildInfo.nextEdgeApiFunction) {
                    entryMetadata.edgeApiFunction = buildInfo.nextEdgeApiFunction;
                }
                /**
         * If the module is a WASM module we read the binding information and
         * append it to the entry wasm bindings.
         */ if (buildInfo == null ? void 0 : buildInfo.nextWasmMiddlewareBinding) {
                    entryMetadata.wasmBindings.set(buildInfo.nextWasmMiddlewareBinding.name, buildInfo.nextWasmMiddlewareBinding.filePath);
                }
                if (buildInfo == null ? void 0 : buildInfo.nextAssetMiddlewareBinding) {
                    entryMetadata.assetBindings.set(buildInfo.nextAssetMiddlewareBinding.name, buildInfo.nextAssetMiddlewareBinding.filePath);
                }
                /**
         * Append to the list of modules to process outgoingConnections from
         * the module that is being processed.
         */ for (const conn of moduleGraph.getOutgoingConnections(module1)){
                    if (conn.module) {
                        modules.add(conn.module);
                    }
                }
            }
            telemetry == null ? void 0 : telemetry.record({
                eventName: _events.EVENT_BUILD_FEATURE_USAGE,
                payload: {
                    featureName: "vercelImageGeneration",
                    invocationCount: ogImageGenerationCount
                }
            });
            metadataByEntry.set(entryName, entryMetadata);
        }
    };
}
class MiddlewarePlugin {
    constructor({ dev, sriEnabled }){
        this.dev = dev;
        this.sriEnabled = sriEnabled;
    }
    apply(compiler) {
        compiler.hooks.compilation.tap(NAME, (compilation, params)=>{
            const { hooks } = params.normalModuleFactory;
            /**
       * This is the static code analysis phase.
       */ const codeAnalyzer = getCodeAnalyzer({
                dev: this.dev,
                compiler,
                compilation
            });
            hooks.parser.for("javascript/auto").tap(NAME, codeAnalyzer);
            hooks.parser.for("javascript/dynamic").tap(NAME, codeAnalyzer);
            hooks.parser.for("javascript/esm").tap(NAME, codeAnalyzer);
            /**
       * Extract all metadata for the entry points in a Map object.
       */ const metadataByEntry = new Map();
            compilation.hooks.finishModules.tapPromise(NAME, getExtractMetadata({
                compilation,
                compiler,
                dev: this.dev,
                metadataByEntry
            }));
            /**
       * Emit the middleware manifest.
       */ compilation.hooks.processAssets.tap({
                name: "NextJsMiddlewareManifest",
                stage: _webpack.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS
            }, getCreateAssets({
                compilation,
                metadataByEntry,
                opts: {
                    sriEnabled: this.sriEnabled
                }
            }));
        });
    }
}
const SUPPORTED_NATIVE_MODULES = [
    "buffer",
    "events",
    "assert",
    "util",
    "async_hooks"
];
const supportedEdgePolyfills = new Set(SUPPORTED_NATIVE_MODULES);
function getEdgePolyfilledModules() {
    const records = {};
    for (const mod of SUPPORTED_NATIVE_MODULES){
        records[mod] = `commonjs node:${mod}`;
        records[`node:${mod}`] = `commonjs node:${mod}`;
    }
    return records;
}
async function handleWebpackExternalForEdgeRuntime({ request, context, contextInfo, getResolve }) {
    if (contextInfo.issuerLayer === "middleware" && isNodeJsModule(request) && !supportedEdgePolyfills.has(request)) {
        // allows user to provide and use their polyfills, as we do with buffer.
        try {
            await getResolve()(context, request);
        } catch  {
            return `root  globalThis.__import_unsupported('${request}')`;
        }
    }
}

//# sourceMappingURL=middleware-plugin.js.map