((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/FruchtermanLayout.zh.md?type=text'],
{ "docs/manual/layout/FruchtermanLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/FruchtermanLayout.zh.md?watch=parent");
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
        "value": "Fruchterman 布局是基于 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Graph Drawing by Force-directed Placement",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 算法实现的一种力导向布局，通过灵活的参数配置模拟物理作用，使整个布局自动达到能量最小的稳定平衡状态，支持基础均匀分布和聚类布局。参考更多 Fruchterman 力导向布局",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "样例",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "和",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "源码",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "基础均匀分布: 适用于展示节点均匀分布，整体结构清晰的网络关系图, 比如网络拓扑、知识图谱。",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "聚类布局: 适用于具有内部聚合特性或分组的数据可视化展示, 比如社区结构展示、关联组分析。",
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
        "value": "'fruchterman'",
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
        "value": "height",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "布局的高度",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "容器高度",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "width",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "布局的宽度",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "容器宽度",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "gravity",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "中心力大小，指所有节点被吸引到 ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "center",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " 的力。数字越大，布局越紧凑",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "10",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "speed",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "每次迭代节点移动的速度。速度太快可能会导致强烈震荡",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "5",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "onTick",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "每一次迭代的回调函数",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(data: ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "LayoutMapping",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": ") => void",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clustering",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "是否按照聚类布局",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "nodeClusterBy",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "聚类布局依据的节点数据 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "data",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " 中的字段名，在 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clustering",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " 为 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " 时生效",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'cluster'",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clusterGravity",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "聚类内部的重力大小，影响聚类的紧凑程度，在 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "clustering",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " 为 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " 时生效",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 500,\n  height: 250,\n  data: {\n    nodes: [\n      { id: '0' },\n      { id: '1' },\n      { id: '2' },\n      { id: '3' },\n      { id: '4' },\n      { id: '5' },\n      { id: '6' },\n      { id: '7' },\n      { id: '8' },\n      { id: '9' },\n      { id: '10' },\n    ],\n    edges: [\n      { source: '0', target: '1' },\n      { source: '0', target: '2' },\n      { source: '0', target: '3' },\n      { source: '0', target: '4' },\n      { source: '0', target: '7' },\n      { source: '0', target: '8' },\n      { source: '0', target: '9' },\n      { source: '0', target: '10' },\n      { source: '2', target: '3' },\n      { source: '4', target: '5' },\n      { source: '4', target: '6' },\n      { source: '5', target: '6' },\n      { source: '9', target: '10' },\n    ],\n  },\n  node: {\n    style: {\n      labelFill: '#fff',\n      labelPlacement: 'center',\n      labelText: (d) => d.id,\n    },\n  },\n  layout: {\n    type: 'fruchterman',\n    gravity: 5,\n    speed: 5,\n  },\n  behaviors: ['drag-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "展开查看完整代码",
        "paraId": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: '0' },\n    { id: '1' },\n    { id: '2' },\n    { id: '3' },\n    { id: '4' },\n    { id: '5' },\n    { id: '6' },\n    { id: '7' },\n    { id: '8' },\n    { id: '9' },\n    { id: '10' },\n  ],\n  edges: [\n    { source: '0', target: '1' },\n    { source: '0', target: '2' },\n    { source: '0', target: '3' },\n    { source: '0', target: '4' },\n    { source: '0', target: '7' },\n    { source: '0', target: '8' },\n    { source: '0', target: '9' },\n    { source: '0', target: '10' },\n    { source: '2', target: '3' },\n    { source: '4', target: '5' },\n    { source: '4', target: '6' },\n    { source: '5', target: '6' },\n    { source: '9', target: '10' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      labelFill: '#fff',\n      labelPlacement: 'center',\n      labelText: (d) => d.id,\n    },\n  },\n  layout: {\n    type: 'fruchterman',\n    gravity: 5,\n    speed: 5,\n  },\n  behaviors: ['drag-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 500,\n  height: 250,\n  data: {\n    nodes: [\n      { id: '0', data: { cluster: 'a' } },\n      { id: '1', data: { cluster: 'a' } },\n      { id: '2', data: { cluster: 'a' } },\n      { id: '3', data: { cluster: 'a' } },\n      { id: '4', data: { cluster: 'a' } },\n      { id: '5', data: { cluster: 'b' } },\n      { id: '6', data: { cluster: 'b' } },\n      { id: '7', data: { cluster: 'b' } },\n      { id: '8', data: { cluster: 'c' } },\n      { id: '9', data: { cluster: 'c' } },\n      { id: '10', data: { cluster: 'c' } },\n    ],\n    edges: [\n      { source: '0', target: '1' },\n      { source: '0', target: '2' },\n      { source: '0', target: '4' },\n      { source: '0', target: '6' },\n      { source: '2', target: '3' },\n      { source: '2', target: '4' },\n      { source: '3', target: '4' },\n      { source: '5', target: '6' },\n      { source: '6', target: '7' },\n      { source: '7', target: '8' },\n      { source: '8', target: '9' },\n      { source: '8', target: '10' },\n    ],\n  },\n  node: {\n    style: {\n      labelFill: '#fff',\n      labelPlacement: 'center',\n      labelText: (d) => `${d.data.cluster}-${d.id}`,\n    },\n    palette: {\n      type: 'group',\n      field: 'cluster',\n    },\n  },\n  edge: {\n    style: {\n      endArrow: true,\n    },\n  },\n  layout: {\n    type: 'fruchterman',\n    gravity: 6,\n    speed: 5,\n\n    // 聚类布局参数\n    clustering: true,\n    nodeClusterBy: 'cluster',\n    clusterGravity: 3,\n  },\n  behaviors: ['drag-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "展开查看完整代码",
        "paraId": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: '0', data: { cluster: 'a' } },\n    { id: '1', data: { cluster: 'a' } },\n    { id: '2', data: { cluster: 'a' } },\n    { id: '3', data: { cluster: 'a' } },\n    { id: '4', data: { cluster: 'a' } },\n    { id: '5', data: { cluster: 'b' } },\n    { id: '6', data: { cluster: 'b' } },\n    { id: '7', data: { cluster: 'b' } },\n    { id: '8', data: { cluster: 'c' } },\n    { id: '9', data: { cluster: 'c' } },\n    { id: '10', data: { cluster: 'c' } },\n  ],\n  edges: [\n    { source: '0', target: '1' },\n    { source: '0', target: '2' },\n    { source: '0', target: '4' },\n    { source: '0', target: '6' },\n    { source: '2', target: '3' },\n    { source: '2', target: '4' },\n    { source: '3', target: '4' },\n    { source: '5', target: '6' },\n    { source: '6', target: '7' },\n    { source: '7', target: '8' },\n    { source: '8', target: '9' },\n    { source: '8', target: '10' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      labelFill: '#fff',\n      labelPlacement: 'center',\n      labelText: (d) => `${d.data.cluster}-${d.id}`,\n    },\n    palette: {\n      type: 'group',\n      field: 'cluster',\n    },\n  },\n  edge: {\n    style: {\n      endArrow: true,\n    },\n  },\n  layout: {\n    type: 'fruchterman',\n    gravity: 6,\n    speed: 5,\n\n    // 聚类布局参数\n    clustering: true,\n    nodeClusterBy: 'cluster',\n    clusterGravity: 3,\n  },\n  behaviors: ['drag-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 9,
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
//# sourceMappingURL=docs_manual_layout_FruchtermanLayout_zh_md_q_hK4X-async.js.map