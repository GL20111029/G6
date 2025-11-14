((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/BaseLayout.zh.md?type=text'],
{ "docs/manual/layout/BaseLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/BaseLayout.zh.md?watch=parent");
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
        "value": "本文介绍内置布局通用属性配置。",
        "paraId": 0
    },
    {
        "value": "属性",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "描述",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "类型",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "默认值",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "必选",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "type",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "布局类型，内置布局或自定义布局的名称",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Type",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "-",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "✓",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "isLayoutInvisibleNodes",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "不可见节点是否参与布局（当 preLayout 为 true 时生效）",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "boolean",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "false",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "nodeFilter",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "参与该布局的节点",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "(node: NodeData) => boolean",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "() => true",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "comboFilter",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "参与该布局的combo元素",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "(combo: ComboData) => boolean",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "() => true",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "preLayout",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "使用前布局，在初始化元素前计算布局",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "boolean",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "false",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "enableWorker",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "是否在 WebWorker 中运行布局",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "boolean",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "-",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "iterations",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "迭代布局的迭代次数",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "number",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "-",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "指定布局类型，内置布局类型名称或自定义布局的名称。",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  layout: {\n    type: 'antv-dagre',\n  },\n});\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "可选值有：",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "antv-dagre",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "基于 dagre 定制的布局",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "circular",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "环形布局",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "combo-combined",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "适用于存在组合的布局",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "concentric",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "同心圆布局",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": "d3-force",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "基于 D3 的力导向布局",
        "paraId": 11,
        "tocIndex": 1
    },
    {
        "value": "d3-force-3d",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "3D力导向布局",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "dagre",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "dagre 布局",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "fishbone",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "鱼骨布局",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "force",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "力导向布局",
        "paraId": 15,
        "tocIndex": 1
    },
    {
        "value": "force-atlas2",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "ForceAtlas2 布局",
        "paraId": 16,
        "tocIndex": 1
    },
    {
        "value": "fruchterman",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Fruchterman 布局",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "grid",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "网格布局",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "mds",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "高维数据降维算法布局",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": "radial",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "径向布局",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": "random",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "随机布局",
        "paraId": 21,
        "tocIndex": 1
    },
    {
        "value": "snake",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "蛇形布局",
        "paraId": 22,
        "tocIndex": 1
    },
    {
        "value": "compact-box",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "紧凑树布局",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "dendrogram",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "树状布局",
        "paraId": 24,
        "tocIndex": 1
    },
    {
        "value": "mindmap",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "思维导图布局",
        "paraId": 25,
        "tocIndex": 1
    },
    {
        "value": "indented",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "缩进树布局",
        "paraId": 26,
        "tocIndex": 1
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
//# sourceMappingURL=docs_manual_layout_BaseLayout_zh_md_q_hK4X-async.js.map