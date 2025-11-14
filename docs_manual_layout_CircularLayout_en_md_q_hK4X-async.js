((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/CircularLayout.en.md?type=text'],
{ "docs/manual/layout/CircularLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/CircularLayout.en.md?watch=parent");
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
        "value": "Circular layout arranges nodes evenly or at intervals on a circle, and also supports spiral layouts by configuring different startRadius and endRadius. See more circular layout ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "examples",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " or ",
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
        "value": "Circular layout",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ":",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Suitable for networks with equal relationships and no hierarchical structure",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Spiral layout",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": ":",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Suitable for implicit hierarchies or time series graphs (such as organizational charts, propagation networks)",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Other settings use the default configuration (layout width and height default to the entire canvas container)",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // other configurations\n  layout: {\n    type: 'circular',\n  },\n});\n",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Property",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Layout type",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "circular",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "angleRatio",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "How many 2*PI between the first and last node",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "1",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "center",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Center of the layout",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "[number, number]|[number, number, number]",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "[",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "layout width",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " / 2, ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "layout height",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " / 2]",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "clockwise",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Whether to arrange clockwise",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "divisions",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Number of segments on the ring (segments will be evenly distributed, effective when endRadius - startRadius != 0)",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "1",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "nodeSize",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Node size (diameter), used for collision detection",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Size | ((nodeData: Node) => Size)",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "10",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "nodeSpacing",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Minimum spacing between rings, used to adjust radius",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number | ((nodeData: Node) => number)",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "10",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "ordering",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Node ordering on the ring, ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "see details",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "topology",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "topology-directed",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "degree",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "radius",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Circle radius, if set, spiral layout configs ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "startRadius",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " and ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "endRadius",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " are ignored, ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "see details",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "startAngle",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Start angle of the layout",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "0",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "endAngle",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "End angle of the layout",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "2 * Math.PI",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "startRadius",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Start radius for spiral layout, ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "usage",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "endRadius",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "End radius for spiral layout",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "width",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Layout width",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "canvas width",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "height",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Layout height",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "canvas height",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Node ordering on the ring",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "topology",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": ": topological order",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "topology-directed",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": ": topological order (directed graph)",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "degree",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": ": order by degree",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "If not set (",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "null",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "), the order in the array is used directly",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "If radius, startRadius, and endRadius are not set, the default is ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "Math.min(layout width, layout height) / 2",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": ", i.e., fills the entire layout area",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  // other configurations\n  layout: {\n    type: 'circular',\n  },\n});\n",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://assets.antv.antgroup.com/g6/circular.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      autoFit: 'view',\n      data,\n      node: {\n        style: {\n          labelText: (d) => d.id,\n          labelFill: '#fff',\n          labelPlacement: 'center',\n        },\n      },\n      layout: {\n        type: 'circular',\n      },\n      behaviors: ['drag-canvas', 'drag-element'],\n    });\n\n    graph.render();\n  });\n",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // other configurations\n  layout: {\n    type: 'circular',\n    startRadius: 10,\n    endRadius: 300,\n  },\n});\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://assets.antv.antgroup.com/g6/circular.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      autoFit: 'center',\n      data,\n      node: {\n        style: {\n          labelText: (d) => d.id,\n          labelFill: '#fff',\n          labelPlacement: 'center',\n        },\n      },\n      layout: {\n        type: 'circular',\n        startRadius: 10,\n        endRadius: 300,\n      },\n      behaviors: ['drag-canvas', 'drag-element'],\n    });\n\n    graph.render();\n  });\n",
        "paraId": 19,
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
//# sourceMappingURL=docs_manual_layout_CircularLayout_en_md_q_hK4X-async.js.map