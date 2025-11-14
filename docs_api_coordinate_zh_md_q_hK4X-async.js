((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/coordinate.zh.md?type=text'],
{ "docs/api/coordinate.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/coordinate.zh.md?watch=parent");
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
        "value": "在图可视化中，理解不同的坐标系及其转换关系至关重要。G6 中涉及多种坐标系，它们各自用于不同的场景：",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Client 坐标系",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "：浏览器视口左上角为原点，单位为像素。通常用于处理浏览器事件。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Screen 坐标系",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "：屏幕左上角为原点，会受页面滚动影响。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Page 坐标系",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "：文档左上角为原点，考虑文档滚动。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Canvas 坐标系",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "：也称为世界坐标系，图形绘制和布局时使用的坐标系，画布元素左上角为原点。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Viewport 坐标系",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "：视口坐标系，当前可见的画布区域，视口左上角为原点。视口通过平移、缩放等操作，可以观察不同的 Canvas 区域。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "在这个",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "示例",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "中，移动鼠标可以看到鼠标所在位置在各个坐标系下的值：",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "当画布没有发生平移和缩放时，Viewport 坐标系与 Canvas 坐标系重合。随着用户的交互（如拖拽画布、缩放），两个坐标系会出现偏移。",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "G6 提供了一系列 API 用于在不同坐标系之间进行转换，下面将详细介绍这些 API。",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "将浏览器坐标（客户端坐标）转换为画布坐标。",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "getCanvasByClient(point: Point): Point;\n",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "参数",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "参数",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "point",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "浏览器坐标点",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "返回值",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": ": [number, number] | [number, number, number]",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": ": 画布坐标系下的坐标点",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "将视口坐标转换为画布坐标。",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "getCanvasByViewport(point: Point): Point;\n",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "参数",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "参数",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "point",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "视口坐标点",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "返回值",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": ": [number, number] | [number, number, number]",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": ": 画布坐标系下的坐标点",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "将画布坐标转换为浏览器客户端坐标。",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "getClientByCanvas(point: Point): Point;\n",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "point",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "画布坐标点",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "返回值",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": ": [number, number] | [number, number, number]",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": ": 浏览器客户端坐标系下的坐标点",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "将画布坐标转换为视口坐标。",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "getViewportByCanvas(point: Point): Point;\n",
        "paraId": 24,
        "tocIndex": 5
    },
    {
        "value": "参数",
        "paraId": 25,
        "tocIndex": 5
    },
    {
        "value": "参数",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "类型",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "默认值",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "必选",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "point",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "画布坐标点",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "✓",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "返回值",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "类型",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": ": [number, number] | [number, number, number]",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": ": 视口坐标系下的坐标点",
        "paraId": 28,
        "tocIndex": 5
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
//# sourceMappingURL=docs_api_coordinate_zh_md_q_hK4X-async.js.map