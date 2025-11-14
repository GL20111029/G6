((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/RandomLayout.zh.md?type=text'],
{ "docs/manual/layout/RandomLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/RandomLayout.zh.md?watch=parent");
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
        "value": "随机布局（Random Layout）",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 是一种基于简单规则的布局方式，其核心逻辑是为每个节点在指定布局区域（由布局中心点、宽度和高度定义）内生成随机坐标（完全随机，无节点防碰撞）。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "随机布局的使用场景非常局限，只推荐以下场景使用：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "数据初步展示",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ":",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "在开发初期调试数据加载逻辑或需要快速验证数据结构的情况下，可使用随机布局先行验证",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "业务最终交付推荐使用更能体现业务价值的布局方式，比如 ",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "AntVDagreLayout",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " 、",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "ForceLayout",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 或者",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "自定义布局",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "等。",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "其余均使用默认配置（布局宽高默认是整个画布容器）",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置\n  layout: {\n    type: 'random',\n  },\n});\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "布局类型",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "random",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "center",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "布局的中心",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "[",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "布局宽度",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " / 2, ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "布局高度",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " / 2]",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "height",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "布局的高度",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "画布高度",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "width",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "布局的宽度",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "画布宽度",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 300,\n  autoFit: 'view',\n  data: {\n    nodes: Array.from({ length: 50 }).map((_, i) => ({\n      id: `${i}`,\n    })),\n  },\n  node: {\n    style: {\n      labelText: (d) => d.id,\n    },\n  },\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n  layout: {\n    type: 'random',\n  },\n});\n\ngraph.render();\n",
        "paraId": 11,
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
//# sourceMappingURL=docs_manual_layout_RandomLayout_zh_md_q_hK4X-async.js.map