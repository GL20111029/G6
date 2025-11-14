((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ForceLayout.zh.md?type=text'],
{ "docs/manual/layout/ForceLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/ForceLayout.zh.md?watch=parent");
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
        "value": "力导向布局是一种基于物理模拟的图布局算法，它通过模拟节点间的引力和斥力来确定节点的位置。这种布局方式特别适合展示复杂的关系网络，如社交网络、知识图谱等。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "力导向布局会自动计算并调整节点位置，使得相连的节点保持适当的距离，同时尽量减少边的交叉。布局过程中会模拟物理系统，节点会像带电粒子一样相互排斥，边则像弹簧一样连接节点。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "力导向布局的主要特点包括：",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "自动排列",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "：不需要手动设置节点位置，系统会自动找到合适的位置",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "实时调整",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "：当你拖动某个节点时，其他节点会实时跟随调整位置",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "灵活配置",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "：\n",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "可以调整节点间的吸引力和排斥力",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "可以设置边的长度",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "可以防止节点重叠",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "动画效果",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "：节点移动时会有平滑的动画，让变化更自然",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "力导向布局是一种基于物理模拟的图布局算法，它将图中的节点和边模拟为物理系统：",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "节点被视为物理粒子",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "边被视为弹簧",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "整个系统通过物理模拟达到能量最低状态",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "物理模型",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "：库伦定律（Coulomb's Law）",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "作用",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：防止节点重叠，让节点分布更均匀，其中 ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "factor",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " 和 ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "coulombDisScale",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " 控制斥力的总体强度和范围。",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "公式",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "：\n",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "k: 斥力系数（",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "factor",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " / ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "coulombDisScale²",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "）",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "q1,q2: 节点强度(",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "nodeStrength",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": ")",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "r: 节点间距离",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "物理模型",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "：胡克定律（Hooke's Law）",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "作用",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "：模拟边的拉力，使节点沿着边的方向移动，其中 ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "edgeStrength",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " 和 ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "linkDistance",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " 控制边的“硬度”和长度。",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "公式",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "：\n",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "ka: 边拉力强度（",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "edgeStrength",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "）",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "L: 边的长度（",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "linkDistance",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "）",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "r: 实际边长度",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "物理模型",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "：牛顿万有引力定律（Newton's Universal Law of Gravitational）",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "作用",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "：使节点向画布中心或者聚类中心聚集，其中 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "gravity",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 和 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "center",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 控制重力强度和中心点位置",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "公式",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "：\n",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "G: 万有引力常数（",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "gravity",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "）",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "xc: 中心点坐标（",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "center",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "）",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "mass: 节点质量（",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "nodeSize",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "）",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "物理模型",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "：力的相互作用，产生加速度",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "作用",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "：斥力、边拉力、向心力共同作用，通过加速度叠加影响节点运动，最终达到能量最低状态。",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "公式",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "：\n",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "公式",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "：\n",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "v: 速度",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "a: 加速度",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "dt: 时间步长（",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "interval",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "）",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "damping: 阻尼系数（",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "damping",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "）",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "作用",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "：",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "控制节点移动的稳定性",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "阻尼系数防止系统震荡",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "时间步长影响每次迭代的位移",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "公式",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "：\n",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "x: 节点位置",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "v: 节点速度",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "dt: 时间步长（",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "interval",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "）",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "作用",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "：",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "根据速度更新节点位置",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "确保运动连续性",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "通过 ",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "preventOverlap",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": " 防止节点重叠",
        "paraId": 27,
        "tocIndex": 10
    },
    {
        "value": "公式",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "：\n",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "n: 聚类内节点数量",
        "paraId": 29,
        "tocIndex": 11
    },
    {
        "value": "(xi​,yi​): 每个节点的位置",
        "paraId": 29,
        "tocIndex": 11
    },
    {
        "value": "作用",
        "paraId": 30,
        "tocIndex": 11
    },
    {
        "value": "：",
        "paraId": 30,
        "tocIndex": 11
    },
    {
        "value": "计算聚类中心",
        "paraId": 31,
        "tocIndex": 11
    },
    {
        "value": "向心力将节点拉向所属聚类中心",
        "paraId": 31,
        "tocIndex": 11
    },
    {
        "value": "聚类中心可动态变化",
        "paraId": 31,
        "tocIndex": 11
    },
    {
        "value": "公式",
        "paraId": 32,
        "tocIndex": 12
    },
    {
        "value": "：\n",
        "paraId": 32,
        "tocIndex": 12
    },
    {
        "value": "s: 聚类强度（",
        "paraId": 33,
        "tocIndex": 12
    },
    {
        "value": "clusterNodeStrength",
        "paraId": 33,
        "tocIndex": 12
    },
    {
        "value": "）",
        "paraId": 33,
        "tocIndex": 12
    },
    {
        "value": "xc​: 聚类中心",
        "paraId": 33,
        "tocIndex": 12
    },
    {
        "value": "作用",
        "paraId": 34,
        "tocIndex": 12
    },
    {
        "value": "：",
        "paraId": 34,
        "tocIndex": 12
    },
    {
        "value": "控制聚类的紧密程度",
        "paraId": 35,
        "tocIndex": 12
    },
    {
        "value": "聚类强度越大，聚类越紧凑",
        "paraId": 35,
        "tocIndex": 12
    },
    {
        "value": "可根据节点属性动态调整",
        "paraId": 35,
        "tocIndex": 12
    },
    {
        "value": "公式",
        "paraId": 36,
        "tocIndex": 13
    },
    {
        "value": "：\n",
        "paraId": 36,
        "tocIndex": 13
    },
    {
        "value": "a: 加速度",
        "paraId": 37,
        "tocIndex": 13
    },
    {
        "value": "F: 力（斥力、边拉力、向心力）",
        "paraId": 37,
        "tocIndex": 13
    },
    {
        "value": "mass: 节点质量",
        "paraId": 37,
        "tocIndex": 13
    },
    {
        "value": "作用",
        "paraId": 38,
        "tocIndex": 13
    },
    {
        "value": "：",
        "paraId": 38,
        "tocIndex": 13
    },
    {
        "value": "质量大的节点移动较小",
        "paraId": 39,
        "tocIndex": 13
    },
    {
        "value": "质量小的节点移动较大",
        "paraId": 39,
        "tocIndex": 13
    },
    {
        "value": "通过 ",
        "paraId": 39,
        "tocIndex": 13
    },
    {
        "value": "getMass",
        "paraId": 39,
        "tocIndex": 13
    },
    {
        "value": " 可自定义质量计算",
        "paraId": 39,
        "tocIndex": 13
    },
    {
        "value": "公式",
        "paraId": 40,
        "tocIndex": 14
    },
    {
        "value": "：\n",
        "paraId": 40,
        "tocIndex": 14
    },
    {
        "value": "m: 节点质量",
        "paraId": 41,
        "tocIndex": 14
    },
    {
        "value": "v: 节点速度",
        "paraId": 41,
        "tocIndex": 14
    },
    {
        "value": "作用",
        "paraId": 42,
        "tocIndex": 14
    },
    {
        "value": "：",
        "paraId": 42,
        "tocIndex": 14
    },
    {
        "value": "监控布局收敛情况",
        "paraId": 43,
        "tocIndex": 14
    },
    {
        "value": "能量趋近于零时系统趋于稳定",
        "paraId": 43,
        "tocIndex": 14
    },
    {
        "value": "公式",
        "paraId": 44,
        "tocIndex": 15
    },
    {
        "value": "：\n",
        "paraId": 44,
        "tocIndex": 15
    },
    {
        "value": "作用",
        "paraId": 45,
        "tocIndex": 15
    },
    {
        "value": "：",
        "paraId": 45,
        "tocIndex": 15
    },
    {
        "value": "控制迭代次数",
        "paraId": 46,
        "tocIndex": 15
    },
    {
        "value": "移动量小于阈值时停止",
        "paraId": 46,
        "tocIndex": 15
    },
    {
        "value": "通过 ",
        "paraId": 46,
        "tocIndex": 15
    },
    {
        "value": "distanceThresholdMode",
        "paraId": 46,
        "tocIndex": 15
    },
    {
        "value": " 可选择平均值、最大值或最小值",
        "paraId": 46,
        "tocIndex": 15
    },
    {
        "value": "根据上述力导向布局的物理特性，有以下配置项：",
        "paraId": 47,
        "tocIndex": 17
    },
    {
        "value": "属性",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "描述",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "默认值",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "必选",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "type",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "布局类型",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "force",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "✓",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "dimensions",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "布局维度，2表示2D布局，3表示3D布局",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "2",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "width",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "布局宽度",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "画布宽度",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "height",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "布局高度",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "画布高度",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "center",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "布局的中心点",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "图中心",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "maxIteration",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "最大迭代次数，若为 0 则将自动调整",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "0",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "minMovement",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "当平均移动距离小于0.4时停止迭代",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "0.4",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "distanceThresholdMode",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "移动距离的计算模式：mean: 平均移动距离小于 ",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "minMovement",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": " 时停止迭代；max: 最大移动距离小于时 ",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "minMovement",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": " 时停止迭代；min: 最小移动距离小于时 ",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "minMovement",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "mean",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "maxDistance",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "最大距离",
        "paraId": 48,
        "tocIndex": 18
    },
    {
        "value": "属性",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "描述",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "默认值",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "必选",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "nodeStrength",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "节点作用力，正数代表节点之间的引力作用，负数代表节点之间的斥力作用",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "1000",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "factor",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "斥力系数，数值越大，斥力越大",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "1",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "coulombDisScale",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "库伦系数，斥力的一个系数，数字越大，节点之间的斥力越大",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "0.005",
        "paraId": 49,
        "tocIndex": 20
    },
    {
        "value": "属性",
        "paraId": 50,
        "tocIndex": 21
    },
    {
        "value": "描述",
        "paraId": 50,
        "tocIndex": 21
    },
    {
        "value": "默认值",
        "paraId": 50,
        "tocIndex": 21
    },
    {
        "value": "必选",
        "paraId": 50,
        "tocIndex": 21
    },
    {
        "value": "edgeStrength",
        "paraId": 50,
        "tocIndex": 21
    },
    {
        "value": "边的作用力（引力）大小，固定作用力或回调函数动态返回不同边的作用力",
        "paraId": 50,
        "tocIndex": 21
    },
    {
        "value": "500",
        "paraId": 50,
        "tocIndex": 21
    },
    {
        "value": "linkDistance",
        "paraId": 50,
        "tocIndex": 21
    },
    {
        "value": "边的长度，固定长度或回调函数动态返回不同边的长度",
        "paraId": 50,
        "tocIndex": 21
    },
    {
        "value": "200",
        "paraId": 50,
        "tocIndex": 21
    },
    {
        "value": "属性",
        "paraId": 51,
        "tocIndex": 22
    },
    {
        "value": "描述",
        "paraId": 51,
        "tocIndex": 22
    },
    {
        "value": "默认值",
        "paraId": 51,
        "tocIndex": 22
    },
    {
        "value": "必选",
        "paraId": 51,
        "tocIndex": 22
    },
    {
        "value": "gravity",
        "paraId": 51,
        "tocIndex": 22
    },
    {
        "value": "向中心力大小，指所有节点被吸引到 center 的力。数字越大，布局越紧凑",
        "paraId": 51,
        "tocIndex": 22
    },
    {
        "value": "10",
        "paraId": 51,
        "tocIndex": 22
    },
    {
        "value": "centripetalOptions",
        "paraId": 51,
        "tocIndex": 22
    },
    {
        "value": "向心力配置，包括叶子节点、离散点、其他节点的向心中心及向心力大小。leaf: 叶子节点向心力；single: 单点向心力；others: 其他节点向心力；center: 自定义中心点函数",
        "paraId": 51,
        "tocIndex": 22
    },
    {
        "value": "[0, 0]",
        "paraId": 51,
        "tocIndex": 22
    },
    {
        "value": "属性",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "描述",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "默认值",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "必选",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "clustering",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "是否需要全部节点聚类，若为 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "true",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "，将使用 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "nodeClusterBy",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 配置的节点数据中的字段作为聚类依据。 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "centripetalOptions.single",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "、",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "centripetalOptions.leaf",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "、",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "centripetalOptions.others",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 将使用 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "getClusterNodeStrength",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 返回值；",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "leaf",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "、",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "centripetalOptions.center",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 将使用当前节点所属聚类中所有节点的平均中心",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "false",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "nodeClusterBy",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "指定节点数据中的字段名称作为节点聚类的依据，",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "clustering",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 为 true 时生效，自动生成 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "centripetalOptions",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "，可配合 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "clusterNodeStrength",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 使用",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "clusterNodeStrength",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "配合 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "clustering",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 和 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "nodeClusterBy",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 使用，指定聚类向心力的大小",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "leafCluster",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "是否需要叶子节点聚类，若为 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "true",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "，则 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "centripetalOptions.single",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 将为 100；",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "centripetalOptions.leaf",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 将使用 ",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "getClusterNodeStrength",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 返回值；",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "getClusterNodeStrength.center",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": " 将为叶子节点返回当前所有叶子节点的平均中心",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "false",
        "paraId": 52,
        "tocIndex": 23
    },
    {
        "value": "属性",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "描述",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "默认值",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "必选",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "damping",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "阻尼系数，取值范围 [0, 1]。数字越大，速度降低得越慢",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "0.9",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "maxSpeed",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "一次迭代的最大移动长度",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "200",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "interval",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "控制每个迭代节点的移动速度",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "0.02",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "preventOverlap",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "是否防止重叠，必须配合下面属性 ",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "nodeSize",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": " 或节点数据中的 ",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "data.size",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": " 属性，只有在数据中设置了 ",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "data.size",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": " 或在该布局中配置了与当前图节点大小相同的 ",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "nodeSize",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": " 值，才能够进行节点重叠的碰撞检测",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "true",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "nodeSize",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "节点大小（直径）。用于防止节点重叠时的碰撞检测，固定大小或者回调函数动态返回节点大小",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "nodeSpacing",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "preventOverlap",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": " 为 ",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "true",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": " 时生效, 防止重叠时节点边缘间距的最小值。可以是回调函数, 为不同节点设置不同的最小间距",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "collideStrength",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "防止重叠的力强度，范围 [0, 1]",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "1",
        "paraId": 53,
        "tocIndex": 24
    },
    {
        "value": "属性",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "描述",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "默认值",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "必选",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "getMass",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "获取节点质量的回调函数，入参为节点内部流转数据，用于计算节点质量大小",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "getCenter",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "每个节点中心力的 x、y、强度的回调函数，若不指定，则没有额外中心力",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "onTick",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "每一次迭代的回调函数",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "monitor",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "每个迭代的监控信息回调，energy 表示布局的收敛能量。若配置可能带来额外的计算能量性能消耗，不配置则不计算。入参为迭代监控信息 ",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "{ energy: number; nodes: Node[]; edges: Edge[]; iterations: number; }",
        "paraId": 54,
        "tocIndex": 25
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  layout: {\n    type: 'force',\n    // 防止节点重叠\n    preventOverlap: true,\n    // 节点大小\n    nodeSize: 20,\n    // 布局宽度\n    width: 800,\n    // 布局高度\n    height: 600,\n  },\n});\n",
        "paraId": 55,
        "tocIndex": 27
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'force',\n    // 防止节点重叠\n    preventOverlap: true,\n    // 节点大小\n    nodeSize: 20,\n  },\n});\n",
        "paraId": 56,
        "tocIndex": 28
    },
    {
        "value": "该示例展示了如何使用力导向布局创建一个基础的力导向图。",
        "paraId": 57,
        "tocIndex": 29
    },
    {
        "value": "import { Graph, NodeEvent } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', label: 'Node 1', size: 30 },\n    { id: 'node2', label: 'Node 2', size: 20 },\n    { id: 'node3', label: 'Node 3', size: 20 },\n    { id: 'node4', label: 'Node 4', size: 20 },\n    { id: 'node5', label: 'Node 5', size: 30 },\n    { id: 'node6', label: 'Node 6', size: 20 },\n  ],\n  edges: [\n    { source: 'node1', target: 'node2' },\n    { source: 'node1', target: 'node3' },\n    { source: 'node2', target: 'node4' },\n    { source: 'node3', target: 'node4' },\n    { source: 'node4', target: 'node5' },\n    { source: 'node5', target: 'node6' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  autoFit: 'view',\n  modes: {\n    default: ['drag-canvas', 'zoom-canvas'],\n  },\n  layout: {\n    type: 'force',\n    // 防止节点重叠\n    preventOverlap: true,\n    // 节点大小\n    nodeSize: 20,\n    // 向心力\n    gravity: 0.9,\n    // 迭代次数\n    iterations: 100,\n  },\n  node: {\n    style: {\n      size: (d) => d.size,\n      fill: '#9EC9FF',\n      stroke: '#69C8FF',\n      label: (d) => d.label,\n      labelPlacement: 'center',\n      labelFill: '#333',\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#e2e2e2',\n    },\n  },\n});\n\ngraph.on(NodeEvent.CLICK, async (e) => {\n  const nodeId = e.target.id;\n  graph.updateNodeData([{ id: nodeId, size: 200 }]);\n  await graph.render();\n});\n\ngraph.render();\n",
        "paraId": 58,
        "tocIndex": 29
    },
    {
        "value": "主要配置说明：",
        "paraId": 59,
        "tocIndex": 29
    },
    {
        "value": "preventOverlap",
        "paraId": 60,
        "tocIndex": 29
    },
    {
        "value": ": 开启节点重叠检测",
        "paraId": 60,
        "tocIndex": 29
    },
    {
        "value": "nodeSize",
        "paraId": 60,
        "tocIndex": 29
    },
    {
        "value": ": 设置节点大小",
        "paraId": 60,
        "tocIndex": 29
    },
    {
        "value": "gravity",
        "paraId": 60,
        "tocIndex": 29
    },
    {
        "value": ": 设置节点向心力",
        "paraId": 60,
        "tocIndex": 29
    },
    {
        "value": "iterations",
        "paraId": 60,
        "tocIndex": 29
    },
    {
        "value": ": 设置布局计算的精确程度",
        "paraId": 60,
        "tocIndex": 29
    },
    {
        "value": "还可以参考 ",
        "paraId": 61,
        "tocIndex": 29
    },
    {
        "value": "查看示例",
        "paraId": 61,
        "tocIndex": 29
    },
    {
        "value": " 获取更多用法。",
        "paraId": 61,
        "tocIndex": 29
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
//# sourceMappingURL=docs_manual_layout_ForceLayout_zh_md_q_hK4X-async.js.map