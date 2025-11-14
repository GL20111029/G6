((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/plugin.en.md?type=text'],
{ "docs/api/plugin.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/plugin.en.md?watch=parent");
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
        "value": "Plugins",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " are an important mechanism in G6 for extending functionality and enhancing the interactive experience of graphs. Plugins typically provide independent functional modules, such as thumbnails, toolbars, context menus, etc. They integrate well with the main graph while maintaining modular and maintainable code.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "The plugin system is designed to follow the \"plug and play\" principle, allowing dynamic addition or removal as needed.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Retrieve the plugin instance specified by the key, used to access and operate the methods provided by the plugin.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getPluginInstance<T extends Plugin>(key: string): T;\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Parameters",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Parameter",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "key",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Unique identifier of the plugin",
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
        "value": "Return Value",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": Plugin instance",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": The plugin instance corresponding to the specified key",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Note",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Many plugins provide specific API methods, which can be directly called by obtaining the plugin instance. For example, the fullscreen plugin provides ",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "request()",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": " and ",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "exit()",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": " methods to control fullscreen status.",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "Example",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": ": Operate the fullscreen plugin",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "// Get the fullscreen plugin instance\nconst fullscreen = graph.getPluginInstance('fullscreen');\n\n// Request to enter fullscreen\nfullscreen.request();\n\n// Exit fullscreen later\nsetTimeout(() => {\n  fullscreen.exit();\n}, 5000);\n",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": "Retrieve all configured plugins in the current graph.",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "getPlugins(): PluginOptions;\n",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Return Value",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Type",
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
        "value": "Description",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": ": All configured plugins in the current graph",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "Example",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "// Get all plugin configurations\nconst plugins = graph.getPlugins();\n\n// View currently active plugins\nconsole.log('Current graph plugin configurations:', plugins);\n",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "Set the graph's plugins, replacing all existing plugin configurations.",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "setPlugins(plugins: PluginOptions | ((prev: PluginOptions) => PluginOptions)): void;\n",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Parameter",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "plugins",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "New plugin configurations, or a function returning new configurations based on the current ones",
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
        "value": "Note",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "The set plugins will completely replace the original plugin configurations. To add new plugins based on existing ones, you can use functional updates:",
        "paraId": 26,
        "tocIndex": 4
    },
    {
        "value": "graph.setPlugins((plugins) => [...plugins, { type: 'grid', key: 'grid-line' }]);\n",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Example 1",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": ": Set basic plugins",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": "// Set multiple basic plugins\ngraph.setPlugins([\n  // String form (using default configuration)\n  'minimap',\n\n  // Object form (custom configuration)\n  {\n    type: 'grid',\n    key: 'grid-line',\n  },\n  {\n    type: 'toolbar',\n    key: 'graph-toolbar',\n    position: 'top-right',\n  },\n]);\n",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "Example 2",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": ": Use functional updates",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "// Add new plugins to existing configurations\ngraph.setPlugins((currentPlugins) => [\n  ...currentPlugins,\n  {\n    type: 'grid',\n    key: 'grid-line',\n  },\n]);\n\n// Replace specific plugins\ngraph.setPlugins((currentPlugins) => {\n  // Filter out existing grid plugins\n  const filteredPlugins = currentPlugins.filter((plugin) => {\n    if (typeof plugin === 'string') return plugin !== 'grid';\n    if (typeof plugin === 'function') return true;\n    return plugin.type !== 'grid';\n  });\n\n  // Add new grid plugin configuration\n  return [\n    ...filteredPlugins,\n    {\n      type: 'grid',\n      key: 'new-grid',\n      follow: true,\n    },\n  ];\n});\n",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": "Update the configuration of a specified plugin, identified by the ",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": "key",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": " of the plugin to be updated.",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": "updatePlugin(plugin: UpdatePluginOption): void;\n",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "Parameters",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "Parameter",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "Default",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "Required",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "plugin",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "Configuration of the plugin to be updated",
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
        "value": "Note",
        "paraId": 37,
        "tocIndex": 5
    },
    {
        "value": "To update a plugin, the ",
        "paraId": 38,
        "tocIndex": 5
    },
    {
        "value": "key",
        "paraId": 38,
        "tocIndex": 5
    },
    {
        "value": " field must be specified in the original plugin configuration to accurately locate and update the plugin.",
        "paraId": 38,
        "tocIndex": 5
    },
    {
        "value": "Example 1",
        "paraId": 39,
        "tocIndex": 5
    },
    {
        "value": ": Update plugin configuration",
        "paraId": 39,
        "tocIndex": 5
    },
    {
        "value": "// Specify key when initially setting plugins\ngraph.setPlugins([\n  {\n    type: 'grid',\n    key: 'main-grid',\n    follow: true,\n  },\n]);\n\n// Update grid plugin configuration\ngraph.updatePlugin({\n  key: 'main-grid',\n  follow: false,\n});\n",
        "paraId": 40,
        "tocIndex": 5
    },
    {
        "value": "Plugin configuration type, representing an array of plugin configurations.",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "type PluginOptions = (string | CustomPluginOption | ((this: Graph) => CustomPluginOption))[];\n",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": "Custom plugin configuration interface, used to configure plugin parameters.",
        "paraId": 43,
        "tocIndex": 8
    },
    {
        "value": "type CustomPluginOption = {\n  // Plugin type\n  type: string;\n\n  // Plugin key, i.e., unique identifier\n  // Used to identify the plugin for further operations\n  key?: string;\n\n  // Other configuration items for different types of plugins\n  [configKey: string]: any;\n};\n",
        "paraId": 44,
        "tocIndex": 8
    },
    {
        "value": "Configuration interface for updating plugins, used to dynamically modify plugin parameters.",
        "paraId": 45,
        "tocIndex": 9
    },
    {
        "value": "type UpdatePluginOption = {\n  // Unique identifier of the plugin to be updated\n  key: string;\n\n  // Other configuration items to be updated\n  [configKey: string]: unknown;\n};\n",
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
//# sourceMappingURL=docs_api_plugin_en_md_q_hK4X-async.js.map