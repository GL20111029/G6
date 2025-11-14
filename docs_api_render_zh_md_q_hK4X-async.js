((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/render.zh.md?type=text'],
{ "docs/api/render.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/render.zh.md?watch=parent");
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
        "value": "G6 提供了一系列绘制和渲染相关的 API，用于控制图形元素的显示过程。在 G6 中，绘制和渲染是两个不同的概念：",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "绘制(draw)",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": 仅负责将图形元素绘制到画布上，不涉及布局计算",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "渲染(render)",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": 完整的渲染流程，包括数据处理、布局计算和最终绘制",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "理解这些 API 的区别对于优化性能和实现特定效果至关重要。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "绘制元素，但不执行布局计算。",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "draw(): Promise<void>;\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "说明",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "draw",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": " 方法仅执行元素的绘制过程，不会重新计算布局。",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "⚠️ ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "注意",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": ": ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "draw",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": " 为异步方法，需要使用 ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "await",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": " 或 Promise 链式调用来确保绘制完成后再执行后续操作。",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "示例 1",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": 基础用法",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "// 基本用法\nawait graph.draw();\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "示例 2",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": ": 修改节点样式后重新绘制",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "// 修改节点样式后重新绘制\ngraph.updateNodeData([\n  {\n    id: 'node1',\n    style: {\n      fill: 'red',\n      stroke: 'blue',\n      lineWidth: 2,\n    },\n  },\n]);\n\n// 仅绘制更新后的样式，不重新布局\nawait graph.draw();\n",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "示例 3",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": ": 批量更新多个元素后一次性绘制",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": "// 更新多个节点\ngraph.updateNodeData([{ id: 'node1', style: { fill: 'red' } }]);\ngraph.updateNodeData([{ id: 'node2', style: { fill: 'blue' } }]);\n\n// 更新边\ngraph.updateEdgeData([{ id: 'edge1', style: { stroke: 'green' } }]);\n\n// 批量操作完成后绘制\nawait graph.draw();\n",
        "paraId": 13,
        "tocIndex": 2
    },
    {
        "value": "示例 4",
        "paraId": 14,
        "tocIndex": 2
    },
    {
        "value": ": 使用事件监听绘制完成",
        "paraId": 14,
        "tocIndex": 2
    },
    {
        "value": "import { GraphEvent } from '@antv/g6';\n\ngraph.on(GraphEvent.AFTER_DRAW, () => {\n  console.log('绘制完成');\n});\n\nawait graph.draw();\n",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "执行完整的渲染流程，包括数据处理、布局计算和绘制。",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "render(): Promise<void>;\n",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "说明",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "render",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": " 方法会执行完整的渲染流程：",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "处理数据更新",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "绘制元素到画布上",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "执行布局算法",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "示例 1",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": ": 基本用法",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": "// 基本用法\nawait graph.render();\n",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "示例 2",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": ": 添加新数据后渲染",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "graph.addData({\n  nodes: [{ id: 'node3' }, { id: 'node4' }],\n  edges: [{ id: 'edge2', source: 'node1', target: 'node3' }],\n});\nawait graph.render();\n",
        "paraId": 24,
        "tocIndex": 3
    },
    {
        "value": "示例 3",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": ": 监听渲染事件",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": "import { GraphEvent } from '@antv/g6';\n\n// 渲染开始前\ngraph.on(GraphEvent.BEFORE_RENDER, () => {\n  console.log('渲染开始...');\n  // 显示加载指示器\n  showLoadingIndicator();\n});\n\n// 渲染完成后\ngraph.on(GraphEvent.AFTER_RENDER, () => {\n  console.log('渲染完成');\n  // 隐藏加载指示器\n  hideLoadingIndicator();\n});\n\ngraph.render();\n",
        "paraId": 26,
        "tocIndex": 3
    },
    {
        "value": "清空画布上的所有元素，包括节点、边和其他图形元素。",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "clear(): Promise<void>;\n",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": "说明",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "此方法会删除图中的所有元素，但保留画布配置和样式。这是一个异步方法，返回一个 Promise。",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": "// 基本用法\nawait graph.clear();\n",
        "paraId": 32,
        "tocIndex": 4
    },
    {
        "value": "使用 ",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "draw()",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": " 当:\n",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "仅修改了元素样式或状态，不需要重新计算位置",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "性能敏感，希望避免不必要的布局计算",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "使用 ",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "render()",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": " 当:\n",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "初始化图表",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "更改了布局配置",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "添加或删除了大量节点/边",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "需要重新计算所有元素位置",
        "paraId": 35,
        "tocIndex": 6
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
//# sourceMappingURL=docs_api_render_zh_md_q_hK4X-async.js.map