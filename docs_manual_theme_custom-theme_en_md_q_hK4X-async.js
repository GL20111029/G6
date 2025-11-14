((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/theme/custom-theme.en.md?type=text'],
{ "docs/manual/theme/custom-theme.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/theme/custom-theme.en.md?watch=parent");
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
        "value": "In G6, the theme is a subset of Graph Options and includes configurations related to the canvas and element styles. A theme can help you quickly switch between different graph styles.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "For element styles, the configurations within a theme are static and do not support the use of callback functions to dynamically calculate styles. Additionally, ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "type",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " is also not supported for configuration within a theme. A theme includes the following configurations:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "background",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ": Canvas background color",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "node",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ": Node style",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "edge",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ": Edge style",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "combo",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ": Combo style",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Below is a simple example of a theme configuration:",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "const theme = {\n  background: '#fff',\n  node: {\n    style: {\n      fill: '#e1f3fe',\n      lineWidth: 0,\n    },\n    selected: {\n      style: {\n        fill: '#3b71d6',\n        lineWidth: 1,\n      },\n    },\n  },\n  edge: {\n    // ...\n  },\n  combo: {\n    // ...\n  },\n};\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "❌ Incorrect Example",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "const theme = {\n  node: {\n    // ❌ The theme does not support configuring element types\n    type: 'rect',\n    style: {\n      // ❌ The theme does not support callback functions\n      fill: (d) => d.style.color,\n    },\n  },\n};\n",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "For element state styles, please ensure that every property in the state style has a corresponding default style in the default style, otherwise it may result in the inability to clear the state style.",
        "paraId": 7
    },
    {
        "value": "You can register a theme using the ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "register",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " method provided by G6. Here is an example:",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "import { register, ExtensionCategory } from '@antv/g6';\n\nregister(ExtensionCategory.THEME, 'custom-theme', theme);\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "To enable and configure a theme, you need to pass the ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "theme",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " option when instantiating the ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Graph",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "{\n  theme: 'custom-theme',\n}\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "After the ",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "Graph",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": " instance is created, you can switch themes by using the ",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "setTheme",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " method:",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "graph.setTheme('dark');\n",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Additionally, you can also obtain the current theme by using the ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "getTheme",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " method:",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "graph.getTheme();\n// => 'dark'\n",
        "paraId": 16,
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
//# sourceMappingURL=docs_manual_theme_custom-theme_en_md_q_hK4X-async.js.map