((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/overview.en.md?type=text'],
{ "docs/manual/element/node/overview.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/overview.en.md?watch=parent");
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
        "value": "A node is one of the basic elements in a graph, representing an entity or an abstract concept, such as a person, a place, an organization, etc. Nodes can contain attributes like ID, name, type, etc. In G6, nodes can have various shapes and styles, and support rich interactions and customization.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "You can create any number of nodes in a graph and connect them with edges to represent relationships.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "The G6 node system includes three main categories: built-in nodes, extended nodes, and custom nodes. ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "In most cases, built-in nodes are sufficient.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "G6 provides a variety of built-in node types, ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "which can be used directly without registration",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Node Type",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Registration Name",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Circle Node",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "circle",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Commonly used for entities",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Rectangle Node",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "rect",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Suitable for more text and details",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Ellipse Node",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "ellipse",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "A variant of the circle",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Diamond Node",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "diamond",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Often used for decision points or special nodes",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Triangle Node",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "triangle",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Can indicate direction or special marks",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Hexagon Node",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "hexagon",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Suitable for grid layouts and honeycomb charts",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Star Node",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "star",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Highlights important nodes",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Donut Node",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "donut",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Can display proportions or progress",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Image Node",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "image",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Uses an image as the node body",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "HTML Node",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "html",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Supports custom HTML content",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "@antv/g6-extension-3d",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " provides 3D nodes:",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Capsule",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " - Capsule-shaped node",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Cone",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " - Cone-shaped node",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Cube",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " - Cube-shaped node",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Cylinder",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " - Cylinder-shaped node",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Plane",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " - Plane node",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Sphere",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " - Sphere node",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Torus",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " - Torus node",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "@antv/g6-extension-react",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " provides React nodes, supporting the use of React components as the node body. For detailed tutorials, please refer to the ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Using React to Define Nodes",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " document.",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "When built-in and extended nodes cannot meet the requirements, G6 offers powerful customization capabilities:",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "Extend built-in nodes",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "Create entirely new node types",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "Unlike built-in nodes, ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "custom nodes need to be registered before use",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": ". For detailed tutorials, please refer to the ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "Custom Nodes",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " document.",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "When defining nodes, you need to add a ",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "nodes",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": " field to the graph's data object. Each node is an object with the following structure:",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "Property",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Required",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "id",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Unique identifier for the node, used to distinguish different nodes",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "✓",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "type",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Node type, either a built-in node type name or a custom node name",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "data",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Node data, used to store custom data such as the node's name, description, etc. Can be accessed via callback functions in style mapping",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "object",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "style",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Node style, including visual attributes like position, size, color, etc.",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "object",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "states",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Initial states of the node, such as selected, active, hover, etc.",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string[]",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "combo",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "The ID of the combo to which the node belongs, used to organize hierarchical relationships. If none, it is null",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string | null",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "children",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Collection of child node IDs, used only in tree graph scenarios",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string[]",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "An example of a data item in the ",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "nodes",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": " array:",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "{\n  \"id\": \"node-1\",\n  \"type\": \"circle\",\n  \"data\": { \"name\": \"alice\", \"role\": \"Admin\" },\n  \"style\": { \"x\": 100, \"y\": 200, \"size\": 32, \"fill\": \"violet\" },\n  \"states\": [\"selected\"],\n  \"combo\": null\n}\n",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "There are three ways to configure nodes, listed in order of priority from high to low:",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "Use ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "graph.setNode()",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " for dynamic configuration",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "Global configuration during graph instantiation",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "Dynamic properties in data",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "These configuration methods can be used simultaneously. When there are identical configuration items, the method with higher priority will override the one with lower priority.",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "graph.setNode()",
        "paraId": 20
    },
    {
        "value": "After creating the graph instance, you can use ",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "graph.setNode()",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": " to dynamically set the node's style mapping logic.",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "This method must be called before ",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "graph.render()",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": " to take effect and has the highest priority.",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "graph.setNode({\n  style: {\n    type: 'circle',\n    style: { size: 60, fill: '#7FFFD4', stroke: '#5CACEE', lineWidth: 2 },\n  },\n});\n\ngraph.render();\n",
        "paraId": 23,
        "tocIndex": 8
    },
    {
        "value": "When instantiating the graph, you can configure node style mapping through ",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "node",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": ", which is a global configuration and will apply to all nodes.",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  node: {\n    type: 'circle',\n    style: { size: 60, fill: '#7FFFD4', stroke: '#5CACEE', lineWidth: 2 },\n  },\n});\n",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": "If you need different configurations for different nodes, you can write the configuration into the node data. This configuration method can be directly written into the data in the following form:",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "const data = {\n  nodes: [\n    {\n      id: 'node-1',\n      type: 'circle',\n      style: { size: 60, fill: '#7FFFD4', stroke: '#5CACEE', lineWidth: 2 },\n    },\n  ],\n};\n",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "If you want the configuration in the data to have a higher priority than the global configuration, you can do so as follows:",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "const data = {\n  nodes: [\n    {\n      id: 'node-1',\n      type: 'circle',\n      style: { size: 60, fill: '#7FFFD4', stroke: '#5CACEE', lineWidth: 2 },\n    },\n  ],\n};\n\nconst graph = new Graph({\n  node: {\n    type: 'circle',\n    style: {\n      stroke: (d) => d.style.stroke || '#5CACEE',\n      lineWidth: 2,\n    },\n  },\n});\n",
        "paraId": 29,
        "tocIndex": 11
    },
    {
        "value": "G6 supports dynamically updating the style and state of nodes at runtime:",
        "paraId": 30,
        "tocIndex": 12
    },
    {
        "value": "// Update the style of a single node\ngraph.updateNodeData([\n  {\n    id: 'node-1',\n    style: {\n      fill: 'red',\n      size: 80,\n    },\n  },\n]);\ngraph.draw();\n\n// Set node state\ngraph.setElementState('node-1', ['selected']);\n",
        "paraId": 31,
        "tocIndex": 12
    },
    {
        "value": "When updating nodes, only the specified attributes will be updated, and unspecified attributes will remain unchanged.",
        "paraId": 32
    },
    {
        "value": "For more node-related APIs, please refer to ",
        "paraId": 33
    },
    {
        "value": "API - Element Operations",
        "paraId": 34
    },
    {
        "value": ".",
        "paraId": 33
    },
    {
        "value": "Nodes can have different states, such as selected, highlighted, disabled, etc. You can define the display effect of nodes in different states by configuring state styles:",
        "paraId": 35,
        "tocIndex": 13
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    style: {\n      // Default style\n      fill: '#C6E5FF',\n    },\n    // State styles\n    state: {\n      selected: {\n        fill: '#ffa940',\n        stroke: '#ff7a00',\n        haloStroke: '#ff7a00',\n      },\n      highlight: {\n        stroke: '#1890ff',\n        lineWidth: 3,\n      },\n    },\n  },\n});\n",
        "paraId": 36,
        "tocIndex": 13
    },
    {
        "value": "The state system is the foundation for implementing node interaction effects. For more information on states, please refer to ",
        "paraId": 37,
        "tocIndex": 13
    },
    {
        "value": "Element States",
        "paraId": 38,
        "tocIndex": 13
    },
    {
        "value": ".",
        "paraId": 37,
        "tocIndex": 13
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
//# sourceMappingURL=docs_manual_element_node_overview_en_md_q_hK4X-async.js.map