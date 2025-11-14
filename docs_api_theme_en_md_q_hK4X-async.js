((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/theme.en.md?type=text'],
{ "docs/api/theme.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/theme.en.md?watch=parent");
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
        "value": "G6 allows users to customize the appearance of graphs through themes. Themes can be used to define colors, shapes, and styles for nodes, edges, and other graph elements.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Get the theme",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "getTheme(): ThemeOptions;\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Related Parameters",
        "paraId": 3
    },
    {
        "value": "Return Value",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Type:",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": " false | 'light' | 'dark' | string",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Description:",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": " Current theme",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Set the theme",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "setTheme(theme: ThemeOptions | ((prev: ThemeOptions) => ThemeOptions)): void;\n",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Example",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "graph.setTheme('dark');\n",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Related Parameters",
        "paraId": 3
    },
    {
        "value": "Parameter",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "theme",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "false | 'light' | 'dark' | string | ((prev: false | 'light' | 'dark' | string) => false | 'light' | 'dark' | string)",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Theme name",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "Return Value",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "Type:",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": " void",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "type ThemeOptions = {\n  // Colors used in the theme\n  colors: string[];\n\n  // Node style settings\n  nodeStyle?: {\n    fill: string;\n    stroke: string;\n  };\n\n  // Edge style settings\n  edgeStyle?: {\n    stroke: string;\n  };\n\n  // Additional configuration options for the theme\n  [configKey: string]: any;\n};\n",
        "paraId": 19,
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
//# sourceMappingURL=docs_api_theme_en_md_q_hK4X-async.js.map