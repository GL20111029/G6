((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Legend.zh.md?type=text'],
{ "docs/manual/plugin/Legend.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Legend.zh.md?watch=parent");
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
        "value": "图例（Legend）插件用于展示图中元素的分类信息，支持节点、边、组合的分类信息展示。通过图例，用户可以快速感知到图中相关元素的分类信息，也可以通过点击对应图例项来快速定位到元素，提高用户的浏览效率。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这一插件主要用于：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "通过图例快速对元素进行分类",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "通过图例快速高亮定位到对应元素",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  // 其他配置...\n  plugins: [\n    {\n      type: 'legend', // 插件类型为 legend\n      nodeField: 'cluster', // 用于节点分组的数组字段名称\n      edgeField: 'cluster', // 用于边分组的数组字段名称\n    },\n  ],\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "插件类型",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "legend",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "key",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "插件唯一标识符，用于后续更新",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "trigger",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例项触发对应项高亮的方式：",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "hover",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "：鼠标移入图例项时触发 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "click",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "：鼠标点击图例项时触发",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "hover",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "click",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "hover",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "position",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例在画布中的相对位置，",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "可选值",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "CardinalPlacement",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "bottom",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "container",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例挂载的容器，无则挂载到 Graph 所在容器",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "HTMLElement | string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "className",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例画布类名，传入外置容器时不生效",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "containerStyle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例的容器样式，传入外置容器时不生效",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "CSSStyleDeclaration",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "nodeField",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "节点分类标识",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string | (item: ElementDatum) => string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "edgeField",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "边分类标识",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string | (item: ElementDatum) => string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "comboField",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "组合分类标识",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string | (item: ElementDatum) => string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "orientation",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例项的布局方向：",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "horizontal",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "：水平方向 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "vertical",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "：垂直方向",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "horizontal",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "vertical",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'horizontal'",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "layout",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "布局方式：",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "flex",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "：弹性布局 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "- ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "grid",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "：网格布局",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "flex",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "grid",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "flex",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "showTitle",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "是否显示标题",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "titleText",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "标题内容",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "\"\"",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "x",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例在画布中的相对的横向位置，优先级高于position",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "y",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例在画布中的相对的纵向位置，优先级高于position",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "width",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例的宽度",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "240",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "height",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例的高度",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "160",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "itemSpacing",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例项的文本和对应标记之间的间距",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "4",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "rowPadding",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例中每行之间的间距",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "colPadding",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例中每列之间的间距",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "itemMarkerSize",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例项标记的大小",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "16",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "itemLabelFontSize",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例项文本的字体大小",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "16",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "gridCol",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例项在宽度允许情况下的最大列数",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "gridRow",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "图例项在高度允许情况下的最大行数",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "position",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " 属性支持以下值：",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "'top-left'",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：左上角",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "'top-right'",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：右上角",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "'bottom-left'",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：左下角",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "'bottom-right'",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：右下角",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "'left-top'",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：左侧靠上",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "'left-bottom'",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：左侧靠下",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "'right-top'",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：右侧靠上",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "'right-bottom'",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "：右侧靠下",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  // 其他配置...\n  plugins: [\n    {\n      type: 'legend', // 插件类型为 legend\n      nodeField: 'cluster', // 用于节点分组的数组字段名称\n      edgeField: 'cluster', // 用于边分组的数组字段名称\n    },\n  ],\n});\n",
        "paraId": 9,
        "tocIndex": 6
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  // 其他配置...\n  plugins: [\n    {\n      type: 'legend',\n      nodeField: 'cluster',\n      edgeField: 'cluster',\n      // 可以通过 position 快捷的来指定位置\n      // position: \"top-left\",\n      // 也可以通过x,y来更加灵活的控制图例的位置\n      x: 20,\n      y: 20,\n    },\n  ],\n});\n",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "const data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n  ],\n  edges: [{ source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } }],\n};\n\nconst graph = new Graph({\n  data,\n  // 其他配置...\n  plugins: [\n    {\n      type: 'legend',\n      nodeField: 'cluster',\n      edgeField: 'cluster',\n      layout: 'flex',\n      // 控制只显示一行\n      gridRow: 1,\n      // 控制一行显示10列，当列宽不足时会显示翻页按钮\n      gridCol: 10,\n    },\n  ],\n});\n",
        "paraId": 11,
        "tocIndex": 8
    },
    {
        "value": "orientation",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "主要控制布局的方向，具体展示",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "一行多列",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "还是",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "一列多行",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "，主要通过 ",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "gridRow",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": " 以及",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "gridCol",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "来控制，例如想要看起来像是竖向的图例项，则可以通过这样配置:",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "   plugins: [\n    {\n      type: 'legend',\n      nodeField: 'cluster',\n      edgeField: 'cluster',\n      layout: \"flex\",\n      // 控制一行显示1列\n      gridCol:1,\n      // 控制显示最多20行\n      gridRow: 20,\n    },\n  ],\n",
        "paraId": 13,
        "tocIndex": 10
    },
    {
        "value": "这样就变成了只有一列的图例，符合视觉上的竖向排列。",
        "paraId": 14,
        "tocIndex": 10
    },
    {
        "value": "可以使用 ",
        "paraId": 15,
        "tocIndex": 11
    },
    {
        "value": "updatePlugin",
        "paraId": 15,
        "tocIndex": 11
    },
    {
        "value": " 方法动态更新工具栏：",
        "paraId": 15,
        "tocIndex": 11
    },
    {
        "value": "const graph = new Graph({\n  data,\n  // 其他配置...\n  plugins: [\n    {\n      type: 'legend',\n      key: 'my-legend',\n      nodeField: 'cluster',\n      edgeField: 'cluster',\n    },\n  ],\n});\n\n// 更新图例位置\ngraph.updatePlugin({\n  key: 'my-legend',\n  position: 'bottom-right',\n});\n",
        "paraId": 16,
        "tocIndex": 11
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [\n    { id: 'node-1', type: 'circle', data: { cluster: 'node-type1' } },\n    { id: 'node-2', type: 'rect', data: { cluster: 'node-type2' } },\n    { id: 'node-3', type: 'triangle', data: { cluster: 'node-type3' } },\n    { id: 'node-4', type: 'diamond', data: { cluster: 'node-type4' } },\n  ],\n  edges: [\n    { source: 'node-1', target: 'node-2', data: { cluster: 'edge-type1' } },\n    { source: 'node-1', target: 'node-4', data: { cluster: 'edge-type2' } },\n    { source: 'node-3', target: 'node-4' },\n    { source: 'node-2', target: 'node-4', data: { cluster: 'edge-type3' } },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: { size: 32 },\n    palette: {\n      field: 'cluster',\n    },\n  },\n  layout: {\n    type: 'force',\n  },\n  plugins: [\n    {\n      type: 'legend',\n      nodeField: 'cluster',\n      edgeField: 'cluster',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 17,
        "tocIndex": 12
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
//# sourceMappingURL=docs_manual_plugin_Legend_zh_md_q_hK4X-async.js.map