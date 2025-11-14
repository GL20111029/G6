((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/BaseLayout.en.md?type=text'],
{ "docs/manual/layout/BaseLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/BaseLayout.en.md?watch=parent");
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
        "value": "This article introduces the common attribute configurations for built-in layouts.",
        "paraId": 0
    },
    {
        "value": "Property",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Description",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Type",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Default",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Required",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "type",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Layout type, name of built-in or custom layout",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Type",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "-",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "✓",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "isLayoutInvisibleNodes",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Whether invisible nodes participate in the layout (takes effect when preLayout is true)",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "boolean",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "false",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "nodeFilter",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Nodes participating in the layout",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "(node: NodeData) => boolean",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "() => true",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "comboFilter",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Combos participating in the layout",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "(combo: ComboData) => boolean",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "() => true",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "preLayout",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Use pre-layout, calculate layout before initializing elements",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "boolean",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "false",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "enableWorker",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Whether to run the layout in a WebWorker",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "boolean",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "-",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "iterations",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Number of iterations for iterative layout",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "number",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "-",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Specifies the layout type, either the name of a built-in layout type or a custom layout.",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  layout: {\n    type: 'antv-dagre',\n  },\n});\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Optional values include:",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "antv-dagre",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Custom layout based on dagre",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "circular",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Circular layout",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "combo-combined",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Layout suitable for combinations",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "concentric",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Concentric layout",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": "d3-force",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Force-directed layout based on D3",
        "paraId": 11,
        "tocIndex": 1
    },
    {
        "value": "d3-force-3d",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "3D Force-directed layout",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "dagre",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Dagre layout",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "fishbone",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Fishbone layout",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "force",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Force-directed layout",
        "paraId": 15,
        "tocIndex": 1
    },
    {
        "value": "force-atlas2",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "ForceAtlas2 layout",
        "paraId": 16,
        "tocIndex": 1
    },
    {
        "value": "fruchterman",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Fruchterman layout",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "grid",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Grid layout",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "mds",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "MDS layout for high-dimensional data",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "radial",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Radial layout",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": "random",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Random layout",
        "paraId": 21,
        "tocIndex": 1
    },
    {
        "value": "snake",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Snake layout",
        "paraId": 22,
        "tocIndex": 1
    },
    {
        "value": "compact-box",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Compact box tree layout",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "dendrogram",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Dendrogram layout",
        "paraId": 24,
        "tocIndex": 1
    },
    {
        "value": "mindmap",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Mindmap layout",
        "paraId": 25,
        "tocIndex": 1
    },
    {
        "value": "indented",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Indented tree layout",
        "paraId": 26,
        "tocIndex": 1
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
//# sourceMappingURL=docs_manual_layout_BaseLayout_en_md_q_hK4X-async.js.map