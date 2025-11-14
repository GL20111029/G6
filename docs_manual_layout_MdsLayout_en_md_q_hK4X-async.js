((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/MdsLayout.en.md?type=text'],
{ "docs/manual/layout/MdsLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/MdsLayout.en.md?watch=parent");
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
        "value": "MDS (Multidimensional Scaling) is a classic dimensionality reduction algorithm. In G6, the MDS layout constructs a distance matrix between nodes and restores their relative distances in high-dimensional space as much as possible in 2D space. It is suitable for graph visualization scenarios that show similarity, distance, or structural relationships between nodes.",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "Data dimensionality reduction visualization",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "Displaying distance relationships between nodes",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'mds',\n    center: [300, 300],\n    linkDistance: 100,\n  },\n});\n",
        "paraId": 2,
        "tocIndex": 3
    },
    {
        "value": "Option",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Layout type",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "mds",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Yes",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "center",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Center position of the circular layout",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "[number,number]",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "[0,0]",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "No",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "linkDistance",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "Ideal length of edges (spring length)",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "50",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "No",
        "paraId": 3,
        "tocIndex": 4
    },
    {
        "value": "center",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "The center coordinates of the layout. All nodes will be symmetrically distributed around this point.",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "linkDistance",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number Default: 50",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "The ideal distance between nodes. The larger the value, the more dispersed the nodes.",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: Array.from({ length: 25 }, (_, i) => ({\n    id: `node-${i}`,\n    data: {\n      value: Math.random() * 100,\n    },\n  })),\n  edges: Array.from({ length: 20 }, (_, i) => ({\n    id: `edge-${i}`,\n    source: `node-${Math.floor(Math.random() * 25)}`,\n    target: `node-${Math.floor(Math.random() * 25)}`,\n  })),\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 300,\n  autoFit: 'view',\n  data,\n  node: {\n    style: {\n      labelText: (d) => d.id,\n    },\n  },\n  layout: {\n    type: 'mds',\n    nodeSize: 32,\n    linkDistance: 100,\n  },\n  behaviors: ['drag-element', 'drag-canvas', 'zoom-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 9,
        "tocIndex": 5
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
//# sourceMappingURL=docs_manual_layout_MdsLayout_en_md_q_hK4X-async.js.map