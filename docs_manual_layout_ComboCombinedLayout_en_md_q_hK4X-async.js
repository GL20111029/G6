((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ComboCombinedLayout.en.md?type=text'],
{ "docs/manual/layout/ComboCombinedLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/ComboCombinedLayout.en.md?watch=parent");
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
        "value": "ComboCombined composite layout is suitable for graph data with composite group structures. It supports flexible configuration of the layout for elements inside combos as well as the layout between the outermost combos and nodes. By default, the internal elements use the Concentric layout, and the outer layout uses the gForce force-directed layout, balancing layout effect and overall stability. See more ComboCombined layout ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "examples",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " and ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "source code",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ".",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "User profile analysis: Analyze user behavior and product relationships, use user interest circles as combos, display specific products and behavior tags as internal nodes, and help operators identify user consumption paths.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Supply chain management graph: Divide suppliers, manufacturers, warehouses, and distributors into combos by role or region, display resources, personnel, or equipment as internal nodes, and clearly show the internal structure of each link in the supply chain.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Property",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "combo-combined",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "center",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout center",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "PointTuple",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Graph center",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "comboPadding",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Padding value inside the combo, used only for force calculation, not for rendering. It is recommended to set the same value as the visual padding.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "((d?: unknown) => number)",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number[]",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "undefined",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "10",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "innerLayout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout algorithm for elements inside the combo, ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "see below",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Layout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "ConcentricLayout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "nodeSize",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Node size (diameter), used for collision detection. If not specified, it is calculated from the node's size property, or defaults to 10.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number[]",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | (d?: ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "NodeData",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": ") => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "10",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "outerLayout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout algorithm for the outermost layer, ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "see below",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Layout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "ForceLayout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "spacing",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Minimum spacing between node/combo edges when preventNodeOverlap or preventOverlap is ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": ". Can be a callback for different nodes.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | (d?: ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "NodeData",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": ") => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "treeKey",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "treeKey",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout<any>",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Default:",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "ConcentricLayout",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "The layout algorithm for elements inside the combo. Must use a synchronous layout algorithm. Default is ",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "ConcentricLayout",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": ". ",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "More layouts",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "Example",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "import { ConcentricLayout } from '@antv/layout';\n\nnew Graph({\n  layout: {\n    type: 'combo-combined',\n    /**\n     * See more ConcentricLayout options:\n     * https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L397\n     */\n    innerLayout: new ConcentricLayout({\n      sortBy: 'id',\n      nodeSize: 20,\n      clockwise: true,\n    }),\n  },\n});\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Layout<any>",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "Default:",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "ForceLayout",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "The layout algorithm for the outermost layer. Default is ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "ForceLayout",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": ". ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "More layouts",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "Example",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "import { ForceLayout } from '@antv/layout';\n\nnew Graph({\n  layout: {\n    type: 'combo-combined',\n    /**\n     * See more ForceLayout options:\n     * https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L950\n     */\n    outerLayout: new ForceLayout({\n      gravity: 1,\n      factor: 2,\n      linkDistance: (edge: any, source: any, target: any) => {\n        const nodeSize = ((source.size?.[0] || 30) + (target.size?.[0] || 30)) / 2;\n        return Math.min(nodeSize * 1.5, 70);\n      },\n    }),\n  },\n});\n",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://assets.antv.antgroup.com/g6/combo.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      data,\n      layout: {\n        type: 'combo-combined',\n        comboPadding: 2,\n      },\n      node: {\n        style: {\n          size: 20,\n          labelText: (d) => d.id,\n        },\n        palette: {\n          type: 'group',\n          field: (d) => d.combo,\n        },\n      },\n      edge: {\n        style: (model) => {\n          const { size, color } = model.data;\n          return {\n            stroke: color || '#99ADD1',\n            lineWidth: size || 1,\n          };\n        },\n      },\n      behaviors: ['drag-element', 'drag-canvas', 'zoom-canvas'],\n      autoFit: 'view',\n    });\n\n    graph.render();\n  });\n",
        "paraId": 16,
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
//# sourceMappingURL=docs_manual_layout_ComboCombinedLayout_en_md_q_hK4X-async.js.map