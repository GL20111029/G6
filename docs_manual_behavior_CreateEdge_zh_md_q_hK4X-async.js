((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/CreateEdge.zh.md?type=text'],
{ "docs/manual/behavior/CreateEdge.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/CreateEdge.zh.md?watch=parent");
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
        "value": "CreateEdge 是 G6 中用于实现画布中交互式创建边（Edge）的内置交互。用户触发交互（点击或拖拽）后，边会随鼠标移动，连接到目标节点即完成创建，若取消则自动移除。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "此外，该交互支持自定义边的样式，如颜色、线条样式、箭头等，以适应不同的可视化需求。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "该交互支持连接的元素为 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "node",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " 和 ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "combo",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "这一交互主要用于：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "需要交互式创建节点间连接关系的可视化场景，如流程图、知识图谱等",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        { id: 'node1', combo: 'combo1', style: { x: 250, y: 150 } },\n        { id: 'node2', combo: 'combo1', style: { x: 350, y: 150 } },\n        { id: 'node3', combo: 'combo2', style: { x: 250, y: 300 } },\n      ],\n      edges: [],\n      combos: [\n        { id: 'combo1', combo: 'combo2' },\n        { id: 'combo2', style: {} },\n      ],\n    },\n    node: { style: { fill: '#873bf4' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    behaviors: [\n      {\n        type: 'create-edge',\n        key: 'create-edge',\n      },\n    ],\n    plugins: [{ type: 'grid-line', size: 30 }],\n    animation: true,\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      key: 'create-edge',\n      type: 'create-edge',\n      animation: true,\n      enable: true,\n      trigger: 'drag',\n    };\n    const optionFolder = gui.addFolder('CollapseExpand Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'animation');\n    optionFolder.add(options, 'enable');\n    optionFolder.add(options, 'trigger', ['drag', 'click']);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateBehavior({\n        key: 'create-edge',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "在图配置中添加这一交互",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "// 使用默认配置\nconst graph = new Graph({\n  // 其他配置...\n  behaviors: ['create-edge'], // 直接添加，使用默认配置\n});\n\n// 或使用自定义配置\nconst graph = new Graph({\n  // 其他配置\n  behaviors: [\n    {\n      type: 'create-edge',\n      trigger: 'click', // 交互配置，通过点击创建边\n      style: {}, // 边自定义样式\n    },\n  ],\n});\n",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "配置项",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "说明",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "交互类型名称",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "create-edge",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "√",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "触发新建边的方式：",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "click",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " 表示点击触发；",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "drag",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " 表示拖拽触发",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "click",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "drag",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "drag",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "enable",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "是否启用该交互",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "boolean | ((event: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Event",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ") => boolean)",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "onCreate",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "创建边回调函数，返回边数据",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "(edge: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": ") => ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "onFinish",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "成功创建边回调函数",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "(edge: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": ") => void",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "style",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "新建边的样式，",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "配置项",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "见下面",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "配置新创建边的样式，详细配置项请参考 ",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "元素 - 边 - 通用边属性 - 样式",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "{\n  \"style\": {\n    \"stroke\": \"red\",\n    \"lineWidth\": 2\n  }\n}\n",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  width: 800,\n  height: 600,\n  behaviors: ['create-edge'],\n});\n",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置,\n  behaviors: [\n    {\n      type: 'create-edge',\n      style: {\n        stroke: red,\n        lineWidth: 3,\n      },\n    },\n  ],\n});\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置\n  behaviors: [\n    {\n      type: 'create-edge',\n      trigger: 'click',\n    },\n  ],\n});\n",
        "paraId": 19,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: {\n    nodes: [{ id: 'node1' }, { id: 'node2' }, { id: 'node3' }, { id: 'node4' }, { id: 'node5' }],\n    edges: [\n      { source: 'node1', target: 'node2' },\n      { source: 'node1', target: 'node3' },\n      { source: 'node1', target: 'node4' },\n      { source: 'node2', target: 'node3' },\n      { source: 'node3', target: 'node4' },\n      { source: 'node4', target: 'node5' },\n    ],\n  },\n  layout: {\n    type: 'grid',\n  },\n  behaviors: [\n    {\n      type: 'create-edge',\n      trigger: 'drag',\n      style: {\n        fill: 'red',\n        lineWidth: 2,\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 20,
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
//# sourceMappingURL=docs_manual_behavior_CreateEdge_zh_md_q_hK4X-async.js.map