((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/coordinate.en.md?type=text'],
{ "docs/manual/further-reading/coordinate.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/coordinate.en.md?watch=parent");
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
        "value": "There are three coordinate systems in G6 5.0: Canvas, Viewport, and Client.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The coordinate system used when drawing G6 elements is not affected by camera zooming or panning. To change the position of an element, you need to directly modify the element's position properties (x/y/z).",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "The canvas space is theoretically infinite. In the initial state (no panning, zoom ratio is 1), the origin of the canvas coordinate system is located at the upper-left corner of the viewport.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "The viewport coordinate system is the projection of the camera coordinate system. When the camera pans or zooms, the position of elements in the canvas will also change in the viewport coordinate system.",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "The size of the viewport is the size of the canvas DOM container. The origin of the viewport coordinate system is located at the upper-left corner of the viewport, with the x-axis pointing to the right and the y-axis pointing down.",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "The client coordinate system has the browser's upper-left corner as the origin, with the x-axis pointing to the right and the y-axis pointing down.",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "The following figure describes the relationship between the viewport coordinate system and the client coordinate system:",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "G6 provides methods for coordinate system conversion, making it easy to convert between different coordinate systems.",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Canvas coordinate system to viewport coordinate system: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "getViewportByCanvas",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "Client coordinate system to canvas coordinate system: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "getCanvasByClient",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Viewport coordinate system to canvas coordinate system: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "getCanvasByViewport",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "Canvas coordinate system to client coordinate system: ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "getClientByCanvas",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "Other related APIs are also provided:",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "Get the viewport center in viewport coordinates: ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "getCanvasCenter",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "Get the viewport center in canvas coordinates: ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "getViewportCenter",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "Get the position of the graph origin in the viewport coordinate system: ",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "getPosition",
        "paraId": 17,
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
//# sourceMappingURL=docs_manual_further-reading_coordinate_en_md_q_hK4X-async.js.map