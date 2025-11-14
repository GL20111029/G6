((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/event.zh.md?type=text'],
{ "docs/api/event.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/event.zh.md?watch=parent");
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
        "value": "G6 提供了强大的事件机制，允许你响应图表中发生的各种交互行为。例如节点点击、边悬停、画布拖拽等。通过事件系统，你可以实现复杂的交互逻辑，提升用户体验。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6 中的事件大致可分为以下几类：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "元素事件",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "：与节点、边、Combo 相关的事件，如 ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "node:click",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "edge:mouseenter",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "画布事件",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "：与整个画布相关的事件，如 ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "canvas:drag",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "canvas:zoom",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "生命周期事件",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "：与图表生命周期相关的事件，如 ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "beforerender",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": ", ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "afterrender",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "G6 的事件命名遵循 ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "[对象]:[事件]",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": " 的格式，例如：",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "node:click",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " - 节点点击事件",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "edge:mouseenter",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " - 鼠标进入边的事件",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "canvas:drag",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": " - 画布拖拽事件",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "G6 提供了完整的事件常量枚举，",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "强烈建议",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "使用这些常量而非直接使用字符串事件名：",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "import { NodeEvent, EdgeEvent, CanvasEvent, GraphEvent } from '@antv/g6';\n\n// 使用常量枚举监听事件\ngraph.on(NodeEvent.CLICK, handleNodeClick);\ngraph.on(EdgeEvent.POINTER_OVER, handleEdgeHover);\ngraph.on(CanvasEvent.DRAG, handleCanvasDrag);\ngraph.on(GraphEvent.AFTER_RENDER, handleAfterRender);\n",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "优势",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "：",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "类型安全，避免字符串拼写错误",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "提供智能代码提示和自动完成",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "监听指定的事件，当事件触发时执行回调函数。",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "on<T extends IEvent = IEvent>(eventName: string, callback: (event: T) => void, once?: boolean): this;\n",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "参数",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "描述",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "类型",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "默认值",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "必选",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "eventName",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "要监听的事件名称",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "✓",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "callback",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "事件触发时执行的回调函数",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "(event: T) => void",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "✓",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "once",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "是否只监听一次",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "boolean",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "类型：",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": " this（Graph 实例）",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": "描述：",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": " 返回图实例本身，支持链式调用",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": "import { NodeEvent, EdgeEvent, CanvasEvent } from '@antv/g6';\n\n// 监听节点点击事件\ngraph.on(NodeEvent.CLICK, (evt) => {\n  const { target } = evt; // 获取被点击节点的 ID\n  console.log(`节点 ${target.id} 被点击了`);\n\n  // 获取节点数据\n  const nodeData = graph.getNodeData(target.id);\n  console.log('节点数据:', nodeData);\n\n  // 修改节点状态\n  graph.setElementState(target.id, 'selected');\n});\n\n// 监听边的鼠标进入事件\ngraph.on(EdgeEvent.POINTER_OVER, (evt) => {\n  const { target } = evt;\n  graph.setElementState(target.id, 'highlight');\n});\n\n// 监听画布拖拽事件\ngraph.on(CanvasEvent.DRAG, (evt) => {\n  console.log('画布正在被拖拽');\n});\n",
        "paraId": 13,
        "tocIndex": 8
    },
    {
        "value": "一次性监听事件，事件触发一次后自动移除监听器。",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "once<T extends IEvent = IEvent>(eventName: string, callback: (event: T) => void): this;\n",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "参数",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "描述",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "类型",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "默认值",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "必选",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "eventName",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "要监听的事件名称",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "✓",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "callback",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "事件触发时执行的回调函数",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "(event: T) => void",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "✓",
        "paraId": 16,
        "tocIndex": 10
    },
    {
        "value": "类型：",
        "paraId": 17,
        "tocIndex": 11
    },
    {
        "value": " this（Graph 实例）",
        "paraId": 17,
        "tocIndex": 11
    },
    {
        "value": "描述：",
        "paraId": 17,
        "tocIndex": 11
    },
    {
        "value": " 返回图实例本身，支持链式调用",
        "paraId": 17,
        "tocIndex": 11
    },
    {
        "value": "import { GraphEvent, NodeEvent } from '@antv/g6';\n\n// 监听图表首次加载完成事件，仅执行一次\ngraph.once(GraphEvent.AFTER_RENDER, () => {\n  console.log('图表首次渲染完成');\n  // 执行一次性的初始化操作\n  highlightImportantNodes();\n});\n\n// 等待用户第一次点击某个节点后执行操作\ngraph.once(NodeEvent.CLICK, (evt) => {\n  console.log('用户首次点击了节点:', evt.target.id);\n  showTutorialTip('您可以拖拽节点改变位置');\n});\n",
        "paraId": 18,
        "tocIndex": 12
    },
    {
        "value": "移除全部事件监听器。",
        "paraId": 19,
        "tocIndex": 13
    },
    {
        "value": "off(): this;\n",
        "paraId": 20,
        "tocIndex": 13
    },
    {
        "value": "类型：",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": " this（Graph 实例）",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "描述：",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": " 返回图实例本身，支持链式调用",
        "paraId": 21,
        "tocIndex": 14
    },
    {
        "value": "// 移除所有事件监听器\ngraph.off();\nconsole.log('已移除所有事件监听器');\n",
        "paraId": 22,
        "tocIndex": 15
    },
    {
        "value": "移除指定事件类型的所有监听器。",
        "paraId": 23,
        "tocIndex": 16
    },
    {
        "value": "off(eventName: string): this;\n",
        "paraId": 24,
        "tocIndex": 16
    },
    {
        "value": "参数",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "描述",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "类型",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "默认值",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "必选",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "eventName",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "要移除的事件名称",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "string",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "-",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "✓",
        "paraId": 25,
        "tocIndex": 17
    },
    {
        "value": "类型：",
        "paraId": 26,
        "tocIndex": 18
    },
    {
        "value": " this（Graph 实例）",
        "paraId": 26,
        "tocIndex": 18
    },
    {
        "value": "描述：",
        "paraId": 26,
        "tocIndex": 18
    },
    {
        "value": " 返回图实例本身，支持链式调用",
        "paraId": 26,
        "tocIndex": 18
    },
    {
        "value": "import { NodeEvent } from '@antv/g6';\n\n// 移除所有节点点击事件的监听器\ngraph.off(NodeEvent.CLICK);\nconsole.log('已移除所有节点点击事件监听器');\n\n// 在某个操作模式结束后，移除相关的临时事件监听\nfunction exitEditMode() {\n  // 移除编辑模式下的所有监听器\n  graph.off(NodeEvent.DRAG_END);\n  graph.off(NodeEvent.DROP);\n  console.log('已退出编辑模式');\n}\n",
        "paraId": 27,
        "tocIndex": 19
    },
    {
        "value": "移除特定事件的特定回调函数。",
        "paraId": 28,
        "tocIndex": 20
    },
    {
        "value": "off(eventName: string, callback: (...args: any[]) => void): this;\n",
        "paraId": 29,
        "tocIndex": 20
    },
    {
        "value": "参数",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "描述",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "类型",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "默认值",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "必选",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "eventName",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "要移除的事件名称",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "string",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "-",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "✓",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "callback",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "要移除的回调函数",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "(...args: any[]) => void",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "-",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "✓",
        "paraId": 30,
        "tocIndex": 21
    },
    {
        "value": "类型：",
        "paraId": 31,
        "tocIndex": 22
    },
    {
        "value": " this（Graph 实例）",
        "paraId": 31,
        "tocIndex": 22
    },
    {
        "value": "描述：",
        "paraId": 31,
        "tocIndex": 22
    },
    {
        "value": " 返回图实例本身，支持链式调用",
        "paraId": 31,
        "tocIndex": 22
    },
    {
        "value": "import { NodeEvent } from '@antv/g6';\n\n// 定义回调函数\nconst handleNodeClick = (evt) => {\n  console.log('节点被点击:', evt.target.id);\n};\n\n// 添加监听器\ngraph.on(NodeEvent.CLICK, handleNodeClick);\n\n// 之后在某个时机移除这个特定的监听器\ngraph.off(NodeEvent.CLICK, handleNodeClick);\nconsole.log('已移除特定的节点点击事件监听器');\n",
        "paraId": 32,
        "tocIndex": 23
    },
    {
        "value": "G6 提供了多种事件常量枚举，便于开发者使用规范的事件名称。以下是所有事件常量的详细说明：",
        "paraId": 33,
        "tocIndex": 24
    },
    {
        "value": "常量名",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "事件名",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "描述",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "CLICK",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:click",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "点击节点时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "DBLCLICK",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:dblclick",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "双击节点时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "POINTER_OVER",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:pointerover",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "指针移入节点时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "POINTER_LEAVE",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:pointerleave",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "指针离开节点时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "POINTER_ENTER",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:pointerenter",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "指针进入节点或其子元素时触发(不冒泡)",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "POINTER_MOVE",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:pointermove",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "指针在节点上移动时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "POINTER_OUT",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:pointerout",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "指针离开节点时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "POINTER_DOWN",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:pointerdown",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "指针在节点上按下时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "POINTER_UP",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:pointerup",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "指针在节点上抬起时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "CONTEXT_MENU",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:contextmenu",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "节点上打开上下文菜单时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "DRAG_START",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:dragstart",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "开始拖拽节点时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "DRAG",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:drag",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "拖拽节点过程中触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "DRAG_END",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:dragend",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "拖拽节点结束时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "DRAG_ENTER",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:dragenter",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "拖拽物进入节点时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "DRAG_OVER",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:dragover",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "拖拽物在节点上方时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "DRAG_LEAVE",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:dragleave",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "拖拽物离开节点时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "DROP",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "node:drop",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "在节点上放置拖拽物时触发",
        "paraId": 34,
        "tocIndex": 25
    },
    {
        "value": "常量名",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "事件名",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "描述",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "CLICK",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:click",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "点击边时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "DBLCLICK",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:dblclick",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "双击边时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "POINTER_OVER",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:pointerover",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "指针移入边时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "POINTER_LEAVE",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:pointerleave",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "指针离开边时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "POINTER_ENTER",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:pointerenter",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "指针进入边或其子元素时触发(不冒泡)",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "POINTER_MOVE",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:pointermove",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "指针在边上移动时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "POINTER_OUT",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:pointerout",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "指针离开边时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "POINTER_DOWN",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:pointerdown",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "指针在边上按下时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "POINTER_UP",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:pointerup",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "指针在边上抬起时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "CONTEXT_MENU",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:contextmenu",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "边上打开上下文菜单时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "DRAG_ENTER",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:dragenter",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "拖拽物进入边时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "DRAG_OVER",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:dragover",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "拖拽物在边上方时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "DRAG_LEAVE",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:dragleave",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "拖拽物离开边时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "DROP",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "edge:drop",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "在边上放置拖拽物时触发",
        "paraId": 35,
        "tocIndex": 26
    },
    {
        "value": "常量名",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "事件名",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "描述",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "CLICK",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:click",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "点击Combo时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "DBLCLICK",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:dblclick",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "双击Combo时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "POINTER_OVER",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:pointerover",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "指针移入Combo时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "POINTER_LEAVE",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:pointerleave",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "指针离开Combo时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "POINTER_ENTER",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:pointerenter",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "指针进入Combo或其子元素时触发(不冒泡)",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "POINTER_MOVE",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:pointermove",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "指针在Combo上移动时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "POINTER_OUT",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:pointerout",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "指针离开Combo时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "POINTER_DOWN",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:pointerdown",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "指针在Combo上按下时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "POINTER_UP",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:pointerup",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "指针在Combo上抬起时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "CONTEXT_MENU",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:contextmenu",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "Combo上打开上下文菜单时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "DRAG_START",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:dragstart",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "开始拖拽Combo时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "DRAG",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:drag",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "拖拽Combo过程中触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "DRAG_END",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:dragend",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "拖拽Combo结束时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "DRAG_ENTER",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:dragenter",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "拖拽物进入Combo时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "DRAG_OVER",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:dragover",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "拖拽物在Combo上方时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "DRAG_LEAVE",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:dragleave",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "拖拽物离开Combo时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "DROP",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "combo:drop",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "在Combo上放置拖拽物时触发",
        "paraId": 36,
        "tocIndex": 27
    },
    {
        "value": "常量名",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "事件名",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "描述",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "CLICK",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:click",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "点击画布空白处时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "DBLCLICK",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:dblclick",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "双击画布空白处时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "POINTER_OVER",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:pointerover",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "指针移入画布时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "POINTER_LEAVE",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:pointerleave",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "指针离开画布时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "POINTER_ENTER",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:pointerenter",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "指针进入画布或其子元素时触发(不冒泡)",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "POINTER_MOVE",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:pointermove",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "指针在画布上移动时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "POINTER_OUT",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:pointerout",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "指针离开画布时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "POINTER_DOWN",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:pointerdown",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "指针在画布上按下时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "POINTER_UP",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:pointerup",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "指针在画布上抬起时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "CONTEXT_MENU",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:contextmenu",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "画布上打开上下文菜单时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "DRAG_START",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:dragstart",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "开始拖拽画布时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "DRAG",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:drag",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "拖拽画布过程中触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "DRAG_END",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:dragend",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "拖拽画布结束时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "DRAG_ENTER",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:dragenter",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "拖拽物进入画布时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "DRAG_OVER",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:dragover",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "拖拽物在画布上方时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "DRAG_LEAVE",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:dragleave",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "拖拽物离开画布时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "DROP",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:drop",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "在画布上放置拖拽物时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "WHEEL",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "canvas:wheel",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "在画布上滚动鼠标滚轮时触发",
        "paraId": 37,
        "tocIndex": 28
    },
    {
        "value": "常量名",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "事件名",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "描述",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_CANVAS_INIT",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforecanvasinit",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "画布初始化之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_CANVAS_INIT",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "aftercanvasinit",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "画布初始化之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_SIZE_CHANGE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforesizechange",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "视口尺寸变更之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_SIZE_CHANGE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "aftersizechange",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "视口尺寸变更之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_ELEMENT_CREATE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforeelementcreate",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "元素创建之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_ELEMENT_CREATE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afterelementcreate",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "元素创建之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_ELEMENT_UPDATE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforeelementupdate",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "元素更新之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_ELEMENT_UPDATE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afterelementupdate",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "元素更新之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_ELEMENT_DESTROY",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforeelementdestroy",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "元素销毁之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_ELEMENT_DESTROY",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afterelementdestroy",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "元素销毁之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_ELEMENT_TRANSLATE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforeelementtranslate",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "元素平移之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_ELEMENT_TRANSLATE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afterelementtranslate",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "元素平移之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_DRAW",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforedraw",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "绘制开始之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_DRAW",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afterdraw",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "绘制结束之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_RENDER",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforerender",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "渲染开始之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_RENDER",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afterrender",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "渲染完成之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_ANIMATE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforeanimate",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "动画开始之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_ANIMATE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afteranimate",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "动画结束之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_LAYOUT",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforelayout",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "布局开始之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_LAYOUT",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afterlayout",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "布局结束之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_STAGE_LAYOUT",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforestagelayout",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "流水线布局过程中每个阶段开始前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_STAGE_LAYOUT",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afterstagelayout",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "流水线布局过程中每个阶段结束后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_TRANSFORM",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforetransform",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "可视区域变化之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_TRANSFORM",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "aftertransform",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "可视区域变化之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BATCH_START",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "batchstart",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "批处理操作开始时触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BATCH_END",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "batchend",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "批处理操作结束时触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_DESTROY",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforedestroy",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "图表销毁前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_DESTROY",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afterdestroy",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "图表销毁后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "BEFORE_RENDERER_CHANGE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "beforerendererchange",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "渲染器变更之前触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "AFTER_RENDERER_CHANGE",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "afterrendererchange",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "渲染器变更之后触发",
        "paraId": 38,
        "tocIndex": 29
    },
    {
        "value": "常量名",
        "paraId": 39,
        "tocIndex": 30
    },
    {
        "value": "事件名",
        "paraId": 39,
        "tocIndex": 30
    },
    {
        "value": "描述",
        "paraId": 39,
        "tocIndex": 30
    },
    {
        "value": "KEY_DOWN",
        "paraId": 39,
        "tocIndex": 30
    },
    {
        "value": "keydown",
        "paraId": 39,
        "tocIndex": 30
    },
    {
        "value": "键盘按键按下时触发",
        "paraId": 39,
        "tocIndex": 30
    },
    {
        "value": "KEY_UP",
        "paraId": 39,
        "tocIndex": 30
    },
    {
        "value": "keyup",
        "paraId": 39,
        "tocIndex": 30
    },
    {
        "value": "键盘按键抬起时触发",
        "paraId": 39,
        "tocIndex": 30
    },
    {
        "value": "这些是不带前缀的事件，可用于监听全局事件：",
        "paraId": 40,
        "tocIndex": 31
    },
    {
        "value": "常量名",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "事件名",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "描述",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "CLICK",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "click",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "点击任何元素时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "DBLCLICK",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "dblclick",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "双击任何元素时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "POINTER_OVER",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "pointerover",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "指针移入任何元素时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "POINTER_LEAVE",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "pointerleave",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "指针离开任何元素时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "POINTER_ENTER",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "pointerenter",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "指针进入任何元素或其子元素时触发(不冒泡)",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "POINTER_MOVE",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "pointermove",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "指针在任何元素上移动时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "POINTER_OUT",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "pointerout",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "指针离开任何元素时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "POINTER_DOWN",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "pointerdown",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "指针在任何元素上按下时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "POINTER_UP",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "pointerup",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "指针在任何元素上抬起时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "CONTEXT_MENU",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "contextmenu",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "任何元素上打开上下文菜单时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "DRAG_START",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "dragstart",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "开始拖拽任何元素时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "DRAG",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "drag",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "拖拽任何元素过程中触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "DRAG_END",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "dragend",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "拖拽任何元素结束时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "DRAG_ENTER",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "dragenter",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "拖拽物进入任何元素时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "DRAG_OVER",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "dragover",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "拖拽物在任何元素上方时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "DRAG_LEAVE",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "dragleave",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "拖拽物离开任何元素时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "DROP",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "drop",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "在任何元素上放置拖拽物时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "KEY_DOWN",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "keydown",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "键盘按键按下时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "KEY_UP",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "keyup",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "键盘按键抬起时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "WHEEL",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "wheel",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "滚动鼠标滚轮时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "PINCH",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "pinch",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "多点触控屏幕上双指捏合或张开时触发",
        "paraId": 41,
        "tocIndex": 31
    },
    {
        "value": "G6 的事件 API 支持链式调用，可以连续注册多个事件：",
        "paraId": 42,
        "tocIndex": 33
    },
    {
        "value": "import { NodeEvent, EdgeEvent, CanvasEvent } from '@antv/g6';\n\n// 使用常量枚举+链式调用\ngraph.on(NodeEvent.CLICK, handleNodeClick).on(EdgeEvent.CLICK, handleEdgeClick).on(CanvasEvent.WHEEL, handleCanvasZoom);\n",
        "paraId": 43,
        "tocIndex": 33
    },
    {
        "value": "你可以利用事件冒泡机制，在父元素上监听所有子元素的事件：",
        "paraId": 44,
        "tocIndex": 34
    },
    {
        "value": "import { CommonEvent } from '@antv/g6';\n\n// 统一处理所有元素的点击事件\ngraph.on(CommonEvent.CLICK, (evt) => {\n  const { targetType, target } = evt;\n  if (targetType === 'node') {\n    console.log('点击了节点:', target.id);\n  } else if (targetType === 'edge') {\n    console.log('点击了边:', target.id);\n  } else {\n    console.log('点击了画布空白处');\n  }\n});\n",
        "paraId": 45,
        "tocIndex": 34
    },
    {
        "value": "大多数事件的回调函数会接收一个事件对象，包含以下常用属性：",
        "paraId": 46,
        "tocIndex": 35
    },
    {
        "value": "target",
        "paraId": 47,
        "tocIndex": 35
    },
    {
        "value": " - 触发事件的元素",
        "paraId": 47,
        "tocIndex": 35
    },
    {
        "value": "targetType",
        "paraId": 47,
        "tocIndex": 35
    },
    {
        "value": " - 触发事件的元素类型（node/edge/combo/canvas）",
        "paraId": 47,
        "tocIndex": 35
    },
    {
        "value": "originalTarget",
        "paraId": 47,
        "tocIndex": 35
    },
    {
        "value": " - 原始的触发事件的图形",
        "paraId": 47,
        "tocIndex": 35
    },
    {
        "value": "currentTarget",
        "paraId": 47,
        "tocIndex": 35
    },
    {
        "value": " - 当前触发事件的对象",
        "paraId": 47,
        "tocIndex": 35
    },
    {
        "value": "originalEvent",
        "paraId": 47,
        "tocIndex": 35
    },
    {
        "value": " - 原始的浏览器事件对象",
        "paraId": 47,
        "tocIndex": 35
    },
    {
        "value": "通过这些属性，你可以精确地控制交互行为。",
        "paraId": 48,
        "tocIndex": 35
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
//# sourceMappingURL=docs_api_event_zh_md_q_hK4X-async.js.map