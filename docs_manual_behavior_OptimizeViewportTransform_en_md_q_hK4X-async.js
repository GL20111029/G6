((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/OptimizeViewportTransform.en.md?type=text'],
{ "docs/manual/behavior/OptimizeViewportTransform.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/OptimizeViewportTransform.en.md?watch=parent");
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
        "value": "OptimizeViewportTransform is a built-in behavior in G6 used to enhance the performance of large-scale graph behaviors.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "This behavior implements a ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "selective rendering strategy",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ", temporarily hiding non-critical visual elements during viewport transformations (such as dragging, zooming, scrolling, etc.) to significantly reduce rendering computation load, improve frame rate, and response speed. After the viewport transformation operation ends, the system automatically restores the visibility of all elements after a set delay to ensure complete visual presentation.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "This behavior is implemented based on the ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "event system",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " by listening to the ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "GraphEvent.BEFORE_TRANSFORM",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " and ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "GraphEvent.AFTER_TRANSFORM",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " events, precisely capturing the start and end timing of viewport transformations, and dynamically controlling element visibility. Therefore, it must be used in conjunction with viewport operation behaviors (such as ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "drag-canvas",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ", ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "zoom-canvas",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ", or ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "scroll-canvas",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ") to be effective.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "This behavior is mainly used for:",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Smooth behavior of large-scale graphs (thousands of nodes/edges)",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Performance-sensitive application scenarios",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Add this behavior in the graph configuration:",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "1. Quick Configuration (Static)",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Declare directly using a string form. This method is simple but only supports default configuration and cannot be dynamically modified after configuration:",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['optimize-viewport-transform'],\n});\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "2. Object Configuration (Recommended)",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "Configure using an object form, supporting custom parameters, and can dynamically update the configuration at runtime:",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'optimize-viewport-transform',\n      key: 'optimize-viewport-transform-1', // Specify an identifier for the behavior for dynamic updates\n      debounce: 300, // Set a longer debounce time\n    },\n  ],\n});\n",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": "Option",
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
        "value": "type",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Behavior type name",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "optimize-viewport-transform",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "enable",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Whether to enable this behavior",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "boolean | ((event: Event) => boolean)",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "debounce",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "How long after the operation ends to restore the visibility of all elements (milliseconds)",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "200",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "shapes",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Specify the graphical elements that should remain visible during canvas operations, ",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "configuration options",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "function",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "(type) => type === 'node'",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "shapes",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " is used to specify the graphical elements that need to remain visible during canvas operations. By default, nodes are always visible, while edges and combos are temporarily hidden during canvas operations to improve performance.",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "{\n  shapes: (type, shape) => {\n    // Dynamically decide whether to remain visible based on element type and graphical object\n    if (type === 'node') return true; // All nodes remain visible\n    if (type === 'edge' && shape.get('importante')) return true; // Important edges remain visible\n    return false; // Other graphics are hidden\n  };\n}\n",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "Example",
        "paraId": 17
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['drag-canvas', 'zoom-canvas', 'optimize-viewport-transform'],\n});\n",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    'drag-canvas',\n    'zoom-canvas',\n    {\n      type: 'optimize-viewport-transform',\n      debounce: 500, // Set a longer debounce time, restoring visibility of all elements 0.5 seconds after the operation stops\n    },\n  ],\n});\n",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  node: {\n    style: {\n      labelText: 'Drag Canvas!',\n    },\n  },\n  behaviors: [\n    'drag-canvas',\n    'zoom-canvas',\n    {\n      type: 'optimize-viewport-transform',\n      shapes: (type, shape) => {\n        if (type === 'node' && shape.className === 'key') return true;\n        return false;\n      },\n    },\n  ],\n});\n",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "👇 Try dragging the canvas to see the effect",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 200,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 100, y: 100 } }],\n  },\n  node: {\n    style: {\n      labelText: 'Drag Canvas!',\n    },\n  },\n  behaviors: [\n    'drag-canvas',\n    {\n      type: 'optimize-viewport-transform',\n      shapes: (type, shape) => {\n        if (type === 'node' && shape.className === 'key') return true;\n        return false;\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "You can dynamically decide whether to enable optimization based on the number of graph elements:",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    'drag-canvas',\n    'zoom-canvas',\n    function () {\n      // Enable optimization when exceeding 500 elements\n      const enable = graph.getNodeData().length + graph.getEdgeData().length > 500;\n      return {\n        type: 'optimize-viewport-transform',\n        key: 'optimize-behavior',\n        enable,\n      };\n    },\n  ],\n});\n",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "When the graph contains a large number of nodes and edges (usually more than 500 elements), using this behavior can significantly improve operational smoothness. It is especially useful in environments with high performance requirements or limited hardware performance.",
        "paraId": 25,
        "tocIndex": 11
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  layout: {\n    type: 'grid',\n  },\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node1', target: 'node3' },\n      { source: 'node1', target: 'node4' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  node: {\n    style: {\n      labelText: (datum) => datum.id,\n    },\n  },\n  behaviors: ['zoom-canvas', 'drag-canvas', 'scroll-canvas', 'optimize-viewport-transform'],\n});\n\ngraph.render();\n",
        "paraId": 26,
        "tocIndex": 12
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
//# sourceMappingURL=docs_manual_behavior_OptimizeViewportTransform_en_md_q_hK4X-async.js.map