((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/theme/overview.zh.md?type=text'],
{ "docs/manual/theme/overview.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/theme/overview.zh.md?watch=parent");
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
        "value": "G6 中的主题是 Graph Options 的子集，它包含了关于画布和元素样式的配置。多主题可以帮助你快速地切换不同的图样式。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "一个主题由以下四个部分组成：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "画布背景色 (background)",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "控制整个画布的背景颜色",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "节点配置 (node)",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "基础样式：填充色、描边、标签等静态视觉属性",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "调色板",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：用于节点分组的颜色配置",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "状态样式：不同状态下的样式配置（选中、激活、禁用等）",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "动画配置：节点的动画效果配置",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "边配置 (edge)",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "基础样式：线条样式、箭头、标签等静态视觉属性",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "调色板",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "：用于边分组的颜色配置",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "状态样式：不同状态下的样式配置",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "动画配置：边的动画效果配置",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "Combo 配置 (combo)",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": "基础样式：填充、描边、折叠按钮等静态视觉属性",
        "paraId": 11,
        "tocIndex": 1
    },
    {
        "value": "状态样式：不同状态下的样式配置",
        "paraId": 11,
        "tocIndex": 1
    },
    {
        "value": "动画配置：Combo 的动画效果配置",
        "paraId": 11,
        "tocIndex": 1
    },
    {
        "value": "注意：主题中的样式配置仅支持静态值，不支持回调函数形式的动态配置。如需动态样式，请使用图的配置项。",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "G6 默认提供两种内置主题：",
        "paraId": 13,
        "tocIndex": 2
    },
    {
        "value": "查看亮色主题完整配置项",
        "paraId": 14
    },
    {
        "value": "const lightTheme = {\n  background: '#ffffff',\n  node: {\n    palette: {\n      type: 'group',\n      color: [\n        '#1783FF',\n        '#00C9C9',\n        '#F08F56',\n        '#D580FF',\n        '#7863FF',\n        '#DB9D0D',\n        '#60C42D',\n        '#FF80CA',\n        '#2491B3',\n        '#17C76F',\n      ],\n    },\n    style: {\n      donutOpacity: 1,\n      badgeBackgroundOpacity: 1,\n      badgeFill: '#fff',\n      badgeFontSize: 8,\n      badgePadding: [0, 4],\n      badgePalette: ['#7E92B5', '#F4664A', '#FFBE3A'],\n      fill: '#1783ff',\n      fillOpacity: 1,\n      halo: false,\n      iconFill: '#fff',\n      iconOpacity: 1,\n      labelBackground: false,\n      labelBackgroundFill: '#ffffff',\n      labelBackgroundLineWidth: 0,\n      labelBackgroundOpacity: 0.75,\n      labelFill: '#000000',\n      labelFillOpacity: 0.85,\n      labelLineHeight: 16,\n      labelPadding: [0, 2],\n      labelFontSize: 12,\n      labelFontWeight: 400,\n      labelOpacity: 1,\n      labelOffsetY: 2,\n      lineWidth: 0,\n      portFill: '#1783ff',\n      portLineWidth: 1,\n      portStroke: '#000000',\n      portStrokeOpacity: 0.65,\n      size: 32,\n      stroke: '#000000',\n      strokeOpacity: 1,\n      zIndex: 2,\n    },\n    state: {\n      selected: {\n        halo: true,\n        haloLineWidth: 24,\n        haloStrokeOpacity: 0.25,\n        labelFontSize: 12,\n        labelFontWeight: 'bold',\n        lineWidth: 4,\n        stroke: '#000000',\n      },\n      active: {\n        halo: true,\n        haloLineWidth: 12,\n        haloStrokeOpacity: 0.15,\n      },\n      highlight: {\n        labelFontWeight: 'bold',\n        lineWidth: 4,\n        stroke: '#000000',\n        strokeOpacity: 0.85,\n      },\n      inactive: {\n        badgeBackgroundOpacity: 0.25,\n        donutOpacity: 0.25,\n        fillOpacity: 0.25,\n        iconOpacity: 0.85,\n        labelFill: '#000000',\n        labelFillOpacity: 0.25,\n        strokeOpacity: 0.25,\n      },\n      disabled: {\n        badgeBackgroundOpacity: 0.25,\n        donutOpacity: 0.06,\n        fill: '#1B324F',\n        fillOpacity: 0.06,\n        iconFill: '#1B324F',\n        iconOpacity: 0.25,\n        labelFill: '#000000',\n        labelFillOpacity: 0.25,\n        strokeOpacity: 0.06,\n      },\n    },\n    animation: {\n      enter: 'fade',\n      exit: 'fade',\n      show: 'fade',\n      hide: 'fade',\n      expand: 'node-expand',\n      collapse: 'node-collapse',\n      update: [{ fields: ['x', 'y', 'fill', 'stroke'] }],\n      translate: [{ fields: ['x', 'y'] }],\n    },\n  },\n  edge: {\n    palette: {\n      type: 'group',\n      color: [\n        '#99ADD1',\n        '#1783FF',\n        '#00C9C9',\n        '#F08F56',\n        '#D580FF',\n        '#7863FF',\n        '#DB9D0D',\n        '#60C42D',\n        '#FF80CA',\n        '#2491B3',\n        '#17C76F',\n      ],\n    },\n    style: {\n      badgeBackgroundFill: '#99ADD1',\n      badgeFill: '#fff',\n      badgeFontSize: 8,\n      badgeOffsetX: 10,\n      fillOpacity: 1,\n      halo: false,\n      haloLineWidth: 12,\n      haloStrokeOpacity: 1,\n      increasedLineWidthForHitTesting: 2,\n      labelBackground: false,\n      labelBackgroundFill: '#ffffff',\n      labelBackgroundLineWidth: 0,\n      labelBackgroundOpacity: 0.75,\n      labelBackgroundPadding: [4, 4, 4, 4],\n      labelFill: '#000000',\n      labelFontSize: 12,\n      labelFontWeight: 400,\n      labelOpacity: 1,\n      labelPlacement: 'center',\n      labelTextBaseline: 'middle',\n      lineWidth: 1,\n      stroke: '#99ADD1',\n      strokeOpacity: 1,\n      zIndex: 1,\n    },\n    state: {\n      selected: {\n        halo: true,\n        haloStrokeOpacity: 0.25,\n        labelFontSize: 14,\n        labelFontWeight: 'bold',\n        lineWidth: 3,\n      },\n      active: {\n        halo: true,\n        haloStrokeOpacity: 0.15,\n      },\n      highlight: {\n        labelFontWeight: 'bold',\n        lineWidth: 3,\n      },\n      inactive: {\n        stroke: '#1B324F',\n        fillOpacity: 0.08,\n        labelOpacity: 0.25,\n        strokeOpacity: 0.08,\n        badgeBackgroundOpacity: 0.25,\n      },\n      disabled: {\n        stroke: '#d9d9d9',\n        fillOpacity: 0.45,\n        strokeOpacity: 0.45,\n        labelOpacity: 0.25,\n        badgeBackgroundOpacity: 0.45,\n      },\n    },\n    animation: {\n      enter: 'fade',\n      exit: 'fade',\n      expand: 'path-in',\n      collapse: 'path-out',\n      show: 'fade',\n      hide: 'fade',\n      update: [{ fields: ['sourceNode', 'targetNode'] }, { fields: ['stroke'], shape: 'key' }],\n      translate: [{ fields: ['sourceNode', 'targetNode'] }],\n    },\n  },\n  combo: {\n    style: {\n      collapsedMarkerFill: '#ffffff',\n      collapsedMarkerFontSize: 12,\n      collapsedMarkerFillOpacity: 1,\n      collapsedSize: 32,\n      collapsedFillOpacity: 1,\n      fill: '#99ADD1',\n      halo: false,\n      haloLineWidth: 12,\n      haloStroke: '#99ADD1',\n      haloStrokeOpacity: 0.25,\n      labelBackground: false,\n      labelBackgroundFill: '#ffffff',\n      labelBackgroundLineWidth: 0,\n      labelBackgroundOpacity: 0.75,\n      labelBackgroundPadding: [2, 4, 2, 4],\n      labelFill: '#000000',\n      labelFontSize: 12,\n      labelFontWeight: 400,\n      labelOpacity: 1,\n      lineDash: 0,\n      lineWidth: 1,\n      fillOpacity: 0.04,\n      strokeOpacity: 1,\n      padding: 10,\n      stroke: '#99ADD1',\n    },\n    state: {\n      selected: {\n        halo: true,\n        labelFontSize: 14,\n        labelFontWeight: 700,\n        lineWidth: 4,\n      },\n      active: {\n        halo: true,\n      },\n      highlight: {\n        labelFontWeight: 700,\n        lineWidth: 4,\n      },\n      inactive: {\n        fillOpacity: 0.65,\n        labelOpacity: 0.25,\n        strokeOpacity: 0.65,\n      },\n      disabled: {\n        fill: '#d9d9d9',\n        fillOpacity: 0.25,\n        labelOpacity: 0.25,\n        stroke: '#d9d9d9',\n        strokeOpacity: 0.25,\n      },\n    },\n    animation: {\n      enter: 'fade',\n      exit: 'fade',\n      show: 'fade',\n      hide: 'fade',\n      expand: 'combo-expand',\n      collapse: 'combo-collapse',\n      update: [{ fields: ['x', 'y'] }, { fields: ['fill', 'stroke', 'lineWidth'], shape: 'key' }],\n      translate: [{ fields: ['x', 'y'] }],\n    },\n  },\n};\n",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "查看暗色主题完整配置项",
        "paraId": 14
    },
    {
        "value": "const darkTheme = {\n  background: '#000000',\n  node: {\n    palette: {\n      type: 'group',\n      color: [\n        '#1783FF',\n        '#00C9C9',\n        '#F08F56',\n        '#D580FF',\n        '#7863FF',\n        '#DB9D0D',\n        '#60C42D',\n        '#FF80CA',\n        '#2491B3',\n        '#17C76F',\n      ],\n    },\n    style: {\n      donutOpacity: 1,\n      badgeBackgroundOpacity: 1,\n      badgeFill: '#fff',\n      badgeFontSize: 8,\n      badgePadding: [0, 4],\n      badgePalette: ['#7E92B5', '#F4664A', '#FFBE3A'],\n      fill: '#1783ff',\n      fillOpacity: 1,\n      halo: false,\n      iconFill: '#fff',\n      iconOpacity: 1,\n      labelBackground: false,\n      labelBackgroundFill: '#000000',\n      labelBackgroundLineWidth: 0,\n      labelBackgroundOpacity: 0.75,\n      labelFill: '#ffffff',\n      labelFillOpacity: 0.85,\n      labelLineHeight: 16,\n      labelPadding: [0, 2],\n      labelFontSize: 12,\n      labelFontWeight: 400,\n      labelOpacity: 1,\n      labelOffsetY: 2,\n      lineWidth: 0,\n      portFill: '#1783ff',\n      portLineWidth: 1,\n      portStroke: '#d0e4ff',\n      portStrokeOpacity: 0.65,\n      size: 32,\n      stroke: '#d0e4ff',\n      strokeOpacity: 1,\n      zIndex: 2,\n    },\n    state: {\n      selected: {\n        halo: true,\n        haloLineWidth: 24,\n        haloStrokeOpacity: 0.45,\n        labelFontSize: 12,\n        labelFontWeight: 'bold',\n        lineWidth: 4,\n        stroke: '#d0e4ff',\n      },\n      active: {\n        halo: true,\n        haloLineWidth: 12,\n        haloStrokeOpacity: 0.25,\n      },\n      highlight: {\n        labelFontWeight: 'bold',\n        lineWidth: 4,\n        stroke: '#d0e4ff',\n        strokeOpacity: 0.85,\n      },\n      inactive: {\n        badgeBackgroundOpacity: 0.45,\n        donutOpacity: 0.45,\n        fillOpacity: 0.45,\n        iconOpacity: 0.45,\n        labelFill: '#ffffff',\n        labelFillOpacity: 0.45,\n        strokeOpacity: 0.45,\n      },\n      disabled: {\n        badgeBackgroundOpacity: 0.25,\n        donutOpacity: 0.25,\n        fill: '#D0E4FF',\n        fillOpacity: 0.25,\n        iconFill: '#D0E4FF',\n        iconOpacity: 0.25,\n        labelFill: '#ffffff',\n        labelFillOpacity: 0.25,\n        strokeOpacity: 0.25,\n      },\n    },\n    animation: {\n      enter: 'fade',\n      exit: 'fade',\n      show: 'fade',\n      hide: 'fade',\n      expand: 'node-expand',\n      collapse: 'node-collapse',\n      update: [{ fields: ['x', 'y', 'fill', 'stroke'] }],\n      translate: [{ fields: ['x', 'y'] }],\n    },\n  },\n  edge: {\n    palette: {\n      type: 'group',\n      color: [\n        '#637088',\n        '#0F55A6',\n        '#008383',\n        '#9C5D38',\n        '#8B53A6',\n        '#4E40A6',\n        '#8F6608',\n        '#3E801D',\n        '#A65383',\n        '#175E75',\n        '#0F8248',\n      ],\n    },\n    style: {\n      badgeBackgroundFill: '#637088',\n      badgeFill: '#fff',\n      badgeFontSize: 8,\n      badgeOffsetX: 10,\n      fillOpacity: 1,\n      halo: false,\n      haloLineWidth: 12,\n      haloStrokeOpacity: 1,\n      increasedLineWidthForHitTesting: 2,\n      labelBackground: false,\n      labelBackgroundFill: '#000000',\n      labelBackgroundLineWidth: 0,\n      labelBackgroundOpacity: 0.75,\n      labelBackgroundPadding: [4, 4, 4, 4],\n      labelFill: '#ffffff',\n      labelFontSize: 12,\n      labelFontWeight: 400,\n      labelOpacity: 1,\n      labelPlacement: 'center',\n      labelTextBaseline: 'middle',\n      lineWidth: 1,\n      stroke: '#637088',\n      strokeOpacity: 1,\n      zIndex: 1,\n    },\n    state: {\n      selected: {\n        halo: true,\n        haloStrokeOpacity: 0.25,\n        labelFontSize: 14,\n        labelFontWeight: 'bold',\n        lineWidth: 3,\n      },\n      active: {\n        halo: true,\n        haloStrokeOpacity: 0.15,\n      },\n      highlight: {\n        labelFontWeight: 'bold',\n        lineWidth: 3,\n      },\n      inactive: {\n        stroke: '#D0E4FF',\n        fillOpacity: 0.08,\n        labelOpacity: 0.25,\n        strokeOpacity: 0.08,\n        badgeBackgroundOpacity: 0.25,\n      },\n      disabled: {\n        stroke: '#637088',\n        fillOpacity: 0.45,\n        strokeOpacity: 0.45,\n        labelOpacity: 0.25,\n        badgeBackgroundOpacity: 0.45,\n      },\n    },\n    animation: {\n      enter: 'fade',\n      exit: 'fade',\n      expand: 'path-in',\n      collapse: 'path-out',\n      show: 'fade',\n      hide: 'fade',\n      update: [{ fields: ['sourceNode', 'targetNode'] }, { fields: ['stroke'], shape: 'key' }],\n      translate: [{ fields: ['sourceNode', 'targetNode'] }],\n    },\n  },\n  combo: {\n    style: {\n      collapsedMarkerFill: '#000000',\n      collapsedMarkerFontSize: 12,\n      collapsedMarkerFillOpacity: 1,\n      collapsedSize: 32,\n      collapsedFillOpacity: 1,\n      fill: '#fdfdfd',\n      halo: false,\n      haloLineWidth: 12,\n      haloStroke: '#99add1',\n      haloStrokeOpacity: 0.25,\n      labelBackground: false,\n      labelBackgroundFill: '#000000',\n      labelBackgroundLineWidth: 0,\n      labelBackgroundOpacity: 0.75,\n      labelBackgroundPadding: [2, 4, 2, 4],\n      labelFill: '#ffffff',\n      labelFontSize: 12,\n      labelFontWeight: 400,\n      labelOpacity: 1,\n      lineDash: 0,\n      lineWidth: 1,\n      fillOpacity: 0.04,\n      strokeOpacity: 1,\n      padding: 10,\n      stroke: '#99add1',\n    },\n    state: {\n      selected: {\n        halo: true,\n        labelFontSize: 14,\n        labelFontWeight: 700,\n        lineWidth: 4,\n      },\n      active: {\n        halo: true,\n      },\n      highlight: {\n        labelFontWeight: 700,\n        lineWidth: 4,\n      },\n      inactive: {\n        fillOpacity: 0.65,\n        labelOpacity: 0.25,\n        strokeOpacity: 0.65,\n      },\n      disabled: {\n        fill: '#d0e4ff',\n        fillOpacity: 0.25,\n        labelOpacity: 0.25,\n        stroke: '#969696',\n        strokeOpacity: 0.25,\n      },\n    },\n    animation: {\n      enter: 'fade',\n      exit: 'fade',\n      show: 'fade',\n      hide: 'fade',\n      expand: 'combo-expand',\n      collapse: 'combo-collapse',\n      update: [{ fields: ['x', 'y'] }, { fields: ['fill', 'stroke', 'lineWidth'], shape: 'key' }],\n      translate: [{ fields: ['x', 'y'] }],\n    },\n  },\n};\n",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "在创建图时通过 ",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "theme",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": " 选项指定要使用的主题：",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  theme: 'light', // 或 'dark'\n  // ... 其他配置\n});\n",
        "paraId": 18,
        "tocIndex": 6
    },
    {
        "value": "创建图后，可以通过 ",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "setTheme",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": " 方法动态切换主题：",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "// 切换到暗色主题\ngraph.setTheme('dark');\n\n// 获取当前主题\nconst currentTheme = graph.getTheme(); // 'dark'\n",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "在 G6 中，元素的最终样式由多个层级的样式合并而成，按优先级从低到高排序：",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "⭐️ 主题默认样式",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": " < 调色板样式 < 数据样式 < 图的默认样式 < ",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "⭐️ 主题状态样式",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": " < 图的状态样式",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "详细说明：",
        "paraId": 23,
        "tocIndex": 8
    },
    {
        "value": "主题默认样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "：主题系统提供的基础样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "调色板样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "：基于主题调色板配置的自动着色样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "数据样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "：在数据中定义的样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "图的默认样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "：通过图的配置项设置的样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "主题状态样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "：主题中定义的状态样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "图的状态样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "：通过图的配置项设置的状态样式",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "更多关于自定义主题的内容，请参考",
        "paraId": 25,
        "tocIndex": 8
    },
    {
        "value": "自定义主题",
        "paraId": 26,
        "tocIndex": 8
    },
    {
        "value": "。",
        "paraId": 25,
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
//# sourceMappingURL=docs_manual_theme_overview_zh_md_q_hK4X-async.js.map