"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DomainLocale: null,
    NextConfig: null,
    normalizeConfig: null,
    warnOptionHasBeenDeprecated: null,
    warnOptionHasBeenMovedOutOfExperimental: null,
    default: null,
    getEnabledExperimentalFeatures: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DomainLocale: function() {
        return _configshared.DomainLocale;
    },
    NextConfig: function() {
        return _configshared.NextConfig;
    },
    normalizeConfig: function() {
        return _configshared.normalizeConfig;
    },
    warnOptionHasBeenDeprecated: function() {
        return warnOptionHasBeenDeprecated;
    },
    warnOptionHasBeenMovedOutOfExperimental: function() {
        return warnOptionHasBeenMovedOutOfExperimental;
    },
    default: function() {
        return loadConfig;
    },
    getEnabledExperimentalFeatures: function() {
        return getEnabledExperimentalFeatures;
    }
});
const _fs = require("fs");
const _path = require("path");
const _url = require("url");
const _findup = /*#__PURE__*/ _interop_require_default(require("next/dist/compiled/find-up"));
const _log = /*#__PURE__*/ _interop_require_wildcard(require("../build/output/log"));
const _constants = require("../shared/lib/constants");
const _configshared = require("./config-shared");
const _configutils = require("./config-utils");
const _imageconfig = require("../shared/lib/image-config");
const _env = require("@next/env");
const _flushandexit = require("../telemetry/flush-and-exit");
const _findroot = require("../lib/find-root");
const _setuphttpagentenv = require("./setup-http-agent-env");
const _pathhasprefix = require("../shared/lib/router/utils/path-has-prefix");
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
function warnOptionHasBeenDeprecated(config, nestedPropertyKey, reason, silent) {
    if (!silent) {
        let current = config;
        let found = true;
        const nestedPropertyKeys = nestedPropertyKey.split(".");
        for (const key of nestedPropertyKeys){
            if (current[key] !== undefined) {
                current = current[key];
            } else {
                found = false;
                break;
            }
        }
        if (found) {
            _log.warn(reason);
        }
    }
}
function warnOptionHasBeenMovedOutOfExperimental(config, oldKey, newKey, configFileName, silent) {
    if (config.experimental && oldKey in config.experimental) {
        if (!silent) {
            _log.warn(`\`${oldKey}\` has been moved out of \`experimental\`` + (newKey.includes(".") ? ` and into \`${newKey}\`` : "") + `. Please update your ${configFileName} file accordingly.`);
        }
        let current = config;
        const newKeys = newKey.split(".");
        while(newKeys.length > 1){
            const key = newKeys.shift();
            current[key] = current[key] || {};
            current = current[key];
        }
        current[newKeys.shift()] = config.experimental[oldKey];
    }
    return config;
}
function assignDefaults(dir, userConfig, silent) {
    var _result_experimental, _result_experimental1, _result_experimental2, _result_experimental3, _result_experimental4, _result_experimental5, _result_devIndicators, _result_experimental6;
    const configFileName = userConfig.configFileName;
    if (typeof userConfig.exportTrailingSlash !== "undefined") {
        if (!silent) {
            _log.warn(`The "exportTrailingSlash" option has been renamed to "trailingSlash". Please update your ${configFileName}.`);
        }
        if (typeof userConfig.trailingSlash === "undefined") {
            userConfig.trailingSlash = userConfig.exportTrailingSlash;
        }
        delete userConfig.exportTrailingSlash;
    }
    const config = Object.keys(userConfig).reduce((currentConfig, key)=>{
        const value = userConfig[key];
        if (value === undefined || value === null) {
            return currentConfig;
        }
        if (key === "distDir") {
            if (typeof value !== "string") {
                throw new Error(`Specified distDir is not a string, found type "${typeof value}"`);
            }
            const userDistDir = value.trim();
            // don't allow public as the distDir as this is a reserved folder for
            // public files
            if (userDistDir === "public") {
                throw new Error(`The 'public' directory is reserved in Next.js and can not be set as the 'distDir'. https://nextjs.org/docs/messages/can-not-output-to-public`);
            }
            // make sure distDir isn't an empty string as it can result in the provided
            // directory being deleted in development mode
            if (userDistDir.length === 0) {
                throw new Error(`Invalid distDir provided, distDir can not be an empty string. Please remove this config or set it to undefined`);
            }
        }
        if (key === "pageExtensions") {
            if (!Array.isArray(value)) {
                throw new Error(`Specified pageExtensions is not an array of strings, found "${value}". Please update this config or remove it.`);
            }
            if (!value.length) {
                throw new Error(`Specified pageExtensions is an empty array. Please update it with the relevant extensions or remove it.`);
            }
            value.forEach((ext)=>{
                if (typeof ext !== "string") {
                    throw new Error(`Specified pageExtensions is not an array of strings, found "${ext}" of type "${typeof ext}". Please update this config or remove it.`);
                }
            });
        }
        if (!!value && value.constructor === Object) {
            currentConfig[key] = {
                ..._configshared.defaultConfig[key],
                ...Object.keys(value).reduce((c, k)=>{
                    const v = value[k];
                    if (v !== undefined && v !== null) {
                        c[k] = v;
                    }
                    return c;
                }, {})
            };
        } else {
            currentConfig[key] = value;
        }
        return currentConfig;
    }, {});
    const result = {
        ..._configshared.defaultConfig,
        ...config
    };
    if (result.output === "export") {
        if (result.i18n) {
            throw new Error('Specified "i18n" cannot be used with "output: export". See more info here: https://nextjs.org/docs/messages/export-no-i18n');
        }
        if (result.rewrites) {
            throw new Error('Specified "rewrites" cannot be used with "output: export". See more info here: https://nextjs.org/docs/messages/export-no-custom-routes');
        }
        if (result.redirects) {
            throw new Error('Specified "redirects" cannot be used with "output: export". See more info here: https://nextjs.org/docs/messages/export-no-custom-routes');
        }
        if (result.headers) {
            throw new Error('Specified "headers" cannot be used with "output: export". See more info here: https://nextjs.org/docs/messages/export-no-custom-routes');
        }
    }
    if (typeof result.assetPrefix !== "string") {
        throw new Error(`Specified assetPrefix is not a string, found type "${typeof result.assetPrefix}" https://nextjs.org/docs/messages/invalid-assetprefix`);
    }
    if (typeof result.basePath !== "string") {
        throw new Error(`Specified basePath is not a string, found type "${typeof result.basePath}"`);
    }
    // TODO: remove after next minor (current v13.1.1)
    if (Array.isArray((_result_experimental = result.experimental) == null ? void 0 : _result_experimental.outputFileTracingIgnores)) {
        if (!result.experimental) {
            result.experimental = {};
        }
        if (!result.experimental.outputFileTracingExcludes) {
            result.experimental.outputFileTracingExcludes = {};
        }
        if (!result.experimental.outputFileTracingExcludes["**/*"]) {
            result.experimental.outputFileTracingExcludes["**/*"] = [];
        }
        result.experimental.outputFileTracingExcludes["**/*"].push(...result.experimental.outputFileTracingIgnores || []);
        _log.warn(`\`outputFileTracingIgnores\` has been moved to \`experimental.outputFileTracingExcludes\`. Please update your ${configFileName} file accordingly.`);
    }
    if (result.basePath !== "") {
        if (result.basePath === "/") {
            throw new Error(`Specified basePath /. basePath has to be either an empty string or a path prefix"`);
        }
        if (!result.basePath.startsWith("/")) {
            throw new Error(`Specified basePath has to start with a /, found "${result.basePath}"`);
        }
        if (result.basePath !== "/") {
            var _result_amp;
            if (result.basePath.endsWith("/")) {
                throw new Error(`Specified basePath should not end with /, found "${result.basePath}"`);
            }
            if (result.assetPrefix === "") {
                result.assetPrefix = result.basePath;
            }
            if (((_result_amp = result.amp) == null ? void 0 : _result_amp.canonicalBase) === "") {
                result.amp.canonicalBase = result.basePath;
            }
        }
    }
    if (result == null ? void 0 : result.images) {
        const images = result.images;
        if (typeof images !== "object") {
            throw new Error(`Specified images should be an object received ${typeof images}.\nSee more info here: https://nextjs.org/docs/messages/invalid-images-config`);
        }
        if (images.domains) {
            var _config_assetPrefix;
            if (!Array.isArray(images.domains)) {
                throw new Error(`Specified images.domains should be an Array received ${typeof images.domains}.\nSee more info here: https://nextjs.org/docs/messages/invalid-images-config`);
            }
            // static images are automatically prefixed with assetPrefix
            // so we need to ensure _next/image allows downloading from
            // this resource
            if ((_config_assetPrefix = config.assetPrefix) == null ? void 0 : _config_assetPrefix.startsWith("http")) {
                images.domains.push(new URL(config.assetPrefix).hostname);
            }
        }
        if (!images.loader) {
            images.loader = "default";
        }
        if (images.loader !== "default" && images.loader !== "custom" && images.path === _imageconfig.imageConfigDefault.path) {
            throw new Error(`Specified images.loader property (${images.loader}) also requires images.path property to be assigned to a URL prefix.\nSee more info here: https://nextjs.org/docs/api-reference/next/legacy/image#loader-configuration`);
        }
        if (images.path === _imageconfig.imageConfigDefault.path && result.basePath && !(0, _pathhasprefix.pathHasPrefix)(images.path, result.basePath)) {
            images.path = `${result.basePath}${images.path}`;
        }
        // Append trailing slash for non-default loaders and when trailingSlash is set
        if (images.path && !images.path.endsWith("/") && (images.loader !== "default" || result.trailingSlash)) {
            images.path += "/";
        }
        if (images.loaderFile) {
            if (images.loader !== "default" && images.loader !== "custom") {
                throw new Error(`Specified images.loader property (${images.loader}) cannot be used with images.loaderFile property. Please set images.loader to "custom".`);
            }
            const absolutePath = (0, _path.join)(dir, images.loaderFile);
            if (!(0, _fs.existsSync)(absolutePath)) {
                throw new Error(`Specified images.loaderFile does not exist at "${absolutePath}".`);
            }
            images.loaderFile = absolutePath;
        }
    }
    // TODO: remove this in next major or minor version after 13.5
    warnOptionHasBeenDeprecated(result, "experimental.appDir", "App router is available by default now, `experimental.appDir` option can be safely removed.", silent);
    warnOptionHasBeenMovedOutOfExperimental(result, "relay", "compiler.relay", configFileName, silent);
    warnOptionHasBeenMovedOutOfExperimental(result, "styledComponents", "compiler.styledComponents", configFileName, silent);
    warnOptionHasBeenMovedOutOfExperimental(result, "emotion", "compiler.emotion", configFileName, silent);
    warnOptionHasBeenMovedOutOfExperimental(result, "reactRemoveProperties", "compiler.reactRemoveProperties", configFileName, silent);
    warnOptionHasBeenMovedOutOfExperimental(result, "removeConsole", "compiler.removeConsole", configFileName, silent);
    if (typeof ((_result_experimental1 = result.experimental) == null ? void 0 : _result_experimental1.swcMinifyDebugOptions) !== "undefined") {
        if (!silent) {
            _log.warn("SWC minify debug option is not supported anymore, please remove it from your config.");
        }
    }
    if (result.experimental.outputStandalone) {
        if (!silent) {
            _log.warn(`experimental.outputStandalone has been renamed to "output: 'standalone'", please move the config.`);
        }
        result.output = "standalone";
    }
    if (typeof ((_result_experimental2 = result.experimental) == null ? void 0 : _result_experimental2.serverActionsBodySizeLimit) !== "undefined") {
        const value = parseInt(result.experimental.serverActionsBodySizeLimit.toString());
        if (isNaN(value) || value < 1) {
            throw new Error("Server Actions Size Limit must be a valid number or filesize format lager than 1MB: https://nextjs.org/docs/app/api-reference/server-actions#size-limitation");
        }
    }
    warnOptionHasBeenMovedOutOfExperimental(result, "transpilePackages", "transpilePackages", configFileName, silent);
    warnOptionHasBeenMovedOutOfExperimental(result, "skipMiddlewareUrlNormalize", "skipMiddlewareUrlNormalize", configFileName, silent);
    warnOptionHasBeenMovedOutOfExperimental(result, "skipTrailingSlashRedirect", "skipTrailingSlashRedirect", configFileName, silent);
    if (((_result_experimental3 = result.experimental) == null ? void 0 : _result_experimental3.outputFileTracingRoot) && !(0, _path.isAbsolute)(result.experimental.outputFileTracingRoot)) {
        result.experimental.outputFileTracingRoot = (0, _path.resolve)(result.experimental.outputFileTracingRoot);
        if (!silent) {
            _log.warn(`experimental.outputFileTracingRoot should be absolute, using: ${result.experimental.outputFileTracingRoot}`);
        }
    }
    // only leverage deploymentId
    if (((_result_experimental4 = result.experimental) == null ? void 0 : _result_experimental4.useDeploymentId) && process.env.NEXT_DEPLOYMENT_ID) {
        if (!result.experimental) {
            result.experimental = {};
        }
        result.experimental.deploymentId = process.env.NEXT_DEPLOYMENT_ID;
    }
    // use the closest lockfile as tracing root
    if (!((_result_experimental5 = result.experimental) == null ? void 0 : _result_experimental5.outputFileTracingRoot)) {
        let rootDir = (0, _findroot.findRootDir)(dir);
        if (rootDir) {
            if (!result.experimental) {
                result.experimental = {};
            }
            if (!_configshared.defaultConfig.experimental) {
                _configshared.defaultConfig.experimental = {};
            }
            result.experimental.outputFileTracingRoot = rootDir;
            _configshared.defaultConfig.experimental.outputFileTracingRoot = result.experimental.outputFileTracingRoot;
        }
    }
    if (result.output === "standalone" && !result.outputFileTracing) {
        if (!silent) {
            _log.warn(`"output: 'standalone'" requires outputFileTracing not be disabled please enable it to leverage the standalone build`);
        }
        result.output = undefined;
    }
    (0, _setuphttpagentenv.setHttpClientAndAgentOptions)(result || _configshared.defaultConfig);
    if (result.i18n) {
        const { i18n } = result;
        const i18nType = typeof i18n;
        if (i18nType !== "object") {
            throw new Error(`Specified i18n should be an object received ${i18nType}.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config`);
        }
        if (!Array.isArray(i18n.locales)) {
            throw new Error(`Specified i18n.locales should be an Array received ${typeof i18n.locales}.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config`);
        }
        if (i18n.locales.length > 100 && !silent) {
            _log.warn(`Received ${i18n.locales.length} i18n.locales items which exceeds the recommended max of 100.\nSee more info here: https://nextjs.org/docs/advanced-features/i18n-routing#how-does-this-work-with-static-generation`);
        }
        const defaultLocaleType = typeof i18n.defaultLocale;
        if (!i18n.defaultLocale || defaultLocaleType !== "string") {
            throw new Error(`Specified i18n.defaultLocale should be a string.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config`);
        }
        if (typeof i18n.domains !== "undefined" && !Array.isArray(i18n.domains)) {
            throw new Error(`Specified i18n.domains must be an array of domain objects e.g. [ { domain: 'example.fr', defaultLocale: 'fr', locales: ['fr'] } ] received ${typeof i18n.domains}.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config`);
        }
        if (i18n.domains) {
            const invalidDomainItems = i18n.domains.filter((item)=>{
                var _i18n_domains;
                if (!item || typeof item !== "object") return true;
                if (!item.defaultLocale) return true;
                if (!item.domain || typeof item.domain !== "string") return true;
                if (item.domain.includes(":")) {
                    console.warn(`i18n domain: "${item.domain}" is invalid it should be a valid domain without protocol (https://) or port (:3000) e.g. example.vercel.sh`);
                    return true;
                }
                const defaultLocaleDuplicate = (_i18n_domains = i18n.domains) == null ? void 0 : _i18n_domains.find((altItem)=>altItem.defaultLocale === item.defaultLocale && altItem.domain !== item.domain);
                if (!silent && defaultLocaleDuplicate) {
                    console.warn(`Both ${item.domain} and ${defaultLocaleDuplicate.domain} configured the defaultLocale ${item.defaultLocale} but only one can. Change one item's default locale to continue`);
                    return true;
                }
                let hasInvalidLocale = false;
                if (Array.isArray(item.locales)) {
                    for (const locale of item.locales){
                        if (typeof locale !== "string") hasInvalidLocale = true;
                        for (const domainItem of i18n.domains || []){
                            if (domainItem === item) continue;
                            if (domainItem.locales && domainItem.locales.includes(locale)) {
                                console.warn(`Both ${item.domain} and ${domainItem.domain} configured the locale (${locale}) but only one can. Remove it from one i18n.domains config to continue`);
                                hasInvalidLocale = true;
                                break;
                            }
                        }
                    }
                }
                return hasInvalidLocale;
            });
            if (invalidDomainItems.length > 0) {
                throw new Error(`Invalid i18n.domains values:\n${invalidDomainItems.map((item)=>JSON.stringify(item)).join("\n")}\n\ndomains value must follow format { domain: 'example.fr', defaultLocale: 'fr', locales: ['fr'] }.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config`);
            }
        }
        if (!Array.isArray(i18n.locales)) {
            throw new Error(`Specified i18n.locales must be an array of locale strings e.g. ["en-US", "nl-NL"] received ${typeof i18n.locales}.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config`);
        }
        const invalidLocales = i18n.locales.filter((locale)=>typeof locale !== "string");
        if (invalidLocales.length > 0) {
            throw new Error(`Specified i18n.locales contains invalid values (${invalidLocales.map(String).join(", ")}), locales must be valid locale tags provided as strings e.g. "en-US".\n` + `See here for list of valid language sub-tags: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry`);
        }
        if (!i18n.locales.includes(i18n.defaultLocale)) {
            throw new Error(`Specified i18n.defaultLocale should be included in i18n.locales.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config`);
        }
        const normalizedLocales = new Set();
        const duplicateLocales = new Set();
        i18n.locales.forEach((locale)=>{
            const localeLower = locale.toLowerCase();
            if (normalizedLocales.has(localeLower)) {
                duplicateLocales.add(locale);
            }
            normalizedLocales.add(localeLower);
        });
        if (duplicateLocales.size > 0) {
            throw new Error(`Specified i18n.locales contains the following duplicate locales:\n` + `${[
                ...duplicateLocales
            ].join(", ")}\n` + `Each locale should be listed only once.\n` + `See more info here: https://nextjs.org/docs/messages/invalid-i18n-config`);
        }
        // make sure default Locale is at the front
        i18n.locales = [
            i18n.defaultLocale,
            ...i18n.locales.filter((locale)=>locale !== i18n.defaultLocale)
        ];
        const localeDetectionType = typeof i18n.localeDetection;
        if (localeDetectionType !== "boolean" && localeDetectionType !== "undefined") {
            throw new Error(`Specified i18n.localeDetection should be undefined or a boolean received ${localeDetectionType}.\nSee more info here: https://nextjs.org/docs/messages/invalid-i18n-config`);
        }
    }
    if ((_result_devIndicators = result.devIndicators) == null ? void 0 : _result_devIndicators.buildActivityPosition) {
        const { buildActivityPosition } = result.devIndicators;
        const allowedValues = [
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right"
        ];
        if (!allowedValues.includes(buildActivityPosition)) {
            throw new Error(`Invalid "devIndicator.buildActivityPosition" provided, expected one of ${allowedValues.join(", ")}, received ${buildActivityPosition}`);
        }
    }
    const userProvidedModularizeImports = result.modularizeImports;
    // Unfortunately these packages end up re-exporting 10600 modules, for example: https://unpkg.com/browse/@mui/icons-material@5.11.16/esm/index.js.
    // Leveraging modularizeImports tremendously reduces compile times for these.
    result.modularizeImports = {
        ...userProvidedModularizeImports || {},
        // This is intentionally added after the user-provided modularizeImports config.
        "@mui/icons-material": {
            transform: "@mui/icons-material/{{member}}"
        },
        "date-fns": {
            transform: "date-fns/{{member}}"
        },
        lodash: {
            transform: "lodash/{{member}}"
        },
        "lodash-es": {
            transform: "lodash-es/{{member}}"
        },
        ramda: {
            transform: "ramda/es/{{member}}"
        },
        "react-bootstrap": {
            transform: {
                useAccordionButton: "modularize-import-loader?name=useAccordionButton&from=named&as=default!react-bootstrap/AccordionButton",
                "*": "react-bootstrap/{{member}}"
            }
        },
        antd: {
            transform: "antd/lib/{{kebabCase member}}"
        },
        ahooks: {
            transform: {
                createUpdateEffect: "modularize-import-loader?name=createUpdateEffect&from=named&as=default!ahooks/es/createUpdateEffect",
                "*": "ahooks/es/{{member}}"
            }
        },
        "@ant-design/icons": {
            transform: {
                IconProvider: "modularize-import-loader?name=IconProvider&from=named&as=default!@ant-design/icons",
                createFromIconfontCN: "@ant-design/icons/es/components/IconFont",
                getTwoToneColor: "modularize-import-loader?name=getTwoToneColor&from=named&as=default!@ant-design/icons/es/components/twoTonePrimaryColor",
                setTwoToneColor: "modularize-import-loader?name=setTwoToneColor&from=named&as=default!@ant-design/icons/es/components/twoTonePrimaryColor",
                "*": "@ant-design/icons/lib/icons/{{member}}"
            }
        },
        "next/server": {
            transform: "next/dist/server/web/exports/{{ kebabCase member }}"
        }
    };
    const userProvidedOptimizePackageImports = ((_result_experimental6 = result.experimental) == null ? void 0 : _result_experimental6.optimizePackageImports) || [];
    if (!result.experimental) {
        result.experimental = {};
    }
    result.experimental.optimizePackageImports = [
        ...new Set([
            ...userProvidedOptimizePackageImports,
            "lucide-react",
            "@headlessui/react",
            "@headlessui-float/react",
            "@heroicons/react/20/solid",
            "@heroicons/react/24/solid",
            "@heroicons/react/24/outline",
            "@visx/visx",
            "@tremor/react",
            "rxjs",
            "@mui/material",
            "recharts",
            "@material-ui/core",
            "react-use",
            "@material-ui/icons",
            "@tabler/icons-react",
            "mui-core",
            // We don't support wildcard imports for these configs, e.g. `react-icons/*`
            // so we need to add them manually.
            // In the future, we should consider automatically detecting packages that
            // need to be optimized.
            "react-icons/ai",
            "react-icons/bi",
            "react-icons/bs",
            "react-icons/cg",
            "react-icons/ci",
            "react-icons/di",
            "react-icons/fa",
            "react-icons/fa6",
            "react-icons/fc",
            "react-icons/fi",
            "react-icons/gi",
            "react-icons/go",
            "react-icons/gr",
            "react-icons/hi",
            "react-icons/hi2",
            "react-icons/im",
            "react-icons/io",
            "react-icons/io5",
            "react-icons/lia",
            "react-icons/lib",
            "react-icons/lu",
            "react-icons/md",
            "react-icons/pi",
            "react-icons/ri",
            "react-icons/rx",
            "react-icons/si",
            "react-icons/sl",
            "react-icons/tb",
            "react-icons/tfi",
            "react-icons/ti",
            "react-icons/vsc",
            "react-icons/wi"
        ])
    ];
    return result;
}
async function loadConfig(phase, dir, { customConfig, rawConfig, silent = true, onLoadUserConfig } = {}) {
    if (!process.env.__NEXT_PRIVATE_RENDER_WORKER) {
        try {
            (0, _configutils.loadWebpackHook)();
        } catch (err) {
            // this can fail in standalone mode as the files
            // aren't traced/included
            if (!process.env.__NEXT_PRIVATE_STANDALONE_CONFIG) {
                throw err;
            }
        }
    }
    if (process.env.__NEXT_PRIVATE_STANDALONE_CONFIG) {
        return JSON.parse(process.env.__NEXT_PRIVATE_STANDALONE_CONFIG);
    }
    // For the render worker, we directly return the serialized config from the
    // parent worker (router worker) to avoid loading it again.
    // This is because loading the config might be expensive especiall when people
    // have Webpack plugins added.
    // Because of this change, unserializable fields like `.webpack` won't be
    // existing here but the render worker shouldn't use these as well.
    if (process.env.__NEXT_PRIVATE_RENDER_WORKER_CONFIG) {
        return JSON.parse(process.env.__NEXT_PRIVATE_RENDER_WORKER_CONFIG);
    }
    const curLog = silent ? {
        warn: ()=>{},
        info: ()=>{},
        error: ()=>{}
    } : _log;
    (0, _env.loadEnvConfig)(dir, phase === _constants.PHASE_DEVELOPMENT_SERVER, curLog);
    let configFileName = "next.config.js";
    if (customConfig) {
        return assignDefaults(dir, {
            configOrigin: "server",
            configFileName,
            ...customConfig
        }, silent);
    }
    const path = await (0, _findup.default)(_constants.CONFIG_FILES, {
        cwd: dir
    });
    // If config file was found
    if (path == null ? void 0 : path.length) {
        var _userConfig_amp, _userConfig_experimental_turbo, _userConfig_experimental, _userConfig_experimental_turbo1, _userConfig_experimental1;
        configFileName = (0, _path.basename)(path);
        let userConfigModule;
        try {
            const envBefore = Object.assign({}, process.env);
            // `import()` expects url-encoded strings, so the path must be properly
            // escaped and (especially on Windows) absolute paths must pe prefixed
            // with the `file://` protocol
            if (process.env.__NEXT_TEST_MODE === "jest") {
                // dynamic import does not currently work inside of vm which
                // jest relies on so we fall back to require for this case
                // https://github.com/nodejs/node/issues/35889
                userConfigModule = require(path);
            } else {
                userConfigModule = await import((0, _url.pathToFileURL)(path).href);
            }
            const newEnv = {};
            for (const key of Object.keys(process.env)){
                if (envBefore[key] !== process.env[key]) {
                    newEnv[key] = process.env[key];
                }
            }
            (0, _env.updateInitialEnv)(newEnv);
            if (rawConfig) {
                return userConfigModule;
            }
        } catch (err) {
            curLog.error(`Failed to load ${configFileName}, see more info here https://nextjs.org/docs/messages/next-config-error`);
            throw err;
        }
        const userConfig = await (0, _configshared.normalizeConfig)(phase, userConfigModule.default || userConfigModule);
        const validateResult = (0, _configshared.validateConfig)(userConfig);
        if (validateResult.errors) {
            // Only load @segment/ajv-human-errors when invalid config is detected
            const { AggregateAjvError } = require("next/dist/compiled/@segment/ajv-human-errors");
            const aggregatedAjvErrors = new AggregateAjvError(validateResult.errors, {
                fieldLabels: "js"
            });
            let shouldExit = false;
            const messages = [
                `Invalid ${configFileName} options detected: `
            ];
            for (const error of aggregatedAjvErrors){
                messages.push(`    ${error.message}`);
                if (error.message.startsWith("The value at .images.")) {
                    shouldExit = true;
                }
            }
            messages.push("See more info here: https://nextjs.org/docs/messages/invalid-next-config");
            if (shouldExit) {
                for (const message of messages){
                    console.error(message);
                }
                await (0, _flushandexit.flushAndExit)(1);
            } else {
                for (const message of messages){
                    curLog.warn(message);
                }
            }
        }
        if (userConfig.target && userConfig.target !== "server") {
            throw new Error(`The "target" property is no longer supported in ${configFileName}.\n` + "See more info here https://nextjs.org/docs/messages/deprecated-target-config");
        }
        if ((_userConfig_amp = userConfig.amp) == null ? void 0 : _userConfig_amp.canonicalBase) {
            const { canonicalBase } = userConfig.amp || {};
            userConfig.amp = userConfig.amp || {};
            userConfig.amp.canonicalBase = (canonicalBase.endsWith("/") ? canonicalBase.slice(0, -1) : canonicalBase) || "";
        }
        if (((_userConfig_experimental = userConfig.experimental) == null ? void 0 : (_userConfig_experimental_turbo = _userConfig_experimental.turbo) == null ? void 0 : _userConfig_experimental_turbo.loaders) && !((_userConfig_experimental1 = userConfig.experimental) == null ? void 0 : (_userConfig_experimental_turbo1 = _userConfig_experimental1.turbo) == null ? void 0 : _userConfig_experimental_turbo1.rules)) {
            curLog.warn("experimental.turbo.loaders is now deprecated. Please update next.config.js to use experimental.turbo.rules as soon as possible.\n" + "The new option is similar, but the key should be a glob instead of an extension.\n" + 'Example: loaders: { ".mdx": ["mdx-loader"] } -> rules: { "*.mdx": ["mdx-loader"] }" }\n' + "See more info here https://nextjs.org/docs/app/api-reference/next-config-js/turbo");
            const rules = {};
            for (const [ext, loaders] of Object.entries(userConfig.experimental.turbo.loaders)){
                rules["*" + ext] = loaders;
            }
            userConfig.experimental.turbo.rules = rules;
        }
        onLoadUserConfig == null ? void 0 : onLoadUserConfig(userConfig);
        const completeConfig = assignDefaults(dir, {
            configOrigin: (0, _path.relative)(dir, path),
            configFile: path,
            configFileName,
            ...userConfig
        }, silent);
        return completeConfig;
    } else {
        const configBaseName = (0, _path.basename)(_constants.CONFIG_FILES[0], (0, _path.extname)(_constants.CONFIG_FILES[0]));
        const nonJsPath = _findup.default.sync([
            `${configBaseName}.jsx`,
            `${configBaseName}.ts`,
            `${configBaseName}.tsx`,
            `${configBaseName}.json`
        ], {
            cwd: dir
        });
        if (nonJsPath == null ? void 0 : nonJsPath.length) {
            throw new Error(`Configuring Next.js via '${(0, _path.basename)(nonJsPath)}' is not supported. Please replace the file with 'next.config.js' or 'next.config.mjs'.`);
        }
    }
    // always call assignDefaults to ensure settings like
    // reactRoot can be updated correctly even with no next.config.js
    const completeConfig = assignDefaults(dir, _configshared.defaultConfig, silent);
    completeConfig.configFileName = configFileName;
    (0, _setuphttpagentenv.setHttpClientAndAgentOptions)(completeConfig);
    return completeConfig;
}
function getEnabledExperimentalFeatures(userNextConfigExperimental) {
    const enabledExperiments = [];
    if (!userNextConfigExperimental) return enabledExperiments;
    // defaultConfig.experimental is predefined and will never be undefined
    // This is only a type guard for the typescript
    if (_configshared.defaultConfig.experimental) {
        for (const featureName of Object.keys(userNextConfigExperimental)){
            if (userNextConfigExperimental[featureName] !== _configshared.defaultConfig.experimental[featureName]) {
                enabledExperiments.push(featureName);
            }
        }
    }
    return enabledExperiments;
}

//# sourceMappingURL=config.js.map