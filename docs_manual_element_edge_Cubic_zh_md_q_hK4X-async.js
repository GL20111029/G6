((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/Cubic.zh.md?type=text'],
{ "docs/manual/element/edge/Cubic.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/edge/Cubic.zh.md?watch=parent");
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
        "value": "三次贝塞尔曲线是一种通用的平滑曲线，其控制点可以自由分布，适合连接任意方向的节点。",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "使用场景：",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "适用于任意布局的图，如网络图、关系图。",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "当需要平滑连接节点且无特定方向要求时使用。",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "createGraph(\n  {\n    data: {\n      nodes: [{ id: 'node1' }, { id: 'node2' }],\n      edges: [{ id: 'edge1', source: 'node1', target: 'node2', text: 'cubic' }],\n    },\n    node: {\n      style: {\n        fill: '#f8f8f8',\n        stroke: '#8b9baf',\n        lineWidth: 1,\n      },\n    },\n    edge: {\n      type: 'cubic',\n      style: {\n        stroke: '#7e3feb',\n        lineWidth: 2,\n        labelText: (d) => d.text,\n        labelBackground: true,\n        labelBackgroundFill: '#f9f0ff',\n        labelBackgroundOpacity: 1,\n        labelBackgroundLineWidth: 2,\n        labelBackgroundStroke: '#7e3feb',\n        labelPadding: [1, 10],\n        labelBackgroundRadius: 4,\n      },\n    },\n    behaviors: ['drag-canvas', 'drag-element'],\n    layout: { type: 'grid', cols: 2 },\n    plugins: [{ type: 'grid-line', size: 30 }],\n  },\n  { width: 600, height: 300 },\n  (gui, graph) => {\n    gui.add({ type: 'cubic' }, 'type').disable();\n\n    const options = {\n      curveOffset: 20,\n      curvePosition: 0.5,\n    };\n    const optionFolder = gui.addFolder('cubic.style');\n    optionFolder.add(options, 'curveOffset', 0, 100, 1);\n    optionFolder.add(options, 'curvePosition', 0, 1, 0.1);\n\n    optionFolder.onChange(({ property, value }) => {\n      graph.updateEdgeData([{ id: 'edge1', style: { [property]: value } }]);\n      graph.render();\n    });\n  },\n);\n",
        "paraId": 4,
        "tocIndex": 1
    },
    {
        "value": "设置 ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "edge.type",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " 为 ",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "cubic",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": " 以使用三次贝塞尔曲线。",
        "paraId": 5,
        "tocIndex": 1
    },
    {
        "value": "如果元素有其特定的属性，我们将在下面列出。对于所有的通用样式属性，见 ",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "BaseEdge",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "属性",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "controlPoints",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "控制点数组，用于定义曲线的形状。如果不指定，将会通过 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "curveOffset",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " 和 ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "curvePosition",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": " 来计算控制点",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "[",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Point",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ", ",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Point",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "]",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "curvePosition",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "控制点在两端点连线上的相对位置，范围为",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "0-1",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "number | number[]",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "0.5",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "curveOffset",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "控制点距离两端点连线的距离，可理解为控制边的弯曲程度",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "number | number[]",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "20",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "type Point = [number, number] | [number, number, number] | Float32Array;\n",
        "paraId": 11,
        "tocIndex": 3
    },
    {
        "value": "import { Graph, iconfont } from '@antv/g6';\n\nconst style = document.createElement('style');\nstyle.innerHTML = `@import url('${iconfont.css}');`;\ndocument.head.appendChild(style);\n\nconst data = {\n  nodes: [\n    {\n      id: 'node1',\n    },\n    {\n      id: 'node2',\n    },\n    {\n      id: 'node3',\n    },\n    {\n      id: 'node4',\n    },\n    {\n      id: 'node5',\n    },\n    {\n      id: 'node6',\n    },\n  ],\n  edges: [\n    {\n      id: 'line-default',\n      source: 'node1',\n      target: 'node2',\n    },\n    {\n      id: 'line-active',\n      source: 'node1',\n      target: 'node3',\n      states: ['active'],\n    },\n    {\n      id: 'line-selected',\n      source: 'node1',\n      target: 'node4',\n      states: ['selected'],\n    },\n    {\n      id: 'line-highlight',\n      source: 'node1',\n      target: 'node5',\n      states: ['highlight'],\n    },\n    {\n      id: 'line-inactive',\n      source: 'node1',\n      target: 'node6',\n      states: ['inactive'],\n    },\n  ],\n};\n\nconst graph = new Graph({\n  container: 'container',\n  data,\n  edge: {\n    type: 'cubic',\n    style: {\n      labelText: (d) => d.id,\n      labelBackground: true,\n      endArrow: true,\n      badge: true,\n      badgeText: '\\ue603',\n      badgeFontFamily: 'iconfont',\n      badgeBackgroundWidth: 12,\n      badgeBackgroundHeight: 12,\n    },\n  },\n  layout: {\n    type: 'radial',\n    unitRadius: 220,\n    linkDistance: 220,\n  },\n});\n\ngraph.render();\n",
        "paraId": 12,
        "tocIndex": 5
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
//# sourceMappingURL=docs_manual_element_edge_Cubic_zh_md_q_hK4X-async.js.map