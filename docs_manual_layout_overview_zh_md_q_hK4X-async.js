((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/overview.zh.md?type=text'],
{ "docs/manual/layout/overview.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/overview.zh.md?watch=parent");
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
        "value": "图布局是指将图中的元素按照一定的规则进行排列的过程，例如基于电荷弹性模型的力导向布局、逐次排布的网格布局、基于层次结构的树布局等。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6 提供了多种布局算法，用户可以根据自己的需求选择合适的布局算法：",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "AntVDagreLayout",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "：基于 dagre 定制的布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "CircularLayout",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "：环形布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "ComboCombinedLayout",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "：适用于存在组合的布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "ConcentricLayout",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "：同心圆布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "D3Force3DLayout",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "3D 力导向",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "D3ForceLayout",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "：基于 ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "D3",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " 的力导向布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "DagreLayout",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "dagre",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " 布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "FishboneLayout",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": "：鱼骨布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "ForceAtlas2Layout",
        "paraId": 11,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "ForceAtlas2",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " 布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "ForceLayout",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "：力导向布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "FruchtermanLayout",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Fruchterman",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " 布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "GridLayout",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "：网格布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "MDSLayout",
        "paraId": 15,
        "tocIndex": 1
    },
    {
        "value": "：高维数据降维算法布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "RadialLayout",
        "paraId": 16,
        "tocIndex": 1
    },
    {
        "value": "：径向布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "RandomLayout",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "：随机布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "SnakeLayout",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "：蛇形布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "CompactBoxLayout",
        "paraId": 19,
        "tocIndex": 1
    },
    {
        "value": ": 紧凑树布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "DendrogramLayout",
        "paraId": 20,
        "tocIndex": 1
    },
    {
        "value": ": 树状布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "MindmapLayout",
        "paraId": 21,
        "tocIndex": 1
    },
    {
        "value": ": 思维导图布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "IndentedLayout",
        "paraId": 22,
        "tocIndex": 1
    },
    {
        "value": ": 缩进树布局",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "其中 ",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "CompactBox Layout",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "、",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "Dendrogram Layout",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "、",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "Mindmap Layout",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "、",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "Indented Layout",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": " 是树布局的一种，适用于树状结构的图。",
        "paraId": 23,
        "tocIndex": 1
    },
    {
        "value": "你可以直接使用内置布局，如果想要使用其他布局，需要先进行注册：",
        "paraId": 24,
        "tocIndex": 2
    },
    {
        "value": "import { register, ExtensionCategory } from '@antv/g6';\nimport { CustomLayout } from 'package-name/or/path-to-your-custom-layout';\n\nregister(ExtensionCategory.LAYOUT, 'custom-layout', CustomLayout);\n",
        "paraId": 25,
        "tocIndex": 2
    },
    {
        "value": "通过 ",
        "paraId": 26,
        "tocIndex": 3
    },
    {
        "value": "layout",
        "paraId": 26,
        "tocIndex": 3
    },
    {
        "value": " 配置项可以指定图的布局算法，例如：",
        "paraId": 26,
        "tocIndex": 3
    },
    {
        "value": "{\n  layout: {\n    // 指定要使用的布局算法\n    type: 'force',\n    // 布局算法的配置项\n    gravity: 10\n    // ...\n  }\n}\n",
        "paraId": 27,
        "tocIndex": 3
    },
    {
        "value": "也可在图实例化之后使用 ",
        "paraId": 28,
        "tocIndex": 3
    },
    {
        "value": "graph.setLayout",
        "paraId": 28,
        "tocIndex": 3
    },
    {
        "value": " 来更新布局配置。",
        "paraId": 28,
        "tocIndex": 3
    },
    {
        "value": "G6 对一些布局算法提供了加速版本，包括：在 Web Worker 中执行布局算法、提供 ",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "WASM",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": " 版本的布局算法、GPU 加速的布局算法等。可按照下列方式使用：",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "除树布局外，G6 的所有内置布局算法都支持在 Web Worker 中执行。只需将 ",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "enableWorker",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": " 设置为 ",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "true",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": " 即可：",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "{\n  layout: {\n    type: 'force',\n    enableWorker: true,\n    // ...\n  }\n}\n",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": "目前支持 WASM 版本的布局算法有：",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "Fruchterman Layout",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": " ",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "ForceAtlas Layout",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": " ",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "Force Layout",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": " ",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "Dagre Layout",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "。",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "首先安装 ",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "@antv/layout-wasm",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "：",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "npm install @antv/layout-wasm --save\n",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "引入并注册布局算法：",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "import { register, Graph, ExtensionCategory } from '@antv/g6';\nimport { FruchtermanLayout, initThreads, supportsThreads } from '@antv/layout-wasm';\n\nregister(ExtensionCategory.LAYOUT, 'fruchterman-wasm', FruchtermanLayout);\n",
        "paraId": 36,
        "tocIndex": 6
    },
    {
        "value": "初始化线程：",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "const supported = await supportsThreads();\nconst threads = await initThreads(supported);\n",
        "paraId": 38,
        "tocIndex": 6
    },
    {
        "value": "初始化图并传入布局配置：",
        "paraId": 39,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  // ... 其他配置\n  layout: {\n    type: 'fruchterman-wasm',\n    threads,\n    // ... 其他配置\n  },\n});\n",
        "paraId": 40,
        "tocIndex": 6
    },
    {
        "value": "目前支持 GPU 加速的布局算法有：",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "Fruchterman Layout",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": " ",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "GForce Layout",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "。",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "首先安装 ",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": "@antv/layout-gpu",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": "：",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": "npm install @antv/layout-gpu --save\n",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": "引入并注册布局算法：",
        "paraId": 44,
        "tocIndex": 7
    },
    {
        "value": "import { register, Graph, ExtensionCategory } from '@antv/g6';\nimport { FruchtermanLayout } from '@antv/layout-gpu';\n\nregister(ExtensionCategory.LAYOUT, 'fruchterman-gpu', FruchtermanLayout);\n",
        "paraId": 45,
        "tocIndex": 7
    },
    {
        "value": "初始化图并传入布局配置：",
        "paraId": 46,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  // ... 其他配置\n  layout: {\n    type: 'fruchterman-gpu',\n    // ... 其他配置\n  },\n});\n",
        "paraId": 47,
        "tocIndex": 7
    },
    {
        "value": "通常，在调用 ",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "graph.render()",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": " 后，G6 会自动执行布局算法。",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "如果需要手动执行布局算法，G6 提供了以下 API：",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "layout",
        "paraId": 50,
        "tocIndex": 8
    },
    {
        "value": "：执行布局算法",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "setLayout",
        "paraId": 52,
        "tocIndex": 8
    },
    {
        "value": "：设置布局算法",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "stopLayout",
        "paraId": 53,
        "tocIndex": 8
    },
    {
        "value": "：停止布局算法",
        "paraId": 51,
        "tocIndex": 8
    },
    {
        "value": "如果内置布局算法无法满足需求，可以自定义布局算法，具体请参考",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "自定义布局",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": "。",
        "paraId": 54,
        "tocIndex": 9
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
//# sourceMappingURL=docs_manual_layout_overview_zh_md_q_hK4X-async.js.map