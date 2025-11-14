((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/Snake.en.md?type=text'],
{ "docs/manual/layout/Snake.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/Snake.en.md?watch=parent");
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
        "value": "Snake Layout is a special type of graph layout that can more efficiently display long chain structures in a limited space. Note that the graph data must ensure that nodes are linearly arranged from the source node to the sink node, forming a clear path.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Nodes are arranged in an S-shape: the first node is at the start of the first row, subsequent nodes are arranged to the right in the first row until the end. At the end of the row, the next row's nodes are arranged from right to left. This process repeats until all nodes are placed.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Suitable for scenarios that require compact presentation of linear relationships:",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Long process visualization",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Perfect for scenarios with many process steps, such as approval flows, production line procedures, logistics routes, etc.",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Hierarchical structures in limited space",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "When the hierarchy is too long but the canvas is limited, rows can be folded to save space. For example, API call dependencies (client → gateway → serviceA → serviceB → database, snake layout compresses 5 layers into 2 rows), or file directory trees (deeply nested folder structures, e.g., src/components/utils/helpers/..., using snake layout to fold subdirectories horizontally).",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    autoFit: 'center',\n    data: {\n      nodes: new Array(16).fill(0).map((_, i) => ({ id: `${i}` })),\n      edges: new Array(15).fill(0).map((_, i) => ({ source: `${i}`, target: `${i + 1}` })),\n    },\n    node: {\n      style: {\n        labelFill: '#fff',\n        labelPlacement: 'center',\n        labelText: (d) => d.id,\n      },\n    },\n    behaviors: ['drag-canvas'],\n    layout: {\n      type: 'snake',\n      clockwise: true,\n      cols: 4,\n      colGap: 30,\n      rowGap: 30,\n      padding: 15,\n      nodeSize: 30,\n    },\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      type: 'snake',\n      clockwise: true,\n      cols: 4,\n      colGap: 30,\n      rowGap: 30,\n      padding: 15,\n      nodeSize: 30,\n    };\n\n    const optionFolder = gui.addFolder('Grid Layout Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'cols', 2, 10, 1);\n    optionFolder.add(options, 'colGap', 10, 150, 1);\n    optionFolder.add(options, 'rowGap', 10, 150, 1);\n    optionFolder.add(options, 'padding', 5, 100, 1);\n    optionFolder.add(options, 'nodeSize', 10, 50, 30);\n    optionFolder.add(options, 'clockwise');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.setLayout({\n        type: 'snake',\n        [property]: value,\n      });\n      graph.layout();\n    });\n  },\n);\n",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "If the layout has specific properties, they are listed below. For common layout options, see ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Base Layout Options",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Layout type",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "snake",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "clockwise",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Whether nodes are arranged clockwise",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "colGap",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Gap size between columns",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Automatically calculated by canvas width and total columns",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "cols",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Number of columns",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "5",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "nodeSize",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Node size",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Size | ((node: NodeData) => Size)",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "padding",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Padding, i.e., distance from layout area to canvas boundary",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number | number[]",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "0",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "rowGap",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Gap size between rows",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Automatically calculated by canvas height and total rows",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "sortBy",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Node sorting method",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "(nodeA: NodeData, nodeB: NodeData) => -1 | 0 | 1",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Default is the path order in the graph",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "When arranged clockwise, nodes start from the top left, the first row is arranged left to right, the second row right to left, and so on, forming an S-shaped path.",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "When arranged counterclockwise, nodes start from the top right, the first row is arranged right to left, the second row left to right, and so on, forming a reversed S-shaped path.",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: new Array(16).fill(0).map((_, i) => ({ id: `${i}` })),\n  edges: new Array(15).fill(0).map((_, i) => ({ source: `${i}`, target: `${i + 1}` })),\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      labelFill: '#fff',\n      labelPlacement: 'center',\n      labelText: (d) => d.id,\n    },\n  },\n  layout: {\n    type: 'snake',\n    padding: 50,\n  },\n  behaviors: ['drag-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 13,
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
//# sourceMappingURL=docs_manual_layout_Snake_en_md_q_hK4X-async.js.map