((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/IndentedLayout.en.md?type=text'],
{ "docs/manual/layout/IndentedLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/IndentedLayout.en.md?watch=parent");
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
        "value": "Indented tree layout represents the hierarchy of tree nodes through indentation in the horizontal direction. Each element occupies a row or column, commonly used in file directory structures, organizational charts, and other scenarios. This layout provides a clear structure for displaying hierarchical relationships.",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "File directory structure visualization",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Organizational charts",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Classification system display",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Tree-like data where hierarchical relationships need to be emphasized",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "IndentedLayout supports common layout configuration items and specific configuration items, as shown below.",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Layout type, must be 'indented'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'indented'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "direction",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Layout direction, see details below",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'LR' | 'RL' | 'H'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "'LR'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "indent",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Column spacing, fixed value or function",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "number | (d?: Node) => number",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "20",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "getWidth",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Get each node's width, effective when direction='H'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "getHeight",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Get each node's height",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "getSide",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Node placement on left/right side of root, overrides direction='H'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "(d?: Node) => 'left' | 'right'",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "dropCap",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Whether the first child of each node starts on the next line",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "isLayoutInvisibleNodes",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Whether invisible nodes participate in layout (when preLayout=true)",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "nodeFilter",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Nodes participating in this layout",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "(node: NodeData) => boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "() => true",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "preLayout",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Use pre-layout, calculate layout before initializing elements",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "enableWorker",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Whether to run layout in WebWorker",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "iterations",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "Number of iterations for iterative layout",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "direction",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "'LR'",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ": Root node on the left, layout to the right\n",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "'RL'",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ": Root node on the right, layout to the left\n",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "'H'",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ": Root node in the middle, horizontal symmetric layout\n",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "indent",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Fixed value: Consistent indentation for all levels",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Function: (d?: Node) => number, customize indentation based on node",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Example:\n",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "(d) => {\n  if (d.parent?.id === 'testId') return d.parent.x + 50;\n  return 100;\n};\n",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "getWidth/getHeight",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "Used to customize each node's width/height, often for content adaptation",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Example:\n",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "(d) => (d.id === 'testId' ? 50 : 100);\n",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "getSide",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "Specifies which side of the root node a node should be placed, only effective when direction='H'",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "Example:\n",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "(d) => (d.id === 'testId' ? 'left' : 'right');\n",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "For more examples, see ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "Online Demo",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "import { Graph, treeToGraphData } from '@antv/g6';\n\nfetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      data: treeToGraphData(data),\n      autoFit: 'view',\n      layout: {\n        type: 'indented',\n        direction: 'H',\n        indent: 80,\n        getHeight: () => 16,\n        getWidth: () => 32,\n      },\n    });\n    graph.render();\n  });\n",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "// ... code as above, layout.direction: 'LR'\n",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "// ... code as above, layout.direction: 'RL'\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "layout: {\n  type: 'indented',\n  direction: 'H',\n  indent: 80,\n  getHeight: () => 16,\n  getWidth: () => 32,\n  getSide: (d) => {\n    if (d.id === 'Regression' || d.id === 'Classification') return 'left';\n    return 'right';\n  },\n}\n",
        "paraId": 19,
        "tocIndex": 9
    },
    {
        "value": "layout: {\n  type: 'indented',\n  direction: 'LR',\n  indent: 80,\n  getHeight: () => 16,\n  getWidth: () => 32,\n  dropCap: false,\n}\n",
        "paraId": 20,
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
//# sourceMappingURL=docs_manual_layout_IndentedLayout_en_md_q_hK4X-async.js.map