((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/BrushSelect.en.md?type=text'],
{ "docs/manual/behavior/BrushSelect.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/BrushSelect.en.md?watch=parent");
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
        "value": "Brush select allows users to click and drag a box to enclose elements, selecting the elements within the box.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "This interaction is mainly used for:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Quickly selecting a batch of elements",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Quickly deselecting a batch of elements",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 200, y: 100 } },\n        { id: 'node-2', style: { x: 360, y: 100 } },\n        { id: 'node-3', style: { x: 280, y: 220 } },\n      ],\n      edges: [\n        { source: 'node-1', target: 'node-2' },\n        { source: 'node-1', target: 'node-3' },\n        { source: 'node-2', target: 'node-3' },\n      ],\n    },\n    node: {\n      style: { fill: '#7e3feb' },\n      state: {\n        custom: { fill: '#ffa940' },\n      },\n    },\n    edge: {\n      stroke: '#8b9baf',\n      state: {\n        custom: { stroke: '#ffa940' },\n      },\n    },\n    behaviors: [\n      {\n        type: 'brush-select',\n        key: 'brush-select',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'brush-select',\n      type: 'brush-select',\n      animation: false,\n      enable: true,\n      enableElements: ['node', 'edge', 'combo'],\n      immediately: false,\n      mode: 'default',\n      state: 'selected',\n      trigger: 'shift+drag',\n    };\n    const optionFolder = gui.addFolder('BrushSelect Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'enableElements', [\n      ['node', 'edge', 'combo'],\n      ['node', 'edge'],\n      ['node', 'combo'],\n      ['combo', 'edge'],\n      ['node'],\n      ['edge'],\n      ['combo'],\n    ]);\n    optionFolder.add(options, 'trigger', {\n      'shift+drag': ['shift'],\n      drag: [],\n    });\n    optionFolder.add(options, 'state', ['active', 'selected', 'custom']);\n    optionFolder.add(options, 'mode', ['union', 'intersect', 'diff', 'default']).onChange((e) => {\n      immediately.show(e === 'default');\n    });\n    const immediately = optionFolder.add(options, 'immediately');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'brush-select',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Add this interaction in the graph configuration:",
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
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['brush-select'],\n});\n",
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
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select-1',\n      immediately: true, // Elements are immediately selected as the box encloses them\n      trigger: ['shift', 'alt', 'control'], // Use multiple keys for selection\n    },\n  ],\n});\n",
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
        "value": "Interaction type name. This plugin is built-in, and you can use it with ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "type: 'brush-select'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ".",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "brush-select",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | string",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "brush-select",
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
        "value": "Whether to enable animation",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Whether to enable brush select functionality",
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
        "value": ") => boolean)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "enableElements",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Types of elements that can be selected",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "( ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "combo",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " )[]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "[",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "combo",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "immediately",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Whether to select immediately, only effective when ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "selection mode",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " is ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "default",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "example",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "mode",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Selection mode, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "example",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "union",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "intersect",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "diff",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "default",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "default",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "onSelect",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Callback for selected element state",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(states:Record<string,string|string[]>) =>Record<string,string|string[]>",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "state",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Switch to this state when selected",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "string | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "selected",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "active",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "inactive",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "disabled",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "highlight",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "selected",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "style",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Specify the style of the selection box, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "configuration options",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "See below",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Press this shortcut key in combination with a mouse click to perform selection ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Key reference:",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "MDN Key Values",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ". If set to an ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "empty array",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ", it means selection can be performed with a mouse click without pressing other keys ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " ⚠️ Note, setting ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " to ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "['drag']",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " will cause the ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "drag-canvas",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " behavior to fail. The two cannot be configured simultaneously.",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "string[] | (",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Control",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Shift",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "| ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Alt",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "......",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ")[]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "[",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "shift",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Whether to select immediately, only effective when selection mode is ",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "default",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select',\n      immediately: true, // Elements are immediately selected as the box encloses them\n      trigger: [], // No need to press other keys, just click and drag the mouse to select\n    },\n  ],\n});\n",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data: {\n    nodes: [\n      { id: 'node-1', style: { x: 100, y: 50 } },\n      { id: 'node-2', style: { x: 260, y: 50 } },\n      { id: 'node-3', style: { x: 280, y: 100 } },\n    ],\n    edges: [\n      { source: 'node-1', target: 'node-2' },\n      { source: 'node-1', target: 'node-3' },\n      { source: 'node-2', target: 'node-3' },\n    ],\n  },\n  node: {\n    style: { fill: '#7e3feb' },\n  },\n  edge: {\n    stroke: '#8b9baf',\n  },\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select',\n      immediately: true, // Immediate selection\n      trigger: [],\n    },\n  ],\n  plugins: [{ type: 'grid-line', size: 30 }],\n});\n\ngraph.render();\n",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "Four selection modes are built-in:",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": "union",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": ": Retain the current state of selected elements and add the specified state.",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "intersect",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": ": If the selected elements already have the specified state, retain it; otherwise, clear the state.",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "diff",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": ": Invert the specified state of the selected elements.",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "default",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": ": Clear the current state of selected elements and add the specified state.",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select',\n      mode: 'default', // Selection mode, default selection mode\n    },\n  ],\n});\n",
        "paraId": 22,
        "tocIndex": 6
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 200, y: 100 } },\n        { id: 'node-2', style: { x: 360, y: 100 } },\n        { id: 'node-3', style: { x: 280, y: 220 } },\n      ],\n      edges: [\n        { source: 'node-1', target: 'node-2' },\n        { source: 'node-1', target: 'node-3' },\n        { source: 'node-2', target: 'node-3' },\n      ],\n    },\n    node: {\n      style: { fill: '#7e3feb' },\n      state: {\n        custom: { fill: '#ffa940' },\n      },\n    },\n    edge: {\n      stroke: '#8b9baf',\n      state: {\n        custom: { stroke: '#ffa940' },\n      },\n    },\n    behaviors: [\n      {\n        type: 'brush-select',\n        key: 'brush-select',\n        trigger: [],\n        immediately: true,\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'brush-select',\n      type: 'brush-select',\n      animation: false,\n      enable: true,\n      enableElements: ['node', 'edge', 'combo'],\n      mode: 'default',\n      state: 'selected',\n    };\n    const optionFolder = gui.addFolder('BrushSelect Options');\n    optionFolder.add(options, 'type').disable(true);\n\n    optionFolder.add(options, 'state', ['active', 'selected', 'custom']);\n    optionFolder.add(options, 'mode', ['union', 'intersect', 'diff', 'default']);\n    // .onChange((e) => {\n    //   immediately.show(e === 'default');\n    // });\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'brush-select',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 23,
        "tocIndex": 6
    },
    {
        "value": "Attribute",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Description",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "cursor",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Mouse style",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "fill",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Fill color",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "string | Pattern | null",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "#1677FF",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "fillOpacity",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Fill opacity",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "0.1",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "isBillboard",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Enable billboard mode",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "isSizeAttenuation",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Enable size attenuation",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "boolean",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "lineCap",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Line end style",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "butt",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "round",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "square",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "lineDash",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Dash configuration",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string | (string | number)[]",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "lineDashOffset",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Dash offset",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "lineJoin",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Line join style",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "miter",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "round",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "bevel",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "lineWidth",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Line width",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "1",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "opacity",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Overall opacity",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "radius",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Rectangle corner radius",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string | number[]",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "shadowBlur",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Shadow blur degree",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "shadowColor",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Shadow color",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "shadowOffsetX",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Shadow X direction offset",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "shadowOffsetY",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Shadow Y direction offset",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "stroke",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Stroke color",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "string | Pattern | null",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "#1677FF",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "strokeOpacity",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Stroke opacity",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number | string",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "visibility",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Visibility",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "visible",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "hidden",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "zIndex",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Rendering level",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "2",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Example",
        "paraId": 25,
        "tocIndex": 7
    },
    {
        "value": "：",
        "paraId": 25,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select',\n      style: {\n        width: 0,\n        height: 0,\n        lineWidth: 4,\n        lineDash: [2, 2], // Dashed outline\n        // RGB super colorful box\n        fill: 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',\n        stroke: 'pink',\n        fillOpacity: 0.2,\n        zIndex: 2,\n        pointerEvents: 'none',\n      },\n    },\n  ],\n});\n",
        "paraId": 26,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 300,\n  data: {\n    nodes: [\n      { id: 'node-1', style: { x: 200, y: 100 } },\n      { id: 'node-2', style: { x: 360, y: 100 } },\n      { id: 'node-3', style: { x: 280, y: 220 } },\n    ],\n    edges: [\n      { source: 'node-1', target: 'node-2' },\n      { source: 'node-1', target: 'node-3' },\n      { source: 'node-2', target: 'node-3' },\n    ],\n  },\n  node: {\n    style: { fill: '#7e3feb' },\n  },\n  edge: {\n    stroke: '#8b9baf',\n  },\n  behaviors: [\n    {\n      type: 'brush-select',\n      key: 'brush-select',\n      trigger: [],\n      immediately: true,\n      style: {\n        width: 0,\n        height: 0,\n        lineWidth: 4,\n        lineDash: [2, 2], // Dashed outline\n        // RGB super colorful box\n        fill: 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',\n        stroke: 'pink',\n        fillOpacity: 0.2,\n        zIndex: 2,\n        pointerEvents: 'none',\n      },\n    },\n  ],\n  plugins: [{ type: 'grid-line', size: 30 }],\n  animation: true,\n});\n\ngraph.render();\n",
        "paraId": 27,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [\n      { id: 'node-1', style: { x: 200, y: 250 } },\n      { id: 'node-2', style: { x: 250, y: 200 } },\n      { id: 'node-3', style: { x: 300, y: 250 } },\n      { id: 'node-4', style: { x: 250, y: 300 } },\n    ],\n    edges: [\n      { source: 'node-1', target: 'node-2' },\n      { source: 'node-2', target: 'node-3' },\n      { source: 'node-3', target: 'node-4' },\n      { source: 'node-4', target: 'node-1' },\n    ],\n  },\n  behaviors: [\n    {\n      key: 'brush-select',\n      type: 'brush-select',\n      enable: true,\n      animation: false,\n      mode: 'default', // union intersect diff default\n      state: 'selected', // 'active', 'selected', 'inactive', ...\n      trigger: [], // ['Shift', 'Alt', 'Control', 'Drag', 'Meta', ...]\n      style: {\n        width: 0,\n        height: 0,\n        lineWidth: 4,\n        lineDash: [2, 2],\n        fill: 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',\n        stroke: 'pink',\n        fillOpacity: 0.2,\n        zIndex: 2,\n        pointerEvents: 'none',\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 28,
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
//# sourceMappingURL=docs_manual_behavior_BrushSelect_en_md_q_hK4X-async.js.map