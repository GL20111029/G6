((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/behavior.zh.md?type=text'],
{ "docs/api/behavior.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/behavior.zh.md?watch=parent");
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
        "value": "交互（Behavior）是 G6 的核心构建模块，它精确定义了用户与图之间的互动行为。每个 Behavior 插件都是一个高度封装的功能单元，内部集成了特定场景下的事件监听、状态管理和响应处理逻辑。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6 的内置 Behavior 涵盖了大多数常见交互需求，同时提供了灵活的扩展机制，支持开发者根据业务场景构建定制化交互体验。\n有关完整的交互行为类型、配置选项及开发示例，请参阅 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "交互总览",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 章节。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "获取当前图表中所有已配置的交互行为。",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getBehaviors(): BehaviorOptions;\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "返回值",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "BehaviorOptions",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": 当前图表中已配置的所有交互行为",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "示例",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "// 获取当前所有交互行为\nconst behaviors = graph.getBehaviors();\nconsole.log('当前图表的交互行为:', behaviors);\n",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "设置图表的交互行为，将替换所有现有的交互行为。",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "setBehaviors(behaviors: BehaviorOptions | ((prev: BehaviorOptions) => BehaviorOptions)): void;\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "参数",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "参数",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "behaviors",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "新的交互行为配置，或一个基于当前配置返回新配置的函数",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "BehaviorOptions",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": " | (prev: BehaviorOptions) => BehaviorOptions",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "说明",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "设置的交互会全量替换原有的交互，如果需要新增交互可以使用函数式更新：",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "graph.setBehaviors((behaviors) => [...behaviors, { type: 'zoom-canvas' }]);\n",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "示例 1",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": ": 设置基本交互",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "// 设置基本交互\ngraph.setBehaviors([\n  'drag-canvas', // 拖拽画布\n  'zoom-canvas', // 缩放画布\n  'drag-element', // 拖拽元素\n]);\n",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "示例 2",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": ": 设置带配置的交互",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "graph.setBehaviors([\n  // 字符串形式（使用默认配置）\n  'drag-canvas',\n\n  // 对象形式（自定义配置）\n  {\n    type: 'zoom-canvas',\n    key: 'my-zoom', // 指定唯一标识，用于后续更新\n    sensitivity: 1.5, // 缩放灵敏度\n  },\n\n  // 只有节点上启用拖拽\n  {\n    type: 'drag-element',\n    key: 'drag-node-only',\n    enable: (event) => event.targetType === 'node', // 仅在节点上启用拖拽\n  },\n]);\n",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": "示例 3",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": ": 使用函数式更新",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "// 添加新的交互行为\ngraph.setBehaviors((currentBehaviors) => [\n  ...currentBehaviors,\n  {\n    type: 'brush-select',\n    key: 'selection-brush',\n  },\n]);\n\n// 替换特定交互行为\ngraph.setBehaviors((currentBehaviors) => {\n  // 过滤掉现有的缩放交互\n  const filteredBehaviors = currentBehaviors.filter((behavior) => {\n    if (typeof behavior === 'string') return behavior !== 'zoom-canvas';\n    return behavior.type !== 'zoom-canvas';\n  });\n\n  // 添加新的缩放交互配置\n  return [\n    ...filteredBehaviors,\n    {\n      type: 'zoom-canvas',\n      key: 'new-zoom',\n      enableOptimize: true,\n    },\n  ];\n});\n",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "更新指定的交互行为配置，需要通过 ",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": " 标识要更新的交互。",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "updateBehavior(behavior: UpdateBehaviorOption): void;\n",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 26,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "behavior",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "更新的交互行为配置",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "UpdateBehaviorOption",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "说明",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "如果要更新一个交互，必须在原始交互配置中指定 ",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": " 字段，以便能够准确找到并更新该交互。",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "示例 1",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": ": 更新交互配置",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": "// 初始设置交互时指定 key\ngraph.setBehaviors([\n  {\n    type: 'zoom-canvas',\n    key: 'my-zoom-canvas',\n    sensitivity: 1.0,\n  },\n]);\n\n// 更新交互配置\ngraph.updateBehavior({\n  key: 'my-zoom-canvas', // 指定要更新的交互\n  sensitivity: 2.0, // 新的缩放灵敏度\n  enableOptimize: true, // 添加新配置\n});\n",
        "paraId": 32,
        "tocIndex": 4
    },
    {
        "value": "示例 2",
        "paraId": 33,
        "tocIndex": 4
    },
    {
        "value": ": 禁用/启用交互",
        "paraId": 33,
        "tocIndex": 4
    },
    {
        "value": "// 设置带 key 的行为\ngraph.setBehaviors([\n  {\n    type: 'drag-canvas',\n    key: 'main-drag',\n  },\n  {\n    type: 'zoom-canvas',\n    key: 'main-zoom',\n  },\n]);\n\n// 禁用拖拽功能\ngraph.updateBehavior({\n  key: 'main-drag',\n  enable: false,\n});\n\n// 稍后重新启用\nsetTimeout(() => {\n  graph.updateBehavior({\n    key: 'main-drag',\n    enable: true,\n  });\n}, 5000);\n",
        "paraId": 34,
        "tocIndex": 4
    },
    {
        "value": "type BehaviorOptions = (string | CustomBehaviorOption | ((this: Graph) => CustomBehaviorOption))[];\n\ntype CustomBehaviorOption = {\n  // 交互类型\n  type: string;\n\n  // 交互 key，即唯一标识，用于标识交互，从而进一步操作此交互\n  key?: string;\n\n  // 针对不同类型的交互，还可能有其他配置项\n  [configKey: string]: any;\n};\n",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "type UpdateBehaviorOption = {\n  // 要更新的交互的唯一标识\n  key: string;\n\n  // 其他要更新的配置项\n  [configKey: string]: unknown;\n};\n",
        "paraId": 36,
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
//# sourceMappingURL=docs_api_behavior_zh_md_q_hK4X-async.js.map