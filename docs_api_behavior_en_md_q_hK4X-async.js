((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/behavior.en.md?type=text'],
{ "docs/api/behavior.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/behavior.en.md?watch=parent");
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
        "value": "Behavior is a core building block of G6, precisely defining the interaction between users and the graph. Each Behavior plugin is a highly encapsulated functional unit, integrating event listening, state management, and response handling logic for specific scenarios.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6's built-in Behaviors cover most common interaction needs and provide a flexible extension mechanism, allowing developers to create customized interaction experiences based on business scenarios. For a complete list of behavior types, configuration options, and development examples, please refer to the ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Behavior Overview",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " section.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Get all configured behaviors in the current graph.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getBehaviors(): BehaviorOptions;\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Return Value",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "BehaviorOptions",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": All configured behaviors in the current graph",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Example",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "// Get all current behaviors\nconst behaviors = graph.getBehaviors();\nconsole.log('Current graph behaviors:', behaviors);\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Set the behaviors of the graph, replacing all existing behaviors.",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "setBehaviors(behaviors: BehaviorOptions | ((prev: BehaviorOptions) => BehaviorOptions)): void;\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Parameters",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Parameter",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "behaviors",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "New behavior configuration, or a function returning new configuration based on the current one",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "BehaviorOptions",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": " | (prev: BehaviorOptions) => BehaviorOptions",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Note",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "The set behaviors will completely replace the original ones. To add new behaviors, you can use functional updates:",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "graph.setBehaviors((behaviors) => [...behaviors, { type: 'zoom-canvas' }]);\n",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "Example 1",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": ": Set basic behaviors",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "// Set basic behaviors\ngraph.setBehaviors([\n  'drag-canvas', // Drag canvas\n  'zoom-canvas', // Zoom canvas\n  'drag-element', // Drag element\n]);\n",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "Example 2",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": ": Set behaviors with configuration",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "graph.setBehaviors([\n  // String form (using default configuration)\n  'drag-canvas',\n\n  // Object form (custom configuration)\n  {\n    type: 'zoom-canvas',\n    key: 'my-zoom', // Specify a unique identifier for subsequent updates\n    sensitivity: 1.5, // Zoom sensitivity\n  },\n\n  // Enable drag only on nodes\n  {\n    type: 'drag-element',\n    key: 'drag-node-only',\n    enable: (event) => event.targetType === 'node', // Enable drag only on nodes\n  },\n]);\n",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": "Example 3",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": ": Use functional updates",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "// Add new behavior\ngraph.setBehaviors((currentBehaviors) => [\n  ...currentBehaviors,\n  {\n    type: 'brush-select',\n    key: 'selection-brush',\n  },\n]);\n\n// Replace specific behavior\ngraph.setBehaviors((currentBehaviors) => {\n  // Filter out existing zoom behaviors\n  const filteredBehaviors = currentBehaviors.filter((behavior) => {\n    if (typeof behavior === 'string') return behavior !== 'zoom-canvas';\n    return behavior.type !== 'zoom-canvas';\n  });\n\n  // Add new zoom behavior configuration\n  return [\n    ...filteredBehaviors,\n    {\n      type: 'zoom-canvas',\n      key: 'new-zoom',\n      enableOptimize: true,\n    },\n  ];\n});\n",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "Update the configuration of a specific behavior, identified by the ",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ".",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "updateBehavior(behavior: UpdateBehaviorOption): void;\n",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 26,
        "tocIndex": 4
    },
    {
        "value": "Parameter",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "behavior",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Configuration of the behavior to update",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "UpdateBehaviorOption",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Note",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "To update a behavior, the original behavior configuration must specify the ",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": " field to accurately locate and update the behavior.",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "Example 1",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": ": Update behavior configuration",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": "// Specify key when initially setting behaviors\ngraph.setBehaviors([\n  {\n    type: 'zoom-canvas',\n    key: 'my-zoom-canvas',\n    sensitivity: 1.0,\n  },\n]);\n\n// Update behavior configuration\ngraph.updateBehavior({\n  key: 'my-zoom-canvas', // Specify the behavior to update\n  sensitivity: 2.0, // New zoom sensitivity\n  enableOptimize: true, // Add new configuration\n});\n",
        "paraId": 32,
        "tocIndex": 4
    },
    {
        "value": "Example 2",
        "paraId": 33,
        "tocIndex": 4
    },
    {
        "value": ": Disable/Enable behavior",
        "paraId": 33,
        "tocIndex": 4
    },
    {
        "value": "// Set behaviors with keys\ngraph.setBehaviors([\n  {\n    type: 'drag-canvas',\n    key: 'main-drag',\n  },\n  {\n    type: 'zoom-canvas',\n    key: 'main-zoom',\n  },\n]);\n\n// Disable drag functionality\ngraph.updateBehavior({\n  key: 'main-drag',\n  enable: false,\n});\n\n// Re-enable later\nsetTimeout(() => {\n  graph.updateBehavior({\n    key: 'main-drag',\n    enable: true,\n  });\n}, 5000);\n",
        "paraId": 34,
        "tocIndex": 4
    },
    {
        "value": "type BehaviorOptions = (string | CustomBehaviorOption | ((this: Graph) => CustomBehaviorOption))[];\n\ntype CustomBehaviorOption = {\n  // Interaction type\n  type: string;\n\n  // Interaction key, a unique identifier for identifying and further operating this interaction\n  key?: string;\n\n  // There may be other configuration items for different types of interactions\n  [configKey: string]: any;\n};\n",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "type UpdateBehaviorOption = {\n  // Unique identifier of the behavior to update\n  key: string;\n\n  // Other configuration items to update\n  [configKey: string]: unknown;\n};\n",
        "paraId": 36,
        "tocIndex": 7
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
//# sourceMappingURL=docs_api_behavior_en_md_q_hK4X-async.js.map