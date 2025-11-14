((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/Rect.en.md?type=text'],
{ "docs/manual/element/node/Rect.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/Rect.en.md?watch=parent");
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
        "value": "A rectangle is a geometric shape with four equal sides and defined boundaries.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Applicable scenarios:",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Used to represent modules, components, or containers.",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Suitable for representing hierarchies, such as organizational charts, file directory trees.",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Commonly used in flowcharts, architecture diagrams, UML diagrams, etc.",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "createGraph(\n  {\n    autoFit: 'center',\n    data: { nodes: [{ id: 'node1', style: { size: 40, fill: '#7e3feb' } }] },\n    node: { type: 'rect' },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 220 },\n  (gui, graph) => {\n    gui.add({ type: 'rect' }, 'type').disable();\n\n    const options = { 'size[0]': 48, 'size[1]': 24 };\n\n    const optionFolder = gui.addFolder('rect.style');\n    optionFolder.add(options, 'size[0]', 0, 100, 1);\n    optionFolder.add(options, 'size[1]', 0, 100, 1);\n\n    optionFolder.onChange(({ object }) => {\n      graph.updateNodeData([{ id: 'node1', style: { size: [object['size[0]'], object['size[1]']] } }]);\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "设置 ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "node.type",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 为 ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "rect",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 以使用矩形节点。",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "If the element has specific attributes, we will list them below. For all general style attributes, see ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "BaseNode",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "import { Graph, iconfont } from '@antv/g6';\n\nconst style = document.createElement('style');\nstyle.innerHTML = `@import url('${iconfont.css}');`;\ndocument.head.appendChild(style);\n\nconst data = {\n  nodes: [\n    { id: 'default' },\n    { id: 'halo' },\n    { id: 'badges' },\n    { id: 'ports' },\n    {\n      id: 'active',\n      states: ['active'],\n    },\n    {\n      id: 'selected',\n      states: ['selected'],\n    },\n    {\n      id: 'highlight',\n      states: ['highlight'],\n    },\n    {\n      id: 'inactive',\n      states: ['inactive'],\n    },\n    {\n      id: 'disabled',\n      states: ['disabled'],\n    },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    type: 'rect',\n    style: {\n      size: 40,\n      labelText: (d) => d.id,\n      iconFontFamily: 'iconfont',\n      iconText: '\\ue602',\n      halo: (d) => (d.id === 'halo' ? true : false),\n      badges: (d) =>\n        d.id === 'badges'\n          ? [\n              {\n                text: 'A',\n                placement: 'right-top',\n              },\n              {\n                text: 'Important',\n                placement: 'right',\n              },\n              {\n                text: 'Notice',\n                placement: 'right-bottom',\n              },\n            ]\n          : [],\n      badgeFontSize: 8,\n      badgePadding: [1, 4],\n      portR: 3,\n      ports: (d) =>\n        d.id === 'ports'\n          ? [{ placement: 'left' }, { placement: 'right' }, { placement: 'top' }, { placement: 'bottom' }]\n          : [],\n    },\n  },\n  layout: {\n    type: 'grid',\n  },\n});\n\ngraph.render();\n",
        "paraId": 9,
        "tocIndex": 4
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
//# sourceMappingURL=docs_manual_element_node_Rect_en_md_q_hK4X-async.js.map