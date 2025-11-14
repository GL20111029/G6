((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Title.en.md?type=text'],
{ "docs/manual/plugin/Title.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Title.en.md?watch=parent");
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
        "value": "Title indicates the name of the image and conveys the brief content of the image.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The following is a simple example of initializing the Title plugin:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      key: 'title',\n      type: 'title',\n      title: 'This is a title',\n      subTitle: 'This is a subtitle',\n    },\n  ],\n});\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Option",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Plugin type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "title",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "key",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Unique identifier for the plugin, used for subsequent updates",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "title",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "title content ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "style config",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "TitleStyle",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "subtitle",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "subtitle content ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "style config",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "SubTitleStyle",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "spacing",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Vertical spacing between main title and subtitle",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "8",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "className",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Class name of the title canvas",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "align",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Graph title alignment",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "left",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "center",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "right",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "left",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "size",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Height of the title plugin",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "44",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "padding",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Padding",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number | number[]",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "[16,24,0,24]",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "optional",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Used to configure the space height of the title plugin. Default is ",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "44",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "。",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "optional",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Used to configure the horizontal alignment of the title plugin. Default is ",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "left",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ". You can choose ",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "left",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "center",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ", or ",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "right",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ", representing left-aligned, center-aligned, and right-aligned respectively.",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "createGraph(\n  {\n    data: { nodes: Array.from({ length: 12 }).map((_, i) => ({ id: `node${i}` })) },\n    node: {\n      palette: 'spectral',\n      style: { labelText: 'Ciallo' },\n    },\n    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n    plugins: [\n      {\n        key: 'title',\n        type: 'title',\n        title: 'This is a title This is a title',\n        subtitle: 'This is a sub-',\n      },\n    ],\n    layout: { type: 'circular' },\n    autoFit: 'view',\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = { align: 'left' };\n    const optionFolder = gui.addFolder('Align Options');\n    optionFolder.add(options, 'align', ['left', 'center', 'right']);\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'title',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "optional",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "Used to configure the spacing between the chart main title and subtitle. Default is ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "8",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": ". Appropriate spacing can make the chart look more harmonious overall.",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "The title, specifically the main title, can be customized with the following configurations for various title styles.",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "Attr",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Desc",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "title",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Title text content",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleFontSize",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Title text size",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "16",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleFontFamily",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Title text font",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "system-ui, sans-serif",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleFontWeight",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Title font weight",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "bold",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleLineHeight",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Title text line height",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "16",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleTextAlign",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Horizontal alignment of content in title text line",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "left",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleTextBaseline",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Vertical baseline of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "top",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleFill",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Fill color of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "#1D2129",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleFillOpacity",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Fill transparency of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "0.9",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleStroke",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Stroke color of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "transparent",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleStrokeOpacity",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Stroke transparency of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleLineWidth",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Stroke width of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleLineDash",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Dash style of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number[]",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "[]",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleOpacity",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Overall transparency of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleShadowColor",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Shadow color of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "transparent",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleShadowBlur",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Gaussian blur coefficient of title text shadow",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleShadowOffsetX",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Horizontal offset of title text shadow",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleShadowOffsetY",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Vertical offset of title text shadow",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleCursor",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Mouse style of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "default",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleDx",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Horizontal offset of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "titleDy",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Vertical offset of title text",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "The subtitle, which can be customized with the following configurations for various subtitle styles.",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Attr",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Desc",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitle",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text content",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleFontSize",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text size",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "12",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleFontFamily",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text font",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "system-ui, sans-serif",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleFontWeight",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle font weight",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "normal",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleLineHeight",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text line height",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "12",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleTextAlign",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text line content horizontal alignment",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "left",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleTextBaseline",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text vertical baseline",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "top",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleFill",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text fill color",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "#1D2129",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleFillOpacity",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text fill transparency",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "0.65",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleStroke",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text stroke color",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "transparent",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleStrokeOpacity",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text stroke transparency",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "1",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleLineWidth",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text stroke width",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleLineDash",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text dashed line style",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number[]",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "[]",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleOpacity",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text overall transparency",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "1",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleShadowColor",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text shadow color",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "transparent",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleShadowBlur",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text shadow Gaussian blur coefficient",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleShadowOffsetX",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text shadow horizontal offset",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleShadowOffsetY",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text shadow vertical offset",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleCursor",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text mouse style",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "default",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleDx",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text horizontal offset",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "subtitleDy",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Subtitle text vertical offset",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Feel free to modify this example and try different configurations",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: { nodes: Array.from({ length: 12 }).map((_, i) => ({ id: `node${i}` })) },\n  behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n  plugins: [\n    {\n      key: 'title',\n      type: 'title',\n\n      align: 'center', // Alignment of title\n      spacing: 4, // Spacing between main title and subtitle\n      size: 60, // Height of title, default is 44\n\n      // title\n      title: 'This is a title This is a title', // Title text\n      titleFontSize: 28, // Main title font size\n      titleFontFamily: 'sans-serif', // Main title font\n      titleFontWeight: 600, // Main title font weight\n      titleFill: '#fff', // Main title text color\n      titleFillOpacity: 1, // Main title text transparency\n      titleStroke: '#000', // Main title text stroke color\n      titleLineWidth: 2, // Main title text stroke line width\n      titleStrokeOpacity: 1, // Main title text stroke transparency\n\n      // subtitle\n      subtitle: 'This is a sub-', // Subtitle text\n      subtitleFontSize: 16, // Subtitle font size\n      subtitleFontFamily: 'Arial', // Subtitle font\n      subtitleFontWeight: 300, // Subtitle font weight\n      subtitleFill: '#2989FF', // Subtitle text color\n      subtitleFillOpacity: 1, // Subtitle text transparency\n      subtitleStroke: '#000', // Subtitle text stroke color\n      subtitleLineWidth: 1, // Subtitle text stroke line width\n      subtitleStrokeOpacity: 0.5, // Subtitle text stroke transparency\n    },\n  ],\n  node: {\n    palette: 'spectral',\n    style: { labelText: 'Ciallo' },\n  },\n  layout: {\n    type: 'circular',\n  },\n  autoFit: 'view',\n});\n\ngraph.render();\n",
        "paraId": 18,
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
//# sourceMappingURL=docs_manual_plugin_Title_en_md_q_hK4X-async.js.map