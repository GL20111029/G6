((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/introduction.en.md?type=text'],
{ "docs/manual/introduction.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/introduction.en.md?watch=parent");
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
        "value": "G6 is a graph visualization engine. It provides capabilities for graph drawing, layout, analysis, interaction, animation, and other aspects of graph visualization. It aims to offer developers a set of tools that are easy to use, professionally reliable, and highly customizable for graph visualization development.",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "Built-in 10+ elements to meet the needs of common scenarios.",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Built-in 10+ interactions that can be freely combined according to different scenarios.",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "High-performance layouts, built-in 10+ common graph layouts, with support for WebGPU and WASM computational acceleration.",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Supports 3D elements and layouts to create immersive graph visualization scenarios.",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "Elements, layouts, interactions, and plugins are all customizable, enabling every creative idea you have.",
        "paraId": 5,
        "tocIndex": 7
    },
    {
        "value": "Click to enter 👉 ",
        "paraId": 6,
        "tocIndex": 8
    },
    {
        "value": "Quick Start",
        "paraId": 7,
        "tocIndex": 8
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
//# sourceMappingURL=docs_manual_introduction_en_md_q_hK4X-async.js.map