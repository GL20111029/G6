((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/Star.zh.md?type=text'],
{ "docs/manual/element/node/Star.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/Star.zh.md?watch=parent");
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
        "value": "星形是一个多角几何形状，具有突出的角。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "适用场景：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "用于表示重要节点、特殊标记或装饰性元素。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "适合表示流程图、网络图或拓扑图。",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "常用于流程图、网络图、拓扑图等。",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "createGraph(\n  {\n    autoFit: 'center',\n    data: { nodes: [{ id: 'node1', style: { size: 40, fill: '#7e3feb' } }] },\n    node: { type: 'star' },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 220 },\n  (gui, graph) => {\n    gui.add({ type: 'star' }, 'type').disable();\n\n    const options = {\n      size: 40,\n      innerR: 0,\n    };\n    const optionFolder = gui.addFolder('star.style');\n    optionFolder.add(options, 'size', 0, 100, 1);\n    optionFolder.add(options, 'innerR', 0, 100);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateNodeData([{ id: 'node1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "设置 ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "node.type",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 为 ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "star",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 以使用星形节点。",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "如果元素有其特定的属性，我们将在下面列出。对于所有的通用样式属性，见 ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "BaseNode",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "innerR",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "内半径，是指从星形中心到内顶点的距离",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "默认为外半径的 3/8",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "结构说明：",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "import { Graph, iconfont } from '@antv/g6';\n\nconst style = document.createElement('style');\nstyle.innerHTML = `@import url('${iconfont.css}');`;\ndocument.head.appendChild(style);\n\nconst data = {\n  nodes: [\n    { id: 'default' },\n    { id: 'halo' },\n    { id: 'badges' },\n    { id: 'ports' },\n    {\n      id: 'active',\n      states: ['active'],\n    },\n    {\n      id: 'selected',\n      states: ['selected'],\n    },\n    {\n      id: 'highlight',\n      states: ['highlight'],\n    },\n    {\n      id: 'inactive',\n      states: ['inactive'],\n    },\n    {\n      id: 'disabled',\n      states: ['disabled'],\n    },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    type: 'star',\n    style: {\n      size: 40,\n      labelText: (d) => d.id,\n      iconFontFamily: 'iconfont',\n      iconText: '\\ue602',\n      halo: (d) => (d.id === 'halo' ? true : false),\n      badges: (d) =>\n        d.id === 'badges'\n          ? [\n              {\n                text: 'A',\n                placement: 'right-top',\n              },\n              {\n                text: 'Important',\n                placement: 'right',\n              },\n              {\n                text: 'Notice',\n                placement: 'right-bottom',\n              },\n            ]\n          : [],\n      badgeFontSize: 8,\n      badgePadding: [1, 4],\n      portR: 3,\n      ports: (d) =>\n        d.id === 'ports'\n          ? [{ placement: 'left' }, { placement: 'right' }, { placement: 'top' }, { placement: 'bottom' }]\n          : [],\n    },\n  },\n  layout: {\n    type: 'grid',\n  },\n});\n\ngraph.render();\n",
        "paraId": 11,
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
//# sourceMappingURL=docs_manual_element_node_Star_zh_md_q_hK4X-async.js.map