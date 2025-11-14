((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/MindmapLayout.zh.md?type=text'],
{ "docs/manual/layout/MindmapLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/MindmapLayout.zh.md?watch=parent");
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
        "value": "脑图树布局适用于树状结构的层次化布局，支持左右两侧展开，深度相同的节点将会被放置在同一层。需要注意：布局",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "会",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "考虑节点的大小。参考更多脑图布局",
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
        "value": "const graph = new Graph({\n  layout: {\n    type: 'mindmap',\n    direction: 'H',\n    preLayout: false,\n    getHeight: () => 32,\n    getWidth: () => 32,\n    getVGap: () => 16,\n    getHGap: () => 72,\n  },\n});\n",
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
        "value": "mindmap",
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
        "value": "direction",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "布局方向，",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "可选值",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "H",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "RL",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "TB",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "BT",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "LR",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getHeight",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "计算每个节点的高度",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getWidth",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "计算每个节点的宽度",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getVGap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "每个节点的垂直间隙，注意实际两个节点间的垂直间隙是2倍的vgap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getHGap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "每个节点的水平间隙，注意实际两个节点间的水平间隙是2倍的hgap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getSide",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "设置节点排布在根节点的左侧/右侧，如未设置，则算法自动分配左侧/右侧。注意：该参数仅在",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "H",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "布局方向上生效",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => string",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "H",
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
        "value": " | ",
        "paraId": 5,
        "tocIndex": 3
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
        "value": " ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Default:",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "'LR'",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "树布局的方向",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "'H'",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "：horizontal（水平）—— 根节点的子节点分成两部分横向放置在根节点左右两侧。可传入",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "getSide",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "方法指定每个节点的左右分布逻辑，不传则默认将前半部分放置在右侧，后半部分放置在左侧。",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "'LR' | 'TB'",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "：将子节点排布在根节点的右侧；",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "'RL'",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "：将子节点排布在根节点的左侧；",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "：将子节点排布在根节点右侧，然后将整个图沿X轴旋转180°；",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "每个节点的宽度",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "示例：",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "每个节点的高度",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "示例：",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "每个节点的水平间隙",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": "示例：",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 22,
        "tocIndex": 6
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 23,
        "tocIndex": 7
    },
    {
        "value": "每个节点的垂直间隙",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "示例：",
        "paraId": 25,
        "tocIndex": 7
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 26,
        "tocIndex": 7
    },
    {
        "value": "(d?: Node) => string",
        "paraId": 27,
        "tocIndex": 8
    },
    {
        "value": "设置节点排布在根节点的左侧/右侧。注意：该参数仅在",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "direction",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "为",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "H",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "时生效。如未设置，会默认将子节点前半部分放置在右侧，后半部分放置在左侧，参考",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "getSide自动计算逻辑",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "。",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "示例：",
        "paraId": 29,
        "tocIndex": 8
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  if (d.id === 'test-child-id') return 'right';\n  return 'left';\n};\n",
        "paraId": 30,
        "tocIndex": 8
    },
    {
        "value": "数据血缘图：",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "direction='H'",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "很适合渲染血缘图中查看指定节点的上下游血缘的场景，上游分布在中心节点的左侧，下游分布在右侧；",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "思维导图：构建自定义的思维导图组件。",
        "paraId": 31,
        "tocIndex": 9
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
//# sourceMappingURL=docs_manual_layout_MindmapLayout_zh_md_q_hK4X-async.js.map