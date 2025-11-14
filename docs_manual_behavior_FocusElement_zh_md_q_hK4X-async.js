((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/FocusElement.zh.md?type=text'],
{ "docs/manual/behavior/FocusElement.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/FocusElement.zh.md?watch=parent");
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
        "value": "FocusElement 是 G6 中用于实现元素聚焦功能的内置交互，支持通过点击元素将其聚焦到视图中心。这个交互可以帮助用户快速定位和关注特定的图元素。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "快速将关注的节点或边居中显示",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node-1', style: { x: 200, y: 100 } },\n        { id: 'node-2', style: { x: 360, y: 100 } },\n        { id: 'node-3', style: { x: 280, y: 220 } },\n      ],\n      edges: [\n        { source: 'node-1', target: 'node-2' },\n        { source: 'node-1', target: 'node-3' },\n        { source: 'node-2', target: 'node-3' },\n      ],\n    },\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    behaviors: [\n      {\n        type: 'focus-element',\n        key: 'focus-element',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      key: 'focus-element',\n      type: 'focus-element',\n      animation: true,\n      enable: true,\n    };\n    const optionFolder = gui.addFolder('FocusElement Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'focus-element',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "在图配置中添加这一交互：",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "1. 快速配置（静态）",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "使用字符串形式直接声明：",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: ['focus-element'],\n});\n",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "2. 对象配置（推荐）",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "使用对象形式进行配置，支持自定义参数：",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'focus-element',\n      animation: {\n        duration: 500,\n        easing: 'ease-in',\n      },\n    },\n  ],\n});\n",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "配置项",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "说明",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "交互类型名称",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "focus-element",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "animation",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "聚焦动画效果设置",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "{ duration: 500, easing: 'ease-in' }",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "是否启用聚焦功能",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: IElementEvent) => boolean)",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "type ViewportAnimationEffectTiming =\n  | boolean // true 启用默认动画，false 禁用动画\n  | {\n      easing?: string; // 动画缓动函数：'ease-in-out'、'ease-in'、'ease-out'、'linear'\n      duration?: number; // 动画持续时间(毫秒)\n    };\n",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['focus-element'],\n});\n",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'focus-element',\n      animation: {\n        duration: 800,\n        easing: 'ease-in-out',\n      },\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'focus-element',\n      enable: (event) => {\n        // 只对节点启用聚焦，边不聚焦\n        return event.target.type === 'node';\n      },\n    },\n  ],\n});\n",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node1', combo: 'combo1', style: { x: 110, y: 150 } },\n    { id: 'node2', combo: 'combo1', style: { x: 190, y: 150 } },\n    { id: 'node3', combo: 'combo2', style: { x: 150, y: 260 } },\n  ],\n  edges: [{ source: 'node1', target: 'node2' }],\n  combos: [{ id: 'combo1', combo: 'combo2' }, { id: 'combo2' }],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  node: {\n    style: { labelText: (d) => d.id },\n  },\n  data,\n  behaviors: ['collapse-expand', 'focus-element'],\n});\n\ngraph.render();\n",
        "paraId": 16,
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
//# sourceMappingURL=docs_manual_behavior_FocusElement_zh_md_q_hK4X-async.js.map