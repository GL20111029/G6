((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/overview.en.md?type=text'],
{ "docs/manual/layout/overview.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/overview.en.md?watch=parent");
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
        "value": "Graph layout refers to the process of arranging elements in a graph according to certain rules, such as force-directed layout based on charge elasticity models, grid layout with sequential arrangement, and tree layout based on hierarchical structures.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6 provides a variety of layout algorithms, allowing users to choose the appropriate one based on their needs:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "AntVDagreLayout",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ": Custom layout based on dagre",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "CircularLayout",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": ": Circular layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "ComboCombinedLayout",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ": Layout suitable for combinations",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "ConcentricLayout",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ": Concentric layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "D3Force3DLayout",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "3D Force-directed",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "D3ForceLayout",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": ": Force-directed layout based on ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "D3",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "DagreLayout",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "dagre",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "FishboneLayout",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": ": Fishbone layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "ForceAtlas2Layout",
        "paraId": 11,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "ForceAtlas2",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "ForceLayout",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": ": Force-directed layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "FruchtermanLayout",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": ": ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Fruchterman",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "GridLayout",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": ": Grid layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "MDSLayout",
        "paraId": 15,
        "tocIndex": 1
    },
    {
        "value": ": High-dimensional data dimensionality reduction layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "RadialLayout",
        "paraId": 16,
        "tocIndex": 1
    },
    {
        "value": ": Radial layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "RandomLayout",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": ": Random layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "SnakeLayout",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": ": Snake layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "CompactBoxLayout",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": ": Compact tree layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "DendrogramLayout",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": ": Dendrogram layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "MindmapLayout",
        "paraId": 21,
        "tocIndex": 1
    },
    {
        "value": ": Mindmap layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "IndentedLayout",
        "paraId": 22,
        "tocIndex": 1
    },
    {
        "value": ": Indented tree layout",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Among them, ",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "CompactBox Layout",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "Dendrogram Layout",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "Mindmap Layout",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": ", and ",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "Indented Layout",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": " are types of tree layouts suitable for tree-structured graphs.",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "You can directly use built-in layouts, but if you want to use other layouts, you need to register them first:",
        "paraId": 24,
        "tocIndex": 2
    },
    {
        "value": "import { register, ExtensionCategory } from '@antv/g6';\nimport { CustomLayout } from 'package-name/or/path-to-your-custom-layout';\n\nregister(ExtensionCategory.LAYOUT, 'custom-layout', CustomLayout);\n",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "The ",
        "paraId": 26,
        "tocIndex": 3
    },
    {
        "value": "layout",
        "paraId": 26,
        "tocIndex": 3
    },
    {
        "value": " configuration item can specify the graph's layout algorithm, for example:",
        "paraId": 26,
        "tocIndex": 3
    },
    {
        "value": "{\n  layout: {\n    // Specify the layout algorithm to use\n    type: 'force',\n    // Configuration items for the layout algorithm\n    gravity: 10\n    // ...\n  }\n}\n",
        "paraId": 27,
        "tocIndex": 3
    },
    {
        "value": "You can also use ",
        "paraId": 28,
        "tocIndex": 3
    },
    {
        "value": "graph.setLayout",
        "paraId": 28,
        "tocIndex": 3
    },
    {
        "value": " to update the layout configuration after the graph is instantiated.",
        "paraId": 28,
        "tocIndex": 3
    },
    {
        "value": "G6 provides accelerated versions for some layout algorithms, including executing layout algorithms in Web Workers, providing ",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "WASM",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": " versions of layout algorithms, and GPU-accelerated layout algorithms. They can be used as follows:",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "Except for tree layouts, all built-in layout algorithms in G6 support execution in Web Workers. Simply set ",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "enableWorker",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": " to ",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "true",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "{\n  layout: {\n    type: 'force',\n    enableWorker: true,\n    // ...\n  }\n}\n",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": "Currently supported WASM version layout algorithms include: ",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "Fruchterman Layout",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": ", ",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "ForceAtlas Layout",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": ", ",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "Force Layout",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": ", ",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "Dagre Layout",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": ".",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "First, install ",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "@antv/layout-wasm",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "npm install @antv/layout-wasm --save\n",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "Import and register the layout algorithm:",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "import { register, Graph, ExtensionCategory } from '@antv/g6';\nimport { FruchtermanLayout, initThreads, supportsThreads } from '@antv/layout-wasm';\n\nregister(ExtensionCategory.LAYOUT, 'fruchterman-wasm', FruchtermanLayout);\n",
        "paraId": 36,
        "tocIndex": 6
    },
    {
        "value": "Initialize threads:",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "const supported = await supportsThreads();\nconst threads = await initThreads(supported);\n",
        "paraId": 38,
        "tocIndex": 6
    },
    {
        "value": "Initialize the graph and pass in the layout configuration:",
        "paraId": 39,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  // ... other configurations\n  layout: {\n    type: 'fruchterman-wasm',\n    threads,\n    // ... other configurations\n  },\n});\n",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "Currently supported GPU-accelerated layout algorithms include: ",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "Fruchterman Layout",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": ", ",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "GForce Layout",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": ".",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "First, install ",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": "@antv/layout-gpu",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": "npm install @antv/layout-gpu --save\n",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": "Import and register the layout algorithm:",
        "paraId": 44,
        "tocIndex": 7
    },
    {
        "value": "import { register, Graph, ExtensionCategory } from '@antv/g6';\nimport { FruchtermanLayout } from '@antv/layout-gpu';\n\nregister(ExtensionCategory.LAYOUT, 'fruchterman-gpu', FruchtermanLayout);\n",
        "paraId": 45,
        "tocIndex": 7
    },
    {
        "value": "Initialize the graph and pass in the layout configuration:",
        "paraId": 46,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // ... other configurations\n  layout: {\n    type: 'fruchterman-gpu',\n    // ... other configurations\n  },\n});\n",
        "paraId": 47,
        "tocIndex": 7
    },
    {
        "value": "Usually, after calling ",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "graph.render()",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": ", G6 will automatically execute the layout algorithm.",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "If you need to manually execute the layout algorithm, G6 provides the following APIs:",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "layout",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": ": Execute layout algorithm",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "setLayout",
        "paraId": 52,
        "tocIndex": 8
    },
    {
        "value": ": Set layout algorithm",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "stopLayout",
        "paraId": 53,
        "tocIndex": 8
    },
    {
        "value": ": Stop layout algorithm",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "If the built-in layout algorithms cannot meet your needs, you can customize layout algorithms. For details, please refer to ",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "Custom Layout",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": ".",
        "paraId": 54,
        "tocIndex": 9
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
//# sourceMappingURL=docs_manual_layout_overview_en_md_q_hK4X-async.js.map