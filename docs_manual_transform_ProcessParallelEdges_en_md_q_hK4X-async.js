((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/transform/ProcessParallelEdges.en.md?type=text'],
{ "docs/manual/transform/ProcessParallelEdges.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/transform/ProcessParallelEdges.en.md?watch=parent");
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
        "value": "Parallel Edges refer to multiple edges existing between two nodes in a graph structure. These edges share the same source and target nodes but may represent different relationships or attributes. To avoid edge overlap and confusion, two methods are provided for handling parallel edges: (1) Bundle Mode: Bundles parallel edges together and separates them from other edges by altering their curvature; (2) Merge Mode: Merges parallel edges into a single aggregated edge.",
        "paraId": 0
    },
    {
        "value": "number",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "The distance between edges, only valid for bundling mode",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "string[]",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "The edges to be handled, all edges by default",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "'bundle' | 'merge'",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Default:",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "'bundle'",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Processing mode",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "'",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "merge",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "': Merge parallel edges into one edge which is suitable for cases where parallel edges do not need to be distinguished",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "'",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "bundle",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "': Each edge will be bundled with all other parallel edges and separated from them by varying the curvature. If the number of parallel edges in a group is odd, the central edge will be drawn as a straight line, and the others will be drawn as curves",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "PathStyleProps",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "| ((prev:",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "[]) =>",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "PathStyleProps)",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "The style of the merged edge, only valid for merging mode",
        "paraId": 12,
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
//# sourceMappingURL=docs_manual_transform_ProcessParallelEdges_en_md_q_hK4X-async.js.map