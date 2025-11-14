((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/theme/palette.zh.md?type=text'],
{ "docs/manual/theme/palette.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/theme/palette.zh.md?watch=parent");
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
        "value": "色板(Palette)是指一组预定义的颜色集合，用于帮助用户更方便的选择颜色。在 G6 中，色板是一种常见的配置项，用户可以通过色板来配置节点、边、连线等元素的颜色。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "色板分为",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "离散色板",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "和",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "连续色板",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "两种类型。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "离散色板是一组颜色数组，用于将元素中的离散值映射到不同的颜色上，例如节点的类型、边的关系等。下面是一个简单的离散色板示例：",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "['#5B8FF9', '#61DDAA', '#F6BD16', '#F6903D', '#F08BB4'];\n",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "连续色板是一个插值器，输入 0~1 的值，返回对应的颜色，用于将元素中的连续值映射到不同的颜色上，例如节点的度数、边的权重等。下面是一个简单的连续色板示例：",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "(value: number) => `rgb(${value * 255}, 0, 0)`;\n",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "你可以直接使用内置色板，如果想使用其他色板，需要先进行注册：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "import { register, ExtensionCategory } from '@antv/g6';\nimport { CustomPalette } from 'package-name/or/path-to-your-custom-palette';\n\nregister(ExtensionCategory.PALETTE, 'custom-palette', CustomPalette);\n",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "在注册色板过程中并不会区分离散色板和连续色板，使用色板过程中需要自行保证色板类型和数据类型的一致性。",
        "paraId": 8
    },
    {
        "value": "目前 G6 内置了 5 套常用的离散色板，用户可以直接使用：",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "spectral",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "tableau",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "oranges",
        "paraId": 12,
        "tocIndex": 2
    },
    {
        "value": "greens",
        "paraId": 13,
        "tocIndex": 2
    },
    {
        "value": "blues",
        "paraId": 14,
        "tocIndex": 2
    },
    {
        "value": "目前开放色板配置的地方主要以元素为主，以节点为例：",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "默认配置，直接配置 ",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "palette",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": " 的值为色板名，会默认为每个节点分配不同的颜色",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "{\n  node: {\n    palette: 'spectral', // spectral 为色板名\n  }\n}\n",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 100,\n  data: {\n    nodes: new Array(30).fill(0).map((_, i) => ({ id: `node-${i}` })),\n  },\n  layout: { type: 'grid', cols: 10, rows: 3 },\n  node: {\n    palette: 'spectral',\n  },\n});\n\ngraph.render();\n",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "当元素数量超过色板颜色数量时，会循环使用色板中的颜色",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "标准配置，离散色板配置属性包括：",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "type: 'group'",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "，",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "field",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "，",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "color",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "，",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "invert",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "其中 ",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "type: 'group'",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": " 显式指定了当前色板类型为离散色板；",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "field",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": " 指定元素数据中的分组字段；",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "color",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": " 为色板名；",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "invert",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": " 为是否反转色板。",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "给定一组示例数据：",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "{\n  \"nodes\": [\n    { \"id\": \"node-1\", \"data\": { \"category\": \"A\" } },\n    { \"id\": \"node-2\", \"data\": { \"category\": \"B\" } },\n    { \"id\": \"node-3\", \"data\": { \"category\": \"C\" } },\n    { \"id\": \"node-4\", \"data\": { \"category\": \"A\" } },\n    { \"id\": \"node-5\", \"data\": { \"category\": \"B\" } },\n    { \"id\": \"node-6\", \"data\": { \"category\": \"C\" } }\n  ]\n}\n",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "数据中 ",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "node-1",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "，",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "node-4",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": " 属于 A 类别，",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "node-2",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "，",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "node-5",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": " 属于 B 类别，",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "node-3",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "，",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "node-6",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": " 属于 C 类别。",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "通过以下方式配置节点的颜色，使得同类别的节点颜色相同：",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "{\n  node: {\n    palette: {\n      type: 'group', // 指定色板类型为分类色板\n      field: 'category', // 指定数据中的分组字段\n      color: 'tableau', // 使用 tableau 色板\n    }\n  }\n}\n",
        "paraId": 26,
        "tocIndex": 4
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 50,\n  data: {\n    nodes: new Array(6).fill(0).map((_, i) => ({ id: `node-${i}`, data: { category: ['A', 'B', 'C'][i % 3] } })),\n  },\n  layout: { type: 'grid', cols: 6 },\n  node: {\n    palette: {\n      type: 'group',\n      field: 'category',\n      color: 'tableau',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "连续色板只支持标准方式配置，配置属性包括：",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "type: 'value'",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "，",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "field",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "，",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "color",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "，",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "invert",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "。",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "给定一组示例数据：",
        "paraId": 29,
        "tocIndex": 5
    },
    {
        "value": "{\n  \"nodes\": [\n    { \"id\": \"node-1\", \"data\": { \"value\": 0 } },\n    { \"id\": \"node-2\", \"data\": { \"value\": 20 } },\n    { \"id\": \"node-3\", \"data\": { \"value\": 40 } },\n    { \"id\": \"node-4\", \"data\": { \"value\": 60 } },\n    { \"id\": \"node-5\", \"data\": { \"value\": 80 } },\n    { \"id\": \"node-6\", \"data\": { \"value\": 100 } }\n  ]\n}\n",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "现在创建一个插值器，将最大值映射为红色(",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": "rgb(255, 0, 0)",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": ")，最小值映射为黑色(",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": "rgb(0, 0, 0)",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": ")：",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": "(value) => `rgb(${value * 255}, 0, 0)`;\n",
        "paraId": 32,
        "tocIndex": 5
    },
    {
        "value": "通过以下配置使得节点的颜色根据数据中的 ",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "value",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": " 字段的值映射到不同的颜色：",
        "paraId": 33,
        "tocIndex": 5
    },
    {
        "value": "{\n  node: {\n    palette: {\n      type: 'value', // 指定色板类型为连续色板\n      field: 'value', // 指定数据中的数值字段\n      color: (value) => `rgb(${value * 255}, 0, 0)`, // 使用插值器\n    }\n  }\n}\n",
        "paraId": 34,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 200,\n  height: 50,\n  data: {\n    nodes: new Array(6).fill(0).map((_, i) => ({ id: `node-${i}`, data: { value: (i + 1) * 20 } })),\n  },\n  layout: { type: 'grid', cols: 6 },\n  node: {\n    palette: {\n      type: 'value',\n      field: 'value',\n      color: (value) => `rgb(${value * 255}, 0, 0)`,\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 35,
        "tocIndex": 5
    },
    {
        "value": "内置连续色板不支持指定值域范围，如果有更复杂的颜色映射需求，可以在样式映射中自定义",
        "paraId": 36
    },
    {
        "value": "如果内置色板无法满足需求，可以自定义色板，具体请参考",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "自定义色板",
        "paraId": 38,
        "tocIndex": 6
    },
    {
        "value": "。",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "色板会基于元素类型生成样式，对于节点和组合，会将颜色映射到 ",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "fill",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": " 属性；对于边，会将颜色映射到 ",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "stroke",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": " 属性。",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "如果同时配置了色板和样式映射，样式映射会覆盖色板颜色。下面的例子中，节点的颜色始终为红色：",
        "paraId": 40,
        "tocIndex": 7
    },
    {
        "value": "{\n  node: {\n    style: {\n      fill: 'red',\n    },\n    palette: 'spectral',\n  }\n}\n",
        "paraId": 41,
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
//# sourceMappingURL=docs_manual_theme_palette_zh_md_q_hK4X-async.js.map