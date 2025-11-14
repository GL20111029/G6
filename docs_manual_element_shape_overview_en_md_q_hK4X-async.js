((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/shape/overview.en.md?type=text'],
{ "docs/manual/element/shape/overview.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/manual/element/shape/overview.en.md?watch=parent");
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
        "value": "A Shape in G6 refers to a graphical element, such as a circle, rectangle, or path. Shapes are generally associated with nodes, edges, or combos in G6. ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "💡 Every node/edge/combo in G6 is composed of one or more shapes. The style configuration of nodes, edges, and combos is reflected on their corresponding shapes.",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "For example, in the images below: the node on the left contains a single circular shape; the node in the middle contains a circle and a text shape; the node on the right contains five circles (the blue-green main circle and four anchor points at the top, bottom, left, and right) and a text shape. Each node/edge/combo has its unique key shape (keyShape). In the examples below, the keyShape for all three nodes is the blue-green circle. The keyShape is mainly used for interaction detection and automatic style updates with ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "element states",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ", see ",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "keyShape",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": ".",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": "(Left) A node with only one circular shape, whose keyShape is the circle. (Middle) A node with a circle and a text shape, whose keyShape is the circle. (Right) A node with a main circle, text, and four small circles at the top, bottom, left, and right, whose keyShape is the main circle.",
        "paraId": 4,
        "tocIndex": 0
    },
    {
        "value": "G6 uses different combinations of shapes to design various built-in nodes/edges/combos. Built-in nodes include 'circle', 'rect', 'ellipse', ... (see ",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Built-in Nodes",
        "paraId": 6,
        "tocIndex": 0
    },
    {
        "value": "); built-in edges include 'line', 'polyline', 'cubic', ... (see ",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Built-in Edges",
        "paraId": 7,
        "tocIndex": 0
    },
    {
        "value": "); built-in combos include 'circle', 'rect', ... (see ",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "Built-in Combos",
        "paraId": 8,
        "tocIndex": 0
    },
    {
        "value": ").",
        "paraId": 5,
        "tocIndex": 0
    },
    {
        "value": "In addition to using built-in nodes/edges/combos, G6 also allows users to customize nodes/edges/combos by combining shapes as needed. See ",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "Custom Node",
        "paraId": 10,
        "tocIndex": 0
    },
    {
        "value": ", ",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "Custom Edge",
        "paraId": 11,
        "tocIndex": 0
    },
    {
        "value": ", and ",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "Custom Combo",
        "paraId": 12,
        "tocIndex": 0
    },
    {
        "value": " for details.",
        "paraId": 9,
        "tocIndex": 0
    },
    {
        "value": "In G6, each node, edge, or combo consists of one or more shapes, but one of them is called the keyShape, which is the \"key graphical element\" of the item:",
        "paraId": 13,
        "tocIndex": 1
    },
    {
        "value": "The key graphical element of the node is the colored area in the image above.",
        "paraId": 14,
        "tocIndex": 1
    },
    {
        "value": "Determines the bounding box of a node/combo",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": ", which is used to calculate the connection point of related edges (the intersection with the edge). If the keyShape is different, the intersection calculation between the node and the edge will also differ.",
        "paraId": 15,
        "tocIndex": 2
    },
    {
        "value": "In this example, a node consists of a rect shape and a circle shape with a gray stroke and transparent fill.",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "When the node's keyShape is the circle:",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "When the node's keyShape is the rect:",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "If you need to ",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "customize nodes",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": ", ",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "customize edges",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": ", or ",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "customize combos",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": ", you need to understand the lifecycle of shapes. If you use built-in nodes/edges/combos, you can skip this section.",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "The shape lifecycle includes:",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Initial Rendering",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ": Draws the shape for the first time based on data and style configuration.",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "Update",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ": Automatically updates the appearance of the shape when data or style changes.",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "Operation",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ": Responds to interaction states (such as selected, active, hover, etc.) and dynamically adjusts the style.",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "Destruction",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ": Cleans up when the shape is removed (usually managed automatically by the Graph, so users don't need to worry).",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "When customizing shapes, the most common requirement is \"how to efficiently manage the creation, update, and destruction of shapes.\" For this, G6 provides a very useful method in BaseShape:",
        "paraId": 25,
        "tocIndex": 4
    },
    {
        "value": "upsert is a combination of \"update\" and \"insert\", meaning \"update if exists, insert if not\". Its function can be simply understood as:",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "Automatic Judgment",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ": You only need to describe the desired appearance of the shape. ",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "upsert",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": " will automatically determine whether the shape already exists. If not, it will create it; if it exists, it will update it; if it needs to be deleted, it will remove it automatically.",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "Simplified Logic",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ": Developers do not need to manually manage the CRUD of shapes, avoiding duplicate code and state confusion.",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "Improved Robustness",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ": Whether it's the initial rendering, data changes, or state switching, upsert ensures that the shape always stays in sync with the data and configuration.",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "Type Definition:",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "/**\n * Create, update, or delete a shape\n * @param className Shape name\n * @param Ctor Shape type\n * @param style Shape style. Pass false to delete the shape\n * @param container Container\n * @param hooks Hooks\n * @returns Shape instance\n */\nupsert<T extends DisplayObject>(\n  className: string,\n  Ctor: string | { new (...args: any[]): T },\n  style: T['attributes'] | false,\n  container: DisplayObject,\n  hooks?: UpsertHooks,\n): T | undefined {}\n",
        "paraId": 29,
        "tocIndex": 5
    },
    {
        "value": "You only need to describe \"what kind of shape you want now\" without worrying about whether it is being created, updated, or deleted. upsert will handle it for you. This makes customizing and managing complex composite shapes very simple and safe.",
        "paraId": 30,
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
//# sourceMappingURL=docs_manual_element_shape_overview_en_md_q_hK4X-async.js.map