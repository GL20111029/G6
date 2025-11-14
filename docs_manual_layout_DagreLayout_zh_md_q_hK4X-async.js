((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/DagreLayout.zh.md?type=text'],
{ "docs/manual/layout/DagreLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/DagreLayout.zh.md?watch=parent");
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
        "value": "Dagre 是一种层次化布局，适用于有向无环图（DAG）的布局场景，能够自动处理节点之间的方向和间距，支持水平和垂直布局。参考更多 Dagre 布局",
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
        "value": "以及",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "官方文档",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'dagre',\n    rankdir: 'TB',\n    align: 'UL',\n    nodesep: 50,\n    ranksep: 50,\n    controlPoints: false,\n  },\n});\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "更多配置项可参考",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "官方文档",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "布局类型",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "dagre",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "rankdir",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "布局方向，可选值",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "TB",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "BT",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "RL",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "TB",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "align",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "节点对齐方式，可选值",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "UL",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "UR",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "DL",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "DR",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "UL",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "nodesep",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "节点间距（px）。在rankdir 为 ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "TB",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 或 ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "BT",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 时是节点的水平间距；在rankdir 为 ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 或 ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "RL",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 时代表节点的竖直方向间距",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "50",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "ranksep",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "层间距（px）。在rankdir 为 ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "TB",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 或 ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "BT",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 时是竖直方向相邻层间距；在rankdir 为 ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 或 ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "RL",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 时代表水平方向相邻层间距",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "100",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "ranker",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "为每个节点分配等级的算法，共支持三种算法，分别是：",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "longest-path",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 最长路径算法、",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "tight-tree",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 紧凑树算法、",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "network-simplex",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " 网络单形法",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "network-simplex",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "tight-tree",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "longest-path",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "network-simplex",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "nodeSize",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "G6自定义属性，统一指定或为每个节点指定节点大小。如果仅返回单个number，则表示节点的宽度和高度相同；如果返回一个数组，则形如：",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "[width, height]",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "number | number[] | () => (number | number[])",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "controlPoints",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "是否保留边的控制点",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "TB",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "RL",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "， ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": ": ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "TB",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "布局方向",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "TB",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "：从上到下；",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "：从下到上；",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "：从左到右；",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "RL",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "：从右到左。",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "UL",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "UR",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "DL",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "DR",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "， ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ": ",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "UL",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "节点对齐方式",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "UL",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "：左上对齐",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "UR",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "：右上对齐",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "DL",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "：左下对齐",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "DR",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "：右下对齐",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "number， ",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "Default",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": ": 50",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "节点间距（px）。在rankdir 为 ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "TB",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " 或 ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "BT",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " 时是节点的水平间距；在rankdir 为 ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "LR",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " 或 ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "RL",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " 时代表节点的竖直方向间距",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "number， ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": ": 50",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "层间距（px）。在rankdir 为 ",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "TB",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": " 或 ",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "BT",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": " 时是竖直方向相邻层间距；在rankdir 为 ",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "LR",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": " 或 ",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "RL",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": " 时代表水平方向相邻层间距",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "network-simplex",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "tight-tree",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "longest-path",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "， ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": ": ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "network-simplex",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "为每个节点分配层级的算法，共支持三种算法，分别是：",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "longest-path",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "： 最长路径算法，使用DFS深度优先搜索，递归查找每个节点的最长路径。优点是计算简单速度快，但会导致长边过多；",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "tight-tree",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "： 紧凑树算法，一种优化算法，目的是减少长边的数量。先用最长路径算法",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "longest-path",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "计算出初始层级，然后调整松弛边的长度，从而构建可行树。",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "network-simplex",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "： 网络单形法，参考算法",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "A Technique for Drawing Directed Graphs",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "，核心思想是迭代修改节点的层级，缩小松弛边。",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "number | number[] | () => (number | number[])",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "G6自定义属性，统一指定或为每个节点指定节点大小。如果仅返回单个number，则表示节点的宽度和高度相同；如果返回一个数组，则形如：",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "[width, height]",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  if (d.id === 'testId') return 20;\n  return [10, 20];\n};\n",
        "paraId": 23,
        "tocIndex": 8
    },
    {
        "value": "boolean， ",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "Default",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": ": false",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "是否保留边的控制点。",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": "流程图",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "：适合展示流程图，节点之间的方向和间距会自动处理；",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "依赖关系图",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "：展示软件包或模块之间的依赖关系；",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "任务调度图",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "：展示任务之间的依赖关系和执行顺序。",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "以下文档可以帮助你更好地理解Dagre 布局",
        "paraId": 27,
        "tocIndex": 11
    },
    {
        "value": "图布局算法｜详解 Dagre 布局",
        "paraId": 28,
        "tocIndex": 11
    },
    {
        "value": "深入解读Dagre布局算法",
        "paraId": 28,
        "tocIndex": 11
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
//# sourceMappingURL=docs_manual_layout_DagreLayout_zh_md_q_hK4X-async.js.map