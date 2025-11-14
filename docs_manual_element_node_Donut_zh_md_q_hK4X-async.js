((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/Donut.zh.md?type=text'],
{ "docs/manual/element/node/Donut.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/node/Donut.zh.md?watch=parent");
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
        "value": "甜甜圈节点是一个环形几何形状，由内外两个同心圆组成。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "适用场景：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "用于表示比例数据，如完成进度、占比分析。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "适合表示多层数据，如嵌套的环形图。",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "常用于数据可视化、仪表盘、进度图等。",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "createGraph(\n  {\n    autoFit: 'center',\n    data: {\n      nodes: [\n        {\n          id: 'node1',\n          style: {\n            fill: 'transparent',\n            size: 60,\n            donuts: [30, 30, 20, 20],\n            donutPalette: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n          },\n        },\n      ],\n    },\n    node: { type: 'donut' },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 220 },\n  (gui, graph) => {\n    gui.add({ type: 'donut' }, 'type').disable();\n\n    const options = {\n      size: 60,\n      innerR: 50,\n      donutPalette: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n    };\n    const optionFolder = gui.addFolder('donut.style');\n    optionFolder.add(options, 'size', 0, 100, 1);\n    optionFolder.add(options, 'innerR', 0, 100, 1).name('innerR(%)');\n    optionFolder.add(options, 'donutPalette', ['spectral', 'tableau', ['#1783FF', '#00C9C9', '#F08F56', '#D580FF']]);\n\n    optionFolder.onChange(({ property, value }) => {\n      if (property === 'innerR') value = value + '%';\n      graph.updateNodeData([{ id: 'node1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",
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
        "value": "donut",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " 以使用甜甜圈节点。",
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
        "value": "donutFill",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "填充色",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "#1783FF",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutFillOpacity",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "填充色透明度",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number | string",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "1",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutLineCap",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描边端点样式",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "round",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "square",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "butt",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "butt",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutLineDash",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描边虚线样式",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number[]",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutLineDashOffset",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描边虚线偏移量",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutLineJoin",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描边连接处样式",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "round",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "bevel",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "miter",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "miter",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutLineWidth",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描边宽度",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "1",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutOpacity",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "透明度",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number | string",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "1",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutPalette",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "颜色或者色板名",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "string | string[]",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "tableau",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donuts",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "圆环数据",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number[] | ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "DonutRound",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "[]",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutShadowBlur",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "阴影模糊度",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutShadowColor",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "阴影颜色",
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
        "value": "donutShadowOffsetX",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "阴影在 x 轴方向上的偏移量",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number | string",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutShadowOffsetY",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "阴影在 y 轴方向上的偏移量",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number | string",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutShadowType",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "阴影类型",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "inner",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "outer",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "outer",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutStroke",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描边色",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "#000",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutStrokeOpacity",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描边色透明度",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "number | string",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "1",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "donutVisibility",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "图形是否可见",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "visible",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "hidden",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "visible",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "innerR",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "内环半径，使用百分比或者像素值",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "string | number",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "50%",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "color",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "颜色",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "fill",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "填充色",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "#1783FF",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "fillOpacity",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "填充色透明度",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number | string",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "1",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "lineCap",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "描边端点样式",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "round",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "square",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "butt",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "butt",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "lineDash",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "描边虚线样式",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number[]",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "lineDashOffset",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "描边虚线偏移量",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "lineJoin",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "描边连接处样式",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "round",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "bevel",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "miter",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "miter",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "lineWidth",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "描边宽度",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "1",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "opacity",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "透明度",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number | string",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "1",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "shadowBlur",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "阴影模糊度",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "shadowColor",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "阴影颜色",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "shadowOffsetX",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "阴影在 x 轴方向上的偏移量",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number | string",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "shadowOffsetY",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "阴影在 y 轴方向上的偏移量",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number | string",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "shadowType",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "阴影类型",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "inner",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "outer",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "outer",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "stroke",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "描边色",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "#000",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "strokeOpacity",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "描边色透明度",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number | string",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "1",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "value",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "数值，用于计算比例",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "visibility",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "图形是否可见",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "visible",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "hidden",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "visible",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "import { Graph, iconfont } from '@antv/g6';\n\nconst style = document.createElement('style');\nstyle.innerHTML = `@import url('${iconfont.css}');`;\ndocument.head.appendChild(style);\n\nconst data = {\n  nodes: [\n    { id: 'default', index: 0 },\n    { id: 'halo', index: 1 },\n    { id: 'badges', index: 2 },\n    { id: 'ports', index: 3 },\n    {\n      id: 'active',\n      states: ['active'],\n      index: 4,\n    },\n    {\n      id: 'selected',\n      states: ['selected'],\n      index: 5,\n    },\n    {\n      id: 'highlight',\n      states: ['highlight'],\n      index: 6,\n    },\n    {\n      id: 'inactive',\n      states: ['inactive'],\n      index: 7,\n    },\n    {\n      id: 'disabled',\n      states: ['disabled'],\n      index: 8,\n    },\n  ],\n};\nconst graph = new Graph({\n  container: 'container',\n  animation: false,\n  data,\n  node: {\n    type: 'donut',\n    style: {\n      size: 80,\n      fill: '#DB9D0D',\n      innerR: 20,\n      donuts: (item) => {\n        const { index } = item;\n        if (index === 0) return [1, 2, 3]; // donuts数据类型为number[]时，根据值的大小决定环的占比\n\n        if (index === 1) {\n          return [\n            { value: 50, color: 'red' },\n            { value: 150, color: 'green' },\n            { value: 100, color: 'blue' },\n          ];\n        }\n\n        if (index === 4) {\n          return [\n            { value: 150, fill: 'pink', stroke: '#fff', lineWidth: 1 },\n            { value: 250, stroke: '#fff', lineWidth: 1 },\n            { value: 200, stroke: '#fff', lineWidth: 1 },\n          ];\n        }\n\n        return [100, 200, 100, 200];\n      },\n      labelText: (d) => d.id,\n      iconFontFamily: 'iconfont',\n      iconText: '\\ue602',\n      halo: (d) => (d.id === 'halo' ? true : false),\n      badges: (d) =>\n        d.id === 'badges'\n          ? [\n              {\n                text: 'A',\n                placement: 'right-top',\n              },\n              {\n                text: 'Important',\n                placement: 'right',\n              },\n              {\n                text: 'Notice',\n                placement: 'right-bottom',\n              },\n            ]\n          : [],\n      badgeFontSize: 8,\n      badgePadding: [1, 4],\n      portR: 3,\n      ports: (d) =>\n        d.id === 'ports'\n          ? [{ placement: 'left' }, { placement: 'right' }, { placement: 'top' }, { placement: 'bottom' }]\n          : [],\n    },\n  },\n  layout: {\n    type: 'grid',\n  },\n});\n\ngraph.render();\n",
        "paraId": 12,
        "tocIndex": 5
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
//# sourceMappingURL=docs_manual_element_node_Donut_zh_md_q_hK4X-async.js.map