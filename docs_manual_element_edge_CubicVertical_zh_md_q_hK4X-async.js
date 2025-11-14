((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/CubicVertical.zh.md?type=text'],
{ "docs/manual/element/edge/CubicVertical.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/edge/CubicVertical.zh.md?watch=parent");
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
        "value": "垂直三次贝塞尔曲线是一种平滑的曲线，其控制点主要沿垂直方向分布，适合在垂直方向上连接节点。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "使用场景：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "适用于垂直布局的图，如组织结构图、树状图。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "当需要强调垂直方向的连接关系时使用。",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "特别注意，计算控制点时主要考虑 y 轴上的距离，忽略 x 轴的变化",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "createGraph(\n  {\n    autoFit: 'center',\n    data: {\n      nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }, { id: 'node6' }],\n      edges: [\n        { source: 'node1', target: 'node2' },\n        { source: 'node1', target: 'node3' },\n        { source: 'node1', target: 'node4', text: 'cubic-vertical' },\n        { source: 'node1', target: 'node5' },\n        { source: 'node1', target: 'node6' },\n      ],\n    },\n    node: {\n      style: {\n        fill: '#f8f8f8',\n        stroke: '#8b9baf',\n        lineWidth: 1,\n        port: true,\n        ports: [{ placement: 'top' }, { placement: 'bottom' }],\n      },\n    },\n    edge: {\n      type: 'cubic-vertical',\n      style: {\n        stroke: '#7e3feb',\n        lineWidth: 2,\n        labelText: (d) => d.text,\n        labelBackground: true,\n        labelBackgroundFill: '#f9f0ff',\n        labelBackgroundOpacity: 1,\n        labelBackgroundLineWidth: 2,\n        labelBackgroundStroke: '#7e3feb',\n        labelPadding: [1, 10],\n        labelBackgroundRadius: 4,\n      },\n    },\n    behaviors: ['drag-canvas', 'drag-element'],\n    layout: {\n      type: 'antv-dagre',\n      rankdir: 'TB',\n      nodesep: 25,\n      ranksep: 80,\n    },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    gui.add({ type: 'cubic-vertical' }, 'type').disable();\n\n    const options = {\n      curveOffset: 20,\n      curvePosition: 0.5,\n    };\n    const optionFolder = gui.addFolder('cubic-vertical.style');\n    optionFolder.add(options, 'curveOffset', 0, 100);\n    optionFolder.add(options, 'curvePosition', 0, 1);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateEdgeData((prev) => prev.map((edge) => ({ ...edge, style: { [property]: value } })));\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "设置 ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "edge.type",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 为 ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "cubic-vertical",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 以使用垂直方向的三次贝塞尔曲线。",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "如果元素有其特定的属性，我们将在下面列出。对于所有的通用样式属性，见 ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "BaseEdge",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "curvePosition",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "控制点在两端点连线上的相对位置，范围为",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "0-1",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number | number[]",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "[0.5,0.5]",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "curveOffset",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "控制点距离两端点连线的距离，可理解为控制边的弯曲程度",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number | number[]",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "[0,0]",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    {\n      id: 'node1',\n    },\n    {\n      id: 'node2',\n    },\n    {\n      id: 'node3',\n    },\n    {\n      id: 'node4',\n    },\n    {\n      id: 'node5',\n    },\n    {\n      id: 'node6',\n    },\n  ],\n  edges: [\n    {\n      id: 'line-default',\n      source: 'node1',\n      target: 'node2',\n    },\n    {\n      id: 'line-active',\n      source: 'node1',\n      target: 'node3',\n      states: ['active'],\n    },\n    {\n      id: 'line-selected',\n      source: 'node1',\n      target: 'node4',\n      states: ['selected'],\n    },\n    {\n      id: 'line-highlight',\n      source: 'node1',\n      target: 'node5',\n      states: ['highlight'],\n    },\n    {\n      id: 'line-inactive',\n      source: 'node1',\n      target: 'node6',\n      states: ['inactive'],\n    },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      port: true,\n      ports: [{ placement: 'top' }, { placement: 'bottom' }],\n    },\n  },\n  edge: {\n    type: 'cubic-vertical',\n    style: {\n      labelText: (d) => d.id,\n      labelBackground: true,\n      endArrow: true,\n    },\n  },\n  layout: {\n    type: 'antv-dagre',\n    begin: [50, 50],\n    rankdir: 'TB',\n    nodesep: 20,\n    ranksep: 120,\n  },\n});\n\ngraph.render();\n",
        "paraId": 10,
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
//# sourceMappingURL=docs_manual_element_edge_CubicVertical_zh_md_q_hK4X-async.js.map