((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/D3ForceLayout.en.md?type=text'],
{ "docs/manual/layout/D3ForceLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/D3ForceLayout.en.md?watch=parent");
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
        "value": "The D3Force layout is a force-directed layout based on ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "d3-force",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ". It simulates physical forces (such as attraction, repulsion, collision, etc.) to make the graph reach a stable state with minimal energy.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The main features of this layout are:",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Automatic arrangement",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ": No need to manually set node positions, the system will automatically find suitable positions",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Real-time adjustment",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ": When you drag a node, other nodes will adjust their positions in real time",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Flexible configuration",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ":\n",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "You can adjust the attraction and repulsion between nodes",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "You can set the ideal length of edges",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "You can fix the positions of important nodes",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Animation effect",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ": Nodes move with smooth animation, making changes more natural",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "The D3Force layout simulates five different forces to achieve automatic layout. Imagine a physical world where these forces act simultaneously and eventually reach equilibrium:",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Note: The arrows of different colors in the diagram represent different types of forces. In the actual layout, these forces are invisible and also affected by other forces.",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Link Force",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Imagine nodes connected by rubber bands, which pull connected nodes to a suitable distance. The tightness of the rubber band is the force strength, and the ideal length is the distance we set.",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Many-Body Force",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Similar to magnets, it allows all nodes to attract or repel each other. When the force strength is negative, nodes repel each other (like like poles of magnets); when positive, they attract (like opposite poles). This force determines the density of the graph.",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Center Force",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Like all nodes are tied to the center of the canvas by an invisible string. This force prevents nodes from drifting too far and keeps the graph centered.",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Collision Force",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Treats nodes as solid balls. When nodes get too close, they automatically bounce apart. This force mainly prevents node overlap and improves readability.",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Radial Force",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Imagine an invisible ring that attracts nodes to the ring. By setting the radius and force strength, nodes can form a beautiful circular layout.",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Layout calculation is an iterative process with two key concepts:",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Like the \"energy\" of the layout, it determines how vigorously nodes move:",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Initial state",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ": Alpha = 1, nodes move vigorously",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "During calculation",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ": Alpha gradually decreases, node movement slows",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "End state",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ": When Alpha < alphaMin, nodes stop moving",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "Controls the number of times forces are applied in each calculation:",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "Effect",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": ": The larger the value, the more precise the layout, but the slower the computation",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "Adjustment",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": ":\n",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "Simple graphs: use the default value",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "Complex graphs: increase the number of iterations as needed",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "Real-time interaction: use fewer iterations",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "Tip: Iterations and alpha value work together. Increasing iterations makes each step more precise, while alpha controls the overall progress.",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Property",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Required",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "type",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Layout type",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "'d3-force'",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "✓",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "nodeSize",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Node size (diameter), for collision detection",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number | ((node, index, nodes) => number)",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "iterations",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Number of force iterations, higher is more precise",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "onTick",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Callback for each iteration, for real-time results",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "(data: LayoutMapping) => void",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "forceSimulation",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Custom force simulation, defaults to d3.js method",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Simulation<NodeDatum, EdgeDatum>",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "randomSource",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Function to generate random numbers",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "() => number",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Property",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Description",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Required",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "alpha",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Current convergence threshold, controls activity",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "1",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "alphaMin",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Minimum threshold to stop, when alpha < this, stop",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "0.001",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "alphaDecay",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Decay rate of alpha, [0, 1], 0.028 ≈ 300 iterations",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "0.028",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "alphaTarget",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Target alpha, system tries to converge to this value",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "velocityDecay",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Velocity decay factor, higher means slower movement",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "0.4",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Property",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "Description",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "Type",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "Default",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "Required",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "link.id",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "Function to generate edge id",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "(edge, index, edges) => string",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "(e) => e.id",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "link.distance",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "Ideal edge length",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "number | ((edge, index, edges) => number)",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "30",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "link.strength",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "Force strength, higher means closer to ideal",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "number | ((edge, index, edges) => number)",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "1",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "link.iterations",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "Number of link force iterations",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "1",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "Property",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Description",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Type",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Default",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Required",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "manyBody.strength",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Force strength, negative for repulsion, positive for attraction",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "number | ((node, index, nodes) => number)",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "-30",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "manyBody.theta",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Barnes-Hut accuracy, smaller is more accurate",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "0.9",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "manyBody.distanceMin",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Minimum distance, prevents excessive force",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "1",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "manyBody.distanceMax",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Maximum distance, beyond which no force is applied",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Infinity",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "Property",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "Description",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "Type",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "Default",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "Required",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "center.x",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "Center x coordinate",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "number",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "0",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "center.y",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "Center y coordinate",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "number",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "0",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "center.strength",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "Force strength, higher means closer to center",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "number",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "1",
        "paraId": 18,
        "tocIndex": 11
    },
    {
        "value": "Property",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "Description",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "Type",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "Default",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "Required",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "collide.radius",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "Collision radius, nodes repel if closer",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "number | ((node, index, nodes) => number)",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "10",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "collide.strength",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "Force strength, higher means stronger repulsion",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "1",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "collide.iterations",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "Number of collision iterations",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "1",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "Property",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "Description",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "Type",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "Default",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "Required",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "radial.strength",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "Force strength, higher means closer to radius",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "number | ((node, index, nodes) => number)",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "0.1",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "radial.radius",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "Target radius, nodes are attracted to circle",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "number | ((node, index, nodes) => number)",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "100",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "radial.x",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "Center x coordinate",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "number",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "0",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "radial.y",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "Center y coordinate",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "number",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "0",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "Property",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "Description",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "Type",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "Default",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "Required",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "x.strength",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "Force strength in x direction",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "number | ((node, index, nodes) => number)",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "-",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "x.x",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "Target x coordinate, nodes attracted here",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "number | ((node, index, nodes) => number)",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "-",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "Property",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "Description",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "Type",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "Default",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "Required",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "y.strength",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "Force strength in y direction",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "number | ((node, index, nodes) => number)",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "-",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "y.y",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "Target y coordinate, nodes attracted here",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "number | ((node, index, nodes) => number)",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "-",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "{\n  layout: {\n    type: 'd3-force',\n    collide: {\n      // Prevent nodes from overlapping by specifying a collision radius for each node.\n      radius: (d) => d.size / 2,\n    },\n  },\n}\n",
        "paraId": 23,
        "tocIndex": 17
    },
    {
        "value": "See ",
        "paraId": 24,
        "tocIndex": 17
    },
    {
        "value": "Example - Prevent Node Overlap in Force-Directed Layout",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "This example shows how to use force-directed layout for team clustering, where nodes of different teams automatically cluster together.",
        "paraId": 26,
        "tocIndex": 18
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 500,\n  height: 250,\n  autoFit: 'view',\n  data: {\n    nodes: [\n      // Team A\n      { id: 'A1', team: 'A', label: 'A1', size: 30 },\n      { id: 'A2', team: 'A', label: 'A2', size: 20 },\n      { id: 'A3', team: 'A', label: 'A3', size: 20 },\n      { id: 'A4', team: 'A', label: 'A4', size: 20 },\n      // Team B\n      { id: 'B1', team: 'B', label: 'B1', size: 30 },\n      { id: 'B2', team: 'B', label: 'B2', size: 20 },\n      { id: 'B3', team: 'B', label: 'B3', size: 20 },\n      { id: 'B4', team: 'B', label: 'B4', size: 20 },\n      // Team C\n      { id: 'C1', team: 'C', label: 'C1', size: 30 },\n      { id: 'C2', team: 'C', label: 'C2', size: 20 },\n      { id: 'C3', team: 'C', label: 'C3', size: 20 },\n      { id: 'C4', team: 'C', label: 'C4', size: 20 },\n    ],\n    edges: [\n      // Team A internal connections\n      { source: 'A1', target: 'A2' },\n      { source: 'A1', target: 'A3' },\n      { source: 'A1', target: 'A4' },\n      // Team B internal connections\n      { source: 'B1', target: 'B2' },\n      { source: 'B1', target: 'B3' },\n      { source: 'B1', target: 'B4' },\n      // Team C internal connections\n      { source: 'C1', target: 'C2' },\n      { source: 'C1', target: 'C3' },\n      { source: 'C1', target: 'C4' },\n      // Few connections between teams\n      { source: 'A1', target: 'B1' },\n      { source: 'B1', target: 'C1' },\n    ],\n  },\n  node: {\n    style: {\n      size: (d) => d.size,\n      fill: (d) => {\n        // Different colors for different teams\n        const colors = {\n          A: '#FF6B6B',\n          B: '#4ECDC4',\n          C: '#45B7D1',\n        };\n        return colors[d.team];\n      },\n      labelText: (d) => d.label,\n      labelPlacement: 'center',\n      labelFill: '#fff',\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#aaa',\n    },\n  },\n  layout: {\n    type: 'd3-force',\n    // Configure link force - nodes within the same team are closer\n    link: {\n      distance: (d) => {\n        // Shorter distance within the same team\n        if (d.source.team === d.target.team) return 50;\n        // Longer distance between teams\n        return 200;\n      },\n      strength: (d) => {\n        // Stronger connection within the same team\n        if (d.source.team === d.target.team) return 0.7;\n        // Weaker connection between teams\n        return 0.1;\n      },\n    },\n    // Configure many-body force - control repulsion between nodes\n    manyBody: {\n      strength: (d) => {\n        // Team leader nodes (ending with 1) have stronger repulsion\n        if (d.label.endsWith('1')) return -100;\n        return -30;\n      },\n    },\n    // Configure collision force - prevent node overlap\n    collide: {\n      radius: 35,\n      strength: 0.8,\n    },\n    // Configure center force - keep the graph centered\n    center: {\n      strength: 0.05,\n    },\n  },\n  behaviors: ['drag-element-force'],\n});\n\ngraph.render();\n",
        "paraId": 27,
        "tocIndex": 18
    },
    {
        "value": "Show full code",
        "paraId": 28
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\n// Create mock data with nodes from different teams\nconst data = {\n  nodes: [\n    // Team A\n    { id: 'A1', team: 'A', label: 'A1', size: 30 },\n    { id: 'A2', team: 'A', label: 'A2', size: 20 },\n    { id: 'A3', team: 'A', label: 'A3', size: 20 },\n    { id: 'A4', team: 'A', label: 'A4', size: 20 },\n    // Team B\n    { id: 'B1', team: 'B', label: 'B1', size: 30 },\n    { id: 'B2', team: 'B', label: 'B2', size: 20 },\n    { id: 'B3', team: 'B', label: 'B3', size: 20 },\n    { id: 'B4', team: 'B', label: 'B4', size: 20 },\n    // Team C\n    { id: 'C1', team: 'C', label: 'C1', size: 30 },\n    { id: 'C2', team: 'C', label: 'C2', size: 20 },\n    { id: 'C3', team: 'C', label: 'C3', size: 20 },\n    { id: 'C4', team: 'C', label: 'C4', size: 20 },\n  ],\n  edges: [\n    // Team A internal connections\n    { source: 'A1', target: 'A2' },\n    { source: 'A1', target: 'A3' },\n    { source: 'A1', target: 'A4' },\n    // Team B internal connections\n    { source: 'B1', target: 'B2' },\n    { source: 'B1', target: 'B3' },\n    { source: 'B1', target: 'B4' },\n    // Team C internal connections\n    { source: 'C1', target: 'C2' },\n    { source: 'C1', target: 'C3' },\n    { source: 'C1', target: 'C4' },\n    // Few connections between teams\n    { source: 'A1', target: 'B1' },\n    { source: 'B1', target: 'C1' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      size: (d) => d.size,\n      fill: (d) => {\n        // Different colors for different teams\n        const colors = {\n          A: '#FF6B6B',\n          B: '#4ECDC4',\n          C: '#45B7D1',\n        };\n        return colors[d.team];\n      },\n      labelText: (d) => d.label,\n      labelPlacement: 'center',\n      labelFill: '#fff',\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#aaa',\n    },\n  },\n  layout: {\n    type: 'd3-force',\n    // Configure link force - nodes within the same team are closer\n    link: {\n      distance: (d) => {\n        // Shorter distance within the same team\n        if (d.source.team === d.target.team) return 50;\n        // Longer distance between teams\n        return 200;\n      },\n      strength: (d) => {\n        // Stronger connection within the same team\n        if (d.source.team === d.target.team) return 0.7;\n        // Weaker connection between teams\n        return 0.1;\n      },\n    },\n    // Configure many-body force - control repulsion between nodes\n    manyBody: {\n      strength: (d) => {\n        // Team leader nodes (ending with 1) have stronger repulsion\n        if (d.label.endsWith('1')) return -100;\n        return -30;\n      },\n    },\n    // Configure collision force - prevent node overlap\n    collide: {\n      radius: 35,\n      strength: 0.8,\n    },\n    // Configure center force - keep the graph centered\n    center: {\n      strength: 0.05,\n    },\n  },\n  behaviors: ['drag-element-force'],\n});\n\ngraph.render();\n",
        "paraId": 29,
        "tocIndex": 18
    },
    {
        "value": "Main configuration notes:",
        "paraId": 30,
        "tocIndex": 18
    },
    {
        "value": "link.distance",
        "paraId": 31,
        "tocIndex": 18
    },
    {
        "value": ": Shorter within teams, longer between teams",
        "paraId": 31,
        "tocIndex": 18
    },
    {
        "value": "link.strength",
        "paraId": 31,
        "tocIndex": 18
    },
    {
        "value": ": Stronger within teams, weaker between teams",
        "paraId": 31,
        "tocIndex": 18
    },
    {
        "value": "manyBody.strength",
        "paraId": 31,
        "tocIndex": 18
    },
    {
        "value": ": Controls repulsion between nodes",
        "paraId": 31,
        "tocIndex": 18
    },
    {
        "value": "collide",
        "paraId": 31,
        "tocIndex": 18
    },
    {
        "value": ": Prevents node overlap",
        "paraId": 31,
        "tocIndex": 18
    },
    {
        "value": "center",
        "paraId": 31,
        "tocIndex": 18
    },
    {
        "value": ": Keeps the layout centered",
        "paraId": 31,
        "tocIndex": 18
    },
    {
        "value": "See also ",
        "paraId": 32,
        "tocIndex": 18
    },
    {
        "value": "Customize parameters for different nodes",
        "paraId": 33,
        "tocIndex": 18
    },
    {
        "value": ".",
        "paraId": 32,
        "tocIndex": 18
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
//# sourceMappingURL=docs_manual_layout_D3ForceLayout_en_md_q_hK4X-async.js.map