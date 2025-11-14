((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/export-image.en.md?type=text'],
{ "docs/api/export-image.en.md?type=text": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "texts", {
    enumerable: true,
    get: function() {
        return texts;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("../../node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js"));
__mako_require__("docs/api/export-image.en.md?watch=parent");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const texts = [
    {
        "value": "G6 provides the functionality to export the graph as an image, allowing you to export the current canvas content as a DataURL format. This is convenient for saving, sharing, or further processing. The exported image will retain all visible elements on the canvas, including nodes, edges, combos, and other custom graphics.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Export the current canvas as an image in DataURL format.",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "toDataURL(options?: Partial<DataURLOptions>): Promise<string>;\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Parameters",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Parameter",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "options",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Export image configuration",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Partial<DataURLOptions>",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Return Value",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Returns a Promise that resolves to a DataURL string representing the image.",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "DataURLOptions Type Definition",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Parameter",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "mode",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "'viewport' | 'overall'",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "No",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Export mode ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " - viewport: Export viewport content ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " - overall: Export entire canvas",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "'image/png' | 'image/jpeg' | 'image/webp'",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "No",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Image type ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " - image/png: PNG format ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " - image/jpeg: JPEG format ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " - image/webp: WebP format",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "encoderOptions",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "No",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Image quality, only effective for image/jpeg and image/webp, range 0 ~ 1",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "G6 5.0 only provides an API to export the canvas as a Base64 image (",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "toDataURL",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "). If you need to download the image, you can use the following method:",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "async function downloadImage() {\n  const dataURL = await graph.toDataURL();\n  const [head, content] = dataURL.split(',');\n  const contentType = head.match(/:(.*?);/)![1];\n\n  const bstr = atob(content);\n  let length = bstr.length;\n  const u8arr = new Uint8Array(length);\n\n  while (length--) {\n    u8arr[length] = bstr.charCodeAt(length);\n  }\n\n  const blob = new Blob([u8arr], { type: contentType });\n\n  const url = URL.createObjectURL(blob);\n  const a = document.createElement('a');\n  a.href = url;\n  a.download = 'graph.png';\n  a.click();\n}\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "The exported image content may not include the complete canvas content. The export range only includes the content within the Graph canvas. Some plugins use custom containers, canvases, etc., which will not appear in the exported image.",
        "paraId": 12
    }
];
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=docs_api_export-image_en_md_q_hK4X-async.js.map