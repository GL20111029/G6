((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/EdgeBundling.en.md?type=text'],
{ "docs/manual/plugin/EdgeBundling.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/EdgeBundling.en.md?watch=parent");
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
        "value": "Edge bundling is a graph visualization technique used to reduce visual clutter in complex network graphs and to reveal high-level patterns and structures in the graph. Its purpose is to bundle adjacent edges together.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The edge bundling plugin provided in G6 is based on the implementation of the ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "FEDB (Force-Directed Edge Bundling for Graph Visualization)",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " paper: modeling edges as flexible springs that can attract each other and bundling them through a self-organizing process.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "The edge bundling plugin is mainly suitable for the following scenarios:",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Reducing visual clutter in complex network graphs",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Revealing high-level patterns and structures in the graph",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Improving the readability and aesthetics of large-scale graph data",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Below is a simple example of initializing the EdgeBundling plugin:",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-bundling',\n      bundleThreshold: 0.6,\n      cycles: 6,\n      divisions: 3,\n      divRate: 2,\n      iterations: 90,\n      iterRate: 2 / 3,\n      K: 0.1,\n      lambda: 0.1,\n    },\n  ],\n});\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Property",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Default Value",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Plugin type, used to identify the plugin as an edge bundling plugin",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "edge-bundling",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "key",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Unique identifier for the plugin, can be used to get the plugin instance or update plugin options",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "bundleThreshold",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Edge compatibility threshold, determines which edges should be bundled together, the larger the value, the fewer edges are bundled, ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "example",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "0.6",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "cycles",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Number of simulation cycles, controls the number of execution rounds of the edge bundling simulation",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "6",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "divisions",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Initial number of cut points, in subsequent cycles, the number of cut points will gradually increase according to divRate, affecting the degree of edge subdivision",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "1",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "divRate",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Growth rate of cut points, determines the growth rate of cut points in each cycle",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "2",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "iterations",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Specifies the number of iterations executed in the first cycle, in subsequent cycles, the number of iterations will gradually decrease according to iterRate, affecting the accuracy of the simulation",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "90",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "iterRate",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Iteration decrement rate, controls the reduction ratio of iterations in each cycle",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "2/3",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "K",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Edge strength, affects the attraction and repulsion between edges, ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "example",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "0.1",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "lambda",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Initial step size, in subsequent cycles, the step size will double increment, affecting the magnitude of node movement during edge bundling",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "0.1",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Edge compatibility threshold, determines which edges should be bundled together. The larger the value, the fewer edges are bundled, and vice versa.",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "A lower bundleThreshold value (e.g., 0.4) will cause more edges to be bundled together, forming a more pronounced bundling effect.",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-bundling',\n      bundleThreshold: 0.4, // Lower edge compatibility threshold\n    },\n  ],\n});\n",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "The effect is as follows:\n",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "A higher bundleThreshold value (e.g., 0.8) will cause fewer edges to be bundled together, maintaining more independent edges.",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-bundling',\n      bundleThreshold: 0.8, // Higher edge compatibility threshold\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "The effect is as follows:\n",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Edge strength, affects the attraction and repulsion between edges. A higher K value will make the attraction between edges stronger, resulting in a tighter bundling effect.",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "A lower K value (e.g., 0.05) will make the attraction between edges weaker, resulting in a weaker bundling effect.",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-bundling',\n      K: 0.05, // Lower edge strength\n    },\n  ],\n});\n",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "The effect is as follows:\n",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "A higher K value (e.g., 0.2) will make the attraction between edges stronger, resulting in a more pronounced bundling effect.",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-bundling',\n      K: 0.2, // Higher edge strength\n    },\n  ],\n});\n",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "The effect is as follows:\n",
        "paraId": 22,
        "tocIndex": 5
    },
    {
        "value": "The simplest way is to use the preset configuration directly:",
        "paraId": 23,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  plugins: ['edge-bundling'],\n});\n",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "You can customize the parameters of edge bundling as needed:",
        "paraId": 25,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  plugins: [\n    {\n      type: 'edge-bundling',\n      bundleThreshold: 0.8, // Higher edge compatibility threshold\n      cycles: 8, // More simulation cycles\n      K: 0.2, // Stronger edge strength\n    },\n  ],\n});\n",
        "paraId": 26,
        "tocIndex": 8
    },
    {
        "value": "Use the key identifier to dynamically update edge bundling properties at runtime:",
        "paraId": 27,
        "tocIndex": 9
    },
    {
        "value": "// Initial configuration\nconst graph = new Graph({\n  // Other configurations...\n  plugins: [\n    {\n      type: 'edge-bundling',\n      key: 'my-edge-bundling',\n      bundleThreshold: 0.6,\n    },\n  ],\n});\n\n// Subsequent dynamic update\ngraph.updatePlugin({\n  key: 'my-edge-bundling',\n  bundleThreshold: 0.8, // Update edge compatibility threshold\n  cycles: 10, // Update number of simulation cycles\n});\n",
        "paraId": 28,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://assets.antv.antgroup.com/g6/circular.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      autoFit: 'view',\n      data,\n      layout: {\n        type: 'circular',\n      },\n      node: { style: { size: 20 } },\n      behaviors: ['drag-canvas', 'drag-element'],\n      plugins: [\n        {\n          key: 'edge-bundling',\n          type: 'edge-bundling',\n          bundleThreshold: 0.1,\n        },\n      ],\n    });\n\n    graph.render();\n  });\n",
        "paraId": 29,
        "tocIndex": 10
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
//# sourceMappingURL=docs_manual_plugin_EdgeBundling_en_md_q_hK4X-async.js.map