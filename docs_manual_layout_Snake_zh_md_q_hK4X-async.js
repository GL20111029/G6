((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/Snake.zh.md?type=text'],
{ "docs/manual/layout/Snake.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/Snake.zh.md?watch=parent");
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
        "value": "蛇形布局（Snake Layout）是一种特殊的图形布局方式，能够在较小的空间内更有效地展示长链结构。需要注意的是，其图数据需要确保节点按照从源节点到汇节点的顺序进行线性排列，形成一条明确的路径。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "节点按 S 字型排列，第一个节点位于第一行的起始位置，接下来的节点在第一行向右排列，直到行末尾。到达行末尾后，下一行的节点从右向左反向排列。这个过程重复进行，直到所有节点排列完毕。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "适合需要紧凑呈现线性关系的场景：",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "长流程可视化",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "完美适配流程步骤过多的场景，如审批流程、生产线工序、物流运输路径等。",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "有限空间内的层级结构",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "层级结构过长但画布受限，需通过折叠行节省空间，比如 API 调用依赖（客户端 → 网关 → 服务A → 服务B → 数据库，蛇形布局将 5 层压缩为 2 行）、文件目录树（深度嵌套的文件夹结构，如 src/components/utils/helpers/... ，用蛇形布局横向折叠子目录）。",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    autoFit: 'center',\n    data: {\n      nodes: new Array(16).fill(0).map((_, i) => ({ id: `${i}` })),\n      edges: new Array(15).fill(0).map((_, i) => ({ source: `${i}`, target: `${i + 1}` })),\n    },\n    node: {\n      style: {\n        labelFill: '#fff',\n        labelPlacement: 'center',\n        labelText: (d) => d.id,\n      },\n    },\n    behaviors: ['drag-canvas'],\n    layout: {\n      type: 'snake',\n      clockwise: true,\n      cols: 4,\n      colGap: 30,\n      rowGap: 30,\n      padding: 15,\n      nodeSize: 30,\n    },\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      type: 'snake',\n      clockwise: true,\n      cols: 4,\n      colGap: 30,\n      rowGap: 30,\n      padding: 15,\n      nodeSize: 30,\n    };\n\n    const optionFolder = gui.addFolder('Grid Layout Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'cols', 2, 10, 1);\n    optionFolder.add(options, 'colGap', 10, 150, 1);\n    optionFolder.add(options, 'rowGap', 10, 150, 1);\n    optionFolder.add(options, 'padding', 5, 100, 1);\n    optionFolder.add(options, 'nodeSize', 10, 50, 30);\n    optionFolder.add(options, 'clockwise');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.setLayout({\n        type: 'snake',\n        [property]: value,\n      });\n      graph.layout();\n    });\n  },\n);\n",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "如果布局有其特定的属性，我们将在下面列出。对于所有布局的通用属性，见",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "布局通用配置项",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "布局类型",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "snake",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "clockwise",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "节点排布方向是否顺时针",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "colGap",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "节点列之间的间隙大小",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "默认将根据画布宽度和节点总列数自动计算",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "cols",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "节点列数",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "5",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "nodeSize",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "节点尺寸",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Size | ((node: NodeData) => Size)",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "padding",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "内边距，即布局区域与画布边界的距离",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number | number[]",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "0",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "rowGap",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "节点行之间的间隙大小",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "默认将根据画布高度和节点总行数自动计算",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "sortBy",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "节点排序方法",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "(nodeA: NodeData, nodeB: NodeData) => -1 | 0 | 1",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "默认按照在图中的路径顺序进行展示",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "在顺时针排布时，节点从左上角开始，第一行从左到右排列，第二行从右到左排列，依次类推，形成 S 型路径。",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "在逆时针排布时，节点从右上角开始，第一行从右到左排列，第二行从左到右排列，依次类推，形成反向 S 型路径。",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: new Array(16).fill(0).map((_, i) => ({ id: `${i}` })),\n  edges: new Array(15).fill(0).map((_, i) => ({ source: `${i}`, target: `${i + 1}` })),\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      labelFill: '#fff',\n      labelPlacement: 'center',\n      labelText: (d) => d.id,\n    },\n  },\n  layout: {\n    type: 'snake',\n    padding: 50,\n  },\n  behaviors: ['drag-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 14,
        "tocIndex": 5
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
//# sourceMappingURL=docs_manual_layout_Snake_zh_md_q_hK4X-async.js.map