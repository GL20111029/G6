((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/overview.zh.md?type=text'],
{ "docs/manual/element/edge/overview.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/edge/overview.zh.md?watch=parent");
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
        "value": "边（Edge）是图中的基本元素之一，用于连接两个节点或组合，表示它们之间的关系。在 G6 中，边具有方向性，从 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "source",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 指向 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "target",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "，也可以通过配置隐藏箭头以表示无方向连接。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "你可以在任意两个节点、组合，或节点与组合之间创建边，还可以通过创建多条边来表达不同的关系类型。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "G6 提供了以下内置边：",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "line",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " 直线边",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "polyline",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " 折线边",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "quadratic",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " 二次贝塞尔曲线边",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "cubic",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " 三次贝塞尔曲线边",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "cubicVertical",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " 垂直三次贝塞尔曲线边",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "cubicHorizontal",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " 水平三次贝塞尔曲线边",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "定义边时，需要在图的数据对象中添加 ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "edges",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " 字段。每条边是一个对象，结构如下：",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "属性",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "类型",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "默认值",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "必选",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "source",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "边起始节点 ID",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "target",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "边目标节点 ID",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "id",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "边的唯一标识符",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "type",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "边类型，内置边类型名称或者自定义边的名称，比如 ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "line",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " 或者 ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "polyline",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "data",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "边数据，用于存储边的自定义数据，可以在样式映射中通过回调函数获取",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "object",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "style",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "边样式，包括线条颜色、宽度、箭头等视觉属性",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "object",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "states",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "边初始状态",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "string[]",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "edges",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 数组中一个数据项的示例：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "{\n  \"source\": \"alice\",\n  \"target\": \"bob\",\n  \"type\": \"line\",\n  \"data\": { \"relationship\": \"friend\", \"strength\": 5 },\n  \"style\": { \"stroke\": \"green\", \"lineWidth\": 2 },\n  \"states\": [\"hover\"]\n}\n",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "配置边的方式有三种，按优先级从高到低如下：",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "使用 ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "graph.setEdge()",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " 动态配置",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "实例化图时全局配置",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "在数据中动态属性",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "这几个配置方法可以同时使用。有相同的配置项时，优先级高的方式将会覆盖优先级低的。",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "graph.setEdge()",
        "paraId": 11
    },
    {
        "value": "可在图实例创建后，使用 ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "graph.setEdge()",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " 动态设置边的样式映射逻辑。",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "该方法需要在 ",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "graph.render()",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": " 之前调用才会生效，并拥有最高优先级。",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "graph.setEdge({\n  style: {\n    type: 'line',\n    style: { stroke: '#5CACEE', lineWidth: 2 },\n  },\n});\n\ngraph.render();\n",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "在实例化图时可以通过 ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " 配置边样式映射，这里的配置是全局的配置，将会在所有边上生效。",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  edge: {\n    type: 'line',\n    style: { stroke: '#5CACEE', lineWidth: 2 },\n  },\n});\n",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "如果需要为不同边进行不同的配置，可以将配置写入到边数据中。这种配置方式可以通过下面代码的形式直接写入数据：",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "const data = {\n  edges: [\n    {\n      source: 'node-1',\n      target: 'node-2',\n      type: 'line',\n      style: { stroke: 'orange' },\n    },\n  ],\n};\n",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "如果你想让数据中配置的优先级高于全局配置，你可以采取以下方式：",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "const data = {\n  edges: [\n    {\n      source: 'node-1',\n      target: 'node-2',\n      type: 'line',\n      style: { stroke: 'orange' },\n    },\n  ],\n};\n\nconst graph = new Graph({\n  edge: {\n    type: 'line',\n    style: {\n      stroke: (d) => d.style.stroke || '#5CACEE',\n      lineWidth: 2,\n    },\n  },\n});\n",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": "当内置边无法满足需求时，G6 提供了强大的自定义能力：",
        "paraId": 21,
        "tocIndex": 7
    },
    {
        "value": "继承内置边进行扩展",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": "创建全新的边类型",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": "与组合不同，自定义边需要先注册后使用。详细教程请参考 ",
        "paraId": 23,
        "tocIndex": 7
    },
    {
        "value": "自定义边",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " 文档。",
        "paraId": 23,
        "tocIndex": 7
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
//# sourceMappingURL=docs_manual_element_edge_overview_zh_md_q_hK4X-async.js.map