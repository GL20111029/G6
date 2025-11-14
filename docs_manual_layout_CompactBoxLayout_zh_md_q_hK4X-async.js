((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/CompactBoxLayout.zh.md?type=text'],
{ "docs/manual/layout/CompactBoxLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/CompactBoxLayout.zh.md?watch=parent");
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
        "value": "紧凑树布局适用于结构化树形数据的展示，基于经典的 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Reingold–Tilford tidy 布局算法",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": " 演进而来，通过布局时综合考虑每个树节点的包围盒，有效保持树结构的紧凑性与层次清晰。参考更多 CompactBox 布局",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "样例",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "和",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "源码",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "决策树: 通过紧凑树布局可简单直观的图形化展示每个决策路径",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "知识图谱: 展示概念之间的层级关系和连接，紧凑布局可以在有限空间内呈现复杂的知识网络",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'compact-box',\n    direction: 'LR',\n    getHeight: () => 16,\n    getWidth: () => 16,\n    getVGap: () => 16,\n    getHGap: () => 40,\n  },\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "布局类型",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "compact-box",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "direction",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "布局方向，",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "可选值",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "RL",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "TB",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "BT",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "H",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " | ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "V",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getSide",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "设置节点排布在根节点的左侧/右侧，如未设置，则算法自动分配左侧/右侧。注意：该参数仅在 ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "H",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": " 布局方向上生效",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d: { data?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": " }) => string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getId",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "节点 id 的回调函数",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": ") => string",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getWidth",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "计算每个节点的宽度",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": ") => number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getHeight",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "计算每个节点的高度",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": ") => number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getHGap",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "计算每个节点的水平间隙",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": ") => number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "getVGap",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "计算每个节点的垂直间隙",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "(d?: ",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "NodeData",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": ") => number",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "radial",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "是否启用辐射状布局，",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "说明",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "LR",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "RL",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "TB",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "BT",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "H",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "V",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "Default:",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": " ",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "LR",
        "paraId": 13,
        "tocIndex": 4
    },
    {
        "value": "树布局方向",
        "paraId": 14,
        "tocIndex": 4
    },
    {
        "value": "TB",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "：根节点在上，往下布局",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "BT",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "：根节点在下，往上布局",
        "paraId": 16,
        "tocIndex": 4
    },
    {
        "value": "LR",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "：根节点在左，往右布局",
        "paraId": 17,
        "tocIndex": 4
    },
    {
        "value": "RL",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "：根节点在右，往左布局",
        "paraId": 18,
        "tocIndex": 4
    },
    {
        "value": "H",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "：根节点在中间，水平对称布局。可传入 ",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "getSide",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": " 方法指定每个节点的左右分布逻辑",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "V",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "：根节点在中间，垂直对称布局",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "(d: { data?: ",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "NodeData",
        "paraId": 22,
        "tocIndex": 5
    },
    {
        "value": " }) => string",
        "paraId": 21,
        "tocIndex": 5
    },
    {
        "value": "设置节点排布在根节点的左侧/右侧。注意：该参数仅在 ",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "direction",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": " 为 ",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "H",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": " 时生效。如未设置，会默认将子节点前半部分放置在右侧，后半部分放置在左侧，参考 ",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "getSide自动计算逻辑",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "。",
        "paraId": 23,
        "tocIndex": 5
    },
    {
        "value": "示例：",
        "paraId": 24,
        "tocIndex": 5
    },
    {
        "value": "({ data }) => {\n  // data 是一个节点\n  if (data.id === 'test-child-id') return 'right';\n  return 'left';\n};\n",
        "paraId": 25,
        "tocIndex": 5
    },
    {
        "value": "(d?: ",
        "paraId": 26,
        "tocIndex": 6
    },
    {
        "value": "NodeData",
        "paraId": 27,
        "tocIndex": 6
    },
    {
        "value": ") => string",
        "paraId": 26,
        "tocIndex": 6
    },
    {
        "value": "节点 id 的回调函数",
        "paraId": 28,
        "tocIndex": 6
    },
    {
        "value": "示例：",
        "paraId": 29,
        "tocIndex": 6
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  return d.id + '_node';\n};\n",
        "paraId": 30,
        "tocIndex": 6
    },
    {
        "value": "(d?: ",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "NodeData",
        "paraId": 32,
        "tocIndex": 7
    },
    {
        "value": ") => number",
        "paraId": 31,
        "tocIndex": 7
    },
    {
        "value": "每个节点的宽度",
        "paraId": 33,
        "tocIndex": 7
    },
    {
        "value": "示例：",
        "paraId": 34,
        "tocIndex": 7
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 35,
        "tocIndex": 7
    },
    {
        "value": "(d?: ",
        "paraId": 36,
        "tocIndex": 8
    },
    {
        "value": "NodeData",
        "paraId": 37,
        "tocIndex": 8
    },
    {
        "value": ") => number",
        "paraId": 36,
        "tocIndex": 8
    },
    {
        "value": "每个节点的高度",
        "paraId": 38,
        "tocIndex": 8
    },
    {
        "value": "示例：",
        "paraId": 39,
        "tocIndex": 8
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 40,
        "tocIndex": 8
    },
    {
        "value": "(d?: ",
        "paraId": 41,
        "tocIndex": 9
    },
    {
        "value": "NodeData",
        "paraId": 42,
        "tocIndex": 9
    },
    {
        "value": ") => number",
        "paraId": 41,
        "tocIndex": 9
    },
    {
        "value": "每个节点的水平间隙",
        "paraId": 43,
        "tocIndex": 9
    },
    {
        "value": "示例：",
        "paraId": 44,
        "tocIndex": 9
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 45,
        "tocIndex": 9
    },
    {
        "value": "(d?: ",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "NodeData",
        "paraId": 47,
        "tocIndex": 10
    },
    {
        "value": ") => number",
        "paraId": 46,
        "tocIndex": 10
    },
    {
        "value": "每个节点的垂直间隙",
        "paraId": 48,
        "tocIndex": 10
    },
    {
        "value": "示例：",
        "paraId": 49,
        "tocIndex": 10
    },
    {
        "value": "(d) => {\n  // d 是一个节点\n  if (d.id === 'testId') return 50;\n  return 100;\n};\n",
        "paraId": 50,
        "tocIndex": 10
    },
    {
        "value": "boolean",
        "paraId": 51,
        "tocIndex": 11
    },
    {
        "value": "是否按照辐射状布局。若 ",
        "paraId": 52,
        "tocIndex": 11
    },
    {
        "value": "radial",
        "paraId": 52,
        "tocIndex": 11
    },
    {
        "value": " 为 ",
        "paraId": 52,
        "tocIndex": 11
    },
    {
        "value": "true",
        "paraId": 52,
        "tocIndex": 11
    },
    {
        "value": "，建议 ",
        "paraId": 52,
        "tocIndex": 11
    },
    {
        "value": "direction",
        "paraId": 52,
        "tocIndex": 11
    },
    {
        "value": " 设置为 ",
        "paraId": 52,
        "tocIndex": 11
    },
    {
        "value": "'LR'",
        "paraId": 52,
        "tocIndex": 11
    },
    {
        "value": " 或 ",
        "paraId": 52,
        "tocIndex": 11
    },
    {
        "value": "'RL'",
        "paraId": 52,
        "tocIndex": 11
    },
    {
        "value": "import { Graph, treeToGraphData } from '@antv/g6';\n\n/**\n * If the node is a leaf node\n * @param {*} d - node data\n * @returns {boolean} - whether the node is a leaf node\n */\nfunction isLeafNode(d) {\n  return !d.children || d.children.length === 0;\n}\n\nfetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      autoFit: 'view',\n      data: treeToGraphData(data),\n      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-element', 'collapse-expand'],\n      node: {\n        style: {\n          labelText: (d) => d.id,\n          labelPlacement: (d) => (isLeafNode(d) ? 'right' : 'left'),\n          labelBackground: true,\n          ports: [{ placement: 'right' }, { placement: 'left' }],\n        },\n        animation: {\n          enter: false,\n        },\n      },\n      edge: {\n        type: 'cubic-horizontal',\n        animation: {\n          enter: false,\n        },\n      },\n      layout: {\n        type: 'compact-box',\n        direction: 'LR',\n        getHeight: function getHeight() {\n          return 32;\n        },\n        getWidth: function getWidth() {\n          return 32;\n        },\n        getVGap: function getVGap() {\n          return 10;\n        },\n        getHGap: function getHGap() {\n          return 100;\n        },\n      },\n    });\n\n    graph.render();\n  });\n",
        "paraId": 53,
        "tocIndex": 12
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
//# sourceMappingURL=docs_manual_layout_CompactBoxLayout_zh_md_q_hK4X-async.js.map