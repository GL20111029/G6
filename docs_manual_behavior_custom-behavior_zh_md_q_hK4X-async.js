((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/custom-behavior.zh.md?type=text'],
{ "docs/manual/behavior/custom-behavior.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/custom-behavior.zh.md?watch=parent");
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
        "value": "自定义交互允许用户基于 G6 提供的完善的",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "事件机制",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "，把一个或多个相关的交互行为定义为一个完整的交互，以此实现符合业务场景的交互逻辑。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "通常为：",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "监听用户交互事件",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "根据事件更新画布或执行其他操作",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "例如 ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "DragCanvas",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " 交互监听指针拖拽事件，根据拖拽的距离更新相机的位置。",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "交互和插件的基类都是由 G6 内部的 ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "BaseExtension",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": " 基类派生而来，因此交互和插件的实现方式基本相同",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "但基于可视化的概念区分，交互通常用于处理用户交互事件，而插件通常用于处理画布的渲染逻辑、额外组件渲染等",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "因概念上的区分，交互实例不可获取，插件实例可获取（ ",
        "paraId": 7
    },
    {
        "value": "getPluginInstance",
        "paraId": 8
    },
    {
        "value": " ）",
        "paraId": 7
    },
    {
        "value": "目的",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "：",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "当用户在实现符合业务场景的交互逻辑时，我们通常需要配合 G6 的事件系统，对相关事件作出响应，执行需要的交互逻辑。",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "不使用自定义交互",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "：",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "如果不使用自定义交互，用户需要在创建 Graph 实例后，通过 ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "graph.on",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " 进行一系列的事件监听和响应处理，代码逻辑处理和编排会显得异常艰难。",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "交互的优势",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "：",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "每个交互行为都是独立的代码模块，交互系统的存在方便用户解耦业务逻辑、避免代码臃肿以及方便用户后续维护等。",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "结论",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "：",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "1、当用户需要实现任何交互逻辑时，应当首先考虑自定义交互。",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "2、当内置交互无法完全满足业务需求时，用户也可以通过自定义交互（继承内置交互）进行调整和修改。",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "（如果需要内置交互支持的特性是较通用的，或者内置交互存在 Bug ，这种时候欢迎大家到 ",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "Github",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": " 提 Issue 或者 PR ）",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "一个交互的实现相当灵活，你可以以你喜欢的风格实现你的交互。",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "下面是一个简单的自定义交互实现，当用户点击画布时，会在画布上添加一个节点（可通过交互配置定义所添加节点的填充颜色）：",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "import type { BaseBehaviorOptions, RuntimeContext, IPointerEvent } from '@antv/g6';\nimport { BaseBehavior, CanvasEvent } from '@antv/g6';\n\ninterface ClickAddNodeOptions extends BaseBehaviorOptions {\n  fill: string;\n}\n\nexport class ClickAddNode extends BaseBehavior<ClickAddNodeOptions> {\n  static defaultOptions: Partial<ClickAddNodeOptions> = {\n    fill: 'red',\n  };\n  constructor(context: RuntimeContext, options: ClickAddNodeOptions) {\n    super(context, Object.assign({}, ClickAddNode.defaultOptions, options));\n    this.bindEvents();\n  }\n  private bindEvents() {\n    const { graph } = this.context;\n    graph.on(CanvasEvent.CLICK, this.addNode);\n  }\n  private addNode = (event: IPointerEvent) => {\n    const { graph } = this.context;\n    const { layerX, layerY } = event.nativeEvent as PointerEvent;\n    graph.addNodeData([\n      {\n        id: 'node-' + Date.now(),\n        style: { x: layerX, y: layerY, fill: this.options.fill },\n      },\n    ]);\n    graph.draw();\n  };\n  private unbindEvents() {\n    const { graph } = this.context;\n    graph.off(CanvasEvent.CLICK, this.addNode);\n  }\n  public destroy() {\n    // 销毁时解绑事件\n    this.unbindEvents();\n    super.destroy();\n  }\n}\n",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "在示例代码中，我们实现了一个 ",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "ClickAddNode",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": " 交互，该交互在构造函数中添加了 Graph 的事件监听，当用户点击画布时，会在点击位置添加一个节点，并且支持配置所添加节点的填充颜色。",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "BaseBehavior",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": " 是所有交互的基类，每个自定义交互都需要继承这个基类实现。",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "点击下面画布中的空白位置以添加一个节点，可切换右侧面板配置节点颜色",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "(async () => {\n  const { BaseBehavior, CanvasEvent, register, ExtensionCategory, Graph } = window.g6;\n\n  class ClickAddNode extends BaseBehavior {\n    constructor(context, options) {\n      super(context, options);\n\n      const { graph } = this.context;\n      graph.on(CanvasEvent.CLICK, (event) => {\n        const { layerX, layerY } = event.nativeEvent;\n        graph.addNodeData([\n          {\n            id: 'node-' + Date.now(),\n            style: { x: layerX, y: layerY, fill: options.fill },\n          },\n        ]);\n        graph.draw();\n      });\n    }\n  }\n\n  register(ExtensionCategory.BEHAVIOR, 'click-add-node', ClickAddNode);\n\n  const wrapEl = await createGraph(\n    {\n      data: {\n        nodes: [],\n      },\n      behaviors: [\n        {\n          type: 'click-add-node',\n          key: 'click-add-node',\n          fill: 'red',\n        },\n      ],\n    },\n    { width: 600, height: 300 },\n    (gui, graph) => {\n      const options = {\n        key: 'click-add-node',\n        type: 'click-add-node',\n        fill: 'red',\n      };\n      const optionFolder = gui.addFolder('ClickAddNode Options');\n      optionFolder.add(options, 'fill', ['red', 'black', 'blue', 'green', 'yellow', 'purple']);\n\n      optionFolder.onChange(({ property, value }) => {\n        graph.updateBehavior({\n          key: 'click-add-node',\n          [property]: value,\n        });\n        graph.render();\n      });\n    },\n  );\n\n  return wrapEl;\n})();\n",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "上述示例是一个最简单的交互实现，实际开发过程中，你可能还需要处理交互的启用与禁用等逻辑。",
        "paraId": 25
    },
    {
        "value": "此外，多个交互之间可能会有事件冲突，你需要小心处理这些冲突。",
        "paraId": 26
    },
    {
        "value": "通过 G6 提供的 register 方法注册即可",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "import { ExtensionCategory, register } from '@antv/g6';\nimport { ClickAddNode } from 'your-custom-behavior-path';\n\nregister(ExtensionCategory.BEHAVIOR, 'click-add-node', ClickAddNode);\n",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "可在 ",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "behaviors",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": " 中传入交互类型名称或配置参数对象，比如上面的 ClickAddNode ，详见",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "配置交互",
        "paraId": 30,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置\n  behaviors: [\n    {\n      type: 'click-add-node',\n      fill: 'blue',\n    },\n  ],\n});\n",
        "paraId": 31,
        "tocIndex": 6
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
//# sourceMappingURL=docs_manual_behavior_custom-behavior_zh_md_q_hK4X-async.js.map