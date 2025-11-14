((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/renderer.en.md?type=text'],
{ "docs/manual/further-reading/renderer.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/renderer.en.md?watch=parent");
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
        "value": "G6 uses Canvas as the default renderer, but also supports rendering with SVG and WebGL. To switch to the SVG or WebGL renderer, simply pass the ",
        "paraId": 0
    },
    {
        "value": "renderer",
        "paraId": 0
    },
    {
        "value": " parameter during initialization.",
        "paraId": 0
    },
    {
        "value": "Install the renderer dependency:",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "npm install @antv/g-svg\n",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Configure the renderer:",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "import { Renderer as SVGRenderer } from '@antv/g-svg';\nimport { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  // ... other options\n  // All canvases will use the SVG renderer here\n  renderer: () => new SVGRenderer(),\n});\n",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "Install the renderer dependency:",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "npm install @antv/g-webgl\n",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Configure the renderer:",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "import { Renderer as WebGLRenderer } from '@antv/g-webgl';\nimport { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  // ... other options\n  // All canvases will use the WebGL renderer here\n  renderer: () => new WebGLRenderer(),\n});\n",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "G6 uses layered canvases for rendering, so ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "renderer",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": " is a callback function that takes the canvas type as a parameter and returns the renderer instance. If you want to use different renderers on different canvases, you can configure it like this:",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "import { Renderer as SVGRenderer } from '@antv/g-svg';\nimport { Renderer as WebGLRenderer } from '@antv/g-webgl';\n\nconst graph = new Graph({\n  // ... other options\n  renderer: (layer) => {\n    // The main canvas uses the WebGL renderer, and the other canvases use the SVG renderer\n    if (layer === 'main') return new WebGLRenderer();\n    return new SVGRenderer();\n  },\n});\n",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "G6 does not provide a API to switch the renderer, but you can still update the ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "renderer",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " option through the ",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "setOptions",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": " method.",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "import { Renderer as SVGRenderer } from '@antv/g-svg';\nimport { Renderer as WebGLRenderer } from '@antv/g-webgl';\n\n// Use the WebGL renderer by default\nconst graph = new Graph({\n  // ... other options\n  renderer: () => new WebGLRenderer(),\n});\n\nawait graph.render();\n\n// Switch to the SVG renderer\ngraph.setOptions({\n  renderer: () => new SVGRenderer(),\n});\n",
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
//# sourceMappingURL=docs_manual_further-reading_renderer_en_md_q_hK4X-async.js.map