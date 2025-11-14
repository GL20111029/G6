((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/data.en.md?type=text'],
{ "docs/api/data.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/data.en.md?watch=parent");
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
        "value": "G6 provides a comprehensive ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "data",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " operation API, covering the complete lifecycle of graph data from query, modification to update.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Get the complete data of the graph.",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "getData(): Required<GraphData>;\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Return Value",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Type",
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
        "value": "Description",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": ": Returns the complete graph data containing all nodes, edges, and combo data",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Example",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "const graphData = graph.getData();\nconsole.log('Node data:', graphData.nodes);\nconsole.log('Edge data:', graphData.edges);\nconsole.log('Combo data:', graphData.combos);\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Get node data, supporting three calling methods.",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "// Get all node data\ngetNodeData(): NodeData[];\n\n// Get single node data\ngetNodeData(id: ID): NodeData;\n\n// Get multiple node data\ngetNodeData(ids: ID[]): NodeData[];\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Parameters",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Parameter",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "id",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Node ID",
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
        "value": "Node ID array",
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
        "value": "Return Value",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Type",
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
        "value": "Description",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": ": Returns the specified node data or node data array",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Example",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "// Get all nodes\nconst nodes = graph.getNodeData();\n\n// Get single node\nconst node = graph.getNodeData('node1');\nconsole.log('Node position:', node.style.x, node.style.y);\n\n// Get multiple nodes\nconst [node1, node2] = graph.getNodeData(['node1', 'node2']);\n",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "Get edge data, supporting three calling methods.",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "// Get all edge data\ngetEdgeData(): EdgeData[];\n\n// Get single edge data\ngetEdgeData(id: ID): EdgeData;\n\n// Get multiple edge data\ngetEdgeData(ids: ID[]): EdgeData[];\n",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Parameter",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "id",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Edge ID",
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
        "value": "Edge ID array",
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
        "value": "Return Value",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "Type",
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
        "value": "Description",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": ": Returns the specified edge data or edge data array",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "Example",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": "// Get all edges\nconst edges = graph.getEdgeData();\n\n// Get single edge\nconst edge = graph.getEdgeData('edge1');\nconsole.log('Edge source and target:', edge.source, edge.target);\n\n// Get multiple edges\nconst [edge1, edge2] = graph.getEdgeData(['edge1', 'edge2']);\n",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "Get combo data, supporting three calling methods.",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "// Get all combo data\ngetComboData(): ComboData[];\n\n// Get single combo data\ngetComboData(id: ID): ComboData;\n\n// Get multiple combo data\ngetComboData(ids: ID[]): ComboData[];\n",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": "Parameters",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": "Parameter",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "Default",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "Required",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "id",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "Combo ID",
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
        "value": "Combo ID array",
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
        "value": "Return Value",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "Type",
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
        "value": "Description",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": ": Returns the specified combo data or combo data array",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "Example",
        "paraId": 38,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 38,
        "tocIndex": 5
    },
    {
        "value": "// Get all combos\nconst combos = graph.getComboData();\n\n// Get single combo\nconst combo = graph.getComboData('combo1');\nconsole.log('Nodes in combo:', combo.children);\n\n// Get multiple combos\nconst [combo1, combo2] = graph.getComboData(['combo1', 'combo2']);\n",
        "paraId": 39,
        "tocIndex": 5
    },
    {
        "value": "Get single element data, supporting two calling methods.",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "⚠️ ",
        "paraId": 41,
        "tocIndex": 6
    },
    {
        "value": "Note",
        "paraId": 41,
        "tocIndex": 6
    },
    {
        "value": ": This API directly gets the data of the element without considering the element type.",
        "paraId": 41,
        "tocIndex": 6
    },
    {
        "value": "// Get single element data\ngetElementData(id: ID): ElementDatum;\n\n// Get multiple element data\ngetElementData(ids: ID[]): ElementDatum[];\n",
        "paraId": 42,
        "tocIndex": 6
    },
    {
        "value": "Parameters",
        "paraId": 43,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 43,
        "tocIndex": 6
    },
    {
        "value": "Parameter",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "Required",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "id",
        "paraId": 44,
        "tocIndex": 6
    },
    {
        "value": "Element ID",
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
        "value": "Element ID array",
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
        "value": "Return Value",
        "paraId": 45,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 45,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 46,
        "tocIndex": 6
    },
    {
        "value": ": ElementDatum | ElementDatum[]",
        "paraId": 46,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 46,
        "tocIndex": 6
    },
    {
        "value": ": Directly gets the data of the element without considering the element type",
        "paraId": 46,
        "tocIndex": 6
    },
    {
        "value": "Example",
        "paraId": 47,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 47,
        "tocIndex": 6
    },
    {
        "value": "const element = graph.getElementData('node-1');\nconsole.log('Element data:', element);\n\nconst elements = graph.getElementData(['node-1', 'edge-1']);\nconsole.log('Multiple element data:', elements);\n",
        "paraId": 48,
        "tocIndex": 6
    },
    {
        "value": "Get element data in a specified state, supporting three calling methods.",
        "paraId": 49,
        "tocIndex": 7
    },
    {
        "value": "// Get node data in a specified state\ngetElementDataByState(elementType: 'node', state: string): NodeData[];\n\n// Get edge data in a specified state\ngetElementDataByState(elementType: 'edge', state: string): EdgeData[];\n\n// Get combo data in a specified state\ngetElementDataByState(elementType: 'combo', state: string): ComboData[];\n",
        "paraId": 50,
        "tocIndex": 7
    },
    {
        "value": "Parameters",
        "paraId": 51,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 51,
        "tocIndex": 7
    },
    {
        "value": "Parameter",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "Description",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "Required",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "elementType",
        "paraId": 52,
        "tocIndex": 7
    },
    {
        "value": "Element type",
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
        "value": "State",
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
        "value": "Return Value",
        "paraId": 53,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 53,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 54,
        "tocIndex": 7
    },
    {
        "value": ": NodeData[] | EdgeData[] | ComboData[]",
        "paraId": 54,
        "tocIndex": 7
    },
    {
        "value": "Description",
        "paraId": 54,
        "tocIndex": 7
    },
    {
        "value": ": Returns node data, edge data, or combo data in the specified state",
        "paraId": 54,
        "tocIndex": 7
    },
    {
        "value": "Example",
        "paraId": 55,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 55,
        "tocIndex": 7
    },
    {
        "value": "const selectedNodes = graph.getElementDataByState('node', 'selected');\nconsole.log('Selected nodes:', selectedNodes);\n\nconst selectedEdges = graph.getElementDataByState('edge', 'selected');\nconsole.log('Selected edges:', selectedEdges);\n\nconst selectedCombos = graph.getElementDataByState('combo', 'selected');\nconsole.log('Selected combos:', selectedCombos);\n",
        "paraId": 56,
        "tocIndex": 7
    },
    {
        "value": "Built-in States",
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
        "value": "Get the data of neighbor nodes of a node or combo.",
        "paraId": 59,
        "tocIndex": 8
    },
    {
        "value": "getNeighborNodesData(id: ID): NodeData[];\n",
        "paraId": 60,
        "tocIndex": 8
    },
    {
        "value": "Parameters",
        "paraId": 61,
        "tocIndex": 8
    },
    {
        "value": ":",
        "paraId": 61,
        "tocIndex": 8
    },
    {
        "value": "Parameter",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "Description",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "Type",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "Default",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "Required",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "id",
        "paraId": 62,
        "tocIndex": 8
    },
    {
        "value": "Node or combo ID",
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
        "value": "Return Value",
        "paraId": 63,
        "tocIndex": 8
    },
    {
        "value": ":",
        "paraId": 63,
        "tocIndex": 8
    },
    {
        "value": "Type",
        "paraId": 64,
        "tocIndex": 8
    },
    {
        "value": ": NodeData[]",
        "paraId": 64,
        "tocIndex": 8
    },
    {
        "value": "Description",
        "paraId": 64,
        "tocIndex": 8
    },
    {
        "value": ": Returns neighbor node data",
        "paraId": 64,
        "tocIndex": 8
    },
    {
        "value": "Example",
        "paraId": 65,
        "tocIndex": 8
    },
    {
        "value": ":",
        "paraId": 65,
        "tocIndex": 8
    },
    {
        "value": "const neighbors = graph.getNeighborNodesData('node-1');\nconsole.log('Neighbor nodes:', neighbors);\n",
        "paraId": 66,
        "tocIndex": 8
    },
    {
        "value": "Get the data of edges related to a node or combo.",
        "paraId": 67,
        "tocIndex": 9
    },
    {
        "value": "getRelatedEdgesData(id: ID, direction?: EdgeDirection): EdgeData[];\n",
        "paraId": 68,
        "tocIndex": 9
    },
    {
        "value": "Parameters",
        "paraId": 69,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 69,
        "tocIndex": 9
    },
    {
        "value": "Parameter",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "Description",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "Type",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "Default",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "Required",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "id",
        "paraId": 70,
        "tocIndex": 9
    },
    {
        "value": "Node or combo ID",
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
        "value": "Edge direction",
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
        "value": "Return Value",
        "paraId": 71,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 71,
        "tocIndex": 9
    },
    {
        "value": "Type",
        "paraId": 72,
        "tocIndex": 9
    },
    {
        "value": ": EdgeData[]",
        "paraId": 72,
        "tocIndex": 9
    },
    {
        "value": "Description",
        "paraId": 72,
        "tocIndex": 9
    },
    {
        "value": ": Returns the data of edges related to the specified node or combo",
        "paraId": 72,
        "tocIndex": 9
    },
    {
        "value": "Example",
        "paraId": 73,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 73,
        "tocIndex": 9
    },
    {
        "value": "const relatedEdges = graph.getRelatedEdgesData('node-1');\nconsole.log('Related edges:', relatedEdges);\n",
        "paraId": 74,
        "tocIndex": 9
    },
    {
        "value": "Get the data of the parent element of a node or combo.",
        "paraId": 75,
        "tocIndex": 10
    },
    {
        "value": "getParentData(id: ID, hierarchy: HierarchyKey): NodeLikeData | undefined;\n",
        "paraId": 76,
        "tocIndex": 10
    },
    {
        "value": "Parameters",
        "paraId": 77,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 77,
        "tocIndex": 10
    },
    {
        "value": "Parameter",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "Description",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "Type",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "Default",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "Required",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "id",
        "paraId": 78,
        "tocIndex": 10
    },
    {
        "value": "Node or combo ID",
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
        "value": "Specify hierarchy type",
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
        "value": "Return Value",
        "paraId": 79,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 79,
        "tocIndex": 10
    },
    {
        "value": "Type",
        "paraId": 80,
        "tocIndex": 10
    },
    {
        "value": ": NodeData | ComboData | undefined",
        "paraId": 80,
        "tocIndex": 10
    },
    {
        "value": "Description",
        "paraId": 80,
        "tocIndex": 10
    },
    {
        "value": ": Returns the parent element data, or undefined if it does not exist",
        "paraId": 80,
        "tocIndex": 10
    },
    {
        "value": "Example",
        "paraId": 81,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 81,
        "tocIndex": 10
    },
    {
        "value": "// Get the parent node in a tree graph\nconst treeParent = graph.getParentData('node1', 'tree');\n\n// Get the parent combo in a combo\nconst comboParent = graph.getParentData('node1', 'combo');\n",
        "paraId": 82,
        "tocIndex": 10
    },
    {
        "value": "Get the data of child elements of a node or combo.",
        "paraId": 83,
        "tocIndex": 11
    },
    {
        "value": "getChildrenData(id: ID): (NodeData \\| ComboData)[];\n",
        "paraId": 84,
        "tocIndex": 11
    },
    {
        "value": "Parameters",
        "paraId": 85,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 85,
        "tocIndex": 11
    },
    {
        "value": "Parameter",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "Description",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "Type",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "Default",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "Required",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "id",
        "paraId": 86,
        "tocIndex": 11
    },
    {
        "value": "Node or combo ID",
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
        "value": "Return Value",
        "paraId": 87,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 87,
        "tocIndex": 11
    },
    {
        "value": "Type",
        "paraId": 88,
        "tocIndex": 11
    },
    {
        "value": ": (NodeData | ComboData)[]",
        "paraId": 88,
        "tocIndex": 11
    },
    {
        "value": "Description",
        "paraId": 88,
        "tocIndex": 11
    },
    {
        "value": ": Returns an array of child element data",
        "paraId": 88,
        "tocIndex": 11
    },
    {
        "value": "Note",
        "paraId": 89,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 89,
        "tocIndex": 11
    },
    {
        "value": "Querying combo's child elements",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": ": If the id corresponds to a combo element, you can directly use this API to get all its child elements.",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": "Querying node's child elements",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": ": If the id corresponds to a node, only when the graph data is a tree structure (i.e., the node data maintains a ",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": "children",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": " field, and ",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": "children",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": " is an array of child node IDs for that node), can you use this API to get the child elements of that node. Otherwise, an empty array is returned.",
        "paraId": 90,
        "tocIndex": 11
    },
    {
        "value": "Example",
        "paraId": 91,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 91,
        "tocIndex": 11
    },
    {
        "value": "// Get the child elements of a combo\nconst children = graph.getChildrenData('combo1');\nconsole.log('Number of child nodes:', children.length);\n\n// Process each child element\nchildren.forEach((child) => {\n  console.log('Child element ID:', child.id);\n});\n",
        "paraId": 92,
        "tocIndex": 11
    },
    {
        "value": "Get the data of all ancestor elements of a node or combo.",
        "paraId": 93,
        "tocIndex": 12
    },
    {
        "value": "getAncestorsData(id: ID, hierarchy: HierarchyKey): NodeLikeData[];\n",
        "paraId": 94,
        "tocIndex": 12
    },
    {
        "value": "Parameters",
        "paraId": 95,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 95,
        "tocIndex": 12
    },
    {
        "value": "Parameter",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "Description",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "Type",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "Default",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "Required",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "id",
        "paraId": 96,
        "tocIndex": 12
    },
    {
        "value": "Node or combo ID",
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
        "value": "Specify hierarchy type",
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
        "value": "Return Value",
        "paraId": 97,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 97,
        "tocIndex": 12
    },
    {
        "value": "Type",
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
        "value": "Description",
        "paraId": 98,
        "tocIndex": 12
    },
    {
        "value": ": Returns an array of ancestor element data, ordered from parent to root",
        "paraId": 98,
        "tocIndex": 12
    },
    {
        "value": "Example",
        "paraId": 101,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 101,
        "tocIndex": 12
    },
    {
        "value": "// Get all ancestor nodes in a tree graph\nconst treeAncestors = graph.getAncestorsData('node1', 'tree');\nconsole.log(\n  'Ancestor node path:',\n  treeAncestors.map((node) => node.id),\n);\n\n// Get all parent combos in a combo\nconst comboAncestors = graph.getAncestorsData('node1', 'combo');\n",
        "paraId": 102,
        "tocIndex": 12
    },
    {
        "value": "Get the data of all descendant elements of a node or combo.",
        "paraId": 103,
        "tocIndex": 13
    },
    {
        "value": "getDescendantsData(id: ID): NodeLikeData[];\n",
        "paraId": 104,
        "tocIndex": 13
    },
    {
        "value": "Parameters",
        "paraId": 105,
        "tocIndex": 13
    },
    {
        "value": ":",
        "paraId": 105,
        "tocIndex": 13
    },
    {
        "value": "Parameter",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "Description",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "Type",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "Default",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "Required",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "id",
        "paraId": 106,
        "tocIndex": 13
    },
    {
        "value": "Node or combo ID",
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
        "value": "Return Value",
        "paraId": 107,
        "tocIndex": 13
    },
    {
        "value": ":",
        "paraId": 107,
        "tocIndex": 13
    },
    {
        "value": "Type",
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
        "value": "Description",
        "paraId": 108,
        "tocIndex": 13
    },
    {
        "value": ": Returns an array of descendant element data",
        "paraId": 108,
        "tocIndex": 13
    },
    {
        "value": "Example",
        "paraId": 111,
        "tocIndex": 13
    },
    {
        "value": ":",
        "paraId": 111,
        "tocIndex": 13
    },
    {
        "value": "// Get all descendants of a node\nconst descendants = graph.getDescendantsData('node1');\nconsole.log('Number of descendants:', descendants.length);\n\n// Process all descendant elements\ndescendants.forEach((descendant) => {\n  console.log('Descendant element ID:', descendant.id);\n});\n",
        "paraId": 112,
        "tocIndex": 13
    },
    {
        "value": "Set the complete data of the graph.",
        "paraId": 113,
        "tocIndex": 14
    },
    {
        "value": "setData(data: GraphData | ((prev: GraphData) => GraphData)): void;\n",
        "paraId": 114,
        "tocIndex": 14
    },
    {
        "value": "Parameters",
        "paraId": 115,
        "tocIndex": 14
    },
    {
        "value": ":",
        "paraId": 115,
        "tocIndex": 14
    },
    {
        "value": "Parameter",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "Description",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "Type",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "Default",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "Required",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "data",
        "paraId": 116,
        "tocIndex": 14
    },
    {
        "value": "New graph data or a function returning new graph data",
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
        "value": "Example",
        "paraId": 118,
        "tocIndex": 14
    },
    {
        "value": ":",
        "paraId": 118,
        "tocIndex": 14
    },
    {
        "value": "// Directly set data\ngraph.setData({\n  nodes: [\n    { id: 'node1', style: { x: 100, y: 100 } },\n    { id: 'node2', style: { x: 200, y: 200 } },\n  ],\n  edges: [{ id: 'edge1', source: 'node1', target: 'node2' }],\n});\n\n// Use functional incremental update: get current graph data and return new graph data\ngraph.setData((prev) => ({\n  ...prev,\n  nodes: [...prev.nodes, { id: 'node3', style: { x: 300, y: 300 } }],\n}));\n",
        "paraId": 119,
        "tocIndex": 14
    },
    {
        "value": "Add new element data.",
        "paraId": 120,
        "tocIndex": 15
    },
    {
        "value": "addData(data: GraphData | ((prev: GraphData) => GraphData)): void;\n",
        "paraId": 121,
        "tocIndex": 15
    },
    {
        "value": "Parameters",
        "paraId": 122,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 122,
        "tocIndex": 15
    },
    {
        "value": "Parameter",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "Description",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "Type",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "Default",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "Required",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "data",
        "paraId": 123,
        "tocIndex": 15
    },
    {
        "value": "Graph data to add or a function returning new graph data",
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
        "value": "Example",
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
        "value": "Add new node data.",
        "paraId": 127,
        "tocIndex": 16
    },
    {
        "value": "addNodeData(data: NodeData[] | ((prev: NodeData[]) => NodeData[])): void;\n",
        "paraId": 128,
        "tocIndex": 16
    },
    {
        "value": "Parameters",
        "paraId": 129,
        "tocIndex": 16
    },
    {
        "value": ":",
        "paraId": 129,
        "tocIndex": 16
    },
    {
        "value": "Parameter",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "Description",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "Type",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "Default",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "Required",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "data",
        "paraId": 130,
        "tocIndex": 16
    },
    {
        "value": "Node data to add or a function returning node data",
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
        "value": "Example",
        "paraId": 132,
        "tocIndex": 16
    },
    {
        "value": ":",
        "paraId": 132,
        "tocIndex": 16
    },
    {
        "value": "// Add single node\ngraph.addNodeData([\n  {\n    id: 'node1',\n    style: { x: 100, y: 100 },\n    data: { label: 'Node 1' },\n  },\n]);\n\n// Add multiple nodes\ngraph.addNodeData([\n  { id: 'node2', style: { x: 200, y: 200 } },\n  { id: 'node3', style: { x: 300, y: 300 } },\n]);\n\n// Functional addition\ngraph.addNodeData((prev) => [...prev, { id: 'node4', style: { x: 400, y: 400 } }]);\n",
        "paraId": 133,
        "tocIndex": 16
    },
    {
        "value": "Add new edge data.",
        "paraId": 134,
        "tocIndex": 17
    },
    {
        "value": "addEdgeData(data: EdgeData[] | ((prev: EdgeData[]) => EdgeData[])): void;\n",
        "paraId": 135,
        "tocIndex": 17
    },
    {
        "value": "Parameters",
        "paraId": 136,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 136,
        "tocIndex": 17
    },
    {
        "value": "Parameter",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "Description",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "Type",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "Default",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "Required",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "data",
        "paraId": 137,
        "tocIndex": 17
    },
    {
        "value": "Edge data to add or a function returning edge data",
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
        "value": "Example",
        "paraId": 139,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 139,
        "tocIndex": 17
    },
    {
        "value": "// Add single edge\ngraph.addEdgeData([\n  {\n    id: 'edge1',\n    source: 'node1',\n    target: 'node2',\n    data: {\n      weight: 1,\n      label: 'Relation',\n    },\n  },\n]);\n\n// Add multiple edges\ngraph.addEdgeData([\n  { id: 'edge2', source: 'node2', target: 'node3' },\n  { id: 'edge3', source: 'node3', target: 'node1' },\n]);\n\n// Functional addition\ngraph.addEdgeData((prev) => [...prev, { id: 'edge4', source: 'node1', target: 'node4' }]);\n",
        "paraId": 140,
        "tocIndex": 17
    },
    {
        "value": "Add new combo data.",
        "paraId": 141,
        "tocIndex": 18
    },
    {
        "value": "addComboData(data: ComboData[] | ((prev: ComboData[]) => ComboData[])): void;\n",
        "paraId": 142,
        "tocIndex": 18
    },
    {
        "value": "Parameters",
        "paraId": 143,
        "tocIndex": 18
    },
    {
        "value": ":",
        "paraId": 143,
        "tocIndex": 18
    },
    {
        "value": "Parameter",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "Description",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "Type",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "Default",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "Required",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "data",
        "paraId": 144,
        "tocIndex": 18
    },
    {
        "value": "Combo data to add or a function returning combo data",
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
        "value": "Example",
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
        "value": "Add child node data to a tree graph node.",
        "paraId": 148,
        "tocIndex": 19
    },
    {
        "value": "⚠️ ",
        "paraId": 149,
        "tocIndex": 19
    },
    {
        "value": "Note",
        "paraId": 149,
        "tocIndex": 19
    },
    {
        "value": ": Use addNodeData / addComboData methods to add child nodes to a combo.",
        "paraId": 149,
        "tocIndex": 19
    },
    {
        "value": "addChildrenData(parentId: ID, childrenData: NodeData[]): void;\n",
        "paraId": 150,
        "tocIndex": 19
    },
    {
        "value": "Parameters",
        "paraId": 151,
        "tocIndex": 19
    },
    {
        "value": ":",
        "paraId": 151,
        "tocIndex": 19
    },
    {
        "value": "Parameter",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "Description",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "Type",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "Default",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "Required",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "parentId",
        "paraId": 152,
        "tocIndex": 19
    },
    {
        "value": "Parent node ID",
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
        "value": "Child node data",
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
        "value": "Example",
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
        "value": "Remove element data.",
        "paraId": 156,
        "tocIndex": 20
    },
    {
        "value": "removeData(ids: DataID | ((data: GraphData) => DataID)): void;\n",
        "paraId": 157,
        "tocIndex": 20
    },
    {
        "value": "Parameters",
        "paraId": 158,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 158,
        "tocIndex": 20
    },
    {
        "value": "Parameter",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "Description",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "Type",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "Default",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "Required",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "ids",
        "paraId": 159,
        "tocIndex": 20
    },
    {
        "value": "Element IDs to remove or a function returning element IDs",
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
        "value": "Return Value",
        "paraId": 161,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 161,
        "tocIndex": 20
    },
    {
        "value": "Type",
        "paraId": 162,
        "tocIndex": 20
    },
    {
        "value": ": void",
        "paraId": 162,
        "tocIndex": 20
    },
    {
        "value": "Example",
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
        "value": "Remove node data.",
        "paraId": 165,
        "tocIndex": 21
    },
    {
        "value": "removeNodeData(ids: ID[] | ((data: NodeData[]) => ID[])): void;\n",
        "paraId": 166,
        "tocIndex": 21
    },
    {
        "value": "Parameters",
        "paraId": 167,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 167,
        "tocIndex": 21
    },
    {
        "value": "Parameter",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "Description",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "Type",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "Default",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "Required",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "ids",
        "paraId": 168,
        "tocIndex": 21
    },
    {
        "value": "Node IDs to remove or a function returning node IDs",
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
        "value": "Return Value",
        "paraId": 172,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 172,
        "tocIndex": 21
    },
    {
        "value": "Type",
        "paraId": 173,
        "tocIndex": 21
    },
    {
        "value": ": void",
        "paraId": 173,
        "tocIndex": 21
    },
    {
        "value": "Example",
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
        "value": "Remove edge data.",
        "paraId": 176,
        "tocIndex": 22
    },
    {
        "value": "removeEdgeData(ids: ID[] | ((data: EdgeData[]) => ID[])): void;\n",
        "paraId": 177,
        "tocIndex": 22
    },
    {
        "value": "Parameters",
        "paraId": 178,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 178,
        "tocIndex": 22
    },
    {
        "value": "Parameter",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "Description",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "Type",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "Default",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "Required",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "ids",
        "paraId": 179,
        "tocIndex": 22
    },
    {
        "value": "Edge IDs to remove or a function returning edge IDs",
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
        "value": "Return Value",
        "paraId": 183,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 183,
        "tocIndex": 22
    },
    {
        "value": "Type",
        "paraId": 184,
        "tocIndex": 22
    },
    {
        "value": ": void",
        "paraId": 184,
        "tocIndex": 22
    },
    {
        "value": "Example",
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
        "value": "Remove combo data.",
        "paraId": 187,
        "tocIndex": 23
    },
    {
        "value": "removeComboData(ids: ID[] | ((data: ComboData[]) => ID[])): void;\n",
        "paraId": 188,
        "tocIndex": 23
    },
    {
        "value": "Parameters",
        "paraId": 189,
        "tocIndex": 23
    },
    {
        "value": ":",
        "paraId": 189,
        "tocIndex": 23
    },
    {
        "value": "Parameter",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "Description",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "Type",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "Default",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "Required",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "ids",
        "paraId": 190,
        "tocIndex": 23
    },
    {
        "value": "Combo IDs to remove or a function returning combo IDs",
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
        "value": "Return Value",
        "paraId": 194,
        "tocIndex": 23
    },
    {
        "value": ":",
        "paraId": 194,
        "tocIndex": 23
    },
    {
        "value": "Type",
        "paraId": 195,
        "tocIndex": 23
    },
    {
        "value": ": void",
        "paraId": 195,
        "tocIndex": 23
    },
    {
        "value": "Example",
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
        "value": "Update element data.",
        "paraId": 198,
        "tocIndex": 24
    },
    {
        "value": "⚠️ ",
        "paraId": 199,
        "tocIndex": 24
    },
    {
        "value": "Note",
        "paraId": 199,
        "tocIndex": 24
    },
    {
        "value": ": Only the data that needs to be updated needs to be passed in, not the complete data.",
        "paraId": 199,
        "tocIndex": 24
    },
    {
        "value": "updateData(data: PartialGraphData | ((prev: GraphData) => PartialGraphData)): void;\n",
        "paraId": 200,
        "tocIndex": 24
    },
    {
        "value": "Parameters",
        "paraId": 201,
        "tocIndex": 24
    },
    {
        "value": ":",
        "paraId": 201,
        "tocIndex": 24
    },
    {
        "value": "Parameter",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "Description",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "Type",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "Default",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "Required",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "data",
        "paraId": 202,
        "tocIndex": 24
    },
    {
        "value": "Element data to update or a function returning element data",
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
        "value": "Return Value",
        "paraId": 204,
        "tocIndex": 24
    },
    {
        "value": ":",
        "paraId": 204,
        "tocIndex": 24
    },
    {
        "value": "Type",
        "paraId": 205,
        "tocIndex": 24
    },
    {
        "value": ": void",
        "paraId": 205,
        "tocIndex": 24
    },
    {
        "value": "Example",
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
        "value": "Update node data.",
        "paraId": 208,
        "tocIndex": 25
    },
    {
        "value": "⚠️ ",
        "paraId": 209,
        "tocIndex": 25
    },
    {
        "value": "Note",
        "paraId": 209,
        "tocIndex": 25
    },
    {
        "value": ": Only the data that needs to be updated needs to be passed in, not the complete data.",
        "paraId": 209,
        "tocIndex": 25
    },
    {
        "value": "updateNodeData(data: NodeData[] | ((prev: NodeData[]) => NodeData[])): void;\n",
        "paraId": 210,
        "tocIndex": 25
    },
    {
        "value": "Parameters",
        "paraId": 211,
        "tocIndex": 25
    },
    {
        "value": ":",
        "paraId": 211,
        "tocIndex": 25
    },
    {
        "value": "Parameter",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "Description",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "Type",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "Default",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "Required",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "data",
        "paraId": 212,
        "tocIndex": 25
    },
    {
        "value": "Node data to update or a function returning node data",
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
        "value": "Return Value",
        "paraId": 213,
        "tocIndex": 25
    },
    {
        "value": ":",
        "paraId": 213,
        "tocIndex": 25
    },
    {
        "value": "Type",
        "paraId": 214,
        "tocIndex": 25
    },
    {
        "value": ": void",
        "paraId": 214,
        "tocIndex": 25
    },
    {
        "value": "Example",
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
        "value": "Update edge data.",
        "paraId": 217,
        "tocIndex": 26
    },
    {
        "value": "⚠️ ",
        "paraId": 218,
        "tocIndex": 26
    },
    {
        "value": "Note",
        "paraId": 218,
        "tocIndex": 26
    },
    {
        "value": ": Only the data that needs to be updated needs to be passed in, not the complete data.",
        "paraId": 218,
        "tocIndex": 26
    },
    {
        "value": "updateEdgeData(data: (PartialEdgeData<EdgeData>[] | ((prev: EdgeData[]) => PartialEdgeData<EdgeData>[]))): void;\n",
        "paraId": 219,
        "tocIndex": 26
    },
    {
        "value": "Parameters",
        "paraId": 220,
        "tocIndex": 26
    },
    {
        "value": ":",
        "paraId": 220,
        "tocIndex": 26
    },
    {
        "value": "Parameter",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "Description",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "Type",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "Default",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "Required",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "data",
        "paraId": 221,
        "tocIndex": 26
    },
    {
        "value": "Edge data to update or a function returning edge data",
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
        "value": "Return Value",
        "paraId": 224,
        "tocIndex": 26
    },
    {
        "value": ":",
        "paraId": 224,
        "tocIndex": 26
    },
    {
        "value": "Type",
        "paraId": 225,
        "tocIndex": 26
    },
    {
        "value": ": void",
        "paraId": 225,
        "tocIndex": 26
    },
    {
        "value": "Example",
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
        "value": "Update combo data.",
        "paraId": 228,
        "tocIndex": 27
    },
    {
        "value": "⚠️ ",
        "paraId": 229,
        "tocIndex": 27
    },
    {
        "value": "Note",
        "paraId": 229,
        "tocIndex": 27
    },
    {
        "value": ": Only the data that needs to be updated needs to be passed in, not the complete data.",
        "paraId": 229,
        "tocIndex": 27
    },
    {
        "value": "updateComboData(data: (ComboData[] | ((prev: ComboData[]) => ComboData[]))): void;\n",
        "paraId": 230,
        "tocIndex": 27
    },
    {
        "value": "Parameters",
        "paraId": 231,
        "tocIndex": 27
    },
    {
        "value": ":",
        "paraId": 231,
        "tocIndex": 27
    },
    {
        "value": "Parameter",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "Description",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "Type",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "Default",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "Required",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "data",
        "paraId": 232,
        "tocIndex": 27
    },
    {
        "value": "Combo data to update or a function returning combo data",
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
        "value": "Return Value",
        "paraId": 234,
        "tocIndex": 27
    },
    {
        "value": ":",
        "paraId": 234,
        "tocIndex": 27
    },
    {
        "value": "Type",
        "paraId": 235,
        "tocIndex": 27
    },
    {
        "value": ": void",
        "paraId": 235,
        "tocIndex": 27
    },
    {
        "value": "Example",
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
        "value": "Determine if an node exists",
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
        "value": "Parameter",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "Description",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "Type",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "Default",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "Required",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "id",
        "paraId": 241,
        "tocIndex": 28
    },
    {
        "value": "Node ID to be judged",
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
        "value": "Determine if an edge exists",
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
        "value": "Parameter",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "Description",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "Type",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "Default",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "Required",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "id",
        "paraId": 249,
        "tocIndex": 29
    },
    {
        "value": "Edge ID to be judged",
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
        "value": "Determine if combo exists",
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
        "value": "Parameter",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "Description",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "Type",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "Default",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "Required",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "id",
        "paraId": 257,
        "tocIndex": 30
    },
    {
        "value": "Combo ID to be judged",
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
        "value": "Element ID type.",
        "paraId": 262,
        "tocIndex": 32
    },
    {
        "value": "type ID = string;\n",
        "paraId": 263,
        "tocIndex": 32
    },
    {
        "value": "Multiple element ID type.",
        "paraId": 264,
        "tocIndex": 33
    },
    {
        "value": "interface DataID {\n  nodes?: ID[];\n  edges?: ID[];\n  combos?: ID[];\n}\n",
        "paraId": 265,
        "tocIndex": 33
    },
    {
        "value": "G6 graph data type.",
        "paraId": 266,
        "tocIndex": 34
    },
    {
        "value": "interface GraphData {\n  nodes?: NodeData[];\n  edges?: EdgeData[];\n  combos?: ComboData[];\n}\n",
        "paraId": 267,
        "tocIndex": 34
    },
    {
        "value": "Node data type.",
        "paraId": 268,
        "tocIndex": 35
    },
    {
        "value": "interface NodeData {\n  id: string; // Node ID\n  type?: string; // Node type\n  data?: Record<string, any>; // Node data\n  style?: Record<string, any>; // Node style\n  states?: string[]; // Initial node states\n  combo?: string; // Belonging combo\n  children?: string[]; // Array of child node IDs\n}\n",
        "paraId": 269,
        "tocIndex": 35
    },
    {
        "value": "For detailed type definitions, please refer to ",
        "paraId": 270,
        "tocIndex": 35
    },
    {
        "value": "Node Data",
        "paraId": 271,
        "tocIndex": 35
    },
    {
        "value": ".",
        "paraId": 270,
        "tocIndex": 35
    },
    {
        "value": "Edge data type.",
        "paraId": 272,
        "tocIndex": 36
    },
    {
        "value": "interface EdgeData {\n  source: string; // Source ID\n  target: string; // Target ID\n  id?: string; // Edge ID\n  type?: string; // Edge type\n  data?: Record<string, any>; // Edge data\n  style?: Record<string, any>; // Edge style\n  states?: string[]; // Initial edge states\n}\n",
        "paraId": 273,
        "tocIndex": 36
    },
    {
        "value": "For detailed type definitions, please refer to ",
        "paraId": 274,
        "tocIndex": 36
    },
    {
        "value": "Edge Data",
        "paraId": 275,
        "tocIndex": 36
    },
    {
        "value": ".",
        "paraId": 274,
        "tocIndex": 36
    },
    {
        "value": "Combo data type.",
        "paraId": 276,
        "tocIndex": 37
    },
    {
        "value": "interface ComboData {\n  id: string; // Combo ID\n  type?: string; // Combo type\n  data?: Record<string, any>; // Combo data\n  style?: Record<string, any>; // Combo style\n  states?: string[]; // Initial combo states\n  combo?: string; // Parent combo ID\n}\n",
        "paraId": 277,
        "tocIndex": 37
    },
    {
        "value": "For detailed type definitions, please refer to ",
        "paraId": 278,
        "tocIndex": 37
    },
    {
        "value": "Combo Data",
        "paraId": 279,
        "tocIndex": 37
    },
    {
        "value": ".",
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
//# sourceMappingURL=docs_api_data_en_md_q_hK4X-async.js.map