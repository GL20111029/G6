((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/D3Force3DLayout.zh.md?type=text'],
{ "docs/manual/layout/D3Force3DLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/D3Force3DLayout.zh.md?watch=parent");
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
        "value": "D3Force3D 布局是基于 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "d3-force",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 的三维扩展版本，通过在三维空间中模拟物理力的作用来实现自动布局。相比二维布局，它增加了 Z 轴方向的力作用，能够在三维空间中展现更丰富的数据关系。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "D3Force3D 在传统二维力导向布局的基础上，扩展了以下力的作用：",
        "paraId": 1,
        "tocIndex": 2
    },
    {
        "value": "三维中心力",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "：将节点拉向三维空间的中心点",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "三维碰撞力",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "：在三维空间中防止节点重叠",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "三维径向力",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "：将节点吸引到三维空间中的球面上",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "三维坐标力",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "：分别在 X、Y、Z 三个方向上施加作用力",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "布局计算通过迭代来实现，主要涉及以下参数：",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "alpha",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "：当前迭代的活力值，控制节点移动速度",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "alphaDecay",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "：活力值的衰减率",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "alphaMin",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "：最小活力值，低于此值停止迭代",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "velocityDecay",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "：速度衰减因子",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "布局类型",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "d3-force-3d",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "nodeSize",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "节点大小（直径），用于碰撞检测防止节点重叠",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "iterations",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "力的迭代次数，值越大布局越精确但性能消耗越大",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "numDimensions",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "维度数量（2 或 3）",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "3",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "forceSimulation",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "自定义力模拟方法",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "Simulation<NodeDatum, EdgeDatum>",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "onTick",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "每次迭代的回调函数",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(data: LayoutMapping) => void",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "randomSource",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "随机数生成函数",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "属性",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "类型",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "默认值",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "必选",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "alpha",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "当前迭代收敛阈值",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "1",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "alphaDecay",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "收敛阈值衰减率（0-1）",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "0.028",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "alphaMin",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "停止迭代的阈值",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "0.001",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "alphaTarget",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "目标收敛阈值",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "0",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "velocityDecay",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "速度衰减因子",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "0.4",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "属性",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "描述",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "类型",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "默认值",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "必选",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "center.x",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "中心点 x 坐标",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "center.y",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "中心点 y 坐标",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "center.z",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "中心点 z 坐标",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "0",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "center.strength",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "力的强度",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "1",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "属性",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "描述",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "类型",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "默认值",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "必选",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "collide.radius",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "碰撞半径",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "10",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "collide.strength",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "力的强度",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "1",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "collide.iterations",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "碰撞检测的迭代次数",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "1",
        "paraId": 8,
        "tocIndex": 8
    },
    {
        "value": "属性",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "描述",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "类型",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "默认值",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "必选",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "link.id",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "边的 id 生成函数",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "(edge: EdgeDatum, index: number, edges: EdgeDatum[]) => string",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "edge.id",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "link.distance",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "理想边长",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "number | ((edge: EdgeDatum, index: number, edges: EdgeDatum[]) => number)",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "30",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "link.strength",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "力的强度",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "number | ((edge: EdgeDatum, index: number, edges: EdgeDatum[]) => number)",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "1",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "link.iterations",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "链接力的迭代次数",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "number",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "1",
        "paraId": 9,
        "tocIndex": 9
    },
    {
        "value": "属性",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "描述",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "类型",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "默认值",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "必选",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "manyBody.strength",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "力的强度",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "-30",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "manyBody.theta",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Barnes-Hut 算法的精度参数",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "0.9",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "manyBody.distanceMin",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "最小作用距离",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "1",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "manyBody.distanceMax",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "最大作用距离",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "Infinity",
        "paraId": 10,
        "tocIndex": 10
    },
    {
        "value": "属性",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "描述",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "类型",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "默认值",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "必选",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "radial.strength",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "力的强度",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "0.1",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "radial.radius",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "目标半径",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "100",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "radial.x",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "球心 x 坐标",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "0",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "radial.y",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "球心 y 坐标",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "0",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "radial.z",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "球心 z 坐标",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "0",
        "paraId": 11,
        "tocIndex": 11
    },
    {
        "value": "每个方向的力可以单独配置：",
        "paraId": 12,
        "tocIndex": 12
    },
    {
        "value": "属性",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "描述",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "类型",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "默认值",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "必选",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "x.strength",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "X 轴方向的力强度",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "x.x",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "目标 x 坐标",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "y.strength",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Y 轴方向的力强度",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "y.y",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "目标 y 坐标",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "z.strength",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "Z 轴方向的力强度",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "z.z",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "目标 z 坐标",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "number | ((node: NodeDatum, index: number, nodes: NodeDatum[]) => number)",
        "paraId": 13,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 13,
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
//# sourceMappingURL=docs_manual_layout_D3Force3DLayout_zh_md_q_hK4X-async.js.map