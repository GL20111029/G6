((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/CubicHorizontal.en.md?type=text'],
{ "docs/manual/element/edge/CubicHorizontal.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/edge/CubicHorizontal.en.md?watch=parent");
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
        "value": "The horizontal cubic Bezier curve is a smooth curve with control points primarily distributed along the horizontal direction, suitable for connecting nodes horizontally.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Use cases:",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Suitable for horizontally laid-out graphs, such as flowcharts and hierarchical diagrams.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Use when emphasizing horizontal connections is needed.",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Note: When calculating control points, the distance on the x-axis is primarily considered, ignoring changes on the y-axis.",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "createGraph(\n  {\n    autoFit: 'center',\n    data: {\n      nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }, { id: 'node6' }],\n      edges: [\n        { source: 'node1', target: 'node2' },\n        { source: 'node1', target: 'node3' },\n        { source: 'node1', target: 'node4', text: 'cubic-horizontal' },\n        { source: 'node1', target: 'node5' },\n        { source: 'node1', target: 'node6' },\n      ],\n    },\n    node: {\n      style: {\n        fill: '#f8f8f8',\n        stroke: '#8b9baf',\n        lineWidth: 1,\n        port: true,\n        ports: [{ placement: 'left' }, { placement: 'right' }],\n      },\n    },\n    edge: {\n      type: 'cubic-horizontal',\n      style: {\n        stroke: '#7e3feb',\n        lineWidth: 2,\n        labelText: (d) => d.text,\n        labelBackground: true,\n        labelBackgroundFill: '#f9f0ff',\n        labelBackgroundOpacity: 1,\n        labelBackgroundLineWidth: 2,\n        labelBackgroundStroke: '#7e3feb',\n        labelPadding: [1, 10],\n        labelBackgroundRadius: 4,\n      },\n    },\n    behaviors: ['drag-canvas', 'drag-element'],\n    layout: {\n      type: 'antv-dagre',\n      rankdir: 'LR',\n      nodesep: 15,\n      ranksep: 100,\n    },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    gui.add({ type: 'cubic-horizontal' }, 'type').disable();\n\n    const options = {\n      curveOffset: 20,\n      curvePosition: 0.5,\n    };\n    const optionFolder = gui.addFolder('cubic-horizontal.style');\n    optionFolder.add(options, 'curveOffset', 0, 100);\n    optionFolder.add(options, 'curvePosition', 0, 1);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateEdgeData((prev) => prev.map((edge) => ({ ...edge, style: { [property]: value } })));\n      graph.render();\n    });\n  },\n);\n",
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
        "value": "cubic-horizontal",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 以使用水平方向的三次贝塞尔曲线。",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "If the element has specific attributes, we will list them below. For all general style attributes, see ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "BaseEdge",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Attribute",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "curvePosition",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Relative position of the control point on the line connecting the two endpoints, ranging from ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "0-1",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ".",
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
        "value": "Distance of the control point from the line connecting the two endpoints, understood as the degree of curve bending.",
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
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    {\n      id: 'node1',\n    },\n    {\n      id: 'node2',\n    },\n    {\n      id: 'node3',\n    },\n    {\n      id: 'node4',\n    },\n    {\n      id: 'node5',\n    },\n    {\n      id: 'node6',\n    },\n  ],\n  edges: [\n    {\n      id: 'line-default',\n      source: 'node1',\n      target: 'node2',\n    },\n    {\n      id: 'line-active',\n      source: 'node1',\n      target: 'node3',\n      states: ['active'],\n    },\n    {\n      id: 'line-selected',\n      source: 'node1',\n      target: 'node4',\n      states: ['selected'],\n    },\n    {\n      id: 'line-highlight',\n      source: 'node1',\n      target: 'node5',\n      states: ['highlight'],\n    },\n    {\n      id: 'line-inactive',\n      source: 'node1',\n      target: 'node6',\n      states: ['inactive'],\n    },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      port: true,\n      ports: [{ placement: 'right' }, { placement: 'left' }],\n    },\n  },\n  edge: {\n    type: 'cubic-horizontal',\n    style: {\n      labelText: (d) => d.id,\n      labelBackground: true,\n      endArrow: true,\n    },\n  },\n  layout: {\n    type: 'antv-dagre',\n    rankdir: 'LR',\n    nodesep: 20,\n    ranksep: 120,\n  },\n});\n\ngraph.render();\n",
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
//# sourceMappingURL=docs_manual_element_edge_CubicHorizontal_en_md_q_hK4X-async.js.map