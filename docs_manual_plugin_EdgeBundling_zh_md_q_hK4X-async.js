((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/EdgeBundling.zh.md?type=text'],
{ "docs/manual/plugin/EdgeBundling.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/EdgeBundling.zh.md?watch=parent");
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
        "value": "边绑定（Edge Bundling）是一种图可视化技术，用于减少复杂网络图中的视觉混乱，并展示图中的高级别模式和结构。其目的是将相邻的边捆绑在一起。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6 中提供的边绑定插件是基于 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "FEDB（Force-Directed Edge Bundling for Graph Visualization）",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "论文的实现：将边建模为可以相互吸引的柔性弹簧，通过自组织的方式进行捆绑。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "边绑定插件主要适用于以下场景：",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "减少复杂网络图中的视觉混乱",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "揭示图中的高级别模式和结构",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "提高大规模图数据的可读性和美观性",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "以下是一个简单的 EdgeBundling 插件初始化示例：",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-bundling',\n      bundleThreshold: 0.6,\n      cycles: 6,\n      divisions: 3,\n      divRate: 2,\n      iterations: 90,\n      iterRate: 2 / 3,\n      K: 0.1,\n      lambda: 0.1,\n    },\n  ],\n});\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "插件类型，用于标识该插件为边捆绑插件",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "edge-bundling",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "key",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "插件的唯一标识，可用于获取插件实例或更新插件选项",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "bundleThreshold",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "边兼容性阈值，该值决定了哪些边应该被绑定在一起，值越大，绑定的边越少，",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "示例",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "0.6",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "cycles",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "模拟周期数，控制边捆绑模拟的执行轮数",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "6",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "divisions",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "初始切割点数，在后续的周期中，切割点数将根据 divRate 逐步递增，影响边的细分程度",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "1",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "divRate",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "切割点数增长率，决定了每一轮周期中切割点数的增长幅度",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "2",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "iterations",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "指定在第一个周期中执行的迭代次数，在后续的周期中，迭代次数将根据 iterRate 逐步递减，影响模拟的精度",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "90",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "iterRate",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "迭代次数递减率，控制每一轮周期中迭代次数的减少比例",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "2/3",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "K",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "边的强度，影响边之间的吸引力和排斥力，",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "示例",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "0.1",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "lambda",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "初始步长，在后续的周期中，步长将双倍递增，影响边捆绑过程中节点移动的幅度",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "0.1",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "边兼容性阈值，该值决定了哪些边应该被绑定在一起。值越大，绑定的边越少，反之则绑定的边越多。",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "较低的 bundleThreshold 值（如 0.4）会使更多的边被绑定在一起，形成更明显的捆绑效果。",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-bundling',\n      bundleThreshold: 0.4, // 较低的边兼容性阈值\n    },\n  ],\n});\n",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "效果如下：\n",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "较高的 bundleThreshold 值（如 0.8）会使较少的边被绑定在一起，保持更多的独立边。",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-bundling',\n      bundleThreshold: 0.8, // 较高的边兼容性阈值\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "效果如下：\n",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "边的强度，影响边之间的吸引力和排斥力。较高的 K 值会使边之间的吸引力更强，从而形成更紧密的捆绑效果。",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "较低的 K 值（如 0.05）会使边之间的吸引力较弱，边的捆绑效果较弱。",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-bundling',\n      K: 0.05, // 较低的边强度\n    },\n  ],\n});\n",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "效果如下：\n",
        "paraId": 19,
        "tocIndex": 5
    },
    {
        "value": "较高的 K 值（如 0.2）会使边之间的吸引力较强，边的捆绑效果更明显。",
        "paraId": 20,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-bundling',\n      K: 0.2, // 较高的边强度\n    },\n  ],\n});\n",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "效果如下：\n",
        "paraId": 22,
        "tocIndex": 5
    },
    {
        "value": "最简单的方式是直接使用预设配置：",
        "paraId": 23,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  plugins: ['edge-bundling'],\n});\n",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "您可以根据需要自定义边绑定的参数：",
        "paraId": 25,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  plugins: [\n    {\n      type: 'edge-bundling',\n      bundleThreshold: 0.8, // 更高的边兼容性阈值\n      cycles: 8, // 更多模拟周期\n      K: 0.2, // 更强的边强度\n    },\n  ],\n});\n",
        "paraId": 26,
        "tocIndex": 8
    },
    {
        "value": "使用 key 标识符可以在运行时动态更新边绑定属性：",
        "paraId": 27,
        "tocIndex": 9
    },
    {
        "value": "// 初始化配置\nconst graph = new Graph({\n  // 其他配置...\n  plugins: [\n    {\n      type: 'edge-bundling',\n      key: 'my-edge-bundling',\n      bundleThreshold: 0.6,\n    },\n  ],\n});\n\n// 后续动态更新\ngraph.updatePlugin({\n  key: 'my-edge-bundling',\n  bundleThreshold: 0.8, // 更新边兼容性阈值\n  cycles: 10, // 更新模拟周期数\n});\n",
        "paraId": 28,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://assets.antv.antgroup.com/g6/circular.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      autoFit: 'view',\n      data,\n      layout: {\n        type: 'circular',\n      },\n      node: { style: { size: 20 } },\n      behaviors: ['drag-canvas', 'drag-element'],\n      plugins: [\n        {\n          key: 'edge-bundling',\n          type: 'edge-bundling',\n          bundleThreshold: 0.1,\n        },\n      ],\n    });\n\n    graph.render();\n  });\n",
        "paraId": 29,
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
//# sourceMappingURL=docs_manual_plugin_EdgeBundling_zh_md_q_hK4X-async.js.map