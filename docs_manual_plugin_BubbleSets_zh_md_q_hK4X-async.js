((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/BubbleSets.zh.md?type=text'],
{ "docs/manual/plugin/BubbleSets.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/BubbleSets.zh.md?watch=parent");
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
        "value": "BubbleSets 插件通过创建气泡形状来表示集合及其关系，帮助用户直观地理解集合间的交集、并集等逻辑关系。它是一种增强数据可视化效果的工具，特别适用于展示复杂的数据集合关系。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "BubbleSets 插件主要适用于以下场景：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "展示集合间的关系（如交集、并集）",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "增强数据可视化的表达能力",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "在复杂网络图中标识特定节点或边的集合",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "以下是一个简单的 BubbleSets 插件初始化示例：",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'bubble-sets',\n      members: ['node1', 'node2'], // 需要包裹的节点 ID 列表\n      label: true, // 是否显示标签\n    },\n  ],\n});\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    autoFit: 'center',\n    data: {\n      nodes: [\n        {\n          id: 'node-0',\n          data: { cluster: 'a' },\n          style: { x: 555, y: 151 },\n        },\n        {\n          id: 'node-1',\n          data: { cluster: 'a' },\n          style: { x: 532, y: 323 },\n        },\n        {\n          id: 'node-2',\n          data: { cluster: 'a' },\n          style: { x: 473, y: 227 },\n        },\n        {\n          id: 'node-3',\n          data: { cluster: 'a' },\n          style: { x: 349, y: 212 },\n        },\n        {\n          id: 'node-4',\n          data: { cluster: 'b' },\n          style: { x: 234, y: 201 },\n        },\n        {\n          id: 'node-5',\n          data: { cluster: 'b' },\n          style: { x: 338, y: 333 },\n        },\n        {\n          id: 'node-6',\n          data: { cluster: 'b' },\n          style: { x: 365, y: 91 },\n        },\n      ],\n      edges: [\n        {\n          id: 'edge-0',\n          source: 'node-0',\n          target: 'node-2',\n        },\n        {\n          id: 'edge-1',\n          source: 'node-1',\n          target: 'node-2',\n        },\n        {\n          id: 'edge-2',\n          source: 'node-2',\n          target: 'node-3',\n        },\n        {\n          id: 'edge-3',\n          source: 'node-3',\n          target: 'node-4',\n        },\n        {\n          id: 'edge-4',\n          source: 'node-3',\n          target: 'node-5',\n        },\n        {\n          id: 'edge-5',\n          source: 'node-3',\n          target: 'node-6',\n        },\n      ],\n    },\n    node: {\n      style: { labelText: (d) => d.id },\n      palette: { field: 'cluster', color: ['#7e3feb', '#ffa940'] },\n    },\n    behaviors: ['drag-canvas', 'drag-element'],\n    plugins: [\n      'grid-line',\n      {\n        type: 'bubble-sets',\n        key: 'bubble-sets',\n        members: ['node-0', 'node-1', 'node-2', 'node-3'],\n        labelText: 'bubblesets-a',\n        fill: '#7e3feb',\n        fillOpacity: 0.1,\n        stroke: '#7e3feb',\n        strokeOpacity: 1,\n        labelFill: '#fff',\n        labelPadding: 2,\n        labelBackgroundFill: '#7e3feb',\n        labelBackgroundRadius: 5,\n      },\n    ],\n  },\n  { width: 600, height: 450 },\n  (gui, graph) => {\n    const options = {\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      avoidMembers: [],\n      // style\n      fill: '#7e3feb',\n      fillOpacity: 0.1,\n      stroke: '#7e3feb',\n      strokeOpacity: 1,\n      // label\n      label: true,\n      labelCloseToPath: true,\n      labelAutoRotate: true,\n      labelOffsetX: 0,\n      labelOffsetY: 0,\n      labelPlacement: 'bottom',\n      // bubblesets\n      maxRoutingIterations: 100,\n      maxMarchingIterations: 20,\n      pixelGroup: 4,\n      edgeR0: 10,\n      edgeR1: 20,\n      nodeR0: 15,\n      nodeR1: 50,\n      morphBuffer: 10,\n      threshold: 1,\n      memberInfluenceFactor: 1,\n      edgeInfluenceFactor: 1,\n      nonMemberInfluenceFactor: -0.8,\n      virtualEdges: true,\n    };\n\n    const optionFolder = gui.addFolder('Bubblesets Options');\n    optionFolder.add(options, 'type').disable();\n    optionFolder.addColor(options, 'fill');\n    optionFolder.addColor(options, 'stroke');\n    optionFolder.add(options, 'fillOpacity', 0, 1, 0.1);\n    optionFolder.add(options, 'strokeOpacity', 0, 1, 0.1);\n    optionFolder.add(options, 'label');\n    optionFolder.add(options, 'labelCloseToPath');\n    optionFolder.add(options, 'labelAutoRotate');\n    optionFolder.add(options, 'labelOffsetX', 0, 20, 1);\n    optionFolder.add(options, 'labelOffsetY', 0, 20, 1);\n    optionFolder.add(options, 'labelPlacement', ['left', 'right', 'top', 'bottom', 'center']);\n    optionFolder.add(options, 'maxRoutingIterations', 0, 200, 1);\n    optionFolder.add(options, 'maxMarchingIterations', 0, 40, 1);\n    optionFolder.add(options, 'pixelGroup', 0, 20, 1);\n    optionFolder.add(options, 'edgeR0', 0, 50, 1);\n    optionFolder.add(options, 'edgeR1', 0, 50, 1);\n    optionFolder.add(options, 'nodeR0', 0, 50, 1);\n    optionFolder.add(options, 'nodeR1', 0, 50, 1);\n    optionFolder.add(options, 'morphBuffer', 0, 20, 1);\n    optionFolder.add(options, 'threshold', -1, 1, 0.1);\n    optionFolder.add(options, 'memberInfluenceFactor', -1, 1, 0.1);\n    optionFolder.add(options, 'edgeInfluenceFactor', -1, 1, 0.1);\n    optionFolder.add(options, 'nonMemberInfluenceFactor', -1, 1, 0.1);\n    optionFolder.add(options, 'virtualEdges');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'bubble-sets',\n        [property]: value,\n      });\n      graph.render();\n    });\n\n    const apiConfig = {\n      member: 'node-1',\n      avoidMember: 'node-1',\n    };\n    const apiFolder = gui.addFolder('Bubblesets API');\n    const instance = graph.getPluginInstance('bubble-sets');\n    const nodeIds = graph.getData().nodes.map((node) => node.id);\n    const edgeIds = graph.getData().edges.map((edge) => edge.id);\n    apiFolder.add(apiConfig, 'member', [...nodeIds, ...edgeIds]);\n    apiFolder.add({ addMember: () => instance.addMember(apiConfig.member) }, 'addMember').name('add member');\n    apiFolder\n      .add({ removeMember: () => instance.removeMember(apiConfig.member) }, 'removeMember')\n      .name('remove member');\n    apiFolder\n      .add({ removeMember: () => alert('Members in Bubblesets: ' + instance.getMember()) }, 'removeMember')\n      .name('get member');\n    apiFolder.add(apiConfig, 'avoidMember', nodeIds);\n    apiFolder\n      .add({ addAvoidMember: () => instance.addAvoidMember(apiConfig.avoidMember) }, 'addAvoidMember')\n      .name('add avoid member');\n    apiFolder\n      .add({ removeAvoidMember: () => instance.removeAvoidMember(apiConfig.avoidMember) }, 'removeAvoidMember')\n      .name('remove avoid member');\n    apiFolder\n      .add({ removeMember: () => alert('Avoid members in Bubblesets: ' + instance.getAvoidMember()) }, 'removeMember')\n      .name('get avoid member');\n  },\n);\n",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "插件类型",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "bubble-sets",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "插件唯一标识符，用于后续更新",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "members",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "成员元素，包括节点和边，",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "string[]",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "avoidMembers",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "需要避开的元素，在绘制轮廓时不会包含这些元素（目前支持设置节点）",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string[]",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "label",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "是否显示标签",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "labelPlacement",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "标签位置",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "left",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "right",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "top",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "center",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "labelBackground",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "是否显示背景",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "labelPadding",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "标签内边距",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number | number[]",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "labelCloseToPath",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "标签是否贴合轮廓，",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "labelAutoRotate",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "标签是否跟随轮廓旋转，",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "labelOffsetX",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "标签 x 轴偏移量",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "labelOffsetY",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "标签 y 轴偏移量",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "labelMaxWidth",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "文本的最大宽度，超出会自动省略",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "maxRoutingIterations",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "计算成员之间路径的最大迭代次数",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "100",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "maxMarchingIterations",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "计算轮廓的最大迭代次数",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "20",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "pixelGroup",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "每个潜在区域组的像素数，用于提高速度",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "4",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "edgeR0",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "边的半径参数 R0",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "edgeR1",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "边的半径参数 R1",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "nodeR0",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "节点的半径参数 R0",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "nodeR1",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "节点的半径参数 R1",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "morphBuffer",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "形态缓冲区大小",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "threshold",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "阈值",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "memberInfluenceFactor",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "成员影响因子",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "edgeInfluenceFactor",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "边影响因子",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "nonMemberInfluenceFactor",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "非成员影响因子",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "virtualEdges",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "是否使用虚拟边",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "成员元素，包括节点和边。",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2'],\n    },\n  ],\n});\n",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "效果如下：",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'view',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        id: 'edge-0',\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-1',\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-2',\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        id: 'edge-3',\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        id: 'edge-4',\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        id: 'edge-5',\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n  plugins: [\n    {\n      type: 'bubble-sets',\n      key: 'bubble-sets-a',\n      members: ['node-0', 'node-1', 'node-2'],\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "示例：不让 label 贴合轮廓",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      label: true, // 显示标签\n      labelText: 'cluster-a',\n      labelCloseToPath: false,\n    },\n  ],\n});\n",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "效果如下：",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'view',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        id: 'edge-0',\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-1',\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-2',\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        id: 'edge-3',\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        id: 'edge-4',\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        id: 'edge-5',\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  plugins: [\n    {\n      key: 'bubble-sets-a',\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      label: true, // 显示标签\n      labelText: 'cluster-a',\n      labelCloseToPath: false,\n    },\n  ],\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "示例：不让label标签跟随轮廓旋转",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      label: true, // 显示标签\n      labelText: 'cluster-a',\n      labelAutoRotate: false,\n    },\n  ],\n});\n",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "效果如下：",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'view',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        id: 'edge-0',\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-1',\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-2',\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        id: 'edge-3',\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        id: 'edge-4',\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        id: 'edge-5',\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  plugins: [\n    {\n      key: 'bubble-sets-a',\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      label: true, // 显示标签\n      labelText: 'cluster-a',\n      labelAutoRotate: false,\n    },\n  ],\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 21,
        "tocIndex": 7
    },
    {
        "value": "最简单的方式是直接使用预设配置：",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n    },\n  ],\n});\n",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "效果如下：",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'center',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        id: 'edge-0',\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-1',\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-2',\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        id: 'edge-3',\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        id: 'edge-4',\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        id: 'edge-5',\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n  plugins: [\n    {\n      type: 'bubble-sets',\n      key: 'bubble-sets-a',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      fill: '#7e3feb', // 气泡填充颜色\n      fillOpacity: 0.1, // 填充透明度\n      stroke: '#7e3feb', // 边框颜色\n      strokeOpacity: 1, // 边框透明度\n    },\n  ],\n});\n",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "效果如下：",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'center',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        id: 'edge-0',\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-1',\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-2',\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        id: 'edge-3',\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        id: 'edge-4',\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        id: 'edge-5',\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  plugins: [\n    {\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      fill: '#7e3feb', // 气泡填充颜色\n      fillOpacity: 0.1, // 填充透明度\n      stroke: '#7e3feb', // 边框颜色\n      strokeOpacity: 1, // 边框透明度\n    },\n  ],\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 28,
        "tocIndex": 10
    },
    {
        "value": "您可以配置标签的位置、背景、偏移量等属性，以增强可视化效果。",
        "paraId": 29,
        "tocIndex": 11
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      label: true, // 显示标签\n      labelPlacement: 'top', // 标签位置\n      labelBackground: true, // 显示标签背景\n      labelPadding: 5, // 标签内边距\n    },\n  ],\n});\n",
        "paraId": 30,
        "tocIndex": 11
    },
    {
        "value": "效果如下：",
        "paraId": 31,
        "tocIndex": 11
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'center',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        id: 'edge-0',\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-1',\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        id: 'edge-2',\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        id: 'edge-3',\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        id: 'edge-4',\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        id: 'edge-5',\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  plugins: [\n    {\n      key: 'bubble-sets-a',\n      type: 'bubble-sets',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      label: true, // 显示标签\n      labelText: 'cluster-a',\n      labelPlacement: 'top', // 标签位置\n      labelBackground: true, // 显示标签背景\n      labelPadding: 5, // 标签内边距\n    },\n  ],\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 32,
        "tocIndex": 11
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://assets.antv.antgroup.com/g6/collection.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const groupedNodesByCluster = data.nodes.reduce((acc, node) => {\n      const cluster = node.data.cluster;\n      acc[cluster] ||= [];\n      acc[cluster].push(node.id);\n      return acc;\n    }, {});\n\n    const createStyle = (baseColor) => ({\n      fill: baseColor,\n      stroke: baseColor,\n      labelFill: '#fff',\n      labelPadding: 2,\n      labelBackgroundFill: baseColor,\n      labelBackgroundRadius: 5,\n    });\n\n    const graph = new Graph({\n      container: 'container',\n      data,\n      behaviors: ['zoom-canvas', 'drag-canvas', 'drag-element'],\n      node: {\n        palette: { field: 'cluster' },\n      },\n      layout: {\n        type: 'force',\n        preventOverlap: true,\n        linkDistance: (d) => {\n          if (d.source === 'node0' || d.target === 'node0') {\n            return 200;\n          }\n          return 80;\n        },\n      },\n      plugins: [\n        {\n          key: 'bubble-sets-a',\n          type: 'bubble-sets',\n          members: groupedNodesByCluster['a'],\n          labelText: 'cluster-a',\n          ...createStyle('#1783FF'),\n        },\n        {\n          key: 'bubble-sets-b',\n          type: 'bubble-sets',\n          members: groupedNodesByCluster['b'],\n          labelText: 'cluster-b',\n          ...createStyle('#00C9C9'),\n        },\n        {\n          key: 'bubble-sets-c',\n          type: 'bubble-sets',\n          members: groupedNodesByCluster['c'],\n          labelText: 'cluster-c',\n          ...createStyle('#F08F56'),\n        },\n        {\n          key: 'bubble-sets-d',\n          type: 'bubble-sets',\n          members: groupedNodesByCluster['d'],\n          labelText: 'cluster-d',\n          ...createStyle('#D580FF'),\n        },\n      ],\n      autoFit: 'center',\n    });\n\n    graph.render();\n  });\n",
        "paraId": 33,
        "tocIndex": 12
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
//# sourceMappingURL=docs_manual_plugin_BubbleSets_zh_md_q_hK4X-async.js.map