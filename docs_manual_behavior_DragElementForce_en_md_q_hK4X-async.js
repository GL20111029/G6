((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/DragElementForce.en.md?type=text'],
{ "docs/manual/behavior/DragElementForce.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/DragElementForce.en.md?watch=parent");
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
        "value": "DragElementForce is a built-in behavior in G6 for implementing node dragging under ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "d3-force",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " and ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "d3-force-3d",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " layouts. During dragging, the layout is ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "recalculated in real-time",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ", allowing the graph layout to dynamically adjust to accommodate the new position of the nodes.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Add this behavior in the graph configuration:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "1. Quick Configuration (Static)",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Declare directly using a string form. This method is simple but only supports default configuration and cannot be dynamically modified after configuration:",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['drag-element-force'],\n});\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "2. Object Configuration (Recommended)",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Configure using an object form, supporting custom parameters, and can dynamically update the configuration at runtime:",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'drag-element-force',\n      key: 'drag-element-force-1',\n      fixed: true, // Fix node position after dragging\n    },\n  ],\n});\n",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "Option",
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
        "value": "type",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Behavior type name, set ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "type: 'drag-element-force'",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " to enable this behavior",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "drag-element-force",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "key",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Unique identifier for the behavior, used for subsequent operations",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "fixed",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Whether to keep the node position fixed after dragging ends, boolean values represent: ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- true: After dragging ends, the node's position will remain fixed and not be affected by the layout algorithm ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- false: After dragging ends, the node's position will continue to be affected by the layout algorithm",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "enable",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Whether to enable the drag function, by default nodes and combos can be dragged",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "boolean | ((event: IElementDragEvent) => boolean)",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "['node', 'combo'].includes(event.targetType)",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "state",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Identifier for the selected state of nodes, when multi-selection is enabled, it will find the selected nodes based on this state",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "selected",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "hideEdge",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Controls the display state of edges during dragging, optional values are: ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "none",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": Do not hide any edges ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "out",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": Hide edges with the current node as the source node ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "in",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": Hide edges with the current node as the target node ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "both",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": Hide all edges related to the current node ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "all",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": Hide all edges in the graph ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "⚠️ Note: When ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "shadow",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " (ghost node) is enabled, the ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "hideEdge",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " configuration will not take effect.",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "none",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "all",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "in",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "out",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "both",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "none",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "cursor",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Customize the mouse style during dragging, ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "example",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "{ default?: Cursor; grab: Cursor; grabbing: Cursor }",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "cursor",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " is used to customize the mouse pointer style during dragging:",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "default",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": ": Pointer style in default state",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "grab",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": ": Pointer style when hovering over a draggable element",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "grabbing",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": ": Pointer style when dragging",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Optional values are: ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "auto",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "default",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "none",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "context-menu",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "help",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "pointer",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "progress",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "wait",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "cell",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "crosshair",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "text",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "vertical-text",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "alias",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "copy",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "move",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "no-drop",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "not-allowed",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "grab",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "grabbing",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "all-scroll",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "col-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "row-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "n-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "e-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "s-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "w-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "ne-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "nw-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "se-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "sw-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "ew-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "ns-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "nesw-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "nwse-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "zoom-in",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "zoom-out",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Example configuration:",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "cursor: {\n  default: 'default',    // Use normal pointer by default\n  grab: 'grab',         // Show grab pointer when draggable\n  grabbing: 'grabbing'  // Show grabbing pointer when dragging\n}\n",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "DragElementForce",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " is specifically used for ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "d3-force",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " or ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "d3-force-3d",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " layouts, and recalculates the layout in real-time during dragging",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "DragElement",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " is a general drag interaction and does not trigger layout recalculation",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfunction getData(size = 10) {\n  const nodes = Array.from({ length: size * size }, (_, i) => ({ id: `${i}` }));\n  const edges = [];\n  for (let y = 0; y < size; ++y) {\n    for (let x = 0; x < size; ++x) {\n      if (y > 0) edges.push({ source: `${(y - 1) * size + x}`, target: `${y * size + x}` });\n      if (x > 0) edges.push({ source: `${y * size + (x - 1)}`, target: `${y * size + x}` });\n    }\n  }\n  return { nodes, edges };\n}\n\nconst graph = new Graph({\n  data: getData(),\n  layout: {\n    type: 'd3-force',\n    manyBody: {\n      strength: -30,\n    },\n    link: {\n      strength: 1,\n      distance: 20,\n      iterations: 10,\n    },\n  },\n  node: {\n    style: {\n      size: 10,\n      fill: '#000',\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#000',\n    },\n  },\n  behaviors: [{ type: 'drag-element-force' }, 'zoom-canvas'],\n});\n\ngraph.render();\n\nwindow.addPanel((gui) => {\n  gui.add({ msg: 'Try to drag nodes' }, 'msg').name('Tips').disable();\n});\n",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: new Array(10).fill(0).map((_, i) => ({ id: `${i}`, label: `${i}` })),\n  edges: [\n    { source: '0', target: '1' },\n    { source: '0', target: '2' },\n    { source: '0', target: '3' },\n    { source: '0', target: '4' },\n    { source: '0', target: '5' },\n    { source: '0', target: '7' },\n    { source: '0', target: '8' },\n    { source: '0', target: '9' },\n    { source: '2', target: '3' },\n    { source: '4', target: '5' },\n    { source: '4', target: '6' },\n    { source: '5', target: '6' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      labelText: (d) => d.label,\n      labelPlacement: 'middle',\n      labelFill: '#fff',\n    },\n  },\n  layout: {\n    type: 'd3-force',\n    link: {\n      distance: 100,\n      strength: 2,\n    },\n    collide: {\n      radius: 40,\n    },\n  },\n  behaviors: [\n    {\n      type: 'drag-element-force',\n      fixed: true,\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "BaseStyleProps",
        "paraId": 18
    },
    {
        "value": "An expression like icon{TextStyleProps} indicates that properties of the TextStyleProps type are prefixed with icon in camelCase format.",
        "paraId": 18
    },
    {
        "value": "TextStyleProps includes the following properties:",
        "paraId": 19,
        "tocIndex": 10
    },
    {
        "value": "fill",
        "paraId": 20,
        "tocIndex": 10
    },
    {
        "value": "fontSize",
        "paraId": 20,
        "tocIndex": 10
    },
    {
        "value": "fontWeight",
        "paraId": 20,
        "tocIndex": 10
    },
    {
        "value": "...",
        "paraId": 20,
        "tocIndex": 10
    },
    {
        "value": "icon{TextStyleProps} means you need to use the following property names:",
        "paraId": 21,
        "tocIndex": 10
    },
    {
        "value": "iconFill",
        "paraId": 22,
        "tocIndex": 10
    },
    {
        "value": "iconFontSize",
        "paraId": 22,
        "tocIndex": 10
    },
    {
        "value": "iconFontWeight",
        "paraId": 22,
        "tocIndex": 10
    },
    {
        "value": "...",
        "paraId": 22,
        "tocIndex": 10
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
//# sourceMappingURL=docs_manual_behavior_DragElementForce_en_md_q_hK4X-async.js.map