((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/state.en.md?type=text'],
{ "docs/manual/element/state.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/state.en.md?watch=parent");
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
        "value": "Element State refers to the visual representation of elements (nodes, edges, combos) in a graph under different interaction scenarios. For example, when a user clicks on a node, the node might enter a \"selected\" state and change color; when the mouse hovers over an edge, the edge might enter a \"highlight\" state and become bold.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Simply put, states allow elements to dynamically change their appearance based on user operations or business logic.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Multiple State Coexistence",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ": An element can have multiple states simultaneously, such as being both \"selected\" and \"highlighted\"",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Style Stacking",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ": Styles from multiple states are stacked together, with later-set state styles having higher priority",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Complete Customization",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ": Besides built-in states, you can create any custom states that meet your business requirements",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "G6 provides some commonly used built-in states that you can use directly:",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "State Name",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Typical Use Cases",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "selected",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Selected state",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "When user clicks to select elements",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "active",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Active state",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Currently interacting element",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "highlight",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Highlight state",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Elements that need emphasis",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "inactive",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Inactive state",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Dimmed display of unfocused elements",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "disabled",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Disabled state",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Non-interactive elements",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "💡 ",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Tip",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": ": These built-in states are not mandatory. You can completely define your own state names according to business requirements.",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Configure corresponding styles for different states when creating a graph instance:",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "const graph = new Graph({\n  // Node state style configuration\n  node: {\n    // Default style (style when no state is applied)\n    style: {\n      fill: '#C6E5FF',\n      stroke: '#5B8FF9',\n      lineWidth: 1,\n    },\n    // Styles for various states\n    state: {\n      selected: {\n        fill: '#95D6FB',\n        stroke: '#1890FF',\n        lineWidth: 2,\n        shadowColor: '#1890FF',\n        shadowBlur: 10,\n      },\n      highlight: {\n        stroke: '#FF6A00',\n        lineWidth: 2,\n      },\n      disabled: {\n        fill: '#ECECEC',\n        stroke: '#BFBFBF',\n        opacity: 0.5,\n      },\n    },\n  },\n\n  // Edge state style configuration\n  edge: {\n    style: {\n      stroke: '#E2E2E2',\n      lineWidth: 1,\n    },\n    state: {\n      selected: {\n        stroke: '#1890FF',\n        lineWidth: 2,\n      },\n      highlight: {\n        stroke: '#FF6A00',\n        lineWidth: 3,\n      },\n    },\n  },\n\n  // Combo state style configuration\n  combo: {\n    style: {\n      fill: '#F0F0F0',\n      stroke: '#D9D9D9',\n    },\n    state: {\n      selected: {\n        stroke: '#1890FF',\n        lineWidth: 2,\n      },\n    },\n  },\n});\n",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "You can create any custom states that meet your business requirements:",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    style: {\n      fill: '#C6E5FF',\n      stroke: '#5B8FF9',\n    },\n    state: {\n      // Custom state: error\n      error: {\n        fill: '#FFEBE6',\n        stroke: '#FF4D4F',\n        lineWidth: 2,\n        lineDash: [4, 4], // Dashed border\n      },\n      // Custom state: success\n      success: {\n        fill: '#F6FFED',\n        stroke: '#52C41A',\n        lineWidth: 2,\n      },\n      // Custom state: warning\n      warning: {\n        fill: '#FFFBE6',\n        stroke: '#FAAD14',\n        lineWidth: 2,\n        // Add icon\n        icon: {\n          show: true,\n          text: '⚠️',\n          fontSize: 16,\n        },\n      },\n    },\n  },\n});\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "Set initial states for elements in data:",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "const data = {\n  nodes: [\n    {\n      id: 'node1',\n      states: ['selected'], // Initially in selected state\n    },\n    {\n      id: 'node2',\n      states: ['disabled'], // Initially in disabled state\n    },\n    {\n      id: 'node3',\n      states: ['highlight', 'active'], // Initially has multiple states\n    },\n  ],\n  edges: [\n    {\n      source: 'node1',\n      target: 'node2',\n      states: ['highlight'], // Initial state of the edge\n    },\n  ],\n};\n\ngraph.setData(data);\n",
        "paraId": 11,
        "tocIndex": 7
    },
    {
        "value": "Dynamically change element states through API:",
        "paraId": 12,
        "tocIndex": 8
    },
    {
        "value": "// Set a single state for a single element\ngraph.setElementState('node1', 'selected');\n\n// Set multiple states for a single element\ngraph.setElementState('node2', ['highlight', 'active']);\n\n// Batch set states for multiple elements\ngraph.setElementState({\n  node1: ['selected'],\n  node2: ['highlight'],\n  edge1: ['active'],\n});\n",
        "paraId": 13,
        "tocIndex": 8
    },
    {
        "value": "When an element has multiple states, styles are stacked in order:",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "// Assume a node has both selected and highlight states\ngraph.setElementState('node1', ['selected', 'highlight']);\n\n// Final style = default style + selected state style + highlight state style\n// If there are style conflicts, later state styles will override earlier ones\n",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "Restore elements to default state (no states):",
        "paraId": 16,
        "tocIndex": 11
    },
    {
        "value": "// Clear all states of a single element\ngraph.setElementState('node1', []);\n\n// Batch clear states of multiple elements\ngraph.setElementState({\n  node1: [],\n  node2: [],\n  edge1: [],\n});\n",
        "paraId": 17,
        "tocIndex": 11
    },
    {
        "value": "If an element has multiple states, you can clear only some of them:",
        "paraId": 18,
        "tocIndex": 12
    },
    {
        "value": "// Assume node1 currently has ['selected', 'highlight', 'active'] three states\n// Now only want to keep 'selected' state, clear other states\ngraph.setElementState('node1', ['selected']);\n\n// Or get current states, then filter out unwanted states\nconst currentStates = graph.getElementState('node1');\nconst newStates = currentStates.filter((state) => state !== 'highlight');\ngraph.setElementState('node1', newStates);\n",
        "paraId": 19,
        "tocIndex": 12
    },
    {
        "value": "// Clear 'highlight' state from all nodes\nconst allNodes = graph.getNodeData();\nconst stateUpdates = {};\n\nallNodes.forEach((node) => {\n  const currentStates = graph.getElementState(node.id);\n  const newStates = currentStates.filter((state) => state !== 'highlight');\n  stateUpdates[node.id] = newStates;\n});\n\ngraph.setElementState(stateUpdates);\n",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "// Get all states of a specified element\nconst states = graph.getElementState('node1');\nconsole.log(states); // For example: ['selected', 'highlight']\n\n// If element has no states, returns empty array\nconsole.log(states); // []\n",
        "paraId": 21,
        "tocIndex": 15
    },
    {
        "value": "// Get all node data in 'selected' state\nconst selectedNodes = graph.getElementDataByState('node', 'selected');\n\n// Get all edge data in 'highlight' state\nconst highlightEdges = graph.getElementDataByState('edge', 'highlight');\n",
        "paraId": 22,
        "tocIndex": 16
    },
    {
        "value": "// Check if element is in specific state\nconst states = graph.getElementState('node1');\nconst isSelected = states.includes('selected');\nconst isHighlight = states.includes('highlight');\n\nconsole.log('Is node selected:', isSelected);\nconsole.log('Is node highlighted:', isHighlight);\n",
        "paraId": 23,
        "tocIndex": 17
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
//# sourceMappingURL=docs_manual_element_state_en_md_q_hK4X-async.js.map