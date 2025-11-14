((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/D3Force3DLayout.en.md?type=text'],
{ "docs/manual/layout/D3Force3DLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/D3Force3DLayout.en.md?watch=parent");
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
        "value": "The D3Force3D layout is a 3D extension based on ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "d3-force",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ", which simulates physical forces in three-dimensional space to achieve automatic layout. Compared to 2D layouts, it adds force effects in the Z-axis direction, allowing richer data relationships to be displayed in 3D space.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "D3Force3D extends the traditional 2D force-directed layout with the following forces:",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "3D Centering Force",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": ": Pulls nodes toward the center point in 3D space",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "3D Collision Force",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": ": Prevents node overlap in 3D space",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "3D Radial Force",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": ": Attracts nodes to a sphere in 3D space",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "3D Axis Forces",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": ": Applies forces along the X, Y, and Z axes",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "The layout is computed through iterations, mainly involving the following parameters:",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "alpha",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ": The current energy value of the iteration, controlling node movement speed",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "alphaDecay",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ": The decay rate of the energy value",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "alphaMin",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ": The minimum energy value; iteration stops below this value",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "velocityDecay",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": ": The velocity decay factor",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Layout type",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "d3-force-3d",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "nodeSize",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Node size (diameter), used for collision detection",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "iterations",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Number of force iterations; higher means more precise but slower",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "numDimensions",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Number of dimensions (2 or 3)",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "3",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "forceSimulation",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Custom force simulation method",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Simulation<NodeDatum, EdgeDatum>",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onTick",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Callback for each iteration",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(data: LayoutMapping) => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "randomSource",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Random number generator",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Property",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Default",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Required",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "alpha",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Current convergence threshold",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "1",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "alphaDecay",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Convergence decay rate (0-1)",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "0.028",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "alphaMin",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Stop iteration threshold",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "0.001",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "alphaTarget",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Target convergence threshold",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "0",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "velocityDecay",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Velocity decay factor",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "0.4",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "Property",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "Description",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "Required",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "center.x",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "Center x coordinate",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "center.y",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "Center y coordinate",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "center.z",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "Center z coordinate",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "center.strength",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "Force strength",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "1",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "Property",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "Description",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "Type",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "Default",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "Required",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "collide.radius",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "Collision radius",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "10",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "collide.strength",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "Force strength",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "1",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "collide.iterations",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "Collision iterations",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "1",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "Property",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "Description",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "Type",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "Default",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "Required",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "link.id",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "Edge id generator",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "(edge: EdgeDatum, index: number, edges: EdgeDatum[]) => string",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "edge.id",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "link.distance",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "Ideal edge length",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "number | ((edge: EdgeDatum, index: number, edges: EdgeDatum[]) => number)",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "30",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "link.strength",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "Force strength",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "number | ((edge: EdgeDatum, index: number, edges: EdgeDatum[]) => number)",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "1",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "link.iterations",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "Link force iterations",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "number",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "1",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "Property",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Description",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Type",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Default",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Required",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "manyBody.strength",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Force strength",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "-30",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "manyBody.theta",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Barnes-Hut accuracy",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "0.9",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "manyBody.distanceMin",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Minimum interaction distance",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "1",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "manyBody.distanceMax",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Maximum interaction distance",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Infinity",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Property",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "Description",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "Type",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "Default",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "Required",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "radial.strength",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "Force strength",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "0.1",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "radial.radius",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "Target radius",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "100",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "radial.x",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "Sphere center x",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "0",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "radial.y",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "Sphere center y",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "0",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "radial.z",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "Sphere center z",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "0",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "Each axis can be configured separately:",
        "paraId": 12,
        "tocIndex": 12
    },
    {
        "value": "Property",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Description",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Type",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Default",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Required",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "x.strength",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "X-axis force strength",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "x.x",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Target x coordinate",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "y.strength",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Y-axis force strength",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "y.y",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Target y coordinate",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "z.strength",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Z-axis force strength",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "z.z",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Target z coordinate",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
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
//# sourceMappingURL=docs_manual_layout_D3Force3DLayout_en_md_q_hK4X-async.js.map