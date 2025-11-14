((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/DragElement.en.md'],
{ "docs/manual/behavior/DragElement.en.md": function (module, exports, __mako_require__){
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
                    id: "overview",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 56
                        }, this),
                        "Overview",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Overview",
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
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1564
                                }, this),
                                $$contentTexts[4].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 1560
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1640
                                }, this),
                                $$contentTexts[6].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 1636
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[7].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1716
                                }, this),
                                $$contentTexts[8].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 1712
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[9].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1792
                                }, this),
                                $$contentTexts[10].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 1788
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 1869
                                }, this),
                                $$contentTexts[12].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 1865
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 1556
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "online-experience",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#online-experience",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 2037
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 1975
                        }, this),
                        "Online Experience",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Online-Experience",
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
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 2457
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 2326
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 2252
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 2097
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 1948
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 3433
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[13].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 3475
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 3403
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "basic-usage",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-usage",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 3619
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 3563
                        }, this),
                        "Basic Usage",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Usage",
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
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 4027
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 3896
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 3822
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 3673
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 3542
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[14].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 4973
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[15].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/DragElement.en.md",
                        lineNumber: 23,
                        columnNumber: 5009
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 5006
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[16].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 5056
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[17].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 5089
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[18].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/DragElement.en.md",
                        lineNumber: 23,
                        columnNumber: 5161
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 5158
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[19].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 5208
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[20].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 5241
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "configuration-options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#configuration-options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 5407
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 5341
                        }, this),
                        "Configuration Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Configuration-Options",
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
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 5835
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 5704
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 5630
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 5471
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 5310
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 6799
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 6834
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 6869
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 6904
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 6939
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 6795
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 6788
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 6998
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7033
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7068
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[29].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.en.md",
                                                lineNumber: 23,
                                                columnNumber: 7107
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7103
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7151
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 6994
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7195
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7230
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7265
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7300
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7335
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 7191
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7350
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[37].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[38].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.en.md",
                                                lineNumber: 23,
                                                columnNumber: 7459
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7455
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7503
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 7346
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7518
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7553
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7623
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7658
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 7514
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7673
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7708
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7743
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[46].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.en.md",
                                                lineNumber: 23,
                                                columnNumber: 7782
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7778
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7826
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 7669
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[47].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 7906
                                                }, this),
                                                $$contentTexts[49].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[50].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 7938
                                                }, this),
                                                $$contentTexts[51].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8003
                                                }, this),
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8035
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8100
                                                }, this),
                                                $$contentTexts[55].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[56].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8132
                                                }, this),
                                                $$contentTexts[57].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 7876
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[58].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8206
                                                }, this),
                                                $$contentTexts[59].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[60].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8271
                                                }, this),
                                                $$contentTexts[61].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[62].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8336
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[63].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.en.md",
                                                lineNumber: 23,
                                                columnNumber: 8384
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8380
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8428
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 7837
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[65].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8508
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8540
                                                }, this),
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8605
                                                }, this),
                                                $$contentTexts[69].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[70].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8637
                                                }, this),
                                                $$contentTexts[71].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8702
                                                }, this),
                                                $$contentTexts[72].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[73].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8734
                                                }, this),
                                                $$contentTexts[74].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8799
                                                }, this),
                                                $$contentTexts[75].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[76].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8831
                                                }, this),
                                                $$contentTexts[77].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8896
                                                }, this),
                                                $$contentTexts[78].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[79].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8928
                                                }, this),
                                                $$contentTexts[80].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 8993
                                                }, this),
                                                $$contentTexts[81].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[82].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9025
                                                }, this),
                                                $$contentTexts[83].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[84].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9090
                                                }, this),
                                                $$contentTexts[85].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 8478
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[86].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9164
                                                }, this),
                                                $$contentTexts[87].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[88].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9229
                                                }, this),
                                                $$contentTexts[89].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[90].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9294
                                                }, this),
                                                $$contentTexts[91].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[92].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9359
                                                }, this),
                                                $$contentTexts[93].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[94].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9424
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9160
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[95].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.en.md",
                                                lineNumber: 23,
                                                columnNumber: 9472
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9468
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9516
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 8439
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9531
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[97].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#shadow-style-configuration",
                                                    children: $$contentTexts[98].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9596
                                                }, this),
                                                $$contentTexts[99].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9566
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9699
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9735
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9771
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9527
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[102].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9786
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[103].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[104].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 9853
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9822
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9911
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9947
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 9983
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 9782
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 6987
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 6781
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
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 10077
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 10026
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
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 10475
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 10344
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 10270
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 10126
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 10010
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[107].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 11424
                        }, this),
                        $$contentTexts[108].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 11421
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[109].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 11503
                                }, this),
                                $$contentTexts[110].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 11499
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[111].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 11579
                                }, this),
                                $$contentTexts[112].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 11575
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[113].value
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 11655
                                }, this),
                                $$contentTexts[114].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 11651
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 11495
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[115].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[116].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 11762
                        }, this),
                        $$contentTexts[117].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[118].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 11829
                        }, this),
                        $$contentTexts[119].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[120].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 11896
                        }, this),
                        $$contentTexts[121].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[122].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 11963
                        }, this),
                        $$contentTexts[123].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[124].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12030
                        }, this),
                        $$contentTexts[125].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[126].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12097
                        }, this),
                        $$contentTexts[127].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[128].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12164
                        }, this),
                        $$contentTexts[129].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[130].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12231
                        }, this),
                        $$contentTexts[131].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[132].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12298
                        }, this),
                        $$contentTexts[133].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[134].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12365
                        }, this),
                        $$contentTexts[135].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[136].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12432
                        }, this),
                        $$contentTexts[137].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[138].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12499
                        }, this),
                        $$contentTexts[139].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[140].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12566
                        }, this),
                        $$contentTexts[141].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[142].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12633
                        }, this),
                        $$contentTexts[143].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[144].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12700
                        }, this),
                        $$contentTexts[145].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[146].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12767
                        }, this),
                        $$contentTexts[147].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[148].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12834
                        }, this),
                        $$contentTexts[149].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[150].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12901
                        }, this),
                        $$contentTexts[151].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[152].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 12968
                        }, this),
                        $$contentTexts[153].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[154].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13035
                        }, this),
                        $$contentTexts[155].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[156].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13102
                        }, this),
                        $$contentTexts[157].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[158].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13169
                        }, this),
                        $$contentTexts[159].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[160].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13236
                        }, this),
                        $$contentTexts[161].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[162].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13303
                        }, this),
                        $$contentTexts[163].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[164].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13370
                        }, this),
                        $$contentTexts[165].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[166].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13437
                        }, this),
                        $$contentTexts[167].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[168].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13504
                        }, this),
                        $$contentTexts[169].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[170].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13571
                        }, this),
                        $$contentTexts[171].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[172].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13638
                        }, this),
                        $$contentTexts[173].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[174].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13705
                        }, this),
                        $$contentTexts[175].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[176].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13772
                        }, this),
                        $$contentTexts[177].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[178].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13839
                        }, this),
                        $$contentTexts[179].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[180].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13906
                        }, this),
                        $$contentTexts[181].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[182].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 13973
                        }, this),
                        $$contentTexts[183].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[184].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 14040
                        }, this),
                        $$contentTexts[185].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[186].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 14107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 11732
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[187].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 14151
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[188].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 14185
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "shadow-style-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#shadow-style-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 14354
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 14283
                        }, this),
                        "shadow Style Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "shadow-Style-Configuration",
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
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 14792
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 14661
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 14587
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 14423
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 14247
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[189].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[190].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 15768
                        }, this),
                        $$contentTexts[191].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 15738
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[192].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15857
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[193].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15893
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[194].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15929
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[195].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 15965
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 15853
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 15846
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[196].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16025
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16061
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16097
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[199].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.en.md",
                                                lineNumber: 23,
                                                columnNumber: 16137
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16133
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 16021
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16191
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16227
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16263
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16299
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 16187
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16380
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16416
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[207].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/DragElement.en.md",
                                                lineNumber: 23,
                                                columnNumber: 16456
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16452
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 16340
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[208].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16510
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[209].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16546
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[210].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16582
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[211].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16618
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 16506
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[212].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16663
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[213].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16699
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16735
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[215].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16771
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 16659
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[216].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16816
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[217].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16852
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[218].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16888
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[219].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16924
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 16812
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[220].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 16969
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17005
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[222].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17041
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[223].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17077
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 16965
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[224].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17122
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[225].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17158
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[226].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17194
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[227].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17230
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17118
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[228].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17275
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[229].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17311
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[230].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17347
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17383
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17271
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[231].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17398
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[232].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17434
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[233].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17470
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17506
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17394
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[234].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17521
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[235].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17557
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[236].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17597
                                                }, this),
                                                $$contentTexts[237].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[238].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17664
                                                }, this),
                                                $$contentTexts[239].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[240].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17731
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17593
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17776
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17517
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[241].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17791
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[242].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[243].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17867
                                                }, this),
                                                $$contentTexts[244].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[245].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 17934
                                                }, this),
                                                $$contentTexts[246].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[247].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18001
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 17863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18046
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 17787
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[248].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18061
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[249].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18097
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[250].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18133
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18169
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18057
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[251].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18184
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[252].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18220
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[253].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18256
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18292
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18180
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[254].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18307
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[255].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18343
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[256].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18383
                                                }, this),
                                                $$contentTexts[257].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[258].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                                    lineNumber: 23,
                                                    columnNumber: 18450
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18379
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/behavior/DragElement.en.md",
                                            lineNumber: 23,
                                            columnNumber: 18495
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 18303
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 16014
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 15839
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[259].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 18522
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[260].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 18556
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[261].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/element/shape/properties#baseshapestyle",
                                children: $$contentTexts[262].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 18668
                            }, this),
                            $$contentTexts[263].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[264].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 18791
                            }, this),
                            $$contentTexts[265].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/DragElement.en.md",
                        lineNumber: 23,
                        columnNumber: 18638
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 18626
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "code-examples",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#code-examples",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 18956
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 18898
                        }, this),
                        "Code Examples",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Code-Examples",
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
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 19368
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 19237
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 19163
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 19012
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 18875
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "multi-selection-dragging",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#multi-selection-dragging",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 20417
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 20348
                        }, this),
                        "Multi-selection Dragging",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Multi-selection-Dragging",
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
                                        fileName: "docs/manual/behavior/DragElement.en.md",
                                        lineNumber: 23,
                                        columnNumber: 20851
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/DragElement.en.md",
                                    lineNumber: 23,
                                    columnNumber: 20720
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/DragElement.en.md",
                                lineNumber: 23,
                                columnNumber: 20646
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 20484
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 20314
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[266].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[267].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 21827
                        }, this),
                        $$contentTexts[268].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[269].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/DragElement.en.md",
                            lineNumber: 23,
                            columnNumber: 21894
                        }, this),
                        $$contentTexts[270].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 21797
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "javascript",
                    children: $$contentTexts[271].value
                }, void 0, false, {
                    fileName: "docs/manual/behavior/DragElement.en.md",
                    lineNumber: 23,
                    columnNumber: 21965
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/behavior/DragElement.en.md",
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
                fileName: "docs/manual/behavior/DragElement.en.md",
                lineNumber: 30,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/DragElement.en.md",
                lineNumber: 30,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/DragElement.en.md",
            lineNumber: 30,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/DragElement.en.md",
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
//# sourceMappingURL=docs_manual_behavior_DragElement_en_md-async.js.map