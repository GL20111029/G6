((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/custom-behavior.en.md?type=text'],
{ "docs/manual/behavior/custom-behavior.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/custom-behavior.en.md?watch=parent");
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
        "value": "Custom behavior allows users to define one or more related interaction behaviors as a complete interaction based on the comprehensive ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "event mechanism",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " provided by G6, thereby achieving interaction logic that fits business scenarios.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Typically:",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Listen for user interaction events",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Update the canvas or perform other operations based on the events",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "For example, the ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "DragCanvas",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " behavior listens for pointer drag events and updates the camera position based on the drag distance.",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Both behavior and plugin base classes are derived from the ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "BaseExtension",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": " base class within G6, so the implementation methods for behavior and plugin are basically the same.",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "However, based on the concept of visualization, behavior is usually used to handle user interaction events, while plugins are usually used to handle canvas rendering logic, additional component rendering, etc.",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Due to conceptual distinctions, behavior instances cannot be obtained, while plugin instances can be obtained (",
        "paraId": 7
    },
    {
        "value": "getPluginInstance",
        "paraId": 8
    },
    {
        "value": ").",
        "paraId": 7
    },
    {
        "value": "Purpose",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "When users need to implement interaction logic that fits business scenarios, we usually need to cooperate with G6's event system to respond to related events and execute the required interaction logic.",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Without Custom Behavior",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "If custom behavior is not used, users need to perform a series of event listening and response processing through ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "graph.on",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " after creating a Graph instance, making code logic processing and orchestration extremely difficult.",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Advantages of Behavior",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Each behavior is an independent code module, and the existence of the behavior system facilitates users to decouple business logic, avoid code bloat, and facilitate subsequent maintenance.",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Conclusion",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "When users need to implement any interaction logic, they should first consider custom behavior.",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "When built-in behavior cannot fully meet business needs, users can also adjust and modify through custom behavior (inheriting built-in behavior).",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "(If the features supported by built-in behavior are more general, or if there are bugs in built-in behavior, you are welcome to submit issues or PRs on ",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "Github",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": ")",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "The implementation of a behavior is quite flexible, and you can implement your behavior in your preferred style.",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "Below is a simple custom behavior implementation. When the user clicks on the canvas, a node is added to the canvas (the fill color of the added node can be defined through behavior configuration):",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "import type { BaseBehaviorOptions, RuntimeContext, IPointerEvent } from '@antv/g6';\nimport { BaseBehavior, CanvasEvent } from '@antv/g6';\n\ninterface ClickAddNodeOptions extends BaseBehaviorOptions {\n  fill: string;\n}\n\nexport class ClickAddNode extends BaseBehavior<ClickAddNodeOptions> {\n  static defaultOptions: Partial<ClickAddNodeOptions> = {\n    fill: 'red',\n  };\n  constructor(context: RuntimeContext, options: ClickAddNodeOptions) {\n    super(context, Object.assign({}, ClickAddNode.defaultOptions, options));\n    this.bindEvents();\n  }\n  private bindEvents() {\n    const { graph } = this.context;\n    graph.on(CanvasEvent.CLICK, this.addNode);\n  }\n  private addNode = (event: IPointerEvent) => {\n    const { graph } = this.context;\n    const { layerX, layerY } = event.nativeEvent as PointerEvent;\n    graph.addNodeData([\n      {\n        id: 'node-' + Date.now(),\n        style: { x: layerX, y: layerY, fill: this.options.fill },\n      },\n    ]);\n    graph.draw();\n  };\n  private unbindEvents() {\n    const { graph } = this.context;\n    graph.off(CanvasEvent.CLICK, this.addNode);\n  }\n  public destroy() {\n    // Unbind events when destroyed\n    this.unbindEvents();\n    super.destroy();\n  }\n}\n",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "In the example code, we implemented a ",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "ClickAddNode",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": " behavior, which adds an event listener to the Graph in the constructor. When the user clicks on the canvas, a node is added at the click position, and the fill color of the added node can be configured.",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "BaseBehavior",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": " is the base class for all behaviors, and each custom behavior needs to inherit this base class.",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "Click on the blank area of the canvas below to add a node, and switch the right panel to configure the node color.",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "(async () => {\n  const { BaseBehavior, CanvasEvent, register, ExtensionCategory, Graph } = window.g6;\n\n  class ClickAddNode extends BaseBehavior {\n    constructor(context, options) {\n      super(context, options);\n\n      const { graph } = this.context;\n      graph.on(CanvasEvent.CLICK, (event) => {\n        const { layerX, layerY } = event.nativeEvent;\n        graph.addNodeData([\n          {\n            id: 'node-' + Date.now(),\n            style: { x: layerX, y: layerY, fill: options.fill },\n          },\n        ]);\n        graph.draw();\n      });\n    }\n  }\n\n  register(ExtensionCategory.BEHAVIOR, 'click-add-node', ClickAddNode);\n\n  const wrapEl = await createGraph(\n    {\n      data: {\n        nodes: [],\n      },\n      behaviors: [\n        {\n          type: 'click-add-node',\n          key: 'click-add-node',\n          fill: 'red',\n        },\n      ],\n    },\n    { width: 600, height: 300 },\n    (gui, graph) => {\n      const options = {\n        key: 'click-add-node',\n        type: 'click-add-node',\n        fill: 'red',\n      };\n      const optionFolder = gui.addFolder('ClickAddNode Options');\n      optionFolder.add(options, 'fill', ['red', 'black', 'blue', 'green', 'yellow', 'purple']);\n\n      optionFolder.onChange(({ property, value }) => {\n        graph.updateBehavior({\n          key: 'click-add-node',\n          [property]: value,\n        });\n        graph.render();\n      });\n    },\n  );\n\n  return wrapEl;\n})();\n",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "The above example is the simplest behavior implementation. In actual development, you may also need to handle logic such as enabling and disabling behaviors.",
        "paraId": 24
    },
    {
        "value": "In addition, there may be event conflicts between multiple behaviors, and you need to handle these conflicts carefully.",
        "paraId": 25
    },
    {
        "value": "Register through the register method provided by G6",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "import { ExtensionCategory, register } from '@antv/g6';\nimport { ClickAddNode } from 'your-custom-behavior-path';\n\nregister(ExtensionCategory.BEHAVIOR, 'click-add-node', ClickAddNode);\n",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "You can pass in the behavior type name or configuration parameter object in ",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "behaviors",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": ", such as the above ClickAddNode. See ",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "Configuring Behavior",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": " for details.",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations\n  behaviors: [\n    {\n      type: 'click-add-node',\n      fill: 'blue',\n    },\n  ],\n});\n",
        "paraId": 30,
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
//# sourceMappingURL=docs_manual_behavior_custom-behavior_en_md_q_hK4X-async.js.map