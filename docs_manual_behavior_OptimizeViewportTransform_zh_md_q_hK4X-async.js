((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/OptimizeViewportTransform.zh.md?type=text'],
{ "docs/manual/behavior/OptimizeViewportTransform.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/OptimizeViewportTransform.zh.md?watch=parent");
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
        "value": "OptimizeViewportTransform 是 G6 中用于提升大规模图表交互性能的内置交互。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "该交互通过实现",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "选择性渲染策略",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "，在视口变换过程中（即用户进行拖拽、缩放、滚动等操作时）临时隐藏非关键视觉元素，从而显著降低渲染计算负载，提高帧率和响应速度。当视口变换操作结束后，系统会在设定的延迟时间后自动恢复所有元素的可见性，确保完整的视觉呈现。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "此交互基于 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "事件系统",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": " 实现，通过监听 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "GraphEvent.BEFORE_TRANSFORM",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 和 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "GraphEvent.AFTER_TRANSFORM",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 事件，精确捕捉视口变换的开始和结束时机，进而执行元素可见性的动态控制。因此，必须与视口操作类交互（如 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "drag-canvas",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "、",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "zoom-canvas",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 或 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "scroll-canvas",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "）配合使用才能发挥作用。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "这一交互主要用于：",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "大规模图表（上千节点/边）的流畅交互",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "性能敏感的应用场景",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "在图配置中添加这一交互：",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "1. 快速配置（静态）",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "使用字符串形式直接声明，这种方式简洁但仅支持默认配置，且配置后不可动态修改：",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: ['optimize-viewport-transform'],\n});\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "2. 对象配置（推荐）",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "使用对象形式进行配置，支持自定义参数，且可以在运行时动态更新配置：",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'optimize-viewport-transform',\n      key: 'optimize-viewport-transform-1', // 为交互指定标识符，方便动态更新\n      debounce: 300, // 设置更长的防抖时间\n    },\n  ],\n});\n",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": "配置项",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "说明",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "交互类型名称",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "optimize-viewport-transform",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "enable",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "是否启用该交互",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "boolean | ((event: Event) => boolean)",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "debounce",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "操作结束后多长时间恢复显示所有元素（毫秒）",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "200",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "shapes",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "指定在操作画布过程中始终保持可见的图形元素，",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "配置项",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "function",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "(type) => type === 'node'",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "shapes",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": " 用于指定在画布操作过程中需要保持可见的图形元素。默认情况下，节点始终可见，而边和组合在操作画布时会被临时隐藏以提升性能。",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "{\n  shapes: (type, shape) => {\n    // 根据元素类型和图形对象动态决定是否保持可见\n    if (type === 'node') return true; // 所有节点保持可见\n    if (type === 'edge' && shape.get('importante')) return true; // 重要的边保持可见\n    return false; // 其他图形隐藏\n  };\n}\n",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 17
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['drag-canvas', 'zoom-canvas', 'optimize-viewport-transform'],\n});\n",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    'drag-canvas',\n    'zoom-canvas',\n    {\n      type: 'optimize-viewport-transform',\n      debounce: 500, // 设置更长的防抖时间，在操作停止后0.5秒才恢复显示所有元素\n    },\n  ],\n});\n",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  node: {\n    style: {\n      labelText: 'Drag Canvas!',\n    },\n  },\n  behaviors: [\n    'drag-canvas',\n    'zoom-canvas',\n    {\n      type: 'optimize-viewport-transform',\n      shapes: (type, shape) => {\n        if (type === 'node' && shape.className === 'key') return true;\n        return false;\n      },\n    },\n  ],\n});\n",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "👇 试试拖拽一下画布，看看效果吧",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 200,\n  data: {\n    nodes: [{ id: 'node-1', style: { x: 100, y: 100 } }],\n  },\n  node: {\n    style: {\n      labelText: 'Drag Canvas!',\n    },\n  },\n  behaviors: [\n    'drag-canvas',\n    {\n      type: 'optimize-viewport-transform',\n      shapes: (type, shape) => {\n        if (type === 'node' && shape.className === 'key') return true;\n        return false;\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "可以根据图表元素数量动态决定是否启用优化：",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    'drag-canvas',\n    'zoom-canvas',\n    function () {\n      // 超出500个元素时启用优化\n      const enable = graph.getNodeData().length + graph.getEdgeData().length > 500;\n      return {\n        type: 'optimize-viewport-transform',\n        key: 'optimize-behavior',\n        enable,\n      };\n    },\n  ],\n});\n",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "当图表包含大量节点和边（通常超过500个元素）时，使用此交互可以显著提升操作流畅度。在性能要求高或硬件性能有限的环境中尤其有用。",
        "paraId": 25,
        "tocIndex": 11
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  layout: {\n    type: 'grid',\n  },\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node1', target: 'node3' },\n      { source: 'node1', target: 'node4' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  node: {\n    style: {\n      labelText: (datum) => datum.id,\n    },\n  },\n  behaviors: ['zoom-canvas', 'drag-canvas', 'scroll-canvas', 'optimize-viewport-transform'],\n});\n\ngraph.render();\n",
        "paraId": 26,
        "tocIndex": 12
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
//# sourceMappingURL=docs_manual_behavior_OptimizeViewportTransform_zh_md_q_hK4X-async.js.map