((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/transform.zh.md?type=text'],
{ "docs/api/transform.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/transform.zh.md?watch=parent");
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
        "value": "数据处理",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "（Transform）是 G6 中一项强大的功能，允许在图渲染过程中对数据进行处理和转换。通过数据处理器，您可以实现各种数据处理需求，比如：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "数据过滤：根据条件筛选需要显示的节点和边",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "数据计算：基于原始数据生成新的属性，如根据节点连接数计算节点大小，但不污染原始数据",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "数据聚合：将大量节点聚合为少量节点，提高大规模图表的性能",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "数据处理发生在渲染流程的特定阶段，可以灵活地改变最终呈现的结果，而无需修改原始数据源。",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "获取当前图表中所有已配置的数据处理器。",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "getTransforms(): TransformOptions;\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "返回值",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "类型",
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
        "value": "描述",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": ": 当前图表中已配置的所有数据处理器",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "示例",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "// 获取当前所有数据处理器\nconst transforms = graph.getTransforms();\nconsole.log('当前图表的数据处理器:', transforms);\n",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "设置图表的数据处理器，将替换所有现有的数据处理器。",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "setTransforms(transforms: TransformOptions | ((prev: TransformOptions) => TransformOptions)): void;\n",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "参数",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "参数",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "transforms",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "新的数据处理器配置，或一个基于当前配置返回新配置的函数",
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
        "value": "说明",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "数据处理器能够在图渲染过程的不同阶段对数据进行处理。设置的数据处理会全量替换原有的数据处理，如果需要在现有数据处理基础上添加新的数据处理，可以使用函数式更新方式。",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "示例 1",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": ": 设置基本数据处理",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "graph.setTransforms(['process-parallel-edges', 'map-node-size']);\n",
        "paraId": 19,
        "tocIndex": 3
    },
    {
        "value": "示例 2",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": ": 设置带配置的数据处理",
        "paraId": 20,
        "tocIndex": 3
    },
    {
        "value": "graph.setTransforms([\n  // 字符串形式（使用默认配置）\n  'process-parallel-edges',\n\n  // 对象形式（自定义配置）\n  {\n    type: 'process-parallel-edges',\n    key: 'my-process-parallel-edges',\n    distance: 20, // 平行边之间的距离\n  },\n]);\n",
        "paraId": 21,
        "tocIndex": 3
    },
    {
        "value": "示例 3",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": ": 使用函数式更新",
        "paraId": 22,
        "tocIndex": 3
    },
    {
        "value": "// 添加新的数据处理到现有配置\ngraph.setTransforms((currentTransforms) => [\n  ...currentTransforms,\n  {\n    type: 'map-node-size',\n    key: 'my-map-node-size',\n    maxSize: 100,\n    minSize: 20,\n  },\n]);\n",
        "paraId": 23,
        "tocIndex": 3
    },
    {
        "value": "更新指定的数据处理器配置，需要通过 ",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": " 标识要更新的数据处理。",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "updateTransform(transform: UpdateTransformOption): void;\n",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 26,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "transform",
        "paraId": 27,
        "tocIndex": 4
    },
    {
        "value": "更新的数据处理配置",
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
        "value": "说明",
        "paraId": 29,
        "tocIndex": 4
    },
    {
        "value": "如果要更新一个数据处理器，必须在原始数据处理配置中指定 ",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": " 字段，以便能够准确找到并更新该数据处理。",
        "paraId": 30,
        "tocIndex": 4
    },
    {
        "value": "示例",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": ": 更新数据处理配置",
        "paraId": 31,
        "tocIndex": 4
    },
    {
        "value": "// 初始设置数据处理时指定 key\ngraph.setTransforms([\n  {\n    type: 'process-parallel-edges',\n    key: 'my-process-parallel-edges',\n    distance: 20,\n  },\n]);\n\n// 更新平行边距离\ngraph.updateTransform({\n  key: 'my-process-parallel-edges',\n  distance: 30,\n});\n",
        "paraId": 32,
        "tocIndex": 4
    },
    {
        "value": "数据处理器配置类型，表示一组数据处理配置的数组。",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "type TransformOptions = (CustomTransformOption | ((this: Graph) => CustomTransformOption))[];\n",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "自定义数据处理配置接口，用于配置数据处理参数。",
        "paraId": 35,
        "tocIndex": 7
    },
    {
        "value": "type CustomTransformOption = {\n  // 数据处理类型\n  type: string;\n\n  // 数据处理唯一标识\n  key?: string;\n\n  // 针对不同类型的数据处理，还可能有其他配置项\n  [configKey: string]: any;\n};\n",
        "paraId": 36,
        "tocIndex": 7
    },
    {
        "value": "更新数据处理的配置接口，用于动态修改数据处理参数。",
        "paraId": 37,
        "tocIndex": 8
    },
    {
        "value": "type UpdateTransformOption = {\n  // 要更新的数据处理的唯一标识\n  key: string;\n\n  // 其他要更新的配置项\n  [configKey: string]: unknown;\n};\n",
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
//# sourceMappingURL=docs_api_transform_zh_md_q_hK4X-async.js.map