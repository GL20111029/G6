((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/option.en.md?type=text'],
{ "docs/api/option.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/option.en.md?watch=parent");
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
        "value": "The ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "options",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " of a G6 graph instance control various aspects of the graph, including canvas settings, viewport properties, data, layout, styles, interaction behaviors, plugins, and more. By configuring these options appropriately, you can flexibly customize the appearance and behavior of the graph.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Options can be specified when creating a graph instance or dynamically modified at runtime through the API. Some basic configurations (such as devicePixelRatio, container) require destroying and recreating the graph instance to take effect after modification.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Retrieve all configuration options of the current graph.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getOptions(): GraphOptions;\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Return Value",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "GraphOptions",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Complete configuration options of the current graph",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Example",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "// Retrieve the current graph's options\nconst options = graph.getOptions();\nconsole.log('Current graph options:', options);\n\n// Retrieve specific options\nconsole.log('Current canvas width:', options.width);\nconsole.log('Current layout options:', options.layout);\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Update the graph's configuration options.",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "setOptions(options: GraphOptions): void;\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Parameters",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Parameter",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "options",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "New configuration options",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "GraphOptions",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Note",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "⚠️ ",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "Attention",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": ": To update basic properties like devicePixelRatio, container, etc., you need to destroy the current graph instance and recreate it. Most other configurations can be dynamically updated.",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "Example 1",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": ": Basic Usage",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "// Update graph configuration\ngraph.setOptions({\n  width: 1000, // Update width\n  height: 800, // Update height\n  autoFit: true, // Enable auto-fit\n  animation: true, // Enable animation\n});\n",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "Example 2",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": ": Update Theme",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "// Update graph theme configuration\ngraph.setOptions({\n  theme: {\n    type: 'dark', // Switch to dark theme\n    // Custom theme configuration\n    node: {\n      palette: ['#1AAF8B', '#F8E71C', '#8B572A', '#7ED321'],\n    },\n    edge: {\n      palette: ['#F5A623', '#F8E71C', '#8B572A', '#7ED321'],\n    },\n  },\n});\n",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "Example 3",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": ": Update Layout Configuration",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": "// Update layout configuration\ngraph.setOptions({\n  layout: {\n    type: 'force', // Switch to force-directed layout\n    preventOverlap: true,\n    nodeStrength: -50,\n    edgeStrength: 0.7,\n  },\n});\n",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "Example 4",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": ": Update Default Node and Edge Configuration",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "// Update default style configuration for nodes and edges\ngraph.setOptions({\n  node: {\n    style: {\n      fill: '#91d5ff',\n      stroke: '#40a9ff',\n      lineWidth: 1,\n      radius: 10,\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#91d5ff',\n      lineWidth: 2,\n      endArrow: true,\n    },\n  },\n});\n",
        "paraId": 24,
        "tocIndex": 3
    },
    {
        "value": "type GraphOptions = {\n  // Whether to enable zooming\n  enableZoom?: boolean;\n\n  // Whether to enable dragging\n  enableDrag?: boolean;\n\n  // Default style for nodes\n  defaultNodeStyle?: {\n    fill: string;\n    stroke: string;\n  };\n\n  // Additional configuration options for the graph\n  [configKey: string]: any;\n};\n",
        "paraId": 25,
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
//# sourceMappingURL=docs_api_option_en_md_q_hK4X-async.js.map