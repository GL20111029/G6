((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Background.en.md?type=text'],
{ "docs/manual/plugin/Background.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Background.en.md?watch=parent");
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
        "value": "Support setting a background image for the canvas to make the canvas more hierarchical and narrative.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "This plugin is mainly used for:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Setting a unified brand background color or image for charts",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Distinguishing different functional areas through the background",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Enhancing the visual hierarchy and aesthetics of charts",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Below is a simple example of initializing the Background plugin:",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'background',\n      key: 'my-background', // Specify an identifier for the plugin for dynamic updates\n      backgroundColor: '#f0f2f5', // Set background color\n      backgroundImage: 'url(https://example.com/bg.png)', // Set background image\n    },\n  ],\n});\n",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "The configuration options for the Background plugin inherit all CSS style properties (",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "CSSStyleDeclaration",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "), so you can use any valid CSS property to configure the background. Here are some common configurations:",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Default Value",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Plugin type",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "background",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "key",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Unique identifier for updates",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "width",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Background width",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "100%",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "height",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Background height",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "100%",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "backgroundColor",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Background color",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "backgroundImage",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Background image",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "backgroundSize",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Background size",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "cover",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "backgroundPosition",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Background position",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "backgroundRepeat",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Background repeat",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "opacity",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Background opacity",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "transition",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Transition animation",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "background 0.5s",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "zIndex",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Stacking order",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "-1",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Note: The ",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "zIndex",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": " is set to -1 by default to prevent the background from covering other plugin DOM elements, such as grid lines.",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 200,\n  plugins: [\n    {\n      type: 'background',\n      width: '300px',\n      height: '200px',\n      backgroundColor: '#f0f2f5',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 8,
        "tocIndex": 5
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 200,\n  plugins: [\n    {\n      type: 'background',\n      width: '300px',\n      height: '200px',\n      backgroundImage:\n        'url(https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*0Qq0ToQm1rEAAAAAAAAAAAAADmJ7AQ/original)',\n      backgroundRepeat: 'no-repeat',\n      backgroundSize: 'cover',\n      opacity: 0.2,\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 9,
        "tocIndex": 6
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 300,\n  height: 200,\n  plugins: [\n    {\n      type: 'background',\n      width: '300px',\n      height: '200px',\n      background: 'linear-gradient(45deg, #1890ff, #722ed1)',\n      opacity: '0.8',\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "// Initial configuration\nconst graph = new Graph({\n  // Other configurations...\n  plugins: [\n    {\n      type: 'background',\n      key: 'my-background',\n      backgroundColor: '#f0f2f5',\n    },\n  ],\n});\n\n// Subsequent updates\ngraph.updatePlugin({\n  key: 'my-background',\n  backgroundColor: '#e6f7ff',\n  transition: 'background 1s ease',\n});\n",
        "paraId": 11,
        "tocIndex": 8
    },
    {
        "value": "By default, the ",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "zIndex",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": " of the background plugin is set to ",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "-1",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": " to ensure it is below other elements. If there are still conflicts, you can adjust the ",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "zIndex",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": " value:",
        "paraId": 12,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'background',\n      zIndex: '-2', // Lower z-index to avoid conflicts\n    },\n  ],\n});\n",
        "paraId": 13,
        "tocIndex": 10
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
//# sourceMappingURL=docs_manual_plugin_Background_en_md_q_hK4X-async.js.map