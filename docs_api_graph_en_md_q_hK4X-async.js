((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/graph.en.md?type=text'],
{ "docs/api/graph.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/graph.en.md?watch=parent");
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
        "value": "Destroy the current graph instance and release all resources related to it.",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "⚠️ ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Note",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": ": After destruction, no operations can be performed. If you need to use it again, you must create a new graph instance.",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "destroy(): void;\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Usage Scenarios",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ":",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "When the user closes the chart or switches to another view, this method can be called to release resources.",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "When needing to recreate a graph instance, ensure the old instance is destroyed first to avoid memory leaks.",
        "paraId": 4,
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
//# sourceMappingURL=docs_api_graph_en_md_q_hK4X-async.js.map