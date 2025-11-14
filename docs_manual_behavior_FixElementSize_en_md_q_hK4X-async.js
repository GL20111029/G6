((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/FixElementSize.en.md?type=text'],
{ "docs/manual/behavior/FixElementSize.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/FixElementSize.en.md?watch=parent");
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
        "value": "FixElementSize is a built-in interaction provided by G6, used to ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "maintain the size of certain elements within nodes unchanged during the zooming process.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " It enhances visual consistency and operability during zooming.\nBy listening to viewport changes, it automatically scales elements marked as \"fixed size\" to ensure they maintain a relatively constant display size at different zoom levels. It supports global enablement and also allows control over specific elements or nodes as needed.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "This interaction is mainly used for:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Graphical elements or embedded components (buttons, labels, etc.) that need to maintain a fixed visual size",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', style: { x: 200, y: 100, labelText: 'node1' } },\n        { id: 'node2', style: { x: 360, y: 100, labelText: 'node2' } },\n        { id: 'node3', style: { x: 280, y: 220, labelText: 'node3' } },\n      ],\n      edges: [\n        { source: 'node1', target: 'node2' },\n        { source: 'node1', target: 'node3' },\n        { source: 'node2', target: 'node3' },\n      ],\n    },\n    node: {\n      style: { label: true, labelFill: '#666', labelFontSize: 14, labelPlacement: 'bottom' },\n      state: {\n        custom: { fill: '#ffa940' },\n      },\n    },\n    edge: {\n      stroke: '#8b9baf',\n      state: {\n        custom: { stroke: '#ffa940' },\n      },\n    },\n    behaviors: ['zoom-canvas', 'drag-canvas', { key: 'fix-element-size', type: 'fix-element-size' }],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 800, height: 400 },\n  (gui, graph) => {\n    const options = {\n      key: 'fix-element-size',\n      type: 'fix-element-size',\n      animation: true,\n      enable: true,\n      reset: true,\n    };\n    const optionFolder = gui.addFolder('CollapseExpand Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'reset');\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'fix-element-size',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Add this interaction in the graph configuration",
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
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['fix-element-size'],\n});\n",
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
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'fix-element-size',\n      enable: true, // Enable this interaction\n      state: 'selected', // State of elements to fix size\n      reset: true, // Restore style when elements are redrawn\n    },\n  ],\n});\n",
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
        "value": "Interaction type name",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "fix-element-size",
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
        "value": "Whether to enable this interaction, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "example",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Event",
        "paraId": 13,
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
        "value": "reset",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Whether to restore style when elements are redrawn",
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
        "value": "Specify the state of elements to fix size",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "\"\"",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Node configuration item, used to define which attributes maintain a fixed visual size. If not specified (i.e., undefined), the entire node will be fixed, ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "example",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "FixShapeConfig",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " | FixShapeConfig[]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "nodeFilter",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Node filter, used to filter which nodes maintain a fixed size during zooming",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(datum: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "NodeData",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": ") => boolean",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "() => true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Edge configuration item, used to define which attributes maintain a fixed visual size. By default, the lineWidth and labelFontSize attributes are fixed, usage is the same as ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "node configuration item",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "FixShapeConfig",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": " | FixShapeConfig[]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "[ shape: 'key', fields: ['lineWidth'] ,  shape: 'halo', fields: ['lineWidth'] ,  shape: 'label' ]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "edgeFilter",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Edge filter, used to filter which edges maintain a fixed size during zooming",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(datum: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": ") => boolean",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "() => true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "combo",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Combo configuration item, used to define which attributes maintain a fixed visual size. By default, the entire Combo will be fixed, usage is the same as ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "node configuration item",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "FixShapeConfig",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": " | FixShapeConfig[]",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "comboFilter",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Combo filter, used to filter which Combos maintain a fixed size during zooming",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(datum: ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "ComboData",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": ") => boolean",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "() => true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Whether to enable the fixed element size interaction. By default, it is enabled when zooming out the canvas",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "By default, it is enabled when zooming out the canvas, set ",
        "paraId": 24,
        "tocIndex": 5
    },
    {
        "value": "enable: (event) => event.data.scale < 1",
        "paraId": 24,
        "tocIndex": 5
    },
    {
        "value": "; if you want to enable it when zooming in, set ",
        "paraId": 24,
        "tocIndex": 5
    },
    {
        "value": "enable: (event) => event.data.scale > 1",
        "paraId": 24,
        "tocIndex": 5
    },
    {
        "value": "; if you want to enable it when both zooming in and out, set ",
        "paraId": 24,
        "tocIndex": 5
    },
    {
        "value": "enable: true",
        "paraId": 24,
        "tocIndex": 5
    },
    {
        "value": "Node configuration item, used to define which attributes maintain a fixed visual size. If not specified (i.e., undefined), the entire node will be fixed",
        "paraId": 25,
        "tocIndex": 6
    },
    {
        "value": "Example",
        "paraId": 26,
        "tocIndex": 6
    },
    {
        "value": "If you want to fix the lineWidth of the main shape of the node during zooming, you can configure it like this:",
        "paraId": 27,
        "tocIndex": 6
    },
    {
        "value": "{\n  node: [{ shape: 'key', fields: ['lineWidth'] }];\n}\n",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "If you want to keep the size of the element label unchanged during zooming, you can configure it like this:",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "{\n  shape: 'label';\n}\n",
        "paraId": 30,
        "tocIndex": 6
    },
    {
        "value": "Parameter",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "Description",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "Required",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "shape",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "Specify the shape to fix size, it can be the class name of the shape, or a function that receives all shapes constituting the element and returns the target shape",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "string | ((shapes: DisplayObject[]) => DisplayObject)",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "✓",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "fields",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "Specify the fields of the shape to fix size. If not specified, the entire shape size is fixed by default",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "string[]",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "✘",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node0', size: 50, label: '0', style: { x: 326, y: 268 }, states: ['selected'] },\n    { id: 'node1', size: 30, label: '1', style: { x: 280, y: 384 }, states: ['selected'] },\n    { id: 'node2', size: 30, label: '2', style: { x: 234, y: 167 } },\n    { id: 'node3', size: 30, label: '3', style: { x: 391, y: 368 } },\n    { id: 'node4', size: 30, label: '4', style: { x: 444, y: 209 } },\n    { id: 'node5', size: 30, label: '5', style: { x: 378, y: 157 } },\n    { id: 'node6', size: 15, label: '6', style: { x: 229, y: 400 } },\n    { id: 'node7', size: 15, label: '7', style: { x: 281, y: 440 } },\n    { id: 'node8', size: 15, label: '8', style: { x: 188, y: 119 } },\n    { id: 'node9', size: 15, label: '9', style: { x: 287, y: 157 } },\n    { id: 'node10', size: 15, label: '10', style: { x: 185, y: 200 } },\n    { id: 'node11', size: 15, label: '11', style: { x: 238, y: 110 } },\n    { id: 'node12', size: 15, label: '12', style: { x: 239, y: 221 } },\n    { id: 'node13', size: 15, label: '13', style: { x: 176, y: 160 } },\n    { id: 'node14', size: 15, label: '14', style: { x: 389, y: 423 } },\n    { id: 'node15', size: 15, label: '15', style: { x: 441, y: 341 } },\n    { id: 'node16', size: 15, label: '16', style: { x: 442, y: 398 } },\n  ],\n  edges: [\n    { source: 'node0', target: 'node1', label: '0-1', states: ['selected'] },\n    { source: 'node0', target: 'node2', label: '0-2' },\n    { source: 'node0', target: 'node3', label: '0-3' },\n    { source: 'node0', target: 'node4', label: '0-4' },\n    { source: 'node0', target: 'node5', label: '0-5' },\n    { source: 'node1', target: 'node6', label: '1-6' },\n    { source: 'node1', target: 'node7', label: '1-7' },\n    { source: 'node2', target: 'node8', label: '2-8' },\n    { source: 'node2', target: 'node9', label: '2-9' },\n    { source: 'node2', target: 'node10', label: '2-10' },\n    { source: 'node2', target: 'node11', label: '2-11' },\n    { source: 'node2', target: 'node12', label: '2-12' },\n    { source: 'node2', target: 'node13', label: '2-13' },\n    { source: 'node3', target: 'node14', label: '3-14' },\n    { source: 'node3', target: 'node15', label: '3-15' },\n    { source: 'node3', target: 'node16', label: '3-16' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      labelText: (d) => d.label,\n      size: (d) => d.size,\n      lineWidth: 1,\n    },\n  },\n  edge: { style: { labelText: (d) => d.label } },\n  behaviors: [\n    'zoom-canvas',\n    'drag-canvas',\n    {\n      key: 'fix-element-size',\n      type: 'fix-element-size',\n      enable: (event) => event.data.scale < 1,\n      state: 'selected',\n      reset: true,\n    },\n    { type: 'click-select', key: 'click-select', multiple: true },\n  ],\n  autoFit: 'center',\n});\n\ngraph.render();\n",
        "paraId": 32,
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
//# sourceMappingURL=docs_manual_behavior_FixElementSize_en_md_q_hK4X-async.js.map