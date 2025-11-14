((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/IndentedLayout.zh.md?type=text'],
{ "docs/manual/layout/IndentedLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/IndentedLayout.zh.md?watch=parent");
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
        "value": "Indented（缩进树）布局是一种通过水平方向的缩进量来表示树节点层级的布局方式。每个元素占据一行或一列，常用于文件目录结构、组织架构等场景。该布局结构清晰，便于展示层级关系。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "文件目录结构可视化",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "组织架构树",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "分类体系展示",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "需要突出层级关系的树状数据",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "IndentedLayout 支持通用布局配置项和专有配置项，详见下表。",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "type",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "布局类型，需为 'indented'",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "'indented'",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "direction",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "布局方向，根节点在左/右/中间，详见下方说明",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "'LR' | 'RL' | 'H'",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "'LR'",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "indent",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "列间间距，支持固定值或函数",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number | (d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "20",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getWidth",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "获取每个节点宽度，仅 direction='H' 时生效",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getHeight",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "获取每个节点高度",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "getSide",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "节点排布在根节点的左/右侧，设置后 direction='H' 失效",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(d?: Node) => 'left' | 'right'",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "dropCap",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "每个节点的第一个子节点是否换行",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "true",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "isLayoutInvisibleNodes",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "不可见节点是否参与布局（preLayout=true 时生效）",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "nodeFilter",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "参与该布局的节点",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "(node: NodeData) => boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "() => true",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "preLayout",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "使用前布局，在初始化元素前计算布局",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "false",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "enableWorker",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "是否在 WebWorker 中运行布局",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "boolean",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "iterations",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "迭代布局的迭代次数",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "number",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "direction",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "'LR'",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "：根节点在左，向右布局\n",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "'RL'",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "：根节点在右，向左布局\n",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "'H'",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "：根节点在中间，水平对称布局\n",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "indent",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "固定数值：所有层级缩进一致",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "函数：(d?: Node) => number，可根据节点自定义缩进",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "示例：\n",
        "paraId": 7,
        "tocIndex": 3
    },
    {
        "value": "(d) => {\n  if (d.parent?.id === 'testId') return d.parent.x + 50;\n  return 100;\n};\n",
        "paraId": 8,
        "tocIndex": 3
    },
    {
        "value": "getWidth/getHeight",
        "paraId": 9,
        "tocIndex": 3
    },
    {
        "value": "用于自定义每个节点的宽度/高度，常用于自适应内容",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "示例：\n",
        "paraId": 10,
        "tocIndex": 3
    },
    {
        "value": "(d) => (d.id === 'testId' ? 50 : 100);\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "getSide",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "指定节点在根节点的哪一侧，仅 direction='H' 时生效",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "示例：\n",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "(d) => (d.id === 'testId' ? 'left' : 'right');\n",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "更多示例可参考 ",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "在线 Demo",
        "paraId": 15,
        "tocIndex": 4
    },
    {
        "value": "import { Graph, treeToGraphData } from '@antv/g6';\n\nfetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      data: treeToGraphData(data),\n      autoFit: 'view',\n      layout: {\n        type: 'indented',\n        direction: 'H',\n        indent: 80,\n        getHeight: () => 16,\n        getWidth: () => 32,\n      },\n    });\n    graph.render();\n  });\n",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "// ... 代码同上，layout.direction: 'LR'\n",
        "paraId": 17,
        "tocIndex": 6
    },
    {
        "value": "// ... 代码同上，layout.direction: 'RL'\n",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "layout: {\n  type: 'indented',\n  direction: 'H',\n  indent: 80,\n  getHeight: () => 16,\n  getWidth: () => 32,\n  getSide: (d) => {\n    if (d.id === 'Regression' || d.id === 'Classification') return 'left';\n    return 'right';\n  },\n}\n",
        "paraId": 19,
        "tocIndex": 8
    },
    {
        "value": "layout: {\n  type: 'indented',\n  direction: 'LR',\n  indent: 80,\n  getHeight: () => 16,\n  getWidth: () => 32,\n  dropCap: false,\n}\n",
        "paraId": 20,
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
//# sourceMappingURL=docs_manual_layout_IndentedLayout_zh_md_q_hK4X-async.js.map