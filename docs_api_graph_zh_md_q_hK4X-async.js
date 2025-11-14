((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/graph.zh.md?type=text'],
{ "docs/api/graph.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/graph.zh.md?watch=parent");
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
        "value": "销毁当前图实例，释放与图实例相关的所有资源。",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "⚠️ ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "注意",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": ": 销毁后无法进行任何操作，如果需要重新使用，需要重新创建一个新的图实例。",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "destroy(): void;\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "使用场景",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ":",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "当用户关闭图表或切换到其他视图时，可以调用此方法来释放资源。",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "在需要重新创建图实例时，确保先销毁旧的实例，以避免内存泄漏。",
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
//# sourceMappingURL=docs_api_graph_zh_md_q_hK4X-async.js.map