((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/GridLine.zh.md?type=text'],
{ "docs/manual/plugin/GridLine.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/GridLine.zh.md?watch=parent");
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
        "value": "网格线插件为画布提供可视化辅助线，帮助用户精确定位和对齐图形元素，是图形绘制中不可或缺的辅助工具。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "网格线插件主要适用于以下场景：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "辅助用户精确绘图和元素对齐",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "提供视觉参考，增强空间感知",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "在设计和编辑图形时构建结构化的参考系统",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "以下是一个简单的 GridLine 插件初始化示例：",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'grid-line',\n      key: 'my-grid-line', // 指定唯一标识符，便于后续动态更新\n      size: 20,\n      stroke: '#0001',\n      follow: true,\n    },\n  ],\n});\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    data: { nodes: [{ id: 'node-1' }] },\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    layout: { type: 'force' },\n    behaviors: ['drag-canvas'],\n    plugins: [{ type: 'grid-line', key: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const LINE_STYLE = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'];\n    const options = {\n      type: 'grid-line',\n      border: true,\n      borderLineWidth: 1,\n      borderStroke: '#eee',\n      borderStyle: 'solid',\n      follow: false,\n      lineWidth: 1,\n      size: 20,\n      stroke: '#eee',\n    };\n    const optionFolder = gui.addFolder('Gird Line Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'size', 1, 50, 1);\n    optionFolder.add(options, 'lineWidth', 1, 10, 1);\n    optionFolder.addColor(options, 'stroke');\n    optionFolder.add(options, 'border');\n    optionFolder.add(options, 'borderLineWidth', 1, 10, 1);\n    optionFolder.add(options, 'borderStyle', LINE_STYLE);\n    optionFolder.addColor(options, 'borderStroke');\n    optionFolder.add(options, 'follow');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'grid-line',\n        [property]: value,\n      });\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "插件类型",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "grid-line",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "插件的唯一标识，可用于获取插件实例或更新插件选项",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "border",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "是否显示边框",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "borderLineWidth",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "边框线宽",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "1",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "borderStroke",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "边框颜色，详细属性参考 ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "CSS border-color",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "#eee",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "borderStyle",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "边框样式，详细属性参考 ",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "CSS border-style",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "solid",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "follow",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "是否跟随画布移动",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "boolean \\｜ {translate ?: boolean, zoom?: boolean}",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "lineWidth",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "网格线宽度",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number | string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "1",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "size",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "网格单元大小，单位为像素",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "20",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "stroke",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "网格线颜色",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "#eee",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "follow",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": " 属性用于控制网格线是否跟随画布的变换操作。它支持两种配置方式：",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "布尔值配置",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "：当设置为 ",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "true",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": " 时，网格线会同时跟随画布的平移和缩放；设置为 ",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "false",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": " 时则保持静态。",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "// 同时启用跟随平移和缩放\nconst graph = new Graph({\n  plugins: [\n    {\n      type: 'grid-line',\n      follow: true,\n    },\n  ],\n});\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "对象配置",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "：可以更精细地控制网格线的跟随行为。",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "// 仅跟随平移，不跟随缩放\nconst graph = new Graph({\n  plugins: [\n    {\n      type: 'grid-line',\n      follow: {\n        translate: true, // 跟随平移\n        zoom: false, // 不跟随缩放\n      },\n    },\n  ],\n});\n\n// 仅跟随缩放，不跟随平移\nconst graph = new Graph({\n  plugins: [\n    {\n      type: 'grid-line',\n      follow: {\n        translate: false, // 不跟随平移\n        zoom: true, // 跟随缩放\n      },\n    },\n  ],\n});\n",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "当网格线跟随缩放时，它会保持与画布内容的相对位置关系，使得对齐参考更加精准。跟随平移则让网格随着画布内容一起移动，增强空间连续性的视觉体验。",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "最简单的方式是直接使用预设配置：",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  plugins: ['grid-line'],\n});\n",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "效果如下：",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  data: { nodes: [{ id: 'node-1', style: { x: 150, y: 75 } }] },\n  behaviors: ['drag-canvas'],\n  plugins: ['grid-line'],\n});\n\ngraph.render();\n",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "您可以根据需要自定义网格线的样式：",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  plugins: [\n    {\n      type: 'grid-line',\n      stroke: '#1890ff33', // 蓝色半透明网格线\n      lineWidth: 2,\n      size: 40, // 更大的网格单元\n      borderStroke: '#1890ff', // 蓝色边框\n      borderLineWidth: 2,\n    },\n  ],\n});\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "效果如下：",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  data: { nodes: [{ id: 'node-1', style: { x: 150, y: 75 } }] },\n  behaviors: ['drag-canvas'],\n  plugins: [\n    {\n      type: 'grid-line',\n      stroke: '#1890ff33', // 蓝色半透明网格线\n      lineWidth: 2,\n      size: 40, // 更大的网格\n      borderStroke: '#1890ff', // 蓝色边框\n      borderLineWidth: 2,\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "启用 follow 选项可以让网格跟随画布移动，增强用户体验：",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n  plugins: [\n    {\n      type: 'grid-line',\n      follow: true, // 网格跟随画布移动\n    },\n  ],\n});\n",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "试着拖拽/缩放画布，观察网格的跟随效果：",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 150,\n  data: { nodes: [{ id: 'node-1', style: { x: 150, y: 75 } }] },\n  behaviors: ['drag-canvas', 'zoom-canvas'],\n  plugins: [\n    {\n      type: 'grid-line',\n      follow: true, // 网格跟随画布移动\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "使用 key 标识符可以在运行时动态更新网格属性：",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "// 初始化配置\nconst graph = new Graph({\n  // 其他配置...\n  plugins: [\n    {\n      type: 'grid-line',\n      key: 'my-grid',\n      size: 20,\n    },\n  ],\n});\n\n// 后续动态更新\ngraph.updatePlugin({\n  key: 'my-grid',\n  size: 40, // 更新网格大小\n  stroke: '#ff4d4f', // 更新网格颜色\n});\n",
        "paraId": 26,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: [{ id: 'node-0' }, { id: 'node-1' }, { id: 'node-2' }, { id: 'node-3' }, { id: 'node-4' }, { id: 'node-5' }],\n  edges: [\n    { source: 'node-0', target: 'node-1' },\n    { source: 'node-0', target: 'node-2' },\n    { source: 'node-0', target: 'node-3' },\n    { source: 'node-0', target: 'node-4' },\n    { source: 'node-1', target: 'node-0' },\n    { source: 'node-2', target: 'node-0' },\n    { source: 'node-3', target: 'node-0' },\n    { source: 'node-4', target: 'node-0' },\n    { source: 'node-5', target: 'node-0' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  layout: { type: 'grid' },\n  behaviors: ['drag-canvas'],\n  plugins: [{ key: 'grid-line', type: 'grid-line', follow: false }],\n});\n\ngraph.render();\n\nwindow.addPanel((gui) => {\n  gui\n    .add({ follow: false }, 'follow')\n    .name('Follow')\n    .onChange((value) => {\n      graph.updatePlugin({\n        key: 'grid-line',\n        follow: value,\n      });\n    });\n});\n",
        "paraId": 27,
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
//# sourceMappingURL=docs_manual_plugin_GridLine_zh_md_q_hK4X-async.js.map