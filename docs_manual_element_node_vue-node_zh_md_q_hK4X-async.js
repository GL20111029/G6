((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/vue-node.zh.md?type=text'],
{ "docs/manual/element/node/vue-node.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/vue-node.zh.md?watch=parent");
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
        "value": "在 G6 中，自定义节点通常需要操作 DOM 或 Canvas 元素，但借助 ",
        "paraId": 0
    },
    {
        "value": "g6-extension-vue",
        "paraId": 0
    },
    {
        "value": " 社区生态库，可以直接使用 Vue 组件作为节点内容，提升开发效率与可维护性。",
        "paraId": 0
    },
    {
        "value": "✅ ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "推荐场景：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "节点只是简单的几何图形",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "需要高效渲染超过 2,000 个节点的场景",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "需要直接操作图形实例进行精细控制",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "有关如何使用 Canvas 图形自定义节点的详细信息，请参阅 ",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "自定义节点",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": " 文档",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "✅ ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "推荐场景：",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "需要集成 Element Plus / Ant Design Vue 等 UI 库的业务系统",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "节点包含表单输入、状态切换等交互逻辑",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "已有 Vue 设计系统需要复用的场景",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "在开始之前，请确保您已经：",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "安装 Vue 项目",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "：确保已安装并创建 Vue 项目。",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "Vue 版本要求",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "：确保使用的 Vue 版本 >=2.6.0。(推荐使用 Vue 3)",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "要使用 ",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "g6-extension-vue",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "，请运行以下命令：",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "npm install g6-extension-vue\n",
        "paraId": 10
    },
    {
        "value": "yarn add g6-extension-vue\n",
        "paraId": 11
    },
    {
        "value": "pnpm add g6-extension-vue\n",
        "paraId": 12
    },
    {
        "value": "通过扩展机制注册 Vue 节点类型：",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": "import { ExtensionCategory, register } from '@antv/g6';\nimport { VueNode } from 'g6-extension-vue';\n\nregister(ExtensionCategory.NODE, 'vue-node', VueNode);\n",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "register",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": " 方法需要三个参数：",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "扩展类别：",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "ExtensionCategory.NODE",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 表示这是一个节点类型",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "类型名称：",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "vue-node",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 是我们给这个自定义节点起的名字，后续会在配置中使用",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "类定义：VueNode 是 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "g6-extension-vue",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 导出的实现类",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "定义一个简单的 Vue 组件作为节点的内容：",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "import { defineComponent, h } from 'vue';\n\nconst MyVueNode = defineComponent({\n  setup(props, { attrs, slots, expose }) {\n    return () => {\n      return h('div', 'vue node');\n    };\n  },\n});\n",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "在图配置中使用自定义的 Vue 节点。通过在图配置中指定节点类型和样式，来使用自定义的 Vue 组件。",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "type",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "：指定节点类型为 ",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "vue-node",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": " (使用与注册时起的名字)",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "style.component",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "：定义节点的 Vue 组件内容",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    type: 'vue-node',\n    style: {\n      component: () => <MyVueNode />,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "在复杂图可视化场景中，节点需要动态响应交互状态。我们提供两种互补的状态管理方案：",
        "paraId": 22,
        "tocIndex": 10
    },
    {
        "value": "G6 提供内置的交互状态管理状态，如 ",
        "paraId": 23,
        "tocIndex": 11
    },
    {
        "value": "hover-activate",
        "paraId": 23,
        "tocIndex": 11
    },
    {
        "value": " 和 ",
        "paraId": 23,
        "tocIndex": 11
    },
    {
        "value": "click-select",
        "paraId": 23,
        "tocIndex": 11
    },
    {
        "value": "。可以通过节点数据中的 ",
        "paraId": 23,
        "tocIndex": 11
    },
    {
        "value": "data.states",
        "paraId": 23,
        "tocIndex": 11
    },
    {
        "value": " 字段获取当前节点状态，并根据状态调整节点样式。",
        "paraId": 23,
        "tocIndex": 11
    },
    {
        "value": "示例",
        "paraId": 24,
        "tocIndex": 11
    },
    {
        "value": "：在节点被 hover 时改变背景颜色。",
        "paraId": 24,
        "tocIndex": 11
    },
    {
        "value": "import { ExtensionCategory, register, Graph } from '@antv/g6';\nimport { VueNode } from 'g6-extension-vue';\nimport { computed, defineComponent } from 'vue';\n\nregister(ExtensionCategory.NODE, 'vue-node', VueNode);\n\nconst StatefulNode = defineComponent({\n  setup(props, { attrs, slots, expose }) {\n    const isActive = computed(() => props.data.states?.includes('active'));\n    const label = computed(() => props.data.data?.label);\n\n    return (\n      <div\n        style={{\n          width: 100,\n          padding: 5,\n          border: '1px solid #eee',\n          boxShadow: isActive.value ? '0 0 8px rgba(24,144,255,0.8)' : 'none',\n          transform: `scale(${isActive.value ? 1.05 : 1})`,\n        }}\n      >\n        {label.value}\n      </div>\n    );\n  },\n});\n\nconst graph = new Graph({\n  data: {\n    nodes: [\n      { id: 'node1', style: { x: 100, y: 200 }, data: { label: 'node1' } },\n      { id: 'node2', style: { x: 300, y: 200 }, data: { label: 'node2' } },\n    ],\n  },\n  node: {\n    type: 'vue-node',\n    style: {\n      component: (data) => <StatefulNode data={Object.assign({}, data)} />, // data是非响应式数据，需要通过改变引用来触发Vue的props副作用\n    },\n  },\n  behaviors: ['hover-activate'],\n});\n\ngraph.render();\n",
        "paraId": 25,
        "tocIndex": 11
    },
    {
        "value": "当需要管理业务相关状态（如审批状态、风险等级）时，可通过扩展节点数据实现：",
        "paraId": 26,
        "tocIndex": 12
    },
    {
        "value": "示例",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "：通过 data 添加 ",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "selected",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": " 变量，实现节点选中和取消选中的样式变化。",
        "paraId": 27,
        "tocIndex": 12
    },
    {
        "value": "import { ExtensionCategory, register, Graph } from '@antv/g6';\nimport { VueNode } from 'g6-extension-vue';\nimport { defineComponent, computed } from 'vue';\n\nregister(ExtensionCategory.NODE, 'vue-node', VueNode);\n\nconst MyVueNode = defineComponent({\n  setup(props, { attrs, slots, expose }) {\n    const isSelected = computed(() => props.data.data.selected);\n\n    const handleClick = () => {\n      graph.updateNodeData([{ id: props.data.id, data: { selected: !isSelected.value } }]);\n      graph.draw();\n    };\n\n    return (\n      <div\n        style={{\n          width: 200,\n          padding: 10,\n          border: '1px solid red',\n          borderColor: isSelected.value ? 'orange' : '#ddd', // 根据选中状态设置边框颜色\n          cursor: 'pointer', // 添加鼠标指针样式\n        }}\n        onClick={handleClick}\n      >\n        Node\n      </div>\n    );\n  },\n});\n\nconst graph = new Graph({\n  data: {\n    nodes: [\n      {\n        id: 'node1',\n        style: { x: 100, y: 100 },\n        data: { selected: true },\n      },\n    ],\n  },\n  node: {\n    type: 'vue-node',\n    style: {\n      component: (data) => <MyVueNode data={Object.assign({}, data)} graph={graph} />, // data是非响应式数据，需要通过改变引用来触发Vue的props副作用\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 28,
        "tocIndex": 12
    },
    {
        "value": "实现节点与图实例的双向通信，使节点和图实例可以相互更新。",
        "paraId": 29,
        "tocIndex": 13
    },
    {
        "value": "示例",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "：通过自定义节点操作图数据，并重新渲染图形。",
        "paraId": 30,
        "tocIndex": 13
    },
    {
        "value": "import { ExtensionCategory, register, Graph } from '@antv/g6';\nimport { VueNode } from 'g6-extension-vue';\nimport { defineComponent, computed } from 'vue';\n\nregister(ExtensionCategory.NODE, 'vue-node', VueNode);\n\nconst IDCardNode = defineComponent({\n  setup(props, { attrs, slots, expose }) {\n    const isSelected = computed(() => props.data.data.selected);\n\n    const handleSelect = () => {\n      graph.updateNodeData([{ id: props.data.id, data: { selected: true } }]);\n      graph.draw();\n    };\n\n    return <Select onChange={handleSelect} style={{ background: isSelected.value ? 'orange' : '#eee' }} />;\n  },\n});\n\nconst graph = new Graph({\n  node: {\n    type: 'vue-node',\n    style: {\n      component: ({ id, data }) => <IDCardNode id={id} selected={isSelected.value} graph={graph} />,\n    },\n  },\n});\n",
        "paraId": 31,
        "tocIndex": 13
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
//# sourceMappingURL=docs_manual_element_node_vue-node_zh_md_q_hK4X-async.js.map