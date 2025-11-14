((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/ZoomCanvas.en.md?type=text'],
{ "docs/manual/behavior/ZoomCanvas.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/ZoomCanvas.en.md?watch=parent");
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
        "value": "ZoomCanvas is a built-in behavior in G6 used to implement the canvas zooming feature, supporting zooming in and out of the canvas using the mouse wheel or keyboard shortcuts. This is one of the most commonly used interactions in graph visualization, helping users view both the overall structure and local details of the graph.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "This behavior is mainly used for:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Browsing large-scale graph data, freely switching between the whole and details",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Focusing on specific areas for detailed analysis",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: { nodes: [{ id: 'node-1' }] },\n    layout: { type: 'force' },\n    behaviors: [\n      {\n        type: 'zoom-canvas',\n        key: 'zoom-canvas',\n      },\n    ],\n    node: { style: { fill: '#873bf4' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'zoom-canvas',\n      type: 'zoom-canvas',\n      animation: true,\n      enable: true,\n      sensitivity: 1,\n      trigger: 'Use wheel by default',\n    };\n    const optionFolder = gui.addFolder('ZoomCanvas Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'sensitivity', 0, 10, 1);\n    optionFolder.add(options, 'trigger', {\n      'Use wheel by default': [],\n      'Control+Wheel': ['Control'],\n      'zoomIn:Ctrl+1 zoomOut:Ctrl+2 reset:Ctrl+0': {\n        zoomIn: ['Control', '1'],\n        zoomOut: ['Control', '2'],\n        reset: ['Control', '0'],\n      },\n    });\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'zoom-canvas',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Add this behavior in the graph configuration:",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "1. Quick Configuration (Static)",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Declare directly using a string form. This method is simple but only supports default configuration and cannot be dynamically modified after configuration:",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['zoom-canvas'],\n});\n",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "2. Object Configuration (Recommended)",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Configure using an object form, supporting custom parameters, and can dynamically update the configuration at runtime:",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'zoom-canvas',\n      key: 'zoom-canvas-1', // Specify an identifier for the behavior for dynamic updates\n      sensitivity: 1.5, // Set sensitivity\n    },\n  ],\n});\n",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Option",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Behavior type name",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "zoom-canvas",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "animation",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Zoom animation effect settings",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "{ duration: 200 }",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Whether to enable this behavior",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: Event) => boolean)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "origin",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Zoom center point (viewport coordinates)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Point",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "onFinish",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Callback function when zooming is finished",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "preventDefault",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Whether to prevent the browser's default event",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sensitivity",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Zoom sensitivity, the larger the value, the faster the zoom",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "1",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "How to trigger zooming, supports mouse wheel and keyboard shortcuts, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "configuration options",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "string[] | object",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " has two usage methods, suitable for different scenarios:",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "If you want to trigger zooming only when certain keys are pressed while scrolling the mouse wheel, you can configure it like this:",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "{\n  trigger: ['Control']; // Hold down the Control key and scroll the mouse wheel to zoom\n}\n",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "Common modifier keys include:",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "Control",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "Shift",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "Alt",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "Not sure what value corresponds to a keyboard key? Refer to ",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": "MDN Key Values",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": ".",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": "If you want to control zooming entirely using the keyboard, you can set up key combinations:",
        "paraId": 21,
        "tocIndex": 7
    },
    {
        "value": "{\n  trigger: {\n    zoomIn: ['Control', '+'],  // Zoom in shortcut\n    zoomOut: ['Control', '-'], // Zoom out shortcut\n    reset: ['Control', '0']    // Reset zoom ratio shortcut\n  }\n}\n",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['zoom-canvas'],\n});\n",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    function () {\n      return {\n        type: 'zoom-canvas',\n        origin: this.getCanvasCenter(), // Zoom with the viewport center as the origin\n      };\n    },\n  ],\n});\n",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'zoom-canvas',\n      sensitivity: 0.8, // Lower sensitivity for smoother zoom changes\n    },\n  ],\n});\n",
        "paraId": 25,
        "tocIndex": 11
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'zoom-canvas',\n      trigger: ['Shift'], // Hold down the Shift key and scroll to zoom\n    },\n  ],\n});\n",
        "paraId": 26,
        "tocIndex": 12
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'zoom-canvas',\n      trigger: {\n        zoomIn: ['Control', '='], // Ctrl + = to zoom in\n        zoomOut: ['Control', '-'], // Ctrl + - to zoom out\n        reset: ['Control', '0'], // Ctrl + 0 to reset\n      },\n    },\n  ],\n});\n",
        "paraId": 27,
        "tocIndex": 13
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'zoom-canvas',\n      // Other configurations for the PC side...\n    },\n    function () {\n      return {\n        type: 'zoom-canvas',\n        trigger: ['pinch'],\n        sensitivity: 0.8, // Lower sensitivity for smoother zoom changes\n        origin: this.getCanvasCenter(), // Zoom with the viewport center as the origin\n      };\n    },\n  ],\n});\n",
        "paraId": 28,
        "tocIndex": 14
    },
    {
        "value": "To avoid excessive zooming in or out, you can set zoom limits:",
        "paraId": 29,
        "tocIndex": 16
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  zoomRange: [0.5, 3], // Allow zooming out to 50% and zooming in to 300%\n  behaviors: ['zoom-canvas'],\n});\n",
        "paraId": 30,
        "tocIndex": 16
    },
    {
        "value": "Zooming and dragging are common combinations for a complete navigation experience:",
        "paraId": 31,
        "tocIndex": 17
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n});\n",
        "paraId": 32,
        "tocIndex": 17
    },
    {
        "value": "On a touchpad, both two-finger swipe (for scrolling) and pinch (for zooming) gestures are often interpreted as ",
        "paraId": 33,
        "tocIndex": 18
    },
    {
        "value": "wheel",
        "paraId": 33,
        "tocIndex": 18
    },
    {
        "value": " events.",
        "paraId": 33,
        "tocIndex": 18
    },
    {
        "value": "Because both ",
        "paraId": 34,
        "tocIndex": 18
    },
    {
        "value": "zoom-canvas",
        "paraId": 34,
        "tocIndex": 18
    },
    {
        "value": " and ",
        "paraId": 34,
        "tocIndex": 18
    },
    {
        "value": "scroll-canvas",
        "paraId": 34,
        "tocIndex": 18
    },
    {
        "value": " respond to ",
        "paraId": 34,
        "tocIndex": 18
    },
    {
        "value": "wheel",
        "paraId": 34,
        "tocIndex": 18
    },
    {
        "value": " events by default, using them together can cause conflicts, such as a single gesture triggering both scrolling and zooming.",
        "paraId": 34,
        "tocIndex": 18
    },
    {
        "value": "You can resolve this by checking the ",
        "paraId": 35,
        "tocIndex": 18
    },
    {
        "value": "event.ctrlKey",
        "paraId": 35,
        "tocIndex": 18
    },
    {
        "value": " property. On most platforms, a pinch gesture sets ",
        "paraId": 35,
        "tocIndex": 18
    },
    {
        "value": "event.ctrlKey",
        "paraId": 35,
        "tocIndex": 18
    },
    {
        "value": " to ",
        "paraId": 35,
        "tocIndex": 18
    },
    {
        "value": "true",
        "paraId": 35,
        "tocIndex": 18
    },
    {
        "value": ", while a swipe does not. This allows you to conditionally enable ",
        "paraId": 35,
        "tocIndex": 18
    },
    {
        "value": "zoom-canvas",
        "paraId": 35,
        "tocIndex": 18
    },
    {
        "value": " only for pinch gestures.",
        "paraId": 35,
        "tocIndex": 18
    },
    {
        "value": "import { Graph } from '@antv/g6';\nconst graph = new Graph({\n  container: 'container',\n  layout: {\n    type: 'grid',\n  },\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }],\n  },\n  behaviors: [\n    'scroll-canvas',\n    {\n      key: 'custom-zoom-canvas',\n      type: 'zoom-canvas',\n      enable: (event) => {\n        return event.ctrlKey; // When ctrlKey is true, it performs a two-finger pinch or spread operation; when false, it performs a two-finger swipe operation.\n      },\n    },\n  ],\n});\ngraph.render();\n",
        "paraId": 36,
        "tocIndex": 18
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  layout: {\n    type: 'grid',\n  },\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node1', target: 'node3' },\n      { source: 'node1', target: 'node4' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  behaviors: ['zoom-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 37,
        "tocIndex": 19
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
//# sourceMappingURL=docs_manual_behavior_ZoomCanvas_en_md_q_hK4X-async.js.map