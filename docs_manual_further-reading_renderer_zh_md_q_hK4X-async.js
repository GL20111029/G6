((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/renderer.zh.md?type=text'],
{ "docs/manual/further-reading/renderer.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/renderer.zh.md?watch=parent");
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
        "value": "G6 默认使用 Canvas 作为渲染器，但也支持通过 SVG 和 WebGL 进行渲染，要切换到 SVG 或 WebGL 渲染器，只需在初始化时传入 ",
        "paraId": 0
    },
    {
        "value": "renderer",
        "paraId": 0
    },
    {
        "value": " 参数即可。",
        "paraId": 0
    },
    {
        "value": "安装渲染器依赖：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "npm install @antv/g-svg\n",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "配置渲染器：",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "import { Renderer as SVGRenderer } from '@antv/g-svg';\nimport { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  // ... other options\n  // 这里所有的画布都会使用 SVG 渲染器\n  renderer: () => new SVGRenderer(),\n});\n",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "安装渲染器依赖：",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "npm install @antv/g-webgl\n",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "配置渲染器：",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "import { Renderer as WebGLRenderer } from '@antv/g-webgl';\nimport { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  // ... other options\n  // 这里所有的画布都会使用 WebGL 渲染器\n  renderer: () => new WebGLRenderer(),\n});\n",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "G6 采用了分层画布进行渲染，因此 ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "renderer",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " 是一个回调函数，参数是画布类型，返回渲染器实例，如果你想在不同的画布上使用不同的渲染器，可以这样配置：",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "import { Renderer as SVGRenderer } from '@antv/g-svg';\nimport { Renderer as WebGLRenderer } from '@antv/g-webgl';\n\nconst graph = new Graph({\n  // ... other options\n  renderer: (layer) => {\n    // 主画布使用 WebGL 渲染器，其他画布使用 SVG 渲染器\n    if (layer === 'main') return new WebGLRenderer();\n    return new SVGRenderer();\n  },\n});\n",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "G6 没有提供单独的 API 来切换渲染器，但你仍可以通过 ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "setOptions",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " 方法来更新 ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "renderer",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " 参数：",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "import { Renderer as SVGRenderer } from '@antv/g-svg';\nimport { Renderer as WebGLRenderer } from '@antv/g-webgl';\n\n// 初始化时使用 WebGL 渲染器\nconst graph = new Graph({\n  // ... other options\n  renderer: () => new WebGLRenderer(),\n});\n\nawait graph.render();\n\n// 切换到 SVG 渲染器\ngraph.setOptions({\n  renderer: () => new SVGRenderer(),\n});\n",
        "paraId": 12,
        "tocIndex": 3
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
//# sourceMappingURL=docs_manual_further-reading_renderer_zh_md_q_hK4X-async.js.map