((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ForceLayout.en.md?type=text'],
{ "docs/manual/layout/ForceLayout.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/ForceLayout.en.md?watch=parent");
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
        "value": "Force-directed layout is a graph layout algorithm based on physical simulation that determines node positions by simulating attraction and repulsion forces between nodes. This layout is particularly suitable for displaying complex relationship networks, such as social networks and knowledge graphs.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The force-directed layout automatically calculates and adjusts node positions to maintain appropriate distances between connected nodes while minimizing edge crossings. During the layout process, it simulates a physical system where nodes repel each other like charged particles, and edges connect nodes like springs.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Key features of force-directed layout include:",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Automatic Arrangement",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": ": No need to manually set node positions, the system automatically finds suitable positions",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Real-time Adjustment",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": ": When you drag a node, other nodes will adjust their positions in real-time",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Flexible Configuration",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": ":\n",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Can adjust attraction and repulsion forces between nodes",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "Can set edge lengths",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "Can prevent node overlap",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "Animation Effects",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": ": Smooth animations during node movement make changes more natural",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Force-directed layout is a graph layout algorithm based on physical simulation that models nodes and edges as a physical system:",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Nodes are treated as physical particles",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Edges are treated as springs",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "The entire system reaches its lowest energy state through physical simulation",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Physical Model",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": ": Coulomb's Law",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Function",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": ": Prevents node overlap and ensures more uniform node distribution, where ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "factor",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " and ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "coulombDisScale",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " control the overall strength and range of repulsion.",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Formula",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ":\n",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "k: Repulsion coefficient (",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "factor",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " / ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "coulombDisScale²",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": ")",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "q1,q2: Node strength (",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "nodeStrength",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": ")",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "r: Distance between nodes",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Physical Model",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": ": Hooke's Law",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "Function",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": ": Simulates edge tension, moving nodes along edge directions, where ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "edgeStrength",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " and ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "linkDistance",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " control edge \"stiffness\" and length.",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "Formula",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": ":\n",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "ka: Edge attraction strength (",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "edgeStrength",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": ")",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "L: Edge length (",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "linkDistance",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": ")",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "r: Actual edge length",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "Physical Model",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": ": Newton's Universal Law of Gravitation",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "Function",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": ": Attracts nodes toward the canvas center or cluster centers, where ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "gravity",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " and ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "center",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " control gravity strength and center point position",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Formula",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": ":\n",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "G: Gravitational constant (",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "gravity",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": ")",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "xc: Center point coordinates (",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "center",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": ")",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "mass: Node mass (",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "nodeSize",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": ")",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "Physical Model",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": ": Force interactions, generating acceleration",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "Function",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": ": Repulsion, edge attraction, and centripetal force work together, affecting node movement through acceleration superposition, ultimately reaching the lowest energy state.",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "Formula",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": ":\n",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "Formula",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": ":\n",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "v: Velocity",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "a: Acceleration",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "dt: Time step (",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "interval",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": ")",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "damping: Damping coefficient (",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "damping",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": ")",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "Function",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "Controls node movement stability",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "Damping coefficient prevents system oscillation",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "Time step affects displacement per iteration",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "Formula",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": ":\n",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "x: Node position",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "v: Node velocity",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "dt: Time step (",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "interval",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": ")",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "Function",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "Updates node position based on velocity",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "Ensures motion continuity",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "Prevents node overlap through ",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "preventOverlap",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "Formula",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": ":\n",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "n: Number of nodes in cluster",
        "paraId": 29,
        "tocIndex": 11
    },
    {
        "value": "(xi​,yi​): Position of each node",
        "paraId": 29,
        "tocIndex": 11
    },
    {
        "value": "Function",
        "paraId": 30,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 30,
        "tocIndex": 11
    },
    {
        "value": "Calculates cluster center",
        "paraId": 31,
        "tocIndex": 11
    },
    {
        "value": "Centripetal force pulls nodes toward their cluster center",
        "paraId": 31,
        "tocIndex": 11
    },
    {
        "value": "Cluster center can change dynamically",
        "paraId": 31,
        "tocIndex": 11
    },
    {
        "value": "Formula",
        "paraId": 32,
        "tocIndex": 12
    },
    {
        "value": ":\n",
        "paraId": 32,
        "tocIndex": 12
    },
    {
        "value": "s: Cluster strength (",
        "paraId": 33,
        "tocIndex": 12
    },
    {
        "value": "clusterNodeStrength",
        "paraId": 33,
        "tocIndex": 12
    },
    {
        "value": ")",
        "paraId": 33,
        "tocIndex": 12
    },
    {
        "value": "xc​: Cluster center",
        "paraId": 33,
        "tocIndex": 12
    },
    {
        "value": "Function",
        "paraId": 34,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 34,
        "tocIndex": 12
    },
    {
        "value": "Controls cluster compactness",
        "paraId": 35,
        "tocIndex": 12
    },
    {
        "value": "Higher cluster strength means tighter clusters",
        "paraId": 35,
        "tocIndex": 12
    },
    {
        "value": "Can be dynamically adjusted based on node properties",
        "paraId": 35,
        "tocIndex": 12
    },
    {
        "value": "Formula",
        "paraId": 36,
        "tocIndex": 13
    },
    {
        "value": ":\n",
        "paraId": 36,
        "tocIndex": 13
    },
    {
        "value": "a: Acceleration",
        "paraId": 37,
        "tocIndex": 13
    },
    {
        "value": "F: Force (repulsion, edge attraction, centripetal force)",
        "paraId": 37,
        "tocIndex": 13
    },
    {
        "value": "mass: Node mass",
        "paraId": 37,
        "tocIndex": 13
    },
    {
        "value": "Function",
        "paraId": 38,
        "tocIndex": 13
    },
    {
        "value": ":",
        "paraId": 38,
        "tocIndex": 13
    },
    {
        "value": "Nodes with larger mass move less",
        "paraId": 39,
        "tocIndex": 13
    },
    {
        "value": "Nodes with smaller mass move more",
        "paraId": 39,
        "tocIndex": 13
    },
    {
        "value": "Mass calculation can be customized through ",
        "paraId": 39,
        "tocIndex": 13
    },
    {
        "value": "getMass",
        "paraId": 39,
        "tocIndex": 13
    },
    {
        "value": "Formula",
        "paraId": 40,
        "tocIndex": 14
    },
    {
        "value": ":\n",
        "paraId": 40,
        "tocIndex": 14
    },
    {
        "value": "m: Node mass",
        "paraId": 41,
        "tocIndex": 14
    },
    {
        "value": "v: Node velocity",
        "paraId": 41,
        "tocIndex": 14
    },
    {
        "value": "Function",
        "paraId": 42,
        "tocIndex": 14
    },
    {
        "value": ":",
        "paraId": 42,
        "tocIndex": 14
    },
    {
        "value": "Monitors layout convergence",
        "paraId": 43,
        "tocIndex": 14
    },
    {
        "value": "System stabilizes when energy approaches zero",
        "paraId": 43,
        "tocIndex": 14
    },
    {
        "value": "Formula",
        "paraId": 44,
        "tocIndex": 15
    },
    {
        "value": ":\n",
        "paraId": 44,
        "tocIndex": 15
    },
    {
        "value": "Function",
        "paraId": 45,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 45,
        "tocIndex": 15
    },
    {
        "value": "Controls iteration count",
        "paraId": 46,
        "tocIndex": 15
    },
    {
        "value": "Stops when movement is below threshold",
        "paraId": 46,
        "tocIndex": 15
    },
    {
        "value": "Can choose between mean, maximum, or minimum through ",
        "paraId": 46,
        "tocIndex": 15
    },
    {
        "value": "distanceThresholdMode",
        "paraId": 46,
        "tocIndex": 15
    },
    {
        "value": "graph TD\n    A[Input] --> B[Initialize Parameters];\n    B --> C[Build Layout Calculation];\n    C --> D[Iterative Calculation];\n    D --> E{Converged?};\n    E -->|Yes| F[Output Layout];\n    E -->|No| G[Calculate Repulsion];\n    G --> H[Calculate Edge Attraction];\n    H --> I[Calculate Centripetal Force];\n    I --> J[Update Velocity];\n    J --> K[Update Position];\n    K --> D;\n",
        "paraId": 47,
        "tocIndex": 16
    },
    {
        "value": "Based on the physical characteristics of force-directed layout, the following configuration options are available:",
        "paraId": 48,
        "tocIndex": 17
    },
    {
        "value": "Property",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Description",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Default Value",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Required",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "type",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Layout type",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "force",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "✓",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "dimensions",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Layout dimensions, 2 for 2D layout, 3 for 3D layout",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "2",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "width",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Layout width",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Canvas width",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "height",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Layout height",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Canvas height",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "center",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Layout center point",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Graph center",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "maxIteration",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Maximum iteration count, if 0 will auto-adjust",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "0",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "minMovement",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Stop iteration when average movement distance is less than 0.4",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "0.4",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "distanceThresholdMode",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Movement distance calculation mode: mean: stop when average movement distance is less than ",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "minMovement",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "; max: stop when maximum movement distance is less than ",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "minMovement",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "; min: stop when minimum movement distance is less than ",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "minMovement",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "mean",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "maxDistance",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Maximum distance",
        "paraId": 49,
        "tocIndex": 18
    },
    {
        "value": "Property",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "Description",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "Default Value",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "Required",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "nodeStrength",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "Node force, positive values represent attraction between nodes, negative values represent repulsion",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "1000",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "factor",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "Repulsion coefficient, larger values mean stronger repulsion",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "1",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "coulombDisScale",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "Coulomb coefficient, a factor for repulsion, larger values mean stronger repulsion between nodes",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "0.005",
        "paraId": 50,
        "tocIndex": 20
    },
    {
        "value": "Property",
        "paraId": 51,
        "tocIndex": 21
    },
    {
        "value": "Description",
        "paraId": 51,
        "tocIndex": 21
    },
    {
        "value": "Default Value",
        "paraId": 51,
        "tocIndex": 21
    },
    {
        "value": "Required",
        "paraId": 51,
        "tocIndex": 21
    },
    {
        "value": "edgeStrength",
        "paraId": 51,
        "tocIndex": 21
    },
    {
        "value": "Edge force (attraction) strength, fixed force or callback function to dynamically return different edge forces",
        "paraId": 51,
        "tocIndex": 21
    },
    {
        "value": "500",
        "paraId": 51,
        "tocIndex": 21
    },
    {
        "value": "linkDistance",
        "paraId": 51,
        "tocIndex": 21
    },
    {
        "value": "Edge length, fixed length or callback function to dynamically return different edge lengths",
        "paraId": 51,
        "tocIndex": 21
    },
    {
        "value": "200",
        "paraId": 51,
        "tocIndex": 21
    },
    {
        "value": "Property",
        "paraId": 52,
        "tocIndex": 22
    },
    {
        "value": "Description",
        "paraId": 52,
        "tocIndex": 22
    },
    {
        "value": "Default Value",
        "paraId": 52,
        "tocIndex": 22
    },
    {
        "value": "Required",
        "paraId": 52,
        "tocIndex": 22
    },
    {
        "value": "gravity",
        "paraId": 52,
        "tocIndex": 22
    },
    {
        "value": "Center force strength, the force attracting all nodes to the center. Larger values mean more compact layout",
        "paraId": 52,
        "tocIndex": 22
    },
    {
        "value": "10",
        "paraId": 52,
        "tocIndex": 22
    },
    {
        "value": "centripetalOptions",
        "paraId": 52,
        "tocIndex": 22
    },
    {
        "value": "Centripetal force configuration, including center and strength for leaf nodes, isolated nodes, and other nodes. leaf: leaf node centripetal force; single: single node centripetal force; others: other node centripetal force; center: custom center point function",
        "paraId": 52,
        "tocIndex": 22
    },
    {
        "value": "[0, 0]",
        "paraId": 52,
        "tocIndex": 22
    },
    {
        "value": "Property",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "Description",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "Default Value",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "Required",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "clustering",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "Whether to cluster all nodes. If true, will use the field specified by nodeClusterBy in node data for clustering. centripetalOptions.single, centripetalOptions.leaf, and centripetalOptions.others will use the value returned by getClusterNodeStrength; leaf and centripetalOptions.center will use the average center of all nodes in the current cluster",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "false",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "nodeClusterBy",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "Specifies the field name in node data for clustering. Takes effect when clustering is true. Automatically generates centripetalOptions, can be used with clusterNodeStrength",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "clusterNodeStrength",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "Used with clustering and nodeClusterBy to specify the strength of the cluster centripetal force",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "leafCluster",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "Whether to cluster leaf nodes. If true, centripetalOptions.single will be 100; centripetalOptions.leaf will use the value returned by getClusterNodeStrength; getClusterNodeStrength.center will return the average center of all leaf nodes",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "false",
        "paraId": 53,
        "tocIndex": 23
    },
    {
        "value": "Property",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Description",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Default Value",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Required",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "damping",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Damping coefficient, range [0, 1]. Larger values mean slower speed decrease",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "0.9",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "maxSpeed",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Maximum movement length per iteration",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "200",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "interval",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Controls the movement speed of each node per iteration",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "0.02",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "preventOverlap",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Whether to prevent overlap. Must be used with nodeSize or data.size in node data. Only when data.size is set in the data or nodeSize is configured in the layout with the same value as the node size in the graph, collision detection for node overlap can be performed",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "true",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "nodeSize",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Node size (diameter). Used for collision detection to prevent node overlap. Fixed size or callback function to dynamically return node size",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "nodeSpacing",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Takes effect when preventOverlap is true. Minimum spacing between node edges to prevent overlap. Can be a callback to set different spacing for different nodes",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "collideStrength",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Strength of anti-overlap force, range [0, 1]",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "1",
        "paraId": 54,
        "tocIndex": 24
    },
    {
        "value": "Property",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "Description",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "Default Value",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "Required",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "getMass",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "Callback for the mass of each node. The parameter is the node's internal data, and the return value is the mass",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "getCenter",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "Callback for the x, y, and strength of the centripetal force for each node. If not specified, no extra centripetal force is applied",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "onTick",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "Callback for each iteration",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "monitor",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "Callback for monitoring each iteration. energy indicates the convergence energy of the layout. May incur extra computation if configured; if not configured, no computation is performed",
        "paraId": 55,
        "tocIndex": 25
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  layout: {\n    type: 'force',\n    // Prevent node overlap\n    preventOverlap: true,\n    // Node size\n    nodeSize: 20,\n    // Layout width\n    width: 800,\n    // Layout height\n    height: 600,\n  },\n});\n",
        "paraId": 56,
        "tocIndex": 27
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'force',\n    // Prevent node overlap\n    preventOverlap: true,\n    // Node size\n    nodeSize: 20,\n  },\n});\n",
        "paraId": 57,
        "tocIndex": 28
    },
    {
        "value": "This example demonstrates how to create a basic force-directed graph using force-directed layout.",
        "paraId": 58,
        "tocIndex": 29
    },
    {
        "value": "import { Graph, NodeEvent } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', label: 'Node 1', size: 30 },\n    { id: 'node2', label: 'Node 2', size: 20 },\n    { id: 'node3', label: 'Node 3', size: 20 },\n    { id: 'node4', label: 'Node 4', size: 20 },\n    { id: 'node5', label: 'Node 5', size: 30 },\n    { id: 'node6', label: 'Node 6', size: 20 },\n  ],\n  edges: [\n    { source: 'node1', target: 'node2' },\n    { source: 'node1', target: 'node3' },\n    { source: 'node2', target: 'node4' },\n    { source: 'node3', target: 'node4' },\n    { source: 'node4', target: 'node5' },\n    { source: 'node5', target: 'node6' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  autoFit: 'view',\n  modes: {\n    default: ['drag-canvas', 'zoom-canvas'],\n  },\n  layout: {\n    type: 'force',\n    // Prevent node overlap\n    preventOverlap: true,\n    // Node size\n    nodeSize: 20,\n    // Centripetal force\n    gravity: 0.9,\n    // Iteration count\n    iterations: 100,\n  },\n  node: {\n    style: {\n      size: (d) => d.size,\n      fill: '#9EC9FF',\n      stroke: '#69C8FF',\n      label: (d) => d.label,\n      labelPlacement: 'center',\n      labelFill: '#333',\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#e2e2e2',\n    },\n  },\n});\n\ngraph.on(NodeEvent.CLICK, async (e) => {\n  const nodeId = e.target.id;\n  graph.updateNodeData([{ id: nodeId, size: 200 }]);\n  await graph.render();\n});\n\ngraph.render();\n",
        "paraId": 59,
        "tocIndex": 29
    },
    {
        "value": "Key configuration explanations:",
        "paraId": 60,
        "tocIndex": 29
    },
    {
        "value": "preventOverlap",
        "paraId": 61,
        "tocIndex": 29
    },
    {
        "value": ": Enable node overlap detection",
        "paraId": 61,
        "tocIndex": 29
    },
    {
        "value": "nodeSize",
        "paraId": 61,
        "tocIndex": 29
    },
    {
        "value": ": Set node size",
        "paraId": 61,
        "tocIndex": 29
    },
    {
        "value": "gravity",
        "paraId": 61,
        "tocIndex": 29
    },
    {
        "value": ": Set node centripetal force",
        "paraId": 61,
        "tocIndex": 29
    },
    {
        "value": "iterations",
        "paraId": 61,
        "tocIndex": 29
    },
    {
        "value": ": Set layout calculation precision",
        "paraId": 61,
        "tocIndex": 29
    },
    {
        "value": "You can also refer to ",
        "paraId": 62,
        "tocIndex": 29
    },
    {
        "value": "View Examples",
        "paraId": 62,
        "tocIndex": 29
    },
    {
        "value": " for more usage examples.",
        "paraId": 62,
        "tocIndex": 29
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
//# sourceMappingURL=docs_manual_layout_ForceLayout_en_md_q_hK4X-async.js.map