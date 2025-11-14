((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/data.zh.md?type=text'],
{ "docs/api/data.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/data.zh.md?watch=parent");
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
        "value": "G6 提供了一套全面的 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "数据",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 操作 API，覆盖了图数据从查询、修改到更新的完整生命周期。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "获取图的完整数据。",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "getData(): Required<GraphData>;\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "返回值",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": ": ",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "GraphData",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": ": 返回包含所有节点、边和组合数据的完整图数据",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "示例",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "const graphData = graph.getData();\nconsole.log('节点数据:', graphData.nodes);\nconsole.log('边数据:', graphData.edges);\nconsole.log('组合数据:', graphData.combos);\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "获取节点数据，支持三种调用方式。",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "// 获取所有节点数据\ngetNodeData(): NodeData[];\n\n// 获取单个节点数据\ngetNodeData(id: ID): NodeData;\n\n// 批量获取多个节点数据\ngetNodeData(ids: ID[]): NodeData[];\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "参数",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "参数",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "id",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "节点 ID",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "ids",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "节点 ID 数组",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "string[]",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "返回值",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": ": ",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "[]",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": ": 返回指定的节点数据或节点数据数组",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "示例",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "// 获取所有节点\nconst nodes = graph.getNodeData();\n\n// 获取单个节点\nconst node = graph.getNodeData('node1');\nconsole.log('节点位置:', node.style.x, node.style.y);\n\n// 获取多个节点\nconst [node1, node2] = graph.getNodeData(['node1', 'node2']);\n",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "获取边数据，支持三种调用方式。",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "// 获取所有边数据\ngetEdgeData(): EdgeData[];\n\n// 获取单条边数据\ngetEdgeData(id: ID): EdgeData;\n\n// 批量获取多条边数据\ngetEdgeData(ids: ID[]): EdgeData[];\n",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "id",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "边 ID",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "ids",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "边 ID 数组",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "string[]",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "返回值",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": ": ",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 26,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "[]",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": ": 返回指定的边数据或边数据数组",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": "// 获取所有边\nconst edges = graph.getEdgeData();\n\n// 获取单条边\nconst edge = graph.getEdgeData('edge1');\nconsole.log('边的起点和终点:', edge.source, edge.target);\n\n// 获取多条边\nconst [edge1, edge2] = graph.getEdgeData(['edge1', 'edge2']);\n",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "获取组合数据,支持三种调用方式。",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "// 获取所有组合数据\ngetComboData(): ComboData[];\n\n// 获取单个组合数据\ngetComboData(id: ID): ComboData;\n\n// 批量获取多个组合数据\ngetComboData(ids: ID[]): ComboData[];\n",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": "参数",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": "参数",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "类型",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "默认值",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "必选",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "id",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "组合 ID",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "ids",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "组合 ID 数组",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "string[]",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "返回值",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "类型",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": ": ",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "ComboData",
        "paraId": 36,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "ComboData",
        "paraId": 37,
        "tocIndex": 5
    },
    {
        "value": "[]",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": ": 返回指定的组合数据或组合数据数组",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "示例",
        "paraId": 38,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 38,
        "tocIndex": 5
    },
    {
        "value": "// 获取所有组合\nconst combos = graph.getComboData();\n\n// 获取单个组合\nconst combo = graph.getComboData('combo1');\nconsole.log('组合包含的节点:', combo.children);\n\n// 获取多个组合\nconst [combo1, combo2] = graph.getComboData(['combo1', 'combo2']);\n",
        "paraId": 39,
        "tocIndex": 5
    },
    {
        "value": "获取单个元素数据，支持两种调用方式。",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "⚠️ ",
        "paraId": 41,
        "tocIndex": 6
    },
    {
        "value": "注意",
        "paraId": 41,
        "tocIndex": 6
    },
    {
        "value": ": 此 API 直接获取元素的数据而不必考虑元素类型。",
        "paraId": 41,
        "tocIndex": 6
    },
    {
        "value": "// 获取单个元素数据\ngetElementData(id: ID): ElementDatum;\n\n// 批量获取多个元素数据\ngetElementData(ids: ID[]): ElementDatum[];\n",
        "paraId": 42,
        "tocIndex": 6
    },
    {
        "value": "参数",
        "paraId": 43,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 43,
        "tocIndex": 6
    },
    {
        "value": "参数",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "描述",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "类型",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "默认值",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "必选",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "id",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "元素 ID",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "ids",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "元素 ID 数组",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "string[]",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "返回值",
        "paraId": 45,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 45,
        "tocIndex": 6
    },
    {
        "value": "类型",
        "paraId": 46,
        "tocIndex": 6
    },
    {
        "value": ": ElementDatum | ElementDatum[]",
        "paraId": 46,
        "tocIndex": 6
    },
    {
        "value": "描述",
        "paraId": 46,
        "tocIndex": 6
    },
    {
        "value": ": 直接获取元素的数据而不必考虑元素类型",
        "paraId": 46,
        "tocIndex": 6
    },
    {
        "value": "示例",
        "paraId": 47,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 47,
        "tocIndex": 6
    },
    {
        "value": "const element = graph.getElementData('node-1');\nconsole.log('元素数据:', element);\n\nconst elements = graph.getElementData(['node-1', 'edge-1']);\nconsole.log('多个元素数据:', elements);\n",
        "paraId": 48,
        "tocIndex": 6
    },
    {
        "value": "获取指定状态下的元素数据，支持三种调用方式。",
        "paraId": 49,
        "tocIndex": 7
    },
    {
        "value": "// 获取指定状态下的节点数据\ngetElementDataByState(elementType: 'node', state: string): NodeData[];\n\n// 获取指定状态下的边数据\ngetElementDataByState(elementType: 'edge', state: string): EdgeData[];\n\n// 获取指定状态下的组合数据\ngetElementDataByState(elementType: 'combo', state: string): ComboData[];\n",
        "paraId": 50,
        "tocIndex": 7
    },
    {
        "value": "参数",
        "paraId": 51,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 51,
        "tocIndex": 7
    },
    {
        "value": "参数",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "描述",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "类型",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "默认值",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "必选",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "elementType",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "元素类型",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "'node'",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "'edge'",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "'combo'",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "✓",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "state",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "状态",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "✓",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "返回值",
        "paraId": 53,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 53,
        "tocIndex": 7
    },
    {
        "value": "类型",
        "paraId": 54,
        "tocIndex": 7
    },
    {
        "value": ": NodeData[] | EdgeData[] | ComboData[]",
        "paraId": 54,
        "tocIndex": 7
    },
    {
        "value": "描述",
        "paraId": 54,
        "tocIndex": 7
    },
    {
        "value": ": 返回指定状态下的节点数据、边数据或组合数据",
        "paraId": 54,
        "tocIndex": 7
    },
    {
        "value": "示例",
        "paraId": 55,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 55,
        "tocIndex": 7
    },
    {
        "value": "const selectedNodes = graph.getElementDataByState('node', 'selected');\nconsole.log('选中的节点:', selectedNodes);\n\nconst selectedEdges = graph.getElementDataByState('edge', 'selected');\nconsole.log('选中的边:', selectedEdges);\n\nconst selectedCombos = graph.getElementDataByState('combo', 'selected');\nconsole.log('选中的组合:', selectedCombos);\n",
        "paraId": 56,
        "tocIndex": 7
    },
    {
        "value": "内置状态",
        "paraId": 57,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 57,
        "tocIndex": 7
    },
    {
        "value": "'selected'",
        "paraId": 58,
        "tocIndex": 7
    },
    {
        "value": "'highlight'",
        "paraId": 58,
        "tocIndex": 7
    },
    {
        "value": "'active'",
        "paraId": 58,
        "tocIndex": 7
    },
    {
        "value": "'inactive'",
        "paraId": 58,
        "tocIndex": 7
    },
    {
        "value": "'disabled'",
        "paraId": 58,
        "tocIndex": 7
    },
    {
        "value": "获取节点或组合的一跳邻居节点数据。",
        "paraId": 59,
        "tocIndex": 8
    },
    {
        "value": "getNeighborNodesData(id: ID): NodeData[];\n",
        "paraId": 60,
        "tocIndex": 8
    },
    {
        "value": "参数",
        "paraId": 61,
        "tocIndex": 8
    },
    {
        "value": ":",
        "paraId": 61,
        "tocIndex": 8
    },
    {
        "value": "参数",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "描述",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "类型",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "默认值",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "必选",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "id",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "节点或组合的 ID",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "string",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "-",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "✓",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "返回值",
        "paraId": 63,
        "tocIndex": 8
    },
    {
        "value": ":",
        "paraId": 63,
        "tocIndex": 8
    },
    {
        "value": "类型",
        "paraId": 64,
        "tocIndex": 8
    },
    {
        "value": ": NodeData[]",
        "paraId": 64,
        "tocIndex": 8
    },
    {
        "value": "描述",
        "paraId": 64,
        "tocIndex": 8
    },
    {
        "value": ": 返回邻居节点数据",
        "paraId": 64,
        "tocIndex": 8
    },
    {
        "value": "示例",
        "paraId": 65,
        "tocIndex": 8
    },
    {
        "value": ":",
        "paraId": 65,
        "tocIndex": 8
    },
    {
        "value": "const neighbors = graph.getNeighborNodesData('node-1');\nconsole.log('邻居节点:', neighbors);\n",
        "paraId": 66,
        "tocIndex": 8
    },
    {
        "value": "获取节点或组合关联边的数据。",
        "paraId": 67,
        "tocIndex": 9
    },
    {
        "value": "getRelatedEdgesData(id: ID, direction?: EdgeDirection): EdgeData[];\n",
        "paraId": 68,
        "tocIndex": 9
    },
    {
        "value": "参数",
        "paraId": 69,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 69,
        "tocIndex": 9
    },
    {
        "value": "参数",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "描述",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "类型",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "默认值",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "必选",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "id",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "节点或组合的 ID",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "string",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "✓",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "direction",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "边的方向",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "'in'",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "'out'",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "'both'",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "返回值",
        "paraId": 71,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 71,
        "tocIndex": 9
    },
    {
        "value": "类型",
        "paraId": 72,
        "tocIndex": 9
    },
    {
        "value": ": EdgeData[]",
        "paraId": 72,
        "tocIndex": 9
    },
    {
        "value": "描述",
        "paraId": 72,
        "tocIndex": 9
    },
    {
        "value": ": 返回与指定节点或组合关联的边数据",
        "paraId": 72,
        "tocIndex": 9
    },
    {
        "value": "示例",
        "paraId": 73,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 73,
        "tocIndex": 9
    },
    {
        "value": "const relatedEdges = graph.getRelatedEdgesData('node-1');\nconsole.log('关联边:', relatedEdges);\n",
        "paraId": 74,
        "tocIndex": 9
    },
    {
        "value": "获取节点或组合的父元素数据。",
        "paraId": 75,
        "tocIndex": 10
    },
    {
        "value": "getParentData(id: ID, hierarchy: HierarchyKey): NodeLikeData | undefined;\n",
        "paraId": 76,
        "tocIndex": 10
    },
    {
        "value": "参数",
        "paraId": 77,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 77,
        "tocIndex": 10
    },
    {
        "value": "参数",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "描述",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "类型",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "默认值",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "必选",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "id",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "节点或组合的 ID",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "string",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "✓",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "hierarchy",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "指定层级关系类型",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "'tree'",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": " | ",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "'combo'",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "返回值",
        "paraId": 79,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 79,
        "tocIndex": 10
    },
    {
        "value": "类型",
        "paraId": 80,
        "tocIndex": 10
    },
    {
        "value": ": NodeData | ComboData | undefined",
        "paraId": 80,
        "tocIndex": 10
    },
    {
        "value": "描述",
        "paraId": 80,
        "tocIndex": 10
    },
    {
        "value": ": 返回父元素数据,如果不存在则返回 undefined",
        "paraId": 80,
        "tocIndex": 10
    },
    {
        "value": "示例",
        "paraId": 81,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 81,
        "tocIndex": 10
    },
    {
        "value": "// 获取树图中节点的父节点\nconst treeParent = graph.getParentData('node1', 'tree');\n\n// 获取组合中节点的父组合\nconst comboParent = graph.getParentData('node1', 'combo');\n",
        "paraId": 82,
        "tocIndex": 10
    },
    {
        "value": "获取节点或组合的子元素数据。",
        "paraId": 83,
        "tocIndex": 11
    },
    {
        "value": "getChildrenData(id: ID):(NodeData \\| ComboData)[];\n",
        "paraId": 84,
        "tocIndex": 11
    },
    {
        "value": "参数",
        "paraId": 85,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 85,
        "tocIndex": 11
    },
    {
        "value": "参数",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "描述",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "类型",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "默认值",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "必选",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "id",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "节点或组合的 ID",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "string",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "-",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "✓",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "返回值",
        "paraId": 87,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 87,
        "tocIndex": 11
    },
    {
        "value": "类型",
        "paraId": 88,
        "tocIndex": 11
    },
    {
        "value": ": (NodeData | ComboData)[]",
        "paraId": 88,
        "tocIndex": 11
    },
    {
        "value": "描述",
        "paraId": 88,
        "tocIndex": 11
    },
    {
        "value": ": 返回子元素数据数组",
        "paraId": 88,
        "tocIndex": 11
    },
    {
        "value": "注意",
        "paraId": 89,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 89,
        "tocIndex": 11
    },
    {
        "value": "查询 combo 的子元素",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": "：如果 id 对应的是 combo 元素，可以直接通过此 API 获取其所有子元素。",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": "查询节点的子元素",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": "：如果 id 对应的是节点，只有当图数据为树结构（即节点数据中维护有 ",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": "children",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": " 字段，且 ",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": "children",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": " 为该节点的子节点 ID 数组）时，才能通过此 API 获取到该节点的子元素。否则返回空数组。",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": "示例",
        "paraId": 91,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 91,
        "tocIndex": 11
    },
    {
        "value": "// 获取组合的子元素\nconst children = graph.getChildrenData('combo1');\nconsole.log('子节点数量:', children.length);\n\n// 处理每个子元素\nchildren.forEach((child) => {\n  console.log('子元素ID:', child.id);\n});\n",
        "paraId": 92,
        "tocIndex": 11
    },
    {
        "value": "获取节点或组合的所有祖先元素数据。",
        "paraId": 93,
        "tocIndex": 12
    },
    {
        "value": "getAncestorsData(id: ID, hierarchy: HierarchyKey): NodeLikeData[];\n",
        "paraId": 94,
        "tocIndex": 12
    },
    {
        "value": "参数",
        "paraId": 95,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 95,
        "tocIndex": 12
    },
    {
        "value": "参数",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "描述",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "类型",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "默认值",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "必选",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "id",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "节点或组合的 ID",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "string",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "✓",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "hierarchy",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "指定层级关系类型",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "'tree'",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": " | ",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "'combo'",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "✓",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "返回值",
        "paraId": 97,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 97,
        "tocIndex": 12
    },
    {
        "value": "类型",
        "paraId": 98,
        "tocIndex": 12
    },
    {
        "value": ": ",
        "paraId": 98,
        "tocIndex": 12
    },
    {
        "value": "NodeData",
        "paraId": 99,
        "tocIndex": 12
    },
    {
        "value": "[] | ",
        "paraId": 98,
        "tocIndex": 12
    },
    {
        "value": "ComboData",
        "paraId": 100,
        "tocIndex": 12
    },
    {
        "value": "[]",
        "paraId": 98,
        "tocIndex": 12
    },
    {
        "value": "描述",
        "paraId": 98,
        "tocIndex": 12
    },
    {
        "value": ": 返回祖先元素数据数组，从父节点到根节点的顺序排列",
        "paraId": 98,
        "tocIndex": 12
    },
    {
        "value": "示例",
        "paraId": 101,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 101,
        "tocIndex": 12
    },
    {
        "value": "// 获取树图中节点的所有祖先节点\nconst treeAncestors = graph.getAncestorsData('node1', 'tree');\nconsole.log(\n  '祖先节点路径:',\n  treeAncestors.map((node) => node.id),\n);\n\n// 获取组合中节点的所有父组合\nconst comboAncestors = graph.getAncestorsData('node1', 'combo');\n",
        "paraId": 102,
        "tocIndex": 12
    },
    {
        "value": "获取节点或组合的所有后代元素数据。",
        "paraId": 103,
        "tocIndex": 13
    },
    {
        "value": "getDescendantsData(id: ID): NodeLikeData[];\n",
        "paraId": 104,
        "tocIndex": 13
    },
    {
        "value": "参数",
        "paraId": 105,
        "tocIndex": 13
    },
    {
        "value": ":",
        "paraId": 105,
        "tocIndex": 13
    },
    {
        "value": "参数",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "描述",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "类型",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "默认值",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "必选",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "id",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "节点或组合的 ID",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "✓",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "返回值",
        "paraId": 107,
        "tocIndex": 13
    },
    {
        "value": ":",
        "paraId": 107,
        "tocIndex": 13
    },
    {
        "value": "类型",
        "paraId": 108,
        "tocIndex": 13
    },
    {
        "value": ": ",
        "paraId": 108,
        "tocIndex": 13
    },
    {
        "value": "NodeData",
        "paraId": 109,
        "tocIndex": 13
    },
    {
        "value": "[] | ",
        "paraId": 108,
        "tocIndex": 13
    },
    {
        "value": "ComboData",
        "paraId": 110,
        "tocIndex": 13
    },
    {
        "value": "[]",
        "paraId": 108,
        "tocIndex": 13
    },
    {
        "value": "描述",
        "paraId": 108,
        "tocIndex": 13
    },
    {
        "value": ": 返回后代元素数据数组",
        "paraId": 108,
        "tocIndex": 13
    },
    {
        "value": "示例",
        "paraId": 111,
        "tocIndex": 13
    },
    {
        "value": ":",
        "paraId": 111,
        "tocIndex": 13
    },
    {
        "value": "// 获取节点的所有后代\nconst descendants = graph.getDescendantsData('node1');\nconsole.log('后代数量:', descendants.length);\n\n// 处理所有后代元素\ndescendants.forEach((descendant) => {\n  console.log('后代元素ID:', descendant.id);\n});\n",
        "paraId": 112,
        "tocIndex": 13
    },
    {
        "value": "设置图的完整数据。",
        "paraId": 113,
        "tocIndex": 14
    },
    {
        "value": "setData(data: GraphData | ((prev: GraphData) => GraphData)): void;\n",
        "paraId": 114,
        "tocIndex": 14
    },
    {
        "value": "参数",
        "paraId": 115,
        "tocIndex": 14
    },
    {
        "value": ":",
        "paraId": 115,
        "tocIndex": 14
    },
    {
        "value": "参数",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "描述",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "类型",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "默认值",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "必选",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "data",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "新的图数据或返回新图数据的函数",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "GraphData",
        "paraId": 117,
        "tocIndex": 14
    },
    {
        "value": " | ((prev: GraphData) => GraphData)",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "-",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "✓",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "示例",
        "paraId": 118,
        "tocIndex": 14
    },
    {
        "value": ":",
        "paraId": 118,
        "tocIndex": 14
    },
    {
        "value": "// 直接设置数据\ngraph.setData({\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 } },\n    { id: 'node2', style: { x: 200, y: 200 } },\n  ],\n  edges: [{ id: 'edge1', source: 'node1', target: 'node2' }],\n});\n\n// 使用函数式增量更新：获取当前图数据，并返回新的图数据\ngraph.setData((prev) => ({\n  ...prev,\n  nodes: [...prev.nodes, { id: 'node3', style: { x: 300, y: 300 } }],\n}));\n",
        "paraId": 119,
        "tocIndex": 14
    },
    {
        "value": "新增元素数据。",
        "paraId": 120,
        "tocIndex": 15
    },
    {
        "value": "addData(data: GraphData | ((prev: GraphData) => GraphData)): void;\n",
        "paraId": 121,
        "tocIndex": 15
    },
    {
        "value": "参数",
        "paraId": 122,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 122,
        "tocIndex": 15
    },
    {
        "value": "参数",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "描述",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "类型",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "默认值",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "必选",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "data",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "需要添加的图数据或返回新图数据的函数",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "GraphData",
        "paraId": 124,
        "tocIndex": 15
    },
    {
        "value": " | ((prev: GraphData) => GraphData)",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "-",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "✓",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "示例",
        "paraId": 125,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 125,
        "tocIndex": 15
    },
    {
        "value": "graph.addData({\n  nodes: [{ id: 'node-1' }, { id: 'node-2' }],\n  edges: [{ source: 'node-1', target: 'node-2' }],\n});\n",
        "paraId": 126,
        "tocIndex": 15
    },
    {
        "value": "新增节点数据。",
        "paraId": 127,
        "tocIndex": 16
    },
    {
        "value": "addNodeData(data: NodeData[] | ((prev: NodeData[]) => NodeData[])): void;\n",
        "paraId": 128,
        "tocIndex": 16
    },
    {
        "value": "参数",
        "paraId": 129,
        "tocIndex": 16
    },
    {
        "value": ":",
        "paraId": 129,
        "tocIndex": 16
    },
    {
        "value": "参数",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "描述",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "类型",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "默认值",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "必选",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "data",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "要添加的节点数据或返回节点数据的函数",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "NodeData",
        "paraId": 131,
        "tocIndex": 16
    },
    {
        "value": "[] | (prev: NodeData[]) => NodeData[]",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "✓",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "示例",
        "paraId": 132,
        "tocIndex": 16
    },
    {
        "value": ":",
        "paraId": 132,
        "tocIndex": 16
    },
    {
        "value": "// 添加单个节点\ngraph.addNodeData([\n  {\n    id: 'node1',\n    style: { x: 100, y: 100 },\n    data: { label: '节点 1' },\n  },\n]);\n\n// 批量添加节点\ngraph.addNodeData([\n  { id: 'node2', style: { x: 200, y: 200 } },\n  { id: 'node3', style: { x: 300, y: 300 } },\n]);\n\n// 函数式添加\ngraph.addNodeData((prev) => [...prev, { id: 'node4', style: { x: 400, y: 400 } }]);\n",
        "paraId": 133,
        "tocIndex": 16
    },
    {
        "value": "新增边数据。",
        "paraId": 134,
        "tocIndex": 17
    },
    {
        "value": "addEdgeData(data: EdgeData[] | ((prev: EdgeData[]) => EdgeData[])): void;\n",
        "paraId": 135,
        "tocIndex": 17
    },
    {
        "value": "参数",
        "paraId": 136,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 136,
        "tocIndex": 17
    },
    {
        "value": "参数",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "描述",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "类型",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "默认值",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "必选",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "data",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "要添加的边数据或返回边数据的函数",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "EdgeData",
        "paraId": 138,
        "tocIndex": 17
    },
    {
        "value": "[] | ((prev: EdgeData[]) => EdgeData[])",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "-",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "✓",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "示例",
        "paraId": 139,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 139,
        "tocIndex": 17
    },
    {
        "value": "// 添加单条边\ngraph.addEdgeData([\n  {\n    id: 'edge1',\n    source: 'node1',\n    target: 'node2',\n    data: {\n      weight: 1,\n      label: '关系',\n    },\n  },\n]);\n\n// 批量添加边\ngraph.addEdgeData([\n  { id: 'edge2', source: 'node2', target: 'node3' },\n  { id: 'edge3', source: 'node3', target: 'node1' },\n]);\n\n// 函数式添加\ngraph.addEdgeData((prev) => [...prev, { id: 'edge4', source: 'node1', target: 'node4' }]);\n",
        "paraId": 140,
        "tocIndex": 17
    },
    {
        "value": "新增组合数据。",
        "paraId": 141,
        "tocIndex": 18
    },
    {
        "value": "addComboData(data: ComboData[] | ((prev: ComboData[]) => ComboData[])): void;\n",
        "paraId": 142,
        "tocIndex": 18
    },
    {
        "value": "参数",
        "paraId": 143,
        "tocIndex": 18
    },
    {
        "value": ":",
        "paraId": 143,
        "tocIndex": 18
    },
    {
        "value": "参数",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "描述",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "类型",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "默认值",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "必选",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "data",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "要添加的组合数据或返回组合数据的函数",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "ComboData",
        "paraId": 145,
        "tocIndex": 18
    },
    {
        "value": "[] | (prev: ComboData[]) => ComboData[]",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "-",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "✓",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "示例",
        "paraId": 146,
        "tocIndex": 18
    },
    {
        "value": ":",
        "paraId": 146,
        "tocIndex": 18
    },
    {
        "value": "graph.addComboData([{ id: 'combo1', children: ['node1', 'node2'] }]);\n",
        "paraId": 147,
        "tocIndex": 18
    },
    {
        "value": "为树图节点添加子节点数据。",
        "paraId": 148,
        "tocIndex": 19
    },
    {
        "value": "⚠️ ",
        "paraId": 149,
        "tocIndex": 19
    },
    {
        "value": "注意",
        "paraId": 149,
        "tocIndex": 19
    },
    {
        "value": ": 为组合添加子节点使用 addNodeData / addComboData 方法。",
        "paraId": 149,
        "tocIndex": 19
    },
    {
        "value": "addChildrenData(parentId: ID, childrenData: NodeData[]): void;\n",
        "paraId": 150,
        "tocIndex": 19
    },
    {
        "value": "参数",
        "paraId": 151,
        "tocIndex": 19
    },
    {
        "value": ":",
        "paraId": 151,
        "tocIndex": 19
    },
    {
        "value": "参数",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "描述",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "类型",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "默认值",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "必选",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "parentId",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "父节点 ID",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "string",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "-",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "✓",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "childrenData",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "子节点数据",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "NodeData",
        "paraId": 153,
        "tocIndex": 19
    },
    {
        "value": "[]",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "-",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "✓",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "示例",
        "paraId": 154,
        "tocIndex": 19
    },
    {
        "value": ":",
        "paraId": 154,
        "tocIndex": 19
    },
    {
        "value": "graph.addChildrenData('node1', [{ id: 'node2' }]);\n",
        "paraId": 155,
        "tocIndex": 19
    },
    {
        "value": "删除元素数据。",
        "paraId": 156,
        "tocIndex": 20
    },
    {
        "value": "removeData(ids: DataID | ((data: GraphData) => DataID)): void;\n",
        "paraId": 157,
        "tocIndex": 20
    },
    {
        "value": "参数",
        "paraId": 158,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 158,
        "tocIndex": 20
    },
    {
        "value": "参数",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "描述",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "类型",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "默认值",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "必选",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "ids",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "要删除的元素 ID 或返回元素 ID 的函数",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "DataID",
        "paraId": 160,
        "tocIndex": 20
    },
    {
        "value": " | ((data: GraphData) => DataID)",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "-",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "✓",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "返回值",
        "paraId": 161,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 161,
        "tocIndex": 20
    },
    {
        "value": "类型",
        "paraId": 162,
        "tocIndex": 20
    },
    {
        "value": ": void",
        "paraId": 162,
        "tocIndex": 20
    },
    {
        "value": "示例",
        "paraId": 163,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 163,
        "tocIndex": 20
    },
    {
        "value": "graph.removeData({\n  nodes: ['node-1', 'node-2'],\n  edges: ['edge-1'],\n});\n",
        "paraId": 164,
        "tocIndex": 20
    },
    {
        "value": "删除节点数据。",
        "paraId": 165,
        "tocIndex": 21
    },
    {
        "value": "removeNodeData(ids: ID[] | ((data: NodeData[]) => ID[])): void;\n",
        "paraId": 166,
        "tocIndex": 21
    },
    {
        "value": "参数",
        "paraId": 167,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 167,
        "tocIndex": 21
    },
    {
        "value": "参数",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "描述",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "类型",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "默认值",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "必选",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "ids",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "要删除的节点 ID 或返回节点 ID 的函数",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "ID",
        "paraId": 169,
        "tocIndex": 21
    },
    {
        "value": "[] | ((data: ",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "NodeData",
        "paraId": 170,
        "tocIndex": 21
    },
    {
        "value": "[]) => ",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "ID",
        "paraId": 171,
        "tocIndex": 21
    },
    {
        "value": "[])",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "-",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "✓",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "返回值",
        "paraId": 172,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 172,
        "tocIndex": 21
    },
    {
        "value": "类型",
        "paraId": 173,
        "tocIndex": 21
    },
    {
        "value": ": void",
        "paraId": 173,
        "tocIndex": 21
    },
    {
        "value": "示例",
        "paraId": 174,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 174,
        "tocIndex": 21
    },
    {
        "value": "graph.removeNodeData(['node-1', 'node-2']);\n",
        "paraId": 175,
        "tocIndex": 21
    },
    {
        "value": "删除边数据。",
        "paraId": 176,
        "tocIndex": 22
    },
    {
        "value": "removeEdgeData(ids: ID[] | ((data: EdgeData[]) => ID[])): void;\n",
        "paraId": 177,
        "tocIndex": 22
    },
    {
        "value": "参数",
        "paraId": 178,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 178,
        "tocIndex": 22
    },
    {
        "value": "参数",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "描述",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "类型",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "默认值",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "必选",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "ids",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "要删除的边 ID 或返回边 ID 的函数",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "ID",
        "paraId": 180,
        "tocIndex": 22
    },
    {
        "value": "[] | ((data: ",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "EdgeData",
        "paraId": 181,
        "tocIndex": 22
    },
    {
        "value": "[]) => ",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "ID",
        "paraId": 182,
        "tocIndex": 22
    },
    {
        "value": "[])",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "✓",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "返回值",
        "paraId": 183,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 183,
        "tocIndex": 22
    },
    {
        "value": "类型",
        "paraId": 184,
        "tocIndex": 22
    },
    {
        "value": ": void",
        "paraId": 184,
        "tocIndex": 22
    },
    {
        "value": "示例",
        "paraId": 185,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 185,
        "tocIndex": 22
    },
    {
        "value": "graph.removeEdgeData(['edge-1']);\n",
        "paraId": 186,
        "tocIndex": 22
    },
    {
        "value": "删除组合数据。",
        "paraId": 187,
        "tocIndex": 23
    },
    {
        "value": "removeComboData(ids: ID[] | ((data: ComboData[]) => ID[])): void;\n",
        "paraId": 188,
        "tocIndex": 23
    },
    {
        "value": "参数",
        "paraId": 189,
        "tocIndex": 23
    },
    {
        "value": ":",
        "paraId": 189,
        "tocIndex": 23
    },
    {
        "value": "参数",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "描述",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "类型",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "默认值",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "必选",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "ids",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "要删除的组合 ID 或返回组合 ID 的函数",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "ID",
        "paraId": 191,
        "tocIndex": 23
    },
    {
        "value": "[] | (data: ",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "ComboData",
        "paraId": 192,
        "tocIndex": 23
    },
    {
        "value": "[]) => ",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "ID",
        "paraId": 193,
        "tocIndex": 23
    },
    {
        "value": "[]",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "-",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "✓",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "返回值",
        "paraId": 194,
        "tocIndex": 23
    },
    {
        "value": ":",
        "paraId": 194,
        "tocIndex": 23
    },
    {
        "value": "类型",
        "paraId": 195,
        "tocIndex": 23
    },
    {
        "value": ": void",
        "paraId": 195,
        "tocIndex": 23
    },
    {
        "value": "示例",
        "paraId": 196,
        "tocIndex": 23
    },
    {
        "value": ":",
        "paraId": 196,
        "tocIndex": 23
    },
    {
        "value": "graph.removeComboData(['combo-1']);\n",
        "paraId": 197,
        "tocIndex": 23
    },
    {
        "value": "更新元素数据。",
        "paraId": 198,
        "tocIndex": 24
    },
    {
        "value": "⚠️ ",
        "paraId": 199,
        "tocIndex": 24
    },
    {
        "value": "注意",
        "paraId": 199,
        "tocIndex": 24
    },
    {
        "value": ": 只需要传入需要更新的数据即可，不必传入完整的数据。",
        "paraId": 199,
        "tocIndex": 24
    },
    {
        "value": "updateData(data: PartialGraphData | ((prev: GraphData) => PartialGraphData)): void;\n",
        "paraId": 200,
        "tocIndex": 24
    },
    {
        "value": "参数",
        "paraId": 201,
        "tocIndex": 24
    },
    {
        "value": ":",
        "paraId": 201,
        "tocIndex": 24
    },
    {
        "value": "参数",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "描述",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "类型",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "默认值",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "必选",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "data",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "要更新的元素数据或返回元素数据的函数",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "PartialGraphData",
        "paraId": 203,
        "tocIndex": 24
    },
    {
        "value": " | ((prev: GraphData) => PartialGraphData)",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "-",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "✓",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "返回值",
        "paraId": 204,
        "tocIndex": 24
    },
    {
        "value": ":",
        "paraId": 204,
        "tocIndex": 24
    },
    {
        "value": "类型",
        "paraId": 205,
        "tocIndex": 24
    },
    {
        "value": ": void",
        "paraId": 205,
        "tocIndex": 24
    },
    {
        "value": "示例",
        "paraId": 206,
        "tocIndex": 24
    },
    {
        "value": ":",
        "paraId": 206,
        "tocIndex": 24
    },
    {
        "value": "graph.updateData({\n  nodes: [{ id: 'node-1', style: { x: 100, y: 100 } }],\n  edges: [{ id: 'edge-1', style: { lineWidth: 2 } }],\n});\n",
        "paraId": 207,
        "tocIndex": 24
    },
    {
        "value": "更新节点数据。",
        "paraId": 208,
        "tocIndex": 25
    },
    {
        "value": "⚠️ ",
        "paraId": 209,
        "tocIndex": 25
    },
    {
        "value": "注意",
        "paraId": 209,
        "tocIndex": 25
    },
    {
        "value": ": 只需要传入需要更新的数据即可，不必传入完整的数据。",
        "paraId": 209,
        "tocIndex": 25
    },
    {
        "value": "updateNodeData(data: NodeData[] | ((prev: NodeData[]) => NodeData[])): void;\n",
        "paraId": 210,
        "tocIndex": 25
    },
    {
        "value": "参数",
        "paraId": 211,
        "tocIndex": 25
    },
    {
        "value": ":",
        "paraId": 211,
        "tocIndex": 25
    },
    {
        "value": "参数",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "描述",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "类型",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "默认值",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "必选",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "data",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "要更新的节点数据或返回节点数据的函数",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "NodeData[] | (prev: NodeData[]) => NodeData[]",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "-",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "✓",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "返回值",
        "paraId": 213,
        "tocIndex": 25
    },
    {
        "value": ":",
        "paraId": 213,
        "tocIndex": 25
    },
    {
        "value": "类型",
        "paraId": 214,
        "tocIndex": 25
    },
    {
        "value": ": void",
        "paraId": 214,
        "tocIndex": 25
    },
    {
        "value": "示例",
        "paraId": 215,
        "tocIndex": 25
    },
    {
        "value": ":",
        "paraId": 215,
        "tocIndex": 25
    },
    {
        "value": "graph.updateNodeData([{ id: 'node-1', style: { x: 100, y: 100 } }]);\n",
        "paraId": 216,
        "tocIndex": 25
    },
    {
        "value": "更新边数据。",
        "paraId": 217,
        "tocIndex": 26
    },
    {
        "value": "⚠️ ",
        "paraId": 218,
        "tocIndex": 26
    },
    {
        "value": "注意",
        "paraId": 218,
        "tocIndex": 26
    },
    {
        "value": ": 只需要传入需要更新的数据即可，不必传入完整的数据。",
        "paraId": 218,
        "tocIndex": 26
    },
    {
        "value": "updateEdgeData(data: (PartialEdgeData<EdgeData>[] | ((prev: EdgeData[]) => PartialEdgeData<EdgeData>[]))): void;\n",
        "paraId": 219,
        "tocIndex": 26
    },
    {
        "value": "参数",
        "paraId": 220,
        "tocIndex": 26
    },
    {
        "value": ":",
        "paraId": 220,
        "tocIndex": 26
    },
    {
        "value": "参数",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "描述",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "类型",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "默认值",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "必选",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "data",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "要更新的边数据或返回边数据的函数",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "PartialEdgeData<EdgeData>",
        "paraId": 222,
        "tocIndex": 26
    },
    {
        "value": "[] | (prev: EdgeData[]) => ",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "PartialEdgeData<EdgeData>",
        "paraId": 223,
        "tocIndex": 26
    },
    {
        "value": "[]",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "-",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "✓",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "返回值",
        "paraId": 224,
        "tocIndex": 26
    },
    {
        "value": ":",
        "paraId": 224,
        "tocIndex": 26
    },
    {
        "value": "类型",
        "paraId": 225,
        "tocIndex": 26
    },
    {
        "value": ": void",
        "paraId": 225,
        "tocIndex": 26
    },
    {
        "value": "示例",
        "paraId": 226,
        "tocIndex": 26
    },
    {
        "value": ":",
        "paraId": 226,
        "tocIndex": 26
    },
    {
        "value": "graph.updateEdgeData([{ id: 'edge-1', style: { lineWidth: 2 } }]);\n",
        "paraId": 227,
        "tocIndex": 26
    },
    {
        "value": "更新组合数据。",
        "paraId": 228,
        "tocIndex": 27
    },
    {
        "value": "⚠️ ",
        "paraId": 229,
        "tocIndex": 27
    },
    {
        "value": "注意",
        "paraId": 229,
        "tocIndex": 27
    },
    {
        "value": ": 只需要传入需要更新的数据即可，不必传入完整的数据。",
        "paraId": 229,
        "tocIndex": 27
    },
    {
        "value": "updateComboData(data: (ComboData[] | ((prev: ComboData[]) => ComboData[]))): void;\n",
        "paraId": 230,
        "tocIndex": 27
    },
    {
        "value": "参数",
        "paraId": 231,
        "tocIndex": 27
    },
    {
        "value": ":",
        "paraId": 231,
        "tocIndex": 27
    },
    {
        "value": "参数",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "描述",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "类型",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "默认值",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "必选",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "data",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "要更新的组合数据或返回组合数据的函数",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "ComboData",
        "paraId": 233,
        "tocIndex": 27
    },
    {
        "value": "[] | (prev: ComboData[]) => ComboData[]",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "✓",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "返回值",
        "paraId": 234,
        "tocIndex": 27
    },
    {
        "value": ":",
        "paraId": 234,
        "tocIndex": 27
    },
    {
        "value": "类型",
        "paraId": 235,
        "tocIndex": 27
    },
    {
        "value": ": void",
        "paraId": 235,
        "tocIndex": 27
    },
    {
        "value": "示例",
        "paraId": 236,
        "tocIndex": 27
    },
    {
        "value": ":",
        "paraId": 236,
        "tocIndex": 27
    },
    {
        "value": "graph.updateComboData([{ id: 'combo-1', style: { x: 100, y: 100 } }]);\n",
        "paraId": 237,
        "tocIndex": 27
    },
    {
        "value": "判断节点是否存在",
        "paraId": 238,
        "tocIndex": 28
    },
    {
        "value": "hasNode(id:ID): boolean;\n",
        "paraId": 239,
        "tocIndex": 28
    },
    {
        "value": "参数",
        "paraId": 240,
        "tocIndex": 28
    },
    {
        "value": ":",
        "paraId": 240,
        "tocIndex": 28
    },
    {
        "value": "参数",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "描述",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "类型",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "默认值",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "必选",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "id",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "需要进行判断的节点id",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "ID",
        "paraId": 242,
        "tocIndex": 28
    },
    {
        "value": "-",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "✓",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "返回值",
        "paraId": 243,
        "tocIndex": 28
    },
    {
        "value": ":",
        "paraId": 243,
        "tocIndex": 28
    },
    {
        "value": "类型",
        "paraId": 244,
        "tocIndex": 28
    },
    {
        "value": ": boolean\n",
        "paraId": 244,
        "tocIndex": 28
    },
    {
        "value": "示例",
        "paraId": 244,
        "tocIndex": 28
    },
    {
        "value": ":",
        "paraId": 244,
        "tocIndex": 28
    },
    {
        "value": "graph.hasNode('node-1');\n",
        "paraId": 245,
        "tocIndex": 28
    },
    {
        "value": "判断边是否存在",
        "paraId": 246,
        "tocIndex": 29
    },
    {
        "value": "hasEdge(id:ID): boolean;\n",
        "paraId": 247,
        "tocIndex": 29
    },
    {
        "value": "参数",
        "paraId": 248,
        "tocIndex": 29
    },
    {
        "value": ":",
        "paraId": 248,
        "tocIndex": 29
    },
    {
        "value": "参数",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "描述",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "类型",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "默认值",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "必选",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "id",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "需要进行判断的边id",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "ID",
        "paraId": 250,
        "tocIndex": 29
    },
    {
        "value": "-",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "✓",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "返回值",
        "paraId": 251,
        "tocIndex": 29
    },
    {
        "value": ":",
        "paraId": 251,
        "tocIndex": 29
    },
    {
        "value": "类型",
        "paraId": 252,
        "tocIndex": 29
    },
    {
        "value": ": boolean\n",
        "paraId": 252,
        "tocIndex": 29
    },
    {
        "value": "示例",
        "paraId": 252,
        "tocIndex": 29
    },
    {
        "value": ":",
        "paraId": 252,
        "tocIndex": 29
    },
    {
        "value": "graph.hasEdge('edge-1');\n",
        "paraId": 253,
        "tocIndex": 29
    },
    {
        "value": "判断combo是否存在",
        "paraId": 254,
        "tocIndex": 30
    },
    {
        "value": "hasCombo(id:ID): boolean;\n",
        "paraId": 255,
        "tocIndex": 30
    },
    {
        "value": "参数",
        "paraId": 256,
        "tocIndex": 30
    },
    {
        "value": ":",
        "paraId": 256,
        "tocIndex": 30
    },
    {
        "value": "参数",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "描述",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "类型",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "默认值",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "必选",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "id",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "需要进行判断的combo组合id",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "ID",
        "paraId": 258,
        "tocIndex": 30
    },
    {
        "value": "-",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "✓",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "返回值",
        "paraId": 259,
        "tocIndex": 30
    },
    {
        "value": ":",
        "paraId": 259,
        "tocIndex": 30
    },
    {
        "value": "类型",
        "paraId": 260,
        "tocIndex": 30
    },
    {
        "value": ": boolean\n",
        "paraId": 260,
        "tocIndex": 30
    },
    {
        "value": "示例",
        "paraId": 260,
        "tocIndex": 30
    },
    {
        "value": ":",
        "paraId": 260,
        "tocIndex": 30
    },
    {
        "value": "graph.hasCombo('combo-1');\n",
        "paraId": 261,
        "tocIndex": 30
    },
    {
        "value": "元素 ID 类型。",
        "paraId": 262,
        "tocIndex": 32
    },
    {
        "value": "type ID = string;\n",
        "paraId": 263,
        "tocIndex": 32
    },
    {
        "value": "多个元素 ID 类型。",
        "paraId": 264,
        "tocIndex": 33
    },
    {
        "value": "interface DataID {\n  nodes?: ID[];\n  edges?: ID[];\n  combos?: ID[];\n}\n",
        "paraId": 265,
        "tocIndex": 33
    },
    {
        "value": "G6 图数据类型。",
        "paraId": 266,
        "tocIndex": 34
    },
    {
        "value": "interface GraphData {\n  nodes?: NodeData[];\n  edges?: EdgeData[];\n  combos?: ComboData[];\n}\n",
        "paraId": 267,
        "tocIndex": 34
    },
    {
        "value": "节点数据类型。",
        "paraId": 268,
        "tocIndex": 35
    },
    {
        "value": "interface NodeData {\n  id: string; // 节点 ID\n  type?: string; // 节点类型\n  data?: Record<string, any>; // 节点数据\n  style?: Record<string, any>; // 节点样式\n  states?: string[]; // 节点初始状态\n  combo?: string; // 所属组合\n  children?: string[]; // 子节点 ID 数组\n}\n",
        "paraId": 269,
        "tocIndex": 35
    },
    {
        "value": "详细类型定义请参考 ",
        "paraId": 270,
        "tocIndex": 35
    },
    {
        "value": "节点数据",
        "paraId": 271,
        "tocIndex": 35
    },
    {
        "value": "。",
        "paraId": 270,
        "tocIndex": 35
    },
    {
        "value": "边数据类型。",
        "paraId": 272,
        "tocIndex": 36
    },
    {
        "value": "interface EdgeData {\n  source: string; // 起点 ID\n  target: string; // 终点 ID\n  id?: string; // 边 ID\n  type?: string; // 边类型\n  data?: Record<string, any>; // 边数据\n  style?: Record<string, any>; // 边样式\n  states?: string[]; // 边初始状态\n}\n",
        "paraId": 273,
        "tocIndex": 36
    },
    {
        "value": "详细类型定义请参考 ",
        "paraId": 274,
        "tocIndex": 36
    },
    {
        "value": "边数据",
        "paraId": 275,
        "tocIndex": 36
    },
    {
        "value": "。",
        "paraId": 274,
        "tocIndex": 36
    },
    {
        "value": "组合数据类型。",
        "paraId": 276,
        "tocIndex": 37
    },
    {
        "value": "interface ComboData {\n  id: string; // 组合 ID\n  type?: string; // 组合类型\n  data?: Record<string, any>; // 组合数据\n  style?: Record<string, any>; // 组合样式\n  states?: string[]; // 组合初始状态\n  combo?: string; // 父组合 ID\n}\n",
        "paraId": 277,
        "tocIndex": 37
    },
    {
        "value": "详细类型定义请参考 ",
        "paraId": 278,
        "tocIndex": 37
    },
    {
        "value": "组合数据",
        "paraId": 279,
        "tocIndex": 37
    },
    {
        "value": "。",
        "paraId": 278,
        "tocIndex": 37
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
//# sourceMappingURL=docs_api_data_zh_md_q_hK4X-async.js.map