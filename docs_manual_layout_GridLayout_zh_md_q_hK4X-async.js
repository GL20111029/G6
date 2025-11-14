((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/GridLayout.zh.md?type=text'],
{ "docs/manual/layout/GridLayout.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/layout/GridLayout.zh.md?watch=parent");
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
        "value": "网格布局将节点按照网格形式排列，适用于需要整齐排列节点的场景。该布局支持自动计算行列数，也可以手动指定行列数，并支持防止节点重叠。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "在数据可视化中需要展示矩阵或表格形式的数据关系",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: Array.from({ length: 25 }, (_, i) => ({\n        id: `node-${i}`,\n        data: {\n          value: Math.random() * 100,\n        },\n      })),\n      edges: Array.from({ length: 20 }, (_, i) => ({\n        id: `edge-${i}`,\n        source: `node-${Math.floor(Math.random() * 25)}`,\n        target: `node-${Math.floor(Math.random() * 25)}`,\n      })),\n    },\n    autoFit: 'view',\n    node: {\n      style: {\n        size: 20,\n        label: true,\n        labelText: (datum) => datum.id,\n        labelBackground: true,\n        icon: false,\n      },\n      palette: {\n        type: 'group',\n        field: (datum) => datum.data.value,\n        color: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n      },\n    },\n    edge: {\n      style: {\n        stroke: '#bfbfbf',\n      },\n    },\n    behaviors: ['drag-canvas'],\n    layout: {\n      type: 'grid',\n      cols: 5,\n      rows: 5,\n      width: 400,\n      height: 400,\n      preventOverlap: true,\n      nodeSize: 30,\n      condense: false,\n    },\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const options = {\n      type: 'grid',\n      cols: 5,\n      rows: 5,\n      width: 400,\n      height: 400,\n      preventOverlap: true,\n      nodeSize: 30,\n      condense: false,\n    };\n\n    const optionFolder = gui.addFolder('Grid Layout Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'cols', 2, 10, 1);\n    optionFolder.add(options, 'rows', 2, 10, 1);\n    optionFolder.add(options, 'width', 200, 600, 50);\n    optionFolder.add(options, 'height', 200, 600, 50);\n    optionFolder.add(options, 'preventOverlap');\n    optionFolder.add(options, 'nodeSize', 10, 50, 5);\n    optionFolder.add(options, 'condense');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.setLayout({\n        type: 'grid',\n        [property]: value,\n      });\n      graph.layout();\n    });\n  },\n);\n",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'grid',\n    begin: [0, 0],\n    cols: 5,\n    rows: 5,\n    width: 300,\n    height: 300,\n    preventOverlap: true,\n    nodeSize: 30,\n    condense: false,\n  },\n});\n",
        "paraId": 3,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "布局类型",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "grid",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "begin",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "网格开始位置（左上角），默认为 ",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "[0, 0]",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "[number, number]",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "[0, 0]",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "cols",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "网格的列数，为 undefined 时算法根据节点数量、布局空间、rows（若指定）自动计算",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "undefined",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "rows",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "网格的行数，为 undefined 时算法根据节点数量、布局空间、cols（若指定）自动计算",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "width",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "布局区域宽度，在 G6 中使用当前容器的宽度作为默认值",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "300",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "height",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "布局区域高度，在 G6 中使用当前容器的高度作为默认值",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "300",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "condense",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "为 false 时表示利用所有可用画布空间，为 true 时表示利用最小的画布空间",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeSize",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "节点大小（直径），用于防止节点重叠时的碰撞检测",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "Size | ((nodeData: Node) => Size)",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "nodeSpacing",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "节点间距，用于调整节点之间的间隔",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "((node?: Node) => number) | number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "position",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "指定每个节点所在的行和列",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "(node?: Node) => { row?: number; col?: number; }",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "undefined",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "preventOverlap",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "是否防止节点重叠，需要配合 nodeSize 或节点数据中的 size 属性使用",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "false",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "preventOverlapPadding",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "避免重叠时节点的间距 padding，preventOverlap 为 true 时生效",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "10",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "sortBy",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "指定排序的依据（节点属性名），数值越高则该节点被放置得越中心。若为 undefined，则会计算节点的度数，度数越高，节点将被放置得越中心",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "undefined",
        "paraId": 4,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": " ",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "Default:",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": " ",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "false",
        "paraId": 5,
        "tocIndex": 5
    },
    {
        "value": "是否防止重叠",
        "paraId": 6,
        "tocIndex": 5
    },
    {
        "value": "必须配合下面属性 nodeSize 或节点数据中的 data.size 属性，只有在数据中设置了 data.size 或在该布局中配置了与当前图节点大小相同的 nodeSize 值，才能够进行节点重叠的碰撞检测",
        "paraId": 7,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "Default:",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": " ",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "10",
        "paraId": 8,
        "tocIndex": 6
    },
    {
        "value": "避免重叠时节点的间距 padding，preventOverlap 为 true 时生效",
        "paraId": 9,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": " ",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "Default:",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": " ",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "undefined",
        "paraId": 10,
        "tocIndex": 7
    },
    {
        "value": "指定排序的依据（节点属性名），数值越高则该节点被放置得越中心。若为 undefined，则会计算节点的度数，度数越高，节点将被放置得越中心",
        "paraId": 11,
        "tocIndex": 7
    },
    {
        "value": "在 G6 中使用当前容器的宽度作为 grid 布局 width 的默认值。单独使用此布局时默认值为 300",
        "paraId": 12,
        "tocIndex": 7
    },
    {
        "value": "最简单的配置方式：",
        "paraId": 13,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'grid',\n    cols: 5,\n    rows: 5,\n  },\n  data: {\n    nodes: Array.from({ length: 25 }, (_, i) => ({\n      id: `node-${i}`,\n      data: {\n        value: Math.random() * 100,\n      },\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 25)}`,\n      target: `node-${Math.floor(Math.random() * 25)}`,\n    })),\n  },\n});\n",
        "paraId": 14,
        "tocIndex": 9
    },
    {
        "value": "效果如下：",
        "paraId": 15,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  layout: {\n    type: 'grid',\n    cols: 5,\n    rows: 5,\n  },\n  data: {\n    nodes: Array.from({ length: 25 }, (_, i) => ({\n      id: `node-${i}`,\n      data: {\n        value: Math.random() * 100,\n      },\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 25)}`,\n      target: `node-${Math.floor(Math.random() * 25)}`,\n    })),\n  },\n  node: {\n    style: {\n      size: 20,\n      label: true,\n      labelText: (datum) => datum.id,\n      labelBackground: true,\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#bfbfbf',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 16,
        "tocIndex": 9
    },
    {
        "value": "可以通过多种方式自定义网格布局：",
        "paraId": 17,
        "tocIndex": 10
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'grid',\n    begin: [50, 50], // 从坐标 [50, 50] 开始布局\n    cols: 4, // 指定 4 列\n    rows: 6, // 指定 6 行\n    width: 400, // 布局区域宽度\n    height: 600, // 布局区域高度\n    preventOverlap: true, // 防止节点重叠\n    nodeSize: 30, // 节点大小\n    condense: true, // 使用最小空间\n    sortBy: 'value', // 按 value 属性排序\n  },\n  data: {\n    nodes: Array.from({ length: 24 }, (_, i) => ({\n      id: `node-${i}`,\n      data: {\n        value: Math.random() * 100, // 用于排序的属性\n      },\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 24)}`,\n      target: `node-${Math.floor(Math.random() * 24)}`,\n    })),\n  },\n});\n",
        "paraId": 18,
        "tocIndex": 10
    },
    {
        "value": "效果如下：",
        "paraId": 19,
        "tocIndex": 10
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  layout: {\n    type: 'grid',\n    begin: [50, 50],\n    cols: 4,\n    rows: 6,\n    width: 400,\n    height: 600,\n    preventOverlap: true,\n    nodeSize: 30,\n    condense: true,\n    sortBy: 'value',\n  },\n  data: {\n    nodes: Array.from({ length: 24 }, (_, i) => ({\n      id: `node-${i}`,\n      data: {\n        value: Math.random() * 100,\n      },\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 24)}`,\n      target: `node-${Math.floor(Math.random() * 24)}`,\n    })),\n  },\n  node: {\n    style: {\n      size: 20,\n      label: true,\n      labelText: (datum) => datum.id,\n      labelBackground: true,\n    },\n    palette: {\n      type: 'group',\n      field: (datum) => datum.data.value,\n      color: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#bfbfbf',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 20,
        "tocIndex": 10
    },
    {
        "value": "可以通过 ",
        "paraId": 21,
        "tocIndex": 11
    },
    {
        "value": "position",
        "paraId": 21,
        "tocIndex": 11
    },
    {
        "value": " 属性为特定节点指定位置：",
        "paraId": 21,
        "tocIndex": 11
    },
    {
        "value": "const graph = new Graph({\n  layout: {\n    type: 'grid',\n    cols: 5,\n    rows: 5,\n    position: (node) => {\n      // 为特定节点指定位置\n      if (node.id === 'node-0') return { row: 0, col: 0 }; // 左上角\n      if (node.id === 'node-1') return { row: 0, col: 4 }; // 右上角\n      if (node.id === 'node-2') return { row: 4, col: 0 }; // 左下角\n      if (node.id === 'node-3') return { row: 4, col: 4 }; // 右下角\n      return undefined; // 其他节点自动布局\n    },\n  },\n  data: {\n    nodes: Array.from({ length: 25 }, (_, i) => ({\n      id: `node-${i}`,\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 25)}`,\n      target: `node-${Math.floor(Math.random() * 25)}`,\n    })),\n  },\n});\n",
        "paraId": 22,
        "tocIndex": 11
    },
    {
        "value": "效果如下：",
        "paraId": 23,
        "tocIndex": 11
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 600,\n  height: 400,\n  layout: {\n    type: 'grid',\n    cols: 5,\n    rows: 5,\n    position: (node) => {\n      if (node.id === 'node-0') return { row: 0, col: 0 };\n      if (node.id === 'node-1') return { row: 0, col: 4 };\n      if (node.id === 'node-2') return { row: 4, col: 0 };\n      if (node.id === 'node-3') return { row: 4, col: 4 };\n      return undefined;\n    },\n  },\n  data: {\n    nodes: Array.from({ length: 25 }, (_, i) => ({\n      id: `node-${i}`,\n    })),\n    edges: Array.from({ length: 20 }, (_, i) => ({\n      id: `edge-${i}`,\n      source: `node-${Math.floor(Math.random() * 25)}`,\n      target: `node-${Math.floor(Math.random() * 25)}`,\n    })),\n  },\n  node: {\n    style: {\n      size: 20,\n      label: true,\n      labelText: (datum) => datum.id,\n      labelBackground: true,\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#bfbfbf',\n    },\n  },\n});\n\ngraph.render();\n",
        "paraId": 24,
        "tocIndex": 11
    },
    {
        "value": "Grid布局",
        "paraId": 25,
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
//# sourceMappingURL=docs_manual_layout_GridLayout_zh_md_q_hK4X-async.js.map