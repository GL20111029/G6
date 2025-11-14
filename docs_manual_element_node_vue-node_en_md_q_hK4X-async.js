((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/vue-node.en.md?type=text'],
{ "docs/manual/element/node/vue-node.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/vue-node.en.md?watch=parent");
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
        "value": "In G6, custom nodes typically require manipulating DOM or Canvas elements, but with the help of the ",
        "paraId": 0
    },
    {
        "value": "g6-extension-vue",
        "paraId": 0
    },
    {
        "value": " ecosystem library, you can directly use Vue components as node content, enhancing development efficiency and maintainability.",
        "paraId": 0
    },
    {
        "value": "✅ ",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Recommended Scenarios:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Nodes are simple geometric shapes",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Scenarios requiring efficient rendering of more than 2,000 nodes",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Need to directly manipulate graphic instances for fine control",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "For detailed information on how to customize nodes using Canvas graphics, please refer to the ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Custom Node",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": " documentation",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "✅ ",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Recommended Scenarios:",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Business systems that need to integrate UI libraries like Element Plus / Ant Design Vue",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Nodes contain interactive logic such as form input, state switching",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Scenarios where an existing Vue design system needs to be reused",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Before starting, please ensure you have:",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Installed a Vue project",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": ": Ensure a Vue project is installed and created.",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "Vue version requirement",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": ": Ensure the Vue version used is >=2.6.0. (Vue 3 is recommended)",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "To use ",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "g6-extension-vue",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": ", run the following command:",
        "paraId": 9,
        "tocIndex": 5
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
        "value": "Register the Vue node type through the extension mechanism:",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "import { ExtensionCategory, register } from '@antv/g6';\nimport { VueNode } from 'g6-extension-vue';\n\nregister(ExtensionCategory.NODE, 'vue-node', VueNode);\n",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "The ",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "register",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": " method requires three parameters:",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "Extension category: ",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "ExtensionCategory.NODE",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": " indicates this is a node type",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Type name: ",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "vue-node",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": " is the name we give to this custom node, which will be used in the configuration later",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Class definition: VueNode is the implementation class exported by ",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "g6-extension-vue",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "Define a simple Vue component as the content of the node:",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "import { defineComponent, h } from 'vue';\n\nconst MyVueNode = defineComponent({\n  setup(props, { attrs, slots, expose }) {\n    return () => {\n      return h('div', 'vue node');\n    };\n  },\n});\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "Use the custom Vue node in the graph configuration. Specify the node type and style in the graph configuration to use the custom Vue component.",
        "paraId": 19,
        "tocIndex": 9
    },
    {
        "value": "type",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": ": Specify the node type as ",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "vue-node",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": " (use the name given during registration)",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "style.component",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": ": Define the Vue component content of the node",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    type: 'vue-node',\n    style: {\n      component: () => <MyVueNode />,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "In complex graph visualization scenarios, nodes need to dynamically respond to interaction states. We provide two complementary state management solutions:",
        "paraId": 22,
        "tocIndex": 11
    },
    {
        "value": "G6 provides built-in interaction state management states, such as ",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": "hover-activate",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": " and ",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": "click-select",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": ". You can get the current node state through the ",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": "data.states",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": " field in the node data and adjust the node style based on the state.",
        "paraId": 23,
        "tocIndex": 12
    },
    {
        "value": "Example",
        "paraId": 24,
        "tocIndex": 12
    },
    {
        "value": ": Change the background color when the node is hovered.",
        "paraId": 24,
        "tocIndex": 12
    },
    {
        "value": "import { ExtensionCategory, register, Graph } from '@antv/g6';\nimport { VueNode } from 'g6-extension-vue';\nimport { computed, defineComponent } from 'vue';\n\nregister(ExtensionCategory.NODE, 'vue-node', VueNode);\n\nconst StatefulNode = defineComponent({\n  setup(props, { attrs, slots, expose }) {\n    const isActive = computed(() => props.data.states?.includes('active'));\n    const label = computed(() => props.data.data?.label);\n\n    return (\n      <div\n        style={{\n          width: 100,\n          padding: 5,\n          border: '1px solid #eee',\n          boxShadow: isActive.value ? '0 0 8px rgba(24,144,255,0.8)' : 'none',\n          transform: `scale(${isActive.value ? 1.05 : 1})`,\n        }}\n      >\n        {label.value}\n      </div>\n    );\n  },\n});\n\nconst graph = new Graph({\n  data: {\n    nodes: [\n      { id: 'node1', style: { x: 100, y: 200 }, data: { label: 'node1' } },\n      { id: 'node2', style: { x: 300, y: 200 }, data: { label: 'node2' } },\n    ],\n  },\n  node: {\n    type: 'vue-node',\n    style: {\n      component: (data) => <StatefulNode data={Object.assign({}, data)} />, // data is non-reactive, need to change reference to trigger Vue's props side effects\n    },\n  },\n  behaviors: ['hover-activate'],\n});\n\ngraph.render();\n",
        "paraId": 25,
        "tocIndex": 12
    },
    {
        "value": "When you need to manage business-related states (such as approval status, risk level), you can extend node data to achieve this:",
        "paraId": 26,
        "tocIndex": 13
    },
    {
        "value": "Example",
        "paraId": 27,
        "tocIndex": 13
    },
    {
        "value": ": Add a ",
        "paraId": 27,
        "tocIndex": 13
    },
    {
        "value": "selected",
        "paraId": 27,
        "tocIndex": 13
    },
    {
        "value": " variable through data to achieve style changes for node selection and deselection.",
        "paraId": 27,
        "tocIndex": 13
    },
    {
        "value": "import { ExtensionCategory, register, Graph } from '@antv/g6';\nimport { VueNode } from 'g6-extension-vue';\nimport { defineComponent, computed } from 'vue';\n\nregister(ExtensionCategory.NODE, 'vue-node', VueNode);\n\nconst MyVueNode = defineComponent({\n  setup(props, { attrs, slots, expose }) {\n    const isSelected = computed(() => props.data.data.selected);\n\n    const handleClick = () => {\n      graph.updateNodeData([{ id: props.data.id, data: { selected: !isSelected.value } }]);\n      graph.draw();\n    };\n\n    return (\n      <div\n        style={{\n          width: 200,\n          padding: 10,\n          border: '1px solid red',\n          borderColor: isSelected.value ? 'orange' : '#ddd', // Set border color based on selection state\n          cursor: 'pointer', // Add mouse pointer style\n        }}\n        onClick={handleClick}\n      >\n        Node\n      </div>\n    );\n  },\n});\n\nconst graph = new Graph({\n  data: {\n    nodes: [\n      {\n        id: 'node1',\n        style: { x: 100, y: 100 },\n        data: { selected: true },\n      },\n    ],\n  },\n  node: {\n    type: 'vue-node',\n    style: {\n      component: (data) => <MyVueNode data={Object.assign({}, data)} graph={graph} />, // data is non-reactive, need to change reference to trigger Vue's props side effects\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 28,
        "tocIndex": 13
    },
    {
        "value": "Achieve two-way communication between nodes and graph instances, allowing nodes and graph instances to update each other.",
        "paraId": 29,
        "tocIndex": 14
    },
    {
        "value": "Example",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": ": Operate graph data through custom nodes and re-render the graph.",
        "paraId": 30,
        "tocIndex": 14
    },
    {
        "value": "import { ExtensionCategory, register, Graph } from '@antv/g6';\nimport { VueNode } from 'g6-extension-vue';\nimport { defineComponent, computed } from 'vue';\n\nregister(ExtensionCategory.NODE, 'vue-node', VueNode);\n\nconst IDCardNode = defineComponent({\n  setup(props, { attrs, slots, expose }) {\n    const isSelected = computed(() => props.data.data.selected);\n\n    const handleSelect = () => {\n      graph.updateNodeData([{ id: props.data.id, data: { selected: true } }]);\n      graph.draw();\n    };\n\n    return <Select onChange={handleSelect} style={{ background: isSelected.value ? 'orange' : '#eee' }} />;\n  },\n});\n\nconst graph = new Graph({\n  node: {\n    type: 'vue-node',\n    style: {\n      component: ({ id, data }) => <IDCardNode id={id} selected={isSelected.value} graph={graph} />,\n    },\n  },\n});\n",
        "paraId": 31,
        "tocIndex": 14
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
//# sourceMappingURL=docs_manual_element_node_vue-node_en_md_q_hK4X-async.js.map