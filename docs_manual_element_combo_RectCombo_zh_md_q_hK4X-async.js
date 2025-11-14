((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/combo/RectCombo.zh.md?type=text'],
{ "docs/manual/element/combo/RectCombo.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/combo/RectCombo.zh.md?watch=parent");
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
        "value": "矩形组合以直角边界组织内容，支持严格的层级结构。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "适用场景：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "系统架构图",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "：如系统架构里面的服务分层，以及每层服务里面的细分等。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "地理区域划分",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "：如城市包含多个区域，矩形组合能直观展示行政边界或功能分区。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', combo: 'combo1', style: { x: 250, y: 150 } },\n        { id: 'node2', combo: 'combo1', style: { x: 350, y: 150 } },\n        { id: 'node3', combo: 'combo2', style: { x: 250, y: 300 } },\n      ],\n      combos: [\n        { id: 'combo1', combo: 'combo2' },\n        { id: 'combo2', style: {} },\n      ],\n    },\n    node: { style: { fill: '#7e3feb' } },\n    combo: { type: 'rect' },\n    behaviors: ['collapse-expand'],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    gui.add({ type: 'rect' }, 'type').disable();\n  },\n);\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "设置 ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "combo.type",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " 为 ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "rect",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " 以使用矩形组合。",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "如果元素有其特定的属性，我们将在下面列出。对于所有的通用样式属性，见 ",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "BaseCombo",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "以下示例为简单的微服务架构服务层：",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  autoFit: 'center',\n  data: {\n    nodes: [\n      { id: 'node1', combo: 'combo2', style: { x: 100, y: 100, labelText: '微服务1' } },\n      { id: 'node2', combo: 'combo2', style: { x: 200, y: 100, labelText: '微服务2' } },\n      { id: 'node3', combo: 'combo2', style: { x: 100, y: 200, labelText: '微服务3' } },\n      { id: 'node4', combo: 'combo2', style: { x: 200, y: 200, labelText: '微服务4' } },\n      { id: 'node5', combo: 'combo3', style: { x: 300, y: 100, labelText: '第三方登录' } },\n      { id: 'node6', combo: 'combo3', style: { x: 300, y: 150, labelText: '任务调度' } },\n      { id: 'node7', combo: 'combo3', style: { x: 300, y: 200, labelText: '消息服务' } },\n    ],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node1', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n    ],\n    combos: [\n      { id: 'combo1', style: { labelText: '服务层' } },\n      { id: 'combo2', combo: 'combo1', style: { labelText: '业务微服务' } },\n      { id: 'combo3', combo: 'combo1', style: { labelText: '集成模块' } },\n    ],\n  },\n  node: {\n    type: 'rect',\n  },\n  edge: {\n    style: {\n      endArrow: true,\n    },\n  },\n  combo: {\n    type: 'rect',\n    style: {\n      padding: 16,\n    },\n  },\n  behaviors: ['drag-element', 'collapse-expand'],\n  animation: true,\n});\n\ngraph.render();\n",
        "paraId": 8,
        "tocIndex": 3
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
//# sourceMappingURL=docs_manual_element_combo_RectCombo_zh_md_q_hK4X-async.js.map