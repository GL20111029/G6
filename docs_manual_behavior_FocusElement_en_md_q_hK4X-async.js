((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/FocusElement.en.md?type=text'],
{ "docs/manual/behavior/FocusElement.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/FocusElement.en.md?watch=parent");
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
        "value": "FocusElement is a built-in behavior in G6 used to implement the element focusing feature, allowing elements to be focused to the center of the view by clicking on them. This behavior helps users quickly locate and focus on specific graph elements.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Quickly center the focused nodes or edges in the display",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 200, y: 100 } },\n        { id: 'node-2', style: { x: 360, y: 100 } },\n        { id: 'node-3', style: { x: 280, y: 220 } },\n      ],\n      edges: [\n        { source: 'node-1', target: 'node-2' },\n        { source: 'node-1', target: 'node-3' },\n        { source: 'node-2', target: 'node-3' },\n      ],\n    },\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    behaviors: [\n      {\n        type: 'focus-element',\n        key: 'focus-element',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'focus-element',\n      type: 'focus-element',\n      animation: true,\n      enable: true,\n    };\n    const optionFolder = gui.addFolder('FocusElement Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'focus-element',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "Add this behavior in the graph configuration:",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "1. Quick Configuration (Static)",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "Declare directly using a string form:",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: ['focus-element'],\n});\n",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "2. Object Configuration (Recommended)",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Configure using an object form, supporting custom parameters:",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'focus-element',\n      animation: {\n        duration: 500,\n        easing: 'ease-in',\n      },\n    },\n  ],\n});\n",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "Option",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Behavior type name",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "focus-element",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "animation",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Focus animation settings",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "{ duration: 500, easing: 'ease-in' }",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Whether to enable the focus feature",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: IElementEvent) => boolean)",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "type ViewportAnimationEffectTiming =\n  | boolean // true to enable default animation, false to disable animation\n  | {\n      easing?: string; // Animation easing function: 'ease-in-out', 'ease-in', 'ease-out', 'linear'\n      duration?: number; // Animation duration (milliseconds)\n    };\n",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['focus-element'],\n});\n",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'focus-element',\n      animation: {\n        duration: 800,\n        easing: 'ease-in-out',\n      },\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // Other configurations...\n  behaviors: [\n    {\n      type: 'focus-element',\n      enable: (event) => {\n        // Enable focus only for nodes, not edges\n        return event.target.type === 'node';\n      },\n    },\n  ],\n});\n",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', combo: 'combo1', style: { x: 110, y: 150 } },\n    { id: 'node2', combo: 'combo1', style: { x: 190, y: 150 } },\n    { id: 'node3', combo: 'combo2', style: { x: 150, y: 260 } },\n  ],\n  edges: [{ source: 'node1', target: 'node2' }],\n  combos: [{ id: 'combo1', combo: 'combo2' }, { id: 'combo2' }],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  node: {\n    style: { labelText: (d) => d.id },\n  },\n  data,\n  behaviors: ['collapse-expand', 'focus-element'],\n});\n\ngraph.render();\n",
        "paraId": 16,
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
//# sourceMappingURL=docs_manual_behavior_FocusElement_en_md_q_hK4X-async.js.map