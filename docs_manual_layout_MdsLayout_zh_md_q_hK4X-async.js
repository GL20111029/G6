((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/MdsLayout.zh.md?type=text'],
{ "docs/manual/layout/MdsLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/MdsLayout.zh.md?watch=parent");
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
        "value": "MDS（多维尺度分析，Multidimensional Scaling）是一种经典的降维算法。在 G6 中，MDS 布局通过构造节点间的距离矩阵，在二维空间中尽可能还原它们在高维空间中的相对距离。适用于展示节点之间相似度、距离或结构关系的图可视化场景。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "数据降维可视化",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "展示节点之间的距离关系",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'mds',\n    center: [300, 300],\n    linkDistance: 100,\n  },\n});\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "配置项",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "布局类型",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "mds",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "是",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "center",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "圆形布局的中心位置",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "[number,number]",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "[0,0]",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "否",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "linkDistance",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "边的理想长度（弹簧未受力时的长度）",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "50",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "否",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "center",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "布局的中心点坐标，所有节点会围绕该点对称分布。",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "linkDistance",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "number Default: 50",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "节点之间的理想距离，越大则节点间距离越分散。",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: Array.from({ length: 25 }, (_, i) => ({\n    id: `node-${i}`,\n    data: {\n      value: Math.random() * 100,\n    },\n  })),\n  edges: Array.from({ length: 20 }, (_, i) => ({\n    id: `edge-${i}`,\n    source: `node-${Math.floor(Math.random() * 25)}`,\n    target: `node-${Math.floor(Math.random() * 25)}`,\n  })),\n};\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 300,\n  autoFit: 'view',\n  data,\n  node: {\n    style: {\n      labelText: (d) => d.id,\n    },\n  },\n  layout: {\n    type: 'mds',\n    nodeSize: 32,\n    linkDistance: 100,\n  },\n  behaviors: ['drag-element', 'drag-canvas', 'zoom-canvas'],\n});\n\ngraph.render();\n",
        "paraId": 9,
        "tocIndex": 4
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
//# sourceMappingURL=docs_manual_layout_MdsLayout_zh_md_q_hK4X-async.js.map