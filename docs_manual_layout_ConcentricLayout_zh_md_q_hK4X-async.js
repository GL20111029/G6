((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ConcentricLayout.zh.md?type=text'],
{ "docs/manual/layout/ConcentricLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/ConcentricLayout.zh.md?watch=parent");
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
        "value": "同心圆布局是一种将节点根据某种排序规则分层，并以圆心为中心、沿圆周排列每层节点的布局方式。参考更多同心圆布局",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "样例",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "或",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "源码",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "分层数据可视化，如权限控制结构、组织架构图等，中心是顶级角色，外圈为下级节点。",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "排序分析结果可视化，高重要度放中心，低重要度放外围，快速表达图中节点的相对影响力。",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "属性",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "布局类型",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "concentric",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "center",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "圆形布局的中心位置，默认为当前容器的中心位置",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "clockwise",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "是否按照顺时针排列",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "equidistant",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "环与环之间的距离是否相等",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "width",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "布局的宽度，默认使用容器宽度",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "height",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "布局的高度，默认使用容器高度",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "sortBy",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "指定排序的依据（节点属性名）",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "数值越高则该节点被放置得越中心。若为 degree，则会计算节点的度数，度数越高，节点将被放置得越中心",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "degree",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "maxLevelDiff",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "同一层节点的最大属性差值",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "若为 undefined，则将会被设置为 maxValue / 4 ，其中 maxValue 为最大的排序依据的属性值。例如，若 sortBy 为 'degree'，则 maxValue 为所有节点中度数最大的节点的度数",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "undefined",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "nodeSize",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "节点大小（直径）。用于防止节点重叠时的碰撞检测",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number | number[] | ((nodeData: Node) => number)",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "30",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "nodeSpacing",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "环与环之间最小间距，用于调整半径",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number | number[] | ((node?: Node) => number)",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "10",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "preventOverlap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "是否防止重叠",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "必须配合 nodeSize 属性或节点数据中的 data.size 属性，只有在数据中设置了 data.size 或在该布局中配置了与当前图节点大小相同的 nodeSize 值，才能够进行节点重叠的碰撞检测",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "startAngle",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "开始布局节点的弧度",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "3 / 2 * Math.PI",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "sweep",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "同一层中第一个节点与最后一个节点之间的弧度差",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "若为 undefined ，则将会被设置为 2 * Math.PI * (1 - 1 / |level.nodes|) ，其中 level.nodes 为该算法计算出的每一层的节点，|level.nodes| 代表该层节点数量",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "undefined",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 500,\n  height: 250,\n  autoFit: 'view',\n  data: {\n    nodes: [\n      { id: 'center', data: { label: '中心', level: 0 } },\n      { id: 'level1-0', data: { label: 'L1-0', level: 1 } },\n      { id: 'level1-1', data: { label: 'L1-1', level: 1 } },\n      { id: 'level1-2', data: { label: 'L1-2', level: 1 } },\n      { id: 'level1-3', data: { label: 'L1-3', level: 1 } },\n      { id: 'level1-4', data: { label: 'L1-4', level: 1 } },\n      { id: 'level1-5', data: { label: 'L1-5', level: 1 } },\n      { id: 'level2-0', data: { label: 'L2-0', level: 2 } },\n      { id: 'level2-1', data: { label: 'L2-1', level: 2 } },\n      { id: 'level2-2', data: { label: 'L2-2', level: 2 } },\n      { id: 'level2-3', data: { label: 'L2-3', level: 2 } },\n      { id: 'level2-4', data: { label: 'L2-4', level: 2 } },\n      { id: 'level2-5', data: { label: 'L2-5', level: 2 } },\n      { id: 'level2-6', data: { label: 'L2-6', level: 2 } },\n      { id: 'level2-7', data: { label: 'L2-7', level: 2 } },\n      { id: 'level2-8', data: { label: 'L2-8', level: 2 } },\n      { id: 'level2-9', data: { label: 'L2-9', level: 2 } },\n      { id: 'level2-10', data: { label: 'L2-10', level: 2 } },\n      { id: 'level2-11', data: { label: 'L2-11', level: 2 } },\n    ],\n    edges: [\n      { id: 'e-center-level1-0', source: 'center', target: 'level1-0' },\n      { id: 'e-center-level1-1', source: 'center', target: 'level1-1' },\n      { id: 'e-center-level1-2', source: 'center', target: 'level1-2' },\n      { id: 'e-center-level1-3', source: 'center', target: 'level1-3' },\n      { id: 'e-center-level1-4', source: 'center', target: 'level1-4' },\n      { id: 'e-center-level1-5', source: 'center', target: 'level1-5' },\n\n      { id: 'e-level1-0-level2-0', source: 'level1-0', target: 'level2-0' },\n      { id: 'e-level1-0-level2-1', source: 'level1-0', target: 'level2-1' },\n      { id: 'e-level1-1-level2-2', source: 'level1-1', target: 'level2-2' },\n      { id: 'e-level1-1-level2-3', source: 'level1-1', target: 'level2-3' },\n      { id: 'e-level1-2-level2-4', source: 'level1-2', target: 'level2-4' },\n      { id: 'e-level1-2-level2-5', source: 'level1-2', target: 'level2-5' },\n      { id: 'e-level1-3-level2-6', source: 'level1-3', target: 'level2-6' },\n      { id: 'e-level1-3-level2-7', source: 'level1-3', target: 'level2-7' },\n      { id: 'e-level1-4-level2-8', source: 'level1-4', target: 'level2-8' },\n      { id: 'e-level1-4-level2-9', source: 'level1-4', target: 'level2-9' },\n      { id: 'e-level1-5-level2-10', source: 'level1-5', target: 'level2-10' },\n      { id: 'e-level1-5-level2-11', source: 'level1-5', target: 'level2-11' },\n    ],\n  },\n  layout: {\n    type: 'concentric',\n    nodeSize: 32,\n    sortBy: 'degree',\n    preventOverlap: true,\n  },\n  behaviors: ['zoom-canvas', 'drag-canvas', 'drag-element'],\n  animation: false,\n});\n\ngraph.render();\n",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "展开查看完整代码",
        "paraId": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\nconst graph = new Graph({\n  container: 'container',\n  autoFit: 'view',\n  data: {\n    nodes: [\n      { id: 'center', data: { label: '中心', level: 0 } },\n\n      { id: 'level1-0', data: { label: 'L1-0', level: 1 } },\n      { id: 'level1-1', data: { label: 'L1-1', level: 1 } },\n      { id: 'level1-2', data: { label: 'L1-2', level: 1 } },\n      { id: 'level1-3', data: { label: 'L1-3', level: 1 } },\n      { id: 'level1-4', data: { label: 'L1-4', level: 1 } },\n      { id: 'level1-5', data: { label: 'L1-5', level: 1 } },\n\n      { id: 'level2-0', data: { label: 'L2-0', level: 2 } },\n      { id: 'level2-1', data: { label: 'L2-1', level: 2 } },\n      { id: 'level2-2', data: { label: 'L2-2', level: 2 } },\n      { id: 'level2-3', data: { label: 'L2-3', level: 2 } },\n      { id: 'level2-4', data: { label: 'L2-4', level: 2 } },\n      { id: 'level2-5', data: { label: 'L2-5', level: 2 } },\n      { id: 'level2-6', data: { label: 'L2-6', level: 2 } },\n      { id: 'level2-7', data: { label: 'L2-7', level: 2 } },\n      { id: 'level2-8', data: { label: 'L2-8', level: 2 } },\n      { id: 'level2-9', data: { label: 'L2-9', level: 2 } },\n      { id: 'level2-10', data: { label: 'L2-10', level: 2 } },\n      { id: 'level2-11', data: { label: 'L2-11', level: 2 } },\n    ],\n    edges: [\n      { id: 'e-center-level1-0', source: 'center', target: 'level1-0' },\n      { id: 'e-center-level1-1', source: 'center', target: 'level1-1' },\n      { id: 'e-center-level1-2', source: 'center', target: 'level1-2' },\n      { id: 'e-center-level1-3', source: 'center', target: 'level1-3' },\n      { id: 'e-center-level1-4', source: 'center', target: 'level1-4' },\n      { id: 'e-center-level1-5', source: 'center', target: 'level1-5' },\n\n      { id: 'e-level1-0-level2-0', source: 'level1-0', target: 'level2-0' },\n      { id: 'e-level1-0-level2-1', source: 'level1-0', target: 'level2-1' },\n      { id: 'e-level1-1-level2-2', source: 'level1-1', target: 'level2-2' },\n      { id: 'e-level1-1-level2-3', source: 'level1-1', target: 'level2-3' },\n      { id: 'e-level1-2-level2-4', source: 'level1-2', target: 'level2-4' },\n      { id: 'e-level1-2-level2-5', source: 'level1-2', target: 'level2-5' },\n      { id: 'e-level1-3-level2-6', source: 'level1-3', target: 'level2-6' },\n      { id: 'e-level1-3-level2-7', source: 'level1-3', target: 'level2-7' },\n      { id: 'e-level1-4-level2-8', source: 'level1-4', target: 'level2-8' },\n      { id: 'e-level1-4-level2-9', source: 'level1-4', target: 'level2-9' },\n      { id: 'e-level1-5-level2-10', source: 'level1-5', target: 'level2-10' },\n      { id: 'e-level1-5-level2-11', source: 'level1-5', target: 'level2-11' },\n    ],\n  },\n  layout: {\n    type: 'concentric',\n    nodeSize: 32,\n    sortBy: 'degree',\n    preventOverlap: true,\n  },\n  behaviors: ['zoom-canvas', 'drag-canvas', 'drag-element'],\n  animation: false,\n});\n\ngraph.render();\n",
        "paraId": 6,
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
//# sourceMappingURL=docs_manual_layout_ConcentricLayout_zh_md_q_hK4X-async.js.map