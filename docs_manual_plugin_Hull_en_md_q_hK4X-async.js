((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Hull.en.md?type=text'],
{ "docs/manual/plugin/Hull.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Hull.en.md?watch=parent");
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
        "value": "Hull is used to process and represent the convex or concave polygon bounding box of a set of points. It can wrap a set of nodes in a minimal geometric shape, helping users better understand and analyze datasets.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Convex Hull",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": This is a convex polygon that contains all the points and has no indentations.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Concave Hull",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": This is a concave polygon that also contains all the points but may have indentations. The degree of indentation is controlled by the concavity parameter.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "The hull plugin is mainly applicable to the following scenarios:",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Wrapping node collections in data visualization",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Providing visual references to enhance spatial awareness",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Identifying the collection relationship of specific nodes in complex network graphs",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Below is a simple example of initializing the Hull plugin:",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      key: 'my-hull', // Specify a unique identifier for subsequent dynamic updates\n      members: ['node-1', 'node-2'], // List of node IDs to be wrapped\n      concavity: Infinity, // Default to convex hull\n    },\n  ],\n});\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        {\n          id: 'node-0',\n          data: { cluster: 'a' },\n          style: { x: 555, y: 151 },\n        },\n        {\n          id: 'node-1',\n          data: { cluster: 'a' },\n          style: { x: 532, y: 323 },\n        },\n        {\n          id: 'node-2',\n          data: { cluster: 'a' },\n          style: { x: 473, y: 227 },\n        },\n        {\n          id: 'node-3',\n          data: { cluster: 'a' },\n          style: { x: 349, y: 212 },\n        },\n        {\n          id: 'node-4',\n          data: { cluster: 'b' },\n          style: { x: 234, y: 201 },\n        },\n        {\n          id: 'node-5',\n          data: { cluster: 'b' },\n          style: { x: 338, y: 333 },\n        },\n        {\n          id: 'node-6',\n          data: { cluster: 'b' },\n          style: { x: 365, y: 91 },\n        },\n      ],\n      edges: [\n        {\n          source: 'node-0',\n          target: 'node-2',\n        },\n        {\n          source: 'node-1',\n          target: 'node-2',\n        },\n        {\n          source: 'node-2',\n          target: 'node-3',\n        },\n        {\n          source: 'node-3',\n          target: 'node-4',\n        },\n        {\n          source: 'node-3',\n          target: 'node-5',\n        },\n        {\n          source: 'node-3',\n          target: 'node-6',\n        },\n      ],\n    },\n    node: {\n      style: { labelText: (d) => d.id },\n      palette: { field: 'cluster', color: ['#7e3feb', '#ffa940'] },\n    },\n    behaviors: ['drag-canvas', 'drag-element'],\n    plugins: [\n      'grid-line',\n      {\n        type: 'hull',\n        key: 'hull-a',\n        members: ['node-0', 'node-1', 'node-2', 'node-3'],\n        labelText: 'hull-a',\n        fill: '#7e3feb',\n        stroke: '#7e3feb',\n        fillOpacity: 0.1,\n        strokeOpacity: 1,\n        labelFill: '#fff',\n        labelPadding: 2,\n        labelBackgroundFill: '#7e3feb',\n        labelBackgroundRadius: 5,\n      },\n    ],\n  },\n  { width: 600, height: 450 },\n  (gui, graph) => {\n    const options = {\n      type: 'hull',\n      members: ['node-0', 'node-1', 'node-2', 'node-3'],\n      concavity: Infinity,\n      corner: 'rounded',\n      padding: 10,\n      // style\n      fill: '#7e3feb',\n      stroke: '#7e3feb',\n      fillOpacity: 0.1,\n      strokeOpacity: 1,\n      // label\n      label: true,\n      labelCloseToPath: true,\n      labelAutoRotate: true,\n      labelOffsetX: 0,\n      labelOffsetY: 0,\n      labelPlacement: 'bottom',\n    };\n\n    const optionFolder = gui.addFolder('Hull Options');\n    optionFolder.add(options, 'type').disable();\n    optionFolder.add(options, 'concavity', 0, 200, 1);\n    optionFolder.add(options, 'corner', ['rounded', 'smooth', 'sharp']);\n    optionFolder.add(options, 'padding', 0, 20, 1);\n    optionFolder.addColor(options, 'fill');\n    optionFolder.addColor(options, 'stroke');\n    optionFolder.add(options, 'fillOpacity', 0, 1, 0.1);\n    optionFolder.add(options, 'strokeOpacity', 0, 1, 0.1);\n    optionFolder.add(options, 'label');\n    optionFolder.add(options, 'labelCloseToPath');\n    optionFolder.add(options, 'labelAutoRotate');\n    optionFolder.add(options, 'labelOffsetX', 0, 20, 1);\n    optionFolder.add(options, 'labelOffsetY', 0, 20, 1);\n    optionFolder.add(options, 'labelPlacement', ['left', 'right', 'top', 'bottom', 'center']);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'hull-a',\n        [property]: value,\n      });\n      graph.render();\n    });\n\n    const apiConfig = {\n      member: 'node-1',\n    };\n    const apiFolder = gui.addFolder('Hull API');\n    const instance = graph.getPluginInstance('hull-a');\n    apiFolder.add(\n      apiConfig,\n      'member',\n      new Array(7).fill(0).map((_, index) => `node-${index}`),\n    );\n    apiFolder.add({ addMember: () => instance.addMember(apiConfig.member) }, 'addMember').name('add member');\n    apiFolder\n      .add({ removeMember: () => instance.removeMember(apiConfig.member) }, 'removeMember')\n      .name('remove member');\n    apiFolder\n      .add({ removeMember: () => alert('Members in Hull-a: ' + instance.getMember()) }, 'removeMember')\n      .name('get member');\n  },\n);\n",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Default Value",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Plugin type",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "hull",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Unique identifier for the plugin, used for subsequent updates",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "members",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Elements within the Hull, including nodes and edges",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "string[]",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "concavity",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Concavity, the larger the value, the smaller the concavity; default is Infinity representing Convex Hull",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Infinity",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "corner",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Corner type, options are ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "rounded",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "smooth",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "sharp",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "rounded",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "padding",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Padding",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "label",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Whether to display the label",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelPlacement",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Label position",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "left",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "right",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "top",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "center",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelBackground",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Whether to display the background",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelPadding",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Label padding",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number | number[]",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelCloseToPath",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Whether the label is close to the hull",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelAutoRotate",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Whether the label rotates with the hull, effective only when closeToPath is true",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelOffsetX",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "X-axis offset",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelOffsetY",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Y-axis offset",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "labelMaxWidth",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Maximum width of the text, exceeding will automatically ellipsis",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "For complete label styles, see ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "this link",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "The concavity attribute is used to control the concavity of the Hull. When set to Infinity, a convex hull is generated; otherwise, a concave hull is generated.",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "// Convex hull example\nconst graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      concavity: Infinity, // Convex hull\n      members: ['node-1', 'node-2'],\n    },\n  ],\n});\n\n// Concave hull example\nconst graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      concavity: 50, // Concave hull\n      members: ['node-1', 'node-2'],\n    },\n  ],\n});\n",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "The simplest way is to use the preset configuration directly:",
        "paraId": 11,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2'], // List of node IDs to be wrapped\n    },\n  ],\n});\n",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": "The effect is as follows:",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'view',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2'], // List of node IDs to be wrapped\n    },\n  ],\n  behaviors: ['zoom-canvas', 'drag-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "You can customize the style of the Hull as needed, such as adjusting color, transparency, and other properties.",
        "paraId": 15,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2', 'node-3'],\n      stroke: '#ff000033', // Red semi-transparent border\n      fill: '#7e3feb', // Light purple fill\n      fillOpacity: 0.2,\n      lineWidth: 2,\n      padding: 15, // Larger padding\n    },\n  ],\n});\n",
        "paraId": 16,
        "tocIndex": 8
    },
    {
        "value": "The effect is as follows:",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'view',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2', 'node-3'],\n      stroke: '#ff000033', // Red semi-transparent border\n      fill: '#7e3feb', // Light purple fill\n      fillOpacity: 0.2,\n      lineWidth: 2,\n      padding: 15, // Larger padding\n    },\n  ],\n  behaviors: ['zoom-canvas', 'drag-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "You can configure the position, background, offset, and other properties of the label to enhance the visual effect.",
        "paraId": 19,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2'],\n      label: true, // Display label\n      labelText: 'hull-a',\n      labelPlacement: 'top', // Label position\n      labelBackground: true, // Display label background\n      labelPadding: 5, // Label padding\n    },\n  ],\n});\n",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "The effect is as follows:",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  autoFit: 'center',\n  data: {\n    nodes: [\n      {\n        id: 'node-0',\n        data: { cluster: 'a' },\n        style: { x: 555, y: 151 },\n      },\n      {\n        id: 'node-1',\n        data: { cluster: 'a' },\n        style: { x: 532, y: 323 },\n      },\n      {\n        id: 'node-2',\n        data: { cluster: 'a' },\n        style: { x: 473, y: 227 },\n      },\n      {\n        id: 'node-3',\n        data: { cluster: 'a' },\n        style: { x: 349, y: 212 },\n      },\n      {\n        id: 'node-4',\n        data: { cluster: 'b' },\n        style: { x: 234, y: 201 },\n      },\n      {\n        id: 'node-5',\n        data: { cluster: 'b' },\n        style: { x: 338, y: 333 },\n      },\n      {\n        id: 'node-6',\n        data: { cluster: 'b' },\n        style: { x: 365, y: 91 },\n      },\n    ],\n    edges: [\n      {\n        source: 'node-0',\n        target: 'node-2',\n      },\n      {\n        source: 'node-1',\n        target: 'node-2',\n      },\n      {\n        source: 'node-2',\n        target: 'node-3',\n      },\n      {\n        source: 'node-3',\n        target: 'node-4',\n      },\n      {\n        source: 'node-3',\n        target: 'node-5',\n      },\n      {\n        source: 'node-3',\n        target: 'node-6',\n      },\n    ],\n  },\n  plugins: [\n    {\n      type: 'hull',\n      members: ['node-1', 'node-2'],\n      label: true, // Display label\n      labelText: 'hull-a',\n      labelPlacement: 'top', // Label position\n      labelBackground: true, // Display label background\n      labelPadding: 5, // Label padding\n    },\n  ],\n  behaviors: ['zoom-canvas', 'drag-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://assets.antv.antgroup.com/g6/collection.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const groupedNodesByCluster = data.nodes.reduce((acc, node) => {\n      const cluster = node.data.cluster;\n      acc[cluster] ||= [];\n      acc[cluster].push(node.id);\n      return acc;\n    }, {});\n\n    const createStyle = (baseColor) => ({\n      fill: baseColor,\n      stroke: baseColor,\n      labelFill: '#fff',\n      labelPadding: 2,\n      labelBackgroundFill: baseColor,\n      labelBackgroundRadius: 5,\n    });\n\n    const graph = new Graph({\n      container: 'container',\n      data,\n      behaviors: ['zoom-canvas', 'drag-canvas', 'drag-element'],\n      node: {\n        palette: { field: 'cluster' },\n      },\n      layout: {\n        type: 'force',\n        preventOverlap: true,\n        linkDistance: (d) => {\n          if (d.source === 'node0' || d.target === 'node0') {\n            return 200;\n          }\n          return 80;\n        },\n      },\n      plugins: [\n        {\n          key: 'hull-a',\n          type: 'hull',\n          members: groupedNodesByCluster['a'],\n          labelText: 'cluster-a',\n          ...createStyle('#1783FF'),\n        },\n        {\n          key: 'hull-b',\n          type: 'hull',\n          members: groupedNodesByCluster['b'],\n          labelText: 'cluster-b',\n          ...createStyle('#00C9C9'),\n        },\n        {\n          key: 'hull-c',\n          type: 'hull',\n          members: groupedNodesByCluster['c'],\n          labelText: 'cluster-c',\n          ...createStyle('#F08F56'),\n        },\n        {\n          key: 'hull-d',\n          type: 'hull',\n          members: groupedNodesByCluster['d'],\n          labelText: 'cluster-d',\n          ...createStyle('#D580FF'),\n        },\n      ],\n      autoFit: 'center',\n    });\n\n    graph.render();\n  });\n",
        "paraId": 23,
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
//# sourceMappingURL=docs_manual_plugin_Hull_en_md_q_hK4X-async.js.map