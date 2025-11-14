((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/EdgeFilterLens.zh.md?type=text'],
{ "docs/manual/plugin/EdgeFilterLens.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/EdgeFilterLens.zh.md?watch=parent");
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
        "value": "边过滤镜插件可以将关注的边保留在过滤镜范围内，其他边将在该范围内不显示。这是一个重要的可视化探索工具，可以帮助用户聚焦于特定区域的边关系。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "需要聚焦查看局部区域的边关系",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "在复杂网络中突出显示特定节点之间的连接",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "以下是一个简单的 EdgeFilterLens 插件初始化示例：",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-filter-lens',\n      trigger: 'pointermove', // 跟随鼠标移动\n      r: 60, // 设置透镜半径\n      nodeType: 'both', // 边的显示条件\n    },\n  ],\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        // 上部疏散区域\n        { id: 'Myriel', style: { x: 207, y: 78, label: 'Myriel' } },\n        { id: 'Napoleon', style: { x: 127, y: 62, label: 'Napoleon' } },\n        { id: 'CountessdeLo', style: { x: 171, y: 47, label: 'CountessdeLo' } },\n        { id: 'Geborand', style: { x: 106, y: 81, label: 'Geborand' } },\n        { id: 'Champtercier', style: { x: 247, y: 58, label: 'Champtercier' } },\n        { id: 'Cravatte', style: { x: 152, y: 50, label: 'Cravatte' } },\n\n        // 中上部区域\n        { id: 'Mlle.Baptistine', style: { x: 205, y: 141, label: 'Mlle.Baptistine' } },\n        { id: 'Mme.Magloire', style: { x: 275, y: 120, label: 'Mme.Magloire' } },\n        { id: 'Labarre', style: { x: 246, y: 183, label: 'Labarre' } },\n        { id: 'Valjean', style: { x: 342, y: 221, label: 'Valjean' } },\n        { id: 'Marguerite', style: { x: 285, y: 171, label: 'Marguerite' } },\n\n        // 中部密集区域\n        { id: 'Tholomyes', style: { x: 379, y: 158, label: 'Tholomyes' } },\n        { id: 'Listolier', style: { x: 288, y: 80, label: 'Listolier' } },\n        { id: 'Fameuil', style: { x: 349, y: 89, label: 'Fameuil' } },\n        { id: 'Blacheville', style: { x: 381, y: 95, label: 'Blacheville' } },\n        { id: 'Favourite', style: { x: 264, y: 153, label: 'Favourite' } },\n        { id: 'Dahlia', style: { x: 323, y: 170, label: 'Dahlia' } },\n        { id: 'Zephine', style: { x: 306, y: 114, label: 'Zephine' } },\n        { id: 'Fantine', style: { x: 357, y: 187, label: 'Fantine' } },\n\n        // 右侧区域\n        { id: 'Bamatabois', style: { x: 411, y: 156, label: 'Bamatabois' } },\n        { id: 'Perpetue', style: { x: 454, y: 195, label: 'Perpetue' } },\n        { id: 'Simplice', style: { x: 406, y: 227, label: 'Simplice' } },\n\n        // 下部区域\n        { id: 'Cosette', style: { x: 343, y: 248, label: 'Cosette' } },\n        { id: 'Javert', style: { x: 388, y: 263, label: 'Javert' } },\n        { id: 'Fauchelevent', style: { x: 397, y: 276, label: 'Fauchelevent' } },\n        { id: 'Thenardier', style: { x: 317, y: 300, label: 'Thenardier' } },\n        { id: 'Eponine', style: { x: 268, y: 365, label: 'Eponine' } },\n        { id: 'Anzelma', style: { x: 234, y: 303, label: 'Anzelma' } },\n        { id: 'Woman2', style: { x: 304, y: 254, label: 'Woman2' } },\n\n        // 最右侧独立节点\n        { id: 'Gribier', style: { x: 457, y: 160, label: 'Gribier' } },\n        { id: 'Jondrette', style: { x: 510, y: 327, label: 'Jondrette' } },\n      ],\n      edges: [\n        // 上部连接\n        { id: 'e1', source: 'Myriel', target: 'CountessdeLo' },\n        { id: 'e2', source: 'Napoleon', target: 'Myriel' },\n        { id: 'e3', source: 'Geborand', target: 'Napoleon' },\n        { id: 'e4', source: 'Champtercier', target: 'Myriel' },\n        { id: 'e5', source: 'Cravatte', target: 'CountessdeLo' },\n\n        // 中上部连接\n        { id: 'e6', source: 'Mlle.Baptistine', target: 'Mme.Magloire' },\n        { id: 'e7', source: 'Labarre', target: 'Valjean' },\n        { id: 'e8', source: 'Valjean', target: 'Marguerite' },\n        { id: 'e9', source: 'Marguerite', target: 'Mme.Magloire' },\n\n        // 中部密集连接\n        { id: 'e10', source: 'Tholomyes', target: 'Listolier' },\n        { id: 'e11', source: 'Listolier', target: 'Fameuil' },\n        { id: 'e12', source: 'Fameuil', target: 'Blacheville' },\n        { id: 'e13', source: 'Blacheville', target: 'Favourite' },\n        { id: 'e14', source: 'Favourite', target: 'Dahlia' },\n        { id: 'e15', source: 'Dahlia', target: 'Zephine' },\n        { id: 'e16', source: 'Zephine', target: 'Fantine' },\n        { id: 'e17', source: 'Tholomyes', target: 'Fantine' },\n        { id: 'e18', source: 'Valjean', target: 'Fantine' },\n\n        // 右侧连接\n        { id: 'e19', source: 'Bamatabois', target: 'Perpetue' },\n        { id: 'e20', source: 'Perpetue', target: 'Simplice' },\n        { id: 'e21', source: 'Bamatabois', target: 'Gribier' },\n\n        // 下部连接\n        { id: 'e22', source: 'Valjean', target: 'Cosette' },\n        { id: 'e23', source: 'Cosette', target: 'Javert' },\n        { id: 'e24', source: 'Javert', target: 'Fauchelevent' },\n        { id: 'e25', source: 'Fauchelevent', target: 'Thenardier' },\n        { id: 'e26', source: 'Thenardier', target: 'Eponine' },\n        { id: 'e27', source: 'Eponine', target: 'Anzelma' },\n        { id: 'e28', source: 'Woman2', target: 'Cosette' },\n\n        // 跨区域连接\n        { id: 'e29', source: 'Fantine', target: 'Bamatabois' },\n        { id: 'e30', source: 'Javert', target: 'Bamatabois' },\n        { id: 'e31', source: 'Simplice', target: 'Jondrette' },\n        { id: 'e32', source: 'Thenardier', target: 'Jondrette' },\n        { id: 'e33', source: 'Favourite', target: 'Valjean' },\n        { id: 'e34', source: 'Tholomyes', target: 'Cosette' },\n      ],\n    },\n    node: {\n      style: {\n        label: true,\n        size: 16,\n      },\n      palette: {\n        field: (datum) => Math.floor(datum.style?.y / 60),\n      },\n    },\n    edge: {\n      style: {\n        label: true,\n        labelText: (d) => d.data.value?.toString(),\n        stroke: '#ccc',\n        endArrow: true,\n        endArrowType: 'triangle',\n      },\n    },\n    plugins: [\n      {\n        type: 'edge-filter-lens',\n        key: 'edge-filter-lens',\n        r: 80,\n        trigger: 'pointermove',\n      },\n    ],\n  },\n  { width: 600, height: 400 },\n  (gui, graph) => {\n    const TRIGGER_TYPES = ['pointermove', 'click', 'drag'];\n    const NODE_TYPES = ['both', 'source', 'target', 'either'];\n\n    const options = {\n      type: 'edge-filter-lens',\n      r: 80, // 透镜半径\n      trigger: 'pointermove', // 触发方式\n      nodeType: 'both', // 边显示条件\n      minR: 50, // 最小半径\n      maxR: 150, // 最大半径\n      scaleRBy: 'wheel', // 缩放方式\n      style: {\n        fill: '#f0f5ff',\n        fillOpacity: 0.4,\n        stroke: '#1d39c4',\n        strokeOpacity: 0.8,\n        lineWidth: 1.5,\n      },\n      nodeStyle: {\n        size: 35,\n        fill: '#d6e4ff',\n        stroke: '#2f54eb',\n        lineWidth: 2,\n        labelFontSize: 14,\n        labelFontWeight: 'bold',\n        labelFill: '#1d39c4',\n      },\n      edgeStyle: {\n        stroke: '#1d39c4',\n        lineWidth: 2,\n        strokeOpacity: 0.8,\n      },\n    };\n\n    const optionFolder = gui.addFolder('Edge Filter Lens Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'r', 50, 150, 5);\n    optionFolder.add(options, 'trigger', TRIGGER_TYPES);\n    optionFolder.add(options, 'nodeType', NODE_TYPES);\n    optionFolder.add(options, 'minR', 20, 100, 5);\n    optionFolder.add(options, 'maxR', 100, 200, 5);\n\n    optionFolder.onChange(({ property, value }) => {\n      if (property.includes('.')) {\n        const [group, prop] = property.split('.');\n        graph.updatePlugin({\n          key: 'edge-filter-lens',\n          [group]: {\n            ...options[group],\n            [prop]: value,\n          },\n        });\n      } else {\n        graph.updatePlugin({\n          key: 'edge-filter-lens',\n          [property]: value,\n        });\n      }\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 4,
        "tocIndex": 3
    },
    {
        "value": "属性",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "type",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "插件类型",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "edge-filter-lens",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "key",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "插件的唯一标识，可用于获取插件实例或更新插件选项",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "trigger",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "移动透镜的方式：",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "pointermove",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：透镜始终跟随鼠标移动 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "click",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：点击画布时移动透镜到点击位置 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "drag",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：通过拖拽方式移动透镜",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "pointermove",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "click",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "drag",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "pointermove",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "r",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "透镜的半径",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "60",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "maxR",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "透镜的最大半径",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "画布宽高最小值的一半",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "minR",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "透镜的最小半径",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "0",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "scaleRBy",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "缩放透镜半径的方式：",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "wheel",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：通过滚轮缩放透镜的半径",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "wheel",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "nodeType",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "边显示的条件：",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " - ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "both",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：只有起始节点和目标节点都在透镜中时，边才会显示 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " - ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "source",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：只有起始节点在透镜中时，边才会显示",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " - ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "target",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：只有目标节点在透镜中时，边才会显示 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " - ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "either",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：只要起始节点或目标节点有一个在透镜中时，边就会显示",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "both",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "source",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "target",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "either",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "both",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "filter",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "过滤出始终不在透镜中显示的元素",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "(id: string, elementType: ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "node",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "edge",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": " | ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "combo",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": ") => boolean",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "() => true",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "style",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "透镜的样式，",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "配置项",
        "paraId": 6,
        "tocIndex": 4
    },
    {
        "value": "object",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "nodeStyle",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "在透镜中节点的样式",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "NodeStyle",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": " | ((datum: ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "NodeData",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": ") => ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "NodeStyle",
        "paraId": 9,
        "tocIndex": 4
    },
    {
        "value": ")",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "{ label: false }",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "edgeStyle",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "在透镜中边的样式",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "EdgeStyle",
        "paraId": 10,
        "tocIndex": 4
    },
    {
        "value": " | ((datum: ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "EdgeData",
        "paraId": 11,
        "tocIndex": 4
    },
    {
        "value": ") => ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "EdgeStyle",
        "paraId": 12,
        "tocIndex": 4
    },
    {
        "value": ")",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "{ label: true }",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "preventDefault",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "是否阻止默认事件",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "boolean",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "true",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "圆形透镜的样式属性。",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "属性",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "类型",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "默认值",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "fill",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "填充颜色",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "string | Pattern | null",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "#fff",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "stroke",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "描边颜色",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "string | Pattern | null",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "#000",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "opacity",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "整体透明度",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "number | string",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "1",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "fillOpacity",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "填充透明度",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "number | string",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "0.8",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "strokeOpacity",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "描边透明度",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "number | string",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "lineWidth",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "线宽度",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "number | string",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "2",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "lineCap",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "线段端点样式",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "butt",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "round",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "square",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "lineJoin",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "线段连接处样式",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "miter",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "round",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "bevel",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "shadowColor",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "阴影颜色",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "shadowBlur",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "阴影模糊程度",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "shadowOffsetX",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "阴影 X 方向偏移",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "shadowOffsetY",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "阴影 Y 方向偏移",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 14,
        "tocIndex": 5
    },
    {
        "value": "完整样式属性参考 ",
        "paraId": 15,
        "tocIndex": 5
    },
    {
        "value": "元素 -节点 - 内置节点 - 通用样式属性 - style",
        "paraId": 16,
        "tocIndex": 5
    },
    {
        "value": "最简单的配置方式：",
        "paraId": 17,
        "tocIndex": 7
    },
    {
        "value": "const graph = new Graph({\n  plugins: ['edge-filter-lens'],\n});\n",
        "paraId": 18,
        "tocIndex": 7
    },
    {
        "value": "效果如下：",
        "paraId": 19,
        "tocIndex": 7
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 300,\n  data: {\n    nodes: [\n      // 上部疏散区域\n      { id: 'node1', style: { x: 150, y: 60, label: 'Node 1' } },\n      { id: 'node2', style: { x: 100, y: 40, label: 'Node 2' } },\n      { id: 'node3', style: { x: 200, y: 35, label: 'Node 3' } },\n      { id: 'node4', style: { x: 150, y: 30, label: 'Node 4' } },\n\n      // 中部区域\n      { id: 'node5', style: { x: 220, y: 140, label: 'Node 5' } },\n      { id: 'node6', style: { x: 280, y: 160, label: 'Node 6' } },\n      { id: 'node7', style: { x: 220, y: 120, label: 'Node 7' } },\n      { id: 'node8', style: { x: 260, y: 100, label: 'Node 8' } },\n      { id: 'node9', style: { x: 240, y: 130, label: 'Node 9' } },\n      { id: 'node10', style: { x: 300, y: 110, label: 'Node 10' } },\n\n      // 下部区域\n      { id: 'node11', style: { x: 240, y: 200, label: 'Node 11' } },\n      { id: 'node12', style: { x: 280, y: 220, label: 'Node 12' } },\n      { id: 'node13', style: { x: 300, y: 190, label: 'Node 13' } },\n      { id: 'node14', style: { x: 320, y: 210, label: 'Node 14' } },\n    ],\n    edges: [\n      // 上部连接\n      { id: 'edge1', source: 'node1', target: 'node2' },\n      { id: 'edge2', source: 'node2', target: 'node3' },\n      { id: 'edge3', source: 'node3', target: 'node4' },\n\n      // 中部连接\n      { id: 'edge4', source: 'node5', target: 'node6' },\n      { id: 'edge5', source: 'node6', target: 'node7' },\n      { id: 'edge6', source: 'node7', target: 'node8' },\n      { id: 'edge7', source: 'node8', target: 'node9' },\n      { id: 'edge8', source: 'node9', target: 'node10' },\n\n      // 下部连接\n      { id: 'edge9', source: 'node11', target: 'node12' },\n      { id: 'edge10', source: 'node12', target: 'node13' },\n      { id: 'edge11', source: 'node13', target: 'node14' },\n\n      // 跨区域连接\n      { id: 'edge12', source: 'node4', target: 'node8' },\n      { id: 'edge13', source: 'node7', target: 'node11' },\n      { id: 'edge14', source: 'node10', target: 'node13' },\n    ],\n  },\n  node: {\n    style: {\n      size: 20,\n    },\n  },\n  plugins: ['edge-filter-lens'],\n});\n\ngraph.render();\n",
        "paraId": 20,
        "tocIndex": 7
    },
    {
        "value": "可以自定义透镜的外观和行为：",
        "paraId": 21,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'edge-filter-lens',\n      r: 80,\n      style: {\n        fill: '#f0f5ff', // 透镜区域的填充颜色\n        fillOpacity: 0.6, // 填充区域的透明度\n        stroke: '#7e3feb', // 透镜边框改为紫色\n        strokeOpacity: 0.8, // 边框的透明度\n        lineWidth: 1.5, // 边框的线宽\n      },\n      nodeStyle: {\n        size: 24, // 放大节点\n        fill: '#7e3feb', // 紫色填充\n        stroke: '#5719c9', // 深紫色描边\n        lineWidth: 1, // 细边框\n        label: true, // 显示标签\n        labelFill: '#ffffff', // 白色文字\n        labelFontSize: 14, // 放大文字\n        labelFontWeight: 'bold', // 文字加粗\n      },\n      edgeStyle: {\n        stroke: '#8b9baf', // 灰色边\n        lineWidth: 2, // 加粗边线\n        label: true, // 显示标签\n        labelFill: '#5719c9', // 深紫色文字\n        opacity: 0.8, // 适当的透明度\n      },\n    },\n  ],\n});\n",
        "paraId": 22,
        "tocIndex": 8
    },
    {
        "value": "效果如下：",
        "paraId": 23,
        "tocIndex": 8
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 300,\n  data: {\n    nodes: [\n      // 上部疏散区域\n      { id: 'node1', style: { x: 150, y: 60, label: 'Node 1' } },\n      { id: 'node2', style: { x: 100, y: 40, label: 'Node 2' } },\n      { id: 'node3', style: { x: 200, y: 35, label: 'Node 3' } },\n      { id: 'node4', style: { x: 150, y: 30, label: 'Node 4' } },\n\n      // 中部区域\n      { id: 'node5', style: { x: 220, y: 140, label: 'Node 5' } },\n      { id: 'node6', style: { x: 280, y: 160, label: 'Node 6' } },\n      { id: 'node7', style: { x: 220, y: 120, label: 'Node 7' } },\n      { id: 'node8', style: { x: 260, y: 100, label: 'Node 8' } },\n      { id: 'node9', style: { x: 240, y: 130, label: 'Node 9' } },\n      { id: 'node10', style: { x: 300, y: 110, label: 'Node 10' } },\n\n      // 下部区域\n      { id: 'node11', style: { x: 240, y: 200, label: 'Node 11' } },\n      { id: 'node12', style: { x: 280, y: 220, label: 'Node 12' } },\n      { id: 'node13', style: { x: 300, y: 190, label: 'Node 13' } },\n      { id: 'node14', style: { x: 320, y: 210, label: 'Node 14' } },\n    ],\n    edges: [\n      // 上部连接\n      { id: 'edge1', source: 'node1', target: 'node2' },\n      { id: 'edge2', source: 'node2', target: 'node3' },\n      { id: 'edge3', source: 'node3', target: 'node4' },\n\n      // 中部连接\n      { id: 'edge4', source: 'node5', target: 'node6' },\n      { id: 'edge5', source: 'node6', target: 'node7' },\n      { id: 'edge6', source: 'node7', target: 'node8' },\n      { id: 'edge7', source: 'node8', target: 'node9' },\n      { id: 'edge8', source: 'node9', target: 'node10' },\n\n      // 下部连接\n      { id: 'edge9', source: 'node11', target: 'node12' },\n      { id: 'edge10', source: 'node12', target: 'node13' },\n      { id: 'edge11', source: 'node13', target: 'node14' },\n\n      // 跨区域连接\n      { id: 'edge12', source: 'node4', target: 'node8' },\n      { id: 'edge13', source: 'node7', target: 'node11' },\n      { id: 'edge14', source: 'node10', target: 'node13' },\n    ],\n  },\n  node: {\n    style: {\n      size: 20,\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#91d5ff',\n      lineWidth: 1,\n    },\n  },\n  plugins: [\n    {\n      type: 'edge-filter-lens',\n      r: 80,\n      style: {\n        fill: '#f0f5ff', // 透镜区域的填充颜色\n        fillOpacity: 0.6, // 填充区域的透明度\n        stroke: '#7e3feb', // 透镜边框改为紫色\n        strokeOpacity: 0.8, // 边框的透明度\n        lineWidth: 1.5, // 边框的线宽\n      },\n      nodeStyle: {\n        size: 24, // 放大节点\n        fill: '#7e3feb', // 紫色填充\n        stroke: '#5719c9', // 深紫色描边\n        lineWidth: 1, // 细边框\n        label: true, // 显示标签\n        labelFill: '#ffffff', // 白色文字\n        labelFontSize: 14, // 放大文字\n        labelFontWeight: 'bold', // 文字加粗\n      },\n      edgeStyle: {\n        stroke: '#8b9baf', // 灰色边\n        lineWidth: 2, // 加粗边线\n        label: true, // 显示标签\n        labelFill: '#5719c9', // 深紫色文字\n        opacity: 0.8, // 适当的透明度\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 24,
        "tocIndex": 8
    },
    {
        "value": "边过滤镜",
        "paraId": 25,
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
//# sourceMappingURL=docs_manual_plugin_EdgeFilterLens_zh_md_q_hK4X-async.js.map