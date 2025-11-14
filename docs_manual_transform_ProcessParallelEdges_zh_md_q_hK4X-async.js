((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/transform/ProcessParallelEdges.zh.md?type=text'],
{ "docs/manual/transform/ProcessParallelEdges.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/transform/ProcessParallelEdges.zh.md?watch=parent");
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
        "value": "平行边（Parallel Edges）是指在图结构中，两个节点之间存在多条边。这些边共享相同的源节点和目标节点，但可能代表不同的关系或属性。为了避免边的重叠和混淆，提供了两种处理平行边的方式：",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "捆绑模式（bundle）：将平行边捆绑在一起，通过改变曲率与其他边分开",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "合并模式（merge）：将平行边合并为一条聚合",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "下面为常见使用场景举例：",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "双向数据流，比如客户端发送请求，服务端返回响应",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "多依赖关系，即一个节点通过多种方式依赖另一个节点，比如微服务架构中，服务 A 调用服务 B的两个不同 API",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "多链路，比如高可用架构中，主链路（实线，状态正常）与备份链路（灰色虚线，状态待机）同时展示",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "1. 快速配置（静态）",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "使用字符串形式直接声明，这种方式简洁但仅支持默认配置，且配置后不可动态修改：",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  transforms: ['process-parallel-edges'],\n});\n",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "2. 对象配置（推荐）",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "使用对象形式进行配置，支持自定义参数，且可以在运行时动态更新配置：",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  transforms: [\n    {\n      type: 'process-parallel-edges',\n      key: 'process-parallel-edges',\n      mode: 'bundle', // 默认就是捆绑模式了\n      distance: 30, // 配置捆绑模式下边之间的距离为30\n    },\n  ],\n});\n",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "数据处理类型",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "process-parallel-edges",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "distance",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "边之间的距离，仅在捆绑模式下有效",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "15",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "edges",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "考虑要处理的边，默认为全部边",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "string[]",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "mode",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "处理模式，",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "配置项",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "'bundle'",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "'merge'",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "'bundle'",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "style",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "合并边的样式，仅在合并模式下有效，",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "配置项",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "PathStyleProps | ((prev: ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "EdgeData",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "[]) => PathStyleProps)",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "提供了两种处理模式：",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "'merge'",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": ": 将平行边合并为一条边，适用于不需要区分平行边的情况，",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "merge",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": " 使用的是内置的直线（ ",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "line",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": " ）来展示合并边。",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "'bundle'",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": ": 每条边都会与其他所有平行边捆绑在一起，并通过改变曲率与其他边分开。如果一组平行边的数量是奇数，那么中心的边将被绘制为直线，其他的边将被绘制为曲线，",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "bundle",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": " 使用的是内置的二次贝塞尔曲线（ ",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "quadratic",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": " ）来实现，数据处理过程会强制把每个 ",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "edgeDatum.type",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": " 改为 ",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "quadratic",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "，并计算每条线的曲率。",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "禁止在创建 Graph 实例时配置 ",
        "paraId": 25
    },
    {
        "value": "edge.type",
        "paraId": 25
    },
    {
        "value": " 即默认的边类型，因为它的优先级比 ",
        "paraId": 25
    },
    {
        "value": "edgeDatum.type",
        "paraId": 25
    },
    {
        "value": " 要高，会导致 ",
        "paraId": 25
    },
    {
        "value": "bundle",
        "paraId": 25
    },
    {
        "value": " 模式的处理无法生效。",
        "paraId": 25
    },
    {
        "value": "合并边的样式，仅在合并模式下有效",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "下表列出了常用的属性，更多属性请参考 ",
        "paraId": 27,
        "tocIndex": 6
    },
    {
        "value": "PathStyleProps",
        "paraId": 27,
        "tocIndex": 6
    },
    {
        "value": "。",
        "paraId": 27,
        "tocIndex": 6
    },
    {
        "value": "属性",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "描述",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "类型",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "默认值",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "必选",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "fill",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "填充色",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "#1783FF",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "fillOpacity",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "填充色透明度",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "lineCap",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "描边端点样式",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "round",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "square",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "butt",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "butt",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "lineDash",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "描边虚线样式",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "number[]",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "lineDashOffset",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "描边虚线偏移量",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "lineJoin",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "描边连接处样式",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "round",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "bevel",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "miter",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "miter",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "lineWidth",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "描边宽度",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "opacity",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "透明度",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "shadowBlur",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "阴影模糊度",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "shadowColor",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "阴影颜色",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "shadowOffsetX",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "阴影在 x 轴方向上的偏移量",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "shadowOffsetY",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "阴影在 y 轴方向上的偏移量",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "shadowType",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "阴影类型",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "inner",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "outer",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "outer",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "stroke",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "描边色",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "#000",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "strokeOpacity",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "描边色透明度",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "number | string",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "1",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "visibility",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "图形是否可见",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "visible",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "hidden",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "visible",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'A', style: { x: 50, y: 350 } },\n    { id: 'B', style: { x: 250, y: 150 } },\n    { id: 'C', style: { x: 450, y: 350 } },\n  ],\n  edges: [\n    { source: 'A', target: 'C' },\n    { source: 'C', target: 'A' },\n    ...Array.from({ length: 10 }).map((_, i) => ({\n      id: `edge:A-B${i}`,\n      source: 'A',\n      target: 'B',\n      data: {\n        label: `A->B:${i}`,\n      },\n    })),\n    ...Array.from({ length: 5 }).map((_, i) => ({\n      id: `edge:B-C${i}`,\n      source: 'B',\n      target: 'C',\n      data: {\n        label: `B->C:${i}`,\n      },\n    })),\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  autoFit: 'center',\n  data,\n  node: {\n    style: {\n      ports: [{ placement: 'center' }],\n      labelText: (d) => d.id,\n    },\n  },\n  edge: {\n    style: {\n      labelText: (d) => d?.data?.label || `${d.source}->${d.target}`,\n    },\n  },\n  behaviors: ['drag-element'],\n  transforms: ['process-parallel-edges'],\n});\n\ngraph.render();\n",
        "paraId": 29,
        "tocIndex": 8
    },
    {
        "value": "下面是一个简单的合并模式的例子，需要注意：",
        "paraId": 30,
        "tocIndex": 9
    },
    {
        "value": "不需要合并（即两个节点间只有一条边）的边，合并样式不会在这条边上生效，比如例子中的 ",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "A->C",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "合并样式实际上是赋值给 ",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "datum.style",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": " ，也就是优先级会比实例化 Graph 时配置的默认样式低（ ",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "edge.style",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": " ），所以例子中合并样式的 ",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "startArrow",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": " 没有生效",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'A', style: { x: 50, y: 350 } },\n    { id: 'B', style: { x: 250, y: 150 } },\n    { id: 'C', style: { x: 450, y: 350 } },\n  ],\n  edges: [\n    { source: 'A', target: 'B' },\n    { source: 'B', target: 'A' },\n    { id: 'B-C:1', source: 'B', target: 'C' },\n    { id: 'B-C:2', source: 'B', target: 'C' },\n    { source: 'A', target: 'C' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  autoFit: 'center',\n  data,\n  node: {\n    style: {\n      labelText: (d) => d.id,\n    },\n  },\n  edge: {\n    style: {\n      labelText: (d) => d?.data?.label || `${d.source}->${d.target}`,\n      startArrow: false,\n    },\n  },\n  transforms: [\n    {\n      type: 'process-parallel-edges',\n      mode: 'merge',\n      style: {\n        halo: true,\n        haloOpacity: 0.2,\n        haloStroke: 'red',\n        startArrow: true,\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 32,
        "tocIndex": 9
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
//# sourceMappingURL=docs_manual_transform_ProcessParallelEdges_zh_md_q_hK4X-async.js.map