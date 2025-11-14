((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/canvas.en.md?type=text'],
{ "docs/api/canvas.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/canvas.en.md?watch=parent");
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
        "value": "G6 provides a series of canvas operation APIs to control and obtain basic information about the canvas. With these APIs, you can:",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Get the canvas instance",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Get and set the canvas size",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Operate the canvas renderer and layers",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Get the canvas instance, which can be used for low-level canvas operations.",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "getCanvas(): Canvas;\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Return Value Description",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "The Canvas instance includes the following main functions:",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "getLayer(name?: string)",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Get the specified layer",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "getLayers()",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Get all layers",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "getCamera()",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Get the camera instance",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "getRoot()",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Get the root node",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "setCursor(cursor: string)",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ": Set the mouse cursor style",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Example",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "// Get the canvas instance\nconst canvas = graph.getCanvas();\n\n// Get the main layer\nconst mainLayer = canvas.getLayer('main');\n\n// Set the mouse cursor style\ncanvas.setCursor('pointer');\n\n// Get the root node of the canvas\nconst root = canvas.getRoot();\n",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Get the size of the current canvas container. Returns an array containing the width and height.",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "getSize(): [number, number];\n",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "Example",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "// Get the canvas size\nconst [width, height] = graph.getSize();\nconsole.log('Canvas width:', width);\nconsole.log('Canvas height:', height);\n\n// Use the size information for calculations\nconst centerX = width / 2;\nconst centerY = height / 2;\n",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Set the size of the canvas container. This method will update both the canvas and container size.",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "setSize(width: number, height: number): void;\n",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Parameter",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "width",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "Canvas width (pixels)",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "height",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "Canvas height (pixels)",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "Example",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "// Set a fixed size\ngraph.setSize(800, 600);\n",
        "paraId": 18,
        "tocIndex": 4
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
//# sourceMappingURL=docs_api_canvas_en_md_q_hK4X-async.js.map