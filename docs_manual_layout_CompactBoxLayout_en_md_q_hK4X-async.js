((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/CompactBoxLayout.en.md?type=text'],
{ "docs/manual/layout/CompactBoxLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/CompactBoxLayout.en.md?watch=parent");
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
        "value": "The CompactBox layout is suitable for visualizing structured tree data. It is evolved from the classic ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Reingold–Tilford tidy layout algorithm",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ", and considers the bounding box of each tree node during layout, effectively maintaining the compactness and hierarchical clarity of the tree structure. See more CompactBox layout ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "examples",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " and ",
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
        "value": "Decision trees: The compact tree layout can visually and intuitively display each decision path.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Knowledge graphs: Show hierarchical relationships and connections between concepts. The compact layout can present complex knowledge networks in limited space.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'compact-box',\n    direction: 'LR',\n    getHeight: () => 16,\n    getWidth: () => 16,\n    getVGap: () => 16,\n    getHGap: () => 40,\n  },\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Property",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Layout type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "compact-box",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "direction",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Layout direction, ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "options",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "RL",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "TB",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "H",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "V",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getSide",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Set whether the node is on the left or right of the root. Only works for ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "H",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " direction. ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "See below",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "(d: { data?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " }) => string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getId",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Callback for node id",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": ") => string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getWidth",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Callback for node width",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": ") => number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getHeight",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Callback for node height",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ") => number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getHGap",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Callback for horizontal gap",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": ") => number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getVGap",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Callback for vertical gap",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": ") => number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "radial",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Whether to enable radial layout, ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "see below",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "RL",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "TB",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "BT",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "H",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "V",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Default:",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "LR",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Tree layout direction",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "TB",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": ": Root at the top, layout downwards",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "BT",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": ": Root at the bottom, layout upwards",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "LR",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": ": Root at the left, layout to the right",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "RL",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": ": Root at the right, layout to the left",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "H",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": ": Root in the middle, horizontal symmetric layout. You can use ",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "getSide",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": " to specify the left/right logic for each node",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "V",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": ": Root in the middle, vertical symmetric layout",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "(d: { data?: ",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "NodeData",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": " }) => string",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "Set whether the node is on the left or right of the root. Only works for ",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "H",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": " direction. If not set, the algorithm will automatically assign left/right. See ",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "getSide auto logic",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": ".",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Example:",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "({ data }) => {\n  // data is a node\n  if (data.id === 'test-child-id') return 'right';\n  return 'left';\n};\n",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "(d?: ",
        "paraId": 22,
        "tocIndex": 6
    },
    {
        "value": "NodeData",
        "paraId": 23,
        "tocIndex": 6
    },
    {
        "value": ") => string",
        "paraId": 22,
        "tocIndex": 6
    },
    {
        "value": "Callback for node id",
        "paraId": 24,
        "tocIndex": 6
    },
    {
        "value": "Example:",
        "paraId": 25,
        "tocIndex": 6
    },
    {
        "value": "(d) => {\n  // d is a node\n  return d.id + '_node';\n};\n",
        "paraId": 26,
        "tocIndex": 6
    },
    {
        "value": "(d?: ",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "NodeData",
        "paraId": 28,
        "tocIndex": 7
    },
    {
        "value": ") => number",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "Callback for node width",
        "paraId": 29,
        "tocIndex": 7
    },
    {
        "value": "Example:",
        "paraId": 30,
        "tocIndex": 7
    },
    {
        "value": "(d) => {\n  // d is a node\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "(d?: ",
        "paraId": 32,
        "tocIndex": 8
    },
    {
        "value": "NodeData",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": ") => number",
        "paraId": 32,
        "tocIndex": 8
    },
    {
        "value": "Callback for node height",
        "paraId": 34,
        "tocIndex": 8
    },
    {
        "value": "Example:",
        "paraId": 35,
        "tocIndex": 8
    },
    {
        "value": "(d) => {\n  // d is a node\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 36,
        "tocIndex": 8
    },
    {
        "value": "(d?: ",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "NodeData",
        "paraId": 38,
        "tocIndex": 9
    },
    {
        "value": ") => number",
        "paraId": 37,
        "tocIndex": 9
    },
    {
        "value": "Callback for horizontal gap",
        "paraId": 39,
        "tocIndex": 9
    },
    {
        "value": "Example:",
        "paraId": 40,
        "tocIndex": 9
    },
    {
        "value": "(d) => {\n  // d is a node\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 41,
        "tocIndex": 9
    },
    {
        "value": "(d?: ",
        "paraId": 42,
        "tocIndex": 10
    },
    {
        "value": "NodeData",
        "paraId": 43,
        "tocIndex": 10
    },
    {
        "value": ") => number",
        "paraId": 42,
        "tocIndex": 10
    },
    {
        "value": "Callback for vertical gap",
        "paraId": 44,
        "tocIndex": 10
    },
    {
        "value": "Example:",
        "paraId": 45,
        "tocIndex": 10
    },
    {
        "value": "(d) => {\n  // d is a node\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "boolean",
        "paraId": 47,
        "tocIndex": 11
    },
    {
        "value": "Whether to use radial layout. If ",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": "radial",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": " is ",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": "true",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": ", it is recommended to set ",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": "direction",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": " to ",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": "'LR'",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": " or ",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": "'RL'",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": ".",
        "paraId": 48,
        "tocIndex": 11
    },
    {
        "value": "import { Graph, treeToGraphData } from '@antv/g6';\n\n/**\n * If the node is a leaf node\n * @param {*} d - node data\n * @returns {boolean} - whether the node is a leaf node\n */\nfunction isLeafNode(d) {\n  return !d.children || d.children.length === 0;\n}\n\nfetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      autoFit: 'view',\n      data: treeToGraphData(data),\n      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element', 'collapse-expand'],\n      node: {\n        style: {\n          labelText: (d) => d.id,\n          labelPlacement: (d) => (isLeafNode(d) ? 'right' : 'left'),\n          labelBackground: true,\n          ports: [{ placement: 'right' }, { placement: 'left' }],\n        },\n        animation: {\n          enter: false,\n        },\n      },\n      edge: {\n        type: 'cubic-horizontal',\n        animation: {\n          enter: false,\n        },\n      },\n      layout: {\n        type: 'compact-box',\n        direction: 'LR',\n        getHeight: function getHeight() {\n          return 32;\n        },\n        getWidth: function getWidth() {\n          return 32;\n        },\n        getVGap: function getVGap() {\n          return 10;\n        },\n        getHGap: function getHGap() {\n          return 100;\n        },\n      },\n    });\n\n    graph.render();\n  });\n",
        "paraId": 49,
        "tocIndex": 12
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
//# sourceMappingURL=docs_manual_layout_CompactBoxLayout_en_md_q_hK4X-async.js.map