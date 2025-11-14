((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/getting-started/integration/react.zh.md?type=text'],
{ "docs/manual/getting-started/integration/react.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/getting-started/integration/react.zh.md?watch=parent");
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
        "value": "如果你需要更完善的 React 与 G6 集成解决方案，可以使用 AntV 官方封装库 ",
        "paraId": 0
    },
    {
        "value": "@antv/graphin",
        "paraId": 0
    },
    {
        "value": "。",
        "paraId": 0
    },
    {
        "value": "参考下面的示例，你可以在 React 中使用 G6，也可以查看 ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "在线示例",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 。",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "import { Graph } from '@antv/g6';\nimport { useEffect, useRef } from 'react';\n\nexport default () => {\n  const containerRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    const graph = new Graph({\n      container: containerRef.current!,\n      width: 500,\n      height: 500,\n      data: {\n        nodes: [\n          {\n            id: 'node-1',\n            style: { x: 50, y: 100 },\n          },\n          {\n            id: 'node-2',\n            style: { x: 150, y: 100 },\n          },\n        ],\n        edges: [{ id: 'edge-1', source: 'node-1', target: 'node-2' }],\n      },\n    });\n\n    graph.render();\n  }, []);\n\n  return <div ref={containerRef} />;\n};\n",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "在严格模式下，React 会二次更新导致 G6 重复创建 Graph 实例并销毁，可以参考如下示例解决：",
        "paraId": 3,
        "tocIndex": 1
    },
    {
        "value": "import type { GraphOptions } from '@antv/g6';\nimport { Graph as G6Graph } from '@antv/g6';\nimport { useEffect, useRef } from 'react';\n\nexport interface GraphProps {\n  options: GraphOptions;\n  onRender?: (graph: G6Graph) => void;\n  onDestroy?: () => void;\n}\n\nexport const Graph = (props: GraphProps) => {\n  const { options, onRender, onDestroy } = props;\n  const graphRef = useRef<G6Graph>();\n  const containerRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    const graph = new G6Graph({ container: containerRef.current! });\n    graphRef.current = graph;\n\n    return () => {\n      const graph = graphRef.current;\n      if (graph) {\n        graph.destroy();\n        onDestroy?.();\n        graphRef.current = undefined;\n      }\n    };\n  }, []);\n\n  useEffect(() => {\n    const container = containerRef.current;\n    const graph = graphRef.current;\n\n    if (!options || !container || !graph || graph.destroyed) return;\n\n    graph.setOptions(options);\n    graph\n      .render()\n      .then(() => onRender?.(graph))\n      // eslint-disable-next-line no-console\n      .catch((error) => console.debug(error));\n  }, [options]);\n\n  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;\n};\n",
        "paraId": 4,
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
//# sourceMappingURL=docs_manual_getting-started_integration_react_zh_md_q_hK4X-async.js.map