((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Contextmenu.zh.md?type=text'],
{ "docs/manual/plugin/Contextmenu.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Contextmenu.zh.md?watch=parent");
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
        "value": "上下文菜单（Contextmenu），也被称为右键菜单，是当用户在某个特定区域上点击后出现的一个菜单。支持在点击前后，触发自定义事件。通过上下文菜单，可以将一些具体元素的操作集成在其中，方便对某一项来进行需要时的单独控制。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这一插件主要用于：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "元素的各种交互：查看节点、查看边、删除节点等等交互操作",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "以下是一个简单的 Contextmenu 插件初始化示例：",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'contextmenu',\n      // 只在节点上开启右键菜单，默认全部元素都开启\n      enable: (e) => e.targetType === 'node',\n      getItems: () => {\n        return [{ name: '查看详情', value: 'detail' }];\n      },\n      onClick: (value) => {\n        if (value === 'detail') console.log('展示节点详情');\n      },\n    },\n  ],\n});\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "className",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "给菜单的 DOM 追加的类名",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "g6-contextmenu",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "trigger",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "如何触发右键菜单：",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "contextmenu",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " 表示右键触发，",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "click",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " 表示点击触发",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "click",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "contextmenu",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "contextmenu",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "offset",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "菜单显式 X、Y 方向的偏移量",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "[number, number]",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "[4, 4]",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "onClick",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "当菜单被点击后，触发的回调方法，",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "示例",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "(value: string, target: HTMLElement, current: Element) => void",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "getItems",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "返回菜单的项目列表，支持 ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Promise",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " 类型的返回值。是 ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "getContent",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " 的快捷配置",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "(event: IElementEvent) => ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Item",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "[] | Promise<",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Item",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "[]>",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "getContent",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "返回菜单的内容，支持 ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Promise",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " 类型的返回值，也可以使用 ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "getItems",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " 进行快捷配置",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "(event: IElementEvent) => HTMLElement | string | Promise<HTMLElement | string>",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "loadingContent",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "当 ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "getContent",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " 返回一个 ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Promise",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " 时，使用的菜单内容",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "HTMLElement | string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "enable",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "是否可用，通过参数判断是否支持右键菜单，默认是全部可用",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "boolean | (event: IElementEvent) => boolean",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "每个菜单项目 (Item) 包含以下属性：",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "属性",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "name",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "菜单项显示的名字",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "value",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "菜单项对应的值",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "点击菜单项后会触发该函数，函数有三个参数：",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "value: 对应菜单项的 value",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "target: 对应菜单项容器的 dom 节点",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "current: 对应触发菜单项的元素，例如是节点则可以通过 ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "current",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " 来获取到节点的信息(id)等，或者来对元素进行修改",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  layout: { type: 'grid' },\n  plugins: [\n    {\n      type: 'contextmenu',\n      trigger: 'contextmenu', // 'click' or 'contextmenu'\n      onClick: (value, target, current) => {\n        alert('You have clicked the「' + v + '」item');\n      },\n      getItems: () => {\n        return [\n          { name: '查看详情', value: 'detail' },\n          { name: '删除', value: 'delete' },\n        ];\n      },\n    },\n  ],\n});\n",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  layout: { type: 'grid' },\n  plugins: [\n    {\n      type: 'contextmenu',\n      trigger: 'contextmenu',\n      getItems: () => {\n        return [{ name: '变更起点', value: 'change' }];\n      },\n      onClick: (value) => {\n        if (value === 'change') console.log('这里执行变更起点操作');\n      },\n      // 仅在边上开启右键菜单\n      enable: (e) => e.targetType === 'edge',\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  layout: { type: 'grid' },\n  plugins: [\n    {\n      type: 'contextmenu',\n      trigger: 'contextmenu',\n      getItems: async () => {\n        // 可以从服务器或其他异步源获取工具栏配置\n        const response = await fetch('/api/contextmenu-config');\n        const items = await response.json();\n        return items;\n      },\n      // 仅在边上开启右键菜单\n      enable: (e) => e.targetType === 'node',\n    },\n  ],\n});\n",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  layout: { type: 'grid' },\n  plugins: [\n    {\n      type: 'contextmenu',\n      trigger: 'contextmenu',\n      getItems: (e) => {\n        if (e.target.id === 'node-1') {\n          return [\n            {\n              name: '删除节点',\n              value: 'delete',\n            },\n          ];\n        }\n        if (e.target.type === 'edge') {\n          return [\n            {\n              name: '移动边',\n              value: 'move',\n            },\n          ];\n        }\n        return [];\n      },\n    },\n  ],\n});\n",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [{ id: 'node-0' }, { id: 'node-1' }, { id: 'node-2' }, { id: 'node-3' }, { id: 'node-4' }, { id: 'node-5' }],\n  edges: [\n    { source: 'node-0', target: 'node-1' },\n    { source: 'node-0', target: 'node-2' },\n    { source: 'node-0', target: 'node-3' },\n    { source: 'node-0', target: 'node-4' },\n    { source: 'node-1', target: 'node-0' },\n    { source: 'node-2', target: 'node-0' },\n    { source: 'node-3', target: 'node-0' },\n    { source: 'node-4', target: 'node-0' },\n    { source: 'node-5', target: 'node-0' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  layout: {\n    type: 'grid',\n  },\n  behaviors: ['zoom-canvas', 'drag-canvas', 'drag-element'],\n  plugins: [\n    {\n      type: 'contextmenu',\n      trigger: 'contextmenu', // 'click' or 'contextmenu'\n      onClick: (v) => {\n        alert('You have clicked the「' + v + '」item');\n      },\n      getItems: () => {\n        return [\n          { name: '展开一度关系', value: 'spread' },\n          { name: '查看详情', value: 'detail' },\n        ];\n      },\n      enable: (e) => e.targetType === 'node',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 17,
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
//# sourceMappingURL=docs_manual_plugin_Contextmenu_zh_md_q_hK4X-async.js.map