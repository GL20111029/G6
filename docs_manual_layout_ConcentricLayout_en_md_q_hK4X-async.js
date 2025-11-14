((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ConcentricLayout.en.md?type=text'],
{ "docs/manual/layout/ConcentricLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/ConcentricLayout.en.md?watch=parent");
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
        "value": "The concentric layout arranges nodes in layers according to a certain sorting rule, with each layer of nodes placed around a common center. See more concentric layout ",
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
        "value": "Layered data visualization, such as permission structures, organizational charts, etc., with the center as the top-level role and outer rings as lower-level nodes.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Visualization of ranking analysis results, with high-importance nodes in the center and low-importance nodes on the periphery, quickly expressing the relative influence of nodes in the graph.",
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
        "value": "concentric",
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
        "value": "Center position of the circular layout, defaults to the center of the container",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "clockwise",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Whether to arrange nodes clockwise",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "equidistant",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Whether the distance between rings is equal",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "width",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout width, defaults to container width",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "height",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout height, defaults to container height",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "sortBy",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "The property to sort by (node attribute name). The higher the value, the closer to the center. If set to 'degree', nodes with higher degree are placed closer to the center",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "degree",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "maxLevelDiff",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Maximum attribute difference in the same layer. If undefined, set to maxValue / 4, where maxValue is the maximum value of the sorting property",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "undefined",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "nodeSize",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Node size (diameter), used for collision detection",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number | number[] | ((nodeData: Node) => number)",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "30",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "nodeSpacing",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Minimum spacing between rings, used to adjust the radius",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number | number[] | ((node?: Node) => number)",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "10",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "preventOverlap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Whether to prevent overlap. Must be used with nodeSize or data.size. Only works if node size is set in data or in this layout config.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "startAngle",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "The angle (in radians) to start laying out nodes",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "3 / 2 * Math.PI",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "sweep",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "The angle difference between the first and last node in the same layer. If undefined, set to 2 ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Math.PI",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " (1 - 1 / level.nodes )",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "undefined",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 500,\n  height: 250,\n  autoFit: 'view',\n  data: {\n    nodes: [\n      { id: 'center', data: { label: 'Center', level: 0 } },\n      { id: 'level1-0', data: { label: 'L1-0', level: 1 } },\n      { id: 'level1-1', data: { label: 'L1-1', level: 1 } },\n      { id: 'level1-2', data: { label: 'L1-2', level: 1 } },\n      { id: 'level1-3', data: { label: 'L1-3', level: 1 } },\n      { id: 'level1-4', data: { label: 'L1-4', level: 1 } },\n      { id: 'level1-5', data: { label: 'L1-5', level: 1 } },\n      { id: 'level2-0', data: { label: 'L2-0', level: 2 } },\n      { id: 'level2-1', data: { label: 'L2-1', level: 2 } },\n      { id: 'level2-2', data: { label: 'L2-2', level: 2 } },\n      { id: 'level2-3', data: { label: 'L2-3', level: 2 } },\n      { id: 'level2-4', data: { label: 'L2-4', level: 2 } },\n      { id: 'level2-5', data: { label: 'L2-5', level: 2 } },\n      { id: 'level2-6', data: { label: 'L2-6', level: 2 } },\n      { id: 'level2-7', data: { label: 'L2-7', level: 2 } },\n      { id: 'level2-8', data: { label: 'L2-8', level: 2 } },\n      { id: 'level2-9', data: { label: 'L2-9', level: 2 } },\n      { id: 'level2-10', data: { label: 'L2-10', level: 2 } },\n      { id: 'level2-11', data: { label: 'L2-11', level: 2 } },\n    ],\n    edges: [\n      { id: 'e-center-level1-0', source: 'center', target: 'level1-0' },\n      { id: 'e-center-level1-1', source: 'center', target: 'level1-1' },\n      { id: 'e-center-level1-2', source: 'center', target: 'level1-2' },\n      { id: 'e-center-level1-3', source: 'center', target: 'level1-3' },\n      { id: 'e-center-level1-4', source: 'center', target: 'level1-4' },\n      { id: 'e-center-level1-5', source: 'center', target: 'level1-5' },\n      { id: 'e-level1-0-level2-0', source: 'level1-0', target: 'level2-0' },\n      { id: 'e-level1-0-level2-1', source: 'level1-0', target: 'level2-1' },\n      { id: 'e-level1-1-level2-2', source: 'level1-1', target: 'level2-2' },\n      { id: 'e-level1-1-level2-3', source: 'level1-1', target: 'level2-3' },\n      { id: 'e-level1-2-level2-4', source: 'level1-2', target: 'level2-4' },\n      { id: 'e-level1-2-level2-5', source: 'level1-2', target: 'level2-5' },\n      { id: 'e-level1-3-level2-6', source: 'level1-3', target: 'level2-6' },\n      { id: 'e-level1-3-level2-7', source: 'level1-3', target: 'level2-7' },\n      { id: 'e-level1-4-level2-8', source: 'level1-4', target: 'level2-8' },\n      { id: 'e-level1-4-level2-9', source: 'level1-4', target: 'level2-9' },\n      { id: 'e-level1-5-level2-10', source: 'level1-5', target: 'level2-10' },\n      { id: 'e-level1-5-level2-11', source: 'level1-5', target: 'level2-11' },\n    ],\n  },\n  layout: {\n    type: 'concentric',\n    nodeSize: 32,\n    sortBy: 'degree',\n    preventOverlap: true,\n  },\n  behaviors: ['zoom-canvas', 'drag-canvas', 'drag-element'],\n  animation: false,\n});\n\ngraph.render();\n",
        "paraId": 4,
        "tocIndex": 3
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
//# sourceMappingURL=docs_manual_layout_ConcentricLayout_en_md_q_hK4X-async.js.map