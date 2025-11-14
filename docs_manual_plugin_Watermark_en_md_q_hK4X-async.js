((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Watermark.en.md?type=text'],
{ "docs/manual/plugin/Watermark.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Watermark.en.md?watch=parent");
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
        "value": "The watermark plugin supports using text and images as watermarks. The principle is to add a ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "background-image",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " attribute to the div of the Graph container, and then control the position and style of the watermark through CSS. For text watermarks, a hidden canvas is used to convert the text into an image.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Add copyright or ownership marks to charts",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Mark the status of charts during presentations or previews",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Add anti-leakage marks to sensitive data",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Below is a simple example of initializing the Watermark plugin:",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'watermark',\n      text: 'G6 Graph', // Watermark text\n      opacity: 0.2, // Opacity\n      rotate: Math.PI / 12, // Rotation angle\n    },\n  ],\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    data: { nodes: [{ id: 'node-1' }] },\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    layout: { type: 'force' },\n    behaviors: ['drag-canvas'],\n    plugins: [{ type: 'watermark', key: 'watermark', text: 'G6: Graph Visualization' }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      type: 'watermark',\n      width: 200,\n      height: 100,\n      opacity: 0.2,\n      rotate: Math.PI / 12,\n      text: 'G6: Graph Visualization',\n    };\n    const optionFolder = gui.addFolder('Watermark Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'width', 1, 1280, 1);\n    optionFolder.add(options, 'height', 1, 800, 1);\n    optionFolder.add(options, 'opacity', 0, 1, 0.1);\n    optionFolder.add(options, 'rotate', 0, 2 * Math.PI, Math.PI / 12);\n    optionFolder.add(options, 'text');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'watermark',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
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
        "value": "watermark",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "width",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Width of a single watermark",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "200",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "height",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Height of a single watermark",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "100",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "opacity",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Opacity of the watermark",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "0.2",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "rotate",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Rotation angle of the watermark",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Math.PI / 12",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "imageURL",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Image watermark URL, higher priority than text watermark",
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
        "value": "text",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Watermark text content",
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
        "value": "textFill",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Color of the text watermark",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "#000",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "textFontSize",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Font size of the text watermark",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "16",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "textFontFamily",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Font of the text watermark",
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
        "value": "textFontWeight",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Font weight of the text watermark",
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
        "value": "textFontVariant",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Font variant of the text watermark",
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
        "value": "textAlign",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Text alignment of the watermark",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "center",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "end",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "left",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "right",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "start",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "center",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "textBaseline",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Baseline alignment of the text watermark",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "alphabetic",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
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
        "value": "hanging",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "ideographic",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "middle",
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
        "value": "middle",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "backgroundRepeat",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Repeat mode of the watermark",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "repeat",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "backgroundAttachment",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Background attachment behavior of the watermark",
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
        "value": "backgroundBlendMode",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Background blend mode of the watermark",
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
        "value": "backgroundClip",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Background clip of the watermark",
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
        "value": "backgroundColor",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Background color of the watermark",
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
        "value": "backgroundImage",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Background image of the watermark",
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
        "value": "backgroundOrigin",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Background origin of the watermark",
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
        "value": "backgroundPosition",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Background position of the watermark",
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
        "value": "backgroundPositionX",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Horizontal position of the watermark background",
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
        "value": "backgroundPositionY",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Vertical position of the watermark background",
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
        "value": "backgroundSize",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Background size of the watermark",
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
        "value": "The simplest text watermark configuration:",
        "paraId": 6,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'watermark',\n      text: 'G6 Graph',\n    },\n  ],\n});\n",
        "paraId": 7,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [{ id: 'node-0' }, { id: 'node-1' }, { id: 'node-2' }, { id: 'node-3' }, { id: 'node-4' }, { id: 'node-5' }],\n  edges: [\n    { source: 'node-0', target: 'node-1' },\n    { source: 'node-0', target: 'node-2' },\n    { source: 'node-0', target: 'node-3' },\n    { source: 'node-0', target: 'node-4' },\n    { source: 'node-1', target: 'node-0' },\n    { source: 'node-2', target: 'node-0' },\n    { source: 'node-3', target: 'node-0' },\n    { source: 'node-4', target: 'node-0' },\n    { source: 'node-5', target: 'node-0' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  layout: { type: 'grid' },\n  behaviors: ['zoom-canvas', 'drag-canvas', 'drag-element'],\n  plugins: [\n    {\n      type: 'watermark',\n      text: 'G6: Graph Visualization',\n      textFontSize: 14,\n      textFontFamily: 'Microsoft YaHei',\n      fill: 'rgba(0, 0, 0, 0.1)',\n      rotate: Math.PI / 12,\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Use an image as a watermark:",
        "paraId": 9,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'watermark',\n      imageURL: 'https://example.com/logo.png',\n      width: 100,\n      height: 50,\n      opacity: 0.1,\n    },\n  ],\n});\n",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [{ id: 'node-0' }, { id: 'node-1' }, { id: 'node-2' }, { id: 'node-3' }, { id: 'node-4' }, { id: 'node-5' }],\n  edges: [\n    { source: 'node-0', target: 'node-1' },\n    { source: 'node-0', target: 'node-2' },\n    { source: 'node-0', target: 'node-3' },\n    { source: 'node-0', target: 'node-4' },\n    { source: 'node-1', target: 'node-0' },\n    { source: 'node-2', target: 'node-0' },\n    { source: 'node-3', target: 'node-0' },\n    { source: 'node-4', target: 'node-0' },\n    { source: 'node-5', target: 'node-0' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  layout: {\n    type: 'grid',\n  },\n  behaviors: ['zoom-canvas', 'drag-canvas', 'drag-element'],\n  plugins: [\n    {\n      type: 'watermark',\n      width: 200,\n      height: 100,\n      rotate: Math.PI / 12,\n      imageURL: 'https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 11,
        "tocIndex": 7
    },
    {
        "value": "You can customize the style and position of the watermark:",
        "paraId": 12,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'watermark',\n      text: 'G6 Graph',\n      textFontSize: 20, // Set font size\n      textFontFamily: 'Arial', // Set font\n      textFontWeight: 'bold', // Set font weight\n      textFill: '#1890ff', // Set text color\n      rotate: Math.PI / 6, // Set rotation angle\n      opacity: 0.15, // Set opacity\n      width: 180, // Set watermark width\n      height: 100, // Set watermark height\n      backgroundRepeat: 'space', // Set repeat mode\n      backgroundPosition: 'center', // Set position\n      textAlign: 'center', // Set text alignment\n      textBaseline: 'middle', // Set baseline alignment\n    },\n  ],\n});\n",
        "paraId": 13,
        "tocIndex": 8
    },
    {
        "value": "Text Watermark",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "Image Watermark",
        "paraId": 15,
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
//# sourceMappingURL=docs_manual_plugin_Watermark_en_md_q_hK4X-async.js.map