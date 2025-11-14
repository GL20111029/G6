((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/theme/custom-palette.zh.md?type=text'],
{ "docs/manual/theme/custom-palette.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/theme/custom-palette.zh.md?watch=parent");
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
        "value": "色板",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 中提到，G6 支持离散色板和连续色板，其中离散色板本质上是一个颜色数组，而连续色板是一个颜色插值器。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "因此自定义色板也采用这两种方式，下面分别介绍如何自定义离散色板和连续色板。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "直接定义一个包含颜色值的字符串数组即可，颜值值支持：RGB 色值、16 进制、颜色名，下面是一组离散色板示例：",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "const hex = ['#FF0000', '#00FF00', '#0000FF'];\n\nconst color = ['red', 'green', 'blue'];\n\nconst rgb = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'];\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "连续色板需要定义一个颜色插值器，插值器是一个函数，接受一个数值参数，返回一个颜色值，下面是一个连续色板示例：",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "const color = (value: number) => `rgb(${value * 255}, 0, 0)`;\n",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "通过 G6 提供的 register 方法注册即可，详见",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "注册色板",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "除此之外，你也可以在需要使用色板的位置跳过注册机制直接传入色板值，例如：",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "{\n  node: {\n    palette: {\n      type: 'group',\n      field: 'category',\n      color: ['#5B8FF9', '#61DDAA', '#F6BD16'], // 传入颜色数组\n    }\n  },\n  edge: {\n    palette: {\n      type: 'value',\n      field: 'value',\n      color: (value) => `rgb(${value * 255}, 0, 0)`, // 传入插值器\n    }\n  }\n}\n",
        "paraId": 10,
        "tocIndex": 5
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
//# sourceMappingURL=docs_manual_theme_custom-palette_zh_md_q_hK4X-async.js.map