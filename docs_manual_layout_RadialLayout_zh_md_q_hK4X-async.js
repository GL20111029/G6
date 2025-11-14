((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/RadialLayout.zh.md?type=text'],
{ "docs/manual/layout/RadialLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/RadialLayout.zh.md?watch=parent");
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
        "value": "径向（Radial）布局是一种将节点以同心圆方式分层排列的图布局算法，常用于展示层级关系、社群结构等。该布局支持节点防重叠、分组排序等高级特性，适用于多种网络结构的可视化。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "展示层级结构（如组织架构、家谱等）",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "社群结构分析",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "需要突出中心节点及其辐射关系的场景",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "需要节点分组、排序的复杂网络",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    autoFit: 'view',\n    data: {\n      nodes: [\n        { id: '0' },\n        { id: '1' },\n        { id: '2' },\n        { id: '3' },\n        { id: '4' },\n        { id: '5' },\n        { id: '6' },\n        { id: '7' },\n        { id: '8' },\n        { id: '9' },\n        { id: '10' },\n        { id: '11' },\n        { id: '12' },\n        { id: '13' },\n        { id: '14' },\n        { id: '15' },\n        { id: '16' },\n        { id: '17' },\n        { id: '18' },\n        { id: '19' },\n        { id: '20' },\n        { id: '21' },\n        { id: '22' },\n        { id: '23' },\n        { id: '24' },\n        { id: '25' },\n        { id: '26' },\n        { id: '27' },\n        { id: '28' },\n        { id: '29' },\n        { id: '30' },\n        { id: '31' },\n        { id: '32' },\n        { id: '33' },\n      ],\n      edges: [\n        { source: '0', target: '1' },\n        { source: '0', target: '2' },\n        { source: '0', target: '3' },\n        { source: '0', target: '4' },\n        { source: '0', target: '5' },\n        { source: '0', target: '7' },\n        { source: '0', target: '8' },\n        { source: '0', target: '9' },\n        { source: '0', target: '10' },\n        { source: '0', target: '11' },\n        { source: '0', target: '13' },\n        { source: '0', target: '14' },\n        { source: '0', target: '15' },\n        { source: '0', target: '16' },\n        { source: '2', target: '3' },\n        { source: '4', target: '5' },\n        { source: '4', target: '6' },\n        { source: '5', target: '6' },\n        { source: '7', target: '13' },\n        { source: '8', target: '14' },\n        { source: '10', target: '22' },\n        { source: '10', target: '14' },\n        { source: '10', target: '12' },\n        { source: '10', target: '24' },\n        { source: '10', target: '21' },\n        { source: '10', target: '20' },\n        { source: '11', target: '24' },\n        { source: '11', target: '22' },\n        { source: '11', target: '14' },\n        { source: '12', target: '13' },\n        { source: '16', target: '17' },\n        { source: '16', target: '18' },\n        { source: '16', target: '21' },\n        { source: '16', target: '22' },\n        { source: '17', target: '18' },\n        { source: '17', target: '20' },\n        { source: '18', target: '19' },\n        { source: '19', target: '20' },\n        { source: '19', target: '33' },\n        { source: '19', target: '22' },\n        { source: '19', target: '23' },\n        { source: '20', target: '21' },\n        { source: '21', target: '22' },\n        { source: '22', target: '24' },\n        { source: '22', target: '26' },\n        { source: '22', target: '23' },\n        { source: '22', target: '28' },\n        { source: '22', target: '30' },\n        { source: '22', target: '31' },\n        { source: '22', target: '32' },\n        { source: '22', target: '33' },\n        { source: '23', target: '28' },\n        { source: '23', target: '27' },\n        { source: '23', target: '29' },\n        { source: '23', target: '30' },\n        { source: '23', target: '31' },\n        { source: '23', target: '33' },\n        { source: '32', target: '33' },\n      ],\n    },\n    node: {\n      style: {\n        labelFill: '#fff',\n        labelPlacement: 'center',\n        labelText: (d) => d.id,\n      },\n    },\n    layout: {\n      type: 'radial',\n      nodeSize: 32,\n      unitRadius: 100,\n      linkDistance: 200,\n    },\n    behaviors: ['drag-canvas', 'drag-element'],\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      nodeSize: 32,\n      unitRadius: 100,\n      linkDistance: 200,\n      preventOverlap: false,\n      strictRadial: true,\n      sortBy: undefined,\n      sortStrength: 10,\n    };\n    const optionFolder = gui.addFolder('Radial Layout Options');\n    optionFolder.add(options, 'nodeSize', 1, 100, 1);\n    optionFolder.add(options, 'unitRadius', 10, 300, 1);\n    optionFolder.add(options, 'linkDistance', 10, 400, 1);\n    optionFolder.add(options, 'preventOverlap');\n    optionFolder.add(options, 'strictRadial');\n    optionFolder.add(options, 'sortStrength', 1, 100, 1);\n    optionFolder.add(options, 'sortBy', [undefined, 'data', 'id']);\n    optionFolder.onChange(async ({ property, value }) => {\n      graph.setLayout(\n        Object.assign({}, graph.getLayout(), {\n          [property]: value,\n        }),\n      );\n      await graph.layout();\n      graph.fitView();\n    });\n  },\n);\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'radial',\n    nodeSize: 32,\n    unitRadius: 100,\n    linkDistance: 200,\n  },\n  // 其他配置...\n});\n",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "布局类型",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "radial",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "center",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "圆心坐标",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "[number, number]",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "focusNode",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "辐射中心节点",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "string | Node | null",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "null",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "height",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "画布高度",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "width",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "画布宽度",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeSize",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "节点大小（直径）",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeSpacing",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "节点最小间距（防重叠时生效）",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number | (nodeData: Node) => number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "linkDistance",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "边长度",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "50",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "unitRadius",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "每圈半径",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number | null",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "100",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "maxIteration",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "最大迭代次数",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "1000",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "maxPreventOverlapIteration",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "防重叠最大迭代次数",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "200",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "preventOverlap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "是否防止节点重叠",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "sortBy",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "同层节点排序字段",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "sortStrength",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "同层节点排序强度",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "strictRadial",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "是否严格每层节点在同一圆环上（防重叠时生效）",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://assets.antv.antgroup.com/g6/radial.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      data,\n      autoFit: 'center',\n      layout: {\n        type: 'radial',\n        nodeSize: 32,\n        unitRadius: 100,\n        linkDistance: 200,\n      },\n      node: {\n        style: {\n          labelFill: '#fff',\n          labelPlacement: 'center',\n          labelText: (d) => d.id,\n        },\n      },\n      behaviors: ['drag-canvas', 'drag-element'],\n    });\n    graph.render();\n  });\n",
        "paraId": 5,
        "tocIndex": 6
    },
    {
        "value": "效果如下：",
        "paraId": 6,
        "tocIndex": 6
    },
    {
        "value": "基本 Radial 辐射布局",
        "paraId": 7,
        "tocIndex": 7
    },
    {
        "value": "防止节点重叠的严格辐射布局",
        "paraId": 8,
        "tocIndex": 7
    },
    {
        "value": "防止节点重叠的非严格辐射布局",
        "paraId": 9,
        "tocIndex": 7
    },
    {
        "value": "排序聚类",
        "paraId": 10,
        "tocIndex": 7
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
//# sourceMappingURL=docs_manual_layout_RadialLayout_zh_md_q_hK4X-async.js.map