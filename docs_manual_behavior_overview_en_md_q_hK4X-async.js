((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/overview.en.md?type=text'],
{ "docs/manual/behavior/overview.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/overview.en.md?watch=parent");
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
        "value": "Behavior refers to the interactive operations between users and chart elements, such as dragging the canvas, selecting nodes, zooming the view, etc. Good behavior design allows users to explore and understand graph data more intuitively. ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Proper configuration of behaviors is a key step in building efficient and usable charts",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ".",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6 5.0 removed the concept of \"Behavior Mode\" (Mode), and directly lists the required behavior behaviors in ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "behaviors",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": ", simplifying the configuration. This makes behavior configuration more intuitive and easier to get started with.",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  behaviors: ['drag-canvas', 'zoom-canvas', 'click-select'],\n});\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "G6 provides a variety of built-in behaviors that are ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "ready to use without registration",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Category",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Behavior Name",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Registration Type",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Function Description",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Navigation",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Drag Canvas",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "drag-canvas",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Drag the entire canvas view",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Zoom Canvas",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "zoom-canvas",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Zoom the canvas view",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Scroll Canvas",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "scroll-canvas",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Scroll the canvas using the wheel",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Optimize Viewport Transform",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "optimize-viewport-transform",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Optimize view transform performance",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Selection",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Click Select",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "click-select",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Click to select graph elements",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Brush Select",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "brush-select",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Select elements by dragging a rectangular area",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Lasso Select",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "lasso-select",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Freely draw an area to select elements",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Editing",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Create Edge",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": "create-edge",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Interactively create new edges",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Drag Element",
        "paraId": 13,
        "tocIndex": 2
    },
    {
        "value": "drag-element",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Drag nodes or combos",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Force-directed Drag",
        "paraId": 14,
        "tocIndex": 2
    },
    {
        "value": "drag-element-force",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Drag nodes in force-directed layout",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Data Exploration",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Collapse/Expand",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "collapse-expand",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Expand or collapse subtree nodes",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Focus Element",
        "paraId": 16,
        "tocIndex": 2
    },
    {
        "value": "focus-element",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Focus on specific elements and automatically adjust the view",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Hover Activate",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": "hover-activate",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Highlight elements when hovering",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Visual Optimization",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Fix Element Size",
        "paraId": 18,
        "tocIndex": 2
    },
    {
        "value": "fix-element-size",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Fix the element size to a specified value",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Auto-adapt Label",
        "paraId": 19,
        "tocIndex": 2
    },
    {
        "value": "auto-adapt-label",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Automatically adjust label position",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "For detailed configuration of each behavior, refer to the ",
        "paraId": 20,
        "tocIndex": 2
    },
    {
        "value": "Built-in Behavior Documentation",
        "paraId": 21,
        "tocIndex": 2
    },
    {
        "value": ".",
        "paraId": 20,
        "tocIndex": 2
    },
    {
        "value": "Some behaviors may overlap in triggering mechanisms, such as ",
        "paraId": 22
    },
    {
        "value": "brush-select",
        "paraId": 22
    },
    {
        "value": " and ",
        "paraId": 22
    },
    {
        "value": "drag-canvas",
        "paraId": 22
    },
    {
        "value": " both using mouse dragging. In such cases, you can avoid conflicts by modifying the trigger key (e.g., hold ",
        "paraId": 22
    },
    {
        "value": "Shift",
        "paraId": 22
    },
    {
        "value": " to drag and select).",
        "paraId": 22
    },
    {
        "value": "When built-in behaviors cannot meet the requirements, G6 provides powerful customization capabilities:",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "Extend by inheriting built-in behaviors",
        "paraId": 24,
        "tocIndex": 3
    },
    {
        "value": "Create entirely new behavior behaviors",
        "paraId": 24,
        "tocIndex": 3
    },
    {
        "value": "Unlike built-in behaviors, ",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": "custom behaviors need to be registered before use",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": ". For detailed tutorials, refer to the ",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": "Custom Behavior",
        "paraId": 26,
        "tocIndex": 3
    },
    {
        "value": " documentation.",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": "The simplest way is to directly specify the required behaviors through the ",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "behaviors",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": " array when initializing the graph instance:",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['drag-canvas', 'zoom-canvas', 'click-select'],\n});\n",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "For behaviors that require custom parameters, you can configure properties using the ",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "object",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": " form:",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    'drag-canvas',\n    {\n      type: 'zoom-canvas',\n      sensitivity: 1.5, // Configure sensitivity\n      key: 'zoom-behavior', // Specify a key for the behavior for subsequent updates\n    },\n  ],\n});\n",
        "paraId": 30,
        "tocIndex": 6
    },
    {
        "value": "G6 supports dynamically managing behavior behaviors during the runtime of the graph instance to meet complex behavior needs:",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "You can adjust behaviors using the ",
        "paraId": 32,
        "tocIndex": 7
    },
    {
        "value": "setBehaviors",
        "paraId": 33,
        "tocIndex": 7
    },
    {
        "value": " method:",
        "paraId": 32,
        "tocIndex": 7
    },
    {
        "value": "// Add new behavior\ngraph.setBehaviors((behaviors) => [...behaviors, 'lasso-select']);\n\n// Remove behavior\ngraph.setBehaviors((behaviors) => behaviors.filter((b) => b !== 'click-select'));\n",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "You can update the configuration of behaviors using the ",
        "paraId": 35,
        "tocIndex": 7
    },
    {
        "value": "updateBehavior",
        "paraId": 36,
        "tocIndex": 7
    },
    {
        "value": " method:",
        "paraId": 35,
        "tocIndex": 7
    },
    {
        "value": "// Update a single behavior\ngraph.updateBehavior({\n  key: 'zoom-behavior',\n  sensitivity: 2,\n  enable: false, // Disable the behavior\n});\n",
        "paraId": 37,
        "tocIndex": 7
    },
    {
        "value": "When using the ",
        "paraId": 38
    },
    {
        "value": "updateBehavior",
        "paraId": 38
    },
    {
        "value": " method, you need to specify a unique ",
        "paraId": 38
    },
    {
        "value": "key",
        "paraId": 38
    },
    {
        "value": " for the behavior during initialization.",
        "paraId": 38
    },
    {
        "value": "You can also uninstall behaviors using the ",
        "paraId": 39,
        "tocIndex": 8
    },
    {
        "value": "setBehaviors",
        "paraId": 40,
        "tocIndex": 8
    },
    {
        "value": " method by setting the behavior configuration list to empty:",
        "paraId": 39,
        "tocIndex": 8
    },
    {
        "value": "graph.setBehaviors([]);\n",
        "paraId": 41,
        "tocIndex": 8
    },
    {
        "value": "For more behavior-related APIs, refer to the ",
        "paraId": 42,
        "tocIndex": 8
    },
    {
        "value": "Behavior API Documentation",
        "paraId": 43,
        "tocIndex": 8
    },
    {
        "value": ".",
        "paraId": 42,
        "tocIndex": 8
    },
    {
        "value": "Behaviors are essentially implemented through event listening and response. Although built-in behaviors have encapsulated common behavior behaviors, you can also directly implement custom behavior logic through the event API.",
        "paraId": 44,
        "tocIndex": 9
    },
    {
        "value": "// Use event constants (recommended)\nimport { NodeEvent, EdgeEvent } from '@antv/g6';\n\n// Listen for node clicks\ngraph.on(NodeEvent.CLICK, (evt) => {\n  const { target } = evt;\n  graph.setElementState(target.id, 'selected');\n});\n\n// Listen for edge hover\ngraph.on(EdgeEvent.POINTER_OVER, (evt) => {\n  const { target } = evt;\n  graph.setElementState(target.id, 'highlight');\n});\n",
        "paraId": 45,
        "tocIndex": 10
    },
    {
        "value": "The event system is the foundation for implementing behaviors. Mastering the event API is crucial for understanding and extending behavior behaviors. For more event-related information, refer to the ",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "Event Documentation",
        "paraId": 47,
        "tocIndex": 10
    },
    {
        "value": ".",
        "paraId": 46,
        "tocIndex": 10
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
//# sourceMappingURL=docs_manual_behavior_overview_en_md_q_hK4X-async.js.map