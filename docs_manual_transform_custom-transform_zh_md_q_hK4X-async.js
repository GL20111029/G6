((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/transform/custom-transform.zh.md?type=text'],
{ "docs/manual/transform/custom-transform.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/transform/custom-transform.zh.md?watch=parent");
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
        "value": "自定义数据处理允许用户在业务实现过程中，把额外的数据处理封装起来，在渲染前或者布局后对数据进行进一步处理。用户通过自定义数据处理，实现部分数据处理解耦，更好地进行管理、编排代码以及提高代码可维护性。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "用户在进行自定义数据处理前，需要仔细阅读并掌握数据处理器的 ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "实现原理和执行时机",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": " 。",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "接下来将讲述两个可能的业务场景，并通过自定义数据处理来实现：",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "需求",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "游离节点，即没有连线的节点，画布渲染时不展示游离节点",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "实现",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "import type { DrawData, DrawContext } from '@antv/g6';\nimport { Graph, BaseTransform, register, ExtensionCategory } from '@antv/g6';\n\nclass HideFreeNode extends BaseTransform {\n  public beforeDraw(input: DrawData, context: DrawContext): DrawData {\n    const { model } = this.context;\n    const { add, update, remove } = input;\n\n    add.nodes.forEach((nodeData, nodeId) => {\n      // 获取节点的相关连线\n      const edges = model.getRelatedEdgesData(nodeId);\n      // 没有任何连线的的节点则从add里面移除，添加到remove里面\n      if (!edges.length) {\n        add.nodes.delete(nodeId);\n        remove.nodes.set(nodeId, nodeData);\n      }\n    });\n\n    return input;\n  }\n}\n",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "import { Graph, BaseTransform, register, ExtensionCategory } from '@antv/g6';\n\nclass HideFreeNode extends BaseTransform {\n  beforeDraw(input, context) {\n    const { model } = this.context;\n    const { add, update, remove } = input;\n\n    add.nodes.forEach((nodeData, nodeId) => {\n      // 获取节点的相关连线\n      const edges = model.getRelatedEdgesData(nodeId);\n      // 没有任何连线的的节点则从add里面移除，添加到remove里面\n      if (!edges.length) {\n        add.nodes.delete(nodeId);\n        remove.nodes.set(nodeId, nodeData);\n      }\n    });\n\n    return input;\n  }\n}\n\nregister(ExtensionCategory.TRANSFORM, 'hide-free-node', HideFreeNode);\n\nconst data = {\n  nodes: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }],\n  edges: [\n    { source: '1', target: '2' },\n    { source: '2', target: '3' },\n    { source: '3', target: '5' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  autoFit: 'center',\n  data,\n  node: {\n    style: {\n      labelText: (d) => d.id,\n    },\n  },\n  layout: {\n    type: 'antv-dagre',\n    rankdir: 'LR',\n  },\n  transforms: ['hide-free-node'],\n});\n\ngraph.render();\n",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "说明",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "示例中总共有6个节点，id为1-6，id为4的节点没有连线，因此被移除了。",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "通过 ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "getRelatedEdgesData",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " 获取节点的相关连线，没有则把该节点放到 ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "remove.nodes",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " 里面去，并从 ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "add.nodes",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " 里面移除。",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "需求",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "使用 ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "环形布局",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " 时，节点 label 的也需要像内置数据处理器 ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "PlaceRadialLabels",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " 一样实现径向展示（但 PlaceRadialLabels 只支持径向布局，环形布局不是径向布局）",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "实现",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "import type { RuntimeContext, DrawContext, Point, TransformArray, Vector2, Vector3 } from '@antv/g6';\nimport { Graph, BaseTransform, register, ExtensionCategory, BaseTransformOptions } from '@antv/g6';\n\n// 目前circular布局没有暴露方法可以获取布局中心，这里简单处理先固定一个，配置circular布局时center与这里保持一致即可\nconst circularCenter = [300, 300];\n\n// 下面的函数 G6 没有暴露出来，先自行声明\nfunction subtract(a: Vector2 | Vector3, b: Vector2 | Vector3): Vector2 | Vector3 {\n  return a.map((v, i) => v - b[i]) as Vector2 | Vector3;\n}\nfunction rad(a: Vector2 | Vector3): number {\n  const [x, y] = a;\n  if (!x && !y) return 0;\n  return Math.atan2(y, x);\n}\nfunction rad2deg(rad: number): number {\n  return rad * (180 / Math.PI);\n}\n\ninterface CircularRadialLabelsOptions extends BaseTransformOptions {\n  offset?: number; // 偏移量\n}\n\nclass CircularRadialLabels extends BaseTransform<CircularRadialLabelsOptions> {\n  static defaultOptions = {\n    offset: 5,\n  };\n  constructor(context: RuntimeContext, options: CircularRadialLabelsOptions) {\n    super(context, Object.assign({}, CircularRadialLabels.defaultOptions, options));\n  }\n  get center(): Point {\n    return circularCenter;\n  }\n  public afterLayout() {\n    const { graph, model } = this.context;\n    const data = model.getData();\n    data.nodes?.forEach((datum) => {\n      const radian = rad(subtract([datum.style.x, datum.style.y], this.center));\n      const isLeft = Math.abs(radian) > Math.PI / 2;\n      const isLeaf = !datum.children || datum.children.length === 0;\n      const nodeId = datum.id;\n      const node = this.context.element?.getElement(nodeId);\n      if (!node || !node.isVisible()) return;\n\n      const nodeHalfWidth = graph.getElementRenderStyle(nodeId).size / 2;\n      const offset = (isLeaf ? 1 : -1) * (nodeHalfWidth + this.options.offset);\n\n      const labelTransform: TransformArray = [\n        ['translate', offset * Math.cos(radian), offset * Math.sin(radian)],\n        ['rotate', isLeft ? rad2deg(radian) + 180 : rad2deg(radian)],\n      ];\n\n      model.updateNodeData([\n        {\n          id: datum.id,\n          style: {\n            labelTextAlign: isLeft === isLeaf ? 'right' : 'left',\n            labelTextBaseline: 'middle',\n            labelTransform,\n          },\n        },\n      ]);\n    });\n\n    graph.draw();\n  }\n}\n",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "import { Graph, BaseTransform, register, ExtensionCategory } from '@antv/g6';\n\n// 目前circular布局没有暴露方法可以获取布局中心，这里简单处理先固定一个\nconst circularCenter = [300, 300];\n\n// 下面的函数 G6 没有暴露出来，先自行声明\nfunction subtract(a, b) {\n  return a.map((v, i) => v - b[i]);\n}\nfunction rad(a) {\n  const [x, y] = a;\n  if (!x && !y) return 0;\n  return Math.atan2(y, x);\n}\nfunction rad2deg(rad) {\n  return rad * (180 / Math.PI);\n}\n\nclass CircularRadialLabels extends BaseTransform {\n  static defaultOptions = {\n    offset: 5,\n  };\n  constructor(context, options) {\n    super(context, Object.assign({}, CircularRadialLabels.defaultOptions, options));\n  }\n  get center() {\n    return circularCenter;\n  }\n  afterLayout() {\n    const { graph, model } = this.context;\n    const data = model.getData();\n    data.nodes?.forEach((datum) => {\n      const radian = rad(subtract([datum.style.x, datum.style.y], this.center));\n      const isLeft = Math.abs(radian) > Math.PI / 2;\n      const isLeaf = !datum.children || datum.children.length === 0;\n      const nodeId = datum.id;\n      const node = this.context.element?.getElement(nodeId);\n      if (!node || !node.isVisible()) return;\n\n      const nodeHalfWidth = graph.getElementRenderStyle(nodeId).size / 2;\n      const offset = (isLeaf ? 1 : -1) * (nodeHalfWidth + this.options.offset);\n\n      const labelTransform = [\n        ['translate', offset * Math.cos(radian), offset * Math.sin(radian)],\n        ['rotate', isLeft ? rad2deg(radian) + 180 : rad2deg(radian)],\n      ];\n\n      model.updateNodeData([\n        {\n          id: datum.id,\n          style: {\n            labelTextAlign: isLeft === isLeaf ? 'right' : 'left',\n            labelTextBaseline: 'middle',\n            labelTransform,\n          },\n        },\n      ]);\n    });\n\n    graph.draw();\n  }\n}\n\nregister(ExtensionCategory.TRANSFORM, 'circular-radial-labels', CircularRadialLabels);\n\nconst data = {\n  nodes: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }],\n  edges: [\n    { source: '1', target: '2' },\n    { source: '2', target: '3' },\n    { source: '3', target: '4' },\n    { source: '4', target: '5' },\n    { source: '5', target: '6' },\n    { source: '6', target: '1' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  autoFit: 'center',\n  data,\n  node: {\n    style: {\n      labelText: (d) => 'label' + d.id,\n      size: 30,\n    },\n  },\n  layout: {\n    type: 'circular',\n    width: 200,\n    center: circularCenter,\n    preLayout: false, // 不能是渲染前布局，否则不生效\n  },\n  transforms: ['circular-radial-labels'],\n});\n\ngraph.render();\n",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "说明",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "\n上面的实现基本是参考内置数据处理器 ",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "PlaceRadialLabels",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": " 来实现的，区别是这里的实现是通过拿到布局中心来计算偏移和旋转，具体可参考 PlaceRadialLabels 的 ",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "源码",
        "paraId": 19,
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
//# sourceMappingURL=docs_manual_transform_custom-transform_zh_md_q_hK4X-async.js.map