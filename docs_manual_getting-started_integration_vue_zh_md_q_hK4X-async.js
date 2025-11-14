((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/getting-started/integration/vue.zh.md?type=text'],
{ "docs/manual/getting-started/integration/vue.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/getting-started/integration/vue.zh.md?watch=parent");
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
        "value": "请不要将 Vue 响应式数据直接传递给 G6 实例，这可能会导致 G6 无法正确渲染，甚至导致页面崩溃。",
        "paraId": 0
    },
    {
        "value": "参考下面的示例，你可以在 Vue 中使用 G6，也可以查看 ",
        "paraId": 1
    },
    {
        "value": "在线示例",
        "paraId": 1
    },
    {
        "value": "。",
        "paraId": 1
    },
    {
        "value": "<template>\n  <div id=\"container\"></div>\n</template>\n\n<script setup>\n  import { onMounted } from 'vue';\n  import { Graph } from '@antv/g6';\n\n  onMounted(() => {\n    const graph = new Graph({\n      container: document.getElementById('container'),\n      width: 500,\n      height: 500,\n      data: {\n        nodes: [\n          {\n            id: 'node-1',\n            style: { x: 50, y: 100 },\n          },\n          {\n            id: 'node-2',\n            style: { x: 150, y: 100 },\n          },\n        ],\n        edges: [{ id: 'edge-1', source: 'node-1', target: 'node-2' }],\n      },\n    });\n\n    graph.render();\n  });\n</script>\n",
        "paraId": 2
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
//# sourceMappingURL=docs_manual_getting-started_integration_vue_zh_md_q_hK4X-async.js.map