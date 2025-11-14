((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ComboCombinedLayout.zh.md?type=text'],
{ "docs/manual/layout/ComboCombinedLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/ComboCombinedLayout.zh.md?watch=parent");
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
        "value": "ComboCombined 复合布局适用于复合分组结构的图数据展示场景，支持灵活配置 Combo 内部元素的布局以及最外层 Combo 和节点之间的布局。 默认情况内部元素采用 Concentric 同心圆布局，外部布局采用 gForce 力导向布局，兼顾布局效果与整体稳定性。参考更多 ComboCombined 复合布局",
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
        "value": "用户画像分析: 分析用户行为与商品关系，将用户兴趣圈层作为 Combo，内部节点展示具体商品和行为标签，帮助运营人员识别用户消费路径。",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "供应链管理图：供应商、制造商、仓储、分销商按角色或区域划分 Combo，内部节点展示资源、人员或设备，清晰展示供应链各环节内部结构。",
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
        "value": "combo-combined",
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
        "value": "center",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "布局中心",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "PointTuple",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "图中心",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "comboPadding",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Combo 内部的 padding 值，不用于渲染，仅用于计算力。推荐设置为与视图上 Combo 内部 padding 值相同的值",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "((d?: unknown) => number)",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number[]",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "undefined",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "10",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "innerLayout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Combo 内部的布局算法, ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "说明",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Layout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "ConcentricLayout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "nodeSize",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "节点大小（直径）。用于碰撞检测。若不指定，则根据传入的节点的 size 属性计算。若即不指定，节点中也没有 size，则默认大小为 10",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number[]",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | (d?: ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "NodeData",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": ") => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "10",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "outerLayout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "最外层的布局算法, ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "说明",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Layout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "ForceLayout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "spacing",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "preventNodeOverlap 或 preventOverlap 为 ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " 时生效, 防止重叠时节点 / Combo 边缘间距的最小值。可以是回调函数, 为不同节点设置不同的最小间距",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " | (d?: ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "NodeData",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": ") => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "treeKey",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "treeKey",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Layout<any>",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Default:",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "ConcentricLayout",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Combo 内部的布局算法，需要使用同步的布局算法，默认为 ",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "ConcentricLayout",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "，",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "更多布局算法",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "示例",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "import { ConcentricLayout } from '@antv/layout';\n\nnew Graph({\n  layout: {\n    type: 'combo-combined',\n    /**\n     * 查看更多 ConcentricLayout 配置参数:\n     * https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L397\n     */\n    innerLayout: new ConcentricLayout({\n      sortBy: 'id',\n      nodeSize: 20,\n      clockwise: true,\n    }),\n  },\n});\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "Layout<any>",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "Default:",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "ForceLayout",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "最外层的布局算法，默认为 ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "ForceLayout",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "，",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "更多布局算法",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "import { ForceLayout } from '@antv/layout';\n\nnew Graph({\n  layout: {\n    type: 'combo-combined',\n    /**\n     * 查看更多 ForceLayout 配置参数:\n     * https://github.com/antvis/layout/blob/v5/packages/layout/src/types.ts#L950\n     */\n    outerLayout: new ForceLayout({\n      gravity: 1,\n      factor: 2,\n      linkDistance: (edge: any, source: any, target: any) => {\n        const nodeSize = ((source.size?.[0] || 30) + (target.size?.[0] || 30)) / 2;\n        return Math.min(nodeSize * 1.5, 70);\n      },\n    }),\n  },\n});\n",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfetch('https://assets.antv.antgroup.com/g6/combo.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      data,\n      layout: {\n        type: 'combo-combined',\n        comboPadding: 2,\n      },\n      node: {\n        style: {\n          size: 20,\n          labelText: (d) => d.id,\n        },\n        palette: {\n          type: 'group',\n          field: (d) => d.combo,\n        },\n      },\n      edge: {\n        style: (model) => {\n          const { size, color } = model.data;\n          return {\n            stroke: color || '#99ADD1',\n            lineWidth: size || 1,\n          };\n        },\n      },\n      behaviors: ['drag-element', 'drag-canvas', 'zoom-canvas'],\n      autoFit: 'view',\n    });\n\n    graph.render();\n  });\n",
        "paraId": 16,
        "tocIndex": 5
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
//# sourceMappingURL=docs_manual_layout_ComboCombinedLayout_zh_md_q_hK4X-async.js.map