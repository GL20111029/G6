((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/ClickSelect.en.md?type=text'],
{ "docs/manual/behavior/ClickSelect.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/ClickSelect.en.md?watch=parent");
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
        "value": "When an element is clicked, it will be highlighted.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "This behavior is mainly used for:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Focusing on elements",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Viewing element details",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Viewing element relationships",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 280, y: 60, fill: '#E4504D', labelText: 'degree: 0' } },\n        { id: 'node-2-1', style: { x: 330, y: 140, fill: '#FFC40C', labelText: 'degree: 1' } },\n        { id: 'node-2-2', style: { x: 230, y: 140, fill: '#FFC40C', labelText: 'degree: 1' } },\n        { id: 'node-3-1', style: { x: 380, y: 220, fill: '#0f0', labelText: 'degree: 2' } },\n        { id: 'node-3-2', style: { x: 180, y: 220, fill: '#0f0', labelText: 'degree: 2' } },\n\n        {\n          id: 'degree引导',\n          style: {\n            x: 525,\n            y: 110,\n            fill: null,\n            labelText: '这里可以修改degree ->',\n            labelFontWeight: 700,\n            labelFontSize: 10,\n          },\n        },\n      ],\n      edges: [\n        { source: 'node-1', target: 'node-2-1' },\n        { source: 'node-1', target: 'node-2-2' },\n        { source: 'node-2-1', target: 'node-3-1' },\n        { source: 'node-2-2', target: 'node-3-2' },\n      ],\n    },\n    node: {\n      style: { label: true, labelFill: '#666', labelFontSize: 14, labelPlacement: 'bottom' },\n      state: {\n        custom: { fill: '#ffa940' },\n      },\n    },\n    edge: {\n      stroke: '#8b9baf',\n      state: {\n        custom: { stroke: '#ffa940' },\n      },\n    },\n    behaviors: [\n      {\n        type: 'click-select',\n        key: 'click-select',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'click-select',\n      type: 'click-select',\n      animation: true,\n      enable: true,\n      multiple: false,\n      trigger: 'shift+click',\n      state: 'selected',\n      unselectedState: undefined,\n      degree: 0,\n    };\n    const optionFolder = gui.addFolder('Click Select Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'degree', 0, 2, 1);\n    optionFolder.add(options, 'state', ['active', 'selected', 'custom']);\n    optionFolder.add(options, 'unselectedState', [undefined, 'inactive']);\n    const trigger = optionFolder\n      .add(options, 'trigger', {\n        'shift+click': ['shift'],\n        'meta+click': ['Meta'],\n      })\n      .hide();\n    optionFolder.add(options, 'multiple').onChange((v) => trigger.show(v));\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'click-select',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
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
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['click-select'],\n});\n",
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
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'click-select',\n      key: 'click-select-1',\n      degree: 2, // Selection spread range\n      state: 'active', // Selected state\n      neighborState: 'neighborActive', // Neighbor node attached state\n      unselectedState: 'inactive', // Unselected node state\n    },\n  ],\n});\n",
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
        "value": "Behavior type name. This behavior is built-in, and you can use it with ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "type: 'click-select'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ".",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "click-select",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | string",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "click-select",
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
        "value": "Whether to enable animation effects when switching element states",
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
        "value": "degree",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Controls the highlight spread range, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "example",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "number | (event:",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Event",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": ") => number",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Whether to enable the click element function, supports dynamic control through functions, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "example",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Event",
        "paraId": 15,
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
        "value": "multiple",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Whether to allow multiple selections",
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
        "value": "state",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "The state applied when an element is selected",
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
        "value": "| ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "inactive",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "| ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "disabled",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "| ",
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
        "value": "neighborState",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "The state applied to elements with n-degree relationships when an element is selected. The value of n is controlled by the degree attribute, for example, degree 1 means directly adjacent elements, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "example",
        "paraId": 16,
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
        "value": "| ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "inactive",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "| ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "disabled",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "| ",
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
        "value": "unselectedState",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "The state applied to all other elements except the selected element and its affected neighbor elements when an element is selected, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "example",
        "paraId": 17,
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
        "value": "| ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "inactive",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "| ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "disabled",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "| ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "highlight",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "onClick",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Callback when an element is clicked",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(event: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Event",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": ") => void",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Press this shortcut key in combination with a mouse click to perform multi-selection, key reference: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "MDN Key Values",
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
        "value": "['shift']",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Controls the highlight spread range",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "For nodes, ",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "0",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": " means only the current node is selected, ",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "1",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": " means the current node and its directly adjacent nodes and edges are selected, and so on.",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "For edges, ",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "0",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": " means only the current edge is selected, ",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "1",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": " means the current edge and its directly adjacent nodes are selected, and so on.",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "In the following example, when ",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "degree: 0",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": " only the ",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "red",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": " point is highlighted;\nWhen ",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "degree: 1",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": " the ",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "red",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": " and ",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "orange",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": " points are highlighted.",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 280, y: 60, fill: '#E4504D', labelText: 'degree: 0' } },\n        { id: 'node-2-1', style: { x: 330, y: 140, fill: '#FFC40C', labelText: 'degree: 1' } },\n        { id: 'node-2-2', style: { x: 230, y: 140, fill: '#FFC40C', labelText: 'degree: 1' } },\n        { id: 'node-3-1', style: { x: 380, y: 220, fill: '#0f0', labelText: 'degree: 2' } },\n        { id: 'node-3-2', style: { x: 180, y: 220, fill: '#0f0', labelText: 'degree: 2' } },\n\n        {\n          id: 'degree引导',\n          style: {\n            x: 525,\n            y: 110,\n            fill: null,\n            labelText: '这里可以修改degree ->',\n            labelFontWeight: 700,\n            labelFontSize: 10,\n          },\n        },\n      ],\n      edges: [\n        { source: 'node-1', target: 'node-2-1' },\n        { source: 'node-1', target: 'node-2-2' },\n        { source: 'node-2-1', target: 'node-3-1' },\n        { source: 'node-2-2', target: 'node-3-2' },\n      ],\n    },\n    node: {\n      style: { label: true, labelFill: '#666', labelFontSize: 14, labelPlacement: 'bottom' },\n      state: {\n        custom: { fill: '#ffa940' },\n      },\n    },\n    edge: {\n      stroke: '#8b9baf',\n      state: {\n        custom: { stroke: '#ffa940' },\n      },\n    },\n    behaviors: [\n      {\n        type: 'click-select',\n        key: 'click-select',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'click-select',\n      type: 'click-select',\n      animation: true,\n      enable: true,\n      multiple: false,\n      trigger: 'shift+click',\n      state: 'selected',\n      unselectedState: undefined,\n      degree: 0,\n    };\n    const optionFolder = gui.addFolder('Click Select Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'degree', 0, 2, 1);\n    optionFolder.add(options, 'state', ['active', 'selected', 'custom']);\n    optionFolder.add(options, 'unselectedState', [undefined, 'inactive']);\n    const trigger = optionFolder\n      .add(options, 'trigger', {\n        'shift+click': ['shift'],\n        'meta+click': ['Meta'],\n      })\n      .hide();\n    optionFolder.add(options, 'multiple').onChange((v) => trigger.show(v));\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'click-select',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 22,
        "tocIndex": 5
    },
    {
        "value": "Whether to enable the click element function",
        "paraId": 23,
        "tocIndex": 6
    },
    {
        "value": "It can be dynamically controlled through functions, for example, only enabled when a node is selected.",
        "paraId": 24,
        "tocIndex": 6
    },
    {
        "value": "{\n  //⚠️ Note, you need to set both the node and the canvas, otherwise the user will not listen to the event when clicking the canvas\n  enable: (event) => ['node', 'canvas'].includes(event.targetType);\n}\n",
        "paraId": 25,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  data: {\n    nodes: [\n      { id: 'node1', style: { x: 100, y: 60 } },\n      { id: 'node2', style: { x: 200, y: 60 } },\n      { id: 'node3', style: { x: 300, y: 60 } },\n    ],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node2', target: 'node3' },\n    ],\n  },\n  node: {\n    style: {\n      fill: '#E4504D',\n    },\n    state: {\n      active: {\n        fill: '#0f0',\n      },\n      neighborActive: {\n        fill: '#FFC40C',\n      },\n    },\n  },\n  behaviors: [\n    {\n      type: 'click-select',\n      degree: 1,\n      state: 'active',\n      neighborState: 'neighborActive',\n      enable: (event) => ['node', 'canvas'].includes(event.targetType),\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 26,
        "tocIndex": 6
    },
    {
        "value": "Similarly, if you only want edges to be selected:",
        "paraId": 27,
        "tocIndex": 6
    },
    {
        "value": "{\n  enable: (event) => ['edge', 'canvas'].includes(event.targetType);\n}\n",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "The state applied to elements with n-degree relationships when an element is selected. The value of n is controlled by the degree attribute, for example, degree 1 means directly adjacent elements",
        "paraId": 29,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  behaviors: [\n    {\n      type: 'click-select',\n      degree: 1,\n      // State attached to the directly clicked node\n      state: 'active',\n      // State attached to adjacent nodes\n      neighborState: 'neighborActive',\n    },\n  ],\n});\n",
        "paraId": 30,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  layout: {\n    type: 'grid',\n  },\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  node: {\n    style: {\n      fill: '#E4504D',\n    },\n    state: {\n      active: {\n        fill: '#0f0',\n      },\n      neighborActive: {\n        fill: '#FFC40C',\n        halo: true,\n      },\n    },\n  },\n  behaviors: [\n    {\n      type: 'click-select',\n      degree: 1,\n      state: 'active',\n      neighborState: 'neighborActive',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "When an element is selected, the state applied to all other elements except the selected element and the spread neighbor elements.",
        "paraId": 32,
        "tocIndex": 8
    },
    {
        "value": "Built-in states: ",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": "selected",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": " ",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": "active",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": " ",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": "inactive",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": " ",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": "disabled",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": " ",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": "highlight",
        "paraId": 33,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  behaviors: [\n    {\n      type: 'click-select',\n      degree: 1,\n      unselectedState: 'inactive',\n    },\n  ],\n});\n",
        "paraId": 34,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  layout: {\n    type: 'grid',\n  },\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  node: {\n    style: {\n      fill: '#E4504D',\n    },\n    state: {\n      active: {\n        fill: '#0f0',\n      },\n      neighborActive: {\n        fill: '#FFC40C',\n      },\n    },\n  },\n  behaviors: [\n    {\n      type: 'click-select',\n      degree: 1,\n      state: 'active',\n      neighborState: 'neighborActive',\n      unselectedState: 'inactive',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 35,
        "tocIndex": 8
    },
    {
        "value": "Clicking a node",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": " will switch from ",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": "default state",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": " to ",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": "active",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": "Adjacent nodes",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": " will switch from ",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": "default state",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": " to ",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": "neighborActive",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    style: {\n      fill: '#E4504D',\n    },\n    state: {\n      // Selected node state\n      active: {\n        fill: '#0f0',\n      },\n      // Adjacent node state\n      neighborActive: {\n        fill: '#FFC40C',\n      },\n    },\n  },\n  behaviors: [\n    {\n      type: 'click-select',\n      degree: 1,\n      state: 'active',\n      // State attached to adjacent nodes\n      neighborState: 'neighborActive',\n      // Unselected node state\n      unselectedState: 'inactive',\n    },\n  ],\n});\n",
        "paraId": 37,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 200,\n  layout: {\n    type: 'grid',\n  },\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  node: {\n    style: {\n      fill: '#E4504D',\n    },\n    state: {\n      active: {\n        fill: '#0f0',\n      },\n      neighborActive: {\n        fill: '#FFC40C',\n      },\n    },\n  },\n  behaviors: [\n    {\n      type: 'click-select',\n      degree: 1,\n      state: 'active',\n      neighborState: 'neighborActive',\n      unselectedState: 'inactive',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 38,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  layout: {\n    type: 'grid',\n  },\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  node: {\n    style: {\n      fill: '#E4504D',\n    },\n    state: {\n      active: {\n        fill: '#0b0',\n      },\n    },\n  },\n  behaviors: [\n    {\n      type: 'click-select',\n      degree: 1,\n      state: 'active',\n      unselectedState: 'inactive',\n      multiple: true,\n      trigger: ['shift'],\n    },\n    'drag-element',\n  ],\n});\n\ngraph.render();\n",
        "paraId": 39,
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
//# sourceMappingURL=docs_manual_behavior_ClickSelect_en_md_q_hK4X-async.js.map