((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Snapline.en.md?type=text'],
{ "docs/manual/plugin/Snapline.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Snapline.en.md?watch=parent");
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
        "value": "The Snapline plugin provides intelligent alignment guidelines for the canvas, automatically displaying guide lines when moving nodes and supporting automatic snapping. It helps users achieve precise alignment and is an important tool for improving efficiency and accuracy in graphic editing.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The Snapline plugin is mainly suitable for the following scenarios:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "When manually adjusting node positions and precise alignment with other nodes is needed",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "When dragging multiple nodes while maintaining their alignment relationships",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "When creating standardized graphic layouts to ensure consistency in node spacing and positioning",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "When improving node layout efficiency through automatic snapping functionality",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'snapline',\n      key: 'my-snapline', // Specify unique identifier\n      tolerance: 5, // Alignment snap threshold\n      offset: 20, // Guide line extension distance\n      autoSnap: true, // Enable automatic snapping\n    },\n  ],\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-0' },\n        { id: 'node-1' },\n        { id: 'node-2' },\n        { id: 'node-3' },\n        { id: 'node-4' },\n        { id: 'node-5' },\n      ],\n      edges: [\n        { source: 'node-0', target: 'node-1' },\n        { source: 'node-0', target: 'node-2' },\n        { source: 'node-0', target: 'node-3' },\n        { source: 'node-0', target: 'node-4' },\n        { source: 'node-1', target: 'node-0' },\n        { source: 'node-2', target: 'node-0' },\n        { source: 'node-3', target: 'node-0' },\n        { source: 'node-4', target: 'node-0' },\n        { source: 'node-5', target: 'node-0' },\n      ],\n    },\n    layout: { type: 'grid' },\n    behaviors: ['drag-canvas', 'drag-element'],\n    plugins: [\n      { type: 'grid-line', key: 'grid-line', size: 30 },\n      {\n        type: 'snapline',\n        key: 'snapline',\n        tolerance: 5,\n        offset: 20,\n        verticalLineStyle: { stroke: '#F08F56', lineWidth: 2 },\n        horizontalLineStyle: { stroke: '#17C76F', lineWidth: 2 },\n      },\n    ],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      type: 'snapline',\n      tolerance: 5,\n      offset: 20,\n      autoSnap: true,\n    };\n    const optionFolder = gui.addFolder('Snapline Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'tolerance', 1, 20, 1);\n    optionFolder.add(options, 'offset', 1, 50, 1);\n    optionFolder.add(options, 'autoSnap');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'snapline',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
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
        "value": "Default",
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
        "value": "'snapline'",
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
        "value": "Plugin unique identifier",
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
        "value": "tolerance",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "The alignment accuracy, that is, when the distance between the moved node and the target position is less than tolerance, the alignment line is displayed",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "5",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "offset",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "The extension distance of the snapline",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "20",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "autoSnap",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Whether to enable automatic snapping",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "shape",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Specifies which shape on the element to use as the reference shape:",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "'key'",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ": uses the key shape of the element as the reference shape",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Function",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ": receives the element and returns a shape",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string | ((node: Node) => DisplayObject)",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "'key'",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "verticalLineStyle",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Vertical snapline style",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "BaseStyleProps",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "{ stroke: '#1783FF' }",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "horizontalLineStyle",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Horizontal snapline style",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "BaseStyleProps",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "{ stroke: '#1783FF' }",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "filter",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Filter nodes that do not need to participate in alignment",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(node: Node) => boolean",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => true",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "The ",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "shape",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": " property specifies the reference shape for elements and supports the following configurations:",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "// Use the key shape as reference\n{\n  type: 'snapline',\n  shape: 'key'\n}\n\n// Use custom function to return reference shape\n{\n  type: 'snapline',\n  shape: (node) => {\n    return node.getShape('custom-shape');\n  }\n}\n",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "Property",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "stroke",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Line color",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "string | Pattern | null",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "'#1783FF'",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "opacity",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Overall opacity",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "strokeOpacity",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Stroke opacity",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "lineWidth",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Line width",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "lineCap",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Line end style",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "'butt'",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "'round'",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "'square'",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "'butt'",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "lineJoin",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Line join style",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "'miter'",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "'round'",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "'bevel'",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "'miter'",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "lineDash",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Dash line configuration",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "number | string | (string | number)[]",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "lineDashOffset",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Dash line offset",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "shadowBlur",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Shadow blur",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "shadowColor",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Shadow color",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "shadowOffsetX",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Shadow X offset",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "shadowOffsetY",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Shadow Y offset",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "cursor",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Mouse cursor style",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "'default'",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "zIndex",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Rendering level",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "0",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Example configuration:",
        "paraId": 9,
        "tocIndex": 6
    },
    {
        "value": "{\n  type: 'snapline',\n  horizontalLineStyle: {\n    stroke: '#F08F56',\n    strokeOpacity: 0.8,\n    lineWidth: 2,\n    lineDash: [4, 4],\n    lineDashOffset: 0,\n    opacity: 1,\n    cursor: 'move',\n  },\n  verticalLineStyle: {\n    stroke: '#17C76F',\n    strokeOpacity: 0.8,\n    lineWidth: 2,\n    lineDash: [4, 4],\n    lineDashOffset: 0,\n    opacity: 1,\n    cursor: 'move',\n  },\n}\n",
        "paraId": 10,
        "tocIndex": 6
    },
    {
        "value": "The simplest usage:",
        "paraId": 11,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  plugins: ['snapline'],\n});\n",
        "paraId": 12,
        "tocIndex": 8
    },
    {
        "value": "You can customize the snapline behavior according to your needs:",
        "paraId": 13,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'snapline',\n      tolerance: 8, // Larger snap range\n      offset: 30, // Longer extension lines\n      horizontalLineStyle: {\n        stroke: '#1890ff',\n        lineWidth: 2,\n      },\n      filter: (node) => node.id !== 'node-0', // Filter nodes by id, exclude from alignment\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [{ id: 'node-0' }, { id: 'node-1' }, { id: 'node-2' }, { id: 'node-3' }, { id: 'node-4' }, { id: 'node-5' }],\n  edges: [\n    { source: 'node-0', target: 'node-1' },\n    { source: 'node-0', target: 'node-2' },\n    { source: 'node-0', target: 'node-3' },\n    { source: 'node-0', target: 'node-4' },\n    { source: 'node-1', target: 'node-0' },\n    { source: 'node-2', target: 'node-0' },\n    { source: 'node-3', target: 'node-0' },\n    { source: 'node-4', target: 'node-0' },\n    { source: 'node-5', target: 'node-0' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  layout: { type: 'grid' },\n  behaviors: ['drag-canvas', 'drag-element'],\n  plugins: [\n    {\n      type: 'snapline',\n      key: 'snapline',\n      verticalLineStyle: { stroke: '#F08F56', lineWidth: 2 },\n      horizontalLineStyle: { stroke: '#17C76F', lineWidth: 2 },\n      autoSnap: false,\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 15,
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
//# sourceMappingURL=docs_manual_plugin_Snapline_en_md_q_hK4X-async.js.map