((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/FruchtermanLayout.en.md?type=text'],
{ "docs/manual/layout/FruchtermanLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/FruchtermanLayout.en.md?watch=parent");
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
        "value": "The Fruchterman layout is a force-directed layout based on the algorithm from ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Graph Drawing by Force-directed Placement",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ". By flexibly configuring parameters to simulate physical forces, the layout automatically reaches a stable equilibrium state with minimal energy. It supports both basic uniform distribution and cluster layouts. See more Fruchterman force-directed layout ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "examples",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " and ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "source code",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ".",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Basic uniform distribution: Suitable for displaying network graphs with evenly distributed nodes and clear overall structure, such as network topology and knowledge graphs.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Cluster layout: Suitable for visualizing data with internal aggregation or grouping, such as community structure display and association group analysis.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "'fruchterman'",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "height",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout height",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "container height",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "width",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout width",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "container width",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "gravity",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Central force, i.e., the force attracting all nodes to the ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "center",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": ". The larger the value, the more compact the layout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "10",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "speed",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Node movement speed per iteration. Too high a speed may cause strong oscillation",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "5",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "onTick",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Callback for each iteration",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(data: ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "LayoutMapping",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": ") => void",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Property",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clustering",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Whether to use cluster layout",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "nodeClusterBy",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Field name in node data for clustering, effective when ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clustering",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " is true",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'cluster'",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clusterGravity",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Gravity within clusters, affects cluster compactness, effective when ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clustering",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " is true",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 500,\n  height: 250,\n  data: {\n    nodes: [\n      { id: '0' },\n      { id: '1' },\n      { id: '2' },\n      { id: '3' },\n      { id: '4' },\n      { id: '5' },\n      { id: '6' },\n      { id: '7' },\n      { id: '8' },\n      { id: '9' },\n      { id: '10' },\n    ],\n    edges: [\n      { source: '0', target: '1' },\n      { source: '0', target: '2' },\n      { source: '0', target: '3' },\n      { source: '0', target: '4' },\n      { source: '0', target: '7' },\n      { source: '0', target: '8' },\n      { source: '0', target: '9' },\n      { source: '0', target: '10' },\n      { source: '2', target: '3' },\n      { source: '4', target: '5' },\n      { source: '4', target: '6' },\n      { source: '5', target: '6' },\n      { source: '9', target: '10' },\n    ],\n  },\n  node: {\n    style: {\n      labelFill: '#fff',\n      labelPlacement: 'center',\n      labelText: (d) => d.id,\n    },\n  },\n  layout: {\n    type: 'fruchterman',\n    gravity: 5,\n    speed: 5,\n  },\n  behaviors: ['drag-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "Show full code",
        "paraId": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: '0' },\n    { id: '1' },\n    { id: '2' },\n    { id: '3' },\n    { id: '4' },\n    { id: '5' },\n    { id: '6' },\n    { id: '7' },\n    { id: '8' },\n    { id: '9' },\n    { id: '10' },\n  ],\n  edges: [\n    { source: '0', target: '1' },\n    { source: '0', target: '2' },\n    { source: '0', target: '3' },\n    { source: '0', target: '4' },\n    { source: '0', target: '7' },\n    { source: '0', target: '8' },\n    { source: '0', target: '9' },\n    { source: '0', target: '10' },\n    { source: '2', target: '3' },\n    { source: '4', target: '5' },\n    { source: '4', target: '6' },\n    { source: '5', target: '6' },\n    { source: '9', target: '10' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      labelFill: '#fff',\n      labelPlacement: 'center',\n      labelText: (d) => d.id,\n    },\n  },\n  layout: {\n    type: 'fruchterman',\n    gravity: 5,\n    speed: 5,\n  },\n  behaviors: ['drag-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 500,\n  height: 250,\n  data: {\n    nodes: [\n      { id: '0', data: { cluster: 'a' } },\n      { id: '1', data: { cluster: 'a' } },\n      { id: '2', data: { cluster: 'a' } },\n      { id: '3', data: { cluster: 'a' } },\n      { id: '4', data: { cluster: 'a' } },\n      { id: '5', data: { cluster: 'b' } },\n      { id: '6', data: { cluster: 'b' } },\n      { id: '7', data: { cluster: 'b' } },\n      { id: '8', data: { cluster: 'c' } },\n      { id: '9', data: { cluster: 'c' } },\n      { id: '10', data: { cluster: 'c' } },\n    ],\n    edges: [\n      { source: '0', target: '1' },\n      { source: '0', target: '2' },\n      { source: '0', target: '4' },\n      { source: '0', target: '6' },\n      { source: '2', target: '3' },\n      { source: '2', target: '4' },\n      { source: '3', target: '4' },\n      { source: '5', target: '6' },\n      { source: '6', target: '7' },\n      { source: '7', target: '8' },\n      { source: '8', target: '9' },\n      { source: '8', target: '10' },\n    ],\n  },\n  node: {\n    style: {\n      labelFill: '#fff',\n      labelPlacement: 'center',\n      labelText: (d) => `${d.data.cluster}-${d.id}`,\n    },\n    palette: {\n      type: 'group',\n      field: 'cluster',\n    },\n  },\n  edge: {\n    style: {\n      endArrow: true,\n    },\n  },\n  layout: {\n    type: 'fruchterman',\n    gravity: 6,\n    speed: 5,\n\n    // Cluster layout parameters\n    clustering: true,\n    nodeClusterBy: 'cluster',\n    clusterGravity: 3,\n  },\n  behaviors: ['drag-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Show full code",
        "paraId": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: '0', data: { cluster: 'a' } },\n    { id: '1', data: { cluster: 'a' } },\n    { id: '2', data: { cluster: 'a' } },\n    { id: '3', data: { cluster: 'a' } },\n    { id: '4', data: { cluster: 'a' } },\n    { id: '5', data: { cluster: 'b' } },\n    { id: '6', data: { cluster: 'b' } },\n    { id: '7', data: { cluster: 'b' } },\n    { id: '8', data: { cluster: 'c' } },\n    { id: '9', data: { cluster: 'c' } },\n    { id: '10', data: { cluster: 'c' } },\n  ],\n  edges: [\n    { source: '0', target: '1' },\n    { source: '0', target: '2' },\n    { source: '0', target: '4' },\n    { source: '0', target: '6' },\n    { source: '2', target: '3' },\n    { source: '2', target: '4' },\n    { source: '3', target: '4' },\n    { source: '5', target: '6' },\n    { source: '6', target: '7' },\n    { source: '7', target: '8' },\n    { source: '8', target: '9' },\n    { source: '8', target: '10' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      labelFill: '#fff',\n      labelPlacement: 'center',\n      labelText: (d) => `${d.data.cluster}-${d.id}`,\n    },\n    palette: {\n      type: 'group',\n      field: 'cluster',\n    },\n  },\n  edge: {\n    style: {\n      endArrow: true,\n    },\n  },\n  layout: {\n    type: 'fruchterman',\n    gravity: 6,\n    speed: 5,\n\n    // Cluster layout parameters\n    clustering: true,\n    nodeClusterBy: 'cluster',\n    clusterGravity: 3,\n  },\n  behaviors: ['drag-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 9,
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
//# sourceMappingURL=docs_manual_layout_FruchtermanLayout_en_md_q_hK4X-async.js.map