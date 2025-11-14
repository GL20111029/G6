((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/element.en.md?type=text'],
{ "docs/api/element.en.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/element.en.md?watch=parent");
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
        "value": "The ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Element",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " operation API in G6 allows you to control the behavior and attributes of elements such as nodes, edges, and Combos in the graph. These APIs can be used for:",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "Element State Management",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ": Set, update, or remove the state of elements",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Element Display Control",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ": Control the z-index and visibility of elements",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Element Collapse/Expand",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ": Operate the collapse/expand state of collapsible elements",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Element Position Operations",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ": Move and align element positions",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Element Focus",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": ": Focus the viewport on specific elements",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "Through these operations, you can achieve rich interactive effects and visual presentations.",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "Get the position of an element.",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "getElementPosition(id: ID): Point;\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "Parameters",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "Parameter",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Default",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Required",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "id",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Element ID",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "string",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "-",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "✓",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "Return Value",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "Type",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ": [number, number] | [number, number, number]",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Description",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ": Returns the coordinates of the element",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "Example",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 10,
        "tocIndex": 2
    },
    {
        "value": "graph.getElementPosition('node1');\n",
        "paraId": 11,
        "tocIndex": 2
    },
    {
        "value": "Get the rendering bounding box of the element itself and its child nodes in the world coordinate system.",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "getElementRenderBounds(id: ID): AABB;\n",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "Parameters",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "Parameter",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Default",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Required",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "id",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Element ID",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "string",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "-",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "✓",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "Return Value",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "Type",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": ": ",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "AABB",
        "paraId": 18,
        "tocIndex": 3
    },
    {
        "value": "Description",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": ": Returns the rendering bounding box of the element",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "Get the rendering style of an element.",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "getElementRenderStyle(id: ID): Record<string, any>;\n",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "Parameters",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "Parameter",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Default",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Required",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "id",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Element ID",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "string",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "-",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "✓",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "Return Value",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "Type",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ": Record<string, any>",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "Description",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ": Returns the rendering style of the element",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "Get the state of an element.",
        "paraId": 25,
        "tocIndex": 5
    },
    {
        "value": "getElementState(id: ID): State[];\n",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "Parameters",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "Parameter",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "Default",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "Required",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "id",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "Element ID",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "string",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "-",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "✓",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "Return Value",
        "paraId": 29,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 29,
        "tocIndex": 5
    },
    {
        "value": "Type",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": ": ",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "State",
        "paraId": 31,
        "tocIndex": 5
    },
    {
        "value": "[]",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "Description",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": ": Returns the state of the element",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "Get the type of an element.",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "getElementType(id: ID): string;\n",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "Parameters",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "Parameter",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "Default",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "Required",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "id",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "Element ID",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "string",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "-",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "✓",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "Return Value",
        "paraId": 36,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 36,
        "tocIndex": 6
    },
    {
        "value": "Type",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": ": string",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "Description",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": ": Returns the type of the element",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "Get the visibility of an element.",
        "paraId": 38,
        "tocIndex": 7
    },
    {
        "value": "getElementVisibility(id: ID): 'visible' | 'hidden';\n",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "Parameters",
        "paraId": 40,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 40,
        "tocIndex": 7
    },
    {
        "value": "Parameter",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "Description",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "Default",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "Required",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "id",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "Element ID",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "string",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "-",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "✓",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "Return Value",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": "Type",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": ": 'visible' | 'hidden'",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": "Description",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": ": Returns the visibility of the element",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": "Get the z-index of an element.",
        "paraId": 44,
        "tocIndex": 8
    },
    {
        "value": "getElementZIndex(id: ID): number;\n",
        "paraId": 45,
        "tocIndex": 8
    },
    {
        "value": "Parameters",
        "paraId": 46,
        "tocIndex": 8
    },
    {
        "value": ":",
        "paraId": 46,
        "tocIndex": 8
    },
    {
        "value": "Parameter",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Description",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Type",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Default",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Required",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "id",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Element ID",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "string",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "-",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "✓",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "Return Value",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": ":",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "Type",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": number",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "Description",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": Returns the z-index of the element",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "Set the state of an element, supporting two calling methods:",
        "paraId": 50,
        "tocIndex": 9
    },
    {
        "value": "// Set the state of a single element\nsetElementState(id: ID, state: State | State[], animation?: boolean): Promise<void>;\n\n// Set the state of multiple elements\nsetElementState(state: Record<ID, State | State[]>, animation?: boolean): Promise<void>;\n",
        "paraId": 51,
        "tocIndex": 9
    },
    {
        "value": "Parameters",
        "paraId": 52,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 52,
        "tocIndex": 9
    },
    {
        "value": "Single Element State Setting",
        "paraId": 53,
        "tocIndex": 9
    },
    {
        "value": "| Parameter | Description       | Type            | Default | Required |\n| --------- | ----------------- | --------------- | ------- | -------- | --- |\n| id        | Element ID to set | string          | -       | ✓        |\n| state     | State to set      | ",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "State",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": " | State[] | -        | ✓   |\n| animation | Enable animation  | boolean         | -       |          |",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "Batch Element State Setting",
        "paraId": 56,
        "tocIndex": 9
    },
    {
        "value": "| Parameter | Description                    | Type                       | Default  | Required |\n| --------- | ------------------------------ | -------------------------- | -------- | -------- | --- |\n| state     | Mapping of element ID to state | Record<ID, ",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "State",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": " | State[]> | -        | ✓   |\n| animation | Enable animation               | boolean                    | -        |          |",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "Return Value",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "Type",
        "paraId": 60,
        "tocIndex": 9
    },
    {
        "value": ": Promise",
        "paraId": 60,
        "tocIndex": 9
    },
    {
        "value": "Description",
        "paraId": 60,
        "tocIndex": 9
    },
    {
        "value": ": Returns a Promise that resolves when the state setting operation is complete",
        "paraId": 60,
        "tocIndex": 9
    },
    {
        "value": "Example",
        "paraId": 61,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 61,
        "tocIndex": 9
    },
    {
        "value": "// Set the state of a single element\nawait graph.setElementState('node1', 'selected');\n\n// Set the state of multiple elements\nawait graph.setElementState({\n  node1: 'selected',\n  node2: 'hover',\n  node3: ['selected', 'hover'],\n});\n",
        "paraId": 62,
        "tocIndex": 9
    },
    {
        "value": "Set the visibility of an element, supporting two calling methods:",
        "paraId": 63,
        "tocIndex": 10
    },
    {
        "value": "// Set the visibility of a single element\nsetElementVisibility(id: ID, visibility: 'visible' | 'hidden', animation?: boolean): Promise<void>;\n\n// Set the visibility of multiple elements\nsetElementVisibility(visibility: Record<ID, 'visible' | 'hidden'>, animation?: boolean): Promise<void>;\n",
        "paraId": 64,
        "tocIndex": 10
    },
    {
        "value": "Parameters",
        "paraId": 65,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 65,
        "tocIndex": 10
    },
    {
        "value": "Single Element Visibility Setting",
        "paraId": 66,
        "tocIndex": 10
    },
    {
        "value": "| Parameter  | Description       | Type      | Default  | Required |\n| ---------- | ----------------- | --------- | -------- | -------- | --- |\n| id         | Element ID to set | string    | -        | ✓        |\n| visibility | Visibility to set | 'visible' | 'hidden' | -        | ✓   |\n| animation  | Enable animation  | boolean   | -        |          |",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "Batch Element Visibility Setting",
        "paraId": 68,
        "tocIndex": 10
    },
    {
        "value": "| Parameter  | Description                         | Type                 | Default   | Required |\n| ---------- | ----------------------------------- | -------------------- | --------- | -------- | --- |\n| visibility | Mapping of element ID to visibility | Record<ID, 'visible' | 'hidden'> | -        | ✓   |\n| animation  | Enable animation                    | boolean              | -         |          |",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "Return Value",
        "paraId": 70,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 70,
        "tocIndex": 10
    },
    {
        "value": "Type",
        "paraId": 71,
        "tocIndex": 10
    },
    {
        "value": ": Promise",
        "paraId": 71,
        "tocIndex": 10
    },
    {
        "value": "Description",
        "paraId": 71,
        "tocIndex": 10
    },
    {
        "value": ": Returns a Promise that resolves when the visibility setting operation is complete",
        "paraId": 71,
        "tocIndex": 10
    },
    {
        "value": "Example",
        "paraId": 72,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 72,
        "tocIndex": 10
    },
    {
        "value": "// Set the visibility of a single element\nawait graph.setElementVisibility('node1', 'hidden');\n\n// Set the visibility of multiple elements\nawait graph.setElementVisibility({\n  node1: 'hidden',\n  node2: 'visibility',\n});\n",
        "paraId": 73,
        "tocIndex": 10
    },
    {
        "value": "Set the z-index of an element, supporting two calling methods:",
        "paraId": 74,
        "tocIndex": 11
    },
    {
        "value": "// Set the z-index of a single element\nsetElementZIndex(id: ID, zIndex: number): Promise<void>;\n\n// Set the z-index of multiple elements\nsetElementZIndex(zIndex: Record<ID, number>): Promise<void>;\n",
        "paraId": 75,
        "tocIndex": 11
    },
    {
        "value": "Parameters",
        "paraId": 76,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 76,
        "tocIndex": 11
    },
    {
        "value": "Single Element Z-Index Setting",
        "paraId": 77,
        "tocIndex": 11
    },
    {
        "value": "Parameter",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "Description",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "Type",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "Default",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "Required",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "id",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "Element ID",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "string",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "✓",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "zIndex",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "Z-Index",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "number",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "-",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "✓",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "Batch Element Z-Index Setting",
        "paraId": 79,
        "tocIndex": 11
    },
    {
        "value": "Parameter",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "Description",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "Type",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "Default",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "Required",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "zIndex",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "Mapping of element ID to z-index",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "Record<ID, number>",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "-",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "✓",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "Return Value",
        "paraId": 81,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 81,
        "tocIndex": 11
    },
    {
        "value": "Type",
        "paraId": 82,
        "tocIndex": 11
    },
    {
        "value": ": Promise",
        "paraId": 82,
        "tocIndex": 11
    },
    {
        "value": "Description",
        "paraId": 82,
        "tocIndex": 11
    },
    {
        "value": ": Returns a Promise that resolves when the z-index setting operation is complete",
        "paraId": 82,
        "tocIndex": 11
    },
    {
        "value": "Example",
        "paraId": 83,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 83,
        "tocIndex": 11
    },
    {
        "value": "// Set the z-index of a single element\nawait graph.setElementZIndex('node1', 10);\n\n// Set the z-index of multiple elements\nawait graph.setElementZIndex({\n  node1: 10,\n  node2: 20,\n  node3: 30,\n});\n",
        "paraId": 84,
        "tocIndex": 11
    },
    {
        "value": "Set the node style mapping, i.e., the value of ",
        "paraId": 85,
        "tocIndex": 12
    },
    {
        "value": "options.node",
        "paraId": 85,
        "tocIndex": 12
    },
    {
        "value": ".",
        "paraId": 85,
        "tocIndex": 12
    },
    {
        "value": "setNode(node: NodeOptions): void;\n",
        "paraId": 86,
        "tocIndex": 12
    },
    {
        "value": "Parameters",
        "paraId": 87,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 87,
        "tocIndex": 12
    },
    {
        "value": "Parameter",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "Description",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "Type",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "Default",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "Required",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "node",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "Node configuration",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "NodeOptions",
        "paraId": 89,
        "tocIndex": 12
    },
    {
        "value": "-",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "✓",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "Example",
        "paraId": 90,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 90,
        "tocIndex": 12
    },
    {
        "value": "// Set the fill color of all nodes to red\ngraph.setNode({\n  style: {\n    fill: 'red',\n  },\n});\n",
        "paraId": 91,
        "tocIndex": 12
    },
    {
        "value": "Set the edge style mapping, i.e., the value of ",
        "paraId": 92,
        "tocIndex": 13
    },
    {
        "value": "options.edge",
        "paraId": 92,
        "tocIndex": 13
    },
    {
        "value": ".",
        "paraId": 92,
        "tocIndex": 13
    },
    {
        "value": "setEdge(edge: EdgeOptions): void;\n",
        "paraId": 93,
        "tocIndex": 13
    },
    {
        "value": "Parameters",
        "paraId": 94,
        "tocIndex": 13
    },
    {
        "value": ":",
        "paraId": 94,
        "tocIndex": 13
    },
    {
        "value": "Parameter",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "Description",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "Type",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "Default",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "Required",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "edge",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "Edge configuration",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "EdgeOptions",
        "paraId": 96,
        "tocIndex": 13
    },
    {
        "value": "-",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "✓",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "Set the combo style mapping, i.e., the value of ",
        "paraId": 97,
        "tocIndex": 14
    },
    {
        "value": "options.combo",
        "paraId": 97,
        "tocIndex": 14
    },
    {
        "value": ".",
        "paraId": 97,
        "tocIndex": 14
    },
    {
        "value": "setCombo(combo: ComboOptions): void;\n",
        "paraId": 98,
        "tocIndex": 14
    },
    {
        "value": "Parameters",
        "paraId": 99,
        "tocIndex": 14
    },
    {
        "value": ":",
        "paraId": 99,
        "tocIndex": 14
    },
    {
        "value": "Parameter",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "Description",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "Type",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "Default",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "Required",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "combo",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "Combo configuration",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "ComboOptions",
        "paraId": 101,
        "tocIndex": 14
    },
    {
        "value": "-",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "✓",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "Collapse the specified element, usually used to collapse Combos or nodes with child elements.",
        "paraId": 102,
        "tocIndex": 15
    },
    {
        "value": "collapseElement(id: ID, options?: boolean | CollapseExpandNodeOptions): Promise<void>;\n",
        "paraId": 103,
        "tocIndex": 15
    },
    {
        "value": "Parameters",
        "paraId": 104,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 104,
        "tocIndex": 15
    },
    {
        "value": "| Parameter | Description                                                     | Type    | Default                                                 | Required |\n| --------- | --------------------------------------------------------------- | ------- | ------------------------------------------------------- | -------- | --- |\n| id        | Element ID to collapse                                          | string  | -                                                       | ✓        |\n| options   | Enable animation or detailed configuration for collapsing nodes | boolean | ",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "CollapseExpandNodeOptions",
        "paraId": 106,
        "tocIndex": 15
    },
    {
        "value": " | -        |     |",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "Return Value",
        "paraId": 107,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 107,
        "tocIndex": 15
    },
    {
        "value": "Type",
        "paraId": 108,
        "tocIndex": 15
    },
    {
        "value": ": Promise",
        "paraId": 108,
        "tocIndex": 15
    },
    {
        "value": "Description",
        "paraId": 108,
        "tocIndex": 15
    },
    {
        "value": ": Returns a Promise that resolves when the collapse operation is complete",
        "paraId": 108,
        "tocIndex": 15
    },
    {
        "value": "Example",
        "paraId": 109,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 109,
        "tocIndex": 15
    },
    {
        "value": "// Simple collapse with default configuration\nawait graph.collapseElement('combo1');\n\n// Collapse with animation\ngraph.collapseElement('combo1', true);\n\n// Collapse while ensuring the position of expanded/collapsed nodes remains unchanged\nawait graph.collapseElement('combo1', {\n  align: true,\n});\n",
        "paraId": 110,
        "tocIndex": 15
    },
    {
        "value": "Expand the specified element, usually used to expand previously collapsed Combos or nodes.",
        "paraId": 111,
        "tocIndex": 16
    },
    {
        "value": "expandElement(id: ID, options?: boolean | CollapseExpandNodeOptions): Promise<void>;\n",
        "paraId": 112,
        "tocIndex": 16
    },
    {
        "value": "Parameters",
        "paraId": 113,
        "tocIndex": 16
    },
    {
        "value": ":",
        "paraId": 113,
        "tocIndex": 16
    },
    {
        "value": "| Parameter | Description                                                    | Type    | Default                                                 | Required |\n| --------- | -------------------------------------------------------------- | ------- | ------------------------------------------------------- | -------- | --- |\n| id        | Element ID to expand                                           | string  | -                                                       | ✓        |\n| options   | Enable animation or detailed configuration for expanding nodes | boolean | ",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "CollapseExpandNodeOptions",
        "paraId": 115,
        "tocIndex": 16
    },
    {
        "value": " | -        |     |",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "Return Value",
        "paraId": 116,
        "tocIndex": 16
    },
    {
        "value": ":",
        "paraId": 116,
        "tocIndex": 16
    },
    {
        "value": "Type",
        "paraId": 117,
        "tocIndex": 16
    },
    {
        "value": ": Promise",
        "paraId": 117,
        "tocIndex": 16
    },
    {
        "value": "Description",
        "paraId": 117,
        "tocIndex": 16
    },
    {
        "value": ": Returns a Promise that resolves when the expand operation is complete",
        "paraId": 117,
        "tocIndex": 16
    },
    {
        "value": "Example",
        "paraId": 118,
        "tocIndex": 16
    },
    {
        "value": ":",
        "paraId": 118,
        "tocIndex": 16
    },
    {
        "value": "// Simple expand with default configuration\nawait graph.expandElement('combo1');\n\n// Expand with animation\nawait graph.expandElement('combo1', true);\n\n// Expand while ensuring the position of expanded/collapsed nodes remains unchanged\nawait graph.expandElement('combo1', {\n  align: true,\n});\n",
        "paraId": 119,
        "tocIndex": 16
    },
    {
        "value": "Bring the specified element to the front, making it appear above other overlapping elements.",
        "paraId": 120,
        "tocIndex": 17
    },
    {
        "value": "frontElement(id: ID | ID[]): void;\n",
        "paraId": 121,
        "tocIndex": 17
    },
    {
        "value": "Parameters",
        "paraId": 122,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 122,
        "tocIndex": 17
    },
    {
        "value": "| Parameter | Description | Type   | Default  | Required |\n| --------- | ----------- | ------ | -------- | -------- | --- |\n| id        | Element ID  | string | string[] | -        | ✓   |",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "Return Value",
        "paraId": 124,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 124,
        "tocIndex": 17
    },
    {
        "value": "Type",
        "paraId": 125,
        "tocIndex": 17
    },
    {
        "value": ": void",
        "paraId": 125,
        "tocIndex": 17
    },
    {
        "value": "Example",
        "paraId": 126,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 126,
        "tocIndex": 17
    },
    {
        "value": "// Bring a node to the front\ngraph.frontElement('node1');\n\n// Bring multiple selected nodes to the front\ngraph.frontElement(['node1', 'node2', 'node3']);\n",
        "paraId": 127,
        "tocIndex": 17
    },
    {
        "value": "Show the specified element.",
        "paraId": 128,
        "tocIndex": 18
    },
    {
        "value": "showElement(id: ID | ID[], animation?: boolean): Promise<void>;\n",
        "paraId": 129,
        "tocIndex": 18
    },
    {
        "value": "Parameters",
        "paraId": 130,
        "tocIndex": 18
    },
    {
        "value": ":",
        "paraId": 130,
        "tocIndex": 18
    },
    {
        "value": "| Parameter | Description      | Type    | Default  | Required |\n| --------- | ---------------- | ------- | -------- | -------- | --- |\n| id        | Element ID       | string  | string[] | -        | ✓   |\n| animation | Enable animation | boolean | -        |          |",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "Return Value",
        "paraId": 132,
        "tocIndex": 18
    },
    {
        "value": ":",
        "paraId": 132,
        "tocIndex": 18
    },
    {
        "value": "Type",
        "paraId": 133,
        "tocIndex": 18
    },
    {
        "value": ": Promise",
        "paraId": 133,
        "tocIndex": 18
    },
    {
        "value": "Description",
        "paraId": 133,
        "tocIndex": 18
    },
    {
        "value": ": Returns a Promise that resolves when the show operation is complete",
        "paraId": 133,
        "tocIndex": 18
    },
    {
        "value": "Example",
        "paraId": 134,
        "tocIndex": 18
    },
    {
        "value": ":",
        "paraId": 134,
        "tocIndex": 18
    },
    {
        "value": "// Show a single element\nawait graph.showElement('node1');\n\n// Show an element with animation\nawait graph.showElement('node1', true);\n\n// Show multiple elements\nawait graph.showElement(['node1', 'node2', 'node3']);\n",
        "paraId": 135,
        "tocIndex": 18
    },
    {
        "value": "Hide the specified element.",
        "paraId": 136,
        "tocIndex": 19
    },
    {
        "value": "hideElement(id: ID | ID[], animation?: boolean): Promise<void>;\n",
        "paraId": 137,
        "tocIndex": 19
    },
    {
        "value": "Parameters",
        "paraId": 138,
        "tocIndex": 19
    },
    {
        "value": ":",
        "paraId": 138,
        "tocIndex": 19
    },
    {
        "value": "| Parameter | Description      | Type    | Default  | Required |\n| --------- | ---------------- | ------- | -------- | -------- | --- |\n| id        | Element ID       | string  | string[] | -        | ✓   |\n| animation | Enable animation | boolean | -        |          |",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "Return Value",
        "paraId": 140,
        "tocIndex": 19
    },
    {
        "value": ":",
        "paraId": 140,
        "tocIndex": 19
    },
    {
        "value": "Type",
        "paraId": 141,
        "tocIndex": 19
    },
    {
        "value": ": Promise",
        "paraId": 141,
        "tocIndex": 19
    },
    {
        "value": "Description",
        "paraId": 141,
        "tocIndex": 19
    },
    {
        "value": ": Returns a Promise that resolves when the hide operation is complete",
        "paraId": 141,
        "tocIndex": 19
    },
    {
        "value": "Example",
        "paraId": 142,
        "tocIndex": 19
    },
    {
        "value": ":",
        "paraId": 142,
        "tocIndex": 19
    },
    {
        "value": "// Hide an element without animation\nawait graph.hideElement('node1');\n\n// Hide an element with animation\nawait graph.hideElement('node1', true);\n\n// Hide multiple elements\nawait graph.hideElement(['node1', 'node2', 'node3'], true);\n",
        "paraId": 143,
        "tocIndex": 19
    },
    {
        "value": "Translate an element by a specified distance, supporting two calling methods:",
        "paraId": 144,
        "tocIndex": 20
    },
    {
        "value": "// Translate an element by a specified distance (relative translation)\ntranslateElement(id: ID, offset: Point, animation?: boolean): Promise<void>;\n\n// Translate multiple elements by a specified distance (relative translation)\ntranslateElement(offsets: Record<ID, Point>, animation?: boolean): Promise<void>;\n",
        "paraId": 145,
        "tocIndex": 20
    },
    {
        "value": "Parameters",
        "paraId": 146,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 146,
        "tocIndex": 20
    },
    {
        "value": "Single Element Translation",
        "paraId": 147,
        "tocIndex": 20
    },
    {
        "value": "Parameter",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "Description",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "Type",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "Default",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "Required",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "id",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "Element ID",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "string",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "-",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "✓",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "offset",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "Relative translation distance [dx, dy]",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "[number, number]",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "-",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "✓",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "animation",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "Enable animation",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "boolean",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "-",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "Batch Element Translation",
        "paraId": 149,
        "tocIndex": 20
    },
    {
        "value": "Parameter",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "Description",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "Type",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "Default",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "Required",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "offsets",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "Mapping of element ID to translation distance",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "Record<ID, [number, number]>",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "-",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "✓",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "animation",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "Enable animation",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "boolean",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "-",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "Return Value",
        "paraId": 151,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 151,
        "tocIndex": 20
    },
    {
        "value": "Type",
        "paraId": 152,
        "tocIndex": 20
    },
    {
        "value": ": Promise",
        "paraId": 152,
        "tocIndex": 20
    },
    {
        "value": "Description",
        "paraId": 152,
        "tocIndex": 20
    },
    {
        "value": ": Returns a Promise that resolves when the translation operation is complete",
        "paraId": 152,
        "tocIndex": 20
    },
    {
        "value": "Example",
        "paraId": 153,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 153,
        "tocIndex": 20
    },
    {
        "value": "// Translate right by 100 pixels and down by 50 pixels\nawait graph.translateElementBy('node1', [100, 50]);\n\n// Translate with animation\nawait graph.translateElementBy('node1', [100, 50], true);\n\n// Apply the same translation to multiple nodes\nawait graph.translateElementBy(\n  {\n    node1: [50, 50],\n    node2: [100, 100],\n    node3: [150, 150],\n  },\n  true,\n);\n",
        "paraId": 154,
        "tocIndex": 20
    },
    {
        "value": "Move an element to a specified position, supporting two calling methods:",
        "paraId": 155,
        "tocIndex": 21
    },
    {
        "value": "// Move an element to a specified position (absolute position)\ntranslateElementTo(id: ID, position: Point, animation?: boolean): Promise<void>;\n\n// Move multiple elements to specified positions (absolute position)\ntranslateElementTo(positions: Record<ID, Point>, animation?: boolean): Promise<void>;\n",
        "paraId": 156,
        "tocIndex": 21
    },
    {
        "value": "Parameters",
        "paraId": 157,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 157,
        "tocIndex": 21
    },
    {
        "value": "Single Element Movement",
        "paraId": 158,
        "tocIndex": 21
    },
    {
        "value": "Parameter",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "Description",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "Type",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "Default",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "Required",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "id",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "Element ID",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "string",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "-",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "✓",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "position",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "Target absolute position [x, y]",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "[number, number]",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "-",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "✓",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "animation",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "Enable animation",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "boolean",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "-",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "Batch Element Movement",
        "paraId": 160,
        "tocIndex": 21
    },
    {
        "value": "Parameter",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "Description",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "Type",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "Default",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "Required",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "positions",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "Mapping of element ID to target position",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "Record<string, [number, number]>",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "-",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "✓",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "animation",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "Enable animation",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "boolean",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "-",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "Return Value",
        "paraId": 162,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 162,
        "tocIndex": 21
    },
    {
        "value": "Type",
        "paraId": 163,
        "tocIndex": 21
    },
    {
        "value": ": Promise",
        "paraId": 163,
        "tocIndex": 21
    },
    {
        "value": "Description",
        "paraId": 163,
        "tocIndex": 21
    },
    {
        "value": ": Returns a Promise that resolves when the movement operation is complete",
        "paraId": 163,
        "tocIndex": 21
    },
    {
        "value": "Example",
        "paraId": 164,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 164,
        "tocIndex": 21
    },
    {
        "value": "// Move a node to position (200, 300) on the canvas\nawait graph.translateElementTo('node1', [200, 300]);\n\n// Move with animation\nawait graph.translateElementTo('node1', [200, 300], true);\n\n// Arrange a group of nodes neatly\nawait graph.translateElementTo(\n  {\n    node1: [100, 100],\n    node2: [200, 200],\n    node3: [300, 100],\n  },\n  true,\n);\n",
        "paraId": 165,
        "tocIndex": 21
    },
    {
        "value": "Focus on the specified element, centering it in the viewport.",
        "paraId": 166,
        "tocIndex": 22
    },
    {
        "value": "focusElement(id: ID | ID[], animation?: ViewportAnimationEffectTiming): Promise<void>;\n",
        "paraId": 167,
        "tocIndex": 22
    },
    {
        "value": "Parameters",
        "paraId": 168,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 168,
        "tocIndex": 22
    },
    {
        "value": "| Parameter | Description                         | Type                                                            | Default  | Required |\n| --------- | ----------------------------------- | --------------------------------------------------------------- | -------- | -------- | --- |\n| id        | One or more element IDs to focus on | string                                                          | string[] | -        | ✓   |\n| animation | Viewport animation configuration    | ",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 170,
        "tocIndex": 22
    },
    {
        "value": " | -        |          |",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "Return Value",
        "paraId": 171,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 171,
        "tocIndex": 22
    },
    {
        "value": "Type",
        "paraId": 172,
        "tocIndex": 22
    },
    {
        "value": ": Promise",
        "paraId": 172,
        "tocIndex": 22
    },
    {
        "value": "Description",
        "paraId": 172,
        "tocIndex": 22
    },
    {
        "value": ": Returns a Promise that resolves when the focus operation is complete",
        "paraId": 172,
        "tocIndex": 22
    },
    {
        "value": "Example",
        "paraId": 173,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 173,
        "tocIndex": 22
    },
    {
        "value": "// Focus on a single node\nawait graph.focusElement('node1');\n\n// Use custom animation configuration\nawait graph.focusElement('node1', {\n  duration: 800,\n  easing: 'ease-in-out',\n});\n\n// Focus on multiple nodes\nawait graph.focusElement(['node1', 'node2', 'node3']);\n",
        "paraId": 174,
        "tocIndex": 22
    },
    {
        "value": "Configuration options for collapsing or expanding elements.",
        "paraId": 175,
        "tocIndex": 24
    },
    {
        "value": "interface CollapseExpandNodeOptions {\n  /**\n   * Enable animation\n   */\n  animation?: boolean;\n  /**\n   * Ensure the position of expanded/collapsed nodes remains unchanged\n   */\n  align?: boolean;\n}\n",
        "paraId": 176,
        "tocIndex": 24
    },
    {
        "value": "Viewport animation configuration type.",
        "paraId": 177,
        "tocIndex": 25
    },
    {
        "value": "type ViewportAnimationEffectTiming =\n  | boolean // Enable animation\n  | {\n      easing?: string; // Easing function\n      duration?: number; // Animation duration (ms)\n    };\n",
        "paraId": 178,
        "tocIndex": 25
    },
    {
        "value": "AABB (Axis-Aligned Bounding Box) is a fundamental concept in computer graphics.",
        "paraId": 179,
        "tocIndex": 26
    },
    {
        "value": "interface AABB {\n  x: number; // x-coordinate of the top-left corner of the rectangle\n  y: number; // y-coordinate of the top-left corner of the rectangle\n  width: number; // Width of the rectangle\n  height: number; // Height of the rectangle\n}\n",
        "paraId": 180,
        "tocIndex": 26
    },
    {
        "value": "Element state type.",
        "paraId": 181,
        "tocIndex": 27
    },
    {
        "value": "type State = 'selected' | 'hover' | 'active' | 'inactive' | 'disabled' | string;\n",
        "paraId": 182,
        "tocIndex": 27
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
//# sourceMappingURL=docs_api_element_en_md_q_hK4X-async.js.map