((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/Image.zh.md?type=text'],
{ "docs/manual/element/node/Image.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/Image.zh.md?watch=parent");
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
        "value": "图片节点是一个矩形区域，用于显示图像。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "适用场景：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "用于表示用户头像、产品图片或图标。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "适合表示社交网络、产品目录或图标集合。",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "常用于社交网络图、产品图、UI 设计等。",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "createGraph(\n  {\n    autoFit: 'center',\n    data: {\n      nodes: [\n        {\n          id: 'node1',\n          style: {\n            size: 60,\n            src: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',\n          },\n        },\n      ],\n    },\n    node: { type: 'image' },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 220 },\n  (gui, graph) => {\n    gui.add({ type: 'image' }, 'type').disable();\n\n    const options = {\n      size: 60,\n      src: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',\n    };\n    const optionFolder = gui.addFolder('image.style');\n    optionFolder.add(options, 'size', 0, 100, 1);\n    optionFolder.add(options, 'src');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateNodeData([{ id: 'node1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",
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
        "value": "image",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 以使用图片节点。",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "如果元素有其特定的属性，我们将在下面列出。对于所有的通用样式属性，见 ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "BaseNode",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "img",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "该属性为 img 的别名",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "src",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "图片来源，即图片地址字符串",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "import { Graph, iconfont } from '@antv/g6';\n\nconst style = document.createElement('style');\nstyle.innerHTML = `@import url('${iconfont.css}');`;\ndocument.head.appendChild(style);\n\nconst data = {\n  nodes: [\n    { id: 'default' },\n    { id: 'halo' },\n    { id: 'badges' },\n    { id: 'ports' },\n    {\n      id: 'active',\n      states: ['active'],\n    },\n    {\n      id: 'selected',\n      states: ['selected'],\n    },\n    {\n      id: 'highlight',\n      states: ['highlight'],\n    },\n    {\n      id: 'inactive',\n      states: ['inactive'],\n    },\n    {\n      id: 'disabled',\n      states: ['disabled'],\n    },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    type: 'image',\n    style: {\n      size: 40,\n      labelText: (d) => d.id,\n      src: 'https://gw.alipayobjects.com/mdn/rms_6ae20b/afts/img/A*N4ZMS7gHsUIAAAAAAAAAAABkARQnAQ',\n      haloStroke: '#227eff',\n      halo: (d) => (d.id === 'halo' ? true : false),\n      badges: (d) =>\n        d.id === 'badges'\n          ? [\n              {\n                text: 'A',\n                placement: 'right-top',\n              },\n              {\n                text: 'Important',\n                placement: 'right',\n              },\n              {\n                text: 'Notice',\n                placement: 'right-bottom',\n              },\n            ]\n          : [],\n      badgeFontSize: 8,\n      badgePadding: [1, 4],\n      portR: 3,\n      ports: (d) =>\n        d.id === 'ports'\n          ? [{ placement: 'left' }, { placement: 'right' }, { placement: 'top' }, { placement: 'bottom' }]\n          : [],\n    },\n    state: {\n      inactive: {\n        fillOpacity: 0.5,\n      },\n      disabled: {\n        fillOpacity: 0.2,\n      },\n    },\n  },\n  layout: {\n    type: 'grid',\n  },\n});\n\ngraph.render();\n",
        "paraId": 10,
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
//# sourceMappingURL=docs_manual_element_node_Image_zh_md_q_hK4X-async.js.map