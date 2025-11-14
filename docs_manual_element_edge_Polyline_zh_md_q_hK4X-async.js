((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/Polyline.zh.md?type=text'],
{ "docs/manual/element/edge/Polyline.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/edge/Polyline.zh.md?watch=parent");
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
        "value": "折线是由多条直线段组成的边，适合在复杂布局中绕过障碍物连接节点。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "使用场景：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "适用于复杂布局的图，如电路图、管道图。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "当需要绕过其他节点或障碍物时使用。",
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
        "value": "如果元素有其特定的属性，我们将在下面列出。对于所有的通用样式属性，见 ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "BaseEdge",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "属性",
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
        "value": "controlPoints",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "控制点数组，用于定义折线的转折点",
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
        "value": "转折点圆角半径",
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
        "value": "是否启用路由",
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
        "value": "属性",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "正交路由，通过在路径上添加额外的控制点，使得边的每一段都保持水平或垂直",
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
        "value": "节点连接点与转角的最小距离",
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
        "value": "属性",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "最短路径路由，是正交路由 ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "'orth'",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " 的智能版本。该路由由水平或垂直的正交线段组成。采用 A* 算法计算最短路径，并支持自动避开路径上的其他节点（障碍）",
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
        "value": "节点锚点与转角的最小距离",
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
        "value": "grid 格子大小",
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
        "value": "支持的最大旋转角度（弧度）",
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
        "value": "节点的可能起始方向",
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
        "value": "节点的可能结束方向",
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
        "value": "指定可移动的方向",
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
        "value": "表示在路径搜索过程中某些路径的额外代价。key 为弧度值，value 为代价",
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
        "value": "指定计算两点之间距离的函数",
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
        "value": "最大迭代次数",
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
        "value": "是否开启避障",
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
//# sourceMappingURL=docs_manual_element_edge_Polyline_zh_md_q_hK4X-async.js.map