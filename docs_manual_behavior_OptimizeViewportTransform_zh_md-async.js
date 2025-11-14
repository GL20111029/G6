((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/behavior/OptimizeViewportTransform.zh.md'],
{ "docs/manual/behavior/OptimizeViewportTransform.zh.md": function (module, exports, __mako_require__){
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
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
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
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 97
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 487
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 356
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 282
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 142
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[0].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 1433
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[1].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[2].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 1493
                            }, this),
                            $$contentTexts[3].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 1465
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[4].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/api/event",
                                children: $$contentTexts[5].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 1592
                            }, this),
                            $$contentTexts[6].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[7].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 1671
                            }, this),
                            $$contentTexts[8].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[9].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 1734
                            }, this),
                            $$contentTexts[10].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[11].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 1798
                            }, this),
                            $$contentTexts[12].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[13].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 1863
                            }, this),
                            $$contentTexts[14].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[15].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 1928
                            }, this),
                            $$contentTexts[16].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 1564
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "使用场景",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#使用场景",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2060
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 2011
                            }, this),
                            "使用场景",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "使用场景",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2454
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2323
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2249
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 2107
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 1997
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[17].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 3400
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[18].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 3437
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[19].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 3472
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 3433
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
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3575
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 3526
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 3969
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3838
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3764
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 3622
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 3512
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[20].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 4915
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[21].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                            lineNumber: 21,
                            columnNumber: 4951
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 4948
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[22].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 4998
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[23].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 5031
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[24].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                            lineNumber: 21,
                            columnNumber: 5103
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 5100
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[25].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 5150
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[26].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 5183
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
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5313
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 5265
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 5705
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5574
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5500
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 5359
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 5252
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6669
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6704
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6774
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6809
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6665
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 6658
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[32].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6868
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[33].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6903
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[34].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6938
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6977
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6973
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[36].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7021
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6864
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[37].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7065
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[38].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7100
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[39].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7135
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[40].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7170
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7205
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7061
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[41].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7220
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[42].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7255
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[43].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7290
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[44].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7325
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7360
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7216
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[45].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7375
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[46].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "#shapes",
                                                        children: $$contentTexts[47].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 7440
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7410
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[48].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7497
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7536
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7532
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7580
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7371
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 6857
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 6651
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "shapes",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#shapes",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7674
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 7623
                            }, this),
                            "Shapes",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "Shapes",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8072
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7941
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7867
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 7723
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 7607
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[50].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 9021
                            }, this),
                            $$contentTexts[51].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 9018
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[52].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 9090
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                to: "#%E4%BF%9D%E6%8C%81%E7%89%B9%E5%AE%9A%E5%85%83%E7%B4%A0%E5%8F%AF%E8%A7%81",
                children: $$contentTexts[53].value
            }, void 0, false, {
                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                lineNumber: 21,
                columnNumber: 9165
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
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
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9372
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 9323
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9766
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9635
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9561
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 9419
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 9309
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "基础优化功能",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#基础优化功能",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10779
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 10728
                            }, this),
                            "基础优化功能",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "基础优化功能",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11177
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11046
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10972
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 10828
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 10712
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[54].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 12123
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "自定义防抖时间",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#自定义防抖时间",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12261
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 12209
                            }, this),
                            "自定义防抖时间",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "自定义防抖时间",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12661
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12530
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12456
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 12311
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 12192
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[55].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 13607
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "保持特定元素可见",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#保持特定元素可见",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13747
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 13694
                            }, this),
                            "保持特定元素可见",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "保持特定元素可见",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14149
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14018
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13944
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 13798
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 13676
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[56].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 15095
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: $$contentTexts[57].value
                        }, void 0, false, {
                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                            lineNumber: 21,
                            columnNumber: 15176
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 15164
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin: false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 15252
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[58].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 15308
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 15222
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "根据图表元素数量动态启用禁用优化",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#根据图表元素数量动态启用禁用优化",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15462
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 15401
                            }, this),
                            "根据图表元素数量动态启用/禁用优化",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "根据图表元素数量动态启用/禁用优化",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15882
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15751
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15677
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 15522
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 15375
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[59].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 16828
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "javascript",
                        children: $$contentTexts[60].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 16861
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "常见问题",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#常见问题",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16993
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 16944
                            }, this),
                            "常见问题",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "常见问题",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17387
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17256
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17182
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 17040
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 16930
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "1-什么情况下应该使用此交互",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#1-什么情况下应该使用此交互",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18416
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 18357
                            }, this),
                            "1. 什么情况下应该使用此交互？",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "1.-什么情况下应该使用此交互？",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18834
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18703
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18629
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 18475
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 18333
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[61].value
                    }, void 0, false, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 19780
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "实际案例",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#实际案例",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19876
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 19827
                            }, this),
                            "实际案例",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "实际案例",
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
                                            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20270
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20139
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20065
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 19923
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 19813
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 21246
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[62].value
                            }, void 0, false, {
                                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                                lineNumber: 21,
                                columnNumber: 21290
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                        lineNumber: 21,
                        columnNumber: 21216
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                lineNumber: 21,
                columnNumber: 9283
            }, this)
        ]
    }, void 0, true);
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
                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/behavior/OptimizeViewportTransform.zh.md",
        lineNumber: 28,
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
//# sourceMappingURL=docs_manual_behavior_OptimizeViewportTransform_zh_md-async.js.map