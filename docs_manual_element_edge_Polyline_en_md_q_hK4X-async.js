((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/Polyline.en.md?type=text'],
{ "docs/manual/element/edge/Polyline.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/edge/Polyline.en.md?watch=parent");
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
        "value": "A polyline is an edge composed of multiple straight line segments, suitable for connecting nodes by bypassing obstacles in complex layouts.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Use cases:",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Suitable for graphs with complex layouts, such as circuit diagrams and pipeline diagrams.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Use when you need to bypass other nodes or obstacles.",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        {\n          id: 'node1',\n          style: { x: 150, y: 150 },\n        },\n        {\n          id: 'node2',\n          style: {\n            x: 400,\n            y: 150,\n            labelText: 'Drag Me!',\n            labelPadding: [1, 5],\n            labelBackground: true,\n            labelBackgroundRadius: 10,\n            labelBackgroundFill: '#99add1',\n          },\n        },\n      ],\n      edges: [\n        {\n          id: 'edge1',\n          source: 'node1',\n          target: 'node2',\n          text: 'polyline',\n        },\n      ],\n    },\n    node: {\n      style: {\n        fill: '#f8f8f8',\n        stroke: '#8b9baf',\n        lineWidth: 1,\n      },\n    },\n    edge: {\n      type: 'polyline',\n      style: {\n        stroke: '#7e3feb',\n        lineWidth: 2,\n        labelText: (d) => d.text,\n        labelBackground: true,\n        labelBackgroundFill: '#f9f0ff',\n        labelBackgroundOpacity: 1,\n        labelBackgroundLineWidth: 2,\n        labelBackgroundStroke: '#7e3feb',\n        labelPadding: [1, 10],\n        labelBackgroundRadius: 4,\n        router: { type: 'orth' },\n      },\n    },\n    behaviors: ['drag-canvas', 'drag-element'],\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    gui.add({ type: 'polyline' }, 'type').disable();\n\n    let index = 3;\n    const options = {\n      radius: 0,\n      router: {\n        type: 'orth',\n      },\n      random: () => {\n        const x = Math.floor(Math.random() * 600);\n        const y = Math.floor(Math.random() * 300);\n        graph.addNodeData([\n          {\n            id: `node-${index}`,\n            style: {\n              size: 5,\n              fill: '#7e3feb',\n              x,\n              y,\n            },\n          },\n        ]);\n        index++;\n        graph.updateEdgeData((prev) => {\n          const targetEdgeData = prev.find((edge) => edge.id === 'edge1');\n          const controlPoints = [...(targetEdgeData.style.controlPoints || [])];\n          controlPoints.push([x, y]);\n          return [{ ...targetEdgeData, style: { ...targetEdgeData.style, controlPoints } }];\n        });\n        graph.render();\n      },\n    };\n    const optionFolder = gui.addFolder('polyline.style');\n    optionFolder.add(options, 'radius', 0, 100, 1);\n    optionFolder.add(options, 'router');\n    optionFolder.add(options, 'random').name('Add random node as control points');\n\n    optionFolder.onChange(({ property, value }) => {\n      if (property === 'random') return;\n      graph.updateEdgeData([{ id: 'edge1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "设置 ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "edge.type",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " 为 ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "polyline",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " 以使用折线。",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "If the element has specific attributes, we will list them below. For all general style attributes, see ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "BaseEdge",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Attribute",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "controlPoints",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Array of control points used to define the turning points of the polyline.",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Point",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "[]",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "[]",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "radius",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Corner radius of the turning points.",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "0",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "router",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Whether to enable routing.",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "false | ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "OrthRouter",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "ShortestPathRouter",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Attribute",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Orthogonal routing, adding extra control points on the path to keep each segment horizontal or vertical.",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "'orth'",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "padding",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Minimum distance between the node connection point and the corner.",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Padding",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "0",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Attribute",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Shortest path routing, an intelligent version of orthogonal routing ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "'orth'",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": ". This routing consists of horizontal or vertical orthogonal segments. It uses the A* algorithm to calculate the shortest path and supports automatic avoidance of other nodes (obstacles) on the path.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "'shortest-path'",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "offset",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Minimum distance between the node anchor point and the corner.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Padding",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "gridSize",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Grid cell size.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "maxAllowedDirectionChange",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Maximum allowed rotation angle (radians).",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "startDirections",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Possible starting directions of the node.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Direction",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "[]",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "endDirections",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Possible ending directions of the node.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Direction",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "[]",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "directionMap",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Specifies the movable directions.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "{ [key in ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Direction",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "]: { stepX: number; stepY: number } }",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "penalties",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Represents additional costs for certain paths during path searching. The key is the radian value, and the value is the cost.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "{ [key: string]: number }",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "distFunc",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Specifies the function to calculate the distance between two points.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "(p1: ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Point",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": ", p2: ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Point",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": ") => number",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "maximumLoops",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Maximum number of iterations.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "enableObstacleAvoidance",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Whether to enable obstacle avoidance.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "type Direction = 'left' | 'right' | 'top' | 'bottom';\n",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "type Point = [number, number] | [number, number, number] | Float32Array;\n",
        "paraId": 22,
        "tocIndex": 6
    },
    {
        "value": "type Padding = number | [number, number] | [number, number, number, number];\n",
        "paraId": 23,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node-1', style: { x: 200, y: 200 } },\n    { id: 'node-2', style: { x: 350, y: 120 } },\n  ],\n  edges: [\n    {\n      id: 'edge-1',\n      source: 'node-1',\n      target: 'node-2',\n      controlPoints: [[300, 190]],\n    },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  edge: {\n    type: 'polyline',\n    style: {\n      controlPoints: (d) => d.controlPoints,\n    },\n  },\n  behaviors: [{ type: 'drag-element' }],\n});\n\ngraph.render();\n",
        "paraId": 24,
        "tocIndex": 9
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
//# sourceMappingURL=docs_manual_element_edge_Polyline_en_md_q_hK4X-async.js.map