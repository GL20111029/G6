((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/theme.zh.md?type=text'],
{ "docs/api/theme.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/theme.zh.md?watch=parent");
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
        "value": "获取主题",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "getTheme(): ThemeOptions;\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "相关参数",
        "paraId": 2
    },
    {
        "value": "返回值",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "类型：",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " false | 'light' | 'dark' | string",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "描述：",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " 当前主题",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "设置主题",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "setTheme(theme: ThemeOptions | ((prev: ThemeOptions) => ThemeOptions)): void;\n",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "示例",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "graph.setTheme('dark');\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "相关参数",
        "paraId": 2
    },
    {
        "value": "参数",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": "theme",
        "paraId": 13,
        "tocIndex": 2
    },
    {
        "value": "false | 'light' | 'dark' | string | ((prev: false | 'light' | 'dark' | string) => false | 'light' | 'dark' | string)",
        "paraId": 14,
        "tocIndex": 2
    },
    {
        "value": "主题名",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "返回值",
        "paraId": 16,
        "tocIndex": 2
    },
    {
        "value": "：",
        "paraId": 16,
        "tocIndex": 2
    },
    {
        "value": "类型：",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": " void",
        "paraId": 17,
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
//# sourceMappingURL=docs_api_theme_zh_md_q_hK4X-async.js.map