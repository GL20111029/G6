((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/getting-started/quick-start.en.md?type=text'],
{ "docs/manual/getting-started/quick-start.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/getting-started/quick-start.en.md?watch=parent");
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
        "value": "Visit ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Chart Examples",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " to experience G6 online without any environment setup.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "In this example, we will create a simple graph using G6 based on an HTML page.",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Copy the following code into an HTML file and then open this file in a browser:",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "<!-- Prepare a container -->\n<div id=\"container\" style=\"width: 500px; height: 500px\"></div>\n\n<!-- Import G6's JS file -->\n<script src=\"https://unpkg.com/@antv/g6@5/dist/g6.min.js\"></script>\n\n<script>\n  const { Graph } = G6;\n\n  fetch('https://assets.antv.antgroup.com/g6/graph.json')\n    .then((res) => res.json())\n    .then((data) => {\n      const graph = new Graph({\n        container: 'container',\n        autoFit: 'view',\n        data,\n        node: {\n          style: {\n            size: 10,\n          },\n          palette: {\n            field: 'group',\n            color: 'tableau',\n          },\n        },\n        layout: {\n          type: 'd3-force',\n          manyBody: {},\n          x: {},\n          y: {},\n        },\n        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n      });\n\n      graph.render();\n    });\n</script>\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "You will get a graph as shown below:",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "fetch('https://assets.antv.antgroup.com/g6/graph.json')\n  .then((res) => res.json())\n  .then((data) =>\n    createGraph(\n      {\n        data,\n        autoFit: 'view',\n        animation: false,\n        node: {\n          style: {\n            size: 10,\n          },\n          palette: {\n            field: 'group',\n            color: 'tableau',\n          },\n        },\n        layout: {\n          type: 'd3-force',\n          animation: false,\n          manyBody: {},\n          x: {},\n          y: {},\n        },\n        behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n      },\n      { width: 500, height: 500 },\n    ),\n  );\n",
        "paraId": 6,
        "tocIndex": 1
    },
    {
        "value": "Let's analyze the following code snippet:",
        "paraId": 7,
        "tocIndex": 1
    },
    {
        "value": "First, we create a ",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "div",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": " element to serve as the container for the graph:",
        "paraId": 8,
        "tocIndex": 1
    },
    {
        "value": "<div id=\"container\" style=\"width: 500px; height: 500px\"></div>\n",
        "paraId": 9,
        "tocIndex": 1
    },
    {
        "value": "Then, include the G6's JS file:",
        "paraId": 10,
        "tocIndex": 1
    },
    {
        "value": "<script src=\"https://unpkg.com/@antv/g6@5/dist/g6.min.js\"></script>\n",
        "paraId": 11,
        "tocIndex": 1
    },
    {
        "value": "Use the ",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "fetch",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": " method to obtain the graph's data:",
        "paraId": 12,
        "tocIndex": 1
    },
    {
        "value": "fetch('https://assets.antv.antgroup.com/g6/graph.json').then((res) => res.json());\n",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "Finally, create an instance of the graph, pass in the configuration object, and call the ",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "render",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": " method to render the graph:",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "const { Graph } = G6;\n\nconst graph = new Graph({\n  container: 'container',\n  autoFit: 'view',\n  data,\n  node: {\n    style: {\n      size: 10,\n    },\n    palette: {\n      field: 'group',\n      color: 'tableau',\n    },\n  },\n  layout: {\n    type: 'd3-force',\n    manyBody: {},\n    x: {},\n    y: {},\n  },\n  behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element'],\n});\n\ngraph.render();\n",
        "paraId": 15,
        "tocIndex": 1
    },
    {
        "value": "If you are using frameworks such as React, Vue, Angular, etc., you can refer to:",
        "paraId": 16,
        "tocIndex": 1
    },
    {
        "value": "Using G6 in React",
        "paraId": 17,
        "tocIndex": 1
    },
    {
        "value": "Using G6 in Vue",
        "paraId": 18,
        "tocIndex": 1
    },
    {
        "value": "Using G6 in Angular",
        "paraId": 19,
        "tocIndex": 1
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
//# sourceMappingURL=docs_manual_getting-started_quick-start_en_md_q_hK4X-async.js.map