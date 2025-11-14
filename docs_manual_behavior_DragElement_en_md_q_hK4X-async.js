((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/DragElement.en.md?type=text'],
{ "docs/manual/behavior/DragElement.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/DragElement.en.md?watch=parent");
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
        "value": "DragElement is a built-in behavior in G6 for implementing ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "element dragging",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " functionality. It has the following core features:",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Support for multiple element types",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": Supports dragging of both nodes and combos simultaneously",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Intelligent multi-selection",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": Supports dragging multiple selected elements at the same time",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Visual feedback",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": Provides various visual feedback mechanisms such as ghost nodes, edge visibility, mouse styles, etc.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Flexible drag effects",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": Supports various drag operation effects such as move, link, free drag, etc.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Parent-child relationship handling",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": Automatically handles element hierarchy during dragging, especially when dealing with combo structures",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', combo: 'combo1', style: { x: 250, y: 150 } },\n        { id: 'node2', combo: 'combo1', style: { x: 350, y: 150 } },\n        { id: 'node3', combo: 'combo2', style: { x: 250, y: 300 } },\n      ],\n      edges: [],\n      combos: [\n        { id: 'combo1', combo: 'combo2' },\n        { id: 'combo2', style: {} },\n      ],\n    },\n    node: { style: { fill: '#873bf4' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    behaviors: [\n      {\n        type: 'drag-element',\n        key: 'drag-element',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      key: 'drag-element',\n      type: 'drag-element',\n      animation: true,\n      enable: 'node,combo',\n      dropEffect: 'move',\n      state: 'selected',\n      hideEdge: 'none',\n      shadow: false,\n    };\n    const optionFolder = gui.addFolder('DragElement Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable', {\n      'node,combo': (event) => ['node', 'combo'].includes(event.targetType),\n      node: (event) => ['node'].includes(event.targetType),\n      combo: (event) => ['combo'].includes(event.targetType),\n      none: false,\n    });\n    optionFolder.add(options, 'dropEffect', ['link', 'move', 'none']);\n    optionFolder.add(options, 'hideEdge', ['none', 'all', 'in', 'out', 'both']);\n    optionFolder.add(options, 'shadow');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'drag-element',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Add this behavior in the graph configuration:",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "1. Quick Configuration (Static)",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Declare directly using a string form. This method is simple but only supports default configuration and cannot be dynamically modified after configuration:",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['drag-element'],\n});\n",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "2. Object Configuration (Recommended)",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Configure using an object form, supporting custom parameters, and can dynamically update the configuration at runtime:",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'drag-element',\n      key: 'drag-element-1',\n      enableAnimation: true,\n      dropEffect: 'move',\n      shadow: true, // Enable ghost node\n    },\n  ],\n});\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Option",
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
        "value": "Behavior type name",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "drag-element",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "key",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Unique identifier for the behavior, used for subsequent operations",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "enable",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Whether to enable the drag function, by default nodes and combos can be dragged",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "boolean | ((event: IElementDragEvent) => boolean)",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "['node', 'combo'].includes(event.targetType)",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "animation",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Whether to enable drag animation",
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
        "value": "state",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Identifier for the selected state of nodes, when multi-selection is enabled, it will find the selected nodes based on this state",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "selected",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "dropEffect",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Defines the operation effect after dragging ends, optional values are: ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "link",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ": Set the dragged element as a child of the target element ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "move",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ": Move the element and automatically update the size of the parent element (such as combo) ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "none",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ": Only update the position of the drag target without performing other operations",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "link",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "move",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "none",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "move",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "hideEdge",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Controls the display state of edges during dragging, optional values are: ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "none",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ": Do not hide any edges ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "out",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ": Hide edges with the current node as the source node ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "in",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ": Hide edges with the current node as the target node ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "both",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ": Hide all edges related to the current node ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "all",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ": Hide all edges in the graph ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "⚠️ Note: When ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "shadow",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " (ghost node) is enabled, the ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "hideEdge",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " configuration will not take effect.",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "none",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "all",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "in",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "out",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "both",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "none",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "shadow",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Whether to enable ghost nodes, which use a shape to follow the mouse movement. ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Customize ghost node style",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " ⚠️Note: React nodes do not support enabling",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "cursor",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Customize the mouse style during dragging, ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "configuration options",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "{ default?: Cursor; grab: Cursor; grabbing: Cursor }",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "cursor",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " is used to customize the mouse pointer style during dragging:",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "default",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": ": Pointer style in default state",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "grab",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": ": Pointer style when hovering over a draggable element",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "grabbing",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": ": Pointer style when dragging",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Optional values are: ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "auto",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "default",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "none",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "context-menu",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "help",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "pointer",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "progress",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "wait",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "cell",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "crosshair",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "text",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "vertical-text",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "alias",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "copy",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "move",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "no-drop",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "not-allowed",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "grab",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "grabbing",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "all-scroll",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "col-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "row-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "n-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "e-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "s-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "w-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "ne-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "nw-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "se-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "sw-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "ew-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "ns-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "nesw-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "nwse-resize",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "zoom-in",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "zoom-out",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Example configuration:",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "cursor: {\n  default: 'default',    // Use normal pointer by default\n  grab: 'grab',         // Show grab pointer when draggable\n  grabbing: 'grabbing'  // Show grabbing pointer when dragging\n}\n",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "When ",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "shadow: true",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": " is enabled, you can customize the style of the ghost node with the following properties:",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "Option",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Default",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowFill",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node fill color",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "#F3F9FF",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowFillOpacity",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node fill color opacity",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "0.5",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowStroke",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node stroke color",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "#1890FF",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowStrokeOpacity",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node stroke opacity",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "0.9",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowLineDash",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node dash configuration",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "number[]",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "[5, 5]",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowZIndex",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node rendering level",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "100",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowWidth",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node width",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Width of the target element's bounding box",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowHeight",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node height",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Height of the target element's bounding box",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowOpacity",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Overall opacity of the ghost node",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowLineWidth",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node line width",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowLineCap",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node line cap style",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'butt'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'round'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'square'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowLineJoin",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node line join style",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'miter'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'round'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'bevel'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowLineDashOffset",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node dash offset",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowCursor",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node mouse style",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "shadowVisibility",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Ghost node visibility",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'visible'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "'hidden'",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Example configuration:",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "{\n  type: 'drag-element',\n  shadow: true,\n  // Customize ghost node style\n  shadowFill: '#E8F3FF',\n  shadowFillOpacity: 0.4,\n  shadowStroke: '#1890FF',\n  shadowStrokeOpacity: 0.8,\n  shadowLineDash: [4, 4],\n  shadowZIndex: 99\n}\n",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "Note: The ghost node style inherits from ",
        "paraId": 22,
        "tocIndex": 5
    },
    {
        "value": "BaseStyleProps",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": ", the above configuration items are obtained by adding the ",
        "paraId": 22,
        "tocIndex": 5
    },
    {
        "value": "shadow",
        "paraId": 22,
        "tocIndex": 5
    },
    {
        "value": " prefix to the property name.",
        "paraId": 22,
        "tocIndex": 5
    },
    {
        "value": "Need to cooperate with the ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "click-select",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " behavior to achieve multi-selection, and then associate the selected state through the ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "state",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " parameter:",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  behaviors: [\n    {\n      type: 'click-select',\n      multiple: true,\n      state: 'selected',\n    },\n    {\n      type: 'drag-element',\n      state: 'selected', // All nodes in the selected state will be moved simultaneously during dragging\n    },\n  ],\n});\n",
        "paraId": 25,
        "tocIndex": 7
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
//# sourceMappingURL=docs_manual_behavior_DragElement_en_md_q_hK4X-async.js.map