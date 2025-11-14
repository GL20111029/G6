((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/state.zh.md?type=text'],
{ "docs/manual/element/state.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/state.zh.md?watch=parent");
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
        "value": "元素状态(State)是指图中元素（节点、边、组合）在不同交互场景下的视觉表现形式。比如当用户点击一个节点时，节点可能会变成\"选中\"状态并改变颜色；当鼠标悬停在边上时，边可能会进入\"高亮\"状态并加粗显示。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "简单来说，状态让元素能够根据用户的操作或业务逻辑动态改变外观。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "多状态共存",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "：一个元素可以同时拥有多个状态，比如既是\"选中\"又是\"高亮\"",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "样式叠加",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "：多个状态的样式会叠加在一起，后设置的状态样式优先级更高",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "完全自定义",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "：除了内置状态，您可以创建任何符合业务需求的自定义状态",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "G6 提供了一些常用的内置状态，您可以直接使用：",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "状态名",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "说明",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "典型使用场景",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "selected",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "选中状态",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "用户点击选择元素时",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "active",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "激活状态",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "当前正在交互的元素",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "highlight",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "高亮状态",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "需要强调显示的元素",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "inactive",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "非活跃状态",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "淡化显示非关注元素",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "disabled",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "禁用状态",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "不可交互的元素",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "💡 ",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "提示",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "：这些内置状态并非必须使用，您完全可以根据业务需求定义自己的状态名称。",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "在创建图实例时，为不同状态配置相应的样式：",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "const graph = new Graph({\n  // 节点的状态样式配置\n  node: {\n    // 默认样式（无状态时的样式）\n    style: {\n      fill: '#C6E5FF',\n      stroke: '#5B8FF9',\n      lineWidth: 1,\n    },\n    // 各种状态下的样式\n    state: {\n      selected: {\n        fill: '#95D6FB',\n        stroke: '#1890FF',\n        lineWidth: 2,\n        shadowColor: '#1890FF',\n        shadowBlur: 10,\n      },\n      highlight: {\n        stroke: '#FF6A00',\n        lineWidth: 2,\n      },\n      disabled: {\n        fill: '#ECECEC',\n        stroke: '#BFBFBF',\n        opacity: 0.5,\n      },\n    },\n  },\n\n  // 边的状态样式配置\n  edge: {\n    style: {\n      stroke: '#E2E2E2',\n      lineWidth: 1,\n    },\n    state: {\n      selected: {\n        stroke: '#1890FF',\n        lineWidth: 2,\n      },\n      highlight: {\n        stroke: '#FF6A00',\n        lineWidth: 3,\n      },\n    },\n  },\n\n  // 组合的状态样式配置\n  combo: {\n    style: {\n      fill: '#F0F0F0',\n      stroke: '#D9D9D9',\n    },\n    state: {\n      selected: {\n        stroke: '#1890FF',\n        lineWidth: 2,\n      },\n    },\n  },\n});\n",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "您可以创建任何符合业务需求的自定义状态：",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    style: {\n      fill: '#C6E5FF',\n      stroke: '#5B8FF9',\n    },\n    state: {\n      // 自定义状态：错误\n      error: {\n        fill: '#FFEBE6',\n        stroke: '#FF4D4F',\n        lineWidth: 2,\n        lineDash: [4, 4], // 虚线边框\n      },\n      // 自定义状态：成功\n      success: {\n        fill: '#F6FFED',\n        stroke: '#52C41A',\n        lineWidth: 2,\n      },\n      // 自定义状态：警告\n      warning: {\n        fill: '#FFFBE6',\n        stroke: '#FAAD14',\n        lineWidth: 2,\n        // 添加图标\n        icon: {\n          show: true,\n          text: '⚠️',\n          fontSize: 16,\n        },\n      },\n    },\n  },\n});\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "在数据中为元素设置初始状态：",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "const data = {\n  nodes: [\n    {\n      id: 'node1',\n      states: ['selected'], // 初始为选中状态\n    },\n    {\n      id: 'node2',\n      states: ['disabled'], // 初始为禁用状态\n    },\n    {\n      id: 'node3',\n      states: ['highlight', 'active'], // 初始有多个状态\n    },\n  ],\n  edges: [\n    {\n      source: 'node1',\n      target: 'node2',\n      states: ['highlight'], // 边的初始状态\n    },\n  ],\n};\n\ngraph.setData(data);\n",
        "paraId": 11,
        "tocIndex": 7
    },
    {
        "value": "通过 API 动态改变元素状态：",
        "paraId": 12,
        "tocIndex": 8
    },
    {
        "value": "// 设置单个元素的单个状态\ngraph.setElementState('node1', 'selected');\n\n// 设置单个元素的多个状态\ngraph.setElementState('node2', ['highlight', 'active']);\n\n// 批量设置多个元素的状态\ngraph.setElementState({\n  node1: ['selected'],\n  node2: ['highlight'],\n  edge1: ['active'],\n});\n",
        "paraId": 13,
        "tocIndex": 8
    },
    {
        "value": "当元素有多个状态时，样式会按顺序叠加：",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "// 假设节点同时有 selected 和 highlight 状态\ngraph.setElementState('node1', ['selected', 'highlight']);\n\n// 最终样式 = 默认样式 + selected状态样式 + highlight状态样式\n// 如果有样式冲突，后面的状态样式会覆盖前面的\n",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "将元素恢复到默认状态（无任何状态）：",
        "paraId": 16,
        "tocIndex": 11
    },
    {
        "value": "// 清除单个元素的所有状态\ngraph.setElementState('node1', []);\n\n// 批量清除多个元素的状态\ngraph.setElementState({\n  node1: [],\n  node2: [],\n  edge1: [],\n});\n",
        "paraId": 17,
        "tocIndex": 11
    },
    {
        "value": "如果元素有多个状态，您可以只清除其中的某些状态：",
        "paraId": 18,
        "tocIndex": 12
    },
    {
        "value": "// 假设 node1 当前有 ['selected', 'highlight', 'active'] 三个状态\n// 现在只想保留 'selected' 状态，清除其他状态\ngraph.setElementState('node1', ['selected']);\n\n// 或者获取当前状态，然后过滤掉不需要的状态\nconst currentStates = graph.getElementState('node1');\nconst newStates = currentStates.filter((state) => state !== 'highlight');\ngraph.setElementState('node1', newStates);\n",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "// 清除所有节点的 'highlight' 状态\nconst allNodes = graph.getNodeData();\nconst stateUpdates = {};\n\nallNodes.forEach((node) => {\n  const currentStates = graph.getElementState(node.id);\n  const newStates = currentStates.filter((state) => state !== 'highlight');\n  stateUpdates[node.id] = newStates;\n});\n\ngraph.setElementState(stateUpdates);\n",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "// 获取指定元素的所有状态\nconst states = graph.getElementState('node1');\nconsole.log(states); // 例如：['selected', 'highlight']\n\n// 如果元素没有任何状态，返回空数组\nconsole.log(states); // []\n",
        "paraId": 21,
        "tocIndex": 15
    },
    {
        "value": "// 获取所有处于 'selected' 状态的节点数据\nconst selectedNodes = graph.getElementDataByState('node', 'selected');\n\n// 获取所有处于 'highlight' 状态的边数据\nconst highlightEdges = graph.getElementDataByState('edge', 'highlight');\n",
        "paraId": 22,
        "tocIndex": 16
    },
    {
        "value": "// 检查元素是否处于特定状态\nconst states = graph.getElementState('node1');\nconst isSelected = states.includes('selected');\nconst isHighlight = states.includes('highlight');\n\nconsole.log('节点是否选中:', isSelected);\nconsole.log('节点是否高亮:', isHighlight);\n",
        "paraId": 23,
        "tocIndex": 17
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
//# sourceMappingURL=docs_manual_element_state_zh_md_q_hK4X-async.js.map