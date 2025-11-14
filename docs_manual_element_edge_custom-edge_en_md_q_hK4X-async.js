((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/custom-edge.en.md?type=text'],
{ "docs/manual/element/edge/custom-edge.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/edge/custom-edge.en.md?watch=parent");
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
        "value": "G6 provides multiple ",
        "paraId": 0
    },
    {
        "value": "built-in edge",
        "paraId": 1
    },
    {
        "value": " types, including ",
        "paraId": 0
    },
    {
        "value": "line",
        "paraId": 2
    },
    {
        "value": ", ",
        "paraId": 0
    },
    {
        "value": "polyline",
        "paraId": 3
    },
    {
        "value": ", ",
        "paraId": 0
    },
    {
        "value": "quadratic (quadratic Bézier curve edge)",
        "paraId": 4
    },
    {
        "value": ", ",
        "paraId": 0
    },
    {
        "value": "cubic (cubic Bézier curve edge)",
        "paraId": 5
    },
    {
        "value": ", ",
        "paraId": 0
    },
    {
        "value": "cubic-horizontal",
        "paraId": 6
    },
    {
        "value": ", ",
        "paraId": 0
    },
    {
        "value": "cubic-vertical",
        "paraId": 7
    },
    {
        "value": ", and more. These built-in edges can meet most basic scenario requirements.",
        "paraId": 0
    },
    {
        "value": "However, in actual projects, you may encounter requirements that these basic edges cannot satisfy. In such cases, you need to create custom edges. Don't worry, it's simpler than you think!",
        "paraId": 8
    },
    {
        "value": "In G6, a complete edge typically consists of the following parts:",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "key",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": ": The main graphic of the edge, representing the primary shape of the edge, such as straight lines, polylines, etc.",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": "label",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": ": Text label, usually used to display the name or description of the edge",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": "arrow",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": ": Arrow, used to indicate the direction of the edge",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": "halo",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": ": Graphic displaying halo effects around the main graphic",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": "Choose the Right Approach",
        "paraId": 11,
        "tocIndex": 0
    },
    {
        "value": "There are two main ways to create custom edges:",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "Recommended",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "This is the most commonly used approach. You can choose to inherit from one of the following types:",
        "paraId": 14,
        "tocIndex": 2
    },
    {
        "value": "BaseEdge",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": " - The most basic edge class, providing core edge functionality",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "Line",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": " - Straight line edge",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "Polyline",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": " - Polyline edge",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "Quadratic",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": " - Quadratic Bézier curve edge",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "Cubic",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": " - Cubic Bézier curve edge",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "CubicVertical",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": " - Vertical cubic Bézier curve edge",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "CubicHorizontal",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": " - Horizontal cubic Bézier curve edge",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "Why choose this approach?",
        "paraId": 16,
        "tocIndex": 2
    },
    {
        "value": "📌 ",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": "Less code",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": ": Reuse existing edge properties and methods, only focus on new functionality",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": "📌 ",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": "Fast development",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": ": Suitable for most project requirements, quickly achieve business goals",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": "📌 ",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": "Easy maintenance",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": ": Clear code structure, clear inheritance relationships",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": "If you choose to inherit from existing edge types (recommended), you can jump directly to ",
        "paraId": 18,
        "tocIndex": 2
    },
    {
        "value": "Create Your First Custom Edge in Three Steps",
        "paraId": 19,
        "tocIndex": 2
    },
    {
        "value": " to start practicing. Most users will choose this approach!",
        "paraId": 18,
        "tocIndex": 2
    },
    {
        "value": "Advanced Usage",
        "paraId": 20,
        "tocIndex": 2
    },
    {
        "value": "If existing edge types don't meet your requirements, you can create edges from scratch based on G's underlying graphics system.",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": "Why choose this approach?",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "📌 ",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "Maximum freedom",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": ": Complete control over every detail of the edge, achieving any complex effects",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "📌 ",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "Special requirements",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": ": Highly customized scenarios that existing edge types cannot satisfy",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "📌 ",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "Performance optimization",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": ": Performance optimization for specific scenarios",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "Custom edges built from scratch need to handle all details by themselves, including graphic rendering, event response, state changes, etc., which is more challenging to develop. You can refer directly to the ",
        "paraId": 24
    },
    {
        "value": "source code",
        "paraId": 24
    },
    {
        "value": " for implementation.",
        "paraId": 24
    },
    {
        "value": "Let's start with the most basic ",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "BaseEdge",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": " to implement a custom straight line edge:",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "import { Graph, register, BaseEdge, ExtensionCategory } from '@antv/g6';\n\nclass MyLineEdge extends BaseEdge {\n  getKeyStyle(attributes) {\n    return { ...super.getKeyStyle(attributes), lineWidth: 2, stroke: '#A4D3EE' };\n  }\n\n  getKeyPath(attributes) {\n    const { sourceNode, targetNode } = this;\n    const [x1, y1] = sourceNode.getPosition();\n    const [x2, y2] = targetNode.getPosition();\n\n    return [\n      ['M', x1, y1],\n      ['L', x2, y2],\n    ];\n  }\n}\n\nregister(ExtensionCategory.EDGE, 'my-line-edge', MyLineEdge);\n\nconst graph = new Graph({\n  container: 'container',\n  height: 200,\n  data: {\n    nodes: [\n      { id: 'node1', style: { x: 100, y: 50 } },\n      { id: 'node2', style: { x: 300, y: 120 } },\n    ],\n    edges: [{ source: 'node1', target: 'node2' }],\n  },\n  node: {\n    style: {\n      fill: '#7FFFD4',\n      stroke: '#5CACEE',\n      lineWidth: 2,\n    },\n  },\n  edge: {\n    type: 'my-line-edge',\n    style: {\n      zIndex: 3,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 26,
        "tocIndex": 4
    },
    {
        "value": "import { BaseEdge } from '@antv/g6';\nimport type { BaseEdgeStyleProps } from '@antv/g6';\n\nclass MyLineEdge extends BaseEdge {\n  // Define edge style, can add or override default styles\n  protected getKeyStyle(attributes: Required<BaseEdgeStyleProps>) {\n    // Call parent class method to get basic style, then add custom styles\n    return { ...super.getKeyStyle(attributes), lineWidth: 2, stroke: '#A4D3EE' };\n  }\n\n  // Implement abstract method: define edge path\n  // This is an abstract method of BaseEdge, all subclasses must implement it\n  protected getKeyPath(attributes) {\n    // Get source node and target node\n    const { sourceNode, targetNode } = this;\n\n    // Get node position coordinates\n    const [x1, y1] = sourceNode.getPosition();\n    const [x2, y2] = targetNode.getPosition();\n\n    // Return SVG path array, defining a straight line from start to end\n    return [\n      ['M', x1, y1],\n      ['L', x2, y2],\n    ];\n  }\n}\n",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "getKeyStyle",
        "paraId": 28
    },
    {
        "value": ": Defines the basic style of the edge, such as line width, color, etc.",
        "paraId": 28
    },
    {
        "value": "getKeyPath",
        "paraId": 28
    },
    {
        "value": ": An abstract method in ",
        "paraId": 28
    },
    {
        "value": "BaseEdge",
        "paraId": 28
    },
    {
        "value": " that ",
        "paraId": 28
    },
    {
        "value": "must be implemented",
        "paraId": 28
    },
    {
        "value": ", it defines the path shape of the edge",
        "paraId": 28
    },
    {
        "value": "Use the ",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "register",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": " method to register the edge type so that G6 can recognize your custom edge:",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "import { ExtensionCategory } from '@antv/g6';\n\nregister(ExtensionCategory.EDGE, 'my-line-edge', MyLineEdge);\n",
        "paraId": 30,
        "tocIndex": 6
    },
    {
        "value": "The ",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "register",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": " method requires three parameters:",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Extension category: ",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "ExtensionCategory.EDGE",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": " indicates this is an edge type",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "Type name: ",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "my-line-edge",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": " is the name we give to this custom edge, which will be used in configuration later",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "Class definition: ",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "MyLineEdge",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": " is the edge class we just created",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "In the graph configuration, use our custom edge by setting ",
        "paraId": 33,
        "tocIndex": 7
    },
    {
        "value": "edge.type",
        "paraId": 33,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 33,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [\n      { id: 'node1', style: { x: 100, y: 100 } },\n      { id: 'node2', style: { x: 300, y: 150 } },\n    ],\n    edges: [{ source: 'node1', target: 'node2' }],\n  },\n  node: {\n    style: {\n      fill: '#7FFFD4',\n      stroke: '#5CACEE',\n      lineWidth: 2,\n    },\n  },\n  edge: {\n    type: 'my-line-edge',\n    style: {\n      zIndex: 3,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "🎉 Congratulations! You have created your first custom edge.",
        "paraId": 35,
        "tocIndex": 7
    },
    {
        "value": "G6 nodes are drawn using atomic graphic units provided by the ",
        "paraId": 36,
        "tocIndex": 9
    },
    {
        "value": "G graphics system",
        "paraId": 36,
        "tocIndex": 9
    },
    {
        "value": ". Here are common graphic elements and their uses:",
        "paraId": 36,
        "tocIndex": 9
    },
    {
        "value": "Graphic Element",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Type",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Description",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Circle",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "circle",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Suitable for representing states, avatars, circular buttons, etc. Refer to SVG's ",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "<circle>",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": " element",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Ellipse",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "ellipse",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Similar to circle, but supports scenarios with different horizontal and vertical axes. Refer to SVG's ",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "<ellipse>",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": " element",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Image",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "image",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Used to display icons, user avatars, LOGOs, etc. Refer to SVG's ",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "<image>",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": " element",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Line",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "line",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Used for decoration, auxiliary connections, etc. Refer to SVG's ",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "<line>",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": " element",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Path",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "path",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Supports complex graphics such as arrows, arcs, curves, Bézier paths, etc. The path contains a set of commands and parameters with different semantics, ",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "specific usage",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Polygon",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "polygon",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Supports custom graphics such as pentagrams, arrows. Refer to SVG's ",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "<polygon>",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": " element",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Polyline",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "polyline",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Multi-point polyline, suitable for complex connection structures. Refer to SVG's ",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "<polyline>",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": " element",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Rectangle",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "rect",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Most commonly used graphic, suitable as containers, cards, buttons, and other basic structures. Refer to SVG's ",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "<rect>",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": " element",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Text",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "text",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Displays names, descriptions, labels, and other content. Provides simple single-line/multi-line text layout capabilities, single-line supports horizontal alignment, character spacing; multi-line supports explicit line breaks and automatic wrapping, vertical alignment",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "For more atomic graphics and detailed properties, please refer to ",
        "paraId": 38,
        "tocIndex": 9
    },
    {
        "value": "Element - Shape (Optional)",
        "paraId": 39,
        "tocIndex": 9
    },
    {
        "value": "All these graphics can be dynamically created or updated through ",
        "paraId": 40,
        "tocIndex": 9
    },
    {
        "value": "upsert()",
        "paraId": 40,
        "tocIndex": 9
    },
    {
        "value": ", automatically managing graphic state and lifecycle.",
        "paraId": 40,
        "tocIndex": 9
    },
    {
        "value": "Before starting to customize elements, you need to understand some important properties and methods in G6 element base classes:",
        "paraId": 41,
        "tocIndex": 10
    },
    {
        "value": "Property",
        "paraId": 42,
        "tocIndex": 11
    },
    {
        "value": "Type",
        "paraId": 42,
        "tocIndex": 11
    },
    {
        "value": "Description",
        "paraId": 42,
        "tocIndex": 11
    },
    {
        "value": "shapeMap",
        "paraId": 42,
        "tocIndex": 11
    },
    {
        "value": "Record<string, DisplayObject>",
        "paraId": 42,
        "tocIndex": 11
    },
    {
        "value": "Mapping table of all graphics under current element",
        "paraId": 42,
        "tocIndex": 11
    },
    {
        "value": "animateMap",
        "paraId": 42,
        "tocIndex": 11
    },
    {
        "value": "Record<string, IAnimation>",
        "paraId": 42,
        "tocIndex": 11
    },
    {
        "value": "Mapping table of all animations under current element",
        "paraId": 42,
        "tocIndex": 11
    },
    {
        "value": "upsert(name, Ctor, style, container, hooks)",
        "paraId": 43
    },
    {
        "value": "When creating custom elements, you will frequently use the ",
        "paraId": 44,
        "tocIndex": 13
    },
    {
        "value": "upsert",
        "paraId": 44,
        "tocIndex": 13
    },
    {
        "value": " method. It's short for \"update or insert\", responsible for adding or updating graphics in elements:",
        "paraId": 44,
        "tocIndex": 13
    },
    {
        "value": "upsert(key: string, Ctor: { new (...args: any[]): DisplayObject }, style: Record<string, any>, container: DisplayObject);\n",
        "paraId": 45,
        "tocIndex": 13
    },
    {
        "value": "Parameter",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "Type",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "Description",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "key",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "string",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "The key of the graphic, i.e., the corresponding key in ",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "shapeMap",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": ". Built-in keys include ",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "'key'",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": " ",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "'label'",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": " ",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "'halo'",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": " ",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "'icon'",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": " ",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "'port'",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": " ",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "'badge'",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": " The key should not use special symbols, it will be converted to camelCase to call ",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "getXxxStyle",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": " and ",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "drawXxxShape",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": " methods (see ",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "Element Conventions",
        "paraId": 47,
        "tocIndex": 13
    },
    {
        "value": ")",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "Ctor",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "{ new (...args: any[]): DisplayObject }",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "Graphic class",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "style",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "Record<string, any>",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "Graphic style",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "container",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "DisplayObject",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "Container to mount the graphic",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "For example, inserting a purple circle at a fixed position:",
        "paraId": 48,
        "tocIndex": 13
    },
    {
        "value": "this.upsert(\n  'element-key', // Unique identifier of the element\n  'circle', // Graphic type, such as 'rect', 'circle', etc.\n  { x: 100, y: 100, fill: '#a975f3' }, // Style configuration object\n  container, // Parent container\n);\n",
        "paraId": 49,
        "tocIndex": 13
    },
    {
        "value": "Why use ",
        "paraId": 50,
        "tocIndex": 13
    },
    {
        "value": "upsert",
        "paraId": 50,
        "tocIndex": 13
    },
    {
        "value": " instead of directly creating graphics through ",
        "paraId": 50,
        "tocIndex": 13
    },
    {
        "value": "container.appendChild()",
        "paraId": 50,
        "tocIndex": 13
    },
    {
        "value": "? Because:",
        "paraId": 50,
        "tocIndex": 13
    },
    {
        "value": "Better performance",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": ": When state changes or data updates, it intelligently reuses existing graphics instead of deleting and rebuilding, greatly improving rendering performance",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": "Simpler code",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": ": No need to manually check if elements exist",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": "Easy management",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": ": All graphics created through ",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": "upsert",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": " are recorded in the node's ",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": "shapeMap",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": ", you can easily get them through ",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": "this.getShape(key)",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": "render(attributes, container)",
        "paraId": 43
    },
    {
        "value": "Every custom edge class must implement the ",
        "paraId": 52,
        "tocIndex": 14
    },
    {
        "value": "render(attributes, container)",
        "paraId": 52,
        "tocIndex": 14
    },
    {
        "value": " method, which defines how the edge is \"drawn\". You can use various atomic graphics here to compose the structure you want.",
        "paraId": 52,
        "tocIndex": 14
    },
    {
        "value": "render(style: Record<string, any>, container: Group): void;\n",
        "paraId": 53,
        "tocIndex": 14
    },
    {
        "value": "Parameter",
        "paraId": 54,
        "tocIndex": 14
    },
    {
        "value": "Type",
        "paraId": 54,
        "tocIndex": 14
    },
    {
        "value": "Description",
        "paraId": 54,
        "tocIndex": 14
    },
    {
        "value": "style",
        "paraId": 54,
        "tocIndex": 14
    },
    {
        "value": "Record<string, any>",
        "paraId": 54,
        "tocIndex": 14
    },
    {
        "value": "Element style",
        "paraId": 54,
        "tocIndex": 14
    },
    {
        "value": "container",
        "paraId": 54,
        "tocIndex": 14
    },
    {
        "value": "Group",
        "paraId": 54,
        "tocIndex": 14
    },
    {
        "value": "Container",
        "paraId": 54,
        "tocIndex": 14
    },
    {
        "value": "getShape(name)",
        "paraId": 43
    },
    {
        "value": "Sometimes, you need to modify the properties of a sub-graphic after creation, or make sub-graphics interact with each other. In this case, the ",
        "paraId": 55,
        "tocIndex": 15
    },
    {
        "value": "getShape",
        "paraId": 55,
        "tocIndex": 15
    },
    {
        "value": " method can help you get any graphic previously created through ",
        "paraId": 55,
        "tocIndex": 15
    },
    {
        "value": "upsert",
        "paraId": 55,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 55,
        "tocIndex": 15
    },
    {
        "value": "⚠️ Note",
        "paraId": 56,
        "tocIndex": 15
    },
    {
        "value": ": The order of graphics is important. If graphic B depends on the position of graphic A, you must ensure A is created first",
        "paraId": 56,
        "tocIndex": 15
    },
    {
        "value": "Use Conventional Properties",
        "paraId": 57,
        "tocIndex": 16
    },
    {
        "value": "Currently conventional element properties include:",
        "paraId": 58,
        "tocIndex": 16
    },
    {
        "value": "Get element size through ",
        "paraId": 59,
        "tocIndex": 16
    },
    {
        "value": "this.getSize()",
        "paraId": 59,
        "tocIndex": 16
    },
    {
        "value": "Get edge start and end points through ",
        "paraId": 60,
        "tocIndex": 16
    },
    {
        "value": "const [sourcePoint, targetPoint] = this.getEndpoints(attributes, false)",
        "paraId": 60,
        "tocIndex": 16
    },
    {
        "value": " (simple mode - doesn't consider node shape, directly returns node center or nearest port center position)",
        "paraId": 60,
        "tocIndex": 16
    },
    {
        "value": "Get edge start and end points through ",
        "paraId": 61,
        "tocIndex": 16
    },
    {
        "value": "const [sourcePoint, targetPoint] = this.getEndpoints(attributes)",
        "paraId": 61,
        "tocIndex": 16
    },
    {
        "value": " (optimized mode - default is true, considers node shape, returns connection points on node boundary)",
        "paraId": 61,
        "tocIndex": 16
    },
    {
        "value": "Use Paired ",
        "paraId": 62,
        "tocIndex": 16
    },
    {
        "value": "getXxxStyle",
        "paraId": 62,
        "tocIndex": 16
    },
    {
        "value": " and ",
        "paraId": 62,
        "tocIndex": 16
    },
    {
        "value": "drawXxxShape",
        "paraId": 62,
        "tocIndex": 16
    },
    {
        "value": " Methods for Graphic Drawing",
        "paraId": 62,
        "tocIndex": 16
    },
    {
        "value": "getXxxStyle",
        "paraId": 63,
        "tocIndex": 16
    },
    {
        "value": " is used to get graphic styles, ",
        "paraId": 63,
        "tocIndex": 16
    },
    {
        "value": "drawXxxShape",
        "paraId": 63,
        "tocIndex": 16
    },
    {
        "value": " is used to draw graphics. Graphics created this way support automatic animation execution.",
        "paraId": 63,
        "tocIndex": 16
    },
    {
        "value": "Where ",
        "paraId": 64,
        "tocIndex": 16
    },
    {
        "value": "Xxx",
        "paraId": 64,
        "tocIndex": 16
    },
    {
        "value": " is the camelCase form of the key passed when calling the ",
        "paraId": 64,
        "tocIndex": 16
    },
    {
        "value": "upsert",
        "paraId": 65,
        "tocIndex": 16
    },
    {
        "value": " method.",
        "paraId": 64,
        "tocIndex": 16
    },
    {
        "value": "Access Graph Context through ",
        "paraId": 66,
        "tocIndex": 16
    },
    {
        "value": "this.context",
        "paraId": 66,
        "tocIndex": 16
    },
    {
        "value": "The following lifecycle hook functions are provided, which you can override in custom edges to execute specific logic at key moments:",
        "paraId": 67,
        "tocIndex": 17
    },
    {
        "value": "Hook Function",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "Trigger Time",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "Typical Usage",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "onCreate",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "When edge creation is completed with entrance animation",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "Bind interaction events, initialize edge state, add external listeners",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "onUpdate",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "When edge update is completed with update animation",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "Update dependent data, adjust related elements, trigger linkage effects",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "onDestroy",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "When edge completes exit animation and is destroyed",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "Clean up resources, remove external listeners, execute destruction notifications",
        "paraId": 68,
        "tocIndex": 17
    },
    {
        "value": "One of the most powerful aspects of G6 element design is the ability to separate ",
        "paraId": 69,
        "tocIndex": 18
    },
    {
        "value": "\"state response\"",
        "paraId": 69,
        "tocIndex": 18
    },
    {
        "value": " from ",
        "paraId": 69,
        "tocIndex": 18
    },
    {
        "value": "\"rendering logic\"",
        "paraId": 69,
        "tocIndex": 18
    },
    {
        "value": ".",
        "paraId": 69,
        "tocIndex": 18
    },
    {
        "value": "You can define styles for each state in edge configuration:",
        "paraId": 70,
        "tocIndex": 18
    },
    {
        "value": "edge: {\n  type: 'custom-edge',\n  style: { stroke: '#eee' },\n  state: {\n    selected: {\n      stroke: '#f00',\n    },\n    hover: {\n      lineWidth: 3,\n      stroke: '#1890ff',\n    },\n  },\n}\n",
        "paraId": 71,
        "tocIndex": 18
    },
    {
        "value": "Method to switch states:",
        "paraId": 72,
        "tocIndex": 18
    },
    {
        "value": "graph.setElementState(edgeId, ['selected']);\n",
        "paraId": 73,
        "tocIndex": 18
    },
    {
        "value": "This state will be passed to the ",
        "paraId": 74,
        "tocIndex": 18
    },
    {
        "value": "render()",
        "paraId": 74,
        "tocIndex": 18
    },
    {
        "value": " method's ",
        "paraId": 74,
        "tocIndex": 18
    },
    {
        "value": "attributes",
        "paraId": 74,
        "tocIndex": 18
    },
    {
        "value": ", and the merged result by the internal system will be automatically applied to the graphics.",
        "paraId": 74,
        "tocIndex": 18
    },
    {
        "value": "You can also customize rendering logic based on state:",
        "paraId": 75,
        "tocIndex": 18
    },
    {
        "value": "protected getKeyStyle(attributes: Required<BaseEdgeStyleProps>) {\n  const style = super.getKeyStyle(attributes);\n\n  // Adjust style based on state\n  if (attributes.states?.includes('selected')) {\n    return {\n      ...style,\n      stroke: '#1890ff',\n      lineWidth: 2,\n      shadowColor: 'rgba(24,144,255,0.2)',\n      shadowBlur: 15,\n    };\n  }\n\n  return style;\n}\n",
        "paraId": 76,
        "tocIndex": 18
    },
    {
        "value": "import { Graph, register, BaseEdge, ExtensionCategory } from '@antv/g6';\n\nclass MyPolylineEdge extends BaseEdge {\n  getKeyPath(attributes) {\n    const [sourcePoint, targetPoint] = this.getEndpoints(attributes);\n\n    return [\n      ['M', sourcePoint[0], sourcePoint[1]],\n      ['L', targetPoint[0] / 2 + (1 / 2) * sourcePoint[0], sourcePoint[1]],\n      ['L', targetPoint[0] / 2 + (1 / 2) * sourcePoint[0], targetPoint[1]],\n      ['L', targetPoint[0], targetPoint[1]],\n    ];\n  }\n}\n\nregister(ExtensionCategory.EDGE, 'my-polyline-edge', MyPolylineEdge);\n\nconst graph = new Graph({\n  container: 'container',\n  height: 200,\n  data: {\n    nodes: [\n      { id: 'node-0', style: { x: 100, y: 50, ports: [{ key: 'right', placement: [1, 0.5] }] } },\n      { id: 'node-1', style: { x: 250, y: 150, ports: [{ key: 'left', placement: [0, 0.5] }] } },\n    ],\n    edges: [{ source: 'node-0', target: 'node-1' }],\n  },\n  edge: {\n    type: 'my-polyline-edge',\n    style: {\n      startArrow: true,\n      endArrow: true,\n      stroke: '#F6BD16',\n    },\n  },\n  behaviors: ['drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 77,
        "tocIndex": 20
    },
    {
        "value": "import { Graph, Line, register, BaseEdge, ExtensionCategory, subStyleProps } from '@antv/g6';\n\nclass LabelEdge extends Line {\n  render(attributes, container) {\n    super.render(attributes);\n    this.drawEndLabel(attributes, container, 'start');\n    this.drawEndLabel(attributes, container, 'end');\n  }\n\n  drawEndLabel(attributes, container, type) {\n    const key = type === 'start' ? 'startLabel' : 'endLabel';\n    const [x, y] = this.getEndpoints(attributes)[type === 'start' ? 0 : 1];\n\n    const fontStyle = {\n      x,\n      y,\n      dx: type === 'start' ? 15 : -15,\n      fontSize: 16,\n      fill: 'gray',\n      textBaseline: 'middle',\n      textAlign: type,\n    };\n    const style = subStyleProps(attributes, key);\n    const text = style.text;\n    this.upsert(`label-${type}`, 'text', text ? { ...fontStyle, ...style } : false, container);\n  }\n}\n\nregister(ExtensionCategory.EDGE, 'extra-label-edge', LabelEdge);\n\nconst graph = new Graph({\n  container: 'container',\n  height: 200,\n  data: {\n    nodes: [\n      { id: 'node-0', style: { x: 100, y: 100 } },\n      { id: 'node-1', style: { x: 300, y: 100 } },\n    ],\n    edges: [{ source: 'node-0', target: 'node-1' }],\n  },\n  edge: {\n    type: 'extra-label-edge',\n    style: {\n      startArrow: true,\n      endArrow: true,\n      stroke: '#F6BD16',\n      startLabelText: 'start',\n      endLabelText: 'end',\n    },\n  },\n  behaviors: ['drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 78,
        "tocIndex": 21
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
//# sourceMappingURL=docs_manual_element_edge_custom-edge_en_md_q_hK4X-async.js.map