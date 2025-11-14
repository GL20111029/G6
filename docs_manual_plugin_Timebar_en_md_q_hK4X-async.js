((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Timebar.en.md?type=text'],
{ "docs/manual/plugin/Timebar.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Timebar.en.md?watch=parent");
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
        "value": "The Timebar plugin is an important tool for exploring time-series data. It can display the time distribution of data in the form of a timeline or trend chart, and supports interactions such as time interval filtering and dynamic playback, helping users better understand the changes in data over time.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Need to display and analyze the time distribution of time-series data",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Need to filter and explore graph data through the time dimension",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Need to dynamically display the process of data changing over time",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Below is a simple example of initializing the Timebar plugin:",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'timebar',\n      data: timeData, // Time data\n      width: 450, // Timebar width\n      height: 60, // Timebar height\n      position: 'bottom', // Position\n      loop: false, // Whether to loop playback\n    },\n  ],\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: new Array(25).fill(0).map((_, index) => ({\n        id: `node-${index}`,\n        data: {\n          timestamp: new Date('2023-08-01').getTime() + (index % 5) * 3600 * 24 * 1000,\n          value: index % 10,\n          label: new Date(new Date('2023-08-01').getTime() + (index % 5) * 3600 * 24 * 1000).toLocaleString(),\n        },\n      })),\n      edges: new Array(25).fill(0).map((_, i) => ({\n        id: `edge-${i}`,\n        source: `node-${i % 12}`,\n        target: `node-${(i % 10) + 15}`,\n        data: {\n          edgeType: 'e1',\n        },\n      })),\n    },\n    layout: { type: 'grid', cols: 5 },\n    node: {\n      style: { size: 24, fill: '#7e3feb' },\n      palette: { field: 'cluster' },\n    },\n    edge: { style: { stroke: '#8b9baf' } },\n    behaviors: ['drag-canvas'],\n    plugins: [\n      'grid-line',\n      {\n        type: 'timebar',\n        key: 'timebar',\n        data: [10, 2, 3, 4, 15].map((value, index) => ({\n          time: new Date(new Date('2023-08-01').getTime() + index * 3600 * 24 * 1000),\n          value,\n          label: new Date(new Date('2023-08-01').getTime() + index * 3600 * 24 * 1000).toLocaleString(),\n        })),\n        timebarType: 'time',\n        height: 100,\n      },\n    ],\n    autoFit: 'view',\n    padding: [10, 0, 100, 0],\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      type: 'timebar',\n      position: 'bottom',\n      enable: true,\n      timebarType: 'time',\n      className: 'g6-timebar',\n      width: 450,\n      height: 100,\n      zIndex: 3,\n      elementTypes: ['node'],\n      mode: 'modify',\n      loop: false,\n    };\n    const optionFolder = gui.addFolder('Timebar Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'height', 40, 100, 1);\n    optionFolder.add(options, 'width', 200, 800, 1);\n    optionFolder.add(options, 'position', ['bottom', 'top']);\n    optionFolder.add(options, 'timebarType', ['time', 'chart']);\n    optionFolder.add(options, 'loop');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'timebar',\n        [property]: value,\n      });\n      graph.render();\n    });\n\n    const apiFolder = gui.addFolder('Timebar API');\n    const instance = graph.getPluginInstance('timebar');\n    apiFolder.add(instance, 'play');\n    apiFolder.add(instance, 'pause');\n    apiFolder.add(instance, 'forward');\n    apiFolder.add(instance, 'backward');\n    apiFolder.add(instance, 'reset');\n  },\n);\n",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Default Value",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Plugin type",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "timebar",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Unique identifier for the plugin, can be used to get the plugin instance or update plugin options",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "className",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Additional class name for the toolbar DOM",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "g6-timebar",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "x",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "X position (position will be invalid if set)",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "y",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Y position (position will be invalid if set)",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "width",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Timebar width",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "450",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "height",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Timebar height",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "60",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "position",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Timebar position",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "top",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "padding",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Padding",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number | number[]",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "data",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Time data",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number[] | { time: number; value: number }[]",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "timebarType",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Timebar display type",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "time",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "chart",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "time",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "elementTypes",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Filter element types",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "combo",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ")[]",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "[",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "]",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "mode",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Control element filtering method, supports the following two configurations: ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "modify",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ": filter by modifying graph data ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "visibility",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ": filter by modifying element visibility",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "modify",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "visibility",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "modify",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "values",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Current time value",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number | [number, number] | Date | [Date, Date]",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "loop",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Whether to loop playback",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "getTime",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Method to get element time",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(datum: ElementDatum) => number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "labelFormatter",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Custom time formatting in chart mode",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(time: number | Date) => string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onChange",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Callback when the time interval changes",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(values: number | [number, number]) => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onReset",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Callback when reset",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onSpeedChange",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Callback when playback speed changes",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(speed: number) => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onPlay",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Callback when playback starts",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onPause",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Callback when paused",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onBackward",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Callback when moving backward",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onForward",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Callback when moving forward",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "The ",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "timebarType",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": " property is used to control the display type of the timebar, supporting the following two configurations:",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "time",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": ": Displayed as a timeline, refer to ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "Time Mode Example",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "chart",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": ": Displayed as a trend chart, at this time the ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "data",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": " configuration item under ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "timebar",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": " needs to pass an additional ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "value",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": " field as chart data, refer to ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "Chart Mode Example",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "The simplest configuration method:",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  layout: { type: 'grid', cols: 5 },\n  plugins: [\n    {\n      type: 'timebar',\n      data: [\n        {\n          time: new Date('2023-08-01').getTime(),\n          value: 5,\n        },\n        {\n          time: new Date('2023-08-02').getTime(),\n          value: 10,\n        },\n        {\n          time: new Date('2023-08-03').getTime(),\n          value: 15,\n        },\n      ],\n    },\n  ],\n  data: {\n    nodes: [\n      {\n        id: 'node1',\n        label: 'Node 1',\n        // By default, elementTypes=['node'], so nodes need to set data.timestamp to display sequentially according to the timeline\n        data: {\n          timestamp: new Date('2023-08-01').getTime(),\n        },\n      },\n      {\n        id: 'node2',\n        label: 'Node 2',\n        data: {\n          timestamp: new Date('2023-08-02').getTime(),\n        },\n      },\n      {\n        id: 'node3',\n        label: 'Node 3',\n        data: {\n          timestamp: new Date('2023-08-03').getTime(),\n        },\n      },\n    ],\n    edges: [\n      {\n        id: 'edge1',\n        source: 'node1',\n        target: 'node2',\n        // Scenario 1: By default, elementTypes = ['node']\n        // - Edges do not need to set data.timestamp, the display/hide of edges depends entirely on whether the two connected nodes are visible\n\n        // Scenario 2: If elementTypes includes 'edge', for example, elementTypes = ['node', 'edge']\n        // - At this time, edges must set data.timestamp, and the display of edges is controlled by it\n        // data: {\n        //   timestamp: new Date('2023-08-01').getTime()\n        // }\n      },\n      {\n        id: 'edge2',\n        source: 'node2',\n        target: 'node3',\n      },\n      {\n        id: 'edge3',\n        source: 'node3',\n        target: 'node1',\n      },\n    ],\n  },\n});\n",
        "paraId": 11,
        "tocIndex": 7
    },
    {
        "value": "The effect is as follows:",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  width: 600,\n  height: 400,\n  layout: { type: 'grid', cols: 5 },\n  plugins: [\n    {\n      type: 'timebar',\n      data: [\n        {\n          time: new Date('2023-08-01').getTime(),\n          value: 5,\n        },\n        {\n          time: new Date('2023-08-02').getTime(),\n          value: 10,\n        },\n        {\n          time: new Date('2023-08-03').getTime(),\n          value: 15,\n        },\n      ],\n    },\n  ],\n  data: {\n    nodes: [\n      {\n        id: 'node1',\n        label: 'Node 1',\n        data: {\n          timestamp: new Date('2023-08-01').getTime(),\n        },\n      },\n      {\n        id: 'node2',\n        label: 'Node 2',\n        data: {\n          timestamp: new Date('2023-08-02').getTime(),\n        },\n      },\n      {\n        id: 'node3',\n        label: 'Node 3',\n        data: {\n          timestamp: new Date('2023-08-03').getTime(),\n        },\n      },\n    ],\n    edges: [\n      {\n        id: 'edge1',\n        source: 'node1',\n        target: 'node2',\n      },\n      {\n        id: 'edge2',\n        source: 'node2',\n        target: 'node3',\n      },\n      {\n        id: 'edge3',\n        source: 'node3',\n        target: 'node1',\n      },\n    ],\n  },\n});\n\ngraph.render();\n",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "width",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": ", ",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "height",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": ", ",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "padding",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": ", ",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "className",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": " can customize the display effect of the timebar, but note that ",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "className",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": " only acts on the outer DOM container and cannot affect the internal Canvas rendering content of the timebar (timeline, chart, play button, etc.).",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'timebar',\n      className: 'custom-timebar', // Note: Since the content is Canvas rendered, CSS styles cannot affect the internal content of the timebar\n      width: 400, // Set timebar width\n      height: 80, // Set timebar height\n      padding: [20, 20, 10, 20], // Set padding [top, right, bottom, left]\n      position: 'bottom', // Keep position at the bottom\n      data: timeData,\n      // labelFormatter: (time) => {\n      //   return new Date(time).toLocaleDateString();\n      // }\n    },\n  ],\n});\n",
        "paraId": 15,
        "tocIndex": 8
    },
    {
        "value": "CSS can only set the style of the timebar container:",
        "paraId": 16,
        "tocIndex": 8
    },
    {
        "value": ".custom-timebar {\n  background-color: #f0f0f0;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "The effect is as follows:",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "createGraph(\n  {\n    data: () => {\n      return {\n        nodes: [\n          {\n            id: 'node1',\n            style: { x: 100, y: 100, label: 'Node 1' },\n            data: {\n              timestamp: new Date('2023-08-01').getTime(),\n            },\n          },\n          {\n            id: 'node2',\n            style: { x: 200, y: 100, label: 'Node 2' },\n            data: {\n              timestamp: new Date('2023-08-01').getTime() + 3600 * 24 * 1000,\n            },\n          },\n          {\n            id: 'node3',\n            style: { x: 150, y: 200, label: 'Node 3' },\n            data: {\n              timestamp: new Date('2023-08-01').getTime() + 3600 * 24 * 1000 * 2,\n            },\n          },\n        ],\n        edges: [\n          { id: 'edge1', source: 'node1', target: 'node2' },\n          { id: 'edge2', source: 'node2', target: 'node3' },\n          { id: 'edge3', source: 'node3', target: 'node1' },\n        ],\n      };\n    },\n    node: {\n      style: {\n        size: 20,\n        label: true,\n      },\n    },\n    edge: {\n      style: {\n        stroke: '#91d5ff',\n        lineWidth: 1,\n      },\n    },\n    plugins: [\n      {\n        type: 'timebar',\n        className: 'custom-timebar',\n        width: 400,\n        height: 80,\n        padding: [20, 20, 10, 20],\n        position: 'bottom',\n        data: [\n          {\n            time: new Date('2023-08-01').getTime(),\n            value: 5,\n          },\n          {\n            time: new Date('2023-08-01').getTime() + 3600 * 24 * 1000,\n            value: 10,\n          },\n          {\n            time: new Date('2023-08-01').getTime() + 3600 * 24 * 1000 * 2,\n            value: 15,\n          },\n        ],\n        labelFormatter: (time) => {\n          return new Date(time).toLocaleDateString();\n        },\n      },\n    ],\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    gui?.hide();\n    const style = document.createElement('style');\n    style.innerHTML = `\n      .custom-timebar {\n        background-color: #f0f0f0;\n        border: 1px solid #ccc;\n        border-radius: 5px;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      }\n    `;\n    document.head.appendChild(style);\n  },\n);\n",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "Time Mode",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "Chart Mode",
        "paraId": 21,
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
//# sourceMappingURL=docs_manual_plugin_Timebar_en_md_q_hK4X-async.js.map