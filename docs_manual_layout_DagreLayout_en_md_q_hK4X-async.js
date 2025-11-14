((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/DagreLayout.en.md?type=text'],
{ "docs/manual/layout/DagreLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/DagreLayout.en.md?watch=parent");
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
        "value": "Dagre is a hierarchical layout suitable for directed acyclic graphs (DAGs). It can automatically handle the direction and spacing between nodes and supports both horizontal and vertical layouts. See more Dagre layout ",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "examples",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "source code",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": ", and ",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "official documentation",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": ".",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'dagre',\n    rankdir: 'TB',\n    align: 'UL',\n    nodesep: 50,\n    ranksep: 50,\n    controlPoints: false,\n  },\n});\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "For more options, refer to the ",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "official documentation",
        "paraId": 3,
        "tocIndex": 3
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
        "value": "dagre",
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
        "value": "rankdir",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Layout direction, options",
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
        "value": "TB",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "align",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Node alignment, options",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "UL",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "UR",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "DL",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "DR",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "UL",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "nodesep",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Node spacing (px). For ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "TB",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " or ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ", it's the horizontal spacing; for ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " or ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "RL",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ", it's the vertical spacing",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "50",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "ranksep",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Rank spacing (px). For ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "TB",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " or ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ", it's the vertical spacing between ranks; for ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " or ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "RL",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ", it's the horizontal spacing between ranks",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "100",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "ranker",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Algorithm for assigning ranks to nodes: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "longest-path",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ", ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "tight-tree",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ", or ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "network-simplex",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "network-simplex",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "tight-tree",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "longest-path",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "network-simplex",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "nodeSize",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "G6 custom property, specify node size for all or each node. If a single number, width and height are the same; if array: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "[width, height]",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number | number[] | () => (number | number[])",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "controlPoints",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Whether to retain edge control points",
        "paraId": 4,
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
        "value": "TB",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "BT",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "LR",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "RL",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ": ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "TB",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Layout direction",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "TB",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": ": Top to Bottom;",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "BT",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": ": Bottom to Top;",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "LR",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ": Left to Right;",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "RL",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": ": Right to Left.",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "UL",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "UR",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "DL",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "DR",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": ", ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "Default",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": ": ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "UL",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "Node alignment",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "UL",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": ": Upper Left",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "UR",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": ": Upper Right",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "DL",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": ": Down Left",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "DR",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": ": Down Right",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "number, ",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": ": 50",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Node spacing (px). For ",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "TB",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": " or ",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "BT",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": ", it's the horizontal spacing; for ",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "LR",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": " or ",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "RL",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": ", it's the vertical spacing",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "number, ",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": ": 50",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Rank spacing (px). For ",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "TB",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": " or ",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "BT",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": ", it's the vertical spacing between ranks; for ",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "LR",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": " or ",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "RL",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": ", it's the horizontal spacing between ranks",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "network-simplex",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "tight-tree",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "longest-path",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": ", ",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "Default",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": ": ",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "network-simplex",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "Algorithm for assigning ranks to nodes, supports three algorithms:",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "longest-path",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": Uses DFS to recursively find the longest path for each node. Simple and fast, but may result in many long edges.",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "tight-tree",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": An optimization algorithm to reduce the number of long edges. It first uses ",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "longest-path",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": " to compute initial ranks, then adjusts slack edges to build a feasible tree.",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "network-simplex",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ": Based on ",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "A Technique for Drawing Directed Graphs",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": ", iteratively modifies node ranks to minimize slack edges.",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "number | number[] | () => (number | number[])",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "G6 custom property, specify node size for all or each node. If a single number, width and height are the same; if array: ",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "[width, height]",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "(d) => {\n  // d is a node\n  if (d.id === 'testId') return 20;\n  return [10, 20];\n};\n",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "boolean, ",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Default",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": ": false",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Whether to retain edge control points.",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "Flowcharts",
        "paraId": 26,
        "tocIndex": 11
    },
    {
        "value": ": Suitable for displaying flowcharts, automatically handling direction and spacing between nodes.",
        "paraId": 26,
        "tocIndex": 11
    },
    {
        "value": "Dependency Graphs",
        "paraId": 26,
        "tocIndex": 11
    },
    {
        "value": ": Display dependencies between packages or modules.",
        "paraId": 26,
        "tocIndex": 11
    },
    {
        "value": "Task Scheduling Graphs",
        "paraId": 26,
        "tocIndex": 11
    },
    {
        "value": ": Show dependencies and execution order between tasks.",
        "paraId": 26,
        "tocIndex": 11
    },
    {
        "value": "The following documents can help you better understand Dagre layout",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "Graph Layout Algorithms｜Detailed Dagre Layout",
        "paraId": 28,
        "tocIndex": 12
    },
    {
        "value": "In-depth Interpretation of Dagre Layout Algorithm",
        "paraId": 28,
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
//# sourceMappingURL=docs_manual_layout_DagreLayout_en_md_q_hK4X-async.js.map