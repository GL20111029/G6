((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Contextmenu.en.md?type=text'],
{ "docs/manual/plugin/Contextmenu.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Contextmenu.en.md?watch=parent");
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
        "value": "The context menu, also known as the right-click menu, is a menu that appears when a user clicks on a specific area. It supports triggering custom events before and after clicking. Through the context menu, specific element operations can be integrated, making it convenient to control a particular item when needed.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "This plugin is mainly used for:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Various interactions with elements: viewing nodes, viewing edges, deleting nodes, etc.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Below is a simple example of initializing the Contextmenu plugin:",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'contextmenu',\n      // Enable right-click menu only on nodes, by default all elements are enabled\n      enable: (e) => e.targetType === 'node',\n      getItems: () => {\n        return [{ name: 'View Details', value: 'detail' }];\n      },\n      onClick: (value) => {\n        if (value === 'detail') console.log('Display node details');\n      },\n    },\n  ],\n});\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Property",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Default Value",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "className",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Additional class name for the menu DOM",
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
        "value": "How to trigger the right-click menu: ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "contextmenu",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " for right-click, ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "click",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " for click",
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
        "value": "Offset of the menu display in X and Y directions",
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
        "value": "Callback method triggered after the menu is clicked, ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "example",
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
        "value": "Returns the list of menu items, supports ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Promise",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " type return value. It is a shortcut configuration for ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "getContent",
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
        "value": "Returns the content of the menu, supports ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Promise",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " type return value, can also use ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "getItems",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " for shortcut configuration",
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
        "value": "Menu content used when ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "getContent",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " returns a ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Promise",
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
        "value": "Whether it is available, determines whether the right-click menu is supported by parameters, by default all are available",
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
        "value": "Each menu item (Item) contains the following properties:",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "Property",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "name",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Name displayed for the menu item",
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
        "value": "Value corresponding to the menu item",
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
        "value": "This function is triggered after clicking a menu item, and the function has three parameters:",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "value: Corresponds to the value of the menu item",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "target: The DOM node of the menu item container",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "current: The element that triggered the menu item, for example, if it is a node, you can use ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "current",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " to get the node information (id), or to modify the element",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  layout: { type: 'grid' },\n  plugins: [\n    {\n      type: 'contextmenu',\n      trigger: 'contextmenu', // 'click' or 'contextmenu'\n      onClick: (value, target, current) => {\n        alert('You have clicked the「' + value + '」item');\n      },\n      getItems: () => {\n        return [\n          { name: 'View Details', value: 'detail' },\n          { name: 'Delete', value: 'delete' },\n        ];\n      },\n    },\n  ],\n});\n",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  layout: { type: 'grid' },\n  plugins: [\n    {\n      type: 'contextmenu',\n      trigger: 'contextmenu',\n      getItems: () => {\n        return [{ name: 'Change Start Point', value: 'change' }];\n      },\n      onClick: (value) => {\n        if (value === 'change') console.log('Execute change start point operation here');\n      },\n      // Enable right-click menu only on edges\n      enable: (e) => e.targetType === 'edge',\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 8
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  layout: { type: 'grid' },\n  plugins: [\n    {\n      type: 'contextmenu',\n      trigger: 'contextmenu',\n      getItems: async () => {\n        // Toolbar configuration can be obtained from the server or other asynchronous sources\n        const response = await fetch('/api/contextmenu-config');\n        const items = await response.json();\n        return items;\n      },\n      // Enable right-click menu only on nodes\n      enable: (e) => e.targetType === 'node',\n    },\n  ],\n});\n",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  layout: { type: 'grid' },\n  plugins: [\n    {\n      type: 'contextmenu',\n      trigger: 'contextmenu',\n      getItems: (e) => {\n        if (e.target.id === 'node-1') {\n          return [\n            {\n              name: 'Delete Node',\n              value: 'delete',\n            },\n          ];\n        }\n        if (e.target.type === 'edge') {\n          return [\n            {\n              name: 'Move Edge',\n              value: 'move',\n            },\n          ];\n        }\n        return [];\n      },\n    },\n  ],\n});\n",
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
//# sourceMappingURL=docs_manual_plugin_Contextmenu_en_md_q_hK4X-async.js.map