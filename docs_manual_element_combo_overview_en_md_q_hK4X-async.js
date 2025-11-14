((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/combo/overview.en.md?type=text'],
{ "docs/manual/element/combo/overview.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/combo/overview.en.md?watch=parent");
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
        "value": "A Combo, short for Combination, is a special type of graph element in G6 that can contain nodes and sub-combos, similar to the concept of \"groups\" or \"containers.\" It is typically used to represent set relationships, such as a department containing multiple employees or a city containing multiple regions.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "It is not recommended to use Combos in ",
        "paraId": 1
    },
    {
        "value": "tree graphs",
        "paraId": 1
    },
    {
        "value": ". The layout mechanism of tree graphs is incompatible with that of Combos, which can lead to node misalignment or style confusion.",
        "paraId": 1
    },
    {
        "value": "G6 has built-in Combos including ",
        "paraId": 2
    },
    {
        "value": "circle",
        "paraId": 2
    },
    {
        "value": " (circular combo) and ",
        "paraId": 2
    },
    {
        "value": "rect",
        "paraId": 2
    },
    {
        "value": " (rectangular combo), as shown in the images below:",
        "paraId": 2
    },
    {
        "value": "When defining a Combo, you need to add a ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "combos",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " field to the graph's data object. Each Combo is an object with the following structure:",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Attribute",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Type",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Default",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Required",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "id",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Unique identifier of the combo",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "✓",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Combo type, name of built-in combo type or custom combo name, such as ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "circle",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " or ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "rect",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "data",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Combo data, used to store custom data of the combo, accessible via callback functions in style mapping",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "object",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "style",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Combo style",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "object",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "states",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Initial states of the combo",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "string[]",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "combo",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Parent combo ID. If there is no parent combo, it is null",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "string | null",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "An example of a data item in the ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "combos",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " array:",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "{\n  \"id\": \"combo1\",\n  \"type\": \"circle\",\n  \"data\": { \"groupName\": \"Group A\" },\n  \"style\": { \"fill\": \"lightblue\", \"stroke\": \"blue\", \"collapsed\": true },\n  \"states\": [],\n  \"combo\": null\n}\n",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "To assign a node to a Combo, you can add a ",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "combo",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": " field to the node data:",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "{\n  \"nodes\": [{ \"id\": \"node1\", \"combo\": \"comboA\" }], // node1 belongs to comboA\n  \"combos\": [{ \"id\": \"comboA\" }] // define comboA\n}\n",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "There are three ways to configure Combos, listed in order of priority from highest to lowest:",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Use ",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "graph.setCombo()",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": " for dynamic configuration",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "Global configuration during graph instantiation",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "Dynamic properties in data",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "These configuration methods can be used simultaneously. When there are identical configuration items, the method with higher priority will override the one with lower priority.",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "graph.setCombo()",
        "paraId": 12
    },
    {
        "value": "You can dynamically set the style mapping logic of Combos using ",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "graph.setCombo()",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": " after the graph instance is created.",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "This method must be called before ",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "graph.render()",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": " to take effect and has the highest priority.",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "graph.setCombo({\n  style: {\n    type: 'circle',\n    style: { fill: '#7FFFD4', stroke: '#5CACEE', lineWidth: 2 },\n  },\n});\n\ngraph.render();\n",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "You can configure Combo style mapping globally during graph instantiation. This configuration will apply to all Combos.",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  // Specify combo type and combo style type in the combo configuration\n  combo: {\n    type: 'circle',\n    style: { fill: '#7FFFD4', stroke: '#5CACEE', lineWidth: 2 },\n  },\n});\n",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "If you need different configurations for different Combos, you can write the configuration into the Combo data. This configuration method can be directly written into the data in the form of the following code:",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "// Specify combo type and combo style type in the data\nconst data = {\n  combos: [\n    {\n      id: 'combo-1',\n      type: 'circle',\n      style: { size: 100, stroke: 'orange' },\n    },\n  ],\n};\n",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "If you want the configuration in the data to have a higher priority than the global configuration, you can take the following approach:",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": "const data = {\n  combos: [\n    {\n      id: 'combo-1',\n      type: 'circle',\n      style: { size: 100, stroke: 'orange' },\n    },\n  ],\n};\n\nconst graph = new Graph({\n  combo: {\n    type: (d) => d.type || 'rect',\n    style: {\n      stroke: (d) => d.style.stroke || 'blue',\n    },\n  },\n});\n",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "import { Graph, register, Rect, ExtensionCategory } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    {\n      id: 'node1',\n      combo: 'combo1',\n      style: { x: 245, y: 200 },\n    },\n    {\n      id: 'node2',\n      combo: 'combo1',\n      style: { x: 210, y: 250 },\n    },\n    {\n      id: 'node3',\n      combo: 'combo1',\n      style: { x: 280, y: 245 },\n    },\n    {\n      id: 'node4',\n      combo: 'combo2',\n      style: { x: 400, y: 165 },\n    },\n    {\n      id: 'node5',\n      combo: 'combo2',\n      style: { x: 450, y: 162 },\n    },\n    {\n      id: 'node6',\n      combo: 'combo3',\n      style: { x: 425, y: 300 },\n    },\n    {\n      id: 'node7',\n      combo: 'combo3',\n      style: { x: 360, y: 332 },\n    },\n  ],\n  edges: [],\n  combos: [\n    {\n      id: 'combo1',\n      combo: 'combo3',\n      data: { label: 'Combo A' },\n    },\n    {\n      id: 'combo2',\n      combo: 'combo3',\n      data: { label: 'Combo B' },\n    },\n    {\n      id: 'combo3',\n      data: { label: 'Combo C' },\n    },\n    {\n      id: 'combo4',\n      data: { label: 'Combo D' },\n      style: { x: 58, y: 248 },\n    },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  height: 450,\n  data,\n  node: {\n    style: {\n      labelText: (d) => d.id,\n      labelPlacement: 'center',\n      labelFill: '#fff',\n      labelFontSize: 10,\n    },\n  },\n  combo: {\n    type: 'circle',\n    style: {\n      padding: 2,\n      labelText: (d) => d.data.label,\n      labelPlacement: 'top',\n    },\n  },\n  behaviors: [\n    'collapse-expand',\n    {\n      type: 'drag-element',\n      dropEffect: 'link',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": "Simply rendering a Combo does not provide much practical value; it is only when a series of interactive operations are supported that the value of Combos can be maximized.",
        "paraId": 23,
        "tocIndex": 8
    },
    {
        "value": "In G6, we have built-in interactions such as ",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "drag-element",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": " and ",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "collapse-expand",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": ".",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "Supports dragging nodes and Combos. During the dragging of a Combo, the positions of nodes and edges within the Combo will dynamically change. After dragging is complete, the relative positions of the Combo and nodes remain unchanged. You can also change the affiliation of the Combo during dragging by setting ",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": "dropEffect: 'link'",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": ".",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": "Supports double-clicking a Combo to collapse and expand it. After collapsing a Combo, all nodes within the Combo are hidden. If there are connections between external nodes and nodes within the Combo, all connections will connect to the Combo.",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "When built-in Combos cannot meet your needs, G6 provides powerful customization capabilities:",
        "paraId": 27,
        "tocIndex": 11
    },
    {
        "value": "Extend built-in Combos",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "Create new Combo types",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "Unlike Combos, custom Combos need to be registered before use. For detailed tutorials, please refer to the ",
        "paraId": 29,
        "tocIndex": 11
    },
    {
        "value": "Custom Combo",
        "paraId": 30,
        "tocIndex": 11
    },
    {
        "value": " documentation.",
        "paraId": 29,
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
//# sourceMappingURL=docs_manual_element_combo_overview_en_md_q_hK4X-async.js.map