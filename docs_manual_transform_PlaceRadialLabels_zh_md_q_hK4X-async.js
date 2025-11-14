((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/transform/PlaceRadialLabels.zh.md?type=text'],
{ "docs/manual/transform/PlaceRadialLabels.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/transform/PlaceRadialLabels.zh.md?watch=parent");
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
        "value": "参考示例",
        "paraId": 0
    },
    {
        "value": "：",
        "paraId": 0
    },
    {
        "value": "径向生态树",
        "paraId": 1
    },
    {
        "value": "径向紧凑树",
        "paraId": 2
    },
    {
        "value": "place-radial-labels",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " | string",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "此数据处理已内置，你可以通过 ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "type: 'place-radial-labels'",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " 来使用它。",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "偏移量",
        "paraId": 6,
        "tocIndex": 2
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
//# sourceMappingURL=docs_manual_transform_PlaceRadialLabels_zh_md_q_hK4X-async.js.map