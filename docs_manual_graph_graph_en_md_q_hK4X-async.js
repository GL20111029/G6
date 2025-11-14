((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/graph/graph.en.md?type=text'],
{ "docs/manual/graph/graph.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/graph/graph.en.md?watch=parent");
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
        "value": "In Chinese, the character \"图\" (Graph) can often be used to represent many different concepts, such as image,shape,and chart or diagram,etc.",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "In Graph Theory, a graph is a mathematical structure used to model pairwise relationships between objects, which we typically represent with nodes (or Vertex) and edges (or Link) to denote the objects and the relationships between them.",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "The \"graph\" in G6:",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Conceptually, it is the \"graph\" from Graph Theory, a data structure composed of nodes and edges.",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Visually, a \"graph\" is a figure composed of a set of graphical elements representing nodes and edges.",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "In terms of code implementation, a \"graph\" is a class capable of transforming data into a graphical display.",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Graph Theory categorizes graphs into many different types based on their structure and properties, such as:",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Directed Graph and Undirected Graph",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Weighted Graph and Unweighted Graph",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Simple Graph and Multigraph",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Cyclic Graph and Acyclic Graph",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Connected Graph and Disconnected Graph",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Complete Graph and Non-Complete Graph",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Sparse Graph and Dense Graph",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "...",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "In G6, we provide a universal graph representation capable of depicting the various types of graphs mentioned above, for example:",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Directed Graph and Undirected Graph: Defined by the start and end points of the edges.",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Weighted Graph and Unweighted Graph: Defined by the ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "weight",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": " data on the edges.",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Simple Graph and Multigraph: Defined by the uniqueness of the edges.",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "...",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Graphs are a very versatile data structure that can be used to represent a variety of scenarios, such as:",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Social Networks",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "Knowledge Graphs",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "Traffic Networks",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "Power Grids",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "In G6, we provide a rich expression capability for graphs that can meet the needs of different scenarios. We also offer a wealth of interactive and animated effects to make the graphs more vivid and intuitive.",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "To create a Graph with G6, you first need to import the ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "@antv/g6",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " library, and then instantiate the Graph class.",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "For installation instructions, refer to: ",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "Getting Started - Installation",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "The Graph class accepts an instantiation argument object, known as ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "options",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": " (Options, in visualization theory it is referred to as: ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Specification",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "), which is used to configure the graph's data, element styles, layout, interactions, etc.",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  // ... other other options\n});\n",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "The instantiation process only configures the basic information of the graph. To render the graph onto the page, you still need to call the ",
        "paraId": 16
    },
    {
        "value": "render",
        "paraId": 16
    },
    {
        "value": " method.",
        "paraId": 16
    },
    {
        "value": "To learn how to quickly create a graph, please refer to ",
        "paraId": 17
    },
    {
        "value": "Quick Start",
        "paraId": 18
    },
    {
        "value": ".",
        "paraId": 17
    },
    {
        "value": "For more detailed information about the configuration options, please refer to ",
        "paraId": 17
    },
    {
        "value": "Options",
        "paraId": 19
    },
    {
        "value": ".",
        "paraId": 17
    },
    {
        "value": "To gain an in-depth understanding of the concepts within the configuration options, please read the rest of the content in this section.",
        "paraId": 17
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
//# sourceMappingURL=docs_manual_graph_graph_en_md_q_hK4X-async.js.map