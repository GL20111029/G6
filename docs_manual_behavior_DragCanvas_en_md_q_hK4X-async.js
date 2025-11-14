((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/DragCanvas.en.md?type=text'],
{ "docs/manual/behavior/DragCanvas.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/DragCanvas.en.md?watch=parent");
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
        "value": "DragCanvas is a built-in behavior in G6 for implementing canvas dragging functionality, supporting panning the entire canvas by dragging with a mouse or touching the screen. This is the most basic and commonly used navigation behavior in graph visualization, allowing users to freely explore graph content beyond the current viewport.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "This behavior is mainly used for:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Navigating and browsing large charts to view content outside the current viewport",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Adjusting the view focus to move areas of interest to the center of the viewport",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Combining with zoom interactions to achieve a complete canvas navigation experience",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: { nodes: [{ id: 'node-1' }] },\n    layout: { type: 'force' },\n    behaviors: [\n      {\n        type: 'drag-canvas',\n        key: 'drag-canvas',\n      },\n    ],\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'drag-canvas',\n      type: 'drag-canvas',\n      enable: true,\n      sensitivity: 1,\n      trigger: 'Use cursor by default',\n    };\n    const optionFolder = gui.addFolder('ZoomCanvas Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'sensitivity', 0, 10, 1);\n    optionFolder.add(options, 'trigger', {\n      'Use cursor by default': [],\n      'Shift+Arrow Key': {\n        up: ['Shift', 'ArrowUp'],\n        down: ['Shift', 'ArrowDown'],\n        left: ['Shift', 'ArrowLeft'],\n        right: ['Shift', 'ArrowRight'],\n      },\n    });\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'drag-canvas',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
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
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['drag-canvas'],\n});\n",
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
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'drag-canvas',\n      key: 'drag-canvas-1',\n      direction: 'x', // Only allow horizontal dragging\n      key: 'drag-behavior', // Specify an identifier for the behavior for dynamic updates\n    },\n  ],\n});\n",
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
        "value": "drag-canvas",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "✓",
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
        "value": "boolean | ((event: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Event",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "KeyboardEvent",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ") => boolean)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(event) => 'eventType' in event ? event.targetType === 'canvas': true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(Only enabled when clicking on the canvas)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "animation",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Drag animation configuration, only effective when using keyboard movement",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "direction",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Allowed drag direction, optional values are: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "- Set to ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'both'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " (default): Allow dragging in any direction ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "- Set to ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'x'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ": Only allow horizontal dragging ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "- Set to ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'y'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ": Only allow vertical dragging",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'x'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'y'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'both'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'both'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " (no direction restriction)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "range",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Draggable viewport range (in viewport size units), ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "example",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "number | number[]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Infinity",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "sensitivity",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Distance to trigger a single keyboard movement",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Keyboard keys to trigger dragging, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "example",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "object",
        "paraId": 11,
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
        "value": "Callback function when dragging is completed",
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
        "value": "range",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": " is used to control the draggable range of the canvas:",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "Set as a single number: Use the same value for all four directions",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "Set as an array: Specify the range for [top, right, bottom, left] directions respectively",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "For example:",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "range: 2; // Can drag 2 viewport distances in any direction\nrange: [1, 2, 1, 2]; // Can drag 1 viewport up and down, 2 viewports left and right\n",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "The value range for each direction is [0, Infinity], 0 means no dragging, Infinity means unlimited dragging.",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "trigger",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": " allows you to configure keyboard keys to control canvas movement:",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "{\n  trigger: {\n    up: ['ArrowUp'],     // Shortcut key for moving up\n    down: ['ArrowDown'], // Shortcut key for moving down\n    left: ['ArrowLeft'], // Shortcut key for moving left\n    right: ['ArrowRight'] // Shortcut key for moving right\n  }\n}\n",
        "paraId": 22,
        "tocIndex": 6
    },
    {
        "value": "You can also configure combination keys:",
        "paraId": 23,
        "tocIndex": 6
    },
    {
        "value": "{\n  trigger: {\n    up: ['Control', 'ArrowUp'],     // Ctrl + Up Arrow\n    down: ['Control', 'ArrowDown'], // Ctrl + Down Arrow\n    left: ['Control', 'ArrowLeft'], // Ctrl + Left Arrow\n    right: ['Control', 'ArrowRight'] // Ctrl + Right Arrow\n  }\n}\n",
        "paraId": 24,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['drag-canvas'],\n});\n",
        "paraId": 25,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'drag-canvas',\n      direction: 'x', // Only allow horizontal dragging\n    },\n  ],\n});\n",
        "paraId": 26,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'drag-canvas',\n      range: 1.5, // Limit dragging range to 1.5 viewport sizes\n    },\n  ],\n});\n",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'drag-canvas',\n      trigger: {\n        up: ['ArrowUp'],\n        down: ['ArrowDown'],\n        left: ['ArrowLeft'],\n        right: ['ArrowRight'],\n      },\n      animation: {\n        duration: 100, // Add smooth animation effect\n      },\n    },\n  ],\n});\n",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "DragCanvas",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": " is used for dragging the entire canvas view",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": "DragElement",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": " is used for dragging individual graph elements (nodes/edges/combinations)",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": "ScrollCanvas",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": " is used for scrolling the canvas with the mouse wheel without changing the zoom ratio",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  layout: {\n    type: 'grid',\n  },\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node1', target: 'node3' },\n      { source: 'node1', target: 'node4' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  behaviors: ['drag-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 30,
        "tocIndex": 14
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
//# sourceMappingURL=docs_manual_behavior_DragCanvas_en_md_q_hK4X-async.js.map