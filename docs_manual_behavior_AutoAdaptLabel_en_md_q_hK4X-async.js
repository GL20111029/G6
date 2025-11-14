((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/AutoAdaptLabel.en.md?type=text'],
{ "docs/manual/behavior/AutoAdaptLabel.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/AutoAdaptLabel.en.md?watch=parent");
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
        "value": "Auto-adapt label display is a dynamic label management strategy designed to intelligently adjust which labels should be displayed or hidden based on factors such as spatial allocation of the current visible range and node importance. By analyzing the visible area in real-time, it ensures that users receive the most relevant and clear information display in different interaction scenarios, while avoiding visual overload and information redundancy.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "This interaction is mainly used for:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Node size changes",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Graph scaling",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', style: { x: 200, y: 100, labelText: '短标签' } },\n        { id: 'node2', style: { x: 360, y: 100, labelText: '中等长度的标签' } },\n        { id: 'node3', style: { x: 280, y: 220, labelText: '这是一个非常非常长的标签，需要自适应显示' } },\n      ],\n      edges: [\n        { source: 'node1', target: 'node2' },\n        { source: 'node1', target: 'node3' },\n        { source: 'node2', target: 'node3' },\n      ],\n    },\n    node: {\n      style: { label: true, fill: '#7e3feb', labelFill: '#666', labelFontSize: 14, labelPlacement: 'bottom' },\n      state: {\n        custom: { fill: '#ffa940' },\n      },\n    },\n    edge: {\n      stroke: '#8b9baf',\n      state: {\n        custom: { stroke: '#ffa940' },\n      },\n    },\n    behaviors: ['zoom-canvas', 'drag-canvas', { key: 'auto-adapt-label', type: 'auto-adapt-label' }],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      key: 'auto-adapt-label',\n      type: 'auto-adapt-label',\n      animation: true,\n      enable: true,\n      throttle: 100,\n      padding: 0,\n    };\n    const optionFolder = gui.addFolder('CollapseExpand Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'throttle', 0, 900, 100);\n    optionFolder.add(options, 'padding', 0, 20, 1);\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'auto-adapt-label',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Add this interaction in the graph configuration",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "1. Quick Configuration (Static)",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Declare directly using a string form. This method is simple but only supports default configuration and cannot be dynamically modified after configuration:",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['auto-adapt-label'],\n});\n",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "2. Object Configuration (Recommended)",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Configure using an object form, supporting custom parameters, and can dynamically update the configuration at runtime:",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'auto-adapt-label',\n      throttle: 200, // Throttle time\n      padding: 10, // Extra spacing when detecting overlap\n    },\n  ],\n});\n",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Option",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Interaction type name",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "auto-adapt-label",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "√",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Whether to enable this interaction",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Event",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": ") => boolean)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "throttle",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Label update throttle time (ms)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "100",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "padding",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Extra spacing when detecting label overlap",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "number | number[]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sort",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Custom sorting function, sorting elements from high to low importance, with higher importance elements having higher label display priority. Generally, combo > node > edge",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(a: ElementDatum, b: ElementDatum) => -1 | 0 | 1",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sortNode",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Sort nodes from high to low importance, with higher importance nodes having higher label display priority. Several built-in ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "centrality algorithms",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " are available, or a custom sorting function can be used. Note that if ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sort",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " is set, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sortNode",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " will not take effect",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "NodeCentralityOptions",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " | (nodeA: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "NodeData",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": ", nodeB: NodeData => -1 | 0 | 1)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "type: 'degree'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sortEdge",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Sort edges from high to low importance, with higher importance edges having higher label display priority. By default, it is sorted according to the order of data. Note that if ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sort",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " is set, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sortEdge",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " will not take effect",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(edgeA: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": ", edgeB: EdgeData) => -1 | 0 | 1",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sortCombo",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Sort groups from high to low importance, with higher importance groups having higher label display priority. By default, it is sorted according to the order of data. Note that if ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sort",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " is set, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sortCombo",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " will not take effect",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(comboA: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "ComboData",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": ", comboB: ComboData) => -1 | 0 | 1",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Methods for measuring node centrality",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "'degree'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": ": Degree centrality, measured by the degree of the node (number of connected edges). Nodes with high degree centrality usually have more direct connections and may play important roles in the network",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'betweenness'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": ": Betweenness centrality, measured by the number of times a node appears in all shortest paths. Nodes with high betweenness centrality usually act as bridges in the network, controlling the flow of information",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'closeness'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": ": Closeness centrality, measured by the reciprocal of the sum of the shortest path lengths from the node to all other nodes. Nodes with high closeness centrality can usually reach other nodes in the network more quickly",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'eigenvector'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": ": Eigenvector centrality, measured by the degree of connection of the node to other central nodes. Nodes with high eigenvector centrality are usually connected to other important nodes",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'pagerank'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": ": PageRank centrality, measured by the number of times a node is referenced by other nodes, commonly used in directed graphs. Nodes with high PageRank centrality usually have high influence in the network, similar to webpage ranking algorithms",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "type NodeCentralityOptions =\n  | { type: 'degree'; direction?: 'in' | 'out' | 'both' }\n  | { type: 'betweenness'; directed?: boolean; weightPropertyName?: string }\n  | { type: 'closeness'; directed?: boolean; weightPropertyName?: string }\n  | { type: 'eigenvector'; directed?: boolean }\n  | { type: 'pagerank'; epsilon?: number; linkProb?: number };\n",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', style: { x: 200, y: 100, labelText: '短标签' } },\n    { id: 'node2', style: { x: 360, y: 100, labelText: '中等长度的标签' } },\n    { id: 'node3', style: { x: 280, y: 220, labelText: '这是一个非常非常长的标签，需要自适应显示' } },\n  ],\n  edges: [\n    { source: 'node1', target: 'node2' },\n    { source: 'node1', target: 'node3' },\n    { source: 'node2', target: 'node3' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  behaviors: [\n    'zoom-canvas',\n    'drag-canvas',\n    {\n      key: 'auto-adapt-label',\n      type: 'auto-adapt-label',\n      padding: 0,\n      throttle: 200,\n    },\n  ],\n  plugins: [{ type: 'grid-line', size: 30 }],\n  animation: true,\n});\n\ngraph.render();\n",
        "paraId": 21,
        "tocIndex": 6
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
//# sourceMappingURL=docs_manual_behavior_AutoAdaptLabel_en_md_q_hK4X-async.js.map