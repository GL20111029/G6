((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Background.zh.md?type=text'],
{ "docs/manual/plugin/Background.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Background.zh.md?watch=parent");
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
        "value": "支持为图画布设置一个背景图片，让画布更有层次感、叙事性。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "这一插件主要用于：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "为图表设置统一的品牌背景色或图片",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "通过背景区分不同的功能区域",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "增强图表的视觉层次感和美观度",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "以下是一个简单的 Background 插件初始化示例：",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'background',\n      key: 'my-background', // 为插件指定标识符，方便动态更新\n      backgroundColor: '#f0f2f5', // 设置背景色\n      backgroundImage: 'url(https://example.com/bg.png)', // 设置背景图\n    },\n  ],\n});\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Background 插件的配置项继承了所有 CSS 样式属性（",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "CSSStyleDeclaration",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "），因此你可以使用任何合法的 CSS 属性来配置背景。以下是一些常用配置：",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "插件类型",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "background",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "key",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "插件唯一标识符，用于后续更新",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "width",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "背景宽度",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "100%",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "height",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "背景高度",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "100%",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "backgroundColor",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "背景颜色",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "backgroundImage",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "背景图片",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "backgroundSize",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "背景尺寸",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "cover",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "backgroundPosition",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "背景位置",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "backgroundRepeat",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "背景重复方式",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "opacity",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "背景透明度",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "transition",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "过渡动画",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "background 0.5s",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "zIndex",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "层叠顺序",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-1",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "注意：",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "zIndex",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " 默认为 -1，这是为了避免背景覆盖其他插件的 DOM 元素，如网格线。",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 200,\n  plugins: [\n    {\n      type: 'background',\n      width: '300px',\n      height: '200px',\n      backgroundColor: '#f0f2f5',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 200,\n  plugins: [\n    {\n      type: 'background',\n      width: '300px',\n      height: '200px',\n      backgroundImage:\n        'url(https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*0Qq0ToQm1rEAAAAAAAAAAAAADmJ7AQ/original)',\n      backgroundRepeat: 'no-repeat',\n      backgroundSize: 'cover',\n      opacity: 0.2,\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 9,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 200,\n  plugins: [\n    {\n      type: 'background',\n      width: '300px',\n      height: '200px',\n      background: 'linear-gradient(45deg, #1890ff, #722ed1)',\n      opacity: '0.8',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "// 初始化时配置\nconst graph = new Graph({\n  // 其他配置...\n  plugins: [\n    {\n      type: 'background',\n      key: 'my-background',\n      backgroundColor: '#f0f2f5',\n    },\n  ],\n});\n\n// 后续更新\ngraph.updatePlugin({\n  key: 'my-background',\n  backgroundColor: '#e6f7ff',\n  transition: 'background 1s ease',\n});\n",
        "paraId": 11,
        "tocIndex": 8
    },
    {
        "value": "默认情况下，背景插件的 ",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "zIndex",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": " 设为 ",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "-1",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "，以确保它位于其他元素之下。如果仍有冲突，可以调整 ",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "zIndex",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": " 值：",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'background',\n      zIndex: '-2', // 降低 z-index 避免冲突\n    },\n  ],\n});\n",
        "paraId": 13,
        "tocIndex": 10
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
//# sourceMappingURL=docs_manual_plugin_Background_zh_md_q_hK4X-async.js.map