import { getServerError } from "next/dist/compiled/@next/react-dev-overlay/dist/middleware";
import { getModuleContext } from "./context";
import { requestToBodyStream } from "../../body-streams";
import { NEXT_RSC_UNION_QUERY } from "../../../client/components/app-router-headers";
export const ErrorSource = Symbol("SandboxError");
const FORBIDDEN_HEADERS = [
    "content-length",
    "content-encoding",
    "transfer-encoding"
];
/**
 * Decorates the runner function making sure all errors it can produce are
 * tagged with `edge-server` so they can properly be rendered in dev.
 */ function withTaggedErrors(fn) {
    return (params)=>fn(params).then((result)=>{
            var _result_waitUntil;
            return {
                ...result,
                waitUntil: result == null ? void 0 : (_result_waitUntil = result.waitUntil) == null ? void 0 : _result_waitUntil.catch((error)=>{
                    // TODO: used COMPILER_NAMES.edgeServer instead. Verify that it does not increase the runtime size.
                    throw getServerError(error, "edge-server");
                })
            };
        }).catch((error)=>{
            // TODO: used COMPILER_NAMES.edgeServer instead
            throw getServerError(error, "edge-server");
        });
}
export async function getRuntimeContext(params) {
    const { runtime, evaluateInContext } = await getModuleContext({
        moduleName: params.name,
        onWarning: params.onWarning ?? (()=>{}),
        useCache: params.useCache !== false,
        edgeFunctionEntry: params.edgeFunctionEntry,
        distDir: params.distDir
    });
    if (params.incrementalCache) {
        runtime.context.globalThis.__incrementalCache = params.incrementalCache;
    }
    for (const paramPath of params.paths){
        evaluateInContext(paramPath);
    }
    return runtime;
}
export const run = withTaggedErrors(async function runWithTaggedErrors(params) {
    var _params_request_body;
    const runtime = await getRuntimeContext(params);
    const subreq = params.request.headers[`x-middleware-subrequest`];
    const subrequests = typeof subreq === "string" ? subreq.split(":") : [];
    if (subrequests.includes(params.name)) {
        return {
            waitUntil: Promise.resolve(),
            response: new runtime.context.Response(null, {
                headers: {
                    "x-middleware-next": "1"
                }
            })
        };
    }
    const edgeFunction = runtime.context._ENTRIES[`middleware_${params.name}`].default;
    const cloned = ![
        "HEAD",
        "GET"
    ].includes(params.request.method) ? (_params_request_body = params.request.body) == null ? void 0 : _params_request_body.cloneBodyStream() : undefined;
    const KUint8Array = runtime.evaluate("Uint8Array");
    const urlInstance = new URL(params.request.url);
    urlInstance.searchParams.delete(NEXT_RSC_UNION_QUERY);
    params.request.url = urlInstance.toString();
    try {
        const result = await edgeFunction({
            request: {
                ...params.request,
                body: cloned && requestToBodyStream(runtime.context, KUint8Array, cloned)
            }
        });
        for (const headerName of FORBIDDEN_HEADERS){
            result.response.headers.delete(headerName);
        }
        return result;
    } finally{
        var _params_request_body1;
        await ((_params_request_body1 = params.request.body) == null ? void 0 : _params_request_body1.finalize());
    }
});

//# sourceMappingURL=sandbox.js.map