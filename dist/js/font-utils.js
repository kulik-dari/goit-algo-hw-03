import * as Log from "../build/output/log";
import { GOOGLE_FONT_PROVIDER, DEFAULT_SERIF_FONT, DEFAULT_SANS_SERIF_FONT } from "../shared/lib/constants";
const capsizeFontsMetrics = require("next/dist/server/capsize-font-metrics.json");
const https = require("https");
const CHROME_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36";
const IE_UA = "Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko";
function isGoogleFont(url) {
    return url.startsWith(GOOGLE_FONT_PROVIDER);
}
function getFontForUA(url, UA) {
    return new Promise((resolve, reject)=>{
        let rawData = "";
        https.get(url, {
            headers: {
                "user-agent": UA
            }
        }, (res)=>{
            res.on("data", (chunk)=>{
                rawData += chunk;
            });
            res.on("end", ()=>{
                resolve(rawData.toString("utf8"));
            });
        }).on("error", (e)=>{
            reject(e);
        });
    });
}
export async function getFontDefinitionFromNetwork(url) {
    let result = "";
    /**
   * The order of IE -> Chrome is important, other wise chrome starts loading woff1.
   * CSS cascading 🤷‍♂️.
   */ try {
        if (isGoogleFont(url)) {
            result += await getFontForUA(url, IE_UA);
        }
        result += await getFontForUA(url, CHROME_UA);
    } catch (e) {
        Log.warn(`Failed to download the stylesheet for ${url}. Skipped optimizing this font.`);
        return "";
    }
    return result;
}
export function getFontDefinitionFromManifest(url, manifest) {
    var _manifest_find;
    return ((_manifest_find = manifest.find((font)=>{
        if (font && font.url === url) {
            return true;
        }
        return false;
    })) == null ? void 0 : _manifest_find.content) || "";
}
function parseGoogleFontName(css) {
    const regex = /font-family: ([^;]*)/g;
    const matches = css.matchAll(regex);
    const fontNames = new Set();
    for (let font of matches){
        const fontFamily = font[1].replace(/^['"]|['"]$/g, "");
        fontNames.add(fontFamily);
    }
    return [
        ...fontNames
    ];
}
function formatName(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, "");
}
function formatOverrideValue(val) {
    return Math.abs(val * 100).toFixed(2);
}
export function calculateOverrideValues(fontName) {
    const fontKey = formatName(fontName);
    const fontMetrics = capsizeFontsMetrics[fontKey];
    let { category, ascent, descent, lineGap, unitsPerEm } = fontMetrics;
    const fallbackFont = category === "serif" ? DEFAULT_SERIF_FONT : DEFAULT_SANS_SERIF_FONT;
    ascent = formatOverrideValue(ascent / unitsPerEm);
    descent = formatOverrideValue(descent / unitsPerEm);
    lineGap = formatOverrideValue(lineGap / unitsPerEm);
    return {
        ascent,
        descent,
        lineGap,
        fallbackFont: fallbackFont.name
    };
}
export function calculateSizeAdjustValues(fontName) {
    const fontKey = formatName(fontName);
    const fontMetrics = capsizeFontsMetrics[fontKey];
    let { category, ascent, descent, lineGap, unitsPerEm, xWidthAvg } = fontMetrics;
    const mainFontAvgWidth = xWidthAvg / unitsPerEm;
    const fallbackFont = category === "serif" ? DEFAULT_SERIF_FONT : DEFAULT_SANS_SERIF_FONT;
    const fallbackFontName = formatName(fallbackFont.name);
    const fallbackFontMetrics = capsizeFontsMetrics[fallbackFontName];
    const fallbackFontAvgWidth = fallbackFontMetrics.xWidthAvg / fallbackFontMetrics.unitsPerEm;
    let sizeAdjust = xWidthAvg ? mainFontAvgWidth / fallbackFontAvgWidth : 1;
    ascent = formatOverrideValue(ascent / (unitsPerEm * sizeAdjust));
    descent = formatOverrideValue(descent / (unitsPerEm * sizeAdjust));
    lineGap = formatOverrideValue(lineGap / (unitsPerEm * sizeAdjust));
    return {
        ascent,
        descent,
        lineGap,
        fallbackFont: fallbackFont.name,
        sizeAdjust: formatOverrideValue(sizeAdjust)
    };
}
function calculateOverrideCSS(font) {
    const fontName = font.trim();
    const { ascent, descent, lineGap, fallbackFont } = calculateOverrideValues(fontName);
    return `
    @font-face {
      font-family: "${fontName} Fallback";
      ascent-override: ${ascent}%;
      descent-override: ${descent}%;
      line-gap-override: ${lineGap}%;
      src: local("${fallbackFont}");
    }
  `;
}
function calculateSizeAdjustCSS(font) {
    const fontName = font.trim();
    const { ascent, descent, lineGap, fallbackFont, sizeAdjust } = calculateSizeAdjustValues(fontName);
    return `
    @font-face {
      font-family: "${fontName} Fallback";
      ascent-override: ${ascent}%;
      descent-override: ${descent}%;
      line-gap-override: ${lineGap}%;
      size-adjust: ${sizeAdjust}%;
      src: local("${fallbackFont}");
    }
  `;
}
export function getFontOverrideCss(url, css, useSizeAdjust = false) {
    if (!isGoogleFont(url)) {
        return "";
    }
    const calcFn = useSizeAdjust ? calculateSizeAdjustCSS : calculateOverrideCSS;
    try {
        const fontNames = parseGoogleFontName(css);
        const fontCss = fontNames.reduce((cssStr, fontName)=>{
            cssStr += calcFn(fontName);
            return cssStr;
        }, "");
        return fontCss;
    } catch (e) {
        console.log("Error getting font override values - ", e);
        return "";
    }
}

//# sourceMappingURL=font-utils.js.map