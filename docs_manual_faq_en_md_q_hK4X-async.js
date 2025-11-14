((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/faq.en.md?type=text'],
{ "docs/manual/faq.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/faq.en.md?watch=parent");
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
        "value": "Extension",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " is a concept in G6 that collectively refers to all types of registrable content, including elements, behaviors, layouts, and plugins, among others.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Plugin",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " represents a flexible extension mechanism provided by G6 and is a special type of ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Extension",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ".",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Taking ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "label",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": " as an example, you can set ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "labelWordWrap",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": " and ",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "labelWordWrapWidth",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": " to achieve text overflow ellipsis.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "{\n  labelText: 'This is a long text',\n  labelWordWrap: true,\n  labelWordWrapWidth: 50,\n}\n",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "Some plugins or behaviors support configuring key press triggers. Please use standard key names, such as ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Control",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Shift",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Alt",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Meta",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": ", as well as letters, numbers, symbols, and so on.",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "Ensure that you call ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "graph.draw()",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " or ",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "graph.render()",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": " to update the canvas after updating the data.",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "G6 merges differences and updates the canvas uniformly after ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "draw",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " or ",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "render",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " for multiple data updates to improve performance.",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "When multiple interactions conflict with each other, you can set the enable timing of interactions to avoid multiple interactions being triggered simultaneously.",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "Taking ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "drag-canvas",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " and ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "brush-select",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " as an example, if you directly configure these two interactions, dragging on the canvas will cause interaction exceptions. You can disable the ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "drag-canvas",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " interaction when the ",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "shift",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": " key is pressed.",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": "behaviors: [\n  {\n    type: 'drag-canvas',\n    enable: (event) => event.shiftKey === false,\n  },\n  {\n    type: 'brush-select',\n  },\n];\n",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": "At this point, when the ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "shift",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " key is pressed, the ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "drag-canvas",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " interaction will be disabled, and the ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "brush-select",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " interaction will not be affected.",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "draw",
        "paraId": 11
    },
    {
        "value": "render",
        "paraId": 11
    },
    {
        "value": "Both ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "draw",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " and ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "render",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " execute drawing operations, but ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "render",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " additionally performs ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "layout",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " and ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "auto fit",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": " operations based on ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "draw",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": ".",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "You can simply understand it as: ",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "render",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": " = ",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "draw",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": " + ",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "layout",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": " + ",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "fitView",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "/",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "fitCenter",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": ".",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Reason 1: The style in the data is overridden by the style in the style mapping.",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "{\n  data: [{ id: 'node-1', style: { fill: 'orange' } }],\n  node: {\n    style: {\n      fill: 'pink', // No matter what the style in the data is, it will be overridden by the style here\n    }\n  }\n}\n",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "Solution: Use a callback method to prioritize obtaining styles from the data to improve data priority.",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "{\n  node: {\n    style: (data) => {\n      return {\n        fill: data.style?.fill || 'pink',\n      };\n    };\n  }\n}\n",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "When using the Canvas renderer for drawing, residual content may appear in the canvas, which is referred to as \"dirty rectangles\". This phenomenon occurs because the underlying rendering engine improves performance by only drawing the parts that have changed each time, rather than clearing the entire canvas.",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "However, when the graphics in the canvas change, there may be cases where some graphics are not correctly cleared, resulting in residual content.",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "You can solve this issue by:",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "Using the SVG or WebGL renderer;",
        "paraId": 21,
        "tocIndex": 7
    },
    {
        "value": "Checking whether there are illegal values in the element of the nodes, such as null, NaN, and so on;",
        "paraId": 21,
        "tocIndex": 7
    },
    {
        "value": "Using integers as much as possible for numeric style values, such as r, width, height, fontSize, and so on.",
        "paraId": 21,
        "tocIndex": 7
    },
    {
        "value": "Please avoid using Vue reactive data, Immer.js, and other wrapped objects as the data source for G6, as these objects will be deeply monitored internally, and even freeze the data object, causing G6 to fail to operate normally.",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "WARNING in ./node_modules/@antv/util/esm/path/util/segment-cubic-factory.js\nModule Warning (from ./node_modules/source-map-loader/dist/cjs.js):\nFailed to parse source map from '/Users/xxx/workspace/antv-g6-learn/node_modules/@antv/util/esm/path/util/src/path/util/segment-cubic-factory.ts' file: Error: ENOENT: no such file or directory, open '/Users/xxx/workspace/antv-g6-learn/node_modules/@antv/util/esm/path/util/src/path/util/segment-cubic-factory.ts'\n\nWARNING in ./node_modules/@antv/util/esm/path/util/segment-line-factory.js\nModule Warning (from ./node_modules/source-map-loader/dist/cjs.js):\nFailed to parse source map from '/Users/xxx/workspace/antv-g6-learn/node_modules/@antv/util/esm/path/util/src/path/util/segment-line-factory.ts' file: Error: ENOENT: no such file or directory, open '/Users/xxx/workspace/antv-g6-learn/node_modules/@antv/util/esm/path/util/src/path/util/segment-line-factory.ts'\n\nWARNING in ./node_modules/@antv/util/esm/path/util/segment-quad-factory.js\nModule Warning (from ./node_modules/source-map-loader/dist/cjs.js):\nFailed to parse source map from '/Users/xxx/workspace/antv-g6-learn/node_modules/@antv/util/esm/path/util/src/path/util/segment-quad-factory.ts' file: Error: ENOENT: no such file or directory, open '/Users/xxx/workspace/antv-g6-learn/node_modules/@antv/util/esm/path/util/src/path/util/segment-quad-factory.ts'\n",
        "paraId": 23,
        "tocIndex": 9
    },
    {
        "value": "Explanation: ",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "@antv/util",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": " is a tool library that AntV relies on at the bottom.",
        "paraId": 24,
        "tocIndex": 9
    },
    {
        "value": "From the partial warning message above, we can see that there is a problem with the type declaration file of the ",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": "@antv/util",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": " tool library that G6 depends on.",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": "This warning does not affect the normal operation of the project",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": ".",
        "paraId": 25,
        "tocIndex": 9
    },
    {
        "value": "This message will only appear in TypeScript projects. The following are ways to turn it off:",
        "paraId": 26,
        "tocIndex": 9
    },
    {
        "value": "Turn off TypeScript sourcemap",
        "paraId": 27,
        "tocIndex": 9
    },
    {
        "value": "Create a ",
        "paraId": 28,
        "tocIndex": 9
    },
    {
        "value": ".env",
        "paraId": 28,
        "tocIndex": 9
    },
    {
        "value": " file in the root directory of the project and add the following content:",
        "paraId": 28,
        "tocIndex": 9
    },
    {
        "value": "text\nGENERATE_SOURCEMAP=false\ntext",
        "paraId": 29,
        "tocIndex": 9
    },
    {
        "value": "Disable sourcemapping for specific modules",
        "paraId": 30,
        "tocIndex": 9
    },
    {
        "value": "Disabling sourcemapping directly is too simple and crude, and is not user-friendly for developers who may have debugging needs. Therefore, sourcemapping can be disabled for specific modules by configuring the build tool separately.",
        "paraId": 31,
        "tocIndex": 9
    },
    {
        "value": "a. webpack configuration",
        "paraId": 32,
        "tocIndex": 9
    },
    {
        "value": "module.exports = {\n  // ...其他配置\n  module: {\n    rules: [\n      {\n        test: /node_modules\\/@antv\\/util\\/esm\\/path\\/util\\/.+\\.js$/,\n        use: ['source-map-loader'],\n        enforce: 'pre',\n      },\n    ],\n  },\n  ignoreWarnings: [/Failed to parse source map/],\n};\n",
        "paraId": 33,
        "tocIndex": 9
    },
    {
        "value": "b. vite configuration",
        "paraId": 34,
        "tocIndex": 9
    },
    {
        "value": "import { defineConfig } from 'vite';\n\nexport default defineConfig({\n  build: {\n    rollupOptions: {\n      onwarn(warning, warn) {\n        // Ignore warnings for specific modules\n        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('@antv/util')) {\n          return;\n        }\n        // For other warnings, use the default warning handling\n        warn(warning);\n      },\n    },\n  },\n});\n",
        "paraId": 35,
        "tocIndex": 9
    },
    {
        "value": "In v5, the built-in colors are: export type BuiltInPalette = 'spectral' | 'oranges' | 'greens' | 'blues';",
        "paraId": 36,
        "tocIndex": 10
    },
    {
        "value": "The solution is as follows:",
        "paraId": 37,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  container: '#ID',\n  width: number,\n  height: number,\n  data,\n  node: {\n    palette: {\n      field: 'color',\n      // right\n      color: ['red', 'green', 'blue'],\n\n      // error\n      // color: 'red'\n    },\n  },\n});\n",
        "paraId": 38,
        "tocIndex": 10
    },
    {
        "value": "In v5, built-in plugins include ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "bubble-sets",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "edge-filter-lens",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "grid-line",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "background",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "contextmenu",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "fisheye",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "fullscreen",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "history",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "hull",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "legend",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "minimap",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "snapline",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "timebar",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "toolbar",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "tooltip",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": " >",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "watermark",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": ". ",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "Detailed reference",
        "paraId": 39,
        "tocIndex": 11
    },
    {
        "value": "Actual reason: The parent container of the ",
        "paraId": 40,
        "tocIndex": 11
    },
    {
        "value": "graph",
        "paraId": 40,
        "tocIndex": 11
    },
    {
        "value": " instance, ",
        "paraId": 40,
        "tocIndex": 11
    },
    {
        "value": "<div ref={containerRef} />",
        "paraId": 40,
        "tocIndex": 11
    },
    {
        "value": ", does not have a height set, so the G6 Graph may not be able to calculate the correct size.",
        "paraId": 40,
        "tocIndex": 11
    },
    {
        "value": "If you want to enable the ",
        "paraId": 40,
        "tocIndex": 11
    },
    {
        "value": "grid-line",
        "paraId": 40,
        "tocIndex": 11
    },
    {
        "value": " canvas plugin, you need to set the width and height of the parent element, which is not valid in the graph configuration",
        "paraId": 40,
        "tocIndex": 11
    },
    {
        "value": ".",
        "paraId": 40,
        "tocIndex": 11
    },
    {
        "value": "Use ",
        "paraId": 41,
        "tocIndex": 12
    },
    {
        "value": "new Graph({xxx})",
        "paraId": 41,
        "tocIndex": 12
    },
    {
        "value": " uniformly.",
        "paraId": 41,
        "tocIndex": 12
    },
    {
        "value": "In v5, built-in layouts include ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "antv-dagre",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "combo-combined",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "compact-box",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "force-atlas2",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "circular",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "concentric",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "d3-force",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "dagre",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "dendrogram",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "force",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "fruchterman",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "grid",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "indented",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "mds",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "mindmap",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "radial",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": " ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "random",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": ". ",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "Specific reference",
        "paraId": 42,
        "tocIndex": 12
    },
    {
        "value": "v5 merges the graph and tree graph, no longer creates the tree graph layout by instantiating ",
        "paraId": 43,
        "tocIndex": 12
    },
    {
        "value": "G6.TreeGraph",
        "paraId": 43,
        "tocIndex": 12
    },
    {
        "value": ", and removes this method. For details, see ",
        "paraId": 43,
        "tocIndex": 12
    },
    {
        "value": "Features - Merge Graph and Tree Graph",
        "paraId": 43,
        "tocIndex": 12
    },
    {
        "value": "is configured ",
        "paraId": 44,
        "tocIndex": 13
    },
    {
        "value": "portLinkToCenter",
        "paraId": 44,
        "tocIndex": 13
    },
    {
        "value": " to ",
        "paraId": 44,
        "tocIndex": 13
    },
    {
        "value": "true",
        "paraId": 44,
        "tocIndex": 13
    },
    {
        "value": ".",
        "paraId": 44,
        "tocIndex": 13
    },
    {
        "value": "const graph = new Graph({\n  container: xxx,\n  node: {\n    type: 'rect',\n    style: {\n      portLinkToCenter: true,\n    },\n  },\n  edge: {\n    type: 'xxx',\n  },\n});\n",
        "paraId": 45,
        "tocIndex": 13
    },
    {
        "value": "Implementation solution: ",
        "paraId": 46,
        "tocIndex": 14
    },
    {
        "value": "#6347",
        "paraId": 46,
        "tocIndex": 14
    },
    {
        "value": "const measureTextWidth = memoize(\n  (text: string, font: any = {}): TextMetrics => {\n    const { fontSize, fontFamily = 'sans-serif', fontWeight, fontStyle, fontVariant } = font;\n    const ctx = getCanvasContext();\n    // @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/font\n    ctx.font = [fontStyle, fontWeight, fontVariant, `${fontSize}px`, fontFamily].join(' ');\n    return ctx.measureText(isString(text) ? text : '').width;\n  },\n  (text: string, font = {}) => [text, ...values(font)].join(''),\n);\n\nconst graph = new G6.Graph({\n    node: {\n          style: { size: d => [measureTextWidth(d.label, {...}) , xxx] },\n    }\n})\n",
        "paraId": 47,
        "tocIndex": 14
    },
    {
        "value": "You can manually specify the ",
        "paraId": 48,
        "tocIndex": 15
    },
    {
        "value": "IPointerEvent",
        "paraId": 48,
        "tocIndex": 15
    },
    {
        "value": " type. For details, see ",
        "paraId": 48,
        "tocIndex": 15
    },
    {
        "value": "#6346",
        "paraId": 48,
        "tocIndex": 15
    },
    {
        "value": "import { NodeEvent } from '@antv/g6';\nimport type { IPointerEvent } from '@antv/g6';\n\ngraph.on(NodeEvent.CLICK, (event: IPointerEvent) => {\n  // handler\n});\n",
        "paraId": 49,
        "tocIndex": 15
    },
    {
        "value": "Update the node data, set the ",
        "paraId": 50,
        "tocIndex": 16
    },
    {
        "value": "combo",
        "paraId": 50,
        "tocIndex": 16
    },
    {
        "value": " value to ",
        "paraId": 50,
        "tocIndex": 16
    },
    {
        "value": "null",
        "paraId": 50,
        "tocIndex": 16
    },
    {
        "value": ".",
        "paraId": 50,
        "tocIndex": 16
    },
    {
        "value": "graph.updateNodeData([{ id: 'node-id', combo: null }]);\n",
        "paraId": 51,
        "tocIndex": 16
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
//# sourceMappingURL=docs_manual_faq_en_md_q_hK4X-async.js.map