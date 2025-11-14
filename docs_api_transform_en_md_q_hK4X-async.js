((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/transform.en.md?type=text'],
{ "docs/api/transform.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/transform.en.md?watch=parent");
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
        "value": "Data Transformation",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " is a powerful feature in G6 that allows for processing and transforming data during the graph rendering process. With data transformers, you can achieve various data processing needs, such as:",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "Data Filtering: Filter nodes and edges to be displayed based on conditions",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Data Calculation: Generate new attributes based on original data, such as calculating node size based on the number of connections, without polluting the original data",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Data Aggregation: Aggregate a large number of nodes into fewer nodes to improve the performance of large-scale graphs",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Data transformation occurs at specific stages of the rendering process, allowing flexible changes to the final presentation without modifying the original data source.",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Retrieve all configured data transformers in the current graph.",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "getTransforms(): TransformOptions;\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Return Value",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": ": ",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "TransformOptions",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": ": All configured data transformers in the current graph",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Example",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "// Retrieve all data transformers\nconst transforms = graph.getTransforms();\nconsole.log('Data transformers in the current graph:', transforms);\n",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "Set the data transformers for the graph, replacing all existing transformers.",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "setTransforms(transforms: TransformOptions | ((prev: TransformOptions) => TransformOptions)): void;\n",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "Parameters",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Parameter",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "transforms",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "New data transformer configurations, or a function returning new configurations based on the current ones",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "TransformOptions",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": " | (prev: TransformOptions) => TransformOptions",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Note",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "Data transformers can process data at different stages of the graph rendering process. The set data transformations will completely replace the original ones. To add new data transformations based on existing ones, you can use functional updates.",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "Example 1",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": ": Set basic data transformations",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "graph.setTransforms(['process-parallel-edges', 'map-node-size']);\n",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "Example 2",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": ": Set data transformations with configurations",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "graph.setTransforms([\n  // String form (using default configuration)\n  'process-parallel-edges',\n\n  // Object form (custom configuration)\n  {\n    type: 'process-parallel-edges',\n    key: 'my-process-parallel-edges',\n    distance: 20, // Distance between parallel edges\n  },\n]);\n",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": "Example 3",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": ": Use functional updates",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "// Add new data transformations to existing configurations\ngraph.setTransforms((currentTransforms) => [\n  ...currentTransforms,\n  {\n    type: 'map-node-size',\n    key: 'my-map-node-size',\n    maxSize: 100,\n    minSize: 20,\n  },\n]);\n",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "Update the configuration of a specified data transformer, identified by the ",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": " of the transformer to be updated.",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "updateTransform(transform: UpdateTransformOption): void;\n",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 26,
        "tocIndex": 4
    },
    {
        "value": "Parameter",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "transform",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Configuration of the data transformer to be updated",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "UpdateTransformOption",
        "paraId": 28,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "Note",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "To update a data transformer, the ",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": " field must be specified in the original data transformer configuration to accurately locate and update the transformer.",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "Example",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": ": Update data transformer configuration",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": "// Specify key when initially setting data transformers\ngraph.setTransforms([\n  {\n    type: 'process-parallel-edges',\n    key: 'my-process-parallel-edges',\n    distance: 20,\n  },\n]);\n\n// Update distance between parallel edges\ngraph.updateTransform({\n  key: 'my-process-parallel-edges',\n  distance: 30,\n});\n",
        "paraId": 32,
        "tocIndex": 4
    },
    {
        "value": "Data transformer configuration type, representing an array of data transformer configurations.",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "type TransformOptions = (CustomTransformOption | ((this: Graph) => CustomTransformOption))[];\n",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "Custom data transformer configuration interface, used to configure data processing parameters.",
        "paraId": 35,
        "tocIndex": 7
    },
    {
        "value": "type CustomTransformOption = {\n  // Data processing type\n  type: string;\n\n  // Unique identifier for the data transformer\n  key?: string;\n\n  // Other configuration items for different types of data processing\n  [configKey: string]: any;\n};\n",
        "paraId": 36,
        "tocIndex": 7
    },
    {
        "value": "Configuration interface for updating data transformers, used to dynamically modify data processing parameters.",
        "paraId": 37,
        "tocIndex": 8
    },
    {
        "value": "type UpdateTransformOption = {\n  // Unique identifier of the data transformer to be updated\n  key: string;\n\n  // Other configuration items to be updated\n  [configKey: string]: unknown;\n};\n",
        "paraId": 38,
        "tocIndex": 8
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
//# sourceMappingURL=docs_api_transform_en_md_q_hK4X-async.js.map