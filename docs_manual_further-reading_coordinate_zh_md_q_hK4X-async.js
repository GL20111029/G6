((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/coordinate.zh.md?type=text'],
{ "docs/manual/further-reading/coordinate.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/coordinate.zh.md?watch=parent");
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
        "value": "在 G6 5.0 中主要会涉及三个坐标系：画布坐标系(Canvas)、视口坐标系(Viewport)和浏览器坐标系(Client)。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G6 元素绘制时所使用的坐标系，其不受相机缩放、平移的影响，要改变一个元素的位置，需要直接修改元素的位置属性(x/y/z)。",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "画布空间理论上是无限大的，在初始状态下（无平移、缩放倍率为1），画布坐标系的原点位于视口左上角位置。",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "视口坐标系是相机坐标系的投影，当相机发生平移、缩放时，画布中元素位置在视口坐标系中的位置也会发生变化。",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "视口的大小即画布 DOM 容器的大小，视口坐标系的原点位于视口左上角位置，x 轴正方向向右，y 轴正方向向下。",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "浏览器坐标系以浏览器左上角为原点，x 轴正方向向右，y 轴正方向向下。",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "下图描述了视口坐标系和浏览器坐标系之间的关系：",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "G6 提供了坐标系转换的方法，可以方便地在不同坐标系之间进行转换。",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "画布坐标系转视口坐标系：",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "getViewportByCanvas",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "浏览器坐标系转画布坐标系：",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "getCanvasByClient",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "视口坐标系转画布坐标系：",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "getCanvasByViewport",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "画布坐标系转浏览器坐标系：",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "getClientByCanvas",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "另外还提供了其他相关 API：",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "获取视口中心的视口坐标：",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "getCanvasCenter",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "获取视口中心的画布坐标：",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "getViewportCenter",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "获取图原点在视口坐标系中的位置：",
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
//# sourceMappingURL=docs_manual_further-reading_coordinate_zh_md_q_hK4X-async.js.map