((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/GridLayout.en.md?type=text'],
{ "docs/manual/layout/GridLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/GridLayout.en.md?watch=parent");
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
        "value": "The grid layout arranges nodes in a grid pattern, suitable for scenarios where nodes need to be arranged neatly. This layout supports automatic calculation of the number of rows and columns, or you can specify them manually. It also supports preventing node overlap.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Visualizing data in a matrix or table format",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: Array.from({ length: 25 }, (_, i) => ({\n        id: `node-${i}`,\n        data: {\n          value: Math.random() * 100,\n        },\n      })),\n      edges: Array.from({ length: 20 }, (_, i) => ({\n        id: `edge-${i}`,\n        source: `node-${Math.floor(Math.random() * 25)}`,\n        target: `node-${Math.floor(Math.random() * 25)}`,\n      })),\n    },\n    autoFit: 'view',\n    node: {\n      style: {\n        size: 20,\n        label: true,\n        labelText: (datum) => datum.id,\n        labelBackground: true,\n        icon: false,\n      },\n      palette: {\n        type: 'group',\n        field: (datum) => datum.data.value,\n        color: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n      },\n    },\n    edge: {\n      style: {\n        stroke: '#bfbfbf',\n      },\n    },\n    behaviors: ['drag-canvas'],\n    layout: {\n      type: 'grid',\n      cols: 5,\n      rows: 5,\n      width: 400,\n      height: 400,\n      preventOverlap: true,\n      nodeSize: 30,\n      condense: false,\n    },\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      type: 'grid',\n      cols: 5,\n      rows: 5,\n      width: 400,\n      height: 400,\n      preventOverlap: true,\n      nodeSize: 30,\n      condense: false,\n    };\n\n    const optionFolder = gui.addFolder('Grid Layout Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'cols', 2, 10, 1);\n    optionFolder.add(options, 'rows', 2, 10, 1);\n    optionFolder.add(options, 'width', 200, 600, 50);\n    optionFolder.add(options, 'height', 200, 600, 50);\n    optionFolder.add(options, 'preventOverlap');\n    optionFolder.add(options, 'nodeSize', 10, 50, 5);\n    optionFolder.add(options, 'condense');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.setLayout({\n        type: 'grid',\n        [property]: value,\n      });\n      graph.layout();\n    });\n  },\n);\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'grid',\n    begin: [0, 0],\n    cols: 5,\n    rows: 5,\n    width: 300,\n    height: 300,\n    preventOverlap: true,\n    nodeSize: 30,\n    condense: false,\n  },\n});\n",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Layout type",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "grid",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "begin",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Grid start position (top-left corner), default is ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "[0, 0]",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "[number, number]",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "[0, 0]",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "cols",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Number of columns. If undefined, the algorithm calculates it automatically based on node count, layout space, and rows (if set)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "undefined",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "rows",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Number of rows. If undefined, the algorithm calculates it automatically based on node count, layout space, and cols (if set)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "width",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Layout area width. In G6, the container width is used as the default value",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "300",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "height",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Layout area height. In G6, the container height is used as the default value",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "300",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "condense",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "If false, uses all available canvas space; if true, uses the minimum canvas space",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeSize",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Node size (diameter), used for collision detection when preventing overlap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Size | ((nodeData: Node) => Size)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeSpacing",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Node spacing, used to adjust the gap between nodes",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "((node?: Node) => number) | number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "position",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Specify the row and column for each node",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "(node?: Node) => { row?: number; col?: number; }",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "undefined",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "preventOverlap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Whether to prevent node overlap. Requires nodeSize or size property in node data",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "preventOverlapPadding",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Padding when preventing overlap. Effective when preventOverlap is true",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "sortBy",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Sort basis (node property name). Higher values are placed more centrally. If undefined, degree is used for sorting",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "undefined",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": " ",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "Default:",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": " ",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "false",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "Whether to prevent overlap",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Must be used with nodeSize or the size property in node data. Only when data has data.size or nodeSize is set in the layout, collision detection for node overlap can be performed.",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Default:",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "10",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Padding when preventing overlap. Effective when preventOverlap is true.",
        "paraId": 9,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": " ",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "Default:",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": " ",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "undefined",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "Sort basis (node property name). Higher values are placed more centrally. If undefined, degree is used for sorting. In G6, the container width is used as the default value for grid layout width. When used alone, the default is 300.",
        "paraId": 11,
        "tocIndex": 7
    },
    {
        "value": "The simplest configuration:",
        "paraId": 12,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'grid',\n    cols: 5,\n    rows: 5,\n  },\n  data: {\n    nodes: Array.from({ length: 25 }, (_, i) => ({\n      id: `node-${i}`,\n      data: {\n        value: Math.random() * 100,\n      },\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 25)}`,\n      target: `node-${Math.floor(Math.random() * 25)}`,\n    })),\n  },\n});\n",
        "paraId": 13,
        "tocIndex": 9
    },
    {
        "value": "Result:",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  layout: {\n    type: 'grid',\n    cols: 5,\n    rows: 5,\n  },\n  data: {\n    nodes: Array.from({ length: 25 }, (_, i) => ({\n      id: `node-${i}`,\n      data: {\n        value: Math.random() * 100,\n      },\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 25)}`,\n      target: `node-${Math.floor(Math.random() * 25)}`,\n    })),\n  },\n  node: {\n    style: {\n      size: 20,\n      label: true,\n      labelText: (datum) => datum.id,\n      labelBackground: true,\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#bfbfbf',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "You can customize the grid layout in various ways:",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'grid',\n    begin: [50, 50], // Start layout from [50, 50]\n    cols: 4, // 4 columns\n    rows: 6, // 6 rows\n    width: 400, // Layout area width\n    height: 600, // Layout area height\n    preventOverlap: true, // Prevent node overlap\n    nodeSize: 30, // Node size\n    condense: true, // Use minimum space\n    sortBy: 'value', // Sort by value property\n  },\n  data: {\n    nodes: Array.from({ length: 24 }, (_, i) => ({\n      id: `node-${i}`,\n      data: {\n        value: Math.random() * 100, // Property for sorting\n      },\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 24)}`,\n      target: `node-${Math.floor(Math.random() * 24)}`,\n    })),\n  },\n});\n",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Result:",
        "paraId": 18,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  layout: {\n    type: 'grid',\n    begin: [50, 50],\n    cols: 4,\n    rows: 6,\n    width: 400,\n    height: 600,\n    preventOverlap: true,\n    nodeSize: 30,\n    condense: true,\n    sortBy: 'value',\n  },\n  data: {\n    nodes: Array.from({ length: 24 }, (_, i) => ({\n      id: `node-${i}`,\n      data: {\n        value: Math.random() * 100,\n      },\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 24)}`,\n      target: `node-${Math.floor(Math.random() * 24)}`,\n    })),\n  },\n  node: {\n    style: {\n      size: 20,\n      label: true,\n      labelText: (datum) => datum.id,\n      labelBackground: true,\n    },\n    palette: {\n      type: 'group',\n      field: (datum) => datum.data.value,\n      color: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#bfbfbf',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 19,
        "tocIndex": 10
    },
    {
        "value": "You can specify the position for specific nodes using the ",
        "paraId": 20,
        "tocIndex": 11
    },
    {
        "value": "position",
        "paraId": 20,
        "tocIndex": 11
    },
    {
        "value": " property:",
        "paraId": 20,
        "tocIndex": 11
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'grid',\n    cols: 5,\n    rows: 5,\n    position: (node) => {\n      // Specify position for specific nodes\n      if (node.id === 'node-0') return { row: 0, col: 0 }; // Top-left\n      if (node.id === 'node-1') return { row: 0, col: 4 }; // Top-right\n      if (node.id === 'node-2') return { row: 4, col: 0 }; // Bottom-left\n      if (node.id === 'node-3') return { row: 4, col: 4 }; // Bottom-right\n      return undefined; // Other nodes are auto-arranged\n    },\n  },\n  data: {\n    nodes: Array.from({ length: 25 }, (_, i) => ({\n      id: `node-${i}`,\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 25)}`,\n      target: `node-${Math.floor(Math.random() * 25)}`,\n    })),\n  },\n});\n",
        "paraId": 21,
        "tocIndex": 11
    },
    {
        "value": "Result:",
        "paraId": 22,
        "tocIndex": 11
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  layout: {\n    type: 'grid',\n    cols: 5,\n    rows: 5,\n    position: (node) => {\n      if (node.id === 'node-0') return { row: 0, col: 0 };\n      if (node.id === 'node-1') return { row: 0, col: 4 };\n      if (node.id === 'node-2') return { row: 4, col: 0 };\n      if (node.id === 'node-3') return { row: 4, col: 4 };\n      return undefined;\n    },\n  },\n  data: {\n    nodes: Array.from({ length: 25 }, (_, i) => ({\n      id: `node-${i}`,\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 25)}`,\n      target: `node-${Math.floor(Math.random() * 25)}`,\n    })),\n  },\n  node: {\n    style: {\n      size: 20,\n      label: true,\n      labelText: (datum) => datum.id,\n      labelBackground: true,\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#bfbfbf',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 23,
        "tocIndex": 11
    },
    {
        "value": "Grid Layout",
        "paraId": 24,
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
//# sourceMappingURL=docs_manual_layout_GridLayout_en_md_q_hK4X-async.js.map