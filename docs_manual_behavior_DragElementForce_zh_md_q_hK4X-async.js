((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/DragElementForce.zh.md?type=text'],
{ "docs/manual/behavior/DragElementForce.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/behavior/DragElementForce.zh.md?watch=parent");
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
        "value": "DragElementForce 是 G6 中用于实现 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "d3-force",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 和 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "d3-force-3d",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 布局下节点拖拽的内置交互。在拖拽过程中会 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "实时重新计算布局",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "，使得图的布局能够动态调整以适应节点的新位置。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "在图配置中添加这一交互：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "1. 快速配置（静态）",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "使用字符串形式直接声明，这种方式简洁但仅支持默认配置，且配置后不可动态修改：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: ['drag-element-force'],\n});\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "2. 对象配置（推荐）",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "使用对象形式进行配置，支持自定义参数，且可以在运行时动态更新配置：",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  // 其他配置...\n  behaviors: [\n    {\n      type: 'drag-element-force',\n      key: 'drag-element-force-1',\n      fixed: true, // 拖拽后固定节点位置\n    },\n  ],\n});\n",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "配置项",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "说明",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "交互类型名称，这里设置 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "type: 'drag-element-force'",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " 启用此交互",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "drag-element-force",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "key",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "交互唯一标识符，用于后续操作交互",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "fixed",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "在拖拽结束后，节点是否保持固定位置，布尔值代表：",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- true: 在拖拽结束后，节点的位置将保持固定，不受布局算法的影响 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- false: 在拖拽结束后，节点的位置将继续受到布局算法的影响",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "enable",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "是否启用拖拽功能，默认可以拖拽节点和 Combo",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "boolean | ((event: IElementDragEvent) => boolean)",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "['node', 'combo'].includes(event.targetType)",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "state",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "节点选中状态的标识，启用多选时会基于该状态查找选中的节点",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "selected",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "hideEdge",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "控制拖拽过程中边的显示状态，可选值有：",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "none",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": 不隐藏任何边 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "out",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": 隐藏以当前节点为源节点的边 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "in",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": 隐藏以当前节点为目标节点的边 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "both",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": 隐藏与当前节点相关的所有边 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "- ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "all",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ": 隐藏图中所有边 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "⚠️ 注意：当启用 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "shadow",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "（幽灵节点）时，",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "hideEdge",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " 配置将不生效。",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "none",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "all",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "in",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "out",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " | ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "both",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "none",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "cursor",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "自定义鼠标样式，",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "示例",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "{ default?: Cursor; grab: Cursor; grabbing: Cursor }",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "cursor",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " 用于自定义拖拽过程中的鼠标指针样式：",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "default",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": ": 默认状态下的指针样式",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "grab",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": ": 鼠标悬停在可拖拽元素上时的指针样式",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "grabbing",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": ": 正在拖拽时的指针样式",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "可选值有：",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "auto",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "default",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "none",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "context-menu",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "help",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "pointer",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "progress",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "wait",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "cell",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "crosshair",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "text",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "vertical-text",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "alias",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "copy",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "move",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "no-drop",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "not-allowed",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "grab",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "grabbing",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "all-scroll",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "col-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "row-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "n-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "e-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "s-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "w-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "ne-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "nw-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "se-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "sw-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "ew-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "ns-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "nesw-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "nwse-resize",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "zoom-in",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "zoom-out",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "示例配置：",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "cursor: {\n  default: 'default',    // 默认使用普通指针\n  grab: 'grab',         // 可拖拽时显示抓取指针\n  grabbing: 'grabbing'  // 拖拽中显示抓取中指针\n}\n",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "DragElementForce",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " 专门用于 ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "d3-force",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " 或 ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "d3-force-3d",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " 布局，拖拽时会实时重新计算布局",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "DragElement",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": " 是通用的拖拽交互，不会触发布局重新计算",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nfunction getData(size = 10) {\n  const nodes = Array.from({ length: size * size }, (_, i) => ({ id: `${i}` }));\n  const edges = [];\n  for (let y = 0; y < size; ++y) {\n    for (let x = 0; x < size; ++x) {\n      if (y > 0) edges.push({ source: `${(y - 1) * size + x}`, target: `${y * size + x}` });\n      if (x > 0) edges.push({ source: `${y * size + (x - 1)}`, target: `${y * size + x}` });\n    }\n  }\n  return { nodes, edges };\n}\n\nconst graph = new Graph({\n  data: getData(),\n  layout: {\n    type: 'd3-force',\n    manyBody: {\n      strength: -30,\n    },\n    link: {\n      strength: 1,\n      distance: 20,\n      iterations: 10,\n    },\n  },\n  node: {\n    style: {\n      size: 10,\n      fill: '#000',\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#000',\n    },\n  },\n  behaviors: [{ type: 'drag-element-force' }, 'zoom-canvas'],\n});\n\ngraph.render();\n\nwindow.addPanel((gui) => {\n  gui.add({ msg: 'Try to drag nodes' }, 'msg').name('Tips').disable();\n});\n",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst data = {\n  nodes: new Array(10).fill(0).map((_, i) => ({ id: `${i}`, label: `${i}` })),\n  edges: [\n    { source: '0', target: '1' },\n    { source: '0', target: '2' },\n    { source: '0', target: '3' },\n    { source: '0', target: '4' },\n    { source: '0', target: '5' },\n    { source: '0', target: '7' },\n    { source: '0', target: '8' },\n    { source: '0', target: '9' },\n    { source: '2', target: '3' },\n    { source: '4', target: '5' },\n    { source: '4', target: '6' },\n    { source: '5', target: '6' },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  node: {\n    style: {\n      labelText: (d) => d.label,\n      labelPlacement: 'middle',\n      labelFill: '#fff',\n    },\n  },\n  layout: {\n    type: 'd3-force',\n    link: {\n      distance: 100,\n      strength: 2,\n    },\n    collide: {\n      radius: 40,\n    },\n  },\n  behaviors: [\n    {\n      type: 'drag-element-force',\n      fixed: true,\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 17,
        "tocIndex": 8
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
//# sourceMappingURL=docs_manual_behavior_DragElementForce_zh_md_q_hK4X-async.js.map