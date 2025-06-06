import { staticGenerationAsyncStorage as _staticGenerationAsyncStorage } from "../../../client/components/static-generation-async-storage.external";
import { CACHE_ONE_YEAR } from "../../../lib/constants";
import { addImplicitTags, validateTags } from "../../lib/patch-fetch";
export function unstable_cache(cb, keyParts, options = {}) {
    const staticGenerationAsyncStorage = (fetch.__nextGetStaticStore == null ? void 0 : fetch.__nextGetStaticStore.call(fetch)) || _staticGenerationAsyncStorage;
    if (options.revalidate === 0) {
        throw new Error(`Invariant revalidate: 0 can not be passed to unstable_cache(), must be "false" or "> 0" ${cb.toString()}`);
    }
    const cachedCb = async (...args)=>{
        const store = staticGenerationAsyncStorage == null ? void 0 : staticGenerationAsyncStorage.getStore();
        const incrementalCache = (store == null ? void 0 : store.incrementalCache) || globalThis.__incrementalCache;
        if (!incrementalCache) {
            throw new Error(`Invariant: incrementalCache missing in unstable_cache ${cb.toString()}`);
        }
        const joinedKey = `${cb.toString()}-${Array.isArray(keyParts) && keyParts.join(",")}-${JSON.stringify(args)}`;
        // We override the default fetch cache handling inside of the
        // cache callback so that we only cache the specific values returned
        // from the callback instead of also caching any fetches done inside
        // of the callback as well
        return staticGenerationAsyncStorage.run({
            ...store,
            fetchCache: "only-no-store",
            urlPathname: (store == null ? void 0 : store.urlPathname) || "/",
            isStaticGeneration: !!(store == null ? void 0 : store.isStaticGeneration)
        }, async ()=>{
            const tags = validateTags(options.tags || [], `unstable_cache ${cb.toString()}`);
            if (Array.isArray(tags) && store) {
                if (!store.tags) {
                    store.tags = [];
                }
                for (const tag of tags){
                    if (!store.tags.includes(tag)) {
                        store.tags.push(tag);
                    }
                }
            }
            const implicitTags = addImplicitTags(store);
            const cacheKey = await (incrementalCache == null ? void 0 : incrementalCache.fetchCacheKey(joinedKey));
            const cacheEntry = cacheKey && !((store == null ? void 0 : store.isOnDemandRevalidate) || incrementalCache.isOnDemandRevalidate) && await (incrementalCache == null ? void 0 : incrementalCache.get(cacheKey, {
                fetchCache: true,
                revalidate: options.revalidate,
                tags,
                softTags: implicitTags
            }));
            const invokeCallback = async ()=>{
                const result = await cb(...args);
                if (cacheKey && incrementalCache) {
                    await incrementalCache.set(cacheKey, {
                        kind: "FETCH",
                        data: {
                            headers: {},
                            // TODO: handle non-JSON values?
                            body: JSON.stringify(result),
                            status: 200,
                            url: ""
                        },
                        revalidate: typeof options.revalidate !== "number" ? CACHE_ONE_YEAR : options.revalidate
                    }, {
                        revalidate: options.revalidate,
                        fetchCache: true,
                        tags
                    });
                }
                return result;
            };
            if (!cacheEntry || !cacheEntry.value) {
                return invokeCallback();
            }
            if (cacheEntry.value.kind !== "FETCH") {
                console.error(`Invariant invalid cacheEntry returned for ${joinedKey}`);
                return invokeCallback();
            }
            let cachedValue;
            const isStale = cacheEntry.isStale;
            if (cacheEntry) {
                const resData = cacheEntry.value.data;
                cachedValue = JSON.parse(resData.body);
            }
            if (isStale) {
                if (!store) {
                    return invokeCallback();
                } else {
                    if (!store.pendingRevalidates) {
                        store.pendingRevalidates = [];
                    }
                    store.pendingRevalidates.push(invokeCallback().catch((err)=>console.error(`revalidating cache with key: ${joinedKey}`, err)));
                }
            }
            return cachedValue;
        });
    };
    // TODO: once AsyncLocalStorage.run() returns the correct types this override will no longer be necessary
    return cachedCb;
}

//# sourceMappingURL=unstable-cache.js.map