((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/backup/CameraSetting.en.md?type=text'],
{ "docs/backup/CameraSetting.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/backup/CameraSetting.en.md?watch=parent");
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
        "value": "Required",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "string",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Plugin type",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "number | 'auto'",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Camera viewport aspect ratio, only valid in perspective camera.",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "number : Specific aspect ratio",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "'auto'",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": " : Automatically set to the aspect ratio of the canvas",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "Azimuth",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "'orbiting' | 'exploring' | 'tracking'",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "Camera type",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "'orbiting'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ": Fixed viewpoint, change camera position",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "'exploring'",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": ": Similar to orbiting, but allows the camera to rotate between the North Pole and the South Pole",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "'tracking'",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": ": Fixed camera position, change viewpoint",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": " ",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "Default:",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": " ",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "500",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "The distance from the camera to the target",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Elevation",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "The position of the far plane",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "Camera field of view, only valid in perspective camera",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "number",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "Maximum distance",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "Minimum distance",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 26,
        "tocIndex": 11
    },
    {
        "value": "The position of the near plane",
        "paraId": 27,
        "tocIndex": 11
    },
    {
        "value": "'perspective' | 'orthographic'",
        "paraId": 28,
        "tocIndex": 12
    },
    {
        "value": "Projection mode, perspective projection is only valid in 3D scenes",
        "paraId": 29,
        "tocIndex": 12
    },
    {
        "value": "'perspective'",
        "paraId": 30,
        "tocIndex": 12
    },
    {
        "value": " : perspective projection",
        "paraId": 30,
        "tocIndex": 12
    },
    {
        "value": "'orthographic'",
        "paraId": 31,
        "tocIndex": 12
    },
    {
        "value": " : Orthogonal projection",
        "paraId": 31,
        "tocIndex": 12
    },
    {
        "value": "number",
        "paraId": 32,
        "tocIndex": 13
    },
    {
        "value": "Roll",
        "paraId": 33,
        "tocIndex": 13
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
//# sourceMappingURL=docs_backup_CameraSetting_en_md_q_hK4X-async.js.map