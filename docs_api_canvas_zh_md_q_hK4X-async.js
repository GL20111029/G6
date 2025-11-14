((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/canvas.zh.md?type=text'],
{ "docs/api/canvas.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/canvas.zh.md?watch=parent");
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
        "value": "G6 提供了一系列画布操作 API，用于控制和获取画布的基本信息。通过这些 API，你可以：",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "获取画布实例",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "获取和设置画布尺寸",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "操作画布渲染器和图层",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "获取画布实例，返回的实例可用于进行底层的画布操作。",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "getCanvas(): Canvas;\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "返回值类型说明",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Canvas 实例包含以下主要功能：",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "getLayer(name?: string)",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": 获取指定图层",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "getLayers()",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": 获取所有图层",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "getCamera()",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": 获取相机实例",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "getRoot()",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": 获取根节点",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "setCursor(cursor: string)",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": 设置鼠标样式",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "示例",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "// 获取画布实例\nconst canvas = graph.getCanvas();\n\n// 获取主图层\nconst mainLayer = canvas.getLayer('main');\n\n// 设置鼠标样式\ncanvas.setCursor('pointer');\n\n// 获取画布根节点\nconst root = canvas.getRoot();\n",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "获取当前画布容器的尺寸。返回一个包含宽度和高度的数组。",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "getSize(): [number, number];\n",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "示例",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "// 获取画布尺寸\nconst [width, height] = graph.getSize();\nconsole.log('画布宽度:', width);\nconsole.log('画布高度:', height);\n\n// 使用尺寸信息进行计算\nconst centerX = width / 2;\nconst centerY = height / 2;\n",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "设置画布容器的尺寸。这个方法会同时更新画布和容器的大小。",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "setSize(width: number, height: number): void;\n",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "width",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "画布宽度（像素）",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "height",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "画布高度（像素）",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "// 设置固定尺寸\ngraph.setSize(800, 600);\n",
        "paraId": 18,
        "tocIndex": 4
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
//# sourceMappingURL=docs_api_canvas_zh_md_q_hK4X-async.js.map