((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/transform/custom-transform.zh.md'],
{ "common/manual/custom-extension/transform/circular-radial-labels.md?watch=parent": function (module, exports, __mako_require__){

},
"common/manual/custom-extension/transform/hide-free-node.md?watch=parent": function (module, exports, __mako_require__){

},
"docs/manual/transform/custom-transform.zh.md": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("../../node_modules/.pnpm/react-refresh@0.14.2/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("../../node_modules/.pnpm/react@19.2.0/node_modules/react/jsx-dev-runtime.js");
var _index = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/API/index.js"));
var _index1 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/Badge/index.js"));
var _index2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/CodeGroup/index.js"));
var _index3 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/Container/index.js"));
var _index4 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/Previewer/index.js"));
var _index5 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/SourceCode/index.js"));
var _index6 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/Table/index.js"));
var _index7 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/dumi@2.4.18_@babel+core@7.28.5_@swc+helpers@0.5.15_@types+node@20.19.24_@types+react@19_a2cba10dea5f24686ccdda93515b1e16/node_modules/dumi/theme-default/builtins/Tree/index.js"));
var _index8 = /*#__PURE__*/ _interop_require_default._(__mako_require__("../../node_modules/.pnpm/@antv+dumi-theme-antv@0.8.0-beta.12_@algolia+client-search@5.42.0_@babel+core@7.28.5_@e_ea539378146e0670f62daf9de481569e/node_modules/@antv/dumi-theme-antv/dist/builtins/Playground/index.js"));
var _dumi = __mako_require__(".dumi/tmp/dumi/exports.ts");
__mako_require__("common/manual/custom-extension/transform/hide-free-node.md?watch=parent");
__mako_require__("common/manual/custom-extension/transform/circular-radial-labels.md?watch=parent");
var _loading = /*#__PURE__*/ _interop_require_default._(__mako_require__(".dumi/tmp/dumi/theme/loading.tsx"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("../../node_modules/.pnpm/react@19.2.0/node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function DumiMarkdownInner() {
    _s();
    const { texts: $$contentTexts } = (0, _dumi.useRouteMeta)();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            className: "markdown",
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 50
                        }, this),
                        "概述",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "概述",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/custom-transform.zh.md",
                    lineNumber: 26,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/custom-transform.zh.md",
                    lineNumber: 26,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "开始前",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#开始前",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 1526
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 1478
                        }, this),
                        "开始前",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "开始前",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 1918
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 1787
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 1713
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 1572
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/custom-transform.zh.md",
                    lineNumber: 26,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[1].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/transform/overview#%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86",
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 2892
                        }, this),
                        $$contentTexts[3].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/custom-transform.zh.md",
                    lineNumber: 26,
                    columnNumber: 2864
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "代码示例",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#代码示例",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 3091
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 3042
                        }, this),
                        "代码示例",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "代码示例",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 3485
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 3354
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 3280
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 3138
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/custom-transform.zh.md",
                    lineNumber: 26,
                    columnNumber: 3028
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[4].value
                }, void 0, false, {
                    fileName: "docs/manual/transform/custom-transform.zh.md",
                    lineNumber: 26,
                    columnNumber: 4431
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "不展示游离节点",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#不展示游离节点",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 4532
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 4480
                        }, this),
                        "不展示游离节点",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "不展示游离节点",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 4932
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 4801
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 4727
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 4582
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/custom-transform.zh.md",
                    lineNumber: 26,
                    columnNumber: 4463
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 5889
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 5886
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: $$contentTexts[6].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 5935
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 5882
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[7].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 5979
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 5976
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                    lang: "typescript",
                                    children: $$contentTexts[8].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 6025
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: "ob-codeblock",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                            meta: "| ob { pin: false, inject: true }",
                                            lang: "js"
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/custom-transform.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 6123
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                            lang: "js",
                                            children: $$contentTexts[9].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/custom-transform.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 6179
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 6093
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 5972
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 6257
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 6254
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 6304
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[12].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/custom-transform.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 6366
                                        }, this),
                                        $$contentTexts[14].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/custom-transform.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 6431
                                        }, this),
                                        $$contentTexts[16].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/custom-transform.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 6496
                                        }, this),
                                        $$contentTexts[18].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 6337
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 6250
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/custom-transform.zh.md",
                    lineNumber: 26,
                    columnNumber: 5878
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "环形布局径向label",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#环形布局径向label",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 6652
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 6596
                        }, this),
                        "环形布局径向label",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "环形布局径向label",
                            type: "button",
                            className: "ant-btn ant-btn-text ant-btn-icon-only button comment-link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                role: "img",
                                "aria-label": "message",
                                className: "anticon anticon-message",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
                                    viewBox: "64 64 896 896",
                                    focusable: "false",
                                    "data-icon": "message",
                                    width: "1em",
                                    height: "1em",
                                    fill: "currentColor",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                                        d: "M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 7060
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 6929
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 6855
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 6706
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/custom-transform.zh.md",
                    lineNumber: 26,
                    columnNumber: 6575
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[19].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 8017
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8014
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        $$contentTexts[20].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "/manual/layout/circular-layout",
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/custom-transform.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8093
                                        }, this),
                                        $$contentTexts[22].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "/manual/transform/place-radial-labels",
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/custom-transform.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8194
                                        }, this),
                                        $$contentTexts[24].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8064
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 8010
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 8318
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8315
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                    lang: "typescript",
                                    children: $$contentTexts[26].value
                                }, void 0, false, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8365
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: "ob-codeblock",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                            meta: "| ob { pin: false, inject: true }",
                                            lang: "js"
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/custom-transform.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8464
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                            lang: "js",
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/transform/custom-transform.zh.md",
                                            lineNumber: 26,
                                            columnNumber: 8520
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/transform/custom-transform.zh.md",
                                    lineNumber: 26,
                                    columnNumber: 8434
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 8311
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[28].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 8599
                                    }, this),
                                    $$contentTexts[29].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                        to: "/manual/transform/place-radial-labels",
                                        children: $$contentTexts[30].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 8668
                                    }, this),
                                    $$contentTexts[31].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                        href: "https://github.com/antvis/G6/blob/v5/packages/g6/src/transforms/place-radial-labels.ts",
                                        children: $$contentTexts[32].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/transform/custom-transform.zh.md",
                                        lineNumber: 26,
                                        columnNumber: 8776
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/transform/custom-transform.zh.md",
                                lineNumber: 26,
                                columnNumber: 8596
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/transform/custom-transform.zh.md",
                            lineNumber: 26,
                            columnNumber: 8592
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/transform/custom-transform.zh.md",
                    lineNumber: 26,
                    columnNumber: 8006
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/transform/custom-transform.zh.md",
            lineNumber: 26,
            columnNumber: 12
        }, this)
    }, void 0, false);
}
_s(DumiMarkdownInner, "EsmAA1S45Kg2SXhnbajAzasObB8=", false, function() {
    return [
        _dumi.useRouteMeta
    ];
});
_c = DumiMarkdownInner;
// export named function for fastRefresh
// ref: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#edits-always-lead-to-full-reload
function DumiMarkdownContent() {
    // wrap suspense for catch async meta data
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.DumiPage, {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_react.Suspense, {
            fallback: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_loading.default, {}, void 0, false, {
                fileName: "docs/manual/transform/custom-transform.zh.md",
                lineNumber: 33,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/transform/custom-transform.zh.md",
                lineNumber: 33,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/transform/custom-transform.zh.md",
            lineNumber: 33,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/transform/custom-transform.zh.md",
        lineNumber: 33,
        columnNumber: 10
    }, this);
}
_c1 = DumiMarkdownContent;
var _default = DumiMarkdownContent;
var _c;
var _c1;
$RefreshReg$(_c, "DumiMarkdownInner");
$RefreshReg$(_c1, "DumiMarkdownContent");
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
//# sourceMappingURL=docs_manual_transform_custom-transform_zh_md-async.js.map