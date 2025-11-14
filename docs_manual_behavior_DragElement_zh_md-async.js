((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/DragElement.zh.md'],
{ "docs/manual/behavior/DragElement.zh.md": function (module, exports, __mako_require__){
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
__mako_require__("common/api/behaviors/drag-element.md?watch=parent");
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
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
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
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1540
                                }, this),
                                $$contentTexts[4].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 1536
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1616
                                }, this),
                                $$contentTexts[6].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 1612
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[7].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1692
                                }, this),
                                $$contentTexts[8].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 1688
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[9].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1768
                                }, this),
                                $$contentTexts[10].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 1764
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 1845
                                }, this),
                                $$contentTexts[12].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 1841
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 1532
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "在线体验",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#在线体验",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 1987
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 1938
                        }, this),
                        "在线体验",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "在线体验",
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
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 2381
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 2250
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 2176
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 2034
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 1924
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 3357
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[13].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 3399
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 3327
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "基本用法",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基本用法",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 3529
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 3480
                        }, this),
                        "基本用法",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基本用法",
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
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 3923
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 3792
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 3718
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 3576
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 3466
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[14].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 4869
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[15].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/DragElement.zh.md",
                        lineNumber: 23,
                        columnNumber: 4905
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 4902
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[16].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 4952
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[17].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 4985
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[18].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/DragElement.zh.md",
                        lineNumber: 23,
                        columnNumber: 5057
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 5054
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[19].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 5104
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[20].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 5137
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "配置项",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#配置项",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 5267
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 5219
                        }, this),
                        "配置项",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "配置项",
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
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 5659
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 5528
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 5454
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 5313
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 5206
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6623
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6658
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6693
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6728
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 6763
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 6619
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 6612
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 6822
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 6857
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 6892
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[29].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 6931
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 6927
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 6975
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 6818
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7019
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7054
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7089
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7124
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7159
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7015
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7174
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7209
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7244
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[38].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 7283
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7279
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7327
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7170
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7342
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7377
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7412
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7482
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7338
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7497
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7532
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7567
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[46].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 7606
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7602
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7650
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7493
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7665
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 7730
                                                }, this),
                                                $$contentTexts[49].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[50].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 7762
                                                }, this),
                                                $$contentTexts[51].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 7827
                                                }, this),
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 7859
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 7924
                                                }, this),
                                                $$contentTexts[55].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[56].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 7956
                                                }, this),
                                                $$contentTexts[57].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 7700
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[58].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8030
                                                }, this),
                                                $$contentTexts[59].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[60].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8095
                                                }, this),
                                                $$contentTexts[61].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[62].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8160
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8026
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[63].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 8208
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8204
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8252
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 7661
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8267
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8332
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8364
                                                }, this),
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8429
                                                }, this),
                                                $$contentTexts[69].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[70].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8461
                                                }, this),
                                                $$contentTexts[71].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8526
                                                }, this),
                                                $$contentTexts[72].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[73].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8558
                                                }, this),
                                                $$contentTexts[74].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8623
                                                }, this),
                                                $$contentTexts[75].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[76].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8655
                                                }, this),
                                                $$contentTexts[77].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8720
                                                }, this),
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8752
                                                }, this),
                                                $$contentTexts[80].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8817
                                                }, this),
                                                $$contentTexts[81].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[82].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8849
                                                }, this),
                                                $$contentTexts[83].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[84].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8914
                                                }, this),
                                                $$contentTexts[85].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8302
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[86].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8988
                                                }, this),
                                                $$contentTexts[87].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[88].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9053
                                                }, this),
                                                $$contentTexts[89].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[90].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9118
                                                }, this),
                                                $$contentTexts[91].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[92].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9183
                                                }, this),
                                                $$contentTexts[93].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[94].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9248
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 8984
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[95].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 9296
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9292
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9340
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 8263
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[97].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#shadow-%E6%A0%B7%E5%BC%8F%E9%85%8D%E7%BD%AE",
                                                    children: $$contentTexts[98].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9420
                                                }, this),
                                                $$contentTexts[99].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9576
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9612
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9351
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[102].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9627
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[103].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[104].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9694
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9663
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9752
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9788
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 9824
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 9623
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 6811
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 6605
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "cursor",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#cursor",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 9918
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 9867
                        }, this),
                        "cursor",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "cursor",
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
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 10316
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 10185
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 10111
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 9967
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 9851
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[107].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 11265
                        }, this),
                        $$contentTexts[108].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 11262
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[109].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11344
                                }, this),
                                $$contentTexts[110].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 11340
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[111].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11420
                                }, this),
                                $$contentTexts[112].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 11416
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[113].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 11496
                                }, this),
                                $$contentTexts[114].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 11492
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 11336
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[115].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[116].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 11603
                        }, this),
                        $$contentTexts[117].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[118].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 11670
                        }, this),
                        $$contentTexts[119].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[120].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 11737
                        }, this),
                        $$contentTexts[121].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[122].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 11804
                        }, this),
                        $$contentTexts[123].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[124].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 11871
                        }, this),
                        $$contentTexts[125].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[126].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 11938
                        }, this),
                        $$contentTexts[127].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[128].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12005
                        }, this),
                        $$contentTexts[129].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[130].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12072
                        }, this),
                        $$contentTexts[131].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[132].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12139
                        }, this),
                        $$contentTexts[133].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[134].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12206
                        }, this),
                        $$contentTexts[135].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[136].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12273
                        }, this),
                        $$contentTexts[137].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[138].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12340
                        }, this),
                        $$contentTexts[139].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[140].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12407
                        }, this),
                        $$contentTexts[141].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[142].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12474
                        }, this),
                        $$contentTexts[143].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[144].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12541
                        }, this),
                        $$contentTexts[145].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[146].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12608
                        }, this),
                        $$contentTexts[147].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[148].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12675
                        }, this),
                        $$contentTexts[149].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[150].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12742
                        }, this),
                        $$contentTexts[151].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[152].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12809
                        }, this),
                        $$contentTexts[153].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[154].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12876
                        }, this),
                        $$contentTexts[155].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[156].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 12943
                        }, this),
                        $$contentTexts[157].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[158].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13010
                        }, this),
                        $$contentTexts[159].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[160].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13077
                        }, this),
                        $$contentTexts[161].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[162].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13144
                        }, this),
                        $$contentTexts[163].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[164].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13211
                        }, this),
                        $$contentTexts[165].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[166].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13278
                        }, this),
                        $$contentTexts[167].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[168].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13345
                        }, this),
                        $$contentTexts[169].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[170].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13412
                        }, this),
                        $$contentTexts[171].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[172].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13479
                        }, this),
                        $$contentTexts[173].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[174].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13546
                        }, this),
                        $$contentTexts[175].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[176].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13613
                        }, this),
                        $$contentTexts[177].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[178].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13680
                        }, this),
                        $$contentTexts[179].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[180].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13747
                        }, this),
                        $$contentTexts[181].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[182].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13814
                        }, this),
                        $$contentTexts[183].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[184].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13881
                        }, this),
                        $$contentTexts[185].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[186].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 13948
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 11573
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[187].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 13992
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[188].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 14026
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "shadow-样式配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#shadow-样式配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 14165
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 14109
                        }, this),
                        "shadow 样式配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "shadow-样式配置",
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
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 14573
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 14442
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 14368
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 14219
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 14088
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[189].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[190].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 15549
                        }, this),
                        $$contentTexts[191].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 15519
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[192].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15638
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[193].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15674
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[194].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15710
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[195].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 15746
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 15634
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 15627
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[196].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15842
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[199].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 15918
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15914
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15802
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 15972
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16008
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16044
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16080
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 15968
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16125
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16161
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16197
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[207].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                                lineNumber: 23,
                                                columnNumber: 16237
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16233
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16121
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[208].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16291
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[209].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16327
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[210].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16363
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[211].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16399
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16287
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[212].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16444
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[213].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16480
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16516
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[215].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16552
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16440
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[216].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[217].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16633
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[218].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16669
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[219].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16705
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16593
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[220].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16750
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16786
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[222].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16822
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[223].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16858
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16746
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[224].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16903
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[225].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[226].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 16975
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[227].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17011
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 16899
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[228].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17056
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[229].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17092
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[230].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17128
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17164
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17052
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[231].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[232].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17215
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[233].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17251
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17287
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17175
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[234].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17302
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[235].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17338
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[236].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17378
                                                }, this),
                                                $$contentTexts[237].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[238].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17445
                                                }, this),
                                                $$contentTexts[239].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[240].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17512
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17374
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17557
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17298
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[241].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[242].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[243].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17648
                                                }, this),
                                                $$contentTexts[244].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[245].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17715
                                                }, this),
                                                $$contentTexts[246].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[247].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17782
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17644
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17827
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17568
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[248].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17842
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[249].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[250].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17914
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17950
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17838
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[251].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 17965
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[252].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18001
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[253].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18073
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 17961
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[254].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18088
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[255].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18124
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[256].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18164
                                                }, this),
                                                $$contentTexts[257].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[258].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18231
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18160
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.zh.md",
                                            lineNumber: 23,
                                            columnNumber: 18276
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18084
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 15795
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 15620
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[259].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 18303
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[260].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 18337
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[261].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/element/shape/properties#baseshapestyle",
                                children: $$contentTexts[262].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 18449
                            }, this),
                            $$contentTexts[263].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[264].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 18569
                            }, this),
                            $$contentTexts[265].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/DragElement.zh.md",
                        lineNumber: 23,
                        columnNumber: 18419
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 18407
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
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 18716
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 18667
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
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 19110
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 18979
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 18905
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 18763
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 18653
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "多选推拽",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#多选推拽",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 20119
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 20070
                        }, this),
                        "多选推拽",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "多选推拽",
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
                                        fileName: "docs/manual/behavior/DragElement.zh.md",
                                        lineNumber: 23,
                                        columnNumber: 20513
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.zh.md",
                                    lineNumber: 23,
                                    columnNumber: 20382
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.zh.md",
                                lineNumber: 23,
                                columnNumber: 20308
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 20166
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 20056
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[266].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[267].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 21489
                        }, this),
                        $$contentTexts[268].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[269].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.zh.md",
                            lineNumber: 23,
                            columnNumber: 21556
                        }, this),
                        $$contentTexts[270].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 21459
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[271].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.zh.md",
                    lineNumber: 23,
                    columnNumber: 21627
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/DragElement.zh.md",
            lineNumber: 23,
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
                fileName: "docs/manual/behavior/DragElement.zh.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/DragElement.zh.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/DragElement.zh.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/DragElement.zh.md",
        lineNumber: 30,
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
//# sourceMappingURL=docs_manual_behavior_DragElement_zh_md-async.js.map