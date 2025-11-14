((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/coordinate.en.md?type=text'],
{ "docs/api/coordinate.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/coordinate.en.md?watch=parent");
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
        "value": "Understanding different coordinate systems and their transformations is crucial in graph visualization. G6 involves multiple coordinate systems, each used for different scenarios:",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Client Coordinate System",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": Origin is at the top-left corner of the browser viewport, measured in pixels. Typically used for handling browser events.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Screen Coordinate System",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": Origin is at the top-left corner of the screen, affected by page scrolling.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Page Coordinate System",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": Origin is at the top-left corner of the document, considering document scrolling.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Canvas Coordinate System",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": Also known as the world coordinate system, used for drawing and layout, with the origin at the top-left corner of the canvas element.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Viewport Coordinate System",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ": The visible area of the canvas, with the origin at the top-left corner of the viewport. The viewport can be panned and zoomed to view different areas of the Canvas.",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "In this ",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "example",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ", moving the mouse shows the position in various coordinate systems:",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "When the canvas is not panned or zoomed, the Viewport and Canvas coordinate systems coincide. With user interactions like dragging or zooming, the two systems may shift.",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "G6 provides a series of APIs for converting between different coordinate systems, detailed below.",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "Convert browser coordinates (client coordinates) to canvas coordinates.",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "getCanvasByClient(point: Point): Point;\n",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Parameters",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Parameter",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "point",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Browser coordinate point",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Return Value",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": ": [number, number] | [number, number, number]",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": ": Coordinate point in the canvas coordinate system",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "Convert viewport coordinates to canvas coordinates.",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "getCanvasByViewport(point: Point): Point;\n",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Parameters",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Parameter",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "point",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Viewport coordinate point",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Return Value",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": ": [number, number] | [number, number, number]",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": ": Coordinate point in the canvas coordinate system",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "Convert canvas coordinates to browser client coordinates.",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "getClientByCanvas(point: Point): Point;\n",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "Parameter",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "point",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "Canvas coordinate point",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "Return Value",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": ": [number, number] | [number, number, number]",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": ": Coordinate point in the browser client coordinate system",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Convert canvas coordinates to viewport coordinates.",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "getViewportByCanvas(point: Point): Point;\n",
        "paraId": 24,
        "tocIndex": 5
    },
    {
        "value": "Parameters",
        "paraId": 25,
        "tocIndex": 5
    },
    {
        "value": "Parameter",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "Default",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "Required",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "point",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "Canvas coordinate point",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "[number, number] | [number, number, number]",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "✓",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "Return Value",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": ": [number, number] | [number, number, number]",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": ": Coordinate point in the viewport coordinate system",
        "paraId": 28,
        "tocIndex": 5
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
//# sourceMappingURL=docs_api_coordinate_en_md_q_hK4X-async.js.map