((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Minimap.en.md?type=text'],
{ "docs/manual/plugin/Minimap.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Minimap.en.md?watch=parent");
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
        "value": "The main function of the Minimap is to provide users with an overall layout of the current graph content in the form of a thumbnail, allowing quick positioning of graph operation locations.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "⚠️ Note",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": ", The Minimap plugin is currently incompatible with React Node rendering mechanism. When using Minimap functionality, it is recommended to implement node rendering through ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "built-in nodes",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": " or ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "custom nodes",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": ".",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "The Minimap plugin is mainly applicable to the following scenarios:",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "Providing a global view for quick area positioning",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Navigation and interaction assistance, allowing quick positioning to the target location through the minimap",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "Below is a simple example of initializing the Minimap plugin:",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      key: 'minimap',\n      type: 'minimap',\n      size: [240, 160],\n    },\n  ],\n});\n",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "minimap.md",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: Array.from({ length: 50 }).map((_, i) => ({\n        id: `node-${i}`,\n        x: Math.random() * 500,\n        y: Math.random() * 300,\n      })),\n      edges: Array.from({ length: 100 }).map((_, i) => ({\n        id: `edge-${i}`,\n        source: `node-${Math.floor(Math.random() * 50)}`,\n        target: `node-${Math.floor(Math.random() * 50)}`,\n      })),\n    },\n    node: { style: { fill: '#7e3feb' } },\n    edge: { style: { stroke: '#8b9baf' } },\n    layout: { type: 'force' },\n    behaviors: ['drag-canvas'],\n    plugins: [{ type: 'minimap', key: 'minimap', size: [240, 160], position: 'right-bottom' }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const options = {\n      type: 'minimap',\n      width: 240,\n      height: 160,\n      shape: 'key',\n      padding: 10,\n      position: 'right-bottom',\n      maskStyleBorder: '1px solid #ddd',\n      maskStyleBackground: 'rgba(0, 0, 0, 0.1)',\n      containerStyleBorder: '1px solid #ddd',\n      containerStyleBackground: '#fff',\n      delay: 128,\n    };\n    const optionFolder = gui.addFolder('Minimap Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder\n      .add(options, 'width', 100, 500, 1)\n      .listen()\n      .onChange((value) => {\n        graph.updatePlugin({\n          key: 'minimap',\n          size: [value, options.height],\n        });\n        graph.render();\n      });\n    optionFolder\n      .add(options, 'height', 100, 500, 1)\n      .listen()\n      .onChange((value) => {\n        graph.updatePlugin({\n          key: 'minimap',\n          size: [options.width, value],\n        });\n        graph.render();\n      });\n    optionFolder\n      .add(options, 'shape', ['key'])\n      .listen()\n      .onChange((value) => {\n        graph.updatePlugin({\n          key: 'minimap',\n          shape: value,\n        });\n        graph.render();\n      });\n    optionFolder\n      .add(options, 'padding', 0, 50, 1)\n      .listen()\n      .onChange((value) => {\n        graph.updatePlugin({\n          key: 'minimap',\n          padding: value,\n        });\n        graph.render();\n      });\n    optionFolder\n      .add(options, 'position', ['right-bottom', 'left-bottom', 'right-top', 'left-top'])\n      .listen()\n      .onChange((value) => {\n        graph.updatePlugin({\n          key: 'minimap',\n          position: value,\n        });\n        graph.render();\n      });\n    optionFolder\n      .addColor(options, 'maskStyleBorder')\n      .listen()\n      .onChange((value) => {\n        graph.updatePlugin({\n          key: 'minimap',\n          maskStyle: { ...options.maskStyle, border: value },\n        });\n        graph.render();\n      });\n    optionFolder\n      .addColor(options, 'maskStyleBackground')\n      .listen()\n      .onChange((value) => {\n        graph.updatePlugin({\n          key: 'minimap',\n          maskStyle: { ...options.maskStyle, background: value },\n        });\n        graph.render();\n      });\n    optionFolder\n      .addColor(options, 'containerStyleBorder')\n      .listen()\n      .onChange((value) => {\n        graph.updatePlugin({\n          key: 'minimap',\n          containerStyle: { ...options.containerStyle, border: value },\n        });\n        graph.render();\n      });\n    optionFolder\n      .addColor(options, 'containerStyleBackground')\n      .listen()\n      .onChange((value) => {\n        graph.updatePlugin({\n          key: 'minimap',\n          containerStyle: { ...options.containerStyle, background: value },\n        });\n        graph.render();\n      });\n    optionFolder\n      .add(options, 'delay', 0, 500, 1)\n      .listen()\n      .onChange((value) => {\n        graph.updatePlugin({\n          key: 'minimap',\n          delay: value,\n        });\n        graph.render();\n      });\n\n    // Update the maskStyle and containerStyle in the options object\n    Object.defineProperty(options, 'maskStyle', {\n      get: () => ({\n        border: options.maskStyleBorder,\n        background: options.maskStyleBackground,\n      }),\n      set: (value) => {\n        options.maskStyleBorder = value.border;\n        options.maskStyleBackground = value.background;\n      },\n    });\n\n    Object.defineProperty(options, 'containerStyle', {\n      get: () => ({\n        border: options.containerStyleBorder,\n        background: options.containerStyleBackground,\n      }),\n      set: (value) => {\n        options.containerStyleBorder = value.border;\n        options.containerStyleBackground = value.background;\n      },\n    });\n  },\n);\n",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "Property",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Default Value",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Plugin type",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "minimap",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Unique identifier for the plugin, used for subsequent updates",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "className",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Class name of the thumbnail canvas, not effective when an external container is passed",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "container",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Container to which the thumbnail is mounted, if not provided, it is mounted to the container where the Graph is located",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "HTMLElement | string",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "containerStyle",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Style of the thumbnail container, not effective when an external container is passed",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Partial<CSSStyleDeclaration>",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "delay",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Delay update time (milliseconds) for performance optimization",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "128",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "filter",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Filter for filtering out elements that do not need to be displayed",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "(id: string, elementType: ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "combo",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": ") => boolean",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "maskStyle",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Style of the mask",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Partial<CSSStyleDeclaration>",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "padding",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Padding",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "number | number[]",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "position",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Position of the thumbnail relative to the canvas",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "[number, number] | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "left",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "right",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "top",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "bottom",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "left-top",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "left-bottom",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "right-top",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "right-bottom",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "top-left",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "top-right",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "bottom-left",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "bottom-right",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "center",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "right-bottom",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "renderer",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Renderer, default is Canvas renderer",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "IRenderer",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "shape",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Method for generating element thumbnails",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ((id: string, elementType: ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "combo",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": ", element: DisplayObject) => DisplayObject)",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "size",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Width and height",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "[number, number]",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "[240, 160]",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": "Set the style of the thumbnail container, not effective when an external container is passed. Inherits all CSS style properties (CSSStyleDeclaration), and you can use any valid CSS property to configure the style of the thumbnail container.",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "Below are some common configurations:",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "Property",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Default Value",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Required",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "border",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Container border style",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "1px solid #ddd",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "✓",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "background",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Container background color",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "#fff",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "✓",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "borderRadius",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Container border radius",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "boxShadow",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Container shadow effect",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "padding",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Container padding",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "margin",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Container margin",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "opacity",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Opacity",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "Specify the style of the mask. Inherits all CSS style properties (CSSStyleDeclaration), and you can use any valid CSS property to configure the style of the thumbnail container.",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "Below are some common configurations:",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "Property",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Default Value",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Required",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "border",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Container border style",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "1px solid #ddd",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "✓",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "background",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Container background color",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "rgba(0, 0, 0, 0.1)",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "✓",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "borderRadius",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Container border radius",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "boxShadow",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Container shadow effect",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "padding",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Container padding",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "margin",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Container margin",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "opacity",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Opacity",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "Position of the thumbnail relative to the canvas, the thumbnail position configuration supports array form and preset value form.",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "Array form [number, number] represents relative position, with a value range of 0~1. For example: [0, 0] represents the top left corner of the canvas, [1, 1] represents the bottom right corner of the canvas.",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "Preset value form is used to set the fixed position of the thumbnail on the canvas, optional values are: ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "left",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "right",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "top",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "bottom",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "left-top",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "left-bottom",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "right-top",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "right-bottom",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "top-left",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "top-right",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "bottom-left",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "bottom-right",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": " | ",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "center",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  plugins:[\n    {\n      ... // Other configurations\n      key: 'minimap',\n      type: 'minimap',\n      position: 'right-bottom'  // Modify the position of the minimap here\n    }\n  ]\n})\n",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "The effect is as follows:",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 300,\n  data: {\n    nodes: Array.from({ length: 50 }).map((_, i) => ({\n      id: `node-${i}`,\n      x: Math.random() * 500,\n      y: Math.random() * 300,\n    })),\n    edges: Array.from({ length: 100 }).map((_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 50)}`,\n      target: `node-${Math.floor(Math.random() * 50)}`,\n    })),\n  },\n  node: { style: { fill: '#7e3feb' } },\n  edge: { style: { stroke: '#8b9baf' } },\n  layout: { type: 'force' },\n  behaviors: ['drag-canvas'],\n  plugins: [{ type: 'minimap', key: 'minimap', size: [240, 160], position: 'right-bottom' }],\n});\n\ngraph.render();\n",
        "paraId": 21,
        "tocIndex": 7
    },
    {
        "value": "Set the width and height of the minimap, default value is [240, 160]",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  plugins:[\n    {\n      ... // Other configurations\n      key: 'minimap',\n      type: 'minimap',\n      size: [200, 120]  // Set the width and height of the minimap\n    }\n  ]\n})\n",
        "paraId": 23,
        "tocIndex": 8
    },
    {
        "value": "The effect is as follows:",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 300,\n  data: {\n    nodes: Array.from({ length: 50 }).map((_, i) => ({\n      id: `node-${i}`,\n      x: Math.random() * 500,\n      y: Math.random() * 300,\n    })),\n    edges: Array.from({ length: 100 }).map((_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 50)}`,\n      target: `node-${Math.floor(Math.random() * 50)}`,\n    })),\n  },\n  node: { style: { fill: '#7e3feb' } },\n  edge: { style: { stroke: '#8b9baf' } },\n  layout: { type: 'force' },\n  behaviors: ['drag-canvas'],\n  plugins: [{ type: 'minimap', key: 'minimap', size: [200, 120], position: 'right-bottom' }],\n});\n\ngraph.render();\n",
        "paraId": 25,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  data: { nodes: Array.from({ length: 20 }).map((_, i) => ({ id: `node${i}` })) },\n  behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n  plugins: [\n    {\n      type: 'minimap',\n      size: [240, 160],\n    },\n  ],\n  node: {\n    palette: 'spectral',\n  },\n  layout: {\n    type: 'circular',\n  },\n  autoFit: 'view',\n});\n\ngraph.render();\n",
        "paraId": 26,
        "tocIndex": 9
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
//# sourceMappingURL=docs_manual_plugin_Minimap_en_md_q_hK4X-async.js.map