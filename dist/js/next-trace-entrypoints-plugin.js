import nodePath from "path";
import { spans } from "./profiling-plugin";
import isError from "../../../lib/is-error";
import { nodeFileTrace } from "next/dist/compiled/@vercel/nft";
import { CLIENT_REFERENCE_MANIFEST, TRACE_OUTPUT_VERSION } from "../../../shared/lib/constants";
import { webpack, sources } from "next/dist/compiled/webpack/webpack";
import { NODE_ESM_RESOLVE_OPTIONS, NODE_RESOLVE_OPTIONS, resolveExternal } from "../../webpack-config";
import { loadBindings } from "../../swc";
import { isMatch } from "next/dist/compiled/micromatch";
import { getModuleBuildInfo } from "../loaders/get-module-build-info";
import { getPageFilePath } from "../../entries";
const PLUGIN_NAME = "TraceEntryPointsPlugin";
const TRACE_IGNORES = [
    "**/*/next/dist/server/next.js",
    "**/*/next/dist/bin/next"
];
const NOT_TRACEABLE = [
    ".wasm",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".avif",
    ".ico",
    ".bmp",
    ".svg"
];
function getModuleFromDependency(compilation, dep) {
    return compilation.moduleGraph.getModule(dep);
}
function getFilesMapFromReasons(fileList, reasons, ignoreFn) {
    // this uses the reasons tree to collect files specific to a
    // certain parent allowing us to not have to trace each parent
    // separately
    const parentFilesMap = new Map();
    function propagateToParents(parents, file, seen = new Set()) {
        for (const parent of parents || []){
            if (!seen.has(parent)) {
                seen.add(parent);
                let parentFiles = parentFilesMap.get(parent);
                if (!parentFiles) {
                    parentFiles = new Set();
                    parentFilesMap.set(parent, parentFiles);
                }
                if (!(ignoreFn == null ? void 0 : ignoreFn(file, parent))) {
                    parentFiles.add(file);
                }
                const parentReason = reasons.get(parent);
                if (parentReason == null ? void 0 : parentReason.parents) {
                    propagateToParents(parentReason.parents, file, seen);
                }
            }
        }
    }
    for (const file of fileList){
        const reason = reasons.get(file);
        const isInitial = (reason == null ? void 0 : reason.type.length) === 1 && reason.type.includes("initial");
        if (!reason || !reason.parents || isInitial && reason.parents.size === 0) {
            continue;
        }
        propagateToParents(reason.parents, file);
    }
    return parentFilesMap;
}
export class TraceEntryPointsPlugin {
    constructor({ rootDir, appDir, pagesDir, appDirEnabled, traceIgnores, esmExternals, outputFileTracingRoot, turbotrace }){
        this.turbotraceContext = {};
        this.chunksToTrace = [];
        this.rootDir = rootDir;
        this.appDir = appDir;
        this.pagesDir = pagesDir;
        this.entryTraces = new Map();
        this.esmExternals = esmExternals;
        this.appDirEnabled = appDirEnabled;
        this.traceIgnores = traceIgnores || [];
        this.tracingRoot = outputFileTracingRoot || rootDir;
        this.turbotrace = turbotrace;
    }
    // Here we output all traced assets and webpack chunks to a
    // ${page}.js.nft.json file
    async createTraceAssets(compilation, assets, span, readlink, stat) {
        const outputPath = compilation.outputOptions.path;
        await span.traceChild("create-trace-assets").traceAsyncFn(async ()=>{
            const entryFilesMap = new Map();
            const chunksToTrace = new Set();
            const isTraceable = (file)=>!NOT_TRACEABLE.some((suffix)=>{
                    return file.endsWith(suffix);
                });
            for (const entrypoint of compilation.entrypoints.values()){
                const entryFiles = new Set();
                for (const chunk of entrypoint.getEntrypointChunk().getAllReferencedChunks()){
                    for (const file of chunk.files){
                        if (isTraceable(file)) {
                            const filePath = nodePath.join(outputPath, file);
                            chunksToTrace.add(filePath);
                            entryFiles.add(filePath);
                        }
                    }
                    for (const file of chunk.auxiliaryFiles){
                        if (isTraceable(file)) {
                            const filePath = nodePath.join(outputPath, file);
                            chunksToTrace.add(filePath);
                            entryFiles.add(filePath);
                        }
                    }
                }
                entryFilesMap.set(entrypoint, entryFiles);
            }
            // startTrace existed and callable
            if (this.turbotrace) {
                let binding = await loadBindings();
                if (!(binding == null ? void 0 : binding.isWasm) && typeof binding.turbo.startTrace === "function") {
                    this.chunksToTrace = [
                        ...chunksToTrace
                    ];
                    return;
                }
            }
            const ignores = [
                ...TRACE_IGNORES,
                ...this.traceIgnores
            ];
            const ignoreFn = (path)=>{
                return isMatch(path, ignores, {
                    contains: true,
                    dot: true
                });
            };
            const result = await nodeFileTrace([
                ...chunksToTrace
            ], {
                base: this.tracingRoot,
                processCwd: this.rootDir,
                readFile: async (path)=>{
                    if (chunksToTrace.has(path)) {
                        var _assets_nodePath_relative_replace_source, _assets_nodePath_relative_replace;
                        const source = (_assets_nodePath_relative_replace = assets[nodePath.relative(outputPath, path).replace(/\\/g, "/")]) == null ? void 0 : (_assets_nodePath_relative_replace_source = _assets_nodePath_relative_replace.source) == null ? void 0 : _assets_nodePath_relative_replace_source.call(_assets_nodePath_relative_replace);
                        if (source) return source;
                    }
                    try {
                        return await new Promise((resolve, reject)=>{
                            compilation.inputFileSystem.readFile(path, (err, data)=>{
                                if (err) return reject(err);
                                resolve(data);
                            });
                        });
                    } catch (e) {
                        if (isError(e) && (e.code === "ENOENT" || e.code === "EISDIR")) {
                            return null;
                        }
                        throw e;
                    }
                },
                readlink,
                stat,
                ignore: ignoreFn,
                mixedModules: true
            });
            const reasons = result.reasons;
            const fileList = result.fileList;
            result.esmFileList.forEach((file)=>fileList.add(file));
            const parentFilesMap = getFilesMapFromReasons(fileList, reasons);
            for (const [entrypoint, entryFiles] of entryFilesMap){
                const traceOutputName = `../${entrypoint.name}.js.nft.json`;
                const traceOutputPath = nodePath.dirname(nodePath.join(outputPath, traceOutputName));
                const allEntryFiles = new Set();
                entryFiles.forEach((file)=>{
                    var _parentFilesMap_get;
                    (_parentFilesMap_get = parentFilesMap.get(nodePath.relative(this.tracingRoot, file))) == null ? void 0 : _parentFilesMap_get.forEach((child)=>{
                        allEntryFiles.add(nodePath.join(this.tracingRoot, child));
                    });
                });
                // don't include the entry itself in the trace
                entryFiles.delete(nodePath.join(outputPath, `../${entrypoint.name}.js`));
                if (entrypoint.name.startsWith("app/")) {
                    // include the client reference manifest
                    const clientManifestsForPage = entrypoint.name.endsWith("/page") || entrypoint.name === "app/not-found" || entrypoint.name === "app/_not-found" ? nodePath.join(outputPath, "..", entrypoint.name.replace(/%5F/g, "_") + "_" + CLIENT_REFERENCE_MANIFEST + ".js") : null;
                    if (clientManifestsForPage !== null) {
                        entryFiles.add(clientManifestsForPage);
                    }
                }
                const finalFiles = [];
                for (const file of new Set([
                    ...entryFiles,
                    ...allEntryFiles,
                    ...this.entryTraces.get(entrypoint.name) || []
                ])){
                    if (file) {
                        finalFiles.push(nodePath.relative(traceOutputPath, file).replace(/\\/g, "/"));
                    }
                }
                assets[traceOutputName] = new sources.RawSource(JSON.stringify({
                    version: TRACE_OUTPUT_VERSION,
                    files: finalFiles
                }));
            }
        });
    }
    tapfinishModules(compilation, traceEntrypointsPluginSpan, doResolve, readlink, stat) {
        compilation.hooks.finishModules.tapAsync(PLUGIN_NAME, async (_stats, callback)=>{
            const finishModulesSpan = traceEntrypointsPluginSpan.traceChild("finish-modules");
            await finishModulesSpan.traceAsyncFn(async ()=>{
                // we create entry -> module maps so that we can
                // look them up faster instead of having to iterate
                // over the compilation modules list
                const entryNameMap = new Map();
                const entryModMap = new Map();
                const additionalEntries = new Map();
                const depModMap = new Map();
                finishModulesSpan.traceChild("get-entries").traceFn(()=>{
                    compilation.entries.forEach((entry, name)=>{
                        const normalizedName = name == null ? void 0 : name.replace(/\\/g, "/");
                        const isPage = normalizedName.startsWith("pages/");
                        const isApp = this.appDirEnabled && normalizedName.startsWith("app/");
                        if (isApp || isPage) {
                            for (const dep of entry.dependencies){
                                if (!dep) continue;
                                const entryMod = getModuleFromDependency(compilation, dep);
                                // Handle case where entry is a loader coming from Next.js.
                                // For example edge-loader or app-loader.
                                if (entryMod && entryMod.resource === "") {
                                    const moduleBuildInfo = getModuleBuildInfo(entryMod);
                                    // All loaders that are used to create entries have a `route` property on the buildInfo.
                                    if (moduleBuildInfo.route) {
                                        const absolutePath = getPageFilePath({
                                            absolutePagePath: moduleBuildInfo.route.absolutePagePath,
                                            rootDir: this.rootDir,
                                            appDir: this.appDir,
                                            pagesDir: this.pagesDir
                                        });
                                        // Ensures we don't handle non-pages.
                                        if (this.pagesDir && absolutePath.startsWith(this.pagesDir) || this.appDir && absolutePath.startsWith(this.appDir)) {
                                            entryModMap.set(absolutePath, entryMod);
                                            entryNameMap.set(absolutePath, name);
                                        }
                                    }
                                    // If there was no `route` property, we can assume that it was something custom instead.
                                    // In order to trace these we add them to the additionalEntries map.
                                    if (entryMod.request) {
                                        let curMap = additionalEntries.get(name);
                                        if (!curMap) {
                                            curMap = new Map();
                                            additionalEntries.set(name, curMap);
                                        }
                                        depModMap.set(entryMod.request, entryMod);
                                        curMap.set(entryMod.resource, entryMod);
                                    }
                                }
                                if (entryMod && entryMod.resource) {
                                    entryNameMap.set(entryMod.resource, name);
                                    entryModMap.set(entryMod.resource, entryMod);
                                    let curMap = additionalEntries.get(name);
                                    if (!curMap) {
                                        curMap = new Map();
                                        additionalEntries.set(name, curMap);
                                    }
                                    depModMap.set(entryMod.resource, entryMod);
                                    curMap.set(entryMod.resource, entryMod);
                                }
                            }
                        }
                    });
                });
                const readFile = async (path)=>{
                    var _mod_originalSource;
                    const mod = depModMap.get(path) || entryModMap.get(path);
                    // map the transpiled source when available to avoid
                    // parse errors in node-file-trace
                    const source = mod == null ? void 0 : (_mod_originalSource = mod.originalSource) == null ? void 0 : _mod_originalSource.call(mod);
                    if (source) {
                        return source.buffer();
                    }
                    // we don't want to analyze non-transpiled
                    // files here, that is done against webpack output
                    return "";
                };
                const entryPaths = Array.from(entryModMap.keys());
                const collectDependencies = (mod)=>{
                    if (!mod || !mod.dependencies) return;
                    for (const dep of mod.dependencies){
                        const depMod = getModuleFromDependency(compilation, dep);
                        if ((depMod == null ? void 0 : depMod.resource) && !depModMap.get(depMod.resource)) {
                            depModMap.set(depMod.resource, depMod);
                            collectDependencies(depMod);
                        }
                    }
                };
                const entriesToTrace = [
                    ...entryPaths
                ];
                entryPaths.forEach((entry)=>{
                    collectDependencies(entryModMap.get(entry));
                    const entryName = entryNameMap.get(entry);
                    const curExtraEntries = additionalEntries.get(entryName);
                    if (curExtraEntries) {
                        entriesToTrace.push(...curExtraEntries.keys());
                    }
                });
                // startTrace existed and callable
                if (this.turbotrace) {
                    let binding = await loadBindings();
                    if (!(binding == null ? void 0 : binding.isWasm) && typeof binding.turbo.startTrace === "function") {
                        var _this_turbotrace, _this_turbotrace1, _this_turbotrace2, _this_turbotrace3;
                        const contextDirectory = ((_this_turbotrace = this.turbotrace) == null ? void 0 : _this_turbotrace.contextDirectory) ?? this.tracingRoot;
                        const chunks = [
                            ...entriesToTrace
                        ];
                        this.turbotraceContext.entriesTrace = {
                            action: {
                                action: "print",
                                input: chunks,
                                contextDirectory,
                                processCwd: ((_this_turbotrace1 = this.turbotrace) == null ? void 0 : _this_turbotrace1.processCwd) ?? this.rootDir,
                                logLevel: (_this_turbotrace2 = this.turbotrace) == null ? void 0 : _this_turbotrace2.logLevel,
                                showAll: (_this_turbotrace3 = this.turbotrace) == null ? void 0 : _this_turbotrace3.logAll
                            },
                            appDir: this.rootDir,
                            depModArray: Array.from(depModMap.keys()),
                            entryNameMap,
                            outputPath: compilation.outputOptions.path
                        };
                        return;
                    }
                }
                let fileList;
                let reasons;
                const ignores = [
                    ...TRACE_IGNORES,
                    ...this.traceIgnores,
                    "**/node_modules/**"
                ];
                const ignoreFn = (path)=>{
                    return isMatch(path, ignores, {
                        contains: true,
                        dot: true
                    });
                };
                await finishModulesSpan.traceChild("node-file-trace", {
                    traceEntryCount: entriesToTrace.length + ""
                }).traceAsyncFn(async ()=>{
                    const result = await nodeFileTrace(entriesToTrace, {
                        base: this.tracingRoot,
                        processCwd: this.rootDir,
                        readFile,
                        readlink,
                        stat,
                        resolve: doResolve ? async (id, parent, job, isCjs)=>{
                            return doResolve(id, parent, job, !isCjs);
                        } : undefined,
                        ignore: ignoreFn,
                        mixedModules: true
                    });
                    // @ts-ignore
                    fileList = result.fileList;
                    result.esmFileList.forEach((file)=>fileList.add(file));
                    reasons = result.reasons;
                });
                await finishModulesSpan.traceChild("collect-traced-files").traceAsyncFn(()=>{
                    const parentFilesMap = getFilesMapFromReasons(fileList, reasons, (file)=>{
                        var _reasons_get;
                        // if a file was imported and a loader handled it
                        // we don't include it in the trace e.g.
                        // static image imports, CSS imports
                        file = nodePath.join(this.tracingRoot, file);
                        const depMod = depModMap.get(file);
                        const isAsset = (_reasons_get = reasons.get(nodePath.relative(this.tracingRoot, file))) == null ? void 0 : _reasons_get.type.includes("asset");
                        return !isAsset && Array.isArray(depMod == null ? void 0 : depMod.loaders) && depMod.loaders.length > 0;
                    });
                    entryPaths.forEach((entry)=>{
                        var _parentFilesMap_get;
                        const entryName = entryNameMap.get(entry);
                        const normalizedEntry = nodePath.relative(this.tracingRoot, entry);
                        const curExtraEntries = additionalEntries.get(entryName);
                        const finalDeps = new Set();
                        (_parentFilesMap_get = parentFilesMap.get(normalizedEntry)) == null ? void 0 : _parentFilesMap_get.forEach((dep)=>{
                            finalDeps.add(nodePath.join(this.tracingRoot, dep));
                        });
                        if (curExtraEntries) {
                            for (const extraEntry of curExtraEntries.keys()){
                                var _parentFilesMap_get1;
                                const normalizedExtraEntry = nodePath.relative(this.tracingRoot, extraEntry);
                                finalDeps.add(extraEntry);
                                (_parentFilesMap_get1 = parentFilesMap.get(normalizedExtraEntry)) == null ? void 0 : _parentFilesMap_get1.forEach((dep)=>{
                                    finalDeps.add(nodePath.join(this.tracingRoot, dep));
                                });
                            }
                        }
                        this.entryTraces.set(entryName, finalDeps);
                    });
                });
            }).then(()=>callback(), (err)=>callback(err));
        });
    }
    apply(compiler) {
        compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation)=>{
            const readlink = async (path)=>{
                try {
                    return await new Promise((resolve, reject)=>{
                        compilation.inputFileSystem.readlink(path, (err, link)=>{
                            if (err) return reject(err);
                            resolve(link);
                        });
                    });
                } catch (e) {
                    if (isError(e) && (e.code === "EINVAL" || e.code === "ENOENT" || e.code === "UNKNOWN")) {
                        return null;
                    }
                    throw e;
                }
            };
            const stat = async (path)=>{
                try {
                    return await new Promise((resolve, reject)=>{
                        compilation.inputFileSystem.stat(path, (err, stats)=>{
                            if (err) return reject(err);
                            resolve(stats);
                        });
                    });
                } catch (e) {
                    if (isError(e) && (e.code === "ENOENT" || e.code === "ENOTDIR")) {
                        return null;
                    }
                    throw e;
                }
            };
            const compilationSpan = spans.get(compilation) || spans.get(compiler);
            const traceEntrypointsPluginSpan = compilationSpan.traceChild("next-trace-entrypoint-plugin");
            traceEntrypointsPluginSpan.traceFn(()=>{
                compilation.hooks.processAssets.tapAsync({
                    name: PLUGIN_NAME,
                    stage: webpack.Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE
                }, (assets, callback)=>{
                    this.createTraceAssets(compilation, assets, traceEntrypointsPluginSpan, readlink, stat).then(()=>callback()).catch((err)=>callback(err));
                });
                let resolver = compilation.resolverFactory.get("normal");
                function getPkgName(name) {
                    const segments = name.split("/");
                    if (name[0] === "@" && segments.length > 1) return segments.length > 1 ? segments.slice(0, 2).join("/") : null;
                    return segments.length ? segments[0] : null;
                }
                const getResolve = (options)=>{
                    const curResolver = resolver.withOptions(options);
                    return (parent, request, job)=>new Promise((resolve, reject)=>{
                            const context = nodePath.dirname(parent);
                            curResolver.resolve({}, context, request, {
                                fileDependencies: compilation.fileDependencies,
                                missingDependencies: compilation.missingDependencies,
                                contextDependencies: compilation.contextDependencies
                            }, async (err, result, resContext)=>{
                                if (err) return reject(err);
                                if (!result) {
                                    return reject(new Error("module not found"));
                                }
                                // webpack resolver doesn't strip loader query info
                                // from the result so use path instead
                                if (result.includes("?") || result.includes("!")) {
                                    result = (resContext == null ? void 0 : resContext.path) || result;
                                }
                                try {
                                    // we need to collect all parent package.json's used
                                    // as webpack's resolve doesn't expose this and parent
                                    // package.json could be needed for resolving e.g. stylis
                                    // stylis/package.json -> stylis/dist/umd/package.json
                                    if (result.includes("node_modules")) {
                                        let requestPath = result.replace(/\\/g, "/").replace(/\0/g, "");
                                        if (!nodePath.isAbsolute(request) && request.includes("/") && (resContext == null ? void 0 : resContext.descriptionFileRoot)) {
                                            var _getPkgName;
                                            requestPath = (resContext.descriptionFileRoot + request.slice(((_getPkgName = getPkgName(request)) == null ? void 0 : _getPkgName.length) || 0) + nodePath.sep + "package.json").replace(/\\/g, "/").replace(/\0/g, "");
                                        }
                                        const rootSeparatorIndex = requestPath.indexOf("/");
                                        let separatorIndex;
                                        while((separatorIndex = requestPath.lastIndexOf("/")) > rootSeparatorIndex){
                                            requestPath = requestPath.slice(0, separatorIndex);
                                            const curPackageJsonPath = `${requestPath}/package.json`;
                                            if (await job.isFile(curPackageJsonPath)) {
                                                await job.emitFile(await job.realpath(curPackageJsonPath), "resolve", parent);
                                            }
                                        }
                                    }
                                } catch (_err) {
                                // we failed to resolve the package.json boundary,
                                // we don't block emitting the initial asset from this
                                }
                                resolve([
                                    result,
                                    options.dependencyType === "esm"
                                ]);
                            });
                        });
                };
                const CJS_RESOLVE_OPTIONS = {
                    ...NODE_RESOLVE_OPTIONS,
                    fullySpecified: undefined,
                    modules: undefined,
                    extensions: undefined
                };
                const BASE_CJS_RESOLVE_OPTIONS = {
                    ...CJS_RESOLVE_OPTIONS,
                    alias: false
                };
                const ESM_RESOLVE_OPTIONS = {
                    ...NODE_ESM_RESOLVE_OPTIONS,
                    fullySpecified: undefined,
                    modules: undefined,
                    extensions: undefined
                };
                const BASE_ESM_RESOLVE_OPTIONS = {
                    ...ESM_RESOLVE_OPTIONS,
                    alias: false
                };
                const doResolve = async (request, parent, job, isEsmRequested)=>{
                    const context = nodePath.dirname(parent);
                    // When in esm externals mode, and using import, we resolve with
                    // ESM resolving options.
                    const { res } = await resolveExternal(this.rootDir, this.esmExternals, context, request, isEsmRequested, !!this.appDirEnabled, (options)=>(_, resRequest)=>{
                            return getResolve(options)(parent, resRequest, job);
                        }, undefined, undefined, ESM_RESOLVE_OPTIONS, CJS_RESOLVE_OPTIONS, BASE_ESM_RESOLVE_OPTIONS, BASE_CJS_RESOLVE_OPTIONS);
                    if (!res) {
                        throw new Error(`failed to resolve ${request} from ${parent}`);
                    }
                    return res.replace(/\0/g, "");
                };
                this.tapfinishModules(compilation, traceEntrypointsPluginSpan, doResolve, readlink, stat);
            });
        });
        if (this.turbotrace) {
            compiler.hooks.afterEmit.tapPromise(PLUGIN_NAME, async ()=>{
                let binding = await loadBindings();
                if (!(binding == null ? void 0 : binding.isWasm) && typeof binding.turbo.startTrace === "function") {
                    var _this_turbotrace, _this_turbotrace1, _this_turbotrace2, _this_turbotrace3;
                    const ignores = [
                        ...TRACE_IGNORES,
                        ...this.traceIgnores
                    ];
                    const ignoreFn = (path)=>{
                        return isMatch(path, ignores, {
                            contains: true,
                            dot: true
                        });
                    };
                    const chunks = this.chunksToTrace.filter((chunk)=>!ignoreFn(chunk));
                    this.turbotraceContext.chunksTrace = {
                        action: {
                            action: "annotate",
                            input: chunks,
                            contextDirectory: ((_this_turbotrace = this.turbotrace) == null ? void 0 : _this_turbotrace.contextDirectory) ?? this.tracingRoot,
                            processCwd: ((_this_turbotrace1 = this.turbotrace) == null ? void 0 : _this_turbotrace1.processCwd) ?? this.rootDir,
                            showAll: (_this_turbotrace2 = this.turbotrace) == null ? void 0 : _this_turbotrace2.logAll,
                            logLevel: (_this_turbotrace3 = this.turbotrace) == null ? void 0 : _this_turbotrace3.logLevel
                        },
                        outputPath: compiler.outputPath
                    };
                }
            });
        }
    }
}

//# sourceMappingURL=next-trace-entrypoints-plugin.js.map