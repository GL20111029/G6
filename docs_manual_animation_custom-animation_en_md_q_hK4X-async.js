((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/animation/custom-animation.en.md?type=text'],
{ "docs/manual/animation/custom-animation.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/animation/custom-animation.en.md?watch=parent");
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
        "value": "For circular node (Circle) elements, the main shape is a circle. Now, let's create an animation for it so that when the size of the node changes, it transitions with a scaling animation:",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "[\n  {\n    fields: ['r'],\n    shape: 'key',\n  },\n];\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Now let's create a graph instance and update the element size to trigger the update animation:",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 50,\n  height: 50,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 25, y: 25, size: 20 } }],\n  },\n  node: {\n    animation: {\n      update: [{ fields: ['r'], shape: 'key' }],\n    },\n  },\n});\n\ngraph.draw().then(() => {\n  graph.updateNodeData([{ id: 'node-1', style: { size: 40 } }]);\n  graph.draw();\n});\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "⬇️ Move the pointer to the graph below and click the play button on the left to replay",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  width: 50,\n  height: 50,\n  container,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 25, y: 25, size: 20 } }],\n  },\n  node: {\n    animation: {\n      update: [\n        {\n          fields: ['r'],\n          shape: 'key',\n        },\n      ],\n    },\n  },\n});\n\ngraph.draw().then(() => {\n  graph.updateNodeData([{ id: 'node-1', style: { size: 40 } }]);\n  graph.draw();\n});\n",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "When animating an element, the element converts its animation frame parameters into animation frame parameters for its individual sub-graphics and executes the corresponding animations.",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "In the example above, by updating the node size, an animation was performed on the node, and its animation frame parameters were:",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "[{ \"size\": 20 }, { \"size\": 40 }]\n",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "After obtaining the attribute, the node element converts it into animation frame parameters for the main shape (circle):",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "[{ \"r\": 10 }, { \"r\": 20 }]\n",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "Therefore, what is ultimately happening here is that a transition animation is being performed on the circle, changing its radius from 10 to 20.",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "By directly combining the position change animation with the size change animation into a single animation paradigm, you can obtain a composite animation paradigm:",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "[\n  {\n    fields: ['x', 'y'],\n  },\n  {\n    fields: ['r'],\n    shape: 'key',\n  },\n];\n",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "And update both the position and size of the node simultaneously:",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "graph.updateNodeData([{ id: 'node-1', style: { x: 175, size: 40 } }]);\ngraph.draw();\n",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "⬇️ Move the pointer to the graph below and click the play button on the left to replay",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 50,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 25, y: 25, size: 20 } }],\n  },\n  node: {\n    animation: {\n      update: [\n        {\n          fields: ['x', 'y'],\n        },\n        { fields: ['r'], shape: 'key' },\n      ],\n    },\n  },\n});\n\ngraph.draw().then(() => {\n  graph.updateNodeData([{ id: 'node-1', style: { x: 175, size: 40 } }]);\n  graph.draw();\n});\n",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "Add color transition:",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "[\n  {\n    fields: ['x', 'y'],\n  },\n  {\n    fields: ['r', 'fill'],\n    shape: 'key',\n  },\n];\n",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "Execute node update:",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "graph.updateNodeData([{ id: 'node-1', style: { x: 175, size: 40, fill: 'pink' } }]);\ngraph.draw();\n",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": "⬇️ Move the pointer to the graph below and click the play button on the left to replay",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 50,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 25, y: 25, size: 20 } }],\n  },\n  node: {\n    animation: {\n      update: [\n        {\n          fields: ['x', 'y'],\n        },\n        { fields: ['r', 'fill'], shape: 'key' },\n      ],\n    },\n  },\n});\n\ngraph.draw().then(() => {\n  graph.updateNodeData([{ id: 'node-1', style: { x: 175, size: 40, fill: 'pink' } }]);\n  graph.draw();\n});\n",
        "paraId": 23,
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
//# sourceMappingURL=docs_manual_animation_custom-animation_en_md_q_hK4X-async.js.map