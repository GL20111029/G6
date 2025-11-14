((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/CollapseExpand.en.md?type=text'],
{ "docs/manual/behavior/CollapseExpand.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/CollapseExpand.en.md?watch=parent");
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
        "value": "CollapseExpand is a built-in behavior in G6 used to implement the expand/collapse functionality for nodes or combos. Through double-click (default) or single-click actions, users can flexibly control the expand and collapse states of graph elements, effectively managing the visualization hierarchy of the graph structure and reducing visual complexity.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "This behavior is mainly used for:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Managing large hierarchical graphs, enabling layered browsing of tree or network graphs",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Simplifying the display of complex graphs, expanding areas of interest as needed",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Hiding branch nodes that are temporarily not needed, focusing on important information",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', combo: 'combo1', style: { x: 250, y: 150 } },\n        { id: 'node2', combo: 'combo1', style: { x: 350, y: 150 } },\n        { id: 'node3', combo: 'combo2', style: { x: 250, y: 300 } },\n      ],\n      edges: [],\n      combos: [\n        { id: 'combo1', combo: 'combo2' },\n        { id: 'combo2', style: {} },\n      ],\n    },\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    behaviors: [\n      {\n        type: 'collapse-expand',\n        key: 'collapse-expand',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      key: 'collapse-expand',\n      type: 'collapse-expand',\n      animation: true,\n      enable: true,\n    };\n    const optionFolder = gui.addFolder('CollapseExpand Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'collapse-expand',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
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
        "value": "Declare directly using a string form. This method is simple but only supports default configurations and cannot be dynamically modified after configuration:",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // other configurations...\n  behaviors: ['collapse-expand'],\n});\n",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "2. Object Configuration (Recommended)",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Configure using an object form, supporting custom parameters, and allowing dynamic updates to the configuration at runtime:",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // other configurations...\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      key: 'collapse-expand-1',\n      trigger: 'click', // Change the trigger method to single-click\n      animation: true, // Enable animation effects\n    },\n  ],\n});\n",
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
        "value": "Default Value",
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
        "value": "Behavior type name",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "collapse-expand",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | string",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "collapse-expand",
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
        "value": "Enable expand/collapse animation effects",
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
        "value": "enable",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Enable expand/collapse functionality",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: [/en/api/event#event-object-properties]) => boolean)",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Trigger method, can be single-click or double-click",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "click",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "dblclick",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "dblclick",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "onCollapse",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Callback function when collapse is completed",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(id: string) => void",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "onExpand",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Callback function when expand is completed",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "(id: string) => void",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "align",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Align with the target element to avoid view offset",
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
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['collapse-expand'],\n  // other configurations...\n});\n",
        "paraId": 12,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  // other configurations...\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      trigger: 'click', // Change the default double-click trigger to single-click\n    },\n  ],\n});\n",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // other configurations...\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      onCollapse: (id) => {\n        console.log(`Node ${id} has collapsed`);\n        // Execute custom logic\n      },\n      onExpand: (id) => {\n        console.log(`Node ${id} has expanded`);\n        // Execute custom logic\n      },\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // other configurations...\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      // Enable expand/collapse functionality only when the target is a node type\n      enable: (event) => event.targetType === 'node',\n    },\n  ],\n});\n",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  // other configurations...\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      animation: false, // Disable expand/collapse animation effects\n    },\n  ],\n});\n",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "You can check the ",
        "paraId": 17,
        "tocIndex": 12
    },
    {
        "value": "collapsed",
        "paraId": 17,
        "tocIndex": 12
    },
    {
        "value": " property in the node data:",
        "paraId": 17,
        "tocIndex": 12
    },
    {
        "value": "const isCollapsed = (nodeId) => {\n  const nodeData = graph.getNodeData(nodeId);\n  return nodeData?.style?.collapsed === true;\n};\n",
        "paraId": 18,
        "tocIndex": 12
    },
    {
        "value": "In addition to being triggered by user interaction, you can also directly control using ",
        "paraId": 19,
        "tocIndex": 13
    },
    {
        "value": "collapseElement",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": " or ",
        "paraId": 19,
        "tocIndex": 13
    },
    {
        "value": "expandElement",
        "paraId": 21,
        "tocIndex": 13
    },
    {
        "value": ":",
        "paraId": 19,
        "tocIndex": 13
    },
    {
        "value": "// Collapse node\ngraph.collapseElement('nodeId', { animation: true });\n\n// Expand node\ngraph.expandElement('nodeId', { animation: true });\n",
        "paraId": 22,
        "tocIndex": 13
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [\n      { id: 'node1', combo: 'combo1', style: { x: 300, y: 100 } },\n      { id: 'node2', combo: 'combo1', style: { x: 300, y: 150 } },\n      { id: 'node3', combo: 'combo2', style: { x: 100, y: 100 } },\n      { id: 'node4', combo: 'combo2', style: { x: 50, y: 150 } },\n      { id: 'node5', combo: 'combo2', style: { x: 150, y: 150 } },\n    ],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node3', target: 'node5' },\n    ],\n    combos: [\n      { id: 'combo1', style: { labelText: '双击折叠', collapsed: true } },\n      { id: 'combo2', style: { labelText: '单击折叠', collapsed: false } },\n    ],\n  },\n  behaviors: [\n    {\n      type: 'collapse-expand',\n      trigger: 'dblclick',\n      enable: (event) => event.targetType === 'combo' && event.target.id === 'combo1',\n    },\n    {\n      type: 'collapse-expand',\n      trigger: 'click',\n      enable: (event) => event.targetType === 'combo' && event.target.id === 'combo2',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 23,
        "tocIndex": 14
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
//# sourceMappingURL=docs_manual_behavior_CollapseExpand_en_md_q_hK4X-async.js.map