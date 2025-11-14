((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/element.zh.md?type=text'],
{ "docs/api/element.zh.md?type=text": function (module, exports, __mako_require__){
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
__mako_require__("docs/api/element.zh.md?watch=parent");
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
        "value": "G6 中的 ",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "元素",
        "paraId": 1,
        "tocIndex": 0
    },
    {
        "value": " 操作 API 允许您控制图中节点、边和组合(Combo)等元素的行为和属性。这些 API 可以用于：",
        "paraId": 0,
        "tocIndex": 0
    },
    {
        "value": "元素状态管理",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "：设置、更新或移除元素的状态",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "元素显示控制",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "：控制元素的层级、可见性",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "元素展开/收起",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "：操作可折叠元素的展开/收起状态",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "元素位置操作",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "：移动、对齐元素位置",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "元素聚焦",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "：将视口聚焦到特定元素",
        "paraId": 2,
        "tocIndex": 0
    },
    {
        "value": "通过这些操作，您可以实现丰富的交互效果和视觉呈现。",
        "paraId": 3,
        "tocIndex": 0
    },
    {
        "value": "获取元素位置。",
        "paraId": 4,
        "tocIndex": 2
    },
    {
        "value": "getElementPosition(id: ID): Point;\n",
        "paraId": 5,
        "tocIndex": 2
    },
    {
        "value": "参数",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 6,
        "tocIndex": 2
    },
    {
        "value": "参数",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "默认值",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "必选",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "id",
        "paraId": 7,
        "tocIndex": 2
    },
    {
        "value": "元素 ID",
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
        "value": "返回值",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": ":",
        "paraId": 8,
        "tocIndex": 2
    },
    {
        "value": "类型",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ": [number, number] | [number, number, number]",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "描述",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": ": 返回元素的坐标位置",
        "paraId": 9,
        "tocIndex": 2
    },
    {
        "value": "示例",
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
        "value": "获取元素自身以及子节点在世界坐标系下的渲染包围盒。",
        "paraId": 12,
        "tocIndex": 3
    },
    {
        "value": "getElementRenderBounds(id: ID): AABB;\n",
        "paraId": 13,
        "tocIndex": 3
    },
    {
        "value": "参数",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 14,
        "tocIndex": 3
    },
    {
        "value": "参数",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "描述",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "类型",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "默认值",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "必选",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "id",
        "paraId": 15,
        "tocIndex": 3
    },
    {
        "value": "元素 ID",
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
        "value": "返回值",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": ":",
        "paraId": 16,
        "tocIndex": 3
    },
    {
        "value": "类型",
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
        "value": "描述",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": ": 返回元素的渲染包围盒",
        "paraId": 17,
        "tocIndex": 3
    },
    {
        "value": "获取元素的渲染样式。",
        "paraId": 19,
        "tocIndex": 4
    },
    {
        "value": "getElementRenderStyle(id: ID): Record<string, any>;\n",
        "paraId": 20,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 21,
        "tocIndex": 4
    },
    {
        "value": "参数",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "默认值",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "必选",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "id",
        "paraId": 22,
        "tocIndex": 4
    },
    {
        "value": "元素 ID",
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
        "value": "返回值",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": ":",
        "paraId": 23,
        "tocIndex": 4
    },
    {
        "value": "类型",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ": Record<string, any>",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "描述",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": ": 返回元素的渲染样式",
        "paraId": 24,
        "tocIndex": 4
    },
    {
        "value": "获取元素的状态。",
        "paraId": 25,
        "tocIndex": 5
    },
    {
        "value": "getElementState(id: ID): State[];\n",
        "paraId": 26,
        "tocIndex": 5
    },
    {
        "value": "参数",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 27,
        "tocIndex": 5
    },
    {
        "value": "参数",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "描述",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "类型",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "默认值",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "必选",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "id",
        "paraId": 28,
        "tocIndex": 5
    },
    {
        "value": "元素 ID",
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
        "value": "返回值",
        "paraId": 29,
        "tocIndex": 5
    },
    {
        "value": ":",
        "paraId": 29,
        "tocIndex": 5
    },
    {
        "value": "类型",
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
        "value": "描述",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": ": 返回元素的状态",
        "paraId": 30,
        "tocIndex": 5
    },
    {
        "value": "获取元素类型。",
        "paraId": 32,
        "tocIndex": 6
    },
    {
        "value": "getElementType(id: ID): string;\n",
        "paraId": 33,
        "tocIndex": 6
    },
    {
        "value": "参数",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 34,
        "tocIndex": 6
    },
    {
        "value": "参数",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "描述",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "类型",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "默认值",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "必选",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "id",
        "paraId": 35,
        "tocIndex": 6
    },
    {
        "value": "元素 ID",
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
        "value": "返回值",
        "paraId": 36,
        "tocIndex": 6
    },
    {
        "value": ":",
        "paraId": 36,
        "tocIndex": 6
    },
    {
        "value": "类型",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": ": string",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "描述",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": ": 返回元素的类型",
        "paraId": 37,
        "tocIndex": 6
    },
    {
        "value": "获取元素可见性。",
        "paraId": 38,
        "tocIndex": 7
    },
    {
        "value": "getElementVisibility(id: ID): 'visible' | 'hidden' ;\n",
        "paraId": 39,
        "tocIndex": 7
    },
    {
        "value": "参数",
        "paraId": 40,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 40,
        "tocIndex": 7
    },
    {
        "value": "参数",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "描述",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "类型",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "默认值",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "必选",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "id",
        "paraId": 41,
        "tocIndex": 7
    },
    {
        "value": "元素 ID",
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
        "value": "返回值",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": ":",
        "paraId": 42,
        "tocIndex": 7
    },
    {
        "value": "类型",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": ": 'visible' | 'hidden'",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": "描述",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": ": 返回元素的可见性",
        "paraId": 43,
        "tocIndex": 7
    },
    {
        "value": "获取元素层级。",
        "paraId": 44,
        "tocIndex": 8
    },
    {
        "value": "getElementZIndex(id: ID): number;\n",
        "paraId": 45,
        "tocIndex": 8
    },
    {
        "value": "参数",
        "paraId": 46,
        "tocIndex": 8
    },
    {
        "value": ":",
        "paraId": 46,
        "tocIndex": 8
    },
    {
        "value": "参数",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "描述",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "类型",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "默认值",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "必选",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "id",
        "paraId": 47,
        "tocIndex": 8
    },
    {
        "value": "元素 ID",
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
        "value": "返回值",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": ":",
        "paraId": 48,
        "tocIndex": 8
    },
    {
        "value": "类型",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": number",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "描述",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": ": 返回元素的层级",
        "paraId": 49,
        "tocIndex": 8
    },
    {
        "value": "设置元素状态，支持两种调用方式：",
        "paraId": 50,
        "tocIndex": 9
    },
    {
        "value": "// 设置单个元素状态\nsetElementState(id: ID, state: State | State[], animation?: boolean): Promise<void>;\n\n// 批量设置元素状态\nsetElementState(state: Record<ID, State | State[]>, animation?: boolean): Promise<void>;\n",
        "paraId": 51,
        "tocIndex": 9
    },
    {
        "value": "参数",
        "paraId": 52,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 52,
        "tocIndex": 9
    },
    {
        "value": "单个元素状态设置",
        "paraId": 53,
        "tocIndex": 9
    },
    {
        "value": "参数",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "描述",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "类型",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "默认值",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "必选",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "id",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "要设置状态的元素 ID",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "string",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "✓",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "state",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "要设置的状态",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "State",
        "paraId": 55,
        "tocIndex": 9
    },
    {
        "value": " | State[]",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "✓",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "animation",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "是否启用动画",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "boolean",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 54,
        "tocIndex": 9
    },
    {
        "value": "批量元素状态设置",
        "paraId": 56,
        "tocIndex": 9
    },
    {
        "value": "参数",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "描述",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "类型",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "默认值",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "必选",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "state",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "元素ID到状态的映射",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "Record<ID, ",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "State",
        "paraId": 58,
        "tocIndex": 9
    },
    {
        "value": " | State[]>",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "✓",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "animation",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "是否启用动画",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "boolean",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "-",
        "paraId": 57,
        "tocIndex": 9
    },
    {
        "value": "返回值",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 59,
        "tocIndex": 9
    },
    {
        "value": "类型",
        "paraId": 60,
        "tocIndex": 9
    },
    {
        "value": ": Promise<void>",
        "paraId": 60,
        "tocIndex": 9
    },
    {
        "value": "描述",
        "paraId": 60,
        "tocIndex": 9
    },
    {
        "value": ": 返回一个 Promise，状态设置操作完成后 resolve",
        "paraId": 60,
        "tocIndex": 9
    },
    {
        "value": "示例",
        "paraId": 61,
        "tocIndex": 9
    },
    {
        "value": ":",
        "paraId": 61,
        "tocIndex": 9
    },
    {
        "value": "// 设置单个元素状态\nawait graph.setElementState('node1', 'selected');\n\n// 设置多个元素状态\nawait graph.setElementState({\n  node1: 'selected',\n  node2: 'hover',\n  node3: ['selected', 'hover'],\n});\n",
        "paraId": 62,
        "tocIndex": 9
    },
    {
        "value": "设置元素的可见性，支持两种调用方式：",
        "paraId": 63,
        "tocIndex": 10
    },
    {
        "value": "// 设置单个元素可见性\nsetElementVisibility(id: ID, visibility: 'visible' | 'hidden', animation?: boolean): Promise<void>;\n\n// 批量设置元素可见性\nsetElementVisibility(visibility: Record<ID, 'visible' | 'hidden'>, animation?: boolean): Promise<void>;\n",
        "paraId": 64,
        "tocIndex": 10
    },
    {
        "value": "参数",
        "paraId": 65,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 65,
        "tocIndex": 10
    },
    {
        "value": "单个元素可见性设置",
        "paraId": 66,
        "tocIndex": 10
    },
    {
        "value": "参数",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "描述",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "类型",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "默认值",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "必选",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "id",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "要设置可见性的元素 ID",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "string",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "-",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "✓",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "visibility",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "要设置的可见性",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "'visible'",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": " | ",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "'hidden'",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "-",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "✓",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "animation",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "是否启用动画",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "boolean",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "-",
        "paraId": 67,
        "tocIndex": 10
    },
    {
        "value": "批量元素可见性设置",
        "paraId": 68,
        "tocIndex": 10
    },
    {
        "value": "参数",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "描述",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "类型",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "默认值",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "必选",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "visibility",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "元素ID到可见性的映射",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "Record<ID, ",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "'visible'",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": " | ",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "'hidden'",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": ">",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "-",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "✓",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "animation",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "是否启用动画",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "boolean",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "-",
        "paraId": 69,
        "tocIndex": 10
    },
    {
        "value": "返回值",
        "paraId": 70,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 70,
        "tocIndex": 10
    },
    {
        "value": "类型",
        "paraId": 71,
        "tocIndex": 10
    },
    {
        "value": ": Promise<void>",
        "paraId": 71,
        "tocIndex": 10
    },
    {
        "value": "描述",
        "paraId": 71,
        "tocIndex": 10
    },
    {
        "value": ": 返回一个 Promise，可见性设置操作完成后 resolve",
        "paraId": 71,
        "tocIndex": 10
    },
    {
        "value": "示例",
        "paraId": 72,
        "tocIndex": 10
    },
    {
        "value": ":",
        "paraId": 72,
        "tocIndex": 10
    },
    {
        "value": "// 设置单个元素可见性\nawait graph.setElementVisibility('node1', 'hidden');\n\n// 设置多个元素可见性\nawait graph.setElementVisibility({\n  node1: 'hidden',\n  node2: 'visibility',\n});\n",
        "paraId": 73,
        "tocIndex": 10
    },
    {
        "value": "设置元素的层级，有两种调用方式：",
        "paraId": 74,
        "tocIndex": 11
    },
    {
        "value": "// 设置单个元素层级\nsetElementZIndex(id: ID, zIndex: number): Promise<void>;\n\n// 批量设置元素层级\nsetElementZIndex(zIndex: Record<ID, number>): Promise<void>;\n",
        "paraId": 75,
        "tocIndex": 11
    },
    {
        "value": "参数",
        "paraId": 76,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 76,
        "tocIndex": 11
    },
    {
        "value": "单个元素层级设置",
        "paraId": 77,
        "tocIndex": 11
    },
    {
        "value": "参数",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "描述",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "类型",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "默认值",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "必选",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "id",
        "paraId": 78,
        "tocIndex": 11
    },
    {
        "value": "元素 ID",
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
        "value": "层级",
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
        "value": "批量元素层级设置",
        "paraId": 79,
        "tocIndex": 11
    },
    {
        "value": "参数",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "描述",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "类型",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "默认值",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "必选",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "zIndex",
        "paraId": 80,
        "tocIndex": 11
    },
    {
        "value": "元素ID到层级的映射",
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
        "value": "返回值",
        "paraId": 81,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 81,
        "tocIndex": 11
    },
    {
        "value": "类型",
        "paraId": 82,
        "tocIndex": 11
    },
    {
        "value": ": Promise<void>",
        "paraId": 82,
        "tocIndex": 11
    },
    {
        "value": "描述",
        "paraId": 82,
        "tocIndex": 11
    },
    {
        "value": ": 返回一个 Promise，层级设置操作完成后 resolve",
        "paraId": 82,
        "tocIndex": 11
    },
    {
        "value": "示例",
        "paraId": 83,
        "tocIndex": 11
    },
    {
        "value": ":",
        "paraId": 83,
        "tocIndex": 11
    },
    {
        "value": "// 设置单个元素层级\nawait graph.setElementZIndex('node1', 10);\n\n// 设置多个元素层级\nawait graph.setElementZIndex({\n  node1: 10,\n  node2: 20,\n  node3: 30,\n});\n",
        "paraId": 84,
        "tocIndex": 11
    },
    {
        "value": "设置节点样式映射。即 ",
        "paraId": 85,
        "tocIndex": 12
    },
    {
        "value": "options.node",
        "paraId": 85,
        "tocIndex": 12
    },
    {
        "value": " 的值。",
        "paraId": 85,
        "tocIndex": 12
    },
    {
        "value": "setNode(node: NodeOptions): void;\n",
        "paraId": 86,
        "tocIndex": 12
    },
    {
        "value": "参数",
        "paraId": 87,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 87,
        "tocIndex": 12
    },
    {
        "value": "参数",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "描述",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "类型",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "默认值",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "必选",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "node",
        "paraId": 88,
        "tocIndex": 12
    },
    {
        "value": "节点配置",
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
        "value": "示例",
        "paraId": 90,
        "tocIndex": 12
    },
    {
        "value": ":",
        "paraId": 90,
        "tocIndex": 12
    },
    {
        "value": "// 设置所有的节点填充色为红色\ngraph.setNode({\n  style: {\n    fill: 'red',\n  },\n});\n",
        "paraId": 91,
        "tocIndex": 12
    },
    {
        "value": "设置边样式映射。即 ",
        "paraId": 92,
        "tocIndex": 13
    },
    {
        "value": "options.edge",
        "paraId": 92,
        "tocIndex": 13
    },
    {
        "value": " 的值。",
        "paraId": 92,
        "tocIndex": 13
    },
    {
        "value": "setEdge(edge: EdgeOptions): void;\n",
        "paraId": 93,
        "tocIndex": 13
    },
    {
        "value": "参数",
        "paraId": 94,
        "tocIndex": 13
    },
    {
        "value": ":",
        "paraId": 94,
        "tocIndex": 13
    },
    {
        "value": "参数",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "描述",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "类型",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "默认值",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "必选",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "edge",
        "paraId": 95,
        "tocIndex": 13
    },
    {
        "value": "边配置",
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
        "value": "设置组合样式映射。即 ",
        "paraId": 97,
        "tocIndex": 14
    },
    {
        "value": "options.combo",
        "paraId": 97,
        "tocIndex": 14
    },
    {
        "value": " 的值。",
        "paraId": 97,
        "tocIndex": 14
    },
    {
        "value": "setCombo(combo: ComboOptions): void;\n",
        "paraId": 98,
        "tocIndex": 14
    },
    {
        "value": "参数",
        "paraId": 99,
        "tocIndex": 14
    },
    {
        "value": ":",
        "paraId": 99,
        "tocIndex": 14
    },
    {
        "value": "参数",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "描述",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "类型",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "默认值",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "必选",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "combo",
        "paraId": 100,
        "tocIndex": 14
    },
    {
        "value": "组合配置",
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
        "value": "收起指定元素，通常用于折叠组合(Combo)或具有子元素的节点。",
        "paraId": 102,
        "tocIndex": 15
    },
    {
        "value": "collapseElement(id: ID, options?: boolean | CollapseExpandNodeOptions): Promise<void>;\n",
        "paraId": 103,
        "tocIndex": 15
    },
    {
        "value": "参数",
        "paraId": 104,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 104,
        "tocIndex": 15
    },
    {
        "value": "参数",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "描述",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "类型",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "默认值",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "必选",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "id",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "要收起的元素 ID",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "string",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "-",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "✓",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "options",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "是否启用动画或收起节点的详细配置项",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "boolean | ",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "CollapseExpandNodeOptions",
        "paraId": 106,
        "tocIndex": 15
    },
    {
        "value": "-",
        "paraId": 105,
        "tocIndex": 15
    },
    {
        "value": "返回值",
        "paraId": 107,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 107,
        "tocIndex": 15
    },
    {
        "value": "类型",
        "paraId": 108,
        "tocIndex": 15
    },
    {
        "value": ": Promise<void>",
        "paraId": 108,
        "tocIndex": 15
    },
    {
        "value": "描述",
        "paraId": 108,
        "tocIndex": 15
    },
    {
        "value": ": 返回一个 Promise，收起操作完成后 resolve",
        "paraId": 108,
        "tocIndex": 15
    },
    {
        "value": "示例",
        "paraId": 109,
        "tocIndex": 15
    },
    {
        "value": ":",
        "paraId": 109,
        "tocIndex": 15
    },
    {
        "value": "// 简单收起，使用默认配置\nawait graph.collapseElement('combo1');\n\n// 收起并启用动画\nawait graph.collapseElement('combo1', true);\n\n// 收起并保证展开/收起的节点位置不变\nawait graph.collapseElement('combo1', {\n  align: true,\n});\n",
        "paraId": 110,
        "tocIndex": 15
    },
    {
        "value": "展开指定元素，通常用于展开先前收起的组合(Combo)或节点。",
        "paraId": 111,
        "tocIndex": 16
    },
    {
        "value": "expandElement(id: ID, options?: boolean | CollapseExpandNodeOptions): Promise<void>;\n",
        "paraId": 112,
        "tocIndex": 16
    },
    {
        "value": "参数",
        "paraId": 113,
        "tocIndex": 16
    },
    {
        "value": ":",
        "paraId": 113,
        "tocIndex": 16
    },
    {
        "value": "参数",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "描述",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "类型",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "默认值",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "必选",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "id",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "要展开的元素 ID",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "string",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "✓",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "options",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "是否启用动画或展开节点的详细配置项",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "boolean | ",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "CollapseExpandNodeOptions",
        "paraId": 115,
        "tocIndex": 16
    },
    {
        "value": "-",
        "paraId": 114,
        "tocIndex": 16
    },
    {
        "value": "返回值",
        "paraId": 116,
        "tocIndex": 16
    },
    {
        "value": ":",
        "paraId": 116,
        "tocIndex": 16
    },
    {
        "value": "类型",
        "paraId": 117,
        "tocIndex": 16
    },
    {
        "value": ": Promise<void>",
        "paraId": 117,
        "tocIndex": 16
    },
    {
        "value": "描述",
        "paraId": 117,
        "tocIndex": 16
    },
    {
        "value": ": 返回一个 Promise，展开操作完成后 resolve",
        "paraId": 117,
        "tocIndex": 16
    },
    {
        "value": "示例",
        "paraId": 118,
        "tocIndex": 16
    },
    {
        "value": ":",
        "paraId": 118,
        "tocIndex": 16
    },
    {
        "value": "// 简单展开，使用默认配置\nawait graph.expandElement('combo1');\n\n// 展开并启用动画\nawait graph.expandElement('combo1', true);\n\n// 展开并保证展开/收起的节点位置不变\nawait graph.expandElement('combo1', {\n  align: true,\n});\n",
        "paraId": 119,
        "tocIndex": 16
    },
    {
        "value": "将指定元素置于最顶层，使其显示在其他重叠元素之上。",
        "paraId": 120,
        "tocIndex": 17
    },
    {
        "value": "frontElement(id: ID | ID[]): void;\n",
        "paraId": 121,
        "tocIndex": 17
    },
    {
        "value": "参数",
        "paraId": 122,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 122,
        "tocIndex": 17
    },
    {
        "value": "参数",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "描述",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "类型",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "默认值",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "必选",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "id",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "元素 ID",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "string | string[]",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "-",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "✓",
        "paraId": 123,
        "tocIndex": 17
    },
    {
        "value": "返回值",
        "paraId": 124,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 124,
        "tocIndex": 17
    },
    {
        "value": "类型",
        "paraId": 125,
        "tocIndex": 17
    },
    {
        "value": ": void",
        "paraId": 125,
        "tocIndex": 17
    },
    {
        "value": "示例",
        "paraId": 126,
        "tocIndex": 17
    },
    {
        "value": ":",
        "paraId": 126,
        "tocIndex": 17
    },
    {
        "value": "// 将节点置于最顶层\ngraph.frontElement('node1');\n\n// 对于选中的多个节点，都置于最顶层\ngraph.frontElement(['node1', 'node2', 'node3']);\n",
        "paraId": 127,
        "tocIndex": 17
    },
    {
        "value": "显示指定元素。",
        "paraId": 128,
        "tocIndex": 18
    },
    {
        "value": "showElement(id: ID | ID[], animation?: boolean): Promise<void>;\n",
        "paraId": 129,
        "tocIndex": 18
    },
    {
        "value": "参数",
        "paraId": 130,
        "tocIndex": 18
    },
    {
        "value": ":",
        "paraId": 130,
        "tocIndex": 18
    },
    {
        "value": "参数",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "描述",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "类型",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "默认值",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "必选",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "id",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "元素 ID",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "string | string[]",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "-",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "✓",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "animation",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "是否启用动画",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "boolean",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "-",
        "paraId": 131,
        "tocIndex": 18
    },
    {
        "value": "返回值",
        "paraId": 132,
        "tocIndex": 18
    },
    {
        "value": ":",
        "paraId": 132,
        "tocIndex": 18
    },
    {
        "value": "类型",
        "paraId": 133,
        "tocIndex": 18
    },
    {
        "value": ": Promise<void>",
        "paraId": 133,
        "tocIndex": 18
    },
    {
        "value": "描述",
        "paraId": 133,
        "tocIndex": 18
    },
    {
        "value": ": 返回一个 Promise，显示操作完成后 resolve",
        "paraId": 133,
        "tocIndex": 18
    },
    {
        "value": "示例",
        "paraId": 134,
        "tocIndex": 18
    },
    {
        "value": ":",
        "paraId": 134,
        "tocIndex": 18
    },
    {
        "value": "// 显示单个元素\nawait graph.showElement('node1');\n\n// 带动画显示元素\nawait graph.showElement('node1', true);\n\n// 显示多个元素\nawait graph.showElement(['node1', 'node2', 'node3']);\n",
        "paraId": 135,
        "tocIndex": 18
    },
    {
        "value": "隐藏指定元素。",
        "paraId": 136,
        "tocIndex": 19
    },
    {
        "value": "hideElement(id: ID | ID[], animation?: boolean): Promise<void>;\n",
        "paraId": 137,
        "tocIndex": 19
    },
    {
        "value": "参数",
        "paraId": 138,
        "tocIndex": 19
    },
    {
        "value": ":",
        "paraId": 138,
        "tocIndex": 19
    },
    {
        "value": "参数",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "描述",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "类型",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "默认值",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "必选",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "id",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "元素 ID",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "string | string[]",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "-",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "✓",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "animation",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "是否启用动画",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "boolean",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "-",
        "paraId": 139,
        "tocIndex": 19
    },
    {
        "value": "返回值",
        "paraId": 140,
        "tocIndex": 19
    },
    {
        "value": ":",
        "paraId": 140,
        "tocIndex": 19
    },
    {
        "value": "类型",
        "paraId": 141,
        "tocIndex": 19
    },
    {
        "value": ": Promise<void>",
        "paraId": 141,
        "tocIndex": 19
    },
    {
        "value": "描述",
        "paraId": 141,
        "tocIndex": 19
    },
    {
        "value": ": 返回一个 Promise，隐藏操作完成后 resolve",
        "paraId": 141,
        "tocIndex": 19
    },
    {
        "value": "示例",
        "paraId": 142,
        "tocIndex": 19
    },
    {
        "value": ":",
        "paraId": 142,
        "tocIndex": 19
    },
    {
        "value": "// 无动画隐藏元素\nawait graph.hideElement('node1');\n\n// 带动画隐藏元素\nawait graph.hideElement('node1', true);\n\n// 隐藏多个元素\nawait graph.hideElement(['node1', 'node2', 'node3'], true);\n",
        "paraId": 143,
        "tocIndex": 19
    },
    {
        "value": "相对平移元素指定距离，支持两种调用方式：",
        "paraId": 144,
        "tocIndex": 20
    },
    {
        "value": "// 将元素平移指定距离（相对平移）\ntranslateElement(id: ID, offset: Point, animation?: boolean): Promise<void>;\n\n// 批量将元素平移指定距离（相对平移）\ntranslateElement(offsets: Record<ID, Point>, animation?: boolean): Promise<void>;\n",
        "paraId": 145,
        "tocIndex": 20
    },
    {
        "value": "参数",
        "paraId": 146,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 146,
        "tocIndex": 20
    },
    {
        "value": "单个元素平移",
        "paraId": 147,
        "tocIndex": 20
    },
    {
        "value": "参数",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "描述",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "类型",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "默认值",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "必选",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "id",
        "paraId": 148,
        "tocIndex": 20
    },
    {
        "value": "要平移的元素 ID",
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
        "value": "平移的相对距离 [dx, dy]",
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
        "value": "是否启用动画",
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
        "value": "批量元素平移",
        "paraId": 149,
        "tocIndex": 20
    },
    {
        "value": "参数",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "描述",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "类型",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "默认值",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "必选",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "offsets",
        "paraId": 150,
        "tocIndex": 20
    },
    {
        "value": "元素ID到平移距离的映射",
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
        "value": "是否启用动画",
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
        "value": "返回值",
        "paraId": 151,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 151,
        "tocIndex": 20
    },
    {
        "value": "类型",
        "paraId": 152,
        "tocIndex": 20
    },
    {
        "value": ": Promise<void>",
        "paraId": 152,
        "tocIndex": 20
    },
    {
        "value": "描述",
        "paraId": 152,
        "tocIndex": 20
    },
    {
        "value": ": 返回一个 Promise，平移操作完成后 resolve",
        "paraId": 152,
        "tocIndex": 20
    },
    {
        "value": "示例",
        "paraId": 153,
        "tocIndex": 20
    },
    {
        "value": ":",
        "paraId": 153,
        "tocIndex": 20
    },
    {
        "value": "// 向右平移100像素，向下平移50像素\nawait graph.translateElementBy('node1', [100, 50]);\n\n// 带动画平移\nawait graph.translateElementBy('node1', [100, 50], true);\n\n// 对多个节点应用相同的平移\nawait graph.translateElementBy(\n  {\n    node1: [50, 50],\n    node2: [100, 100],\n    node3: [150, 150],\n  },\n  true,\n);\n",
        "paraId": 154,
        "tocIndex": 20
    },
    {
        "value": "将元素移动到指定位置，支持两种调用方式：",
        "paraId": 155,
        "tocIndex": 21
    },
    {
        "value": "// 将元素移动到指定位置（绝对位置）\ntranslateElementTo(id: ID, position: Point, animation?: boolean): Promise<void>;\n\n// 批量将元素移动到指定位置（绝对位置）\ntranslateElementTo(positions: Record<ID, Point>, animation?: boolean): Promise<void>;\n",
        "paraId": 156,
        "tocIndex": 21
    },
    {
        "value": "参数",
        "paraId": 157,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 157,
        "tocIndex": 21
    },
    {
        "value": "单个元素移动",
        "paraId": 158,
        "tocIndex": 21
    },
    {
        "value": "参数",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "描述",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "类型",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "默认值",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "必选",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "id",
        "paraId": 159,
        "tocIndex": 21
    },
    {
        "value": "要移动的元素 ID",
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
        "value": "目标绝对位置 [x, y]",
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
        "value": "是否启用动画",
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
        "value": "批量元素移动",
        "paraId": 160,
        "tocIndex": 21
    },
    {
        "value": "参数",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "描述",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "类型",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "默认值",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "必选",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "positions",
        "paraId": 161,
        "tocIndex": 21
    },
    {
        "value": "元素ID到目标位置的映射",
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
        "value": "是否启用动画",
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
        "value": "返回值",
        "paraId": 162,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 162,
        "tocIndex": 21
    },
    {
        "value": "类型",
        "paraId": 163,
        "tocIndex": 21
    },
    {
        "value": ": Promise<void>",
        "paraId": 163,
        "tocIndex": 21
    },
    {
        "value": "描述",
        "paraId": 163,
        "tocIndex": 21
    },
    {
        "value": ": 返回一个 Promise，移动操作完成后 resolve",
        "paraId": 163,
        "tocIndex": 21
    },
    {
        "value": "示例",
        "paraId": 164,
        "tocIndex": 21
    },
    {
        "value": ":",
        "paraId": 164,
        "tocIndex": 21
    },
    {
        "value": "// 将节点移动到画布的 (200, 300) 位置\nawait graph.translateElementTo('node1', [200, 300]);\n\n// 带动画移动\nawait graph.translateElementTo('node1', [200, 300], true);\n\n// 将一组节点整齐排列\nawait graph.translateElementTo(\n  {\n    node1: [100, 100],\n    node2: [200, 200],\n    node3: [300, 100],\n  },\n  true,\n);\n",
        "paraId": 165,
        "tocIndex": 21
    },
    {
        "value": "聚焦到指定元素，使元素居中于视口。",
        "paraId": 166,
        "tocIndex": 22
    },
    {
        "value": "focusElement(id: ID | ID[], animation?: ViewportAnimationEffectTiming): Promise<void>;\n",
        "paraId": 167,
        "tocIndex": 22
    },
    {
        "value": "参数",
        "paraId": 168,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 168,
        "tocIndex": 22
    },
    {
        "value": "参数",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "描述",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "类型",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "默认值",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "必选",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "id",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "要聚焦的一个或多个元素 ID",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "string | string[]",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "✓",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "animation",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "视口动画配置",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "ViewportAnimationEffectTiming",
        "paraId": 170,
        "tocIndex": 22
    },
    {
        "value": "-",
        "paraId": 169,
        "tocIndex": 22
    },
    {
        "value": "返回值",
        "paraId": 171,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 171,
        "tocIndex": 22
    },
    {
        "value": "类型",
        "paraId": 172,
        "tocIndex": 22
    },
    {
        "value": ": Promise<void>",
        "paraId": 172,
        "tocIndex": 22
    },
    {
        "value": "描述",
        "paraId": 172,
        "tocIndex": 22
    },
    {
        "value": ": 返回一个 Promise，聚焦操作完成后 resolve",
        "paraId": 172,
        "tocIndex": 22
    },
    {
        "value": "示例",
        "paraId": 173,
        "tocIndex": 22
    },
    {
        "value": ":",
        "paraId": 173,
        "tocIndex": 22
    },
    {
        "value": "// 聚焦到单个节点\nawait graph.focusElement('node1');\n\n// 使用自定义动画配置\nawait graph.focusElement('node1', {\n  duration: 800,\n  easing: 'ease-in-out',\n});\n\n// 聚焦到多个节点\nawait graph.focusElement(['node1', 'node2', 'node3']);\n",
        "paraId": 174,
        "tocIndex": 22
    },
    {
        "value": "收起或展开元素的配置选项。",
        "paraId": 175,
        "tocIndex": 24
    },
    {
        "value": "interface CollapseExpandNodeOptions {\n  /**\n   * 是否使用动画\n   */\n  animation?: boolean;\n  /**\n   * 保证展开/收起的节点位置不变\n   */\n  align?: boolean;\n}\n",
        "paraId": 176,
        "tocIndex": 24
    },
    {
        "value": "视口动画配置类型。",
        "paraId": 177,
        "tocIndex": 25
    },
    {
        "value": "type ViewportAnimationEffectTiming =\n  | boolean // 是否启用动画\n  | {\n      easing?: string; // 缓动函数\n      duration?: number; // 动画持续时间(ms)\n    };\n",
        "paraId": 178,
        "tocIndex": 25
    },
    {
        "value": "AABB (Axis-Aligned Bounding Box) 是\"轴对齐包围盒\"的缩写，是计算机图形学中的一个基础概念。",
        "paraId": 179,
        "tocIndex": 26
    },
    {
        "value": "interface AABB {\n  x: number; // 矩形左上角的 x 坐标\n  y: number; // 矩形左上角的 y 坐标\n  width: number; // 矩形宽度\n  height: number; // 矩形高度\n}\n",
        "paraId": 180,
        "tocIndex": 26
    },
    {
        "value": "元素状态类型。",
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
//# sourceMappingURL=docs_api_element_zh_md_q_hK4X-async.js.map