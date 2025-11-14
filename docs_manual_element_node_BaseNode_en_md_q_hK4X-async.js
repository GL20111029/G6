((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/BaseNode.en.md?type=text'],
{ "docs/manual/element/node/BaseNode.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/BaseNode.en.md?watch=parent");
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
        "value": "This document introduces the common configuration properties for built-in nodes.",
        "paraId": 0
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  node: {\n    type: 'circle', // Node type\n    style: {}, // Node style\n    state: {}, // State style\n    palette: {}, // Palette configuration\n    animation: {}, // Animation configuration\n  },\n});\n",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Property",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Description",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Type",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Default",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Required",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "type",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Node type, built-in node type name or custom node name",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "circle",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "style",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Node style configuration, including color, size, etc.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Style",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "state",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Style configuration for different states",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "State",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "palette",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Define node palette for mapping colors based on different data",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Palette",
        "paraId": 6,
        "tocIndex": 0
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "animation",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Define animation effects for nodes",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Animation",
        "paraId": 7,
        "tocIndex": 0
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Specifies the node type, built-in node type name or custom node name. Default is ",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "circle",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": ". ",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "⚠️ Note",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": ": This determines the shape of the main graphic.",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    type: 'circle',\n  },\n});\n",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "⚠️ Dynamic Configuration",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": ": The ",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": "type",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": " property also supports dynamic configuration, allowing you to dynamically select node types based on node data:",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    // Static configuration\n    type: 'circle',\n\n    // Dynamic configuration - arrow function form\n    type: (datum) => datum.data.nodeType || 'circle',\n\n    // Dynamic configuration - regular function form (can access graph instance)\n    type: function (datum) {\n      console.log(this); // graph instance\n      return datum.data.category === 'important' ? 'diamond' : 'circle';\n    },\n  },\n});\n",
        "paraId": 11,
        "tocIndex": 1
    },
    {
        "value": "Available values:",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "circle",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Circle Node",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "diamond",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Diamond Node",
        "paraId": 15,
        "tocIndex": 1
    },
    {
        "value": "donut",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Donut Node",
        "paraId": 16,
        "tocIndex": 1
    },
    {
        "value": "ellipse",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Ellipse Node",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "hexagon",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Hexagon Node",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "html",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "HTML Node",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "image",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Image Node",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": "rect",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Rectangle Node",
        "paraId": 21,
        "tocIndex": 1
    },
    {
        "value": "star",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Star Node",
        "paraId": 22,
        "tocIndex": 1
    },
    {
        "value": "triangle",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Triangle Node",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "Defines the style of nodes, including color, size, etc.",
        "paraId": 24,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    style: {},\n  },\n});\n",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "⚠️ Dynamic Configuration",
        "paraId": 26,
        "tocIndex": 2
    },
    {
        "value": ": All the following style properties support dynamic configuration, meaning you can pass functions to dynamically calculate property values based on node data:",
        "paraId": 26,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    style: {\n      // Static configuration\n      fill: '#1783FF',\n\n      // Dynamic configuration - arrow function form\n      stroke: (datum) => (datum.data.isActive ? '#FF0000' : '#000000'),\n\n      // Dynamic configuration - regular function form (can access graph instance)\n      lineWidth: function (datum) {\n        console.log(this); // graph instance\n        return datum.data.importance > 5 ? 3 : 1;\n      },\n\n      // Nested properties also support dynamic configuration\n      labelText: (datum) => `Node: ${datum.id}`,\n      badges: (datum) => datum.data.tags.map((tag) => ({ text: tag })),\n    },\n  },\n});\n",
        "paraId": 27,
        "tocIndex": 2
    },
    {
        "value": "Where the ",
        "paraId": 28,
        "tocIndex": 2
    },
    {
        "value": "datum",
        "paraId": 28,
        "tocIndex": 2
    },
    {
        "value": " parameter is the node data object (",
        "paraId": 28,
        "tocIndex": 2
    },
    {
        "value": "NodeData",
        "paraId": 28,
        "tocIndex": 2
    },
    {
        "value": "), containing all data information of the node.",
        "paraId": 28,
        "tocIndex": 2
    },
    {
        "value": "A complete node consists of the following parts:",
        "paraId": 29,
        "tocIndex": 2
    },
    {
        "value": "key",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": ": The main graphic of the node, representing the primary shape of the node, such as rectangle, circle, etc.",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": "label",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": ": Text label, usually used to display the name or description of the node",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": "icon",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": ": Icon graphic, usually used to display node icons, can be images or text icons",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": "badge",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": ": Badge, by default located at the top-right corner of the node",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": "halo",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": ": Graphic showing halo effect around the main graphic",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": "port",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": ": Connection points on the node, used to connect edges",
        "paraId": 30,
        "tocIndex": 2
    },
    {
        "value": "The following style configurations are explained in order by atomic graphics:",
        "paraId": 31,
        "tocIndex": 2
    },
    {
        "value": "The main graphic is the core part of the node, defining the basic shape and appearance of the node. Here are common configuration scenarios:",
        "paraId": 32,
        "tocIndex": 3
    },
    {
        "value": "Setting the basic appearance of nodes:",
        "paraId": 33,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      fill: '#5B8FF9', // Blue fill\n      stroke: '#1A1A1A', // Dark stroke\n      lineWidth: 2,\n      size: 40,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 34,
        "tocIndex": 4
    },
    {
        "value": "Adding transparency and shadow effects to nodes:",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      fill: '#61DDAA',\n      fillOpacity: 0.85,\n      shadowColor: 'rgba(97, 221, 170, 0.4)',\n      shadowBlur: 12,\n      shadowOffsetX: 2,\n      shadowOffsetY: 4,\n      stroke: '#F0F0F0',\n      lineWidth: 1,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 36,
        "tocIndex": 5
    },
    {
        "value": "Creating nodes with dashed borders:",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      fill: '#FFF1F0',\n      stroke: '#F5222D',\n      lineWidth: 2,\n      lineDash: [6, 4],\n      lineCap: 'round',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 38,
        "tocIndex": 6
    },
    {
        "value": "The complete main graphic style configuration is as follows:",
        "paraId": 39,
        "tocIndex": 6
    },
    {
        "value": "Property",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Required",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "collapsed",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Whether the current node/combo is collapsed",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "boolean",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "false",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "cursor",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node mouse hover style, ",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "options",
        "paraId": 41,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "default",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "fill",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node fill color",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "#1783FF",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "fillOpacity",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node fill color transparency",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "increasedLineWidthForHitTesting",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "When lineWidth is small, the interactive area also becomes small. Sometimes we want to increase this area to make \"thin lines\" easier to pick up",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "lineCap",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node stroke end style",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "round",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "square",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "butt",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "butt",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "lineDash",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node stroke dash style",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number[]",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "lineDashOffset",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node stroke dash offset",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "lineJoin",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node stroke join style",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "round",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "bevel",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "miter",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "miter",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "lineWidth",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node stroke width",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "opacity",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node transparency",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "pointerEvents",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "How the node responds to pointer events, ",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "options",
        "paraId": 42,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "auto",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "shadowBlur",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node shadow blur",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "shadowColor",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node shadow color",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "shadowOffsetX",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node shadow offset in x-axis direction",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "shadowOffsetY",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node shadow offset in y-axis direction",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "shadowType",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node shadow type",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "inner",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "outer",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "outer",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "size",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node size, quick setting for node width and height, ",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "options",
        "paraId": 43,
        "tocIndex": 6
    },
    {
        "value": "number | number[]",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "32",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "stroke",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node stroke color",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "#000",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "strokeOpacity",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node stroke color transparency",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "transform",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Transform property allows you to rotate, scale, skew or translate the given node",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "transformOrigin",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Rotation and scaling center, also called transformation center",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "visibility",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Whether the node is visible",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "visible",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "hidden",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "visible",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "x",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node x coordinate",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "y",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node y coordinate",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "z",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node z coordinate",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "zIndex",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node rendering level",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Node size, quick setting for node width and height, supports three configuration methods:",
        "paraId": 44,
        "tocIndex": 7
    },
    {
        "value": "number: Indicates that the node width and height are the same as the specified value",
        "paraId": 45,
        "tocIndex": 7
    },
    {
        "value": "[number, number]: Indicates that the node width and height are represented by array elements indicating the node's width and height respectively",
        "paraId": 45,
        "tocIndex": 7
    },
    {
        "value": "[number, number, number]: Indicates that the node width, height, and depth are represented by array elements",
        "paraId": 45,
        "tocIndex": 7
    },
    {
        "value": "The ",
        "paraId": 46,
        "tocIndex": 8
    },
    {
        "value": "pointerEvents",
        "paraId": 46,
        "tocIndex": 8
    },
    {
        "value": " property controls how graphics respond to interaction events. You can refer to the ",
        "paraId": 46,
        "tocIndex": 8
    },
    {
        "value": "MDN documentation",
        "paraId": 46,
        "tocIndex": 8
    },
    {
        "value": ".",
        "paraId": 46,
        "tocIndex": 8
    },
    {
        "value": "Available values: ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "visible",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "visiblepainted",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "visiblestroke",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "non-transparent-pixel",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "visiblefill",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "visible",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "painted",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "fill",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "stroke",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "all",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "none",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "auto",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "inherit",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "initial",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "unset",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "In short, ",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "fill",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": ", ",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "stroke",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": ", and ",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "visibility",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": " can independently or in combination affect pick behavior. Currently supports the following keywords:",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "auto",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Default value, equivalent to ",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "visiblepainted",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "none",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Will never be a target for responding to events",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "visiblepainted",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Will respond to events only if the following conditions are met:\n",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "visibility",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": " is set to ",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": "visible",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": ", i.e., the graphic is visible",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": "Triggered in the graphic fill area and ",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": "fill",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": " takes a non-",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": "none",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": " value; or triggered in the graphic stroke area and ",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": "stroke",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": " takes a non-",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": "none",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": " value",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": "visiblefill",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Will respond to events only if the following conditions are met:\n",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "visibility",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": " is set to ",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "visible",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": ", i.e., the graphic is visible",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "Triggered in the graphic fill area, not affected by the value of ",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "fill",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "visiblestroke",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Will respond to events only if the following conditions are met:\n",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "visibility",
        "paraId": 52,
        "tocIndex": 8
    },
    {
        "value": " is set to ",
        "paraId": 52,
        "tocIndex": 8
    },
    {
        "value": "visible",
        "paraId": 52,
        "tocIndex": 8
    },
    {
        "value": ", i.e., the graphic is visible",
        "paraId": 52,
        "tocIndex": 8
    },
    {
        "value": "Triggered in the graphic stroke area, not affected by the value of ",
        "paraId": 52,
        "tocIndex": 8
    },
    {
        "value": "stroke",
        "paraId": 52,
        "tocIndex": 8
    },
    {
        "value": "visible",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Will respond to events only if the following conditions are met:\n",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "visibility",
        "paraId": 53,
        "tocIndex": 8
    },
    {
        "value": " is set to ",
        "paraId": 53,
        "tocIndex": 8
    },
    {
        "value": "visible",
        "paraId": 53,
        "tocIndex": 8
    },
    {
        "value": ", i.e., the graphic is visible",
        "paraId": 53,
        "tocIndex": 8
    },
    {
        "value": "Triggered in the graphic fill or stroke area, not affected by the values of ",
        "paraId": 53,
        "tocIndex": 8
    },
    {
        "value": "fill",
        "paraId": 53,
        "tocIndex": 8
    },
    {
        "value": " and ",
        "paraId": 53,
        "tocIndex": 8
    },
    {
        "value": "stroke",
        "paraId": 53,
        "tocIndex": 8
    },
    {
        "value": "painted",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Will respond to events only if the following conditions are met:\n",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "Triggered in the graphic fill area and ",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": "fill",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": " takes a non-",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": "none",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": " value; or triggered in the graphic stroke area and ",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": "stroke",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": " takes a non-",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": "none",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": " value",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": "Not affected by the value of ",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": "visibility",
        "paraId": 54,
        "tocIndex": 8
    },
    {
        "value": "fill",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Will respond to events only if the following conditions are met:\n",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "Triggered in the graphic fill area, not affected by the value of ",
        "paraId": 55,
        "tocIndex": 8
    },
    {
        "value": "fill",
        "paraId": 55,
        "tocIndex": 8
    },
    {
        "value": "Not affected by the value of ",
        "paraId": 55,
        "tocIndex": 8
    },
    {
        "value": "visibility",
        "paraId": 55,
        "tocIndex": 8
    },
    {
        "value": "stroke",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Will respond to events only if the following conditions are met:\n",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "Triggered in the graphic stroke area, not affected by the value of ",
        "paraId": 56,
        "tocIndex": 8
    },
    {
        "value": "stroke",
        "paraId": 56,
        "tocIndex": 8
    },
    {
        "value": "Not affected by the value of ",
        "paraId": 56,
        "tocIndex": 8
    },
    {
        "value": "visibility",
        "paraId": 56,
        "tocIndex": 8
    },
    {
        "value": "all",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Will respond to events as long as entering the fill and stroke areas of the graphic, not affected by the values of ",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "fill",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ", ",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "stroke",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ", and ",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "visibility",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "Usage Examples:",
        "paraId": 57,
        "tocIndex": 8
    },
    {
        "value": "// Example 1: Only stroke area responds to events\nconst graph = new Graph({\n  node: {\n    style: {\n      fill: 'none',\n      stroke: '#000',\n      lineWidth: 2,\n      pointerEvents: 'stroke', // Only stroke responds to events\n    },\n  },\n});\n\n// Example 2: Completely unresponsive to events\nconst graph = new Graph({\n  node: {\n    style: {\n      pointerEvents: 'none', // Node does not respond to any events\n    },\n  },\n});\n",
        "paraId": 58,
        "tocIndex": 8
    },
    {
        "value": "Available values: ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "auto",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "default",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "none",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "context-menu",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "help",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "pointer",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "progress",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "wait",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "cell",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "crosshair",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "text",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "vertical-text",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "alias",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "copy",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "move",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "no-drop",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "not-allowed",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "grab",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "grabbing",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "all-scroll",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "col-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "row-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "n-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "e-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "s-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "w-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "ne-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "nw-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "se-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "sw-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "ew-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "ns-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "nesw-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "nwse-resize",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "zoom-in",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": " | ",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "zoom-out",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "Labels are used to display text information of nodes, supporting various style configurations and layout methods. Here are common usage scenarios:",
        "paraId": 60,
        "tocIndex": 10
    },
    {
        "value": "The simplest text label configuration:",
        "paraId": 61,
        "tocIndex": 11
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 120,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      labelText: 'Node Name',\n      labelFill: '#262626',\n      labelFontSize: 12,\n      labelPlacement: 'bottom',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 62,
        "tocIndex": 11
    },
    {
        "value": "When text is long, you can set automatic line wrapping:",
        "paraId": 63,
        "tocIndex": 12
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 120,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      labelText: 'This is a very long node name that needs line wrapping',\n      labelWordWrap: true,\n      labelMaxWidth: '150%',\n      labelMaxLines: 3,\n      labelTextOverflow: 'ellipsis',\n      labelFill: '#434343',\n      labelPlacement: 'bottom',\n      labelTextAlign: 'center',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 64,
        "tocIndex": 12
    },
    {
        "value": "Adding background to labels to improve readability:",
        "paraId": 65,
        "tocIndex": 13
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 120,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      labelText: 'Important Node',\n      labelBackground: true,\n      labelBackgroundFill: 'rgba(250, 140, 22, 0.1)',\n      labelBackgroundRadius: 6,\n      labelPadding: [6, 12],\n      labelFill: '#D4380D',\n      labelFontWeight: 'bold',\n      labelPlacement: 'bottom',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 66,
        "tocIndex": 13
    },
    {
        "value": "The complete label style configuration is as follows:",
        "paraId": 67,
        "tocIndex": 13
    },
    {
        "value": "Property",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Description",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Type",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Default",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Required",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "label",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Whether to display node label",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "boolean",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "true",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelCursor",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Style displayed when mouse hovers over node label, ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "options",
        "paraId": 69,
        "tocIndex": 13
    },
    {
        "value": "string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "default",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelFill",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label text color",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelFontFamily",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label font family",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelFontSize",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label font size",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "number",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "12",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelFontStyle",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label font style",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "normal",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "italic",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "oblique",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelFontVariant",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label font variant",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "normal",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "small-caps",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelFontWeight",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label font weight",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "normal",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "bold",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "bolder",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "lighter",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | number",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelLeading",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Line spacing",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "number",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "0",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelLetterSpacing",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label letter spacing",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "number | string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelLineHeight",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label line height",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "number | string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelMaxLines",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Maximum number of lines for node label",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "number",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "1",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelMaxWidth",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Maximum width of node label, ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "options",
        "paraId": 70,
        "tocIndex": 13
    },
    {
        "value": "number | string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "200%",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelOffsetX",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label offset in x-axis direction",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "number",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "0",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelOffsetY",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label offset in y-axis direction",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "number",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "0",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelPadding",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label padding",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "number | number[]",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "0",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelPlacement",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Position of node label relative to node main graphic, ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "options",
        "paraId": 71,
        "tocIndex": 13
    },
    {
        "value": "string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "bottom",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelText",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label text content",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "(datum) => string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelTextAlign",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label text horizontal alignment",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "start",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "center",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "middle",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "end",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "left",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "right",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "left",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelTextBaseline",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label text baseline",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "top",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "hanging",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "middle",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "alphabetic",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "ideographic",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "bottom",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelTextDecorationColor",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label text decoration line color",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelTextDecorationLine",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label text decoration line",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelTextDecorationStyle",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label text decoration line style",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "solid",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "double",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "dotted",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "dashed",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "wavy",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelTextOverflow",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label text overflow handling",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "clip",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | ",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "ellipsis",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": " | string",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelTextPath",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label text path",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Path",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelWordWrap",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Whether node label enables automatic line wrapping. After enabling labelWordWrap, parts exceeding labelMaxWidth wrap automatically",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "boolean",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "false",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "labelZIndex",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Node label rendering level",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "number",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "0",
        "paraId": 68,
        "tocIndex": 13
    },
    {
        "value": "Available values: ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "left",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "right",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "top",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "bottom",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "left-top",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "left-bottom",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "right-top",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "right-bottom",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "top-left",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "top-right",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "bottom-left",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "bottom-right",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "center",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": " | ",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "bottom",
        "paraId": 72,
        "tocIndex": 14
    },
    {
        "value": "After enabling automatic line wrapping ",
        "paraId": 73,
        "tocIndex": 15
    },
    {
        "value": "labelWordWrap",
        "paraId": 73,
        "tocIndex": 15
    },
    {
        "value": ", text wraps when exceeding this width:",
        "paraId": 73,
        "tocIndex": 15
    },
    {
        "value": "string: Defines maximum width as a percentage relative to node width. For example, ",
        "paraId": 74,
        "tocIndex": 15
    },
    {
        "value": "50%",
        "paraId": 74,
        "tocIndex": 15
    },
    {
        "value": " means label width does not exceed half of the node width",
        "paraId": 74,
        "tocIndex": 15
    },
    {
        "value": "number: Defines maximum width in pixels. For example, 100 means the maximum width of the label is 100 pixels",
        "paraId": 74,
        "tocIndex": 15
    },
    {
        "value": "For example, setting multi-line label text:",
        "paraId": 75,
        "tocIndex": 15
    },
    {
        "value": "{\n  \"labelWordWrap\": true,\n  \"labelMaxWidth\": 200,\n  \"labelMaxLines\": 3\n}\n",
        "paraId": 76,
        "tocIndex": 15
    },
    {
        "value": "Label background is used to display the background of node labels:",
        "paraId": 77,
        "tocIndex": 16
    },
    {
        "value": "Property",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Description",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Type",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Default",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackground",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Whether to display node label background",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "boolean",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "false",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundCursor",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background mouse hover style, ",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "options",
        "paraId": 79,
        "tocIndex": 16
    },
    {
        "value": "string",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "default",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundFill",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background fill color",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "string",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundFillOpacity",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background transparency",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "number",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "1",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundHeight",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background height",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "string | number",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundLineDash",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background dash configuration",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "number | string |(number | string )[]",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundLineDashOffset",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background dash offset",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "number",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundLineWidth",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background stroke line width",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "number",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundRadius",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background border radius ",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": " - number: Uniform setting for four border radii ",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": " - number[]: Set four border radii separately, automatically supplement missing values",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "number | number[]",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "0",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundShadowBlur",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background shadow blur degree",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "number",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundShadowColor",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background shadow color",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "string",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundShadowOffsetX",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background shadow X direction offset",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "number",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundShadowOffsetY",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background shadow Y direction offset",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "number",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundStroke",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background stroke color",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "string",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundStrokeOpacity",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background stroke transparency",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "number | string",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "1",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundVisibility",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Whether node label background is visible",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "visible",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": " | ",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "hidden",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "labelBackgroundZIndex",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Node label background rendering level",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "number",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "1",
        "paraId": 78,
        "tocIndex": 16
    },
    {
        "value": "Halo is an effect displayed around the node's main graphic, usually used for highlighting or indicating special states of nodes.",
        "paraId": 80,
        "tocIndex": 17
    },
    {
        "value": "Adding basic halo effect to nodes:",
        "paraId": 81,
        "tocIndex": 18
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      lineWidth: 1.5,\n      halo: true,\n      haloStroke: '#1890FF',\n      haloLineWidth: 6,\n      haloStrokeOpacity: 0.3,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 82,
        "tocIndex": 18
    },
    {
        "value": "The complete halo style configuration is as follows:",
        "paraId": 83,
        "tocIndex": 18
    },
    {
        "value": "Property",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Description",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Type",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Default",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Required",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "halo",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Whether to display node halo",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "boolean",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "false",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloCursor",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Node halo mouse hover style, ",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "options",
        "paraId": 85,
        "tocIndex": 18
    },
    {
        "value": "string",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "default",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloDraggable",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Whether node halo allows dragging",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "boolean",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "true",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloDroppable",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Whether node halo allows receiving dragged elements",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "boolean",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "true",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloFillRule",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Node halo fill rule",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "nonzero",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": " | ",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "evenodd",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "-",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloFilter",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Node halo filter",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "string",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "-",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloLineWidth",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Node halo stroke width",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "3",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloPointerEvents",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Whether node halo effect responds to pointer events, ",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "options",
        "paraId": 86,
        "tocIndex": 18
    },
    {
        "value": "string",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "none",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloStroke",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Node halo stroke color, ",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "this property is used to set the color of the halo around the node, helping to highlight the node",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "string",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Consistent with main graphic fill color",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloStrokeOpacity",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Node halo stroke color transparency",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "0.25",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloVisibility",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Node halo visibility",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "visible",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": " | ",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "hidden",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "visible",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "haloZIndex",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Node halo rendering level",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "number",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "-1",
        "paraId": 84,
        "tocIndex": 18
    },
    {
        "value": "Node icons support three common usage methods: text icons, image icons, and IconFont icons. The configurations for these three methods are shown below:",
        "paraId": 87,
        "tocIndex": 19
    },
    {
        "value": "Using text directly as icons, suitable for simple identifiers:",
        "paraId": 88,
        "tocIndex": 20
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      fill: '#FFF0F6',\n      stroke: '#EB2F96',\n      lineWidth: 1.5,\n      iconText: 'A', // Icon text content\n      iconFill: '#C41D7F', // Deep pink icon\n      iconFontSize: 16,\n      iconFontWeight: 'bold',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 89,
        "tocIndex": 20
    },
    {
        "value": "Using images as icons, supporting various image formats:",
        "paraId": 90,
        "tocIndex": 21
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      fill: '#F6FFED',\n      stroke: '#52C41A',\n      lineWidth: 1.5,\n      iconSrc:\n        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMSA5TDEzLjA5IDE1Ljc4TDEyIDIyTDEwLjkxIDE1Ljc4TDMgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjNTJDNDFBIi8+Cjwvc3ZnPgo=',\n      iconWidth: 20,\n      iconHeight: 20,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 91,
        "tocIndex": 21
    },
    {
        "value": "Using IconFont font icons, you need to import the corresponding font files first:",
        "paraId": 92,
        "tocIndex": 22
    },
    {
        "value": "import { Graph, iconfont } from '@antv/g6';\n\nconst style = document.createElement('style');\nstyle.innerHTML = `@import url('${iconfont.css}');`;\ndocument.head.appendChild(style);\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      fill: '#E6F7FF', // Light blue background\n      stroke: '#1890FF', // Blue border\n      lineWidth: 1.5,\n      iconFontFamily: 'iconfont',\n      iconText: '\\ue602',\n      iconFill: '#1890FF',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 93,
        "tocIndex": 22
    },
    {
        "value": "The complete icon style configuration is as follows:",
        "paraId": 94,
        "tocIndex": 22
    },
    {
        "value": "Property",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Description",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Type",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Default",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "icon",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Whether to display node icon",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "boolean",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "true",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconFill",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon text color",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconFontFamily",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon font family",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconFontSize",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon font size",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "number",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "16",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconFontStyle",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon font style",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "normal",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "italic",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "oblique",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "normal",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconFontVariant",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon font variant",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "normal",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "small-caps",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "normal",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconFontWeight",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon font weight",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "number | string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "normal",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconHeight",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon height",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "number",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Half of main graphic height",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconLetterSpacing",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon text letter spacing",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "number | string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconLineHeight",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon text line height",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "number | string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconMaxLines",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Maximum lines for node icon text",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "number",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "1",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconRadius",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon border radius",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "number",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "0",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconSrc",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node image source. Has higher priority than iconText",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconText",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon text",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconTextAlign",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon text horizontal alignment",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "start",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "center",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "middle",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "end",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "left",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "right",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "left",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconTextBaseline",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon text baseline",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "top",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "hanging",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "middle",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "alphabetic",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "ideographic",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "bottom",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "alphabetic",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconTextDecorationColor",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon text decoration line color",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconTextDecorationLine",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon text decoration line",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconTextDecorationStyle",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon text decoration line style",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "solid",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "double",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "dotted",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "dashed",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "wavy",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "solid",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconTextOverflow",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon text overflow handling",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "clip",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | ",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "ellipsis",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": " | string",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "clip",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconWidth",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Node icon width",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "number",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Half of main graphic width",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "iconWordWrap",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Whether node icon text automatically wraps",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "boolean",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 95,
        "tocIndex": 22
    },
    {
        "value": "Badges are small markers displayed on nodes, usually used to show status, quantity, or other auxiliary information. Supports displaying multiple badges simultaneously with customizable positions.",
        "paraId": 96,
        "tocIndex": 23
    },
    {
        "value": "Adding a simple badge to a node:",
        "paraId": 97,
        "tocIndex": 24
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      badges: [\n        { text: 'NEW' }, // Default display at the top\n      ],\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 98,
        "tocIndex": 24
    },
    {
        "value": "Adding multiple badges at different positions to a node:",
        "paraId": 99,
        "tocIndex": 25
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      badge: true, // Whether to display badges\n      badges: [\n        { text: 'A', placement: 'right-top' },\n        { text: 'Important', placement: 'right' },\n        { text: 'Notice', placement: 'right-bottom' },\n      ],\n      badgePalette: ['#7E92B5', '#F4664A', '#FFBE3A'], // Badge background color palette\n      badgeFontSize: 7, // Badge font size\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 100,
        "tocIndex": 25
    },
    {
        "value": "Completely customizing badge appearance:",
        "paraId": 101,
        "tocIndex": 26
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      badges: [\n        {\n          text: '99+',\n          placement: 'right-top',\n          backgroundFill: '#FF4D4F', // Red background\n          fill: '#fff', // White text\n          fontSize: 10,\n          padding: [2, 6],\n          backgroundRadius: 8,\n        },\n      ],\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 102,
        "tocIndex": 26
    },
    {
        "value": "The complete badge style configuration is as follows:",
        "paraId": 103,
        "tocIndex": 26
    },
    {
        "value": "Property",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "Description",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "Type",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "Default",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "badge",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "Whether the node displays badges",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "boolean",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "true",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "badgePalette",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "Badge background color palette",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "string[]",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "[",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "#7E92B5",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": ", ",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "#F4664A",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": ", ",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "#FFBE3A",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "]",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "badges",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "Node badge settings",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "BadgeStyleProps",
        "paraId": 105,
        "tocIndex": 26
    },
    {
        "value": "[]",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "-",
        "paraId": 104,
        "tocIndex": 26
    },
    {
        "value": "Property",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Description",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Type",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Default",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "background",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Whether node badge displays background",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "boolean",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "true",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundCursor",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background mouse hover style, ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "options",
        "paraId": 107,
        "tocIndex": 27
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "default",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundFill",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background fill color. If not specified, badgePalette is considered for allocation in order",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundFillOpacity",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background fill transparency",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "1",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundFilter",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background filter",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundHeight",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background height",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number | string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundLineDash",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background dash configuration",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number | string |(number | string )[]",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundLineDashOffset",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background dash offset",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundLineWidth",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background stroke line width",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundRadius",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background border radius ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " - number: Uniform setting for four border radii ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " - number[]: Set four border radii separately, automatically supplement missing values ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " - string: Similar to ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "CSS padding",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " property, separated by spaces",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number | number[] | string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "0",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundShadowBlur",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background shadow blur degree",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundShadowColor",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background shadow color",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundShadowOffsetX",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background shadow X direction offset",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundShadowOffsetY",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background shadow Y direction offset",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundStroke",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background stroke color",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundStrokeOpacity",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background stroke transparency",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number | string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "1",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundVisibility",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Whether node badge background is visible",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "visible",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "hidden",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "backgroundZIndex",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge background rendering level",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "fill",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge text color",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "fontFamily",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge font family",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "fontSize",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge font size",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "8",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "fontStyle",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge font style",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "normal",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "italic",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "oblique",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "normal",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "fontVariant",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge font variant",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "normal",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "small-caps",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "normal",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "fontWeight",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge font weight",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number | string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "normal",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "lineHeight",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge line height",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string | number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "lineWidth",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge line width",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string | number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "maxLines",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Maximum lines for node badge text",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "1",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "offsetX",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge offset in x-axis direction",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "0",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "offsetY",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge offset in y-axis direction",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "0",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "padding",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge padding",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number | number[]",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "0",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "placement",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Position of node badge relative to node main graphic. If not specified, defaults to clockwise arrangement starting from top-right corner",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "left",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "right",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "top",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "bottom",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "left-top",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "left-bottom",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "right-top",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "right-bottom",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "top-left",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "top-right",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "bottom-left",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "bottom-right",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "text",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge text content",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "textAlign",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge text horizontal alignment",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "start",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "center",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "middle",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "end",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "left",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "right",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "left",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "textBaseline",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge text baseline",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "top",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "hanging",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "middle",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "alphabetic",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "ideographic",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "bottom",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "alphabetic",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "textDecorationColor",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge text decoration line color",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "textDecorationLine",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge text decoration line",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "textDecorationStyle",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge text decoration line style",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "solid",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "double",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "dotted",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "dashed",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "wavy",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "solid",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "textOverflow",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge text overflow handling",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "clip",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "ellipsis",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | string",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "clip",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "visibility",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Whether node badge is visible",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "visible",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": " | ",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "hidden",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "wordWrap",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Whether node badge text automatically wraps",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "boolean",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "zIndex",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Node badge rendering level",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "number",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "3",
        "paraId": 106,
        "tocIndex": 27
    },
    {
        "value": "Ports are connection points on nodes, used to connect edges. Supports adding multiple ports at different positions on nodes with customizable styles.",
        "paraId": 108,
        "tocIndex": 28
    },
    {
        "value": "Adding four basic directional ports to a node:",
        "paraId": 109,
        "tocIndex": 29
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      port: true,\n      ports: [\n        { key: 'top', placement: 'top', fill: '#7E92B5' },\n        { key: 'right', placement: 'right', fill: '#F4664A' },\n        { key: 'bottom', placement: 'bottom', fill: '#FFBE3A' },\n        { key: 'left', placement: 'left', fill: '#D580FF' },\n      ],\n      portR: 3,\n      portLineWidth: 1,\n      portStroke: '#fff',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 110,
        "tocIndex": 29
    },
    {
        "value": "Using percentages or absolute coordinates to precisely position ports:",
        "paraId": 111,
        "tocIndex": 30
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      ports: [\n        { key: 'custom1', placement: [0.2, 0] }, // Relative position: 20% from top-left\n        { key: 'custom2', placement: [0.8, 0] }, // Relative position: 80% from top-right\n        { key: 'custom3', placement: [1, 0.5] }, // Relative position: right center\n      ],\n      portR: 4,\n      portLineWidth: 1,\n      portStroke: '#fff',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 112,
        "tocIndex": 30
    },
    {
        "value": "Setting different styles for different ports:",
        "paraId": 113,
        "tocIndex": 31
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: { nodes: [{ id: 'node1' }] },\n  node: {\n    style: {\n      ports: [\n        {\n          key: 'input',\n          placement: 'left',\n          fill: '#52C41A', // Green input port\n          r: 4,\n        },\n        {\n          key: 'output',\n          placement: 'right',\n          fill: '#FF4D4F', // Red output port\n          r: 4,\n        },\n      ],\n      portStroke: '#fff', // Unified stroke color\n      portLineWidth: 2,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 114,
        "tocIndex": 31
    },
    {
        "value": "The complete port style configuration is as follows:",
        "paraId": 115,
        "tocIndex": 31
    },
    {
        "value": "Property",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "Description",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "Type",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "Default",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "Required",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "port",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "Whether the node displays ports",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "boolean",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "true",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "ports",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "Node port configuration, supports configuring multiple ports",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "PortStyleProps",
        "paraId": 117,
        "tocIndex": 31
    },
    {
        "value": "[]",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "-",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "Property",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Description",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Type",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Default",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Required",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "key",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Key value of node port, defaults to the index of the node port",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "string",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "placement",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Position of node port relative to node main graphic",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "left",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "right",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "top",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "bottom",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "center",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "left-top",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "left-bottom",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "right-top",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "right-bottom",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "top-left",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "top-right",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "bottom-left",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "bottom-right",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | [number, number]",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "✓",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "r",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port radius ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " - If set to undefined, the port is treated as a point, not displayed on canvas but exists, edges will preferentially connect to the nearest port ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " - If set to a number, the port is treated as a circle with radius specified here",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "number",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "linkToCenter",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Whether edges connect to the center of the node port ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " - If true, edges connect to the center of the node port ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " - If false, edges connect to the edge of the node port",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "boolean",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "false",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "cursor",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port mouse hover style, ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "options",
        "paraId": 119,
        "tocIndex": 32
    },
    {
        "value": "string",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "default",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "fill",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port fill color",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "string",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "fillOpacity",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port fill transparency",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "number",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "1",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "isBillboard",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Whether node port has Billboard effect",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "boolean",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Whether node port enables size attenuation",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "boolean",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "lineDash",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port stroke dash configuration",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "number | string |(number | string )[]",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "lineDashOffset",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port stroke dash offset",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "number",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "lineWidth",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port stroke line width",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "number",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "shadowBlur",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port shadow blur degree",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "number",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "shadowColor",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port shadow color",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "string",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "shadowOffsetX",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port shadow X direction offset",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "number",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "shadowOffsetY",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port shadow Y direction offset",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "number",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "stroke",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port stroke color",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "string",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "-",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "strokeOpacity",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port stroke transparency",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "number | string",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "1",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "visibility",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Whether node port is visible",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "visible",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " | ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "hidden",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "visible",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "zIndex",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "Node port rendering level",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "number",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "2",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "In some interactive behaviors, such as clicking to select a node or hovering to activate an edge, only certain state identifications are made on the element. To reflect these states in the visual space seen by end users, we need to set different graphic element styles for different states to respond to changes in the state of the graphic element.",
        "paraId": 120,
        "tocIndex": 33
    },
    {
        "value": "G6 provides several built-in states, including selected, highlight, active, inactive, and disabled. In addition, it also supports custom states to meet more specific needs. For each state, developers can define a set of style rules that will override the element's default styles.",
        "paraId": 121,
        "tocIndex": 33
    },
    {
        "value": "The data structure is as follows:",
        "paraId": 122,
        "tocIndex": 33
    },
    {
        "value": "type NodeState = {\n  [state: string]: NodeStyle;\n};\n",
        "paraId": 123,
        "tocIndex": 33
    },
    {
        "value": "For example, when a node is in the ",
        "paraId": 124,
        "tocIndex": 33
    },
    {
        "value": "focus",
        "paraId": 124,
        "tocIndex": 33
    },
    {
        "value": " state, you can add a stroke with width 3 and orange color.",
        "paraId": 124,
        "tocIndex": 33
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    state: {\n      focus: {\n        lineWidth: 3, // Stroke width\n        stroke: 'orange', // Stroke color\n      },\n    },\n  },\n});\n",
        "paraId": 125,
        "tocIndex": 33
    },
    {
        "value": "The effect is shown in the figure below:",
        "paraId": 126,
        "tocIndex": 33
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  autoFit: 'center',\n  data: {\n    nodes: [{ id: 'node1', states: ['focus'] }],\n  },\n  node: {\n    state: {\n      focus: {\n        lineWidth: 3,\n        stroke: 'orange',\n      },\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 127,
        "tocIndex": 33
    },
    {
        "value": "Defines animation effects for nodes, supporting the following two configuration methods:",
        "paraId": 128,
        "tocIndex": 34
    },
    {
        "value": "Disable all node animations",
        "paraId": 129,
        "tocIndex": 34
    },
    {
        "value": "{\n  \"node\": {\n    \"animation\": false\n  }\n}\n",
        "paraId": 130,
        "tocIndex": 34
    },
    {
        "value": "Configure stage animations",
        "paraId": 131,
        "tocIndex": 34
    },
    {
        "value": "Stage animations refer to animation effects when nodes enter the canvas, update, or leave the canvas. Currently supported stages include:",
        "paraId": 132,
        "tocIndex": 34
    },
    {
        "value": "enter",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": ": Animation when nodes enter the canvas",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": "update",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": ": Animation when nodes are updated",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": "exit",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": ": Animation when nodes leave the canvas",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": "show",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": ": Animation when nodes are shown from hidden state",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": "hide",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": ": Animation when nodes are hidden",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": "collapse",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": ": Animation when nodes are collapsed",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": "expand",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": ": Animation when nodes are expanded",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": "You can refer to ",
        "paraId": 134,
        "tocIndex": 34
    },
    {
        "value": "Animation Paradigm",
        "paraId": 135,
        "tocIndex": 34
    },
    {
        "value": " to use animation syntax to configure nodes, such as:",
        "paraId": 134,
        "tocIndex": 34
    },
    {
        "value": "{\n  \"node\": {\n    \"animation\": {\n      \"update\": [\n        {\n          \"fields\": [\"x\", \"y\"], // Only animate x and y properties during updates\n          \"duration\": 1000, // Animation duration\n          \"easing\": \"linear\" // Easing function\n        }\n      ]\n    }\n  }\n}\n",
        "paraId": 136,
        "tocIndex": 34
    },
    {
        "value": "You can also use built-in animation effects:",
        "paraId": 137,
        "tocIndex": 34
    },
    {
        "value": "{\n  \"node\": {\n    \"animation\": {\n      \"enter\": \"fade\", // Use fade animation\n      \"update\": \"translate\", // Use translate animation\n      \"exit\": \"fade\" // Use fade animation\n    }\n  }\n}\n",
        "paraId": 138,
        "tocIndex": 34
    },
    {
        "value": "You can pass false to disable animations for specific stages:",
        "paraId": 139,
        "tocIndex": 34
    },
    {
        "value": "{\n  \"node\": {\n    \"animation\": {\n      \"enter\": false // Disable node entrance animation\n    }\n  }\n}\n",
        "paraId": 140,
        "tocIndex": 34
    },
    {
        "value": "Defines the color palette for nodes, i.e., predefined node color pool, and allocates according to rules, mapping colors to the ",
        "paraId": 141,
        "tocIndex": 35
    },
    {
        "value": "fill",
        "paraId": 141,
        "tocIndex": 35
    },
    {
        "value": " property.",
        "paraId": 141,
        "tocIndex": 35
    },
    {
        "value": "For the definition of palettes, please refer to ",
        "paraId": 142,
        "tocIndex": 35
    },
    {
        "value": "Palette",
        "paraId": 143,
        "tocIndex": 35
    },
    {
        "value": ".",
        "paraId": 142,
        "tocIndex": 35
    },
    {
        "value": "Property",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "Description",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "Type",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "Default",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "color",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "Palette colors. If the palette is registered, you can directly specify its registration name, or accept a color array",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "string | string[]",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "-",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "field",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "Specify the grouping field in element data. If not specified, defaults to id as the grouping field",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "string | ((datum) => string)",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "id",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "invert",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "Whether to invert the palette",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "boolean",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "false",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "type",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "Specify the current palette type. ",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": " - ",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "group",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": ": Discrete palette ",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": " - ",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "value",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": ": Continuous palette",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "group",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": " | ",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "value",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "group",
        "paraId": 144,
        "tocIndex": 35
    },
    {
        "value": "For example, assigning node colors to a group of data by ",
        "paraId": 145,
        "tocIndex": 35
    },
    {
        "value": "category",
        "paraId": 145,
        "tocIndex": 35
    },
    {
        "value": " field, so that nodes of the same category have the same color:",
        "paraId": 145,
        "tocIndex": 35
    },
    {
        "value": "{\n  \"node\": {\n    \"palette\": {\n      \"type\": \"group\",\n      \"field\": \"category\",\n      \"color\": [\"#1783FF\", \"#F08F56\", \"#D580FF\", \"#00C9C9\", \"#7863FF\"]\n    }\n  }\n}\n",
        "paraId": 146,
        "tocIndex": 35
    },
    {
        "value": "The effect is shown in the figure below:",
        "paraId": 147,
        "tocIndex": 35
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 100,\n  data: {\n    nodes: new Array(10)\n      .fill(0)\n      .map((_, i) => ({ id: `node-${i}`, data: { category: ['A', 'B', 'C', 'D', 'E'][i % 5] } })),\n  },\n  layout: { type: 'grid', cols: 10 },\n  node: {\n    palette: {\n      type: 'group',\n      field: 'category',\n      color: ['#1783FF', '#F08F56', '#D580FF', '#00C9C9', '#7863FF'],\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 148,
        "tocIndex": 35
    },
    {
        "value": "You can also use default configuration:",
        "paraId": 149,
        "tocIndex": 35
    },
    {
        "value": "{\n  \"node\": {\n    \"palette\": \"tableau\" // tableau is the palette name, defaults to assigning colors based on ID\n  }\n}\n",
        "paraId": 150,
        "tocIndex": 35
    },
    {
        "value": "The effect is shown in the figure below:",
        "paraId": 151,
        "tocIndex": 35
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 100,\n  data: {\n    nodes: new Array(10)\n      .fill(0)\n      .map((_, i) => ({ id: `node-${i}`, data: { category: ['A', 'B', 'C', 'D', 'E'][i % 5] } })),\n  },\n  layout: { type: 'grid', cols: 10 },\n  node: {\n    palette: 'tableau',\n  },\n});\n\ngraph.render();\n",
        "paraId": 152,
        "tocIndex": 35
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
//# sourceMappingURL=docs_manual_element_node_BaseNode_en_md_q_hK4X-async.js.map