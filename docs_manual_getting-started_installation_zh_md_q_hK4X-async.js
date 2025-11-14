((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/getting-started/installation.zh.md?type=text'],
{ "docs/manual/getting-started/installation.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/getting-started/installation.zh.md?watch=parent");
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
        "value": "# npm\nnpm install @antv/g6 --save\n\n# pnpm\npnpm add @antv/g6\n\n# yarn\nyarn add @antv/g6\n",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "在代码中引入 G6：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { Graph } from '@antv/g6';\n",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "访问 ",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "G6 npm 示例",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " 查看完整示例代码。",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "@antv/g6",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " 在多个 CDN 上提供：",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "unpkg: ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "https://unpkg.com/@antv/g6@latest/dist/g6.min.js",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "jsDelivr: ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "https://cdn.jsdelivr.net/npm/@antv/g6@5/dist/g6.min.js",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "npmmirror: ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "https://registry.npmmirror.com/@antv/g6/5/files/dist/g6.min.js",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "使用 ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "script",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 标签引入 G6：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "<script src=\"https://unpkg.com/@antv/g6@5/dist/g6.min.js\"></script>\n",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "访问 ",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "G6 CDN 示例",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": " 查看完整示例代码。",
        "paraId": 8,
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
//# sourceMappingURL=docs_manual_getting-started_installation_zh_md_q_hK4X-async.js.map