((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/MindmapLayout.en.md?type=text'],
{ "docs/manual/layout/MindmapLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/MindmapLayout.en.md?watch=parent");
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
        "value": "The mindmap tree layout is suitable for hierarchical layouts of tree structures, supporting expansion on both left and right sides. Nodes at the same depth will be placed on the same layer. Note: the layout ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "does",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " take node size into account. See more mindmap layout ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "examples",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " or ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "source code",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ".",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'mindmap',\n    direction: 'H',\n    preLayout: false,\n    getHeight: () => 32,\n    getWidth: () => 32,\n    getVGap: () => 16,\n    getHGap: () => 72,\n  },\n});\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "mindmap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "direction",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout direction, ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "options",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "H",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "RL",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "TB",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "BT",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getHeight",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Function to calculate the height of each node",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getWidth",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Function to calculate the width of each node",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getVGap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Vertical gap for each node. Note: the actual vertical gap between two nodes is twice the vgap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getHGap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Horizontal gap for each node. Note: the actual horizontal gap between two nodes is twice the hgap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getSide",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Set whether the node is placed on the left or right of the root. Only effective when ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "direction",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " is ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "H",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => string",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "H",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "RL",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "TB",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Default:",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "'LR'",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Tree layout direction",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "'H'",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": ": horizontal — The children of the root node are divided into two parts and placed on the left and right sides of the root node. You can pass the ",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "getSide",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " method to specify the left/right distribution logic for each node. If not provided, the first half will be placed on the right, and the second half on the left by default.",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "'LR' | 'TB'",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": ": Children are placed on the right side of the root node.",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "'RL'",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": ": Children are placed on the left side of the root node.",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ": Children are placed on the right side of the root node, then the entire graph is rotated 180° along the X axis.",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Width of each node",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "Example:",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "(d) => {\n  // d is a node\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "Height of each node",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "Example:",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "(d) => {\n  // d is a node\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "Horizontal gap for each node",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": "Example:",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "(d) => {\n  // d is a node\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 22,
        "tocIndex": 6
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 23,
        "tocIndex": 7
    },
    {
        "value": "Vertical gap for each node",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Example:",
        "paraId": 25,
        "tocIndex": 7
    },
    {
        "value": "(d) => {\n  // d is a node\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 26,
        "tocIndex": 7
    },
    {
        "value": "(d?: Node) => string",
        "paraId": 27,
        "tocIndex": 8
    },
    {
        "value": "Set whether the node is placed on the left or right of the root. Note: only effective when ",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "direction",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": " is ",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "H",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": ". If not set, the first half of the children will be placed on the right, and the second half on the left by default. See ",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "getSide auto calculation logic",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": ".",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "Example:",
        "paraId": 29,
        "tocIndex": 8
    },
    {
        "value": "(d) => {\n  // d is a node\n  if (d.id === 'test-child-id') return 'right';\n  return 'left';\n};\n",
        "paraId": 30,
        "tocIndex": 8
    },
    {
        "value": "Data lineage graph: ",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "direction='H'",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": " is suitable for rendering upstream and downstream lineage of a specified node, with upstream on the left and downstream on the right of the central node.",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "Mind map: Build custom mind map components.",
        "paraId": 31,
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
//# sourceMappingURL=docs_manual_layout_MindmapLayout_en_md_q_hK4X-async.js.map