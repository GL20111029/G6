((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/render.en.md?type=text'],
{ "docs/api/render.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/render.en.md?watch=parent");
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
        "value": "G6 provides a series of drawing and rendering-related APIs to control the display process of graphical elements. In G6, drawing and rendering are two different concepts:",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Drawing (draw)",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": Responsible only for drawing graphical elements onto the canvas, without involving layout calculations.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Rendering (render)",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": A complete rendering process, including data processing, layout calculations, and final drawing.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Understanding the differences between these APIs is crucial for optimizing performance and achieving specific effects.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Draw elements without performing layout calculations.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "draw(): Promise<void>;\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Note",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "The ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "draw",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": " method only executes the drawing process of elements and does not recalculate the layout.",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "⚠️ ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Attention",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": ": ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "draw",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": " is an asynchronous method, requiring the use of ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "await",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": " or Promise chaining to ensure subsequent operations are executed after drawing is complete.",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Example 1",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": Basic Usage",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "// Basic usage\nawait graph.draw();\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Example 2",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": ": Redraw after modifying node styles",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "// Redraw after modifying node styles\ngraph.updateNodeData([\n  {\n    id: 'node1',\n    style: {\n      fill: 'red',\n      stroke: 'blue',\n      lineWidth: 2,\n    },\n  },\n]);\n\n// Only draw the updated styles without re-layout\nawait graph.draw();\n",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "Example 3",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": ": Batch update multiple elements and draw once",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": "// Update multiple nodes\ngraph.updateNodeData([{ id: 'node1', style: { fill: 'red' } }]);\ngraph.updateNodeData([{ id: 'node2', style: { fill: 'blue' } }]);\n\n// Update edges\ngraph.updateEdgeData([{ id: 'edge1', style: { stroke: 'green' } }]);\n\n// Draw after batch operations\nawait graph.draw();\n",
        "paraId": 13,
        "tocIndex": 2
    },
    {
        "value": "Example 4",
        "paraId": 14,
        "tocIndex": 2
    },
    {
        "value": ": Use event listener to detect drawing completion",
        "paraId": 14,
        "tocIndex": 2
    },
    {
        "value": "import { GraphEvent } from '@antv/g6';\n\ngraph.on(GraphEvent.AFTER_DRAW, () => {\n  console.log('Drawing complete');\n});\n\nawait graph.draw();\n",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "Execute the complete rendering process, including data processing, layout calculations, and drawing.",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "render(): Promise<void>;\n",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "Note",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "The ",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "render",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": " method executes the complete rendering process:",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "Process data updates",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "Draw elements onto the canvas",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "Execute layout algorithms",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "Example 1",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": ": Basic Usage",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": "// Basic usage\nawait graph.render();\n",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "Example 2",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": ": Render after adding new data",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "graph.addData({\n  nodes: [{ id: 'node3' }, { id: 'node4' }],\n  edges: [{ id: 'edge2', source: 'node1', target: 'node3' }],\n});\nawait graph.render();\n",
        "paraId": 24,
        "tocIndex": 3
    },
    {
        "value": "Example 3",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": ": Listen to rendering events",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": "import { GraphEvent } from '@antv/g6';\n\n// Before rendering starts\ngraph.on(GraphEvent.BEFORE_RENDER, () => {\n  console.log('Rendering starts...');\n  // Show loading indicator\n  showLoadingIndicator();\n});\n\n// After rendering completes\ngraph.on(GraphEvent.AFTER_RENDER, () => {\n  console.log('Rendering complete');\n  // Hide loading indicator\n  hideLoadingIndicator();\n});\n\ngraph.render();\n",
        "paraId": 26,
        "tocIndex": 3
    },
    {
        "value": "Clear all elements on the canvas, including nodes, edges, and other graphical elements.",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "clear(): Promise<void>;\n",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": "Note",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "This method deletes all elements in the graph but retains the canvas configuration and styles. It is an asynchronous method that returns a Promise.",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "Example",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": "// Basic usage\nawait graph.clear();\n",
        "paraId": 32,
        "tocIndex": 4
    },
    {
        "value": "Use ",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "draw()",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": " when:\n",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "Only the styles or states of elements are modified, without needing to recalculate positions.",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "Performance-sensitive, aiming to avoid unnecessary layout calculations.",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "Use ",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "render()",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": " when:\n",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "Initializing the graph.",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "Changing layout configurations.",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "Adding or removing a large number of nodes/edges.",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "Need to recalculate positions of all elements.",
        "paraId": 35,
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
//# sourceMappingURL=docs_api_render_en_md_q_hK4X-async.js.map