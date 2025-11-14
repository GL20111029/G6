((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/further-reading/event.en.md?type=text'],
{ "docs/manual/further-reading/event.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/further-reading/event.en.md?watch=parent");
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
        "value": "The event system in G6 is encapsulated based on the event system of ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "G",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": ", providing a wider range of event types and more convenient methods for event binding and unbinding.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "The event types in G6 are mainly divided into the following categories:",
        "paraId": 1,
        "tocIndex": 1
    },
    {
        "value": "Graph events",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Canvas events",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Element events",
        "paraId": 2,
        "tocIndex": 1
    },
    {
        "value": "Graph events refer to events associated with the entire graph instance, such as the graph's rendering completion event, the graph's update event, etc. The complete list of graph events can be found at ",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "GraphEvent",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": ".",
        "paraId": 3,
        "tocIndex": 2
    },
    {
        "value": "Listening to graph events is consistent with the default event listening method. For example, to listen to the graph's rendering completion event:",
        "paraId": 5,
        "tocIndex": 3
    },
    {
        "value": "import { Graph, GraphEvent } from '@antv/g6';\n\nconst graph = new Graph({\n  // ...\n});\n\ngraph.on(GraphEvent.AFTER_RENDER, () => {\n  // event handler\n});\n",
        "paraId": 6,
        "tocIndex": 3
    },
    {
        "value": "Canvas events refer to events associated with the canvas, such as the canvas's click event, the canvas's drag event, etc. The complete list of canvas events can be found at ",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "CanvasEvent",
        "paraId": 8,
        "tocIndex": 4
    },
    {
        "value": ".",
        "paraId": 7,
        "tocIndex": 4
    },
    {
        "value": "For example, to listen to the canvas's click event:",
        "paraId": 9,
        "tocIndex": 5
    },
    {
        "value": "import { Graph, CanvasEvent } from '@antv/g6';\n\nconst graph = new Graph({\n  // ...\n});\n\ngraph.on(CanvasEvent.CLICK, (event) => {\n  // event handler\n});\n",
        "paraId": 10,
        "tocIndex": 5
    },
    {
        "value": "Element events primarily refer to events that are triggered on element objects, such as a node's drag event, an edge's click event, etc. Elements are categorized into three types: nodes (",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "node",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "), edges (",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "edge",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "), and combos (",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "combo",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "). The complete list of corresponding events can be found at: ",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "NodeEvent",
        "paraId": 12,
        "tocIndex": 6
    },
    {
        "value": ", ",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "EdgeEvent",
        "paraId": 13,
        "tocIndex": 6
    },
    {
        "value": ", ",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "ComboEvent",
        "paraId": 14,
        "tocIndex": 6
    },
    {
        "value": ".",
        "paraId": 11,
        "tocIndex": 6
    },
    {
        "value": "Similar to canvas events, for example, to listen to a node's drag event and an edge's click event:",
        "paraId": 15,
        "tocIndex": 7
    },
    {
        "value": "import { Graph, NodeEvent, EdgeEvent, ComboEvent } from '@antv/g6';\n\nconst graph = new Graph({\n  // ...\n});\n\ngraph.on(NodeEvent.DRAG, (event) => {\n  // event handler\n});\n\ngraph.on(EdgeEvent.CLICK, (event) => {\n  // event handler\n});\n\ngraph.on(ComboEvent.CLICK, (event) => {\n  // event handler\n});\n",
        "paraId": 16,
        "tocIndex": 7
    },
    {
        "value": "G6 provides the following APIs for event listening and unlistening:",
        "paraId": 17,
        "tocIndex": 8
    },
    {
        "value": "Add an event listener",
        "paraId": 18,
        "tocIndex": 9
    },
    {
        "value": "const handler = (event) => {\n  // event handler\n};\n\ngraph.on('event_name', handler);\n",
        "paraId": 19,
        "tocIndex": 9
    },
    {
        "value": "Remove an event listener",
        "paraId": 20,
        "tocIndex": 10
    },
    {
        "value": "graph.off('event_name', handler);\n",
        "paraId": 21,
        "tocIndex": 10
    },
    {
        "value": "When no arguments are passed, it will remove all event listeners:",
        "paraId": 22,
        "tocIndex": 10
    },
    {
        "value": "graph.off();\n",
        "paraId": 23,
        "tocIndex": 10
    },
    {
        "value": "Add a one-time event listener, which means the event listener will be automatically removed after the event is triggered",
        "paraId": 24,
        "tocIndex": 11
    },
    {
        "value": "graph.once('event_name', handler);\n",
        "paraId": 25,
        "tocIndex": 11
    },
    {
        "value": "If you want to manually trigger an event, you can use the ",
        "paraId": 26,
        "tocIndex": 12
    },
    {
        "value": "emit",
        "paraId": 26,
        "tocIndex": 12
    },
    {
        "value": " method:",
        "paraId": 26,
        "tocIndex": 12
    },
    {
        "value": "graph.emit('event_name', {\n  // event data\n});\n",
        "paraId": 27,
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
//# sourceMappingURL=docs_manual_further-reading_event_en_md_q_hK4X-async.js.map