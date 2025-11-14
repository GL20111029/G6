((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Fullscreen.zh.md?type=text'],
{ "docs/manual/plugin/Fullscreen.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Fullscreen.zh.md?watch=parent");
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
        "value": "全屏展示插件允许用户将图可视化内容扩展到整个屏幕，提供更广阔的视图和更好的沉浸式体验。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "全屏展示插件主要适用于以下场景：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "提供更广阔的视图，便于查看复杂图数据",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "增强沉浸式体验，专注于图可视化内容",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "在演示或报告中展示图数据",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "以下是一个简单的 Fullscreen 插件初始化示例：",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      autoFit: true,\n      trigger: {\n        request: 'F', // 使用快捷键 F 进入全屏\n        exit: 'Esc', // 使用快捷键 Esc 退出全屏\n      },\n      onEnter: () => {\n        console.log('进入全屏模式');\n      },\n      onExit: () => {\n        console.log('退出全屏模式');\n      },\n    },\n  ],\n});\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "插件类型",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "fullscreen",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "key",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "插件的唯一标识，可用于获取插件实例或更新插件选项",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "autoFit",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "是否自适应画布尺寸，全屏后画布尺寸会自动适应屏幕尺寸",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "true",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "trigger",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "触发全屏的方式，",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "示例",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "{ request?: string; exit?: string; }",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "onEnter",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "进入全屏后的回调",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "onExit",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "退出全屏后的回调",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "() => void",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "trigger 属性用于控制触发全屏的方式。它支持两种配置方式：",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "使用键盘快捷键来触发全屏和退出全屏。",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      trigger: {\n        request: 'F', // 使用快捷键 F 进入全屏\n        exit: 'Esc', // 使用快捷键 Esc 退出全屏\n      },\n    },\n  ],\n});\n",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "通过调用 request 和 exit 方法来控制全屏。",
        "paraId": 10,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      key: 'my-fullscreen',\n    },\n  ],\n});\n\n// 进入全屏\ngraph.getPluginInstance('my-fullscreen').request();\n\n// 退出全屏\ngraph.getPluginInstance('my-fullscreen').exit();\n",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "是否自适应画布尺寸，全屏后画布尺寸会自动适应屏幕尺寸。",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": "设置为 true 时，画布会自动调整大小以适应整个屏幕。",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "设置为 false 时，画布大小保持不变。",
        "paraId": 13,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      autoFit: true,\n    },\n  ],\n});\n",
        "paraId": 14,
        "tocIndex": 7
    },
    {
        "value": "这个方法可以让你通过代码进入全屏模式。调用插件实例上的这个方法，就能把图形内容扩展到整个屏幕。",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      key: 'my-fullscreen',\n    },\n  ],\n});\n\n// 进入全屏\ngraph.getPluginInstance('my-fullscreen').request();\n",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "这个方法可以让你通过代码退出全屏模式。调用插件实例上的这个方法，就能把图形内容恢复到原来的大小。",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fullscreen',\n      key: 'my-fullscreen',\n    },\n  ],\n});\n\n// 退出全屏\ngraph.getPluginInstance('my-fullscreen').exit();\n",
        "paraId": 18,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  data: { nodes: Array.from({ length: 20 }).map((_, i) => ({ id: `node${i}` })) },\n  autoFit: 'center',\n  background: '#fff',\n  plugins: [\n    {\n      type: 'fullscreen',\n      key: 'fullscreen',\n    },\n    function () {\n      const graph = this;\n      return {\n        type: 'toolbar',\n        key: 'toolbar',\n        position: 'top-left',\n        onClick: (item) => {\n          const fullscreenPlugin = graph.getPluginInstance('fullscreen');\n          if (item === 'request-fullscreen') {\n            fullscreenPlugin.request();\n          }\n          if (item === 'exit-fullscreen') {\n            fullscreenPlugin.exit();\n          }\n        },\n        getItems: () => {\n          return [\n            { id: 'request-fullscreen', value: 'request-fullscreen' },\n            { id: 'exit-fullscreen', value: 'exit-fullscreen' },\n          ];\n        },\n      };\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 19,
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
//# sourceMappingURL=docs_manual_plugin_Fullscreen_zh_md_q_hK4X-async.js.map