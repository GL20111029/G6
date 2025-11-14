((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/overview.en.md?type=text'],
{ "docs/manual/element/overview.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/overview.en.md?watch=parent");
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
        "value": "The core of G6 charts is composed of three basic elements: ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Node",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ", ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Edge",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ", and ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Combo",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ". These elements are the fundamental units for building complex graphical networks.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Nodes",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " represent entities or concepts in the graph, such as people, places, objects, etc. G6 provides a rich set of built-in node types:",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "G6 also supports ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "defining nodes using React",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " or ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "custom nodes",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " to meet specific needs.",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Edges",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": " represent the connections between nodes, such as friendships, transactions, etc. G6 has multiple built-in edge types:",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "When built-in edges do not meet the requirements, complex connection expressions can be achieved through ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "custom edges",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ".",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Combos",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " are special elements that can contain nodes and other combos, used to represent collections, groups, or hierarchical relationships. G6 has two built-in combo types:",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Circle Combo",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "(",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "circle",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "): Suitable for compact grouping",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Rectangle Combo",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "(",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "rect",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "): Suitable for regular layout grouping",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Combos support nesting, dragging, expanding/collapsing, and other interactions, and more complex container behaviors can be achieved through ",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "custom combos",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": ".",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Each element is composed of one or more basic shapes. Shapes are the smallest graphical units in G6, including ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "rectangle",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "circle",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "text",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "path",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": ", etc.",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "For example:",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "A node may consist of a background shape (such as a circle) and a text label",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "An edge may consist of a path, arrow, and text label",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "A combo may consist of a container shape, title text, and expand/collapse button",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "For more information about shapes, see ",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Shape Overview",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": " and ",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Shape Style Properties",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ".",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Element State",
        "paraId": 25,
        "tocIndex": 5
    },
    {
        "value": " is a powerful mechanism for displaying visual changes of elements in different interactions or business scenarios. G6 provides a complete state management system:",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "Preset States",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ": ",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "selected",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ", ",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "highlight",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ", ",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "active",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ", etc.",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "State Overlay",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ": Elements can have multiple states simultaneously, with styles overlaying according to priority",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "Custom States",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ": Any state can be defined according to business needs",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "G6 5.x adopts a flat configuration structure, where all element configurations are at the same level, making it easy to find and manage:",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "{\n  node: {\n    // Default node style\n    style: {\n      fill: 'orange',\n      labelText: 'node',\n    },\n    // Node styles in different states\n    state: {\n      selected: {\n        stroke: '#1890FF',\n        lineWidth: 2,\n      }\n    }\n  },\n  edge: {\n    // Default edge style\n    style: {\n      stroke: '#aaa',\n    },\n    // Edge styles in different states\n    state: {\n      highlight: {\n        stroke: 'red',\n      }\n    }\n  },\n  combo: {\n    // Default combo style\n    style: {\n      fill: 'lightblue',\n      stroke: 'blue',\n    }\n  }\n};\n",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "There are three configuration methods, in order of priority from high to low:",
        "paraId": 30,
        "tocIndex": 6
    },
    {
        "value": "Dynamic configuration using instance methods",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": ": such as ",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "graph.setNode()",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": ", ",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "graph.setEdge()",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": ", ",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "graph.setCombo()",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Global configuration when instantiating the graph",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": ": specify configuration items in ",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "new Graph()",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "Configuration in data",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": ": set in the data objects of nodes, edges, and combos",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "In editors like VSCode, you can see all configurable properties of elements and search based on keywords:",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "G6 provides powerful extension capabilities to meet various customization needs:",
        "paraId": 33,
        "tocIndex": 7
    },
    {
        "value": "Custom Nodes",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": ": ",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "Custom Node Guide",
        "paraId": 35,
        "tocIndex": 7
    },
    {
        "value": "Custom Edges",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": ": ",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "Custom Edge Guide",
        "paraId": 36,
        "tocIndex": 7
    },
    {
        "value": "Custom Combos",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": ": ",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "Custom Combo Guide",
        "paraId": 37,
        "tocIndex": 7
    },
    {
        "value": "React Nodes",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": ": ",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "Define Nodes Using React",
        "paraId": 38,
        "tocIndex": 7
    },
    {
        "value": "3D Extension",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": ": Use 3D nodes through ",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "@antv/g6-extension-3d",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "Built-in Node Library",
        "paraId": 39,
        "tocIndex": 9
    },
    {
        "value": "Built-in Edge Library",
        "paraId": 40,
        "tocIndex": 10
    },
    {
        "value": "Built-in Combo Library",
        "paraId": 41,
        "tocIndex": 11
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
//# sourceMappingURL=docs_manual_element_overview_en_md_q_hK4X-async.js.map