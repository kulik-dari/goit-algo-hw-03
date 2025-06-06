#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "nextLint", {
    enumerable: true,
    get: function() {
        return nextLint;
    }
});
const _fs = require("fs");
const _path = require("path");
const _chalk = /*#__PURE__*/ _interop_require_default(require("next/dist/compiled/chalk"));
const _constants = require("../lib/constants");
const _runLintCheck = require("../lib/eslint/runLintCheck");
const _utils = require("../server/lib/utils");
const _storage = require("../telemetry/storage");
const _config = /*#__PURE__*/ _interop_require_default(require("../server/config"));
const _constants1 = require("../shared/lib/constants");
const _events = require("../telemetry/events");
const _compileerror = require("../lib/compile-error");
const _getprojectdir = require("../lib/get-project-dir");
const _findpagesdir = require("../lib/find-pages-dir");
const _verifyTypeScriptSetup = require("../lib/verifyTypeScriptSetup");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const eslintOptions = (args, defaultCacheLocation)=>({
        overrideConfigFile: args["--config"] || null,
        extensions: args["--ext"] ?? [
            ".js",
            ".mjs",
            ".cjs",
            ".jsx",
            ".ts",
            ".mts",
            ".cts",
            ".tsx"
        ],
        resolvePluginsRelativeTo: args["--resolve-plugins-relative-to"] || null,
        rulePaths: args["--rulesdir"] ?? [],
        fix: args["--fix"] ?? false,
        fixTypes: args["--fix-type"] ?? null,
        ignorePath: args["--ignore-path"] || null,
        ignore: !Boolean(args["--no-ignore"]),
        allowInlineConfig: !Boolean(args["--no-inline-config"]),
        reportUnusedDisableDirectives: args["--report-unused-disable-directives"] || null,
        cache: !Boolean(args["--no-cache"]),
        cacheLocation: args["--cache-location"] || defaultCacheLocation,
        cacheStrategy: args["--cache-strategy"] || "metadata",
        errorOnUnmatchedPattern: args["--error-on-unmatched-pattern"] ? Boolean(args["--error-on-unmatched-pattern"]) : false
    });
