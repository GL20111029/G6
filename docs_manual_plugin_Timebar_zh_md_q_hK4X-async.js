((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Timebar.zh.md?type=text'],
{ "docs/manual/plugin/Timebar.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Timebar.zh.md?watch=parent");
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
        "value": "时间条插件是一个用于时序数据探索的重要工具，它能够通过时间轴或趋势图的形式展示数据的时间分布，并支持时间区间筛选、动态播放等交互方式，帮助用户更好地理解数据随时间的变化。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "需要展示和分析时序数据的时间分布",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "需要通过时间维度筛选和探索图数据",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "需要动态展示数据随时间变化的过程",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "以下是一个简单的 Timebar 插件初始化示例：",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'timebar',\n      data: timeData, // 时间数据\n      width: 450, // 时间条宽度\n      height: 60, // 时间条高度\n      position: 'bottom', // 位置\n      loop: false, // 是否循环播放\n    },\n  ],\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: new Array(25).fill(0).map((_, index) => ({\n        id: `node-${index}`,\n        data: {\n          timestamp: new Date('2023-08-01').getTime() + (index % 5) * 3600 * 24 * 1000,\n          value: index % 10,\n          label: new Date(new Date('2023-08-01').getTime() + (index % 5) * 3600 * 24 * 1000).toLocaleString(),\n        },\n      })),\n      edges: new Array(25).fill(0).map((_, i) => ({\n        id: `edge-${i}`,\n        source: `node-${i % 12}`,\n        target: `node-${(i % 10) + 15}`,\n        data: {\n          edgeType: 'e1',\n        },\n      })),\n    },\n    layout: { type: 'grid', cols: 5 },\n    node: {\n      style: { size: 24, fill: '#7e3feb' },\n      palette: { field: 'cluster' },\n    },\n    edge: { style: { stroke: '#8b9baf' } },\n    behaviors: ['drag-canvas'],\n    plugins: [\n      'grid-line',\n      {\n        type: 'timebar',\n        key: 'timebar',\n        data: [10, 2, 3, 4, 15].map((value, index) => ({\n          time: new Date(new Date('2023-08-01').getTime() + index * 3600 * 24 * 1000),\n          value,\n          label: new Date(new Date('2023-08-01').getTime() + index * 3600 * 24 * 1000).toLocaleString(),\n        })),\n        timebarType: 'time',\n        height: 100,\n      },\n    ],\n    autoFit: 'view',\n    padding: [10, 0, 100, 0],\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      type: 'timebar',\n      position: 'bottom',\n      enable: true,\n      timebarType: 'time',\n      className: 'g6-timebar',\n      width: 450,\n      height: 100,\n      zIndex: 3,\n      elementTypes: ['node'],\n      mode: 'modify',\n      loop: false,\n    };\n    const optionFolder = gui.addFolder('Timebar Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'height', 40, 100, 1);\n    optionFolder.add(options, 'width', 200, 800, 1);\n    optionFolder.add(options, 'position', ['bottom', 'top']);\n    optionFolder.add(options, 'timebarType', ['time', 'chart']);\n    optionFolder.add(options, 'loop');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'timebar',\n        [property]: value,\n      });\n      graph.render();\n    });\n\n    const apiFolder = gui.addFolder('Timebar API');\n    const instance = graph.getPluginInstance('timebar');\n    apiFolder.add(instance, 'play');\n    apiFolder.add(instance, 'pause');\n    apiFolder.add(instance, 'forward');\n    apiFolder.add(instance, 'backward');\n    apiFolder.add(instance, 'reset');\n  },\n);\n",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "插件类型",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "timebar",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "插件的唯一标识，可用于获取插件实例或更新插件选项",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "className",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "给工具栏的 DOM 追加的类名",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "g6-timebar",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "x",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "X 位置（设置后 position 会失效）",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "y",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Y 位置（设置后 position 会失效）",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "width",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "时间条宽度",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "450",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "height",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "时间条高度",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "60",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "position",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "时间条位置",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "top",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "padding",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "边距",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number | number[]",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "data",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "时间数据",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number[] | { time: number; value: number }[]",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "timebarType",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "时间条展示类型",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "time",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "chart",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "time",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "elementTypes",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "筛选元素类型",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "combo",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ")[]",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "[",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "]",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "mode",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "控制元素的筛选方式，支持以下两种配置： ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "modify",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：通过修改图数据进行筛选 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "visibility",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：通过修改元素可见性进行筛选",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "modify",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "visibility",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "modify",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "values",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "当前时间值",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number | [number, number] | Date | [Date, Date]",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "loop",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "是否循环播放",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getTime",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "获取元素时间的方法",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(datum: ElementDatum) => number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "labelFormatter",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "图表模式下自定义时间格式化",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(time: number | Date) => string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onChange",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "时间区间变化时的回调",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(values: number | [number, number]) => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onReset",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "重置时的回调",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onSpeedChange",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "播放速度变化时的回调",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(speed: number) => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onPlay",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "开始播放时的回调",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onPause",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "暂停时的回调",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onBackward",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "后退时的回调",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onForward",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "前进时的回调",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "timebarType",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": " 属性用于控制时间条的展示类型，支持以下两种配置：",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "time",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "：显示为时间轴形式，参考 ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "时间模式示例",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "chart",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "：显示为趋势图形式，此时",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "timebar",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "下的",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "data",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "配置项，每个数组项需要额外传入 ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "value",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": " 字段作为图表数据，参考 ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "图表模式示例",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "最简单的配置方式：",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  layout: { type: 'grid', cols: 5 },\n  plugins: [\n    {\n      type: 'timebar',\n      data: [\n        {\n          time: new Date('2023-08-01').getTime(),\n          value: 5,\n        },\n        {\n          time: new Date('2023-08-02').getTime(),\n          value: 10,\n        },\n        {\n          time: new Date('2023-08-03').getTime(),\n          value: 15,\n        },\n      ],\n    },\n  ],\n  data: {\n    nodes: [\n      {\n        id: 'node1',\n        label: '节点1',\n        // 默认情况下 elementTypes=['node']，所以节点需要设置 data.timestamp，才能按照时间轴内的时间依次展示\n        data: {\n          timestamp: new Date('2023-08-01').getTime(),\n        },\n      },\n      {\n        id: 'node2',\n        label: '节点2',\n        data: {\n          timestamp: new Date('2023-08-02').getTime(),\n        },\n      },\n      {\n        id: 'node3',\n        label: '节点3',\n        data: {\n          timestamp: new Date('2023-08-03').getTime(),\n        },\n      },\n    ],\n    edges: [\n      {\n        id: 'edge1',\n        source: 'node1',\n        target: 'node2',\n        // 场景一：默认情况 elementTypes = ['node']\n        // - 边不需要设置 data.timestamp，边的显示/隐藏完全取决于其连接的两个节点是否可见\n\n        // 场景二：如果elementTypes包含了'edge'，比如 elementTypes = ['node', 'edge']\n        // - 此时必须为边设置 data.timestamp，边的显示受其控制\n        // data: {\n        //   timestamp: new Date('2023-08-01').getTime()\n        // }\n      },\n      {\n        id: 'edge2',\n        source: 'node2',\n        target: 'node3',\n      },\n      {\n        id: 'edge3',\n        source: 'node3',\n        target: 'node1',\n      },\n    ],\n  },\n});\n",
        "paraId": 11,
        "tocIndex": 7
    },
    {
        "value": "效果如下：",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  width: 600,\n  height: 400,\n  layout: { type: 'grid', cols: 5 },\n  plugins: [\n    {\n      type: 'timebar',\n      data: [\n        {\n          time: new Date('2023-08-01').getTime(),\n          value: 5,\n        },\n        {\n          time: new Date('2023-08-02').getTime(),\n          value: 10,\n        },\n        {\n          time: new Date('2023-08-03').getTime(),\n          value: 15,\n        },\n      ],\n    },\n  ],\n  data: {\n    nodes: [\n      {\n        id: 'node1',\n        label: '节点1',\n        data: {\n          timestamp: new Date('2023-08-01').getTime(),\n        },\n      },\n      {\n        id: 'node2',\n        label: '节点2',\n        data: {\n          timestamp: new Date('2023-08-02').getTime(),\n        },\n      },\n      {\n        id: 'node3',\n        label: '节点3',\n        data: {\n          timestamp: new Date('2023-08-03').getTime(),\n        },\n      },\n    ],\n    edges: [\n      {\n        id: 'edge1',\n        source: 'node1',\n        target: 'node2',\n      },\n      {\n        id: 'edge2',\n        source: 'node2',\n        target: 'node3',\n      },\n      {\n        id: 'edge3',\n        source: 'node3',\n        target: 'node1',\n      },\n    ],\n  },\n});\n\ngraph.render();\n",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "width",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "height",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "padding",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "className",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": " 可自定义时间条的展示效果，但需要注意 ",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "className",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": " 仅作用于外层 DOM 容器，无法影响时间条内部的 Canvas 渲染内容（时间轴、图表、播放按钮等）。",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'timebar',\n      className: 'custom-timebar', // 注意：由于内容是 Canvas 渲染，CSS 样式无法影响到时间条的内部内容\n      width: 400, // 设置时间条宽度\n      height: 80, // 设置时间条高度\n      padding: [20, 20, 10, 20], // 设置内边距 [上, 右, 下, 左]\n      position: 'bottom', // 位置保持在底部\n      data: timeData,\n      // labelFormatter: (time) => {\n      //   return new Date(time).toLocaleDateString();\n      // }\n    },\n  ],\n});\n",
        "paraId": 15,
        "tocIndex": 8
    },
    {
        "value": "通过 CSS 只能设置时间条容器的样式：",
        "paraId": 16,
        "tocIndex": 8
    },
    {
        "value": ".custom-timebar {\n  background-color: #f0f0f0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "效果如下：",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "createGraph(\n  {\n    data: () => {\n      return {\n        nodes: [\n          {\n            id: 'node1',\n            style: { x: 100, y: 100, label: 'Node 1' },\n            data: {\n              timestamp: new Date('2023-08-01').getTime(),\n            },\n          },\n          {\n            id: 'node2',\n            style: { x: 200, y: 100, label: 'Node 2' },\n            data: {\n              timestamp: new Date('2023-08-01').getTime() + 3600 * 24 * 1000,\n            },\n          },\n          {\n            id: 'node3',\n            style: { x: 150, y: 200, label: 'Node 3' },\n            data: {\n              timestamp: new Date('2023-08-01').getTime() + 3600 * 24 * 1000 * 2,\n            },\n          },\n        ],\n        edges: [\n          { id: 'edge1', source: 'node1', target: 'node2' },\n          { id: 'edge2', source: 'node2', target: 'node3' },\n          { id: 'edge3', source: 'node3', target: 'node1' },\n        ],\n      };\n    },\n    node: {\n      style: {\n        size: 20,\n        label: true,\n      },\n    },\n    edge: {\n      style: {\n        stroke: '#91d5ff',\n        lineWidth: 1,\n      },\n    },\n    plugins: [\n      {\n        type: 'timebar',\n        className: 'custom-timebar',\n        width: 400,\n        height: 80,\n        padding: [20, 20, 10, 20],\n        position: 'bottom',\n        data: [\n          {\n            time: new Date('2023-08-01').getTime(),\n            value: 5,\n          },\n          {\n            time: new Date('2023-08-01').getTime() + 3600 * 24 * 1000,\n            value: 10,\n          },\n          {\n            time: new Date('2023-08-01').getTime() + 3600 * 24 * 1000 * 2,\n            value: 15,\n          },\n        ],\n        labelFormatter: (time) => {\n          return new Date(time).toLocaleDateString();\n        },\n      },\n    ],\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    gui?.hide();\n    const style = document.createElement('style');\n    style.innerHTML = `\n      .custom-timebar {\n        background-color: #f0f0f0;\n        border: 1px solid #ccc;\n        border-radius: 5px;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      }\n    `;\n    document.head.appendChild(style);\n  },\n);\n",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "时间模式",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "图表模式",
        "paraId": 21,
        "tocIndex": 9
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
//# sourceMappingURL=docs_manual_plugin_Timebar_zh_md_q_hK4X-async.js.map