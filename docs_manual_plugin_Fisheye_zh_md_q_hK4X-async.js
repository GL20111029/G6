((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/plugin/Fisheye.zh.md?type=text'],
{ "docs/manual/plugin/Fisheye.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/plugin/Fisheye.zh.md?watch=parent");
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
        "value": "鱼眼放大镜插件是为 focus+context 的探索场景设计的，它能够在放大关注区域的同时，保证上下文以及上下文与关注中心的关系不丢失，是一个重要的可视化探索工具。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "在演示过程中需要突出展示某些区域内容",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "需要局部放大查看细节时，同时又不想失去整体视图",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "以下是一个简单的 Fisheye 插件初始化示例：",
        "paraId": 2,
        "tocIndex": 2
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fisheye',\n      trigger: 'drag', // 通过拖拽移动鱼眼\n      d: 1.5, // 设置畸变因子\n      r: 120, // 设置鱼眼半径\n      showDPercent: true, // 显示畸变程度\n    },\n  ],\n});\n",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [\n        // 上部节点\n        { id: 'Myriel', style: { x: 197, y: 58 } },\n        { id: 'Napoleon', style: { x: 147, y: 22 } },\n        { id: 'Mlle.Baptistine', style: { x: 225, y: 141 } },\n        { id: 'Mme.Magloire', style: { x: 255, y: 120 } },\n        { id: 'CountessdeLo', style: { x: 151, y: -3 } },\n        { id: 'Geborand', style: { x: 136, y: 41 } },\n        { id: 'Champtercier', style: { x: 227, y: 8 } },\n        { id: 'Cravatte', style: { x: 172, y: -10 } },\n        { id: 'Count', style: { x: 172, y: 12 } },\n        { id: 'OldMan', style: { x: 198, y: -6 } },\n        // 中上部节点\n        { id: 'Labarre', style: { x: 266, y: 203 } },\n        { id: 'Marguerite', style: { x: 265, y: 171 } },\n        { id: 'Mme.deR', style: { x: 299, y: 133 } },\n        { id: 'Isabeau', style: { x: 282, y: 191 } },\n        { id: 'Gervais', style: { x: 334, y: 148 } },\n        { id: 'Simplice', style: { x: 286, y: 227 } },\n        { id: 'Scaufflaire', style: { x: 250, y: 231 } },\n        { id: 'Woman1', style: { x: 375, y: 202 } },\n        { id: 'Judge', style: { x: 370, y: 139 } },\n        { id: 'Champmathieu', style: { x: 404, y: 216 } },\n        // 中部主要节点\n        { id: 'Valjean', style: { x: 322, y: 221 } },\n        { id: 'Fantine', style: { x: 337, y: 187 } },\n        { id: 'Cosette', style: { x: 343, y: 248 } },\n        { id: 'Javert', style: { x: 368, y: 263 } },\n        { id: 'Thenardier', style: { x: 317, y: 300 } },\n        { id: 'Mme.Thenardier', style: { x: 283, y: 267 } },\n        { id: 'Eponine', style: { x: 268, y: 365 } },\n        { id: 'Gavroche', style: { x: 393, y: 380 } },\n        { id: 'Marius', style: { x: 336, y: 350 } },\n        { id: 'Enjolras', style: { x: 376, y: 371 } },\n        // 右侧和右上节点\n        { id: 'Gribier', style: { x: 437, y: 160 } },\n        { id: 'Jondrette', style: { x: 510, y: 327 } },\n        { id: 'Mme.Burgon', style: { x: 466, y: 368 } },\n        { id: 'Brevet', style: { x: 399, y: 183 } },\n        { id: 'Chenildieu', style: { x: 425, y: 194 } },\n        { id: 'Cochepaille', style: { x: 419, y: 148 } },\n        { id: 'Child1', style: { x: 361, y: 387 } },\n        { id: 'Child2', style: { x: 415, y: 432 } },\n        { id: 'Brujon', style: { x: 330, y: 394 } },\n        { id: 'Mme.Hucheloup', style: { x: 394, y: 450 } },\n        // 中部其他节点\n        { id: 'Favourite', style: { x: 284, y: 153 } },\n        { id: 'Dahlia', style: { x: 303, y: 170 } },\n        { id: 'Zephine', style: { x: 286, y: 94 } },\n        { id: 'Tholomyes', style: { x: 359, y: 158 } },\n        { id: 'Listolier', style: { x: 308, y: 80 } },\n        { id: 'Fameuil', style: { x: 329, y: 89 } },\n        { id: 'Blacheville', style: { x: 351, y: 95 } },\n        { id: 'Perpetue', style: { x: 234, y: 195 } },\n        { id: 'Woman2', style: { x: 304, y: 254 } },\n        { id: 'MotherInnocent', style: { x: 350, y: 214 } },\n        // 下部节点\n        { id: 'Pontmercy', style: { x: 375, y: 307 } },\n        { id: 'Boulatruelle', style: { x: 260, y: 279 } },\n        { id: 'Anzelma', style: { x: 234, y: 303 } },\n        { id: 'Gillenormand', style: { x: 338, y: 286 } },\n        { id: 'Magnon', style: { x: 277, y: 317 } },\n        { id: 'Mlle.Gillenormand', style: { x: 257, y: 306 } },\n        { id: 'Mme.Pontmercy', style: { x: 307, y: 318 } },\n        { id: 'Mlle.Vaubois', style: { x: 197, y: 325 } },\n        { id: 'Lt.Gillenormand', style: { x: 294, y: 296 } },\n        { id: 'Toussaint', style: { x: 306, y: 277 } },\n        { id: 'Gueulemer', style: { x: 344, y: 323 } },\n        { id: 'Babet', style: { x: 367, y: 319 } },\n        { id: 'Claquesous', style: { x: 303, y: 347 } },\n        { id: 'Montparnasse', style: { x: 322, y: 330 } },\n        // 最下部节点\n        { id: 'Combeferre', style: { x: 397, y: 416 } },\n        { id: 'Prouvaire', style: { x: 309, y: 426 } },\n        { id: 'Feuilly', style: { x: 314, y: 456 } },\n        { id: 'Courfeyrac', style: { x: 332, y: 435 } },\n        { id: 'Bahorel', style: { x: 343, y: 466 } },\n        { id: 'Bossuet', style: { x: 305, y: 382 } },\n        { id: 'Joly', style: { x: 371, y: 415 } },\n        { id: 'Grantaire', style: { x: 370, y: 466 } },\n        { id: 'MotherPlutarch', style: { x: 424, y: 461 } },\n      ],\n      edges: [\n        // 主要连接\n        { id: 'e1', source: 'Valjean', target: 'Javert' },\n        { id: 'e2', source: 'Valjean', target: 'Cosette' },\n        { id: 'e3', source: 'Javert', target: 'Thenardier' },\n        { id: 'e4', source: 'Cosette', target: 'Marius' },\n        { id: 'e5', source: 'Eponine', target: 'Marius' },\n        { id: 'e6', source: 'Enjolras', target: 'Marius' },\n        { id: 'e7', source: 'Gavroche', target: 'Enjolras' },\n        { id: 'e8', source: 'Valjean', target: 'Fantine' },\n        { id: 'e9', source: 'Cosette', target: 'Thenardier' },\n        { id: 'e10', source: 'Eponine', target: 'Thenardier' },\n        // 上部连接\n        { id: 'e11', source: 'Myriel', target: 'Napoleon' },\n        { id: 'e12', source: 'Myriel', target: 'Mlle.Baptistine' },\n        { id: 'e13', source: 'Mlle.Baptistine', target: 'Mme.Magloire' },\n        { id: 'e14', source: 'CountessdeLo', target: 'Myriel' },\n        { id: 'e15', source: 'Geborand', target: 'Myriel' },\n        // 中部连接\n        { id: 'e16', source: 'Favourite', target: 'Tholomyes' },\n        { id: 'e17', source: 'Dahlia', target: 'Favourite' },\n        { id: 'e18', source: 'Zephine', target: 'Favourite' },\n        { id: 'e19', source: 'Tholomyes', target: 'Listolier' },\n        { id: 'e20', source: 'Fameuil', target: 'Blacheville' },\n        // 下部连接\n        { id: 'e21', source: 'Combeferre', target: 'Enjolras' },\n        { id: 'e22', source: 'Prouvaire', target: 'Combeferre' },\n        { id: 'e23', source: 'Feuilly', target: 'Courfeyrac' },\n        { id: 'e24', source: 'Bahorel', target: 'Bossuet' },\n        { id: 'e25', source: 'Joly', target: 'Grantaire' },\n        // 额外的中部连接\n        { id: 'e26', source: 'Gueulemer', target: 'Thenardier' },\n        { id: 'e27', source: 'Babet', target: 'Gueulemer' },\n        { id: 'e28', source: 'Claquesous', target: 'Montparnasse' },\n        { id: 'e29', source: 'Brujon', target: 'Babet' },\n        { id: 'e30', source: 'Child1', target: 'Gavroche' },\n        // 新增更多连接\n        { id: 'e31', source: 'Valjean', target: 'Simplice' },\n        { id: 'e32', source: 'Fantine', target: 'Simplice' },\n        { id: 'e33', source: 'Javert', target: 'Simplice' },\n        { id: 'e34', source: 'Marius', target: 'Gillenormand' },\n        { id: 'e35', source: 'Cosette', target: 'Gillenormand' },\n        { id: 'e36', source: 'Marius', target: 'Lt.Gillenormand' },\n        { id: 'e37', source: 'Gillenormand', target: 'Lt.Gillenormand' },\n        { id: 'e38', source: 'Cosette', target: 'Toussaint' },\n        { id: 'e39', source: 'Javert', target: 'Toussaint' },\n        { id: 'e40', source: 'Valjean', target: 'Toussaint' },\n        // 随机添加更多连接\n        ...Array.from({ length: 50 }, (_, i) => ({\n          // 从40增加到50个随机连接\n          id: `edge-${i + 41}`,\n          source: [\n            'Valjean',\n            'Javert',\n            'Cosette',\n            'Marius',\n            'Enjolras',\n            'Fantine',\n            'Thenardier',\n            'Eponine',\n            'Gavroche',\n            'Gueulemer',\n            'Babet',\n            'Claquesous',\n            'Favourite',\n            'Tholomyes',\n            'Simplice',\n          ][Math.floor(Math.random() * 15)],\n          target: [\n            'Favourite',\n            'Dahlia',\n            'Tholomyes',\n            'Combeferre',\n            'Prouvaire',\n            'Feuilly',\n            'Courfeyrac',\n            'Bahorel',\n            'Bossuet',\n            'Montparnasse',\n            'Brujon',\n            'Child1',\n            'Simplice',\n            'Toussaint',\n            'Gillenormand',\n          ][Math.floor(Math.random() * 15)],\n        })),\n      ],\n    },\n    autoFit: 'view',\n    node: {\n      style: {\n        size: (datum) => datum.id.length * 2 + 10,\n        label: false,\n        labelText: (datum) => datum.id,\n        labelBackground: true,\n        icon: false,\n        iconFontFamily: 'iconfont',\n        iconText: '\\ue6f6',\n        iconFill: '#fff',\n      },\n      palette: {\n        type: 'group',\n        field: (datum) => datum.id,\n        color: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n      },\n    },\n    edge: {\n      style: {\n        stroke: '#bfbfbf',\n      },\n    },\n    behaviors: ['drag-canvas'],\n    plugins: [\n      {\n        type: 'fisheye',\n        key: 'fisheye',\n        r: 120,\n        d: 1.5,\n        nodeStyle: {\n          label: true,\n          icon: true,\n        },\n      },\n    ],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    const TRIGGER_OPTIONS = ['pointermove', 'drag', 'click'];\n    const SCALE_OPTIONS = ['wheel', 'drag', '-'];\n\n    const options = {\n      type: 'fisheye',\n      trigger: 'pointermove',\n      r: 120,\n      d: 1.5,\n      maxR: 200,\n      minR: 50,\n      maxD: 5,\n      minD: 0.5,\n      scaleRBy: '-',\n      scaleDBy: '-',\n      showDPercent: true,\n      preventDefault: true,\n    };\n\n    const optionFolder = gui.addFolder('Fisheye Options');\n    optionFolder.add(options, 'type').disable(true);\n    optionFolder.add(options, 'trigger', TRIGGER_OPTIONS);\n    optionFolder.add(options, 'r', 50, 200, 10);\n    optionFolder.add(options, 'd', 0.5, 5, 0.1);\n    optionFolder.add(options, 'scaleRBy', SCALE_OPTIONS);\n    optionFolder.add(options, 'scaleDBy', SCALE_OPTIONS);\n    optionFolder.add(options, 'showDPercent');\n    optionFolder.add(options, 'preventDefault');\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updatePlugin({\n        key: 'fisheye',\n        [property]: value === '-' ? undefined : value,\n      });\n      graph.render();\n    });\n  },\n);\n",
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
        "value": "fisheye",
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
        "value": "用于控制鱼眼放大镜的移动方式，支持以下三种配置：",
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
        "value": "：鱼眼放大镜始终跟随鼠标移动 ",
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
        "value": "：点击画布时移动鱼眼放大镜到点击位置 ",
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
        "value": "：通过拖拽方式移动鱼眼放大镜",
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
        "value": "drag",
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
        "value": "鱼眼放大镜半径",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "120",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "maxR",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "鱼眼放大镜可调整的最大半径",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "画布宽高的最小值的一半",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "minR",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "鱼眼放大镜可调整的最小半径",
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
        "value": "d",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "畸变因子",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "1.5",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "maxD",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "鱼眼放大镜可调整的最大畸变因子",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "number",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "5",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "minD",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "鱼眼放大镜可调整的最小畸变因子",
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
        "value": "调整鱼眼放大镜范围半径的方式：",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "'wheel'",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：滚轮调整 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "'drag'",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：拖拽调整",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "wheel",
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
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "scaleDBy",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "调整鱼眼放大镜畸变因子的方式：",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "'wheel'",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：滚轮调整 ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "- ",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "'drag'",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "：拖拽调整",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "wheel",
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
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "showDPercent",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "是否在鱼眼放大镜中显示畸变因子数值",
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
        "value": "style",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "鱼眼放大镜样式，",
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
        "value": "-",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "nodeStyle",
        "paraId": 5,
        "tocIndex": 4
    },
    {
        "value": "在鱼眼放大镜中的节点样式",
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
        "value": "圆形样式属性，用于配置鱼眼放大镜的外观。",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "属性",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "类型",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "默认值",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "fill",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "填充颜色",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "string | Pattern | null",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "#ccc",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "stroke",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "描边颜色",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "string | Pattern | null",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "#000",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "opacity",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "整体透明度",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "number | string",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "fillOpacity",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "填充透明度",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "number | string",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "0.1",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "strokeOpacity",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "描边透明度",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "number | string",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "lineWidth",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "线宽度",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "number | string",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "2",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "lineCap",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "线段端点样式",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "butt",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "round",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "square",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "lineJoin",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "线段连接处样式",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "miter",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "round",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": " | ",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "bevel",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "shadowColor",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "阴影颜色",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "shadowBlur",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "阴影模糊程度",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "shadowOffsetX",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "阴影 X 方向偏移",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "shadowOffsetY",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "阴影 Y 方向偏移",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "number",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 11,
        "tocIndex": 5
    },
    {
        "value": "完整样式属性参考 ",
        "paraId": 12,
        "tocIndex": 5
    },
    {
        "value": "元素 -节点 - 内置节点 - 通用样式属性 - style",
        "paraId": 13,
        "tocIndex": 5
    },
    {
        "value": "通过 ",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "scaleRBy",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": " 和 ",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "scaleDBy",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": " 可以分别控制鱼眼放大镜的半径和畸变因子的调整方式：",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fisheye',\n      // 通过滚轮调整半径\n      scaleRBy: 'wheel',\n      // 通过拖拽调整畸变因子\n      scaleDBy: 'drag',\n      // 设置半径和畸变因子的范围\n      minR: 50,\n      maxR: 200,\n      minD: 1,\n      maxD: 3,\n    },\n  ],\n});\n",
        "paraId": 15,
        "tocIndex": 6
    },
    {
        "value": "注意：当 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "trigger",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "、",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "scaleRBy",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 和 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "scaleDBy",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 同时设置为 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "'drag'",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 时，优先级顺序为 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "trigger",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " > ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "scaleRBy",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " > ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "scaleDBy",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "，只会为优先级最高的配置项绑定拖拽事件。同理，如果 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "scaleRBy",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 和 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "scaleDBy",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 同时设置为 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "'wheel'",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "，只会为 ",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "scaleRBy",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": " 绑定滚轮事件。",
        "paraId": 16,
        "tocIndex": 6
    },
    {
        "value": "最简单的配置方式：",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "const graph = new Graph({\n  plugins: ['fisheye'],\n});\n",
        "paraId": 18,
        "tocIndex": 8
    },
    {
        "value": "可以自定义鱼眼放大镜的外观和行为：",
        "paraId": 19,
        "tocIndex": 9
    },
    {
        "value": "const graph = new Graph({\n  plugins: [\n    {\n      type: 'fisheye',\n      r: 150,\n      d: 2,\n      style: {\n        fill: '#2f54eb', // 鱼眼区域的填充颜色\n        fillOpacity: 0.2, // 填充区域的透明度\n        stroke: '#1d39c4', // 鱼眼边框的颜色\n        strokeOpacity: 0.8, // 边框的透明度\n        lineWidth: 1.5, // 边框的线宽\n        shadowColor: '#1d39c4', // 阴影颜色\n        shadowBlur: 10, // 阴影的模糊半径\n        shadowOffsetX: 0, // 阴影的水平偏移\n        shadowOffsetY: 0, // 阴影的垂直偏移\n        cursor: 'pointer', // 鼠标悬停时的指针样式\n      },\n      nodeStyle: {\n        // 节点基础样式\n        size: 40, // 节点大小\n        fill: '#d6e4ff', // 节点填充颜色\n        stroke: '#2f54eb', // 节点边框颜色\n        lineWidth: 2, // 节点边框宽度\n        shadowColor: '#2f54eb', // 节点阴影颜色\n        shadowBlur: 5, // 节点阴影模糊半径\n        cursor: 'pointer', // 鼠标悬停时的指针样式\n\n        // 标签样式\n        label: true, // 是否显示标签\n        labelFontSize: 14, // 标签字体大小\n        labelFontWeight: 'bold', // 标签字体粗细\n        labelFill: '#1d39c4', // 标签文字颜色\n        labelBackground: true, // 是否显示标签背景\n        labelBackgroundFill: '#fff', // 标签背景填充颜色\n        labelBackgroundStroke: '#1d39c4', // 标签背景边框颜色\n        labelBackgroundOpacity: 0.8, // 标签背景透明度\n        labelBackgroundPadding: [4, 8, 4, 8], // 标签背景内边距 [上,右,下,左]\n\n        // 图标样式\n        icon: true, // 是否显示图标\n        iconFontFamily: 'iconfont', // 图标字体\n        iconText: '\\ue6f6', // 图标的 Unicode 编码\n        iconFill: '#1d39c4', // 图标颜色\n        iconSize: 16, // 图标大小\n        iconFontWeight: 'normal', // 图标字体粗细\n      },\n    },\n  ],\n});\n",
        "paraId": 20,
        "tocIndex": 9
    },
    {
        "value": "效果如下：",
        "paraId": 21,
        "tocIndex": 9
    },
    {
        "value": "import { Graph } from '@antv/g6';\n\nconst graph = new Graph({\n  container: 'container',\n  width: 400,\n  height: 300,\n  data: {\n    nodes: [\n      { id: 'node-1', style: { x: 150, y: 100 } },\n      { id: 'node-2', style: { x: 250, y: 100 } },\n      { id: 'node-3', style: { x: 200, y: 180 } },\n      { id: 'node-4', style: { x: 120, y: 180 } },\n      { id: 'node-5', style: { x: 280, y: 180 } },\n    ],\n    edges: [\n      { id: 'edge-1', source: 'node-1', target: 'node-2' },\n      { id: 'edge-2', source: 'node-1', target: 'node-3' },\n      { id: 'edge-3', source: 'node-2', target: 'node-3' },\n      { id: 'edge-4', source: 'node-3', target: 'node-4' },\n      { id: 'edge-5', source: 'node-3', target: 'node-5' },\n    ],\n  },\n  node: {\n    style: {\n      size: 30,\n      fill: '#e6f7ff',\n      stroke: '#1890ff',\n      lineWidth: 1,\n      label: false,\n      icon: false,\n    },\n  },\n  edge: {\n    style: {\n      stroke: '#91d5ff',\n      lineWidth: 1,\n    },\n  },\n  plugins: [\n    {\n      type: 'fisheye',\n      key: 'fisheye',\n      r: 100,\n      d: 2,\n      style: {\n        fill: '#2f54eb', // 鱼眼区域的填充颜色\n        fillOpacity: 0.2, // 填充区域的透明度\n        stroke: '#1d39c4', // 鱼眼边框的颜色\n        strokeOpacity: 0.8, // 边框的透明度\n        lineWidth: 1.5, // 边框的线宽\n        shadowColor: '#1d39c4', // 阴影颜色\n        shadowBlur: 10, // 阴影的模糊半径\n        shadowOffsetX: 0, // 阴影的水平偏移\n        shadowOffsetY: 0, // 阴影的垂直偏移\n        cursor: 'pointer', // 鼠标悬停时的指针样式\n      },\n      nodeStyle: {\n        // 节点基础样式\n        size: 40, // 节点大小\n        fill: '#d6e4ff', // 节点填充颜色\n        stroke: '#2f54eb', // 节点边框颜色\n        lineWidth: 2, // 节点边框宽度\n        shadowColor: '#2f54eb', // 节点阴影颜色\n        shadowBlur: 5, // 节点阴影模糊半径\n        cursor: 'pointer', // 鼠标悬停时的指针样式\n\n        // 标签样式\n        label: true, // 是否显示标签\n        labelFontSize: 14, // 标签字体大小\n        labelFontWeight: 'bold', // 标签字体粗细\n        labelFill: '#1d39c4', // 标签文字颜色\n        labelBackground: true, // 是否显示标签背景\n        labelBackgroundFill: '#fff', // 标签背景填充颜色\n        labelBackgroundStroke: '#1d39c4', // 标签背景边框颜色\n        labelBackgroundOpacity: 0.8, // 标签背景透明度\n        labelBackgroundPadding: [4, 8, 4, 8], // 标签背景内边距 [上,右,下,左]\n\n        // 图标样式\n        icon: true, // 是否显示图标\n        iconFontFamily: 'iconfont', // 图标字体\n        iconText: '\\ue6f6', // 图标的 Unicode 编码\n        iconFill: '#1d39c4', // 图标颜色\n        iconSize: 16, // 图标大小\n        iconFontWeight: 'normal', // 图标字体粗细\n      },\n    },\n  ],\n});\n\ngraph.render();\n",
        "paraId": 22,
        "tocIndex": 9
    },
    {
        "value": "import { Graph, iconfont } from '@antv/g6';\n\nconst style = document.createElement('style');\nstyle.innerHTML = `@import url('${iconfont.css}');`;\ndocument.head.appendChild(style);\n\nfetch('https://assets.antv.antgroup.com/g6/relations.json')\n  .then((res) => res.json())\n  .then((data) => {\n    const graph = new Graph({\n      container: 'container',\n      autoFit: 'view',\n      data,\n      node: {\n        style: {\n          size: (datum) => datum.id.length * 2 + 10,\n          label: false,\n          labelText: (datum) => datum.id,\n          labelBackground: true,\n          icon: false,\n          iconFontFamily: 'iconfont',\n          iconText: '\\ue6f6',\n          iconFill: '#fff',\n        },\n        palette: {\n          type: 'group',\n          field: (datum) => datum.id,\n          color: ['#1783FF', '#00C9C9', '#F08F56', '#D580FF'],\n        },\n      },\n      edge: {\n        style: {\n          stroke: '#e2e2e2',\n        },\n      },\n      plugins: [{ key: 'fisheye', type: 'fisheye', nodeStyle: { label: true, icon: true } }],\n    });\n    graph.render();\n  });\n",
        "paraId": 23,
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
//# sourceMappingURL=docs_manual_plugin_Fisheye_zh_md_q_hK4X-async.js.map