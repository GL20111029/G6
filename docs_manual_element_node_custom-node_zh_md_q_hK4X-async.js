((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/custom-node.zh.md?type=text'],
{ "docs/manual/element/node/custom-node.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/custom-node.zh.md?watch=parent");
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
        "value": "G6 提供了一系列 ",
        "paraId": 0
    },
    {
        "value": "内置节点",
        "paraId": 1
    },
    {
        "value": "，包含 ",
        "paraId": 0
    },
    {
        "value": "circle（圆形节点）",
        "paraId": 2
    },
    {
        "value": "、",
        "paraId": 0
    },
    {
        "value": "diamond（菱形节点）",
        "paraId": 3
    },
    {
        "value": "、",
        "paraId": 0
    },
    {
        "value": "donut（甜甜圈节点）",
        "paraId": 4
    },
    {
        "value": "、",
        "paraId": 0
    },
    {
        "value": "ellipse（椭圆节点）",
        "paraId": 5
    },
    {
        "value": "、",
        "paraId": 0
    },
    {
        "value": "hexagon（六边形节点）",
        "paraId": 6
    },
    {
        "value": "、",
        "paraId": 0
    },
    {
        "value": "html（HTML节点）",
        "paraId": 7
    },
    {
        "value": "、",
        "paraId": 0
    },
    {
        "value": "image（图片节点）",
        "paraId": 8
    },
    {
        "value": "、",
        "paraId": 0
    },
    {
        "value": "rect（矩形节点）",
        "paraId": 9
    },
    {
        "value": "、",
        "paraId": 0
    },
    {
        "value": "star（星形节点）",
        "paraId": 10
    },
    {
        "value": " 和 ",
        "paraId": 0
    },
    {
        "value": "triangle（三角形节点）",
        "paraId": 11
    },
    {
        "value": "。这些内置节点能够满足大部分基础场景需求。",
        "paraId": 0
    },
    {
        "value": "但在实际项目中，你可能会遇到这些基础节点无法满足的需求。这时，你需要创建自定义节点。别担心，这比你想象的要简单！",
        "paraId": 12
    },
    {
        "value": "选择合适的方式",
        "paraId": 13
    },
    {
        "value": "创建自定义节点的方式主要有两种途径：",
        "paraId": 14,
        "tocIndex": 0
    },
    {
        "value": "推荐",
        "paraId": 15,
        "tocIndex": 0
    },
    {
        "value": "这是最常用的方式，你可以选择继承以下类型之一：",
        "paraId": 16,
        "tocIndex": 1
    },
    {
        "value": "BaseNode",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " - 最基础的节点类，提供节点的核心功能",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "Circle",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " - 圆形节点",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "Rect",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " - 矩形节点",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "Ellipse",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " - 椭圆节点",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "Diamond",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " - 菱形节点",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "Triangle",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " - 三角形节点",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "Star",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " - 星形节点",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "Image",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " - 图片节点",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "Donut",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " - 甜甜圈节点",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "Hexagon",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": " - 六边形节点",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "为什么选择这种方式？",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "📌 ",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "代码量少",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "：复用现有节点的属性和方法，只需专注于新增功能",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "📌 ",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "开发迅速",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "：适合大多数项目需求，快速实现业务目标",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "📌 ",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "易于维护",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "：代码结构清晰，继承关系明确",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "如果你选择继承现有节点类型（推荐），可以直接跳到 ",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": "三步创建你的第一个自定义节点",
        "paraId": 21,
        "tocIndex": 1
    },
    {
        "value": " 开始实践。大部分用户都会选择这种方式！",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": "高级用法",
        "paraId": 22,
        "tocIndex": 1
    },
    {
        "value": "如果现有节点类型都不满足需求，你可以基于 G 的底层图形系统从零创建节点。",
        "paraId": 23,
        "tocIndex": 2
    },
    {
        "value": "为什么选择这种方式？",
        "paraId": 24,
        "tocIndex": 2
    },
    {
        "value": "📌 ",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "最大自由度",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "：完全控制节点的每个细节，实现任意复杂效果",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "📌 ",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "特殊需求",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "：现有节点类型无法满足的高度定制场景",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "📌 ",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "性能优化",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "：针对特定场景的性能优化",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "从零开发的自定义节点需要自行处理所有细节，包括图形绘制、事件响应、状态变化等，开发难度较大。这里可以直接参考 ",
        "paraId": 26
    },
    {
        "value": "源码",
        "paraId": 26
    },
    {
        "value": " 进行实现。",
        "paraId": 26
    },
    {
        "value": "让我们从一个简单的例子开始 - 创建一个 ",
        "paraId": 27,
        "tocIndex": 3
    },
    {
        "value": "带有主副标题的矩形节点",
        "paraId": 27,
        "tocIndex": 3
    },
    {
        "value": "：",
        "paraId": 27,
        "tocIndex": 3
    },
    {
        "value": "import { Graph, register, Rect, ExtensionCategory } from '@antv/g6';\n\n// 第一步：创建自定义节点类\nclass DualLabelNode extends Rect {\n  // 副标题样式\n  getSubtitleStyle(attributes) {\n    return {\n      x: 0,\n      y: 45, // 放在主标题下方\n      text: attributes.subtitle || '',\n      fontSize: 12,\n      fill: '#666',\n      textAlign: 'center',\n      textBaseline: 'middle',\n    };\n  }\n\n  // 绘制副标题\n  drawSubtitleShape(attributes, container) {\n    const subtitleStyle = this.getSubtitleStyle(attributes);\n    this.upsert('subtitle', 'text', subtitleStyle, container);\n  }\n\n  // 渲染方法\n  render(attributes = this.parsedAttributes, container) {\n    // 1. 渲染基础矩形和主标题\n    super.render(attributes, container);\n\n    // 2. 添加副标题\n    this.drawSubtitleShape(attributes, container);\n  }\n}\n\n// 第二步：注册自定义节点\nregister(ExtensionCategory.NODE, 'dual-label-node', DualLabelNode);\n\n// 第三步：使用自定义节点\nconst graph = new Graph({\n  container: 'container',\n  height: 200,\n  data: {\n    nodes: [\n      {\n        id: 'node1',\n        style: { x: 100, y: 100 },\n        data: {\n          title: '节点 A', // 主标题\n          subtitle: '你的第一个自定义节点', // 副标题\n        },\n      },\n    ],\n  },\n  node: {\n    type: 'dual-label-node',\n    style: {\n      fill: '#7FFFD4',\n      stroke: '#5CACEE',\n      lineWidth: 2,\n      radius: 5,\n      // 主标题样式\n      labelText: (d) => d.data.title,\n      labelFill: '#222',\n      labelFontSize: 14,\n      labelFontWeight: 500,\n      // 副标题\n      subtitle: (d) => d.data.subtitle,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 28,
        "tocIndex": 3
    },
    {
        "value": "继承 G6 的 ",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "Rect",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "（矩形节点），并添加一个副标题：",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "import { Rect, register, Graph, ExtensionCategory } from '@antv/g6';\n\n// 创建自定义节点，继承自 Rect\nclass DualLabelNode extends Rect {\n  // 副标题样式\n  getSubtitleStyle(attributes) {\n    return {\n      x: 0,\n      y: 45, // 放在主标题下方\n      text: attributes.subtitle || '',\n      fontSize: 12,\n      fill: '#666',\n      textAlign: 'center',\n      textBaseline: 'middle',\n    };\n  }\n\n  // 绘制副标题\n  drawSubtitleShape(attributes, container) {\n    const subtitleStyle = this.getSubtitleStyle(attributes);\n    this.upsert('subtitle', 'text', subtitleStyle, container);\n  }\n\n  // 渲染方法\n  render(attributes = this.parsedAttributes, container) {\n    // 1. 渲染基础矩形和主标题\n    super.render(attributes, container);\n\n    // 2. 添加副标题\n    this.drawSubtitleShape(attributes, container);\n  }\n}\n",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "使用 ",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": "register",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": " 方法注册节点类型，这样 G6 才能识别你的自定义节点：",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": "register(ExtensionCategory.NODE, 'dual-label-node', DualLabelNode);\n",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": "register",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": " 方法需要三个参数：",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "扩展类别：",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "ExtensionCategory.NODE",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": " 表示这是一个节点类型",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "类型名称：",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "dual-label-node",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": " 是我们给这个自定义节点起的名字，后续会在配置中使用",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "类定义：",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "DualLabelNode",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": " 是我们刚刚创建的节点类",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "在图配置中使用自定义节点：",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  data: {\n    nodes: [\n      {\n        id: 'node1',\n        style: { x: 100, y: 100 },\n        data: {\n          title: '节点 A', // 主标题\n          subtitle: '你的第一个自定义节点', // 副标题\n        },\n      },\n    ],\n  },\n  node: {\n    type: 'dual-label-node',\n    style: {\n      fill: '#7FFFD4',\n      stroke: '#5CACEE',\n      lineWidth: 2,\n      radius: 8,\n      // 主标题样式\n      labelText: (d) => d.data.title,\n      labelFill: '#222',\n      labelFontSize: 14,\n      labelFontWeight: 500,\n      // 副标题\n      subtitle: (d) => d.data.subtitle,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 36,
        "tocIndex": 6
    },
    {
        "value": "🎉 恭喜！你已经创建了第一个自定义节点。它看起来很简单，但这个过程包含了自定义节点的核心思想：",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "继承一个基础节点类型",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "，然后 ",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "重写 ",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "render",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": " 方法",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": " 来添加自定义内容。",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "在创建复杂的自定义节点之前，理解数据如何流入自定义节点是非常重要的。G6 为自定义节点提供了多种数据获取方式：",
        "paraId": 38,
        "tocIndex": 7
    },
    {
        "value": "attributes",
        "paraId": 39
    },
    {
        "value": "render",
        "paraId": 40,
        "tocIndex": 8
    },
    {
        "value": " 方法的第一个参数 ",
        "paraId": 40,
        "tocIndex": 8
    },
    {
        "value": "attributes",
        "paraId": 40,
        "tocIndex": 8
    },
    {
        "value": " 包含了经过处理的样式属性，包括数据驱动的样式：",
        "paraId": 40,
        "tocIndex": 8
    },
    {
        "value": "class CustomNode extends Rect {\n  render(attributes, container) {\n    // attributes 包含了所有样式属性，包括数据驱动的样式\n    console.log('当前节点的所有属性:', attributes);\n\n    // 如果在 style 中定义了 customData: (d) => d.data.someValue\n    // 那么可以通过 attributes.customData 获取\n    const customValue = attributes.customData;\n\n    super.render(attributes, container);\n  }\n}\n",
        "paraId": 41,
        "tocIndex": 8
    },
    {
        "value": "this.context.graph",
        "paraId": 39
    },
    {
        "value": "当你需要访问节点的原始数据时，可以通过图实例获取：",
        "paraId": 42,
        "tocIndex": 9
    },
    {
        "value": "class CustomNode extends Rect {\n  // 便捷的数据获取方法\n  get nodeData() {\n    return this.context.graph.getNodeData(this.id);\n  }\n\n  get data() {\n    return this.nodeData.data || {};\n  }\n\n  render(attributes, container) {\n    // 获取节点的完整数据\n    const nodeData = this.nodeData;\n    console.log('节点完整数据:', nodeData);\n\n    // 获取 data 字段中的业务数据\n    const businessData = this.data;\n    console.log('业务数据:', businessData);\n\n    super.render(attributes, container);\n  }\n}\n",
        "paraId": 43,
        "tocIndex": 9
    },
    {
        "value": "让我们通过一个具体例子来理解数据是如何从图数据传递到自定义节点的：",
        "paraId": 44,
        "tocIndex": 10
    },
    {
        "value": "import { Graph, register, Rect, ExtensionCategory } from '@antv/g6';\n\nclass DataFlowNode extends Rect {\n  // 方式二：通过 graph 获取原始数据\n  get nodeData() {\n    return this.context.graph.getNodeData(this.id);\n  }\n\n  get data() {\n    return this.nodeData.data || {};\n  }\n\n  render(attributes, container) {\n    // 方式一：从 attributes 获取处理后的样式\n    console.log('从 attributes 获取:', {\n      iconUrl: attributes.iconUrl,\n      userName: attributes.userName,\n    });\n\n    // 方式二：从原始数据获取\n    console.log('从原始数据获取:', {\n      icon: this.data.icon,\n      name: this.data.name,\n      role: this.data.role,\n    });\n\n    // 渲染基础矩形\n    super.render(attributes, container);\n\n    // 使用数据渲染自定义内容\n    if (attributes.iconUrl) {\n      this.upsert(\n        'icon',\n        'image',\n        {\n          x: -25,\n          y: -12,\n          width: 20,\n          height: 20,\n          src: attributes.iconUrl,\n        },\n        container,\n      );\n    }\n\n    if (attributes.userName) {\n      this.upsert(\n        'username',\n        'text',\n        {\n          x: 10,\n          y: 0,\n          text: attributes.userName,\n          fontSize: 10,\n          fill: '#666',\n          textAlign: 'center',\n          textBaseline: 'middle',\n        },\n        container,\n      );\n    }\n  }\n}\n\nregister(ExtensionCategory.NODE, 'data-flow-node', DataFlowNode);\n\nconst graph = new Graph({\n  container: 'container',\n  height: 200,\n  data: {\n    nodes: [\n      {\n        id: 'user1',\n        style: { x: 100, y: 100 },\n        // 这里是节点的业务数据\n        data: {\n          name: '张三',\n          role: '开发者',\n          icon: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',\n        },\n      },\n    ],\n  },\n  node: {\n    type: 'data-flow-node',\n    style: {\n      size: [80, 40],\n      fill: '#f0f9ff',\n      stroke: '#0ea5e9',\n      lineWidth: 1,\n      radius: 4,\n      // 将 data 中的数据映射到样式属性\n      iconUrl: (d) => d.data.icon, // 这会变成 attributes.iconUrl\n      userName: (d) => d.data.name, // 这会变成 attributes.userName\n      // 主标题使用角色信息\n      labelText: (d) => d.data.role,\n      labelFontSize: 12,\n      labelFill: '#0369a1',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 45,
        "tocIndex": 10
    },
    {
        "value": "图数据定义",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "：在 ",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "data.nodes[].data",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": " 中定义业务数据",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "样式映射",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "：在 ",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "node.style",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": " 中使用函数将数据映射到样式属性",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "节点获取",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "：在自定义节点中通过 ",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "attributes",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": " 或 ",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "this.context.graph",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": " 获取数据",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "渲染使用",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "：使用获取到的数据渲染自定义图形",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "让我们通过实际例子，逐步增加节点的复杂度和功能。",
        "paraId": 47,
        "tocIndex": 11
    },
    {
        "value": "这个例子展示如何创建一个包含头像、姓名、状态徽章的用户卡片节点：",
        "paraId": 48,
        "tocIndex": 12
    },
    {
        "value": "import { Graph, register, Rect, ExtensionCategory } from '@antv/g6';\n\nclass UserCardNode extends Rect {\n  get nodeData() {\n    return this.context.graph.getNodeData(this.id);\n  }\n\n  get data() {\n    return this.nodeData.data || {};\n  }\n\n  // 头像样式\n  getAvatarStyle(attributes) {\n    const [width, height] = this.getSize(attributes);\n    return {\n      x: -width / 2 + 20,\n      y: -height / 2 + 15,\n      width: 30,\n      height: 30,\n      src: attributes.avatarUrl || '',\n      radius: 15, // 圆形头像\n    };\n  }\n\n  drawAvatarShape(attributes, container) {\n    if (!attributes.avatarUrl) return;\n\n    const avatarStyle = this.getAvatarStyle(attributes);\n    this.upsert('avatar', 'image', avatarStyle, container);\n  }\n\n  // 状态徽章样式\n  getBadgeStyle(attributes) {\n    const [width, height] = this.getSize(attributes);\n    const status = this.data.status || 'offline';\n    const colorMap = {\n      online: '#52c41a',\n      busy: '#faad14',\n      offline: '#8c8c8c',\n    };\n\n    return {\n      x: width / 2 - 8,\n      y: -height / 2 + 8,\n      r: 4,\n      fill: colorMap[status],\n      stroke: '#fff',\n      lineWidth: 2,\n    };\n  }\n\n  drawBadgeShape(attributes, container) {\n    const badgeStyle = this.getBadgeStyle(attributes);\n    this.upsert('badge', 'circle', badgeStyle, container);\n  }\n\n  // 用户名样式\n  getUsernameStyle(attributes) {\n    const [width, height] = this.getSize(attributes);\n    return {\n      x: -width / 2 + 55,\n      y: -height / 2 + 20,\n      text: attributes.username || '',\n      fontSize: 14,\n      fill: '#262626',\n      fontWeight: 'bold',\n      textAlign: 'left',\n      textBaseline: 'middle',\n    };\n  }\n\n  drawUsernameShape(attributes, container) {\n    if (!attributes.username) return;\n\n    const usernameStyle = this.getUsernameStyle(attributes);\n    this.upsert('username', 'text', usernameStyle, container);\n  }\n\n  // 角色标签样式\n  getRoleStyle(attributes) {\n    const [width, height] = this.getSize(attributes);\n    return {\n      x: -width / 2 + 55,\n      y: -height / 2 + 35,\n      text: attributes.userRole || '',\n      fontSize: 11,\n      fill: '#8c8c8c',\n      textAlign: 'left',\n      textBaseline: 'middle',\n    };\n  }\n\n  drawRoleShape(attributes, container) {\n    if (!attributes.userRole) return;\n\n    const roleStyle = this.getRoleStyle(attributes);\n    this.upsert('role', 'text', roleStyle, container);\n  }\n\n  render(attributes, container) {\n    // 渲染基础矩形\n    super.render(attributes, container);\n\n    // 添加各个组件\n    this.drawAvatarShape(attributes, container);\n    this.drawBadgeShape(attributes, container);\n    this.drawUsernameShape(attributes, container);\n    this.drawRoleShape(attributes, container);\n  }\n}\n\nregister(ExtensionCategory.NODE, 'user-card-node', UserCardNode);\n\nconst graph = new Graph({\n  container: 'container',\n  height: 200,\n  data: {\n    nodes: [\n      {\n        id: 'user1',\n        style: { x: 100, y: 100 },\n        data: {\n          name: '张小明',\n          role: '前端工程师',\n          status: 'online',\n          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang',\n        },\n      },\n    ],\n  },\n  node: {\n    type: 'user-card-node',\n    style: {\n      size: [140, 50],\n      fill: '#ffffff',\n      stroke: '#d9d9d9',\n      lineWidth: 1,\n      radius: 6,\n      // 数据映射\n      avatarUrl: (d) => d.data.avatar,\n      username: (d) => d.data.name,\n      userRole: (d) => d.data.role,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 49,
        "tocIndex": 12
    },
    {
        "value": "给节点加一个蓝色按钮，点击后触发事件（打印日志或执行回调）。",
        "paraId": 50,
        "tocIndex": 13
    },
    {
        "value": "import { Graph, register, Rect, ExtensionCategory } from '@antv/g6';\n\nclass ClickableNode extends Rect {\n  getButtonStyle(attributes) {\n    return {\n      x: 40,\n      y: -10,\n      width: 20,\n      height: 20,\n      radius: 10,\n      fill: '#1890ff',\n      cursor: 'pointer', // 鼠标指针变为手型\n    };\n  }\n\n  drawButtonShape(attributes, container) {\n    const btnStyle = this.getButtonStyle(attributes, container);\n    const btn = this.upsert('button', 'rect', btnStyle, container);\n\n    // 为按钮添加点击事件\n    if (!btn.__clickBound) {\n      btn.addEventListener('click', (e) => {\n        // 阻止事件冒泡，避免触发节点的点击事件\n        e.stopPropagation();\n\n        // 执行业务逻辑\n        console.log('Button clicked on node:', this.id);\n\n        // 如果数据中有回调函数，则调用\n        if (typeof attributes.onButtonClick === 'function') {\n          attributes.onButtonClick(this.id, this.data);\n        }\n      });\n      btn.__clickBound = true; // 标记已绑定事件，避免重复绑定\n    }\n  }\n\n  render(attributes, container) {\n    super.render(attributes, container);\n\n    // 添加一个按钮\n    this.drawButtonShape(attributes, container);\n  }\n}\n\nregister(ExtensionCategory.NODE, 'clickable-node', ClickableNode);\n\nconst graph = new Graph({\n  container: 'container',\n  height: 200,\n  data: {\n    nodes: [\n      {\n        id: 'node1',\n        style: { x: 100, y: 100 },\n      },\n    ],\n  },\n  node: {\n    type: 'clickable-node', // 指定使用我们的自定义节点\n    style: {\n      size: [60, 30],\n      fill: '#7FFFD4',\n      stroke: '#5CACEE',\n      lineWidth: 2,\n      radius: 5,\n      onButtonClick: (id, data) => {},\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 51,
        "tocIndex": 13
    },
    {
        "value": "常见的交互都需要节点和边通过样式变化做出反馈，例如鼠标移动到节点上、点击选中节点/边、通过交互激活边上的交互等，都需要改变节点和边的样式，有两种方式来实现这种效果：",
        "paraId": 52,
        "tocIndex": 14
    },
    {
        "value": "从 ",
        "paraId": 53,
        "tocIndex": 14
    },
    {
        "value": "data.states",
        "paraId": 53,
        "tocIndex": 14
    },
    {
        "value": " 获取当前状态，在自定义节点类中处理状态变化；",
        "paraId": 53,
        "tocIndex": 14
    },
    {
        "value": "将交互状态同原始数据和绘制节点的逻辑分开，仅更新节点。",
        "paraId": 53,
        "tocIndex": 14
    },
    {
        "value": "我们推荐用户使用第二种方式来实现节点的状态调整，可以通过以下方式来实现：",
        "paraId": 54,
        "tocIndex": 14
    },
    {
        "value": "实现自定义节点；",
        "paraId": 55,
        "tocIndex": 14
    },
    {
        "value": "在图配置项中配置节点状态样式；",
        "paraId": 55,
        "tocIndex": 14
    },
    {
        "value": "通过 ",
        "paraId": 55,
        "tocIndex": 14
    },
    {
        "value": "graph.setElementState()",
        "paraId": 55,
        "tocIndex": 14
    },
    {
        "value": " 方法来设置节点状态。",
        "paraId": 55,
        "tocIndex": 14
    },
    {
        "value": "基于 rect 扩展出一个 hole 图形，默认填充色为白色，当鼠标点击时变成橙色，实现这一效果的示例代码如下：",
        "paraId": 56,
        "tocIndex": 14
    },
    {
        "value": "import { Rect, register, Graph, ExtensionCategory } from '@antv/g6';\n\n// 1. 定义节点类\nclass SelectableNode extends Rect {\n  getHoleStyle(attributes) {\n    return {\n      x: 20,\n      y: -10,\n      radius: 10,\n      width: 20,\n      height: 20,\n      fill: attributes.holeFill,\n    };\n  }\n\n  drawHoleShape(attributes, container) {\n    const holeStyle = this.getHoleStyle(attributes, container);\n\n    this.upsert('hole', 'rect', holeStyle, container);\n  }\n\n  render(attributes, container) {\n    super.render(attributes, container);\n\n    this.drawHoleShape(attributes, container);\n  }\n}\n\n// 2. 注册节点\nregister(ExtensionCategory.NODE, 'selectable-node', SelectableNode, true);\n\n// 3. 创建图实例\nconst graph = new Graph({\n  container: 'container',\n  height: 200,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 100, y: 100 } }],\n  },\n  node: {\n    type: 'selectable-node',\n    style: {\n      size: [120, 60],\n      radius: 6,\n      fill: '#7FFFD4',\n      stroke: '#5CACEE',\n      lineWidth: 2,\n      holeFill: '#fff',\n    },\n    state: {\n      // 鼠标选中状态\n      selected: {\n        holeFill: 'orange',\n      },\n    },\n  },\n});\n\n// 4. 添加节点交互\ngraph.on('node:click', (evt) => {\n  const nodeId = evt.target.id;\n\n  graph.setElementState(nodeId, ['selected']);\n});\n\ngraph.render();\n",
        "paraId": 57,
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
//# sourceMappingURL=docs_manual_element_node_custom-node_zh_md_q_hK4X-async.js.map