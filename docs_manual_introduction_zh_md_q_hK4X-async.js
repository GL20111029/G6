((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/introduction.zh.md?type=text'],
{ "docs/manual/introduction.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/introduction.zh.md?watch=parent");
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
        "value": "G6 是一个图可视化引擎。它提供了图的绘制、布局、分析、交互、动画等图可视化能力。旨在为开发者提供一套简单易用、专业可靠、可高度定制的图可视化开发工具",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "内置 10+ 元素，满足常规场景需求",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "内置 10+ 交互，并可根据不同场景自由组合",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "高性能布局，内置 10+ 常用的图布局，支持 WebGPU、 WASM 计算加速",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "支持 3D 元素、布局，打造沉浸式的图可视化场景",
        "paraId": 4,
        "tocIndex": 6
    },
    {
        "value": "元素、布局、交互、插件统统可定制，实现你的每一个创意",
        "paraId": 5,
        "tocIndex": 7
    },
    {
        "value": "点击进入👉 ",
        "paraId": 6,
        "tocIndex": 8
    },
    {
        "value": "快速开始",
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
//# sourceMappingURL=docs_manual_introduction_zh_md_q_hK4X-async.js.map