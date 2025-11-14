((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/export-image.zh.md?type=text'],
{ "docs/api/export-image.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/export-image.zh.md?watch=parent");
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
        "value": "G6 提供了将图导出为图片的功能，可以将当前画布内容导出为 DataURL 格式，方便保存、分享或进一步处理。导出的图片会保留画布上的所有可见元素，包括节点、边、组合以及其他自定义图形。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "将当前画布导出为 DataURL 格式的图片。",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "toDataURL(options?: Partial<DataURLOptions>): Promise<string>;\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "参数",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "参数",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "options",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "导出图片配置",
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
        "value": "返回值",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "返回一个 Promise，解析为表示图片的 DataURL 字符串。",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "DataURLOptions 类型定义",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "参数",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "描述",
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
        "value": "否",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "导出模式 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " - viewport: 导出视口内容 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " - overall: 导出整个画布",
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
        "value": "否",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "图片类型 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " - image/png: PNG 格式 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " - image/jpeg: JPEG 格式 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " - image/webp: WebP 格式",
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
        "value": "否",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "图片质量，仅对 image/jpeg 和 image/webp 有效，取值范围 0 ~ 1",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "G6 5.0 仅提供导出画布为 Base64 图片的 API(",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "toDataURL",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ")，如果需要下载图片，可以使用以下方法：",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "async function downloadImage() {\n  const dataURL = await graph.toDataURL();\n  const [head, content] = dataURL.split(',');\n  const contentType = head.match(/:(.*?);/)![1];\n\n  const bstr = atob(content);\n  let length = bstr.length;\n  const u8arr = new Uint8Array(length);\n\n  while (length--) {\n    u8arr[length] = bstr.charCodeAt(length);\n  }\n\n  const blob = new Blob([u8arr], { type: contentType });\n\n  const url = URL.createObjectURL(blob);\n  const a = document.createElement('a');\n  a.href = url;\n  a.download = 'graph.png';\n  a.click();\n}\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "导出的图片内容可能不会包含完整的画布内容，导出范围仅包含 Graph 画布中的内容。部分插件使用了自定义的容器、画布等，这部分内容不会出现在导出的图片中。",
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
//# sourceMappingURL=docs_api_export-image_zh_md_q_hK4X-async.js.map