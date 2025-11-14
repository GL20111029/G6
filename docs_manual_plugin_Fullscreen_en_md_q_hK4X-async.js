((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Fullscreen.en.md?type=text'],
{ "docs/manual/plugin/Fullscreen.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Fullscreen.en.md?watch=parent");
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
        "value": "The Fullscreen plugin allows users to expand the graph visualization content to the entire screen, providing a broader view and a better immersive experience.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The Fullscreen plugin is mainly suitable for the following scenarios:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Provide a broader view for viewing complex graph data",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Enhance immersive experience, focusing on graph visualization content",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Display graph data in presentations or reports",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Below is a simple example of initializing the Fullscreen plugin:",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      autoFit: true,\n      trigger: {\n        request: 'F', // Use shortcut key F to enter fullscreen\n        exit: 'Esc', // Use shortcut key Esc to exit fullscreen\n      },\n      onEnter: () => {\n        console.log('Entered fullscreen mode');\n      },\n      onExit: () => {\n        console.log('Exited fullscreen mode');\n      },\n    },\n  ],\n});\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Property",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Default Value",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Plugin type",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "fullscreen",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "key",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Unique identifier for the plugin, can be used to get the plugin instance or update plugin options",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "autoFit",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Whether to auto-fit the canvas size, the canvas size will automatically adapt to the screen size when fullscreen",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "trigger",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Method to trigger fullscreen, ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "example",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "{ request?: string; exit?: string; }",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "onEnter",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Callback after entering fullscreen",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "onExit",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Callback after exiting fullscreen",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "The trigger property is used to control the method of triggering fullscreen. It supports two configuration methods:",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Use keyboard shortcuts to trigger fullscreen and exit fullscreen.",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      trigger: {\n        request: 'F', // Use shortcut key F to enter fullscreen\n        exit: 'Esc', // Use shortcut key Esc to exit fullscreen\n      },\n    },\n  ],\n});\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "Control fullscreen by calling the request and exit methods.",
        "paraId": 10,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      key: 'my-fullscreen',\n    },\n  ],\n});\n\n// Enter fullscreen\ngraph.getPluginInstance('my-fullscreen').request();\n\n// Exit fullscreen\ngraph.getPluginInstance('my-fullscreen').exit();\n",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "Whether to auto-fit the canvas size, the canvas size will automatically adapt to the screen size when fullscreen.",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": "When set to true, the canvas will automatically resize to fit the entire screen.",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "When set to false, the canvas size remains unchanged.",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      autoFit: true,\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "This method is used to enter fullscreen mode programmatically. It can be called on the plugin instance to expand the graph visualization to the entire screen.",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      key: 'my-fullscreen',\n    },\n  ],\n});\n\n// Enter fullscreen\ngraph.getPluginInstance('my-fullscreen').request();\n",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "This method is used to exit fullscreen mode programmatically. It can be called on the plugin instance to revert the graph visualization back to its original size.",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      key: 'my-fullscreen',\n    },\n  ],\n});\n\n// Exit fullscreen\ngraph.getPluginInstance('my-fullscreen').exit();\n",
        "paraId": 18,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  data: { nodes: Array.from({ length: 20 }).map((_, i) => ({ id: `node${i}` })) },\n  autoFit: 'center',\n  background: '#fff',\n  plugins: [\n    {\n      type: 'fullscreen',\n      key: 'fullscreen',\n    },\n    function () {\n      const graph = this;\n      return {\n        type: 'toolbar',\n        key: 'toolbar',\n        position: 'top-left',\n        onClick: (item) => {\n          const fullscreenPlugin = graph.getPluginInstance('fullscreen');\n          if (item === 'request-fullscreen') {\n            fullscreenPlugin.request();\n          }\n          if (item === 'exit-fullscreen') {\n            fullscreenPlugin.exit();\n          }\n        },\n        getItems: () => {\n          return [\n            { id: 'request-fullscreen', value: 'request-fullscreen' },\n            { id: 'exit-fullscreen', value: 'exit-fullscreen' },\n          ];\n        },\n      };\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 19,
        "tocIndex": 11
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
//# sourceMappingURL=docs_manual_plugin_Fullscreen_en_md_q_hK4X-async.js.map