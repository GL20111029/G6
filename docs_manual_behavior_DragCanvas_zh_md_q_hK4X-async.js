((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/DragCanvas.zh.md?type=text'],
{ "docs/manual/behavior/DragCanvas.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/DragCanvas.zh.md?watch=parent");
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
        "value": "DragCanvas 是 G6 中用于实现画布拖拽功能的内置交互，支持通过鼠标或触摸屏幕拖动来平移整个画布。这是图可视化中最基础且常用的导航交互，让用户能够自由探索超出当前视口的图内容。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这一交互主要用于：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "导航和浏览大型图表，查看当前视口外的内容",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "调整视图焦点，将感兴趣的区域移动到视口中心",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "与缩放交互结合，实现完整的画布导航体验",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: { nodes: [{ id: 'node-1' }] },\n    layout: { type: 'force' },\n    behaviors: [\n      {\n        type: 'drag-canvas',\n        key: 'drag-canvas',\n      },\n    ],\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'drag-canvas',\n      type: 'drag-canvas',\n      enable: true,\n      sensitivity: 1,\n      trigger: 'Use cursor by default',\n    };\n    const optionFolder = gui.addFolder('ZoomCanvas Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'sensitivity', 0, 10, 1);\n    optionFolder.add(options, 'trigger', {\n      'Use cursor by default': [],\n      'Shift+Arrow Key': {\n        up: ['Shift', 'ArrowUp'],\n        down: ['Shift', 'ArrowDown'],\n        left: ['Shift', 'ArrowLeft'],\n        right: ['Shift', 'ArrowRight'],\n      },\n    });\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'drag-canvas',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "在图配置中添加这一交互：",
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
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: ['drag-canvas'],\n});\n",
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
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'drag-canvas',\n      key: 'drag-canvas-1',\n      direction: 'x', // 只允许水平方向拖拽\n      key: 'drag-behavior', // 为交互指定标识符，方便动态更新\n    },\n  ],\n});\n",
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
        "value": "string",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "drag-canvas",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "是否启用该交互",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Event",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "KeyboardEvent",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ") => boolean)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(event) => 'eventType' in event ? event.targetType === 'canvas': true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(仅在点击画布时启用)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "animation",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "拖拽动画配置，仅在使用按键移动时有效",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "direction",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "允许的拖拽方向，可选值有：",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "- 设为 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'both'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "（默认）：允许在任意方向拖拽 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "- 设为 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'x'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "：只允许水平方向拖拽 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "- 设为 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'y'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "：只允许垂直方向拖拽",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'x'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'y'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'both'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'both'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " (不限制方向)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "range",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "可拖拽的视口范围(以视口大小为单位)，",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "number | number[]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Infinity",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sensitivity",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "触发一次按键移动的距离",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "触发拖拽的键盘按键，",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "object",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "onFinish",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "拖拽完成时的回调函数",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "range",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": " 用于控制画布可拖拽的范围：",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "设置为单个数字：四个方向使用相同的值",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "设置为数组：分别指定 [上, 右, 下, 左] 四个方向的范围",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "例如：",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "range: 2; // 在任何方向上都可以拖拽2个视口的距离\nrange: [1, 2, 1, 2]; // 上下方向可拖拽1个视口，左右方向可拖拽2个视口\n",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "每个方向的取值范围是 [0, Infinity]，0表示不能拖拽，Infinity表示无限拖拽。",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "trigger",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": " 允许你配置键盘按键来控制画布移动：",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "{\n  trigger: {\n    up: ['ArrowUp'],     // 向上移动的快捷键\n    down: ['ArrowDown'], // 向下移动的快捷键\n    left: ['ArrowLeft'], // 向左移动的快捷键\n    right: ['ArrowRight'] // 向右移动的快捷键\n  }\n}\n",
        "paraId": 22,
        "tocIndex": 6
    },
    {
        "value": "你也可以配置组合键：",
        "paraId": 23,
        "tocIndex": 6
    },
    {
        "value": "{\n  trigger: {\n    up: ['Control', 'ArrowUp'],     // Ctrl + 上箭头\n    down: ['Control', 'ArrowDown'], // Ctrl + 下箭头\n    left: ['Control', 'ArrowLeft'], // Ctrl + 左箭头\n    right: ['Control', 'ArrowRight'] // Ctrl + 右箭头\n  }\n}\n",
        "paraId": 24,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['drag-canvas'],\n});\n",
        "paraId": 25,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'drag-canvas',\n      direction: 'x', // 只允许水平拖拽\n    },\n  ],\n});\n",
        "paraId": 26,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'drag-canvas',\n      range: 1.5, // 限制拖拽范围为1.5个视口大小\n    },\n  ],\n});\n",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'drag-canvas',\n      trigger: {\n        up: ['ArrowUp'],\n        down: ['ArrowDown'],\n        left: ['ArrowLeft'],\n        right: ['ArrowRight'],\n      },\n      animation: {\n        duration: 100, // 添加平滑动画效果\n      },\n    },\n  ],\n});\n",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "DragCanvas",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": " 用于拖拽整个画布视图",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": "DragElement",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": " 用于拖拽单个图元素（节点/边/组合）",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": "ScrollCanvas",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": " 用于滚轮滚动画布，不改变缩放比例",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  layout: {\n    type: 'grid',\n  },\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node1', target: 'node3' },\n      { source: 'node1', target: 'node4' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  behaviors: ['drag-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 30,
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
//# sourceMappingURL=docs_manual_behavior_DragCanvas_zh_md_q_hK4X-async.js.map