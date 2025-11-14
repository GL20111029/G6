((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/custom-plugin.en.md?type=text'],
{ "docs/manual/plugin/custom-plugin.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/custom-plugin.en.md?watch=parent");
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
        "value": "Custom plugins can implement additional features, such as adding extra components, rendering logic, etc. Custom plugins can effectively achieve functional decoupling, better manage and orchestrate code, and facilitate subsequent maintenance.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Extra components",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": ": Such as built-in plugins like ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Tooltip",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Minimap",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Snapline",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Grid",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Context Menu",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Watermark",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": ", etc.",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Rendering logic",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": ": Such as built-in plugins like ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Edge Bundling",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": ", and ",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Remote Data Loading",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": " (",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Example",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "), etc.",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "When built-in plugins cannot fully meet business needs, users can also make adjustments and modifications through custom plugins (inheriting built-in plugins).",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "(If the features supported by built-in plugins are more general, or if there are bugs in built-in plugins, you are welcome to submit issues or PRs on ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Github",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ")",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Like interactions, the implementation of plugins is also quite flexible, and you can implement your plugin in your preferred style.",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Here are a few simple custom plugin implementations:",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Automatically load remote data during graph instantiation:",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "import { BasePlugin } from '@antv/g6';\nimport type { BasePluginOptions, RuntimeContext } from '@antv/g6';\n\ninterface RemoteDataSourceOptions extends BasePluginOptions {}\n\nclass RemoteDataSource extends BasePlugin<RemoteDataSourceOptions> {\n  constructor(context: RuntimeContext, options: RemoteDataSourceOptions) {\n    super(context, options);\n    this.loadData();\n  }\n\n  private async loadData() {\n    // mock remote data\n    const data = {\n      nodes: [\n        { id: 'node-1', x: 100, y: 100 },\n        { id: 'node-2', x: 200, y: 200 },\n      ],\n      edges: [{ source: 'node-1', target: 'node-2' }],\n    };\n\n    const { graph } = this.context;\n    graph.setData(data);\n    await graph.render();\n  }\n}\n",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "In this example, we simulate a data loading plugin. After using this plugin, there is no need to pass data when instantiating the Graph, as the plugin will automatically load remote data.",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "BasePlugin",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": " is the base class for all plugins, and each custom plugin needs to inherit this base class.",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "import { BasePlugin, Graph, register, ExtensionCategory } from '@antv/g6';\n\nclass RemoteDataSource extends BasePlugin {\n  constructor(context, options) {\n    super(context, options);\n    this.loadData();\n  }\n\n  async loadData() {\n    // mock remote data\n    const data = {\n      nodes: [\n        { id: 'node-1', style: { x: 25, y: 50 } },\n        { id: 'node-2', style: { x: 175, y: 50 } },\n      ],\n      edges: [{ source: 'node-1', target: 'node-2' }],\n    };\n\n    const { graph } = this.context;\n    graph.setData(data);\n    await graph.render();\n  }\n}\n\nregister(ExtensionCategory.PLUGIN, 'remote-data-source', RemoteDataSource);\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 100,\n  plugins: ['remote-data-source'],\n});\n\ngraph.render();\n",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "import type { BasePluginOptions, RuntimeContext } from '@antv/g6';\nimport { BasePlugin, GraphEvent } from '@antv/g6';\n\ninterface AutoSwitchAnimationOptions extends BasePluginOptions {\n  maxLength: number; // Disable global animation when the number of nodes reaches this value\n}\n\nclass AutoSwitchAnimation extends BasePlugin<AutoSwitchAnimationOptions> {\n  static defaultOptions: Partial<AutoSwitchAnimationOptions> = {\n    maxLength: 1000,\n  };\n  constructor(context: RuntimeContext, options: AutoSwitchAnimationOptions) {\n    super(context, options);\n    this.bindEvents();\n  }\n  private bindEvents() {\n    const { graph } = this.context;\n    graph.on(GraphEvent.BEFORE_RENDER, this.switchAnimation);\n  }\n  private switchAnimation() {\n    const { graph } = this.context;\n    graph.setOptions({\n      animation: graph.getNodeData().length < this.options.maxLength,\n    });\n  }\n  private unbindEvents() {\n    const { graph } = this.context;\n    graph.off(GraphEvent.BEFORE_RENDER, this.switchAnimation);\n  }\n  destroy() {\n    this.unbindEvents();\n    super.destroy();\n  }\n}\n",
        "paraId": 12,
        "tocIndex": 6
    },
    {
        "value": "In this example, we listen to the ",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "GraphEvent.BEFORE_RENDER",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": " event and determine whether the current number of nodes exceeds a specified value. If so, global animation is disabled; otherwise, it is enabled.",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "maxLength",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": " is a defined configuration item that can be passed in when initializing the graph instance. ",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "Plugin Configuration",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Register using the method provided by G6",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "import { register, ExtensionCategory } from '@antv/g6';\nimport { MyCustomPlugin } from './my-custom-plugin';\n\nregister(ExtensionCategory.PLUGIN, 'my-custom-plugin', MyCustomPlugin);\n",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "You can pass the plugin type name or configuration parameter object in ",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "plugins",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": ", see ",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "Configure Plugin",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "For example, the previous ",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "Automatically Enable or Disable Animation Based on Node Count",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": " is configured as follows:",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations\n  plugins: [\n    {\n      type: 'auto-switch-animation',\n      maxLength: 500,\n    },\n  ],\n});\n",
        "paraId": 21,
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
//# sourceMappingURL=docs_manual_plugin_custom-plugin_en_md_q_hK4X-async.js.map