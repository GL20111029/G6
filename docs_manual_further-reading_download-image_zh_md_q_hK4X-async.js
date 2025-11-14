((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/download-image.zh.md?type=text'],
{ "docs/manual/further-reading/download-image.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/download-image.zh.md?watch=parent");
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
        "value": "G6 5.0 仅提供导出画布为 Base64 图片的 API(",
        "paraId": 0
    },
    {
        "value": "toDataURL",
        "paraId": 1
    },
    {
        "value": ")，如果需要下载图片，可以使用以下方法：",
        "paraId": 0
    },
    {
        "value": "async function downloadImage() {\n  const dataURL = await graph.toDataURL();\n  const [head, content] = dataURL.split(',');\n  const contentType = head.match(/:(.*?);/)![1];\n\n  const bstr = atob(content);\n  let length = bstr.length;\n  const u8arr = new Uint8Array(length);\n\n  while (length--) {\n    u8arr[length] = bstr.charCodeAt(length);\n  }\n\n  const blob = new Blob([u8arr], { type: contentType });\n\n  const url = URL.createObjectURL(blob);\n  const a = document.createElement('a');\n  a.href = url;\n  a.download = 'graph.png';\n  a.click();\n}\n",
        "paraId": 2
    },
    {
        "value": "导出的图片内容可能不会包含完整的画布内容，导出范围仅包含 Graph 画布中的内容。部分插件使用了自定义的容器、画布等，这部分内容不会出现在导出的图片中。",
        "paraId": 3
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
//# sourceMappingURL=docs_manual_further-reading_download-image_zh_md_q_hK4X-async.js.map