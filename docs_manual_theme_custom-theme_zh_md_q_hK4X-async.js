((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/theme/custom-theme.zh.md?type=text'],
{ "docs/manual/theme/custom-theme.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/theme/custom-theme.zh.md?watch=parent");
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
        "value": "除了使用内置主题外，G6 还支持创建自定义主题来满足特定的视觉需求。本文将介绍如何创建和使用自定义主题。",
        "paraId": 0
    },
    {
        "value": "一个自定义主题需要遵循主题的基本结构，包含画布背景色和元素样式配置：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "const customTheme = {\n  // 1. 画布背景色\n  background: '#f0f0f0',\n\n  // 2. 节点配置\n  node: {\n    // 调色板配置\n    palette: {\n      type: 'group',\n      color: ['#1783FF', '#00C9C9' /* 自定义颜色... */],\n    },\n    // 基础样式\n    style: {\n      fill: '#fff',\n      stroke: '#d9d9d9',\n      lineWidth: 1,\n      // ... 其他节点样式\n    },\n    // 状态样式\n    state: {\n      selected: {\n        fill: '#e8f3ff',\n        stroke: '#1783FF',\n      },\n      // ... 其他状态样式\n    },\n  },\n\n  // 3. 边配置\n  edge: {\n    style: {\n      stroke: '#d9d9d9',\n      lineWidth: 1,\n      // ... 其他边样式\n    },\n    state: {\n      // ... 状态样式\n    },\n  },\n\n  // 4. Combo 配置\n  combo: {\n    style: {\n      fill: '#f7f7f7',\n      stroke: '#d9d9d9',\n      // ... 其他 Combo 样式\n    },\n    state: {\n      // ... 状态样式\n    },\n  },\n};\n",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "在创建自定义主题时，需要注意以下限制：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "仅支持静态值",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "// ❌ 错误示例：不支持回调函数\nconst theme = {\n  node: {\n    style: {\n      fill: (d) => d.style.color,\n    },\n  },\n};\n",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "不支持配置元素类型",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "// ❌ 错误示例：不支持在主题中配置元素类型\nconst theme = {\n  node: {\n    type: 'rect',\n    style: {\n      fill: '#fff',\n    },\n  },\n};\n",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "状态样式需要对应默认样式",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "// ✅ 正确示例：状态样式的属性在默认样式中都有定义\nconst theme = {\n  node: {\n    style: {\n      fill: '#fff',\n      stroke: '#000',\n    },\n    state: {\n      selected: {\n        fill: '#e8f3ff',\n        stroke: '#1783FF',\n      },\n    },\n  },\n};\n",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "先注册主题，然后通过名称引用：",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "// 1. 注册主题\nimport { register, ExtensionCategory } from '@antv/g6';\nregister(ExtensionCategory.THEME, 'custom-theme', customTheme);\n\n// 2. 使用主题\nconst graph = new Graph({\n  theme: 'custom-theme',\n  // ... 其他配置\n});\n",
        "paraId": 11,
        "tocIndex": 2
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
//# sourceMappingURL=docs_manual_theme_custom-theme_zh_md_q_hK4X-async.js.map