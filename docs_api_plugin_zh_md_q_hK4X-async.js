((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/plugin.zh.md?type=text'],
{ "docs/api/plugin.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/plugin.zh.md?watch=parent");
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
        "value": "插件",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "（Plugin）是 G6 中扩展功能的重要机制，用于增强图表的功能和交互体验。插件通常提供一些独立的功能模块，如缩略图、工具栏、上下文菜单等，它们可以与图表主体良好集成，同时又保持代码的模块化和可维护性。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "插件系统设计遵循\"即插即用\"的原则，可以根据需要动态添加或移除。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "获取指定 key 的插件实例，用于访问和操作插件提供的方法。",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getPluginInstance<T extends Plugin>(key: string): T;\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "参数",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "参数",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "key",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "插件的唯一标识符",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "返回值",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": 插件实例",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": 指定 key 对应的插件实例",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "说明",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "许多插件提供了特定的API方法，通过获取插件实例可以直接调用这些方法。例如，全屏插件提供了 ",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "request()",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": " 和 ",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "exit()",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": " 方法来控制全屏状态。",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "示例",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": ": 操作全屏插件",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "// 获取全屏插件实例\nconst fullscreen = graph.getPluginInstance('fullscreen');\n\n// 请求进入全屏\nfullscreen.request();\n\n// 稍后退出全屏\nsetTimeout(() => {\n  fullscreen.exit();\n}, 5000);\n",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": "获取当前图表中所有已配置的插件。",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "getPlugins(): PluginOptions;\n",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "返回值",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": ": ",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "PluginOptions",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": ": 当前图表中已配置的所有插件",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "示例",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "// 获取所有插件配置\nconst plugins = graph.getPlugins();\n\n// 查看当前激活的插件\nconsole.log('当前图表的插件配置:', plugins);\n",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "设置图表的插件，将替换所有现有的插件配置。",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "setPlugins(plugins: PluginOptions | ((prev: PluginOptions) => PluginOptions)): void;\n",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "plugins",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "新的插件配置，或一个基于当前配置返回新配置的函数",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "PluginOptions",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": " | ((prev: PluginOptions) => PluginOptions)",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "说明",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "设置的插件会全量替换原有的插件配置。如果需要在现有插件基础上添加新插件，可以使用函数式更新方式：",
        "paraId": 26,
        "tocIndex": 4
    },
    {
        "value": "graph.setPlugins((plugins) => [...plugins, { type: 'grid', key: 'grid-line' }]);\n",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "示例 1",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": ": 设置基本插件",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": "// 设置多个基本插件\ngraph.setPlugins([\n  // 字符串形式（使用默认配置）\n  'minimap',\n\n  // 对象形式（自定义配置）\n  {\n    type: 'grid',\n    key: 'grid-line',\n  },\n  {\n    type: 'toolbar',\n    key: 'graph-toolbar',\n    position: 'top-right',\n  },\n]);\n",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "示例 2",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": ": 使用函数式更新",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "// 添加新插件到现有配置\ngraph.setPlugins((currentPlugins) => [\n  ...currentPlugins,\n  {\n    type: 'grid',\n    key: 'grid-line',\n  },\n]);\n\n// 替换特定插件\ngraph.setPlugins((currentPlugins) => {\n  // 过滤掉现有的网格插件\n  const filteredPlugins = currentPlugins.filter((plugin) => {\n    if (typeof plugin === 'string') return plugin !== 'grid';\n    if (typeof plugin === 'function') return true;\n    return plugin.type !== 'grid';\n  });\n\n  // 添加新的网格插件配置\n  return [\n    ...filteredPlugins,\n    {\n      type: 'grid',\n      key: 'new-grid',\n      follow: true,\n    },\n  ];\n});\n",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": "更新指定的插件配置，需要通过 ",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": "key",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": " 标识要更新的插件。",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": "updatePlugin(plugin: UpdatePluginOption): void;\n",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "参数",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "参数",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "类型",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "默认值",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "必选",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "plugin",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "更新的插件配置",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "UpdatePluginOption",
        "paraId": 36,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "✓",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "说明",
        "paraId": 37,
        "tocIndex": 5
    },
    {
        "value": "如果要更新一个插件，必须在原始插件配置中指定 ",
        "paraId": 38,
        "tocIndex": 5
    },
    {
        "value": "key",
        "paraId": 38,
        "tocIndex": 5
    },
    {
        "value": " 字段，以便能够准确找到并更新该插件。",
        "paraId": 38,
        "tocIndex": 5
    },
    {
        "value": "示例 1",
        "paraId": 39,
        "tocIndex": 5
    },
    {
        "value": ": 更新插件配置",
        "paraId": 39,
        "tocIndex": 5
    },
    {
        "value": "// 初始设置插件时指定 key\ngraph.setPlugins([\n  {\n    type: 'grid',\n    key: 'main-grid',\n    follow: true,\n  },\n]);\n\n// 更新网格插件配置\ngraph.updatePlugin({\n  key: 'main-grid',\n  follow: false,\n});\n",
        "paraId": 40,
        "tocIndex": 5
    },
    {
        "value": "插件配置类型，表示一组插件配置的数组。",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "type PluginOptions = (string | CustomPluginOption | ((this: Graph) => CustomPluginOption))[];\n",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": "自定义插件配置接口，用于配置插件参数。",
        "paraId": 43,
        "tocIndex": 8
    },
    {
        "value": "type CustomPluginOption = {\n  // 插件类型\n  type: string;\n\n  // 插件 key，即唯一标识\n  // 用于标识插件，从而进一步操作此插件\n  key?: string;\n\n  // 针对不同类型的插件，还可能有其他配置项\n  [configKey: string]: any;\n};\n",
        "paraId": 44,
        "tocIndex": 8
    },
    {
        "value": "更新插件的配置接口，用于动态修改插件参数。",
        "paraId": 45,
        "tocIndex": 9
    },
    {
        "value": "type UpdatePluginOption = {\n  // 要更新的插件的唯一标识\n  key: string;\n\n  // 其他要更新的配置项\n  [configKey: string]: unknown;\n};\n",
        "paraId": 46,
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
//# sourceMappingURL=docs_api_plugin_zh_md_q_hK4X-async.js.map