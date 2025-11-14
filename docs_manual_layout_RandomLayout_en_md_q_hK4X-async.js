((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/RandomLayout.en.md?type=text'],
{ "docs/manual/layout/RandomLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/RandomLayout.en.md?watch=parent");
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
        "value": "Random Layout",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " is a layout method based on simple rules. Its core logic is to generate random coordinates for each node within a specified layout area (defined by the layout center, width, and height). The coordinates are completely random, and there is no node collision prevention.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The use cases for random layout are very limited. It is only recommended for the following scenarios:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Initial Data Display",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ":",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "During early development, when debugging data loading logic or quickly verifying data structure, random layout can be used for preliminary validation.",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "For final business delivery, it is recommended to use layouts that better reflect business value, such as ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "AntVDagreLayout",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "ForceLayout",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": ", or ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "custom layouts",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": ".",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "All other configurations use defaults (the layout width and height default to the entire canvas container).",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // other configurations\n  layout: {\n    type: 'random',\n  },\n});\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Property",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Layout type",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "random",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "center",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Layout center",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "[",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "layout width",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " / 2, ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "layout height",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " / 2]",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "height",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Layout height",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "canvas height",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "width",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Layout width",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "canvas width",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 300,\n  autoFit: 'view',\n  data: {\n    nodes: Array.from({ length: 50 }).map((_, i) => ({\n      id: `${i}`,\n    })),\n  },\n  node: {\n    style: {\n      labelText: (d) => d.id,\n    },\n  },\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n  layout: {\n    type: 'random',\n  },\n});\n\ngraph.render();\n",
        "paraId": 11,
        "tocIndex": 4
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
//# sourceMappingURL=docs_manual_layout_RandomLayout_en_md_q_hK4X-async.js.map