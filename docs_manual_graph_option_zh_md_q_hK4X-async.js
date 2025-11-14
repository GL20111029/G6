((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/graph/option.zh.md?type=text'],
{ "docs/manual/graph/option.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/graph/option.zh.md?watch=parent");
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
        "value": "{ type: 'view'; options?: ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "FitViewOptions",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "; animation?: ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "; } | { type: 'center'; animation?: ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "; } | 'view' | 'center'",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "是否自动适应画布。⚠️ ",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "注意",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "：每次执行 ",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "render",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": " 时，都会根据 ",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "autoFit",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": " 进行自适应。",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "两种基本自适应模式：",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "'view'",
        "paraId": 6,
        "tocIndex": 0
    },
    {
        "value": " - 自动缩放，确保所有内容都在视图内可见",
        "paraId": 6,
        "tocIndex": 0
    },
    {
        "value": "'center'",
        "paraId": 6,
        "tocIndex": 0
    },
    {
        "value": " - 内容居中显示，但不改变缩放比例",
        "paraId": 6,
        "tocIndex": 0
    },
    {
        "value": "还可通过对象形式实现更精细的自适应控制：",
        "paraId": 7,
        "tocIndex": 0
    },
    {
        "value": "const graph = new Graph({\n  autoFit: {\n    type: 'view', // 自适应类型：'view' 或 'center'\n    options: {\n      // 仅适用于 'view' 类型\n      when: 'overflow', // 何时适配：'overflow'(仅当内容溢出时) 或 'always'(总是适配)\n      direction: 'x', // 适配方向：'x'、'y' 或 'both'\n    },\n    animation: {\n      // 自适应动画效果\n      duration: 1000, // 动画持续时间(毫秒)\n      easing: 'ease-in-out', // 动画缓动函数\n    },\n  },\n});\n",
        "paraId": 8,
        "tocIndex": 0
    },
    {
        "value": "属性",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "描述",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "类型",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "默认值",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "必选",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "when",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "在以下情况下进行适配 ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": " - ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'overflow'",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": " 仅当图内容超出视口时进行适配 ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": " - ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'always'",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": " 总是进行适配",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'overflow",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "' | ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'always'",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'always'",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "direction",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "仅对指定方向进行适配 ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": " - ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'x'",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": " 仅适配 x 方向 ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": " - ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'y'",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": " 仅适配 y 方向 ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": " - ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'both'",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": " 适配 x 和 y 方向",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'x",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "' | ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'y",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "' | ",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'both'",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "'both'",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "type ViewportAnimationEffectTiming =\n  | boolean // true 启用默认动画，false 禁用动画\n  | {\n      easing?: string; // 动画缓动函数：'ease-in-out'、'ease-in'、'ease-out'、'linear'\n      duration?: number; // 动画持续时间(毫秒)\n    };\n",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "默认值:",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "是否自动调整画布大小。",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "基于 ",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "window.onresize",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": " 事件实现。当浏览器窗口大小变化时，画布将自动调整大小以适应容器。",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "画布背景色。",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "该颜色作为导出图片时的背景色。可以使用任何有效的 CSS 颜色值，如十六进制、RGB、RGBA 等。",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "CanvasConfig",
        "paraId": 17,
        "tocIndex": 5
    },
    {
        "value": "画布配置。GraphOptions 下相关配置项（如 ",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "container",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "、",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "width",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "、",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "height",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "、",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "devicePixelRatio",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "、",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "background",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "、",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "cursor",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "）为快捷配置项，会被转换为 canvas 配置项。",
        "paraId": 18,
        "tocIndex": 5
    },
    {
        "value": "属性",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "描述",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "类型",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "默认值",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "必填",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "container",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "画布容器",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "string | HTMLElement",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "devicePixelRatio",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "设备像素比",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "width",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "画布宽度",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "height",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "画布高度",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "cursor",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "指针样式，与 ",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "GraphOptions.cursor",
        "paraId": 20,
        "tocIndex": 6
    },
    {
        "value": " 配置相同",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "background",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "画布背景色",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "renderer",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "渲染器，与 ",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "GraphOptions.renderer",
        "paraId": 21,
        "tocIndex": 6
    },
    {
        "value": " 配置相同",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "(layer: ",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "'background'",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "'main'",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "'label'",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": " | ",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "'transient'",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": ") => IRenderer",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "enableMultiLayer",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "是否启用多图层。非动态参数，仅在初始化时生效",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "boolean",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 19,
        "tocIndex": 6
    },
    {
        "value": "string |",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": " ",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": "HTMLElement",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": " ",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": "|",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": " Canvas",
        "paraId": 22,
        "tocIndex": 7
    },
    {
        "value": "画布容器，可以是以下三种赋值之一：",
        "paraId": 23,
        "tocIndex": 7
    },
    {
        "value": "DOM 元素的 ID 字符串，如 ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "'container'",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "HTML 元素对象，如 ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "document.getElementById('container')",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "Canvas 实例，如 ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "new Canvas(options)",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "，其中 ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "options",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": " 为 ",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "CanvasConfig",
        "paraId": 25,
        "tocIndex": 7
    },
    {
        "value": " 类型。",
        "paraId": 24,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 26,
        "tocIndex": 8
    },
    {
        "value": "指针样式，控制鼠标悬停在画布上时的光标形状。可以使用任何有效的 CSS cursor 值。",
        "paraId": 27,
        "tocIndex": 8
    },
    {
        "value": "支持的值有： ",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'auto'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'default'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'none'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'context-menu'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'help'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'pointer'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'progress'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'wait'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'cell'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'crosshair'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'text'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'vertical-text'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'alias'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'copy'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'move'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'no-drop'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'not-allowed'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'grab'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'grabbing'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'all-scroll'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'col-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'row-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'n-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'e-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'s-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'w-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'ne-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'nw-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'se-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'sw-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'ew-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'ns-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'nesw-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'nwse-resize'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'zoom-in'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "、",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "'zoom-out'",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "。",
        "paraId": 28,
        "tocIndex": 8
    },
    {
        "value": "这里的 Cursor 值参考 ",
        "paraId": 29,
        "tocIndex": 8
    },
    {
        "value": "MDN - cursor",
        "paraId": 29,
        "tocIndex": 8
    },
    {
        "value": "。",
        "paraId": 29,
        "tocIndex": 8
    },
    {
        "value": "number",
        "paraId": 30,
        "tocIndex": 9
    },
    {
        "value": "设备像素比。",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "用于高清屏的设备像素比，默认为 ",
        "paraId": 32,
        "tocIndex": 9
    },
    {
        "value": "window.devicePixelRatio",
        "paraId": 32,
        "tocIndex": 9
    },
    {
        "value": "。",
        "paraId": 32,
        "tocIndex": 9
    },
    {
        "value": "number",
        "paraId": 33,
        "tocIndex": 10
    },
    {
        "value": "画布宽度。如果未设置，则会自动获取容器宽度。",
        "paraId": 34,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 35,
        "tocIndex": 11
    },
    {
        "value": "画布高度。如果未设置，则会自动获取容器高度。",
        "paraId": 36,
        "tocIndex": 11
    },
    {
        "value": "(layer: 'background' | 'main' | 'label' | 'transient') =>",
        "paraId": 37,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 37,
        "tocIndex": 12
    },
    {
        "value": "IRenderer",
        "paraId": 37,
        "tocIndex": 12
    },
    {
        "value": "手动指定渲染器",
        "paraId": 38,
        "tocIndex": 12
    },
    {
        "value": "G6 采用了分层渲染的方式，分为 ",
        "paraId": 39,
        "tocIndex": 12
    },
    {
        "value": "background",
        "paraId": 39,
        "tocIndex": 12
    },
    {
        "value": "、",
        "paraId": 39,
        "tocIndex": 12
    },
    {
        "value": "main",
        "paraId": 39,
        "tocIndex": 12
    },
    {
        "value": "、",
        "paraId": 39,
        "tocIndex": 12
    },
    {
        "value": "label",
        "paraId": 39,
        "tocIndex": 12
    },
    {
        "value": "、",
        "paraId": 39,
        "tocIndex": 12
    },
    {
        "value": "transient",
        "paraId": 39,
        "tocIndex": 12
    },
    {
        "value": " 四层，用户可以通过该配置项分别设置每层画布的渲染器。",
        "paraId": 39,
        "tocIndex": 12
    },
    {
        "value": "示例",
        "paraId": 40,
        "tocIndex": 12
    },
    {
        "value": ": 使用 SVG 渲染器进行渲染",
        "paraId": 40,
        "tocIndex": 12
    },
    {
        "value": "import { Renderer as SVGRenderer } from '@antv/g-svg';\nimport { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  renderer: () => new SVGRenderer(),\n});\n",
        "paraId": 41,
        "tocIndex": 12
    },
    {
        "value": "number | number[]",
        "paraId": 42,
        "tocIndex": 13
    },
    {
        "value": "画布内边距",
        "paraId": 43,
        "tocIndex": 13
    },
    {
        "value": "通常在自适应时，会根据内边距进行适配。可以是单个数值（四边相同）或者数组形式（按顺序指定上、右、下、左的内边距）。",
        "paraId": 44,
        "tocIndex": 13
    },
    {
        "value": "示例：",
        "paraId": 45,
        "tocIndex": 13
    },
    {
        "value": "// 单个数值\nconst graph1 = new Graph({\n  padding: 20, // 四边均为 20 像素的内边距\n});\n\n// 数组形式\nconst graph2 = new Graph({\n  padding: [20, 40, 20, 40], // 上、右、下、左的内边距\n});\n",
        "paraId": 46,
        "tocIndex": 13
    },
    {
        "value": "number",
        "paraId": 47,
        "tocIndex": 14
    },
    {
        "value": " ",
        "paraId": 47,
        "tocIndex": 14
    },
    {
        "value": "默认值:",
        "paraId": 47,
        "tocIndex": 14
    },
    {
        "value": " ",
        "paraId": 47,
        "tocIndex": 14
    },
    {
        "value": "0",
        "paraId": 47,
        "tocIndex": 14
    },
    {
        "value": "旋转角度（以弧度为单位）",
        "paraId": 48,
        "tocIndex": 14
    },
    {
        "value": "number",
        "paraId": 49,
        "tocIndex": 15
    },
    {
        "value": "视口 x 坐标，设置视口的初始水平位置。",
        "paraId": 50,
        "tocIndex": 15
    },
    {
        "value": "number",
        "paraId": 51,
        "tocIndex": 16
    },
    {
        "value": "视口 y 坐标，设置视口的初始垂直位置。",
        "paraId": 52,
        "tocIndex": 16
    },
    {
        "value": "number",
        "paraId": 53,
        "tocIndex": 17
    },
    {
        "value": " ",
        "paraId": 53,
        "tocIndex": 17
    },
    {
        "value": "默认值:",
        "paraId": 53,
        "tocIndex": 17
    },
    {
        "value": " ",
        "paraId": 53,
        "tocIndex": 17
    },
    {
        "value": "1",
        "paraId": 53,
        "tocIndex": 17
    },
    {
        "value": "设置视口的初始缩放级别，1 表示 100%（原始大小）。",
        "paraId": 54,
        "tocIndex": 17
    },
    {
        "value": "[number, number]",
        "paraId": 55,
        "tocIndex": 18
    },
    {
        "value": " ",
        "paraId": 55,
        "tocIndex": 18
    },
    {
        "value": "默认值:",
        "paraId": 55,
        "tocIndex": 18
    },
    {
        "value": " ",
        "paraId": 55,
        "tocIndex": 18
    },
    {
        "value": "[0.01, 10]",
        "paraId": 55,
        "tocIndex": 18
    },
    {
        "value": "缩放范围，限制用户可以缩放的最小和最大比例。",
        "paraId": 56,
        "tocIndex": 18
    },
    {
        "value": "boolean | ",
        "paraId": 57,
        "tocIndex": 19
    },
    {
        "value": "AnimationEffectTiming",
        "paraId": 58,
        "tocIndex": 19
    },
    {
        "value": "启用或关闭全局动画",
        "paraId": 59,
        "tocIndex": 19
    },
    {
        "value": "为动画配置项时，会启用动画，并将该动画配置作为全局动画的基础配置。",
        "paraId": 60,
        "tocIndex": 19
    },
    {
        "value": "属性",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "描述",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "类型",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "默认值",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "必选",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "delay",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "动画延迟时间",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "number",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "-",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "direction",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "动画方向",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'alternate'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": " | ",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'alternate-reverse'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": " | ",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'normal'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": " | ",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'reverse'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'forward'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "duration",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "动画持续时间",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "number",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "-",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "easing",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "动画缓动函数",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "string",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "-",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "fill",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "动画结束后的填充模式",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'auto'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": " | ",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'backwards'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": " | ",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'both'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": " | ",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'forwards'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": " | ",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'none'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "'none'",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "iterations",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "动画迭代次数",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "number",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "-",
        "paraId": 61,
        "tocIndex": 20
    },
    {
        "value": "示例：",
        "paraId": 62,
        "tocIndex": 20
    },
    {
        "value": "// 简单启用\nconst graph1 = new Graph({\n  animation: true,\n});\n\n// 详细配置\nconst graph2 = new Graph({\n  animation: {\n    duration: 500, // 动画持续时间（毫秒）\n    easing: 'ease-in-out', // 缓动函数\n  },\n});\n",
        "paraId": 63,
        "tocIndex": 20
    },
    {
        "value": "GraphData",
        "paraId": 64,
        "tocIndex": 21
    },
    {
        "value": "数据。",
        "paraId": 65,
        "tocIndex": 21
    },
    {
        "value": "属性",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "描述",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "类型",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "默认值",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "必选",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "nodes",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "节点数据",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "NodeData",
        "paraId": 67,
        "tocIndex": 22
    },
    {
        "value": "[]",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "✓",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "edges",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "边数据",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "EdgeData",
        "paraId": 68,
        "tocIndex": 22
    },
    {
        "value": "[]",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "✓",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "combos",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "组合数据",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "ComboData",
        "paraId": 69,
        "tocIndex": 22
    },
    {
        "value": "[]",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "✓",
        "paraId": 66,
        "tocIndex": 22
    },
    {
        "value": "属性",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "描述",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "类型",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "默认值",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "必选",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "id",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "节点的唯一标识符，用于区分不同的节点",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "string",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "-",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "✓",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "type",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "节点类型，内置节点类型名称或者自定义节点的名称",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "string",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "-",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "data",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "节点数据，用于存储节点的自定义数据，例如节点的名称、描述等。可以在样式映射中通过回调函数获取",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "object",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "-",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "style",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "节点样式，包括位置、大小、颜色等视觉属性",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "object",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "-",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "states",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "节点初始状态，如选中、激活、悬停等",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "string[]",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "-",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "combo",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "所属的组合 ID，用于组织节点的层级关系，如果没有则为 null",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "string | null",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "-",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "children",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "子节点 ID 集合，仅在树图场景下使用",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "string[]",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "-",
        "paraId": 70,
        "tocIndex": 23
    },
    {
        "value": "属性",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "描述",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "类型",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "默认值",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "必选",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "source",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "边起始节点 ID",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "string",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "-",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "✓",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "target",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "边目标节点 ID",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "string",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "-",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "✓",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "id",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "边的唯一标识符",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "string",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "-",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "type",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "边类型，内置边类型名称或者自定义边的名称",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "string",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "-",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "data",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "边数据，用于存储边的自定义数据，可以在样式映射中通过回调函数获取",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "object",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "-",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "style",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "边样式，包括线条颜色、宽度、箭头等视觉属性",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "object",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "-",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "states",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "边初始状态",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "string[]",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "-",
        "paraId": 71,
        "tocIndex": 24
    },
    {
        "value": "属性",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "描述",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "类型",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "默认值",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "必选",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "id",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "组合的唯一标识符",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "string",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "-",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "✓",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "type",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "组合类型，内置组合类型名称或者自定义组合名称",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "string",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "-",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "data",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "组合数据，用于存储组合的自定义数据，可以在样式映射中通过回调函数获取",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "object",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "-",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "style",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "组合样式",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "object",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "-",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "states",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "组合初始状态",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "string[]",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "-",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "combo",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "组合的父组合 ID。如果没有父组合，则为 null",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "string | null",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "-",
        "paraId": 72,
        "tocIndex": 25
    },
    {
        "value": "示例：",
        "paraId": 73,
        "tocIndex": 25
    },
    {
        "value": "const graph = new Graph({\n  data: {\n    nodes: [\n      { id: 'node1', style: { x: 100, y: 100 } },\n      { id: 'node2', style: { x: 200, y: 200 } },\n    ],\n    edges: [{ id: 'edge1', source: 'node1', target: 'node2' }],\n    combos: [{ id: 'combo1', style: { x: 150, y: 150 } }],\n  },\n});\n",
        "paraId": 74,
        "tocIndex": 25
    },
    {
        "value": "阅读 ",
        "paraId": 75,
        "tocIndex": 25
    },
    {
        "value": "数据",
        "paraId": 76,
        "tocIndex": 25
    },
    {
        "value": " 深入了解图数据，包括不限于数据格式、如何操作数据等。",
        "paraId": 75,
        "tocIndex": 25
    },
    {
        "value": "NodeOptions",
        "paraId": 77,
        "tocIndex": 26
    },
    {
        "value": "节点配置项。",
        "paraId": 78,
        "tocIndex": 26
    },
    {
        "value": "属性",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "描述",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "类型",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "默认值",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "必选",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "type",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "节点类型，内置节点类型名称或自定义节点的名称",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "Type",
        "paraId": 80,
        "tocIndex": 27
    },
    {
        "value": "circle",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "style",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "节点样式，包括颜色、大小等",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "Style",
        "paraId": 81,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "state",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "定义节点在不同状态下的样式",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "State",
        "paraId": 82,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "palette",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "定义节点的色板，用于根据不同数据映射颜色",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "Palette",
        "paraId": 83,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "animation",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "定义节点的动画效果",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "Animation",
        "paraId": 84,
        "tocIndex": 27
    },
    {
        "value": "-",
        "paraId": 79,
        "tocIndex": 27
    },
    {
        "value": "详见 ",
        "paraId": 85,
        "tocIndex": 27
    },
    {
        "value": "Node",
        "paraId": 86,
        "tocIndex": 27
    },
    {
        "value": "示例：",
        "paraId": 87,
        "tocIndex": 27
    },
    {
        "value": "const graph = new Graph({\n  node: {\n    type: 'circle', // 节点类型\n    style: {\n      fill: '#e6f7ff', // 填充色\n      stroke: '#91d5ff', // 边框色\n      lineWidth: 1, // 边框宽度\n      r: 20, // 半径\n      labelText: (d) => d.id, // 标签文本\n    },\n    // 节点状态样式\n    state: {\n      hover: {\n        lineWidth: 2,\n        stroke: '#69c0ff',\n      },\n      selected: {\n        fill: '#bae7ff',\n        stroke: '#1890ff',\n        lineWidth: 2,\n      },\n    },\n  },\n});\n",
        "paraId": 88,
        "tocIndex": 27
    },
    {
        "value": "EdgeOptions",
        "paraId": 89,
        "tocIndex": 28
    },
    {
        "value": "边配置项",
        "paraId": 90,
        "tocIndex": 28
    },
    {
        "value": "属性",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "描述",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "类型",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "默认值",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "必选",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "type",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "边类型，内置边类型名称或自定义边的名称",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "Type",
        "paraId": 92,
        "tocIndex": 29
    },
    {
        "value": "line",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "style",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "边样式，包括颜色、大小等",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "Style",
        "paraId": 93,
        "tocIndex": 29
    },
    {
        "value": "-",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "state",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "定义边在不同状态下的样式",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "State",
        "paraId": 94,
        "tocIndex": 29
    },
    {
        "value": "-",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "palette",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "定义边的色板，用于根据不同数据映射颜色",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "Palette",
        "paraId": 95,
        "tocIndex": 29
    },
    {
        "value": "-",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "animation",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "定义边的动画效果",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "Animation",
        "paraId": 96,
        "tocIndex": 29
    },
    {
        "value": "-",
        "paraId": 91,
        "tocIndex": 29
    },
    {
        "value": "详见 ",
        "paraId": 97,
        "tocIndex": 29
    },
    {
        "value": "Edge",
        "paraId": 98,
        "tocIndex": 29
    },
    {
        "value": "示例：",
        "paraId": 99,
        "tocIndex": 29
    },
    {
        "value": "const graph = new Graph({\n  edge: {\n    type: 'polyline', // 边类型\n    style: {\n      stroke: '#91d5ff', // 边的颜色\n      lineWidth: 2, // 边的宽度\n      endArrow: true, // 是否有箭头\n    },\n    // 边的状态样式\n    state: {\n      selected: {\n        stroke: '#1890ff',\n        lineWidth: 3,\n      },\n    },\n  },\n});\n",
        "paraId": 100,
        "tocIndex": 29
    },
    {
        "value": "ComboOptions",
        "paraId": 101,
        "tocIndex": 30
    },
    {
        "value": "组合配置项",
        "paraId": 102,
        "tocIndex": 30
    },
    {
        "value": "属性",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "描述",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "类型",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "默认值",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "必选",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "type",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "组合类型，内置组合类型名称或自定义组合的名称",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "Type",
        "paraId": 104,
        "tocIndex": 30
    },
    {
        "value": "circle",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "style",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "组合样式，包括颜色、大小等",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "Style",
        "paraId": 105,
        "tocIndex": 30
    },
    {
        "value": "-",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "state",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "定义组合在不同状态下的样式",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "State",
        "paraId": 106,
        "tocIndex": 30
    },
    {
        "value": "-",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "palette",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "定义组合的色板，用于根据不同数据映射颜色",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "Palette",
        "paraId": 107,
        "tocIndex": 30
    },
    {
        "value": "-",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "animation",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "定义组合的动画效果",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "Animation",
        "paraId": 108,
        "tocIndex": 30
    },
    {
        "value": "-",
        "paraId": 103,
        "tocIndex": 30
    },
    {
        "value": "详见 ",
        "paraId": 109,
        "tocIndex": 30
    },
    {
        "value": "Combo",
        "paraId": 110,
        "tocIndex": 30
    },
    {
        "value": "示例：",
        "paraId": 111,
        "tocIndex": 30
    },
    {
        "value": "const graph = new Graph({\n  combo: {\n    type: 'circle', // 组合类型\n    style: {\n      fill: '#f0f0f0', // 背景色\n      stroke: '#d9d9d9', // 边框色\n      lineWidth: 1, // 边框宽度\n    },\n    // 组合状态样式\n    state: {\n      selected: {\n        stroke: '#1890ff',\n        lineWidth: 2,\n      },\n    },\n  },\n});\n",
        "paraId": 112,
        "tocIndex": 30
    },
    {
        "value": "CustomLayoutOptions | CustomLayoutOptions[]",
        "paraId": 113,
        "tocIndex": 31
    },
    {
        "value": "布局配置项，可以是对象（普通布局）或数组（流水线布局）。",
        "paraId": 114,
        "tocIndex": 31
    },
    {
        "value": "示例",
        "paraId": 115,
        "tocIndex": 31
    },
    {
        "value": ":",
        "paraId": 115,
        "tocIndex": 31
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  layout: {\n    type: 'force', // 力导向布局\n    preventOverlap: true, // 防止节点重叠\n    nodeStrength: -50, // 节点之间的斥力\n    edgeStrength: 0.5, // 边的弹性系数\n    iterations: 200, // 迭代次数\n    animation: true, // 启用布局动画\n  },\n});\n",
        "paraId": 116,
        "tocIndex": 31
    },
    {
        "value": "false | 'light' | 'dark' | string",
        "paraId": 117,
        "tocIndex": 32
    },
    {
        "value": "设置图表的主题，可以是内置的 ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "'light'",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "、",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "'dark'",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " 主题，也可以是自定义主题的名称。设为 ",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "false",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": " 则不使用任何主题。",
        "paraId": 118,
        "tocIndex": 32
    },
    {
        "value": "(string | ",
        "paraId": 119,
        "tocIndex": 33
    },
    {
        "value": "CustomExtensionOptions",
        "paraId": 120,
        "tocIndex": 33
    },
    {
        "value": " | ((this:Graph) =>CustomExtensionOptions))[]",
        "paraId": 119,
        "tocIndex": 33
    },
    {
        "value": "配置图表的交互行为，可以是字符串（使用默认配置）、对象（自定义配置）或函数（动态配置、函数内可访问图实例）。",
        "paraId": 121,
        "tocIndex": 33
    },
    {
        "value": "示例：",
        "paraId": 122,
        "tocIndex": 33
    },
    {
        "value": "const graph = new Graph({\n  behaviors: [\n    'drag-canvas', // 使用默认配置启用画布拖拽\n    'zoom-canvas', // 使用默认配置启用画布缩放\n    {\n      type: 'drag-element', // 自定义配置拖拽元素\n      key: 'drag-node-only',\n      enable: (event) => event.targetType === 'node', // 只允许拖拽节点\n    },\n    function () {\n      console.log(this); // 输出 graph 实例\n      return {\n        type: 'hover-activate',\n      };\n    },\n  ],\n});\n",
        "paraId": 123,
        "tocIndex": 33
    },
    {
        "value": "查看 ",
        "paraId": 124,
        "tocIndex": 33
    },
    {
        "value": "交互总览",
        "paraId": 125,
        "tocIndex": 33
    },
    {
        "value": " 深入了解交互原理",
        "paraId": 124,
        "tocIndex": 33
    },
    {
        "value": "浏览 ",
        "paraId": 124,
        "tocIndex": 33
    },
    {
        "value": "内置交互",
        "paraId": 126,
        "tocIndex": 33
    },
    {
        "value": " 获取所有内置交互列表及其配置选项",
        "paraId": 124,
        "tocIndex": 33
    },
    {
        "value": "(string | ",
        "paraId": 127,
        "tocIndex": 34
    },
    {
        "value": "CustomExtensionOptions",
        "paraId": 128,
        "tocIndex": 34
    },
    {
        "value": " | ((this:Graph) =>CustomExtensionOptions))[]",
        "paraId": 127,
        "tocIndex": 34
    },
    {
        "value": "设置图表的插件，可以是字符串（使用默认配置）、对象（自定义配置）或函数（动态配置、函数内可访问图实例）。",
        "paraId": 129,
        "tocIndex": 34
    },
    {
        "value": "示例：",
        "paraId": 130,
        "tocIndex": 34
    },
    {
        "value": "const graph = new Graph({\n  container: 'container',\n  plugins: [\n    'minimap', // 启用小地图，使用默认配置\n    {\n      type: 'grid', // 启用网格背景\n      key: 'grid-plugin',\n      line: {\n        stroke: '#d9d9d9',\n        lineWidth: 1,\n      },\n    },\n    {\n      type: 'toolbar', // 启用工具栏\n      key: 'graph-toolbar',\n      position: 'top-right', // 位置\n    },\n  ],\n});\n",
        "paraId": 131,
        "tocIndex": 34
    },
    {
        "value": "查看 ",
        "paraId": 132,
        "tocIndex": 34
    },
    {
        "value": "插件总览",
        "paraId": 133,
        "tocIndex": 34
    },
    {
        "value": " 深入了解插件原理",
        "paraId": 132,
        "tocIndex": 34
    },
    {
        "value": "浏览 ",
        "paraId": 132,
        "tocIndex": 34
    },
    {
        "value": "内置插件",
        "paraId": 134,
        "tocIndex": 34
    },
    {
        "value": " 获取所有内置插件列表及其配置项",
        "paraId": 132,
        "tocIndex": 34
    },
    {
        "value": "(string | ",
        "paraId": 135,
        "tocIndex": 35
    },
    {
        "value": "CustomExtensionOptions",
        "paraId": 136,
        "tocIndex": 35
    },
    {
        "value": " | ((this:Graph) =>CustomExtensionOptions))[]",
        "paraId": 135,
        "tocIndex": 35
    },
    {
        "value": "配置数据处理，用于在渲染前对数据进行处理，不会影响原始数据。可以是字符串（使用默认配置）、对象（自定义配置）或函数（动态配置、函数内可访问图实例）。",
        "paraId": 137,
        "tocIndex": 35
    },
    {
        "value": "示例：",
        "paraId": 138,
        "tocIndex": 35
    },
    {
        "value": "const graph = new Graph({\n  transforms: [\n    'process-parallel-edges', // 处理平行边，使用默认配置\n    {\n      type: 'map-node-size', // 根据节点数据映射节点大小\n      field: 'value', // 使用 value 字段的值\n      max: 50, // 最大半径\n      min: 20, // 最小半径\n    },\n  ],\n});\n",
        "paraId": 139,
        "tocIndex": 35
    },
    {
        "value": "查看 ",
        "paraId": 140,
        "tocIndex": 35
    },
    {
        "value": "数据处理总览",
        "paraId": 141,
        "tocIndex": 35
    },
    {
        "value": " 深入了解数据处理原理",
        "paraId": 140,
        "tocIndex": 35
    },
    {
        "value": "浏览 ",
        "paraId": 140,
        "tocIndex": 35
    },
    {
        "value": "内置数据处理",
        "paraId": 142,
        "tocIndex": 35
    },
    {
        "value": " 获取所有内置数据处理列表及其配置项",
        "paraId": 140,
        "tocIndex": 35
    },
    {
        "value": "interface CustomExtensionOption extends Record<string, any> {\n  /** 拓展类型 */\n  type: string;\n  /** 拓展 key，即唯一标识 */\n  key?: string;\n}\n",
        "paraId": 143,
        "tocIndex": 36
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
//# sourceMappingURL=docs_manual_graph_option_zh_md_q_hK4X-async.js.map