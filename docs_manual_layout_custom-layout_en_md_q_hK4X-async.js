((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/custom-layout.en.md?type=text'],
{ "docs/manual/layout/custom-layout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/custom-layout.en.md?watch=parent");
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
        "value": "In G6, layouts are divided into two types: 'iterative layout' and 'non-iterative layout'. An iterative layout refers to a layout algorithm that iterates multiple times until convergence, while a non-iterative layout refers to a layout algorithm that executes only once.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Implementing a non-iterative layout is relatively straightforward; you only need to implement the ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "execute",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": " method in ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "BaseLayout",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": ". Below is a simple implementation of a custom layout:",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "import { BaseLayout } from '@antv/g6';\nimport type { GraphData } from '@antv/g6';\n\nclass DiagonalLayout extends BaseLayout {\n  id = 'diagonal-layout';\n\n  async execute(data: GraphData): Promise<GraphData> {\n    const { nodes = [] } = data;\n    return {\n      nodes: nodes.map((node, index) => ({\n        id: node.id,\n        style: {\n          x: 50 * index + 25,\n          y: 50 * index + 25,\n        },\n      })),\n    };\n  }\n}\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "In the code above, we implemented a simple layout algorithm that arranges nodes along a diagonal line starting from the top-left corner.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "import { Graph, BaseLayout, register, ExtensionCategory } from '@antv/g6';\n\nclass DiagonalLayout extends BaseLayout {\n  id = 'diagonal-layout';\n\n  async execute(data) {\n    const { nodes = [] } = data;\n    return {\n      nodes: nodes.map((node, index) => ({\n        id: node.id,\n        style: {\n          x: 50 * index + 25,\n          y: 50 * index + 25,\n        },\n      })),\n    };\n  }\n}\n\nregister(ExtensionCategory.LAYOUT, 'diagonal', DiagonalLayout);\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 200,\n  data: {\n    nodes: [{ id: 'node-1' }, { id: 'node-2' }, { id: 'node-3' }, { id: 'node-4' }],\n  },\n  layout: {\n    type: 'diagonal',\n  },\n});\n\ngraph.render();\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "The ",
        "paraId": 5
    },
    {
        "value": "execute",
        "paraId": 5
    },
    {
        "value": " method returns a GraphData object, which only needs to contain the basic information of the elements (such as id, source, target) and the properties added by the layout (such as x, y, control points of edges, etc.), and does not need to contain other unnecessary information.\nIf you only need to layout the nodes, you can return only the node information and do not need to return the edge information.",
        "paraId": 5
    },
    {
        "value": "The implementation of an iterative layout also requires inheriting from ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "BaseLayout",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": ", but in addition to ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "execute",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": ", you also need to implement the ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "tick",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " and ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "stop",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " methods. The ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "tick",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " method is used to iterate the layout to a specified number of rounds, and the ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "stop",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " method is used to stop the layout iteration.",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "In addition, in iterative layouts, you need to call ",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "options.onTick",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " each time the layout iterates to trigger the graph update.",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "type onTick = (data: GraphData) => void;\n",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Below is a simple implementation of an iterative layout:",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "import { BaseLayout } from '@antv/g6';\nimport type { GraphData, BaseLayoutOptions } from '@antv/g6';\n\ninterface TickTockLayoutOptions extends BaseLayoutOptions {\n  onTick: (data: GraphData) => void;\n}\n\nclass TickTockLayout extends BaseLayout<TickTockLayoutOptions> {\n  public id = 'custom-layout';\n\n  private tickCount = 0;\n\n  private data?: GraphData;\n\n  private timer?: number;\n\n  private resolve?: () => void;\n\n  private promise?: Promise<void>;\n\n  async execute(data: GraphData, options: TickTockLayoutOptions): Promise<GraphData> {\n    const { onTick } = { ...this.options, ...options };\n\n    this.tickCount = 0;\n    this.data = data;\n\n    this.promise = new Promise((resolve) => {\n      this.resolve = resolve;\n    });\n\n    this.timer = window.setInterval(() => {\n      onTick(this.simulateTick());\n      if (this.tickCount === 10) this.stop();\n    }, 200);\n\n    await this.promise;\n\n    return this.simulateTick();\n  }\n\n  simulateTick = () => {\n    const x = this.tickCount++ % 2 === 0 ? 50 : 150;\n\n    return {\n      nodes: (this?.data?.nodes || []).map((node, index) => ({\n        id: node.id,\n        style: { x, y: (index + 1) * 30 },\n      })),\n    };\n  };\n\n  tick = () => {\n    return this.simulateTick();\n  };\n\n  stop = () => {\n    clearInterval(this.timer);\n    this.resolve?.();\n  };\n}\n",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "In this example, we have implemented a simple iterative layout algorithm that toggles the x-coordinate of the nodes between 50 and 150 every 200 milliseconds and arranges them in order along the y-axis according to the sequence of the nodes.",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "import { Graph, BaseLayout, register, ExtensionCategory } from '@antv/g6';\n\nclass TickTockLayout extends BaseLayout {\n  id = 'tick-tock-layout';\n\n  async execute(data, options) {\n    const { onTick } = { ...this.options, ...options };\n\n    this.tickCount = 0;\n    this.data = data;\n\n    this.promise = new Promise((resolve) => {\n      this.resolve = resolve;\n    });\n\n    this.timer = window.setInterval(() => {\n      onTick(this.simulateTick());\n      if (this.tickCount === 10) this.stop();\n    }, 200);\n\n    await this.promise;\n\n    return this.simulateTick();\n  }\n\n  simulateTick = () => {\n    const x = this.tickCount++ % 2 === 0 ? 50 : 150;\n\n    return {\n      nodes: (this?.data?.nodes || []).map((node, index) => ({\n        id: node.id,\n        style: { x, y: (index + 1) * 30 },\n      })),\n    };\n  };\n\n  tick = () => {\n    return this.simulateTick();\n  };\n\n  stop = () => {\n    clearInterval(this.timer);\n    this.resolve?.();\n  };\n}\n\nregister(ExtensionCategory.LAYOUT, 'tick-tock', TickTockLayout);\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 200,\n  animation: true,\n  data: {\n    nodes: [{ id: 'node-1' }, { id: 'node-2' }, { id: 'node-3' }, { id: 'node-4' }, { id: 'node-5' }],\n  },\n  layout: {\n    type: 'tick-tock',\n  },\n});\n\ngraph.render();\n",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "You can register through the ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "register",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " method provided by G6. For more details, please refer to ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "Register Layout",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "The type and parameters of the layout can be configured in ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "options.layout",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": ". For more details, please refer to ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "Configure Layout",
        "paraId": 16,
        "tocIndex": 5
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
//# sourceMappingURL=docs_manual_layout_custom-layout_en_md_q_hK4X-async.js.map