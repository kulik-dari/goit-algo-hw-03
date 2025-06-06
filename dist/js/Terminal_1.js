"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return Terminal;
    }
});
const _interop_require_default = require("@swc/helpers/_/_interop_require_default");
const _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
const _anser = /*#__PURE__*/ _interop_require_default._(require("next/dist/compiled/anser"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(require("react"));
const _hotlinkedtext = require("../hot-linked-text");
const _EditorLink = require("./EditorLink");
function getFile(lines) {
    const contentFileName = lines.shift();
    if (!contentFileName) return null;
    const [fileName, line, column] = contentFileName.split(":");
    const parsedLine = Number(line);
    const parsedColumn = Number(column);
    const hasLocation = !Number.isNaN(parsedLine) && !Number.isNaN(parsedColumn);
    return {
        fileName: hasLocation ? fileName : contentFileName,
        location: hasLocation ? {
            line: parsedLine,
            column: parsedColumn
        } : undefined
    };
}
function getImportTraceFiles(lines) {
    if (lines.some((line)=>/ReactServerComponentsError:/.test(line)) || lines.some((line)=>/Import trace for requested module:/.test(line))) {
        // Grab the lines at the end containing the files
        const files = [];
        while(/.+\..+/.test(lines[lines.length - 1]) && !lines[lines.length - 1].includes(":")){
            const file = lines.pop().trim();
            files.unshift(file);
        }
        return files;
    }
    return [];
}
function getEditorLinks(content) {
    const lines = content.split("\n");
    const file = getFile(lines);
    const importTraceFiles = getImportTraceFiles(lines);
    return {
        file,
        source: lines.join("\n"),
        importTraceFiles
    };
}
const Terminal = function Terminal(param) {
    let { content } = param;
    const { file, source, importTraceFiles } = _react.useMemo(()=>getEditorLinks(content), [
        content
    ]);
    const decoded = _react.useMemo(()=>{
        return _anser.default.ansiToJson(source, {
            json: true,
            use_classes: true,
            remove_empty: true
        });
    }, [
        source
    ]);
    return /*#__PURE__*/ _react.createElement("div", {
        "data-nextjs-terminal": true
    }, file && /*#__PURE__*/ _react.createElement(_EditorLink.EditorLink, {
        isSourceFile: true,
        key: file.fileName,
        file: file.fileName,
        location: file.location
    }), /*#__PURE__*/ _react.createElement("pre", null, decoded.map((entry, index)=>/*#__PURE__*/ _react.createElement("span", {
            key: "terminal-entry-" + index,
            style: {
                color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                ...entry.decoration === "bold" ? {
                    fontWeight: 800
                } : entry.decoration === "italic" ? {
                    fontStyle: "italic"
                } : undefined
            }
        }, /*#__PURE__*/ _react.createElement(_hotlinkedtext.HotlinkedText, {
            text: entry.content
        }))), importTraceFiles.map((importTraceFile)=>/*#__PURE__*/ _react.createElement(_EditorLink.EditorLink, {
            isSourceFile: false,
            key: importTraceFile,
            file: importTraceFile
        }))));
};

if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', { value: true });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

//# sourceMappingURL=Terminal.js.map