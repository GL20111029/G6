((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/event.zh.md?type=text'],
{ "docs/manual/further-reading/event.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/event.zh.md?watch=parent");
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
        "value": "G6 中的事件系统是在 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 的事件系统基础上进行了封装，提供了更多的事件类型，以及更加方便的事件绑定和解绑方法。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6 中的事件类型主要分为以下几类：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "图(Graph)事件",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "画布(Canvas)事件",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "元素(Element)事件",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "图事件是指与整个图实例相关的事件，例如图的渲染完成事件、图的更新事件等。图事件的完整列表见",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "GraphEvent",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "。",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "图事件的监听与默认的事件监听方式一致，例如监听图的渲染完成事件：",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "import { Graph, GraphEvent } from '@antv/g6';\n\nconst graph = new Graph({\n  // ...\n});\n\ngraph.on(GraphEvent.AFTER_RENDER, () => {\n  // event handler\n});\n",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "画布事件是指与画布相关的事件，例如画布的点击事件、画布的拖拽事件等。画布事件的完整列表见",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "CanvasEvent",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "。",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "例如监听画布的点击事件：",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "import { Graph, CanvasEvent } from '@antv/g6';\n\nconst graph = new Graph({\n  // ...\n});\n\ngraph.on(CanvasEvent.CLICK, (event) => {\n  // event handler\n});\n",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "元素事件主要指在元素对象上触发的事件，例如节点的拖拽事件、边的点击事件等。元素分为节点(",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "node",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": ")、边(",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "edge",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": ")、组合(",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "combo",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": ")三类，对应的事件完整列表分别见：",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "NodeEvent",
        "paraId": 12,
        "tocIndex": 6
    },
    {
        "value": " 、",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "EdgeEvent",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "、",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "ComboEvent",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "。",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "与画布事件类似，例如监听节点的拖拽和边的点击事件：",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "import { Graph, NodeEvent, EdgeEvent, ComboEvent } from '@antv/g6';\n\nconst graph = new Graph({\n  // ...\n});\n\ngraph.on(NodeEvent.DRAG, (event) => {\n  // event handler\n});\n\ngraph.on(EdgeEvent.CLICK, (event) => {\n  // event handler\n});\n\ngraph.on(ComboEvent.CLICK, (event) => {\n  // event handler\n});\n",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "G6 提供以下 API 用于事件监听和解除：",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "添加事件监听",
        "paraId": 18,
        "tocIndex": 9
    },
    {
        "value": "const handler = (event) => {\n  // event handler\n};\n\ngraph.on('event_name', handler);\n",
        "paraId": 19,
        "tocIndex": 9
    },
    {
        "value": "移除事件监听",
        "paraId": 20,
        "tocIndex": 10
    },
    {
        "value": "graph.off('event_name', handler);\n",
        "paraId": 21,
        "tocIndex": 10
    },
    {
        "value": "当不传入任何参数时，会移除所有事件监听：",
        "paraId": 22,
        "tocIndex": 10
    },
    {
        "value": "graph.off();\n",
        "paraId": 23,
        "tocIndex": 10
    },
    {
        "value": "添加一次性事件监听，即事件触发后会自动移除事件监听",
        "paraId": 24,
        "tocIndex": 11
    },
    {
        "value": "graph.once('event_name', handler);\n",
        "paraId": 25,
        "tocIndex": 11
    },
    {
        "value": "如果你想手动触发一个事件，可以使用 ",
        "paraId": 26,
        "tocIndex": 12
    },
    {
        "value": "emit",
        "paraId": 26,
        "tocIndex": 12
    },
    {
        "value": " 方法：",
        "paraId": 26,
        "tocIndex": 12
    },
    {
        "value": "graph.emit('event_name', {\n  // event data\n});\n",
        "paraId": 27,
        "tocIndex": 12
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
//# sourceMappingURL=docs_manual_further-reading_event_zh_md_q_hK4X-async.js.map