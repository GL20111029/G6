((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/transform/MapNodeSize.en.md?type=text'],
{ "docs/manual/transform/MapNodeSize.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/transform/MapNodeSize.en.md?watch=parent");
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
        "value": "In graph visualization, the size of a node is usually used to convey the importance or influence of the node. By adjusting the size of the node based on the centrality of the node, we can more intuitively show the importance of each node in the network, helping users better understand and analyze complex network structures.",
        "paraId": 0
    },
    {
        "value": "NodeCentralityOptions",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "| ((graphData:",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": " ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "GraphData",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": ") =>",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": " ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Map**<**string, number>)",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": " ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Default:",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": " ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "type: 'eigenvector'",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "The method of measuring the node centrality",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "'degree'",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ": Degree centrality, measures centrality by the degree (number of connected edges) of a node. Nodes with high degree centrality usually have more direct connections and may play important roles in the network",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "'betweenness'",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ": Betweenness centrality, measures centrality by the number of times a node appears in all shortest paths. Nodes with high betweenness centrality usually act as bridges in the network, controlling the flow of information",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "'closeness'",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ": Closeness centrality, measures centrality by the reciprocal of the average shortest path length from a node to all other nodes. Nodes with high closeness centrality usually can reach other nodes in the network more quickly",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "'eigenvector'",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ": Eigenvector centrality, measures centrality by the degree of connection between a node and other central nodes. Nodes with high eigenvector centrality usually connect to other important nodes",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "'pagerank'",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ": PageRank centrality, measures centrality by the number of times a node is referenced by other nodes, commonly used in directed graphs. Nodes with high PageRank centrality usually have high influence in the network, similar to the page ranking algorithm",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Custom centrality calculation method: ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "(graphData: GraphData) => Map<ID, number>",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ", where ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "graphData",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " is the graph data, and ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Map<ID, number>",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " is the mapping from node ID to centrality value",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "type NodeCentralityOptions =\n  | { type: 'degree'; direction?: 'in' | 'out' | 'both' }\n  | { type: 'betweenness'; directed?: boolean; weightPropertyName?: string }\n  | { type: 'closeness'; directed?: boolean; weightPropertyName?: string }\n  | { type: 'eigenvector'; directed?: boolean }\n  | { type: 'pagerank'; epsilon?: number; linkProb?: number };\n",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "boolean | [number, number]",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Default:",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Whether to map label size synchronously",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number | [number, number] | Float32Array | [number, number, number]",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "Default:",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "80",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "The maximum size of the node",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "number | [number, number] | Float32Array | [number, number, number]",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "Default:",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "20",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "The minimum size of the node",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "'linear' | 'log' | 'pow' | 'sqrt' | ((value: number, domain: [number, number], range: [number, number]) => number)",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": " ",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "Default:",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": " ",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "'log'",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "Scale type",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "'linear'",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": ": Linear scale, maps a value from one range to another range linearly, commonly used for cases where the difference in centrality values is small",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "'log'",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": ": Logarithmic scale, maps a value from one range to another range logarithmically, commonly used for cases where the difference in centrality values is large",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "'pow'",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": ": Power-law scale, maps a value from one range to another range using power law, commonly used for cases where the difference in centrality values is large",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "'sqrt'",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": ": Square root scale, maps a value from one range to another range using square root, commonly used for cases where the difference in centrality values is large",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "Custom scale: ",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "(value: number, domain: [number, number], range: [number, number]) => number",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "，where ",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "value",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": " is the value to be mapped, ",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "domain",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": " is the input range, and ",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "range",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": " is the output range",
        "paraId": 19,
        "tocIndex": 6
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
//# sourceMappingURL=docs_manual_transform_MapNodeSize_en_md_q_hK4X-async.js.map