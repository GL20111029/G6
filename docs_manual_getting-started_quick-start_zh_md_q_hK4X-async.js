((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/getting-started/quick-start.zh.md?type=text'],
{ "docs/manual/getting-started/quick-start.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/getting-started/quick-start.zh.md?watch=parent");
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
        "value": "访问 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "图表示例",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 无需任何环境配置即可在线体验 G6。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "在本例子中，我们将基于 HTML 页面使用 G6 创建一个简单的图。",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "将下面的代码复制到一个 HTML 文件中，然后在浏览器中打开这个文件：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "<!-- 准备一个容器 -->\n<div id=\"container\" style=\"width: 500px; height: 500px\"></div>\n\n<!-- 引入 G6 的 JS 文件 -->\n<script src=\"https://unpkg.com/@antv/g6@5/dist/g6.min.js\"></script>\n\n<script>\n  const { Graph } = G6;\n\n  fetch('https://assets.antv.antgroup.com/g6/graph.json')\n    .then((res) => res.json())\n    .then((data) => {\n      const graph = new Graph({\n        container: 'container',\n        autoFit: 'view',\n        data,\n        node: {\n          style: {\n            size: 10,\n          },\n          palette: {\n            field: 'group',\n            color: 'tableau',\n          },\n        },\n        layout: {\n          type: 'd3-force',\n          manyBody: {},\n          x: {},\n          y: {},\n        },\n        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n      });\n\n      graph.render();\n    });\n</script>\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "会得到如下所示的图：",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "fetch('https://assets.antv.antgroup.com/g6/graph.json')\n  .then((res) => res.json())\n  .then((data) =>\n    createGraph(\n      {\n        data,\n        autoFit: 'view',\n        animation: false,\n        node: {\n          style: {\n            size: 10,\n          },\n          palette: {\n            field: 'group',\n            color: 'tableau',\n          },\n        },\n        layout: {\n          type: 'd3-force',\n          animation: false,\n          manyBody: {},\n          x: {},\n          y: {},\n        },\n        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n      },\n      { width: 500, height: 500 },\n    ),\n  );\n",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "下面分析一下这段代码：",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "首先我们创建一个 ",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "div",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": " 元素作为图的容器：",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "<div id=\"container\" style=\"width: 500px; height: 500px\"></div>\n",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "然后引入 G6 的 JS 文件：",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": "<script src=\"https://unpkg.com/@antv/g6@5/dist/g6.min.js\"></script>\n",
        "paraId": 11,
        "tocIndex": 1
    },
    {
        "value": "使用 ",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "fetch",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": " 方法获取图的数据：",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "fetch('https://assets.antv.antgroup.com/g6/graph.json').then((res) => res.json());\n",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "最后创建一个图实例，传入配置对象，并调用 ",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "render",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": " 方法渲染图：",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "const { Graph } = G6;\n\nconst graph = new Graph({\n  container: 'container',\n  autoFit: 'view',\n  data,\n  node: {\n    style: {\n      size: 10,\n    },\n    palette: {\n      field: 'group',\n      color: 'tableau',\n    },\n  },\n  layout: {\n    type: 'd3-force',\n    manyBody: {},\n    x: {},\n    y: {},\n  },\n  behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 15,
        "tocIndex": 1
    },
    {
        "value": "如果你使用 React、Vue、Angular 等框架，可以查看：",
        "paraId": 16,
        "tocIndex": 1
    },
    {
        "value": "在 React 中使用 G6",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "在 Vue 中使用 G6",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "在 Angular 中使用 G6",
        "paraId": 19,
        "tocIndex": 1
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
//# sourceMappingURL=docs_manual_getting-started_quick-start_zh_md_q_hK4X-async.js.map