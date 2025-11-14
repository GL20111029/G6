((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/GridLine.en.md?type=text'],
{ "docs/manual/plugin/GridLine.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/GridLine.en.md?watch=parent");
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
        "value": "The GridLine plugin provides visual auxiliary lines for the canvas, helping users precisely position and align graphic elements. It is an indispensable tool in graphic drawing.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The GridLine plugin is mainly suitable for the following scenarios:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Assisting users in precise drawing and element alignment",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Providing visual references to enhance spatial awareness",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Building a structured reference system when designing and editing graphics",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Below is a simple example of initializing the GridLine plugin:",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'grid-line',\n      key: 'my-grid-line', // Specify a unique identifier for dynamic updates\n      size: 20,\n      stroke: '#0001',\n      follow: true,\n    },\n  ],\n});\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    data: { nodes: [{ id: 'node-1' }] },\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    layout: { type: 'force' },\n    behaviors: ['drag-canvas'],\n    plugins: [{ type: 'grid-line', key: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const LINE_STYLE = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];\n    const options = {\n      type: 'grid-line',\n      border: true,\n      borderLineWidth: 1,\n      borderStroke: '#eee',\n      borderStyle: 'solid',\n      follow: false,\n      lineWidth: 1,\n      size: 20,\n      stroke: '#eee',\n    };\n    const optionFolder = gui.addFolder('Gird Line Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'size', 1, 50, 1);\n    optionFolder.add(options, 'lineWidth', 1, 10, 1);\n    optionFolder.addColor(options, 'stroke');\n    optionFolder.add(options, 'border');\n    optionFolder.add(options, 'borderLineWidth', 1, 10, 1);\n    optionFolder.add(options, 'borderStyle', LINE_STYLE);\n    optionFolder.addColor(options, 'borderStroke');\n    optionFolder.add(options, 'follow');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'grid-line',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Plugin type",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "grid-line",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Unique identifier for the plugin, used to get the plugin instance or update plugin options",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "border",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Whether to display the border",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "borderLineWidth",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Border line width",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "1",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "borderStroke",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Border color, see ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "CSS border-color",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "#eee",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "borderStyle",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Border style, see ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "CSS border-style",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "solid",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "follow",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Whether to follow canvas movements",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "boolean | {translate ?: boolean, zoom?: boolean}",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "lineWidth",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Grid line width",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number | string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "1",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "size",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Grid unit size in pixels",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "20",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "stroke",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "Grid line color",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "#eee",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "The ",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "follow",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": " property controls whether the grid lines follow the canvas transformations. It supports two configuration methods:",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "Boolean Configuration",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": ": When set to ",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "true",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": ", the grid lines follow both canvas translation and zoom; when set to ",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "false",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": ", they remain static.",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "// Enable both translation and zoom following\nconst graph = new Graph({\n  plugins: [\n    {\n      type: 'grid-line',\n      follow: true,\n    },\n  ],\n});\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "Object Configuration",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": ": Allows more precise control over the grid line following behavior.",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "// Follow translation only, not zoom\nconst graph = new Graph({\n  plugins: [\n    {\n      type: 'grid-line',\n      follow: {\n        translate: true, // Follow translation\n        zoom: false, // Do not follow zoom\n      },\n    },\n  ],\n});\n\n// Follow zoom only, not translation\nconst graph = new Graph({\n  plugins: [\n    {\n      type: 'grid-line',\n      follow: {\n        translate: false, // Do not follow translation\n        zoom: true, // Follow zoom\n      },\n    },\n  ],\n});\n",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "When grid lines follow zoom, they maintain a relative position to the canvas content, making alignment references more precise. Following translation allows the grid to move with the canvas content, enhancing the visual experience of spatial continuity.",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "The simplest way is to use the preset configuration directly:",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  plugins: ['grid-line'],\n});\n",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "The effect is as follows:",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  data: { nodes: [{ id: 'node-1', style: { x: 150, y: 75 } }] },\n  behaviors: ['drag-canvas'],\n  plugins: ['grid-line'],\n});\n\ngraph.render();\n",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "You can customize the grid line style as needed:",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  plugins: [\n    {\n      type: 'grid-line',\n      stroke: '#1890ff33', // Blue semi-transparent grid line\n      lineWidth: 2,\n      size: 40, // Larger grid unit\n      borderStroke: '#1890ff', // Blue border\n      borderLineWidth: 2,\n    },\n  ],\n});\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "The effect is as follows:",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  data: { nodes: [{ id: 'node-1', style: { x: 150, y: 75 } }] },\n  behaviors: ['drag-canvas'],\n  plugins: [\n    {\n      type: 'grid-line',\n      stroke: '#1890ff33', // Blue semi-transparent grid line\n      lineWidth: 2,\n      size: 40, // Larger grid\n      borderStroke: '#1890ff', // Blue border\n      borderLineWidth: 2,\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "Enabling the follow option allows the grid to move with the canvas, enhancing user experience:",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n  plugins: [\n    {\n      type: 'grid-line',\n      follow: true, // Grid follows canvas movement\n    },\n  ],\n});\n",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "Try dragging/zooming the canvas to observe the grid following effect:",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  data: { nodes: [{ id: 'node-1', style: { x: 150, y: 75 } }] },\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n  plugins: [\n    {\n      type: 'grid-line',\n      follow: true, // Grid follows canvas movement\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "Use the key identifier to dynamically update grid properties at runtime:",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "// Initial configuration\nconst graph = new Graph({\n  // Other configurations...\n  plugins: [\n    {\n      type: 'grid-line',\n      key: 'my-grid',\n      size: 20,\n    },\n  ],\n});\n\n// Subsequent dynamic updates\ngraph.updatePlugin({\n  key: 'my-grid',\n  size: 40, // Update grid size\n  stroke: '#ff4d4f', // Update grid color\n});\n",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [{ id: 'node-0' }, { id: 'node-1' }, { id: 'node-2' }, { id: 'node-3' }, { id: 'node-4' }, { id: 'node-5' }],\n  edges: [\n    { source: 'node-0', target: 'node-1' },\n    { source: 'node-0', target: 'node-2' },\n    { source: 'node-0', target: 'node-3' },\n    { source: 'node-0', target: 'node-4' },\n    { source: 'node-1', target: 'node-0' },\n    { source: 'node-2', target: 'node-0' },\n    { source: 'node-3', target: 'node-0' },\n    { source: 'node-4', target: 'node-0' },\n    { source: 'node-5', target: 'node-0' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  layout: { type: 'grid' },\n  behaviors: ['drag-canvas'],\n  plugins: [{ key: 'grid-line', type: 'grid-line', follow: false }],\n});\n\ngraph.render();\n\nwindow.addPanel((gui) => {\n  gui\n    .add({ follow: false }, 'follow')\n    .name('Follow')\n    .onChange((value) => {\n      graph.updatePlugin({\n        key: 'grid-line',\n        follow: value,\n      });\n    });\n});\n",
        "paraId": 27,
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
//# sourceMappingURL=docs_manual_plugin_GridLine_en_md_q_hK4X-async.js.map