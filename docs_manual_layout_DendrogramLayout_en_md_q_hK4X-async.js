((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/DendrogramLayout.en.md?type=text'],
{ "docs/manual/layout/DendrogramLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/DendrogramLayout.en.md?watch=parent");
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
        "value": "The dendrogram layout is suitable for visualizing hierarchical clustering data. Its feature is that all child nodes are laid out on the same level, node size is not considered, and each node is treated as 1px.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'dendrogram',\n    direction: 'LR',\n    nodeSep: 30,\n    rankSep: 250,\n    radial: false,\n  },\n});\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Layout type",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "dendrogram",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "direction",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Layout direction, ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "options",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "RL",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "TB",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "BT",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "H",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "V",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "nodeSep",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Node spacing, distance between nodes on the same level",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "20",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "rankSep",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Rank spacing, distance between different levels",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "200",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "radial",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Whether to enable radial layout, ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "see below",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Tree layout direction options:",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "TB",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": ": Root at the top, layout downward",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": ": Root at the bottom, layout upward",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": ": Root at the left, layout to the right",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "RL",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": ": Root at the right, layout to the left",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "H",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ": Root in the middle, horizontal symmetric layout",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "V",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": ": Root in the middle, vertical symmetric layout",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Whether to enable radial layout mode. When enabled, nodes are distributed radially around the root node.",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "If ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "radial",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " is set to ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": ", it is recommended to set ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "direction",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " to ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "'LR'",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " or ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "'RL'",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " for best results.",
        "paraId": 13,
        "tocIndex": 4
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
//# sourceMappingURL=docs_manual_layout_DendrogramLayout_en_md_q_hK4X-async.js.map