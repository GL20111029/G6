((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/backup/CameraSetting.zh.md?type=text'],
{ "docs/backup/CameraSetting.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/backup/CameraSetting.zh.md?watch=parent");
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
        "value": "camera-setting",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": " | string",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "⚠️ ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "注意",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "：",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "相机设置插件必须在 3D 场景下使用",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "此插件在使用前需要自行注册：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "import { register, CameraSetting, ExtensionCategory } from '@antv/g6';\n\nregister(ExtensionCategory.PLUGIN, 'camera-setting', CameraSetting); // type: 'camera-setting'\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "number | ",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "'auto'",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "相机视口宽高比，仅在透视相机下有效",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "number : 具体的宽高比",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "'auto'",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " : 自动设置为画布的宽高比",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "方位角",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "'orbiting' | 'exploring' | 'tracking'",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": "相机类型",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": "'orbiting'",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": ": 固定视点，改变相机位置",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "'exploring'",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": ": 类似 orbiting，但允许相机在北极和南极之间旋转",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "'tracking'",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": ": 固定相机位置，改变视点",
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
        "value": "相机距离目标的距离",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "仰角",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "number",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "远平面位置",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "number",
        "paraId": 20,
        "tocIndex": 8
    },
    {
        "value": "相机视角，仅在透视相机下有效",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "number",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "最大视距",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "number",
        "paraId": 24,
        "tocIndex": 10
    },
    {
        "value": "最小视距",
        "paraId": 25,
        "tocIndex": 10
    },
    {
        "value": "number",
        "paraId": 26,
        "tocIndex": 11
    },
    {
        "value": "近平面位置",
        "paraId": 27,
        "tocIndex": 11
    },
    {
        "value": "'perspective' | 'orthographic'",
        "paraId": 28,
        "tocIndex": 12
    },
    {
        "value": "投影模式，透视投影仅在 3D 场景下有效",
        "paraId": 29,
        "tocIndex": 12
    },
    {
        "value": "'perspective'",
        "paraId": 30,
        "tocIndex": 12
    },
    {
        "value": " : 透视投影",
        "paraId": 30,
        "tocIndex": 12
    },
    {
        "value": "'orthographic'",
        "paraId": 30,
        "tocIndex": 12
    },
    {
        "value": " : 正交投影",
        "paraId": 30,
        "tocIndex": 12
    },
    {
        "value": "number",
        "paraId": 31,
        "tocIndex": 13
    },
    {
        "value": "滚转角",
        "paraId": 32,
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
//# sourceMappingURL=docs_backup_CameraSetting_zh_md_q_hK4X-async.js.map