((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/CreateEdge.en.md?type=text'],
{ "docs/manual/behavior/CreateEdge.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/CreateEdge.en.md?watch=parent");
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
        "value": "CreateEdge is a built-in behavior in G6 for interactively creating edges on the canvas. After the user triggers the behavior (click or drag), the edge will follow the mouse movement and connect to the target node to complete the creation. If canceled, it will be automatically removed.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Additionally, this behavior supports customizing the style of the edge, such as color, line style, arrow, etc., to meet different visualization needs.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "The elements that can be connected by this behavior are ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "node",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " and ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "combo",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ".",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "This behavior is mainly used for:",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Visualization scenarios that require interactive creation of connections between nodes, such as flowcharts, knowledge graphs, etc.",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', combo: 'combo1', style: { x: 250, y: 150 } },\n        { id: 'node2', combo: 'combo1', style: { x: 350, y: 150 } },\n        { id: 'node3', combo: 'combo2', style: { x: 250, y: 300 } },\n      ],\n      edges: [],\n      combos: [\n        { id: 'combo1', combo: 'combo2' },\n        { id: 'combo2', style: {} },\n      ],\n    },\n    node: { style: { fill: '#873bf4' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    behaviors: [\n      {\n        type: 'create-edge',\n        key: 'create-edge',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      key: 'create-edge',\n      type: 'create-edge',\n      animation: true,\n      enable: true,\n      trigger: 'drag',\n    };\n    const optionFolder = gui.addFolder('CollapseExpand Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'trigger', ['drag', 'click']);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'create-edge',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Add this behavior in the graph configuration",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "// Use default configuration\nconst graph = new Graph({\n  // Other configurations...\n  behaviors: ['create-edge'], // Directly add, use default configuration\n});\n\n// Or use custom configuration\nconst graph = new Graph({\n  // Other configurations\n  behaviors: [\n    {\n      type: 'create-edge',\n      trigger: 'click', // Behavior configuration, create edge by clicking\n      style: {}, // Custom edge style\n    },\n  ],\n});\n",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Option",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Behavior type name",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "create-edge",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "√",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "The way to trigger the creation of a new edge: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "click",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " means click to trigger; ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "drag",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " means drag to trigger",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "click",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "drag",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "drag",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Whether to enable this behavior",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Event",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ") => boolean)",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "onCreate",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Callback function for creating an edge, returns edge data",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "(edge: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": ") => ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "onFinish",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Callback function for successfully creating an edge",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "(edge: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": ") => void",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "style",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Style of the newly created edge, ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "configuration options",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "See below",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Configure the style of the newly created edge, for detailed configuration options, please refer to ",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "Element - Edge - General Edge Properties - Style",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "{\n  \"style\": {\n    \"stroke\": \"red\",\n    \"lineWidth\": 2\n  }\n}\n",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['create-edge'],\n});\n",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations,\n  behaviors: [\n    {\n      type: 'create-edge',\n      style: {\n        stroke: 'red',\n        lineWidth: 3,\n      },\n    },\n  ],\n});\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations\n  behaviors: [\n    {\n      type: 'create-edge',\n      trigger: 'click',\n    },\n  ],\n});\n",
        "paraId": 19,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node1', target: 'node3' },\n      { source: 'node1', target: 'node4' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  layout: {\n    type: 'grid',\n  },\n  behaviors: [\n    {\n      type: 'create-edge',\n      trigger: 'drag',\n      style: {\n        fill: 'red',\n        lineWidth: 2,\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 20,
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
//# sourceMappingURL=docs_manual_behavior_CreateEdge_en_md_q_hK4X-async.js.map