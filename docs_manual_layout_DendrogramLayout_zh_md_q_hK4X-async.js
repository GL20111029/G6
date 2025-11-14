((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/DendrogramLayout.zh.md?type=text'],
{ "docs/manual/layout/DendrogramLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/DendrogramLayout.zh.md?watch=parent");
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
        "value": "生态树布局适用于层次聚类数据的可视化，其特点是所有子节点布局在同一层级，不考虑节点大小，每个节点被当成 1px 处理。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'dendrogram',\n    direction: 'LR',\n    nodeSep: 30,\n    rankSep: 250,\n    radial: false,\n  },\n});\n",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "属性",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "布局类型",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "dendrogram",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "direction",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "布局方向，",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "可选值",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "RL",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "TB",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "BT",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "H",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "V",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "nodeSep",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "节点间距，即同一层级节点之间的距离，单位为像素",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "20",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "rankSep",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "层级间距，即不同层级之间的距离，单位为像素",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "200",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "radial",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "是否启用辐射状布局，",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "说明",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "树布局的方向，有以下选项：",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "TB",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "：根节点在上，往下布局",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "：根节点在下，往上布局",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "：根节点在左，往右布局",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "RL",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "：根节点在右，往左布局",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "H",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "：根节点在中间，水平对称布局",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "V",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "：根节点在中间，垂直对称布局",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "是否启用辐射状布局模式。启用后，节点将以根节点为中心呈辐射状分布。",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "若 ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "radial",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " 设置为 ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "，建议将 ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "direction",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " 设置为 ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "'LR'",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " 或 ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "'RL'",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " 以获得最佳效果。",
        "paraId": 13,
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
//# sourceMappingURL=docs_manual_layout_DendrogramLayout_zh_md_q_hK4X-async.js.map