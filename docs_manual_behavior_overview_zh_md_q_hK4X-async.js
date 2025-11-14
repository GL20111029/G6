((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/overview.zh.md?type=text'],
{ "docs/manual/behavior/overview.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/overview.zh.md?watch=parent");
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
        "value": "交互(Behavior)是指用户与图表元素之间的互动操作，如拖拽画布、选择节点、缩放视图等。良好的交互设计能让用户更直观地探索和理解图数据。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "合理配置交互是构建高效可用图表的关键环节",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6 5.0 移除了 \"交互模式\"(Mode) 概念，直接在 ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "behaviors",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " 中列出需要的交互行为，简化了配置方式。这使得交互配置更加直观，上手更加简单。",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  behaviors: ['drag-canvas', 'zoom-canvas', 'click-select'],\n});\n",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "G6 提供了多种开箱即用的内置交互，",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "无需注册，直接配置即可使用",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "：",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "分类",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "交互名称",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "注册类型",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "功能描述",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "导航",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "拖拽画布",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "drag-canvas",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "拖动整个画布视图",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "缩放画布",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "zoom-canvas",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "缩放画布视图",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "滚动画布",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "scroll-canvas",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "使用滚轮滚动画布",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "优化视口变换",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "optimize-viewport-transform",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "优化视图变换性能",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "选择",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "点击选择",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "click-select",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "点击选择图元素",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "框选",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "brush-select",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "通过拖拽矩形区域选择元素",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "套索选择",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "lasso-select",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "自由绘制区域选择元素",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "编辑",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "创建边",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": "create-edge",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "交互式创建新的边",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "拖拽元素",
        "paraId": 13,
        "tocIndex": 2
    },
    {
        "value": "drag-element",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "拖动节点或组合",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "力导向拖拽",
        "paraId": 14,
        "tocIndex": 2
    },
    {
        "value": "drag-element-force",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "力导向布局中拖动节点",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "数据探索",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "折叠/展开",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "collapse-expand",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "展开或收起子树节点",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "聚焦元素",
        "paraId": 16,
        "tocIndex": 2
    },
    {
        "value": "focus-element",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "聚焦特定元素，自动调整视图",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "悬停激活",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": "hover-activate",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "鼠标悬停时高亮元素",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "视觉优化",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "固定元素大小",
        "paraId": 18,
        "tocIndex": 2
    },
    {
        "value": "fix-element-size",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "将元素大小固定为指定值",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "自适应标签",
        "paraId": 19,
        "tocIndex": 2
    },
    {
        "value": "auto-adapt-label",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "自动调整标签位置",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "各交互的详细配置可参考 ",
        "paraId": 20,
        "tocIndex": 2
    },
    {
        "value": "内置交互文档",
        "paraId": 21,
        "tocIndex": 2
    },
    {
        "value": "。",
        "paraId": 20,
        "tocIndex": 2
    },
    {
        "value": "某些交互在触发机制上可能存在重叠，如 ",
        "paraId": 22
    },
    {
        "value": "brush-select",
        "paraId": 22
    },
    {
        "value": " 和 ",
        "paraId": 22
    },
    {
        "value": "drag-canvas",
        "paraId": 22
    },
    {
        "value": " 都使用鼠标拖拽。这种情况下可以通过修改触发按键（如按住 ",
        "paraId": 22
    },
    {
        "value": "Shift",
        "paraId": 22
    },
    {
        "value": " 拖拽选择）来避免冲突。",
        "paraId": 22
    },
    {
        "value": "当内置交互无法满足需求时，G6 提供了强大的自定义能力：",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "继承内置交互进行扩展",
        "paraId": 24,
        "tocIndex": 3
    },
    {
        "value": "创建全新的交互行为",
        "paraId": 24,
        "tocIndex": 3
    },
    {
        "value": "与内置交互不同，",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": "自定义交互需要先注册后使用",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": "。详细教程请参考 ",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": "自定义交互",
        "paraId": 26,
        "tocIndex": 3
    },
    {
        "value": " 文档。",
        "paraId": 25,
        "tocIndex": 3
    },
    {
        "value": "最简单的方式是在图实例初始化时，通过 ",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "behaviors",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": " 数组直接指定需要的交互：",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: ['drag-canvas', 'zoom-canvas', 'click-select'],\n});\n",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "对于需要自定义参数的交互，可以使用 ",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "object",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": " 的形式配置属性：",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    'drag-canvas',\n    {\n      type: 'zoom-canvas',\n      sensitivity: 1.5, // 配置灵敏度\n      key: 'zoom-behavior', // 为交互指定key，便于后续更新\n    },\n  ],\n});\n",
        "paraId": 30,
        "tocIndex": 6
    },
    {
        "value": "G6 支持在图实例运行期间动态管理交互行为，满足复杂交互需求：",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "可以通过 ",
        "paraId": 32,
        "tocIndex": 7
    },
    {
        "value": "setBehaviors",
        "paraId": 33,
        "tocIndex": 7
    },
    {
        "value": " 方法调整交互：",
        "paraId": 32,
        "tocIndex": 7
    },
    {
        "value": "// 添加新交互\ngraph.setBehaviors((behaviors) => [...behaviors, 'lasso-select']);\n\n// 移除交互\ngraph.setBehaviors((behaviors) => behaviors.filter((b) => b !== 'click-select'));\n",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "可以使用 ",
        "paraId": 35,
        "tocIndex": 7
    },
    {
        "value": "updateBehavior",
        "paraId": 36,
        "tocIndex": 7
    },
    {
        "value": " 方法更新交互的配置：",
        "paraId": 35,
        "tocIndex": 7
    },
    {
        "value": "// 更新单个交互\ngraph.updateBehavior({\n  key: 'zoom-behavior',\n  sensitivity: 2,\n  enable: false, // 禁用该交互\n});\n",
        "paraId": 37,
        "tocIndex": 7
    },
    {
        "value": "使用",
        "paraId": 38
    },
    {
        "value": "updateBehavior",
        "paraId": 38
    },
    {
        "value": "方法时，需要在初始化时为交互指定唯一的",
        "paraId": 38
    },
    {
        "value": "key",
        "paraId": 38
    },
    {
        "value": "。",
        "paraId": 38
    },
    {
        "value": "使用 ",
        "paraId": 39,
        "tocIndex": 8
    },
    {
        "value": "setBehaviors",
        "paraId": 40,
        "tocIndex": 8
    },
    {
        "value": " 方法同样可以卸载交互，将交互配置列表置为空即可：",
        "paraId": 39,
        "tocIndex": 8
    },
    {
        "value": "graph.setBehaviors([]);\n",
        "paraId": 41,
        "tocIndex": 8
    },
    {
        "value": "更多与交互相关的 API 请参考 ",
        "paraId": 42,
        "tocIndex": 8
    },
    {
        "value": "交互 API 文档",
        "paraId": 43,
        "tocIndex": 8
    },
    {
        "value": "。",
        "paraId": 42,
        "tocIndex": 8
    },
    {
        "value": "交互本质上是通过事件监听和响应来实现的。虽然内置交互已经封装了常见的交互行为，但你也可以通过事件 API 直接实现自定义交互逻辑。",
        "paraId": 44,
        "tocIndex": 9
    },
    {
        "value": "// 使用事件常量（推荐）\nimport { NodeEvent, EdgeEvent } from '@antv/g6';\n\n// 监听节点点击\ngraph.on(NodeEvent.CLICK, (evt) => {\n  const { target } = evt;\n  graph.setElementState(target.id, 'selected');\n});\n\n// 监听边悬停\ngraph.on(EdgeEvent.POINTER_OVER, (evt) => {\n  const { target } = evt;\n  graph.setElementState(target.id, 'highlight');\n});\n",
        "paraId": 45,
        "tocIndex": 10
    },
    {
        "value": "事件系统是实现交互的基础，掌握事件 API 对于理解和扩展交互行为至关重要。更多事件相关信息，请参考 ",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "事件文档",
        "paraId": 47,
        "tocIndex": 10
    },
    {
        "value": "。",
        "paraId": 46,
        "tocIndex": 10
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
//# sourceMappingURL=docs_manual_behavior_overview_zh_md_q_hK4X-async.js.map