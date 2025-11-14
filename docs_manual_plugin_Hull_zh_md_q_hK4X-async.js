((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Hull.zh.md?type=text'],
{ "docs/manual/plugin/Hull.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Hull.zh.md?watch=parent");
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
        "value": "轮廓包围（Hull）用于处理和表示一组点的凸多边形或凹多边形包围盒。它可以将一组节点包裹在一个最小的几何形状中，帮助用户更好地理解和分析数据集。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "凸包（Convex Hull）",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "：这是一个凸多边形，它包含所有的点，并且没有任何凹陷。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "凹包（Concave Hull）",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "：这是一个凹多边形，它同样包含所有的点，但是可能会有凹陷。凹包的凹陷程度由 concavity 参数控制。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "轮廓包围插件主要适用于以下场景：",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "数据可视化中的节点集合包裹",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "提供视觉参考，增强空间感知",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "在复杂网络图中标识特定节点的集合关系",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "以下是一个简单的 Hull 插件初始化示例：",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      key: 'my-hull', // 指定唯一标识符，便于后续动态更新\n      members: ['node-1', 'node-2'], // 需要包裹的节点 ID 列表\n      concavity: Infinity, // 默认为凸包\n    },\n  ],\n});\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        {\n          id: 'node-0',\n          data: { cluster: 'a' },\n          style: { x: 555, y: 151 },\n        },\n        {\n          id: 'node-1',\n          data: { cluster: 'a' },\n          style: { x: 532, y: 323 },\n        },\n        {\n          id: 'node-2',\n          data: { cluster: 'a' },\n          style: { x: 473, y: 227 },\n        },\n        {\n          id: 'node-3',\n          data: { cluster: 'a' },\n          style: { x: 349, y: 212 },\n        },\n        {\n          id: 'node-4',\n          data: { cluster: 'b' },\n          style: { x: 234, y: 201 },\n        },\n        {\n          id: 'node-5',\n          data: { cluster: 'b' },\n          style: { x: 338, y: 333 },\n        },\n        {\n          id: 'node-6',\n          data: { cluster: 'b' },\n          style: { x: 365, y: 91 },\n        },\n      ],\n      edges: [\n        {\n          source: 'node-0',\n          target: 'node-2',\n        },\n        {\n          source: 'node-1',\n          target: 'node-2',\n        },\n        {\n          source: 'node-2',\n          target: 'node-3',\n        },\n        {\n          source: 'node-3',\n          target: 'node-4',\n        },\n        {\n          source: 'node-3',\n          target: 'node-5',\n        },\n        {\n          source: 'node-3',\n          target: 'node-6',\n        },\n      ],\n    },\n    node: {\n      style: { labelText: (d) => d.id },\n      palette: { field: 'cluster', color: ['#7e3feb', '#ffa940'] },\n    },\n    behaviors: ['drag-canvas', 'drag-element'],\n    plugins: [\n      'grid-line',\n      {\n        type: 'hull',\n        key: 'hull-a',\n        members: ['node-0', 'node-1', 'node-2', 'node-3'],\n        labelText: 'hull-a',\n        fill: '#7e3feb',\n        stroke: '#7e3feb',\n        fillOpacity: 0.1,\n        strokeOpacity: 1,\n        labelFill: '#fff',\n        labelPadding: 2,\n        labelBackgroundFill: '#7e3feb',\n        labelBackgroundRadius: 5,\n      },\n    ],\n  },\n  { width: 600, height: 450 },\n  (gui, graph) => {\n    const options = {\n      type: 'hull',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      concavity: Infinity,\n      corner: 'rounded',\n      padding: 10,\n      // style\n      fill: '#7e3feb',\n      stroke: '#7e3feb',\n      fillOpacity: 0.1,\n      strokeOpacity: 1,\n      // label\n      label: true,\n      labelCloseToPath: true,\n      labelAutoRotate: true,\n      labelOffsetX: 0,\n      labelOffsetY: 0,\n      labelPlacement: 'bottom',\n    };\n\n    const optionFolder = gui.addFolder('Hull Options');\n    optionFolder.add(options, 'type').disable();\n    optionFolder.add(options, 'concavity', 0, 200, 1);\n    optionFolder.add(options, 'corner', ['rounded', 'smooth', 'sharp']);\n    optionFolder.add(options, 'padding', 0, 20, 1);\n    optionFolder.addColor(options, 'fill');\n    optionFolder.addColor(options, 'stroke');\n    optionFolder.add(options, 'fillOpacity', 0, 1, 0.1);\n    optionFolder.add(options, 'strokeOpacity', 0, 1, 0.1);\n    optionFolder.add(options, 'label');\n    optionFolder.add(options, 'labelCloseToPath');\n    optionFolder.add(options, 'labelAutoRotate');\n    optionFolder.add(options, 'labelOffsetX', 0, 20, 1);\n    optionFolder.add(options, 'labelOffsetY', 0, 20, 1);\n    optionFolder.add(options, 'labelPlacement', ['left', 'right', 'top', 'bottom', 'center']);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'hull-a',\n        [property]: value,\n      });\n      graph.render();\n    });\n\n    const apiConfig = {\n      member: 'node-1',\n    };\n    const apiFolder = gui.addFolder('Hull API');\n    const instance = graph.getPluginInstance('hull-a');\n    apiFolder.add(\n      apiConfig,\n      'member',\n      new Array(7).fill(0).map((_, index) => `node-${index}`),\n    );\n    apiFolder.add({ addMember: () => instance.addMember(apiConfig.member) }, 'addMember').name('add member');\n    apiFolder\n      .add({ removeMember: () => instance.removeMember(apiConfig.member) }, 'removeMember')\n      .name('remove member');\n    apiFolder\n      .add({ removeMember: () => alert('Members in Hull-a: ' + instance.getMember()) }, 'removeMember')\n      .name('get member');\n  },\n);\n",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "插件类型",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "hull",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "插件唯一标识符，用于后续更新",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "members",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Hull 内的元素，包括节点和边",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "string[]",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "concavity",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "凹度，数值越大凹度越小；默认为 Infinity 代表为 Convex Hull",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Infinity",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "corner",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "拐角类型，可选值为 ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "rounded",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "smooth",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "sharp",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "rounded",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "padding",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "内边距",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "label",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "是否显示标签",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelPlacement",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "标签位置",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "left",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "right",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "top",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "center",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelBackground",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "是否显示背景",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelPadding",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "标签内边距",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number | number[]",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelCloseToPath",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "标签是否贴合轮廓",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelAutoRotate",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "标签是否跟随轮廓旋转，仅在 closeToPath 为 true 时生效",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelOffsetX",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "x 轴偏移量",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelOffsetY",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "y 轴偏移量",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelMaxWidth",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "文本的最大宽度，超出会自动省略",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "完整的标签样式见",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "此链接",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "concavity 属性用于控制 Hull 的凹度。当设置为 Infinity 时，生成的是凸包；否则会生成凹包。",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "// 凸包示例\nconst graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      concavity: Infinity, // 凸包\n      members: ['node-1', 'node-2'],\n    },\n  ],\n});\n\n// 凹包示例\nconst graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      concavity: 50, // 凹包\n      members: ['node-1', 'node-2'],\n    },\n  ],\n});\n",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "最简单的方式是直接使用预设配置：",
        "paraId": 11,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2'], // 需要包裹的节点 ID 列表\n    },\n  ],\n});\n",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": "效果如下：",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'view',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2'], // 需要包裹的节点 ID 列表\n    },\n  ],\n  behaviors: ['zoom-canvas', 'drag-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "您可以根据需要自定义 Hull 的样式，例如调整颜色、透明度等属性。",
        "paraId": 15,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2', 'node-3'],\n      stroke: '#ff000033', // 红色半透明边框\n      fill: '#7e3feb', // 浅紫色填充\n      fillOpacity: 0.2,\n      lineWidth: 2,\n      padding: 15, // 更大的内边距\n    },\n  ],\n});\n",
        "paraId": 16,
        "tocIndex": 8
    },
    {
        "value": "效果如下：",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'view',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2', 'node-3'],\n      stroke: '#ff000033', // 红色半透明边框\n      fill: '#7e3feb', // 浅紫色填充\n      fillOpacity: 0.2,\n      lineWidth: 2,\n      padding: 15, // 更大的内边距\n    },\n  ],\n  behaviors: ['zoom-canvas', 'drag-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "您可以配置标签的位置、背景、偏移量等属性，以增强可视化效果。",
        "paraId": 19,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2'],\n      label: true, // 显示标签\n      labelText: 'hull-a',\n      labelPlacement: 'top', // 标签位置\n      labelBackground: true, // 显示标签背景\n      labelPadding: 5, // 标签内边距\n    },\n  ],\n});\n",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "效果如下：",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'center',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2'],\n      label: true, // 显示标签\n      labelText: 'hull-a',\n      labelPlacement: 'top', // 标签位置\n      labelBackground: true, // 显示标签背景\n      labelPadding: 5, // 标签内边距\n    },\n  ],\n  behaviors: ['zoom-canvas', 'drag-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://assets.antv.antgroup.com/g6/collection.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const groupedNodesByCluster = data.nodes.reduce((acc, node) => {\n      const cluster = node.data.cluster;\n      acc[cluster] ||= [];\n      acc[cluster].push(node.id);\n      return acc;\n    }, {});\n\n    const createStyle = (baseColor) => ({\n      fill: baseColor,\n      stroke: baseColor,\n      labelFill: '#fff',\n      labelPadding: 2,\n      labelBackgroundFill: baseColor,\n      labelBackgroundRadius: 5,\n    });\n\n    const graph = new Graph({\n      container: 'container',\n      data,\n      behaviors: ['zoom-canvas', 'drag-canvas', 'drag-element'],\n      node: {\n        palette: { field: 'cluster' },\n      },\n      layout: {\n        type: 'force',\n        preventOverlap: true,\n        linkDistance: (d) => {\n          if (d.source === 'node0' || d.target === 'node0') {\n            return 200;\n          }\n          return 80;\n        },\n      },\n      plugins: [\n        {\n          key: 'hull-a',\n          type: 'hull',\n          members: groupedNodesByCluster['a'],\n          labelText: 'cluster-a',\n          ...createStyle('#1783FF'),\n        },\n        {\n          key: 'hull-b',\n          type: 'hull',\n          members: groupedNodesByCluster['b'],\n          labelText: 'cluster-b',\n          ...createStyle('#00C9C9'),\n        },\n        {\n          key: 'hull-c',\n          type: 'hull',\n          members: groupedNodesByCluster['c'],\n          labelText: 'cluster-c',\n          ...createStyle('#F08F56'),\n        },\n        {\n          key: 'hull-d',\n          type: 'hull',\n          members: groupedNodesByCluster['d'],\n          labelText: 'cluster-d',\n          ...createStyle('#D580FF'),\n        },\n      ],\n      autoFit: 'center',\n    });\n\n    graph.render();\n  });\n",
        "paraId": 23,
        "tocIndex": 10
    },
    {
        "value": "",
        "paraId": 24,
        "tocIndex": 10
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
//# sourceMappingURL=docs_manual_plugin_Hull_zh_md_q_hK4X-async.js.map