const nextLint = async (args)=>{
    var _nextConfig_eslint;
    if (args["--help"]) {
        (0, _utils.printAndExit)(`
      Description
        Run ESLint on every file in specified directories.
        If not configured, ESLint will be set up for the first time.

      Usage
        $ next lint <baseDir> [options]

      <baseDir> represents the directory of the Next.js application.
      If no directory is provided, the current directory will be used.

      Options
        Basic configuration:
          -h, --help                     List this help
          -d, --dir Array                Include directory, or directories, to run ESLint - default: 'pages', 'components', and 'lib'
          --file Array                   Include file, or files, to run ESLint
          -c, --config path::String      Use this configuration file, overriding all other config options
          --ext [String]                 Specify JavaScript file extensions - default: .js, .mjs, .cjs, .jsx, .ts, .mts, .cts, .tsx
          --resolve-plugins-relative-to path::String  A folder where plugins should be resolved from, CWD by default

        Initial setup:
          --strict                       Creates an .eslintrc.json file using the Next.js strict configuration (only possible if no .eslintrc.json file is present)

        Specifying rules:
          --rulesdir [path::String]      Use additional rules from this directory

        Fixing problems:
          --fix                          Automatically fix problems
          --fix-type Array               Specify the types of fixes to apply (problem, suggestion, layout)

        Ignoring files:
          --ignore-path path::String     Specify path of ignore file
          --no-ignore                    Disable use of ignore files and patterns

        Handling warnings:
          --quiet                        Report errors only - default: false
          --max-warnings Int             Number of warnings to trigger nonzero exit code - default: -1

        Output:
          -o, --output-file path::String  Specify file to write report to
          -f, --format String            Use a specific output format - default: Next.js custom formatter

        Inline configuration comments:
          --no-inline-config             Prevent comments from changing config or rules
          --report-unused-disable-directives  Adds reported errors for unused eslint-disable directives ("error" | "warn" | "off")

        Caching:
          --no-cache                     Disable caching
          --cache-location path::String  Path to the cache file or directory - default: .eslintcache
          --cache-strategy String        Strategy to use for detecting changed files in the cache, either metadata or content - default: metadata

        Miscellaneous:
          --error-on-unmatched-pattern   Show errors when any file patterns are unmatched - default: false
          `, 0);
    }
    const baseDir = (0, _getprojectdir.getProjectDir)(args._[0]);
    // Check if the provided directory exists
    if (!(0, _fs.existsSync)(baseDir)) {
        (0, _utils.printAndExit)(`> No such directory exists as the project root: ${baseDir}`);
    }
    const nextConfig = await (0, _config.default)(_constants1.PHASE_PRODUCTION_BUILD, baseDir);
    const files = args["--file"] ?? [];
    const dirs = args["--dir"] ?? ((_nextConfig_eslint = nextConfig.eslint) == null ? void 0 : _nextConfig_eslint.dirs);
    const filesToLint = [
        ...dirs ?? [],
        ...files
    ];
    const pathsToLint = (filesToLint.length ? filesToLint : _constants.ESLINT_DEFAULT_DIRS).reduce((res, d)=>{
        const currDir = (0, _path.join)(baseDir, d);
        if (!(0, _fs.existsSync)(currDir)) return res;
        res.push(currDir);
        return res;
    }, []);
    const reportErrorsOnly = Boolean(args["--quiet"]);
    const maxWarnings = args["--max-warnings"] ?? -1;
    const formatter = args["--format"] || null;
    const strict = Boolean(args["--strict"]);
    const outputFile = args["--output-file"] || null;
    const distDir = (0, _path.join)(baseDir, nextConfig.distDir);
    const defaultCacheLocation = (0, _path.join)(distDir, "cache", "eslint/");
    const { pagesDir, appDir } = (0, _findpagesdir.findPagesDir)(baseDir);
    await (0, _verifyTypeScriptSetup.verifyTypeScriptSetup)({
        dir: baseDir,
        distDir: nextConfig.distDir,
        intentDirs: [
            pagesDir,
            appDir
        ].filter(Boolean),
        typeCheckPreflight: false,
        tsconfigPath: nextConfig.typescript.tsconfigPath,
        disableStaticImages: nextConfig.images.disableStaticImages,
        hasAppDir: !!appDir,
        hasPagesDir: !!pagesDir
    });
    (0, _runLintCheck.runLintCheck)(baseDir, pathsToLint, {
        lintDuringBuild: false,
        eslintOptions: eslintOptions(args, defaultCacheLocation),
        reportErrorsOnly: reportErrorsOnly,
        maxWarnings,
        formatter,
        outputFile,
        strict
    }).then(async (lintResults)=>{
        const lintOutput = typeof lintResults === "string" ? lintResults : lintResults == null ? void 0 : lintResults.output;
        if (typeof lintResults !== "string" && (lintResults == null ? void 0 : lintResults.eventInfo)) {
            const telemetry = new _storage.Telemetry({
                distDir
            });
            telemetry.record((0, _events.eventLintCheckCompleted)({
                ...lintResults.eventInfo,
                buildLint: false
            }));
            await telemetry.flush();
        }
        if (typeof lintResults !== "string" && (lintResults == null ? void 0 : lintResults.isError) && lintOutput) {
            throw new _compileerror.CompileError(lintOutput);
        }
        if (lintOutput) {
            (0, _utils.printAndExit)(lintOutput, 0);
        } else if (lintResults && !lintOutput) {
            (0, _utils.printAndExit)(_chalk.default.green("✔ No ESLint warnings or errors"), 0);
        }
    }).catch((err)=>{
        (0, _utils.printAndExit)(err.message);
    });
};

//# sourceMappingURL=next-lint.js.map