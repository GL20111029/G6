((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/CollapseExpand.zh.md?type=text'],
{ "docs/manual/behavior/CollapseExpand.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/CollapseExpand.zh.md?watch=parent");
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
        "value": "CollapseExpand 是 G6 中用于实现节点或组合（Combo）展开/收起功能的内置交互。通过双击（默认）或单击操作，用户可以灵活控制图元素的展开与收起状态，有效管理图结构的可视化层次，降低视觉复杂度。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这一交互主要用于：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "管理大型层次结构图，实现树状图或网络图的分层浏览",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "简化复杂图的展示，按需展开关注区域",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "隐藏暂时不需要查看的分支节点，聚焦于重要信息",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', combo: 'combo1', style: { x: 250, y: 150 } },\n        { id: 'node2', combo: 'combo1', style: { x: 350, y: 150 } },\n        { id: 'node3', combo: 'combo2', style: { x: 250, y: 300 } },\n      ],\n      edges: [],\n      combos: [\n        { id: 'combo1', combo: 'combo2' },\n        { id: 'combo2', style: {} },\n      ],\n    },\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    behaviors: [\n      {\n        type: 'collapse-expand',\n        key: 'collapse-expand',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      key: 'collapse-expand',\n      type: 'collapse-expand',\n      animation: true,\n      enable: true,\n    };\n    const optionFolder = gui.addFolder('CollapseExpand Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'collapse-expand',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "在图配置中添加这一 behavior：",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "1. 快速配置（静态）",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "使用字符串形式直接声明，这种方式简洁但仅支持默认配置，且配置后不可动态修改：",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: ['collapse-expand'],\n});\n",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "2. 对象配置（推荐）",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "使用对象形式进行配置，支持自定义参数，且可以在运行时动态更新配置：",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      key: 'collapse-expand-1',\n      trigger: 'click', // 修改触发方式为单击\n      animation: true, // 启用动画效果\n    },\n  ],\n});\n",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "配置项",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "说明",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "交互类型名称",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "collapse-expand",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | string",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "collapse-expand",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "animation",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "是否启用展开/收起动画效果",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "是否启用展开/收起功能",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "IPointerEvent",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": ") => boolean)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "触发方式，可选单击或双击",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "click",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "dblclick",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "dblclick",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "onCollapse",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "完成收起时的回调函数",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(id: string) => void",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "onExpand",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "完成展开时的回调函数",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(id: string) => void",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "align",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "是否对准目标元素，避免视图偏移",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['collapse-expand'],\n  // 其他配置...\n});\n",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      trigger: 'click', // 将默认的双击触发改为单击触发\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      onCollapse: (id) => {\n        console.log(`节点 ${id} 已收起`);\n        // 执行自定义逻辑\n      },\n      onExpand: (id) => {\n        console.log(`节点 ${id} 已展开`);\n        // 执行自定义逻辑\n      },\n    },\n  ],\n});\n",
        "paraId": 15,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      // 只有当目标是节点类型时才启用展开/收起功能\n      enable: (event) => event.targetType === 'node',\n    },\n  ],\n});\n",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      animation: false, // 关闭展开/收起动画效果\n    },\n  ],\n});\n",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "可以通过检查节点数据中的 ",
        "paraId": 18,
        "tocIndex": 12
    },
    {
        "value": "collapsed",
        "paraId": 18,
        "tocIndex": 12
    },
    {
        "value": " 属性：",
        "paraId": 18,
        "tocIndex": 12
    },
    {
        "value": "const isCollapsed = (nodeId) => {\n  const nodeData = graph.getNodeData(nodeId);\n  return nodeData?.style?.collapsed === true;\n};\n",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "除了通过用户交互触发，你还可以使用 ",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "collapseElement",
        "paraId": 21,
        "tocIndex": 13
    },
    {
        "value": " 或 ",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "expandElement",
        "paraId": 22,
        "tocIndex": 13
    },
    {
        "value": " 直接控制：",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "// 收起节点\ngraph.collapseElement('nodeId', { animation: true });\n\n// 展开节点\ngraph.expandElement('nodeId', { animation: true });\n",
        "paraId": 23,
        "tocIndex": 13
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [\n      { id: 'node1', combo: 'combo1', style: { x: 300, y: 100 } },\n      { id: 'node2', combo: 'combo1', style: { x: 300, y: 150 } },\n      { id: 'node3', combo: 'combo2', style: { x: 100, y: 100 } },\n      { id: 'node4', combo: 'combo2', style: { x: 50, y: 150 } },\n      { id: 'node5', combo: 'combo2', style: { x: 150, y: 150 } },\n    ],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node3', target: 'node5' },\n    ],\n    combos: [\n      { id: 'combo1', style: { labelText: '双击折叠', collapsed: true } },\n      { id: 'combo2', style: { labelText: '单击折叠', collapsed: false } },\n    ],\n  },\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      trigger: 'dblclick',\n      enable: (event) => event.targetType === 'combo' && event.target.id === 'combo1',\n    },\n    {\n      type: 'collapse-expand',\n      trigger: 'click',\n      enable: (event) => event.targetType === 'combo' && event.target.id === 'combo2',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 24,
        "tocIndex": 14
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
//# sourceMappingURL=docs_manual_behavior_CollapseExpand_zh_md_q_hK4X-async.js.map