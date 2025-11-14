((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/3d.en.md?type=text'],
{ "docs/manual/further-reading/3d.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/3d.en.md?watch=parent");
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
        "value": "Before using 3D capabilities, please install the 3D extension package first:",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "npm install @antv/g6-extension-3d --save\n",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "The extension package exports the following:",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "renderer: 3D renderer",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Elements",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "Capsule: capsule node",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Cone: cone node",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Cube: cube node",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Cylinder: cylinder node",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Sphere: sphere node",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Torus: torus node",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Line3D: 3D line",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Layout",
        "paraId": 6,
        "tocIndex": 0
    },
    {
        "value": "D3Force3DLayout: 3D force-directed layout",
        "paraId": 7,
        "tocIndex": 0
    },
    {
        "value": "Behaviors",
        "paraId": 8,
        "tocIndex": 0
    },
    {
        "value": "DragCanvas3D: drag canvas",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "ObserveCanvas3D: observe canvas",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "RollCanvas3D: rotate canvas",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "ZoomCanvas3D: zoom canvas",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "Plugin",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": "Light: light source",
        "paraId": 11,
        "tocIndex": 0
    },
    {
        "value": "The following extensions are required:",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "renderer",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "at least one 3D node",
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
        "value": "The renderer does not need to be registered, it can be passed in during the instantiation of Graph.",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "Register as follows:",
        "paraId": 15,
        "tocIndex": 1
    },
    {
        "value": "import { register, ExtensionCategory } from '@antv/g6';\nimport { Sphere, Line3D, Light } from '@antv/g6-extension-3d';\n\nregister(ExtensionCategory.NODE, 'sphere', Sphere);\nregister(ExtensionCategory.EDGE, 'line3d', Line3D);\nregister(ExtensionCategory.PLUGIN, 'light', Light);\n",
        "paraId": 16,
        "tocIndex": 1
    },
    {
        "value": "After completing the above steps, you can create a 3D graph:",
        "paraId": 17,
        "tocIndex": 2
    },
    {
        "value": "import { Graph } from '@antv/g6';\nimport { renderer } from '@antv/g6-extension-3d';\n\nconst graph = new Graph({\n  // ... other options\n  // use 3d renderer\n  renderer,\n  node: {\n    type: 'sphere', // use 3d node\n    style: {\n      materialType: 'phong', // use Phong material\n    },\n  },\n  edge: {\n    type: 'line3d', // use 3D edge\n  },\n  plugins: [\n    {\n      type: 'light', // Add light source\n      // configure directional light\n      directional: {\n        direction: [0, 0, 1],\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 18,
        "tocIndex": 2
    },
    {
        "value": "You can also refer to:",
        "paraId": 19,
        "tocIndex": 2
    },
    {
        "value": "Lite Solar System",
        "paraId": 20,
        "tocIndex": 2
    },
    {
        "value": "3D Force Layout",
        "paraId": 21,
        "tocIndex": 2
    },
    {
        "value": "@antv/g6",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": " has a built-in registered plugin for CameraSetting for camera configuration, refer to ",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "plugin",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": ".",
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
//# sourceMappingURL=docs_manual_further-reading_3d_en_md_q_hK4X-async.js.map