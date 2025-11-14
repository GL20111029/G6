((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/overview.zh.md?type=text'],
{ "docs/manual/element/overview.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/overview.zh.md?watch=parent");
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
        "value": "G6 图表的核心是由三种基本元素构成：",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "节点(Node)",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "、",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "边(Edge)",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 和 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "组合(Combo)",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "。这些元素是构建复杂图形网络的基础单元。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "节点",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " 表示图中的实体或概念，如人物、地点、对象等。G6 提供了丰富的内置节点类型：",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "G6 还支持 ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "使用 React 定义节点",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " 或 ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "自定义节点",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " 以满足特定需求。",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "边",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "表示节点间的连接关系，如朋友关系、交易往来等。G6 内置多种边类型：",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "当内置边不满足需求时，可以通过 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "自定义边",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " 来实现复杂的连接表现。",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "组合",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "是一种特殊元素，可以包含节点和其他组合，用于表示集合、分组或层级关系。G6 内置两种组合类型：",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "圆形组合",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "(",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "circle",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": ")：适合紧凑型分组",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "矩形组合",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "(",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "rect",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": ")：适合规则布局的分组",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "组合支持嵌套、拖拽、展开/收起等交互，可以通过 ",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "自定义组合",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": " 来实现更复杂的容器行为。",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "每个元素由一个或多个基础图形(Shape)组成。图形是 G6 中的最小图形单元，包括 ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "矩形",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "、",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "圆形",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "、",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "文本",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "、",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "路径",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "等。",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "例如：",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "一个节点可能由背景图形(如圆形)和文本标签组成",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "一条边可能由路径、箭头和文本标签组成",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "一个组合可能由容器图形、标题文本和展开/收起按钮组成",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "要了解更多关于图形的信息，请参阅 ",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "图形 Shape 总览",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": " 和 ",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Shape 样式属性",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "。",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "元素状态",
        "paraId": 25,
        "tocIndex": 5
    },
    {
        "value": " 是一种强大的机制，用于展示元素在不同交互或业务场景下的视觉变化。G6 提供了一套完整的状态管理系统：",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "预设状态",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "：",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "selected",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "(选中)、",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "highlight",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "(高亮)、",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "active",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "(激活)等",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "状态叠加",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "：元素可同时拥有多个状态，样式按优先级叠加",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "自定义状态",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "：可根据业务需求定义任意状态",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "G6 5.x 采用扁平化的配置结构，所有元素的配置都在同一层级，便于查找和管理：",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "{\n  node: {\n    // 节点默认样式\n    style: {\n      fill: 'orange',\n      labelText: 'node',\n    },\n    // 节点在不同状态下的样式\n    state: {\n      selected: {\n        stroke: '#1890FF',\n        lineWidth: 2,\n      }\n    }\n  },\n  edge: {\n    // 边默认样式\n    style: {\n      stroke: '#aaa',\n    },\n    // 边在不同状态下的样式\n    state: {\n      highlight: {\n        stroke: 'red',\n      }\n    }\n  },\n  combo: {\n    // 组合默认样式\n    style: {\n      fill: 'lightblue',\n      stroke: 'blue',\n    }\n  }\n};\n",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "配置方式有三种，按优先级从高到低：",
        "paraId": 30,
        "tocIndex": 6
    },
    {
        "value": "使用实例方法动态配置",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "：如 ",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "graph.setNode()",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "、",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "graph.setEdge()",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "、",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "graph.setCombo()",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "实例化图时全局配置",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "：在 ",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "new Graph()",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": " 时指定配置项",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "在数据中配置",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "：在节点、边、组合的数据对象中设置",
        "paraId": 31,
        "tocIndex": 6
    },
    {
        "value": "在 VSCode 等编辑器中，你可以看到元素的全部可配置属性，并基于关键字进行搜索：",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "G6 提供了强大的扩展能力，满足各种自定义需求：",
        "paraId": 33,
        "tocIndex": 7
    },
    {
        "value": "自定义节点",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "：",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "自定义节点指南",
        "paraId": 35,
        "tocIndex": 7
    },
    {
        "value": "自定义边",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "：",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "自定义边指南",
        "paraId": 36,
        "tocIndex": 7
    },
    {
        "value": "自定义组合",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "：",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "自定义组合指南",
        "paraId": 37,
        "tocIndex": 7
    },
    {
        "value": "React 节点",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "：",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "使用 React 定义节点",
        "paraId": 38,
        "tocIndex": 7
    },
    {
        "value": "3D 扩展",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "：通过 ",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "@antv/g6-extension-3d",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": " 使用 3D 节点",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "内置节点库",
        "paraId": 39,
        "tocIndex": 9
    },
    {
        "value": "内置边库",
        "paraId": 40,
        "tocIndex": 10
    },
    {
        "value": "内置组合库",
        "paraId": 41,
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
//# sourceMappingURL=docs_manual_element_overview_zh_md_q_hK4X-async.js.map