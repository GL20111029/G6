((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/animation/custom-animation.zh.md?type=text'],
{ "docs/manual/animation/custom-animation.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/animation/custom-animation.zh.md?watch=parent");
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
        "value": "对于圆形节点（Circle）元素，其主图形是一个圆形，现在为其编写一个动画，当节点的尺寸发生变化时，能够以缩放的方式进行过渡动画：",
        "paraId": 0,
        "tocIndex": 1
    },
    {
        "value": "[\n  {\n    fields: ['r'],\n    shape: 'key',\n  },\n];\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "下面我们创建一个图实例并更新元素尺寸来触发更新动画：",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 50,\n  height: 50,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 25, y: 25, size: 20 } }],\n  },\n  node: {\n    animation: {\n      update: [{ fields: ['r'], shape: 'key' }],\n    },\n  },\n});\n\ngraph.draw().then(() => {\n  graph.updateNodeData([{ id: 'node-1', style: { size: 40 } }]);\n  graph.draw();\n});\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "⬇️ 指针移动至下方图中，并点击左侧播放按钮进行重新播放",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  width: 50,\n  height: 50,\n  container,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 25, y: 25, size: 20 } }],\n  },\n  node: {\n    animation: {\n      update: [\n        {\n          fields: ['r'],\n          shape: 'key',\n        },\n      ],\n    },\n  },\n});\n\ngraph.draw().then(() => {\n  graph.updateNodeData([{ id: 'node-1', style: { size: 40 } }]);\n  graph.draw();\n});\n",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "当对一个元素执行动画时，该元素会将其动画帧参数转化为其各个子图形上的动画帧参数，并执行对应的动画。",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "在上面的例子中，通过更新节点尺寸(size)，对该节点执行了动画，其动画帧参数为：",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "[{ \"size\": 20 }, { \"size\": 40 }]\n",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "节点元素拿到该属性后，将其转化为主图形（圆形）的动画帧参数：",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "[{ \"r\": 10 }, { \"r\": 20 }]\n",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "因此这里最终是对圆形执行了半径从 10 到 20 的过渡动画。",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "直接将位置变化动画和尺寸变化动画合并到一个动画范式即可得到复合动画范式：",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "[\n  {\n    fields: ['x', 'y'],\n  },\n  {\n    fields: ['r'],\n    shape: 'key',\n  },\n];\n",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "并同时更新该节点的位置和尺寸：",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "graph.updateNodeData([{ id: 'node-1', style: { x: 175, size: 40 } }]);\ngraph.draw();\n",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "⬇️ 指针移动至下方图中，并点击左侧播放按钮进行重新播放",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 50,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 25, y: 25, size: 20 } }],\n  },\n  node: {\n    animation: {\n      update: [\n        {\n          fields: ['x', 'y'],\n        },\n        { fields: ['r'], shape: 'key' },\n      ],\n    },\n  },\n});\n\ngraph.draw().then(() => {\n  graph.updateNodeData([{ id: 'node-1', style: { x: 175, size: 40 } }]);\n  graph.draw();\n});\n",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "加入颜色过渡：",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "[\n  {\n    fields: ['x', 'y'],\n  },\n  {\n    fields: ['r', 'fill'],\n    shape: 'key',\n  },\n];\n",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "执行节点更新：",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "graph.updateNodeData([{ id: 'node-1', style: { x: 175, size: 40, fill: 'pink' } }]);\ngraph.draw();\n",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": "⬇️ 指针移动至下方图中，并点击左侧播放按钮进行重新播放",
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
//# sourceMappingURL=docs_manual_animation_custom-animation_zh_md_q_hK4X-async.js.map