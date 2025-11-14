((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/graph/extension.en.md?type=text'],
{ "docs/manual/graph/extension.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/graph/extension.en.md?watch=parent");
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
        "value": "Extension is an important concept in G6, it is a general term for all expandable parts in G6, including the following types:",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Animation",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Behavior",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Element\n",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Node",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Edge",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Combo",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Layout",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Palette",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Plugin",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Theme",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Transform",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "G6 provides the ",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "register",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": " function for registering extensions, for example:",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "import { register, ExtensionCategory } from '@antv/g6';\nimport { CustomNode } from './my-custom-node';\n\n// # Registering Nodes\nregister(ExtensionCategory.NODE, 'custom-node', CustomNode);\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "The first parameter of the ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "register",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " function is the type of the extension, the second parameter is the name of the extension, and the third parameter is the implementation of the extension.",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Different types of extensions ",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "can",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": " use the same extension name, but when registering extensions of the same type, only the first registration will take effect.",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "// ✅\nregister(ExtensionCategory.NODE, 'custom-name', CustomNode);\nregister(ExtensionCategory.COMBO, 'custom-name', CustomCombo);\n\n// ❌\nregister(ExtensionCategory.NODE, 'custom-name', CustomNode);\nregister(ExtensionCategory.NODE, 'custom-name', CustomNode);\n",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "The configuration location for different types of extensions varies, but all are used by specifying the name that was used during registration, for example:",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Using node extensions: ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.node.type",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Using edge extensions: ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.edge.type",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Using combo extensions: ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.combo.type",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Using behavior extensions: ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.behaviors",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Using layout extensions: ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.layout.type",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Using plugin extensions: ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.plugins",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Using theme extensions: ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.theme",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Using data transform extensions: ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.transform",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Using palette extensions: ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.node.palette",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.edge.palette",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ", etc.",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Using animation extensions: ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.node.animate",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "options.edge.animate",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ", etc.",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "G6 provides the ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "getExtension",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " and ",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "getExtensions",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": " methods to obtain a single extension and all extensions of a specified type, respectively, for example:",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "import { getExtension, getExtensions, ExtensionCategory } from '@antv/g6';\n\n// To get the implementation of the node extension registered with the name 'custom-node'\ngetExtension(ExtensionCategory.NODE, 'custom-node');\n\n// Retrieve all registered node extension implementations\ngetExtensions(ExtensionCategory.NODE);\n",
        "paraId": 11,
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
//# sourceMappingURL=docs_manual_graph_extension_en_md_q_hK4X-async.js.map