((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/overview.en.md?type=text'],
{ "docs/manual/element/edge/overview.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/edge/overview.en.md?watch=parent");
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
        "value": "An edge is one of the basic elements in a graph, used to connect two nodes or combos, representing the relationship between them. In G6, edges are directional, pointing from ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "source",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " to ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "target",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ", but you can configure them to hide the arrow to represent undirected connections.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "You can create edges between any two nodes, combos, or between a node and a combo, and you can express different types of relationships by creating multiple edges.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "G6 provides the following built-in edges:",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "line",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " Straight line edge",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "polyline",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " Polyline edge",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "quadratic",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " Quadratic Bezier curve edge",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "cubic",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " Cubic Bezier curve edge",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "cubicVertical",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " Vertical cubic Bezier curve edge",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "cubicHorizontal",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " Horizontal cubic Bezier curve edge",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "When defining an edge, you need to add an ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "edges",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " field to the graph's data object. Each edge is an object with the following structure:",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Attribute",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Description",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Type",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Default",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Required",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "source",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "ID of the starting node of the edge",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "target",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "ID of the target node of the edge",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "id",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Unique identifier of the edge",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "type",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Type of edge, name of built-in edge type or custom edge, such as ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "line",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " or ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "polyline",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "data",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Edge data, used to store custom data of the edge, can be accessed in style mapping through callback functions",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "object",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "style",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Edge style, including visual attributes like line color, width, arrow, etc.",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "object",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "states",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Initial states of the edge",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "string[]",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "An example of a data item in the ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "edges",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " array:",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "{\n  \"source\": \"alice\",\n  \"target\": \"bob\",\n  \"type\": \"line\",\n  \"data\": { \"relationship\": \"friend\", \"strength\": 5 },\n  \"style\": { \"stroke\": \"green\", \"lineWidth\": 2 },\n  \"states\": [\"hover\"]\n}\n",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "There are three ways to configure edges, listed in order of priority from high to low:",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Use ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "graph.setEdge()",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " for dynamic configuration",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Global configuration when instantiating the graph",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Dynamic attributes in data",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "These configuration methods can be used simultaneously. When there are the same configuration items, the method with higher priority will override the one with lower priority.",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "graph.setEdge()",
        "paraId": 11
    },
    {
        "value": "You can dynamically set the style mapping logic of edges using ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "graph.setEdge()",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " after the graph instance is created.",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "This method needs to be called before ",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "graph.render()",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": " to take effect and has the highest priority.",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "graph.setEdge({\n  style: {\n    type: 'line',\n    style: { stroke: '#5CACEE', lineWidth: 2 },\n  },\n});\n\ngraph.render();\n",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "You can configure edge style mapping globally when instantiating the graph, and this configuration will take effect on all edges.",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  edge: {\n    type: 'line',\n    style: { stroke: '#5CACEE', lineWidth: 2 },\n  },\n});\n",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "If you need different configurations for different edges, you can write the configuration into the edge data. This configuration method can be directly written into the data in the form of the following code:",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "const data = {\n  edges: [\n    {\n      source: 'node-1',\n      target: 'node-2',\n      type: 'line',\n      style: { stroke: 'orange' },\n    },\n  ],\n};\n",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "If you want the configuration in the data to have a higher priority than the global configuration, you can take the following approach:",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "const data = {\n  edges: [\n    {\n      source: 'node-1',\n      target: 'node-2',\n      type: 'line',\n      style: { stroke: 'orange' },\n    },\n  ],\n};\n\nconst graph = new Graph({\n  edge: {\n    type: 'line',\n    style: {\n      stroke: (d) => d.style.stroke || '#5CACEE',\n      lineWidth: 2,\n    },\n  },\n});\n",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": "When built-in edges cannot meet the requirements, G6 provides powerful customization capabilities:",
        "paraId": 21,
        "tocIndex": 7
    },
    {
        "value": "Extend built-in edges",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": "Create entirely new edge types",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": "Unlike combos, custom edges need to be registered before use. For detailed tutorials, please refer to the ",
        "paraId": 23,
        "tocIndex": 7
    },
    {
        "value": "Custom Edge",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " documentation.",
        "paraId": 23,
        "tocIndex": 7
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
//# sourceMappingURL=docs_manual_element_edge_overview_en_md_q_hK4X-async.js.map