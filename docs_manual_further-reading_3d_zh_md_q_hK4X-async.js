((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/3d.zh.md?type=text'],
{ "docs/manual/further-reading/3d.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/3d.zh.md?watch=parent");
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
        "value": "在使用 3D 能力之前，请首先安装 3D 扩展包：",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "npm install @antv/g6-extension-3d --save\n",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "该扩展包导出了以下内容：",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "renderer：3D 渲染器",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "元素",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "Capsule：胶囊节点",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Cone：圆锥节点",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Cube：立方体节点",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Cylinder：圆柱节点",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Sphere：球体节点",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Torus：圆环节点",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Line3D：3D 线",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "布局",
        "paraId": 6,
        "tocIndex": 0
    },
    {
        "value": "D3Force3DLayout：3D 力导向布局",
        "paraId": 7,
        "tocIndex": 0
    },
    {
        "value": "交互",
        "paraId": 8,
        "tocIndex": 0
    },
    {
        "value": "DragCanvas3D：拖拽画布",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "ObserveCanvas3D：观察画布",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "RollCanvas3D：旋转画布",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "ZoomCanvas3D：缩放画布",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "插件",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": "Light：光源",
        "paraId": 11,
        "tocIndex": 0
    },
    {
        "value": "其中下列扩展是必须的：",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "renderer",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "至少一个 3D 节点",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Line3D",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Light",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "renderer 无需注册，实例化 Graph 过程中传入即可。",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "使用如下方式进行注册：",
        "paraId": 15,
        "tocIndex": 1
    },
    {
        "value": "import { register, ExtensionCategory } from '@antv/g6';\nimport { Sphere, Line3D, Light } from '@antv/g6-extension-3d';\n\nregister(ExtensionCategory.NODE, 'sphere', Sphere);\nregister(ExtensionCategory.EDGE, 'line3d', Line3D);\nregister(ExtensionCategory.PLUGIN, 'light', Light);\n",
        "paraId": 16,
        "tocIndex": 1
    },
    {
        "value": "完成上述步骤后，即可创建 3D 图：",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": "import { Graph } from '@antv/g6';\nimport { renderer } from '@antv/g6-extension-3d';\n\nconst graph = new Graph({\n  // ... 其他配置\n  // 使用 3D 渲染器\n  renderer,\n  node: {\n    type: 'sphere', // 使用 3D 节点\n    style: {\n      materialType: 'phong', // 使用 Phong 材质\n    },\n  },\n  edge: {\n    type: 'line3d', // 使用 3D 边\n  },\n  plugins: [\n    {\n      type: 'light', // 添加光源\n      // 配置方向光\n      directional: {\n        direction: [0, 0, 1],\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 18,
        "tocIndex": 2
    },
    {
        "value": "你可以参考以下示例：",
        "paraId": 19,
        "tocIndex": 2
    },
    {
        "value": "精简太阳系",
        "paraId": 20,
        "tocIndex": 2
    },
    {
        "value": "3D 力导向布局",
        "paraId": 21,
        "tocIndex": 2
    },
    {
        "value": "@antv/g6",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": " 中内置注册了 ",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "CameraSetting",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": " 插件，可用于配置相机，具体可参考",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "插件",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "。",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "{\n  plugins: [\n    {\n      type: 'camera-setting',\n      projectionMode: 'perspective',\n      near: 0.1,\n      far: 1000,\n      fov: 45,\n      aspect: 1,\n    },\n  ];\n}\n",
        "paraId": 23,
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
//# sourceMappingURL=docs_manual_further-reading_3d_zh_md_q_hK4X-async.js.map