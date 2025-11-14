((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/BrushSelect.zh.md?type=text'],
{ "docs/manual/behavior/BrushSelect.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/BrushSelect.zh.md?watch=parent");
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
        "value": "鼠标点击拖一个框笼罩元素，框选范围内的元素会被选中。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这一交互主要用于：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "快速选中一批元素",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "快速取消选中一批元素",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 200, y: 100 } },\n        { id: 'node-2', style: { x: 360, y: 100 } },\n        { id: 'node-3', style: { x: 280, y: 220 } },\n      ],\n      edges: [\n        { source: 'node-1', target: 'node-2' },\n        { source: 'node-1', target: 'node-3' },\n        { source: 'node-2', target: 'node-3' },\n      ],\n    },\n    node: {\n      style: { fill: '#7e3feb' },\n      state: {\n        custom: { fill: '#ffa940' },\n      },\n    },\n    edge: {\n      stroke: '#8b9baf',\n      state: {\n        custom: { stroke: '#ffa940' },\n      },\n    },\n    behaviors: [\n      {\n        type: 'brush-select',\n        key: 'brush-select',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'brush-select',\n      type: 'brush-select',\n      animation: false,\n      enable: true,\n      enableElements: ['node', 'edge', 'combo'],\n      immediately: false,\n      mode: 'default',\n      state: 'selected',\n      trigger: 'shift+drag',\n    };\n    const optionFolder = gui.addFolder('BrushSelect Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'enableElements', [\n      ['node', 'edge', 'combo'],\n      ['node', 'edge'],\n      ['node', 'combo'],\n      ['combo', 'edge'],\n      ['node'],\n      ['edge'],\n      ['combo'],\n    ]);\n    optionFolder.add(options, 'trigger', {\n      'shift+drag': ['shift'],\n      drag: [],\n    });\n    optionFolder.add(options, 'state', ['active', 'selected', 'custom']);\n    optionFolder.add(options, 'mode', ['union', 'intersect', 'diff', 'default']).onChange((e) => {\n      immediately.show(e === 'default');\n    });\n    const immediately = optionFolder.add(options, 'immediately');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'brush-select',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
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
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: ['brush-select'],\n});\n",
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
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select-1',\n      immediately: true, // 可以看到框框笼罩过去时，元素立即被框选了\n      trigger: ['shift', 'alt', 'control'], // 配合多种按键进行框选\n    },\n  ],\n});\n",
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
        "value": "交互类型名称。此插件已内置，你可以通过 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "type: 'brush-select'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " 来使用它。",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "brush-select",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | string",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "brush-select",
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
        "value": "是否启用动画",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "是否启用框选功能",
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
        "value": "enableElements",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "可框选的元素类型",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "( ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "combo",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " )[]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "[",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "combo",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "immediately",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "是否及时框选, 仅在 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "框选模式 mode",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " 为 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "default",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " 时生效，",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "mode",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "框选的选择模式，",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "union",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "intersect",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "diff",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "default",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "default",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "onSelect",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "框选元素状态回调",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(states:Record<string,string|string[]>) =>Record<string,string|string[]>",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "state",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "被选中时切换到该状态",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "string | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "selected",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "active",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "inactive",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "disabled",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "highlight",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "selected",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "style",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "指定框选时的框样式，",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "配置项",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "见下文",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "按下该快捷键配合鼠标点击进行框选 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "按键参考：",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "MDN Key Values",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " 。若设为",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "空数组",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "时则表示鼠标点击进行框选，不需要按下其他按键配合 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " ⚠️ 注意，",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " 设置为 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "['drag']",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " 时会导致 ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "drag-canvas",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " 行为失效。两者不可同时配置。",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "string[] | (",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Control",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Shift",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "| ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Alt",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "......",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ")[]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "[",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "shift",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "是否及时框选, 仅在框选模式为 ",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "default",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": " 时生效",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select',\n      immediately: true, // 可以看到框框笼罩过去时，元素立即被框选了\n      trigger: [], // 不需要配合其他按键，点击鼠标拖动即可框选\n    },\n  ],\n});\n",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data: {\n    nodes: [\n      { id: 'node-1', style: { x: 100, y: 50 } },\n      { id: 'node-2', style: { x: 260, y: 50 } },\n      { id: 'node-3', style: { x: 280, y: 100 } },\n    ],\n    edges: [\n      { source: 'node-1', target: 'node-2' },\n      { source: 'node-1', target: 'node-3' },\n      { source: 'node-2', target: 'node-3' },\n    ],\n  },\n  node: {\n    style: { fill: '#7e3feb' },\n  },\n  edge: {\n    stroke: '#8b9baf',\n  },\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select',\n      immediately: true, // 立即框选\n      trigger: [],\n    },\n  ],\n  plugins: [{ type: 'grid-line', size: 30 }],\n});\n\ngraph.render();\n",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "内置支持四种框选的选择模式：",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": "union",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "：保持已选元素的当前状态，并添加指定的 state 状态。",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "intersect",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "：如果已选元素已有指定的 state 状态，则保留；否则清除该状态。",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "diff",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "：对已选元素的指定 state 状态进行取反操作。",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "default",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "：清除已选元素的当前状态，并添加指定的 state 状态。",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select',\n      mode: 'default', // 框选模式, 默认框选模式\n    },\n  ],\n});\n",
        "paraId": 22,
        "tocIndex": 6
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 200, y: 100 } },\n        { id: 'node-2', style: { x: 360, y: 100 } },\n        { id: 'node-3', style: { x: 280, y: 220 } },\n      ],\n      edges: [\n        { source: 'node-1', target: 'node-2' },\n        { source: 'node-1', target: 'node-3' },\n        { source: 'node-2', target: 'node-3' },\n      ],\n    },\n    node: {\n      style: { fill: '#7e3feb' },\n      state: {\n        custom: { fill: '#ffa940' },\n      },\n    },\n    edge: {\n      stroke: '#8b9baf',\n      state: {\n        custom: { stroke: '#ffa940' },\n      },\n    },\n    behaviors: [\n      {\n        type: 'brush-select',\n        key: 'brush-select',\n        trigger: [],\n        immediately: true,\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'brush-select',\n      type: 'brush-select',\n      animation: false,\n      enable: true,\n      enableElements: ['node', 'edge', 'combo'],\n      mode: 'default',\n      state: 'selected',\n    };\n    const optionFolder = gui.addFolder('BrushSelect Options');\n    optionFolder.add(options, 'type').disable(true);\n\n    optionFolder.add(options, 'state', ['active', 'selected', 'custom']);\n    optionFolder.add(options, 'mode', ['union', 'intersect', 'diff', 'default']);\n    // .onChange((e) => {\n    //   immediately.show(e === 'default');\n    // });\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'brush-select',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 23,
        "tocIndex": 6
    },
    {
        "value": "属性",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "描述",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "类型",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "默认值",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "cursor",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "鼠标样式",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "fill",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "填充颜色",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "string | Pattern | null",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "#1677FF",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "fillOpacity",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "填充透明度",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "0.1",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "isBillboard",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "是否启用公告牌模式",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "是否启用大小衰减",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "lineCap",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "线段端点样式",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "butt",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "round",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "square",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "lineDash",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "虚线配置",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string | (string | number)[]",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "lineDashOffset",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "虚线偏移量",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "lineJoin",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "线段连接处样式",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "miter",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "round",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "bevel",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "lineWidth",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "线宽度",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "1",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "opacity",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "整体透明度",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "radius",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "矩形圆角半径",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string | number[]",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "shadowBlur",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "阴影模糊程度",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "shadowColor",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "阴影颜色",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "shadowOffsetX",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "阴影 X 方向偏移",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "shadowOffsetY",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "阴影 Y 方向偏移",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "stroke",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "描边颜色",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "string | Pattern | null",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "#1677FF",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "strokeOpacity",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "描边透明度",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "visibility",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "可见性",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "visible",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "hidden",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "zIndex",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "渲染层级",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "2",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "示例",
        "paraId": 25,
        "tocIndex": 7
    },
    {
        "value": "：",
        "paraId": 25,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select',\n      style: {\n        width: 0,\n        height: 0,\n        lineWidth: 4,\n        lineDash: [2, 2], // 虚线外框\n        // rgb超级炫彩框框\n        fill: 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',\n        stroke: 'pink',\n        fillOpacity: 0.2,\n        zIndex: 2,\n        pointerEvents: 'none',\n      },\n    },\n  ],\n});\n",
        "paraId": 26,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 300,\n  data: {\n    nodes: [\n      { id: 'node-1', style: { x: 200, y: 100 } },\n      { id: 'node-2', style: { x: 360, y: 100 } },\n      { id: 'node-3', style: { x: 280, y: 220 } },\n    ],\n    edges: [\n      { source: 'node-1', target: 'node-2' },\n      { source: 'node-1', target: 'node-3' },\n      { source: 'node-2', target: 'node-3' },\n    ],\n  },\n  node: {\n    style: { fill: '#7e3feb' },\n  },\n  edge: {\n    stroke: '#8b9baf',\n  },\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select',\n      trigger: [],\n      immediately: true,\n      style: {\n        width: 0,\n        height: 0,\n        lineWidth: 4,\n        lineDash: [2, 2], // 虚线外框\n        // rgb超级炫彩框框\n        fill: 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',\n        stroke: 'pink',\n        fillOpacity: 0.2,\n        zIndex: 2,\n        pointerEvents: 'none',\n      },\n    },\n  ],\n  plugins: [{ type: 'grid-line', size: 30 }],\n  animation: true,\n});\n\ngraph.render();\n",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [\n      { id: 'node-1', style: { x: 200, y: 250 } },\n      { id: 'node-2', style: { x: 250, y: 200 } },\n      { id: 'node-3', style: { x: 300, y: 250 } },\n      { id: 'node-4', style: { x: 250, y: 300 } },\n    ],\n    edges: [\n      { source: 'node-1', target: 'node-2' },\n      { source: 'node-2', target: 'node-3' },\n      { source: 'node-3', target: 'node-4' },\n      { source: 'node-4', target: 'node-1' },\n    ],\n  },\n  behaviors: [\n    {\n      key: 'brush-select',\n      type: 'brush-select',\n      enable: true,\n      animation: false,\n      mode: 'default', // union intersect diff default\n      state: 'selected', // 'active', 'selected', 'inactive', ...\n      trigger: [], // ['Shift', 'Alt', 'Control', 'Drag', 'Meta', ...]\n      style: {\n        width: 0,\n        height: 0,\n        lineWidth: 4,\n        lineDash: [2, 2],\n        fill: 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',\n        stroke: 'pink',\n        fillOpacity: 0.2,\n        zIndex: 2,\n        pointerEvents: 'none',\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 28,
        "tocIndex": 8
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
//# sourceMappingURL=docs_manual_behavior_BrushSelect_zh_md_q_hK4X-async.js.map