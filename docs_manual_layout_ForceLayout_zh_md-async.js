((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/ForceLayout.zh.md'],
{ "docs/manual/layout/ForceLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1465
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[2].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1497
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[3].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1537
                                }, this),
                                $$contentTexts[4].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1533
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[5].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1613
                                }, this),
                                $$contentTexts[6].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1609
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[7].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1689
                                }, this),
                                $$contentTexts[8].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[9].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1760
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1794
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1829
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1756
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1685
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[12].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1878
                                }, this),
                                $$contentTexts[13].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1874
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1529
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/pdZUQIReZ_gAAAAAAAAAAAAADpdRAQFr/original",
                    alt: "力导向布局示例"
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1957
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "核心概念",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#核心概念",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2142
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 2093
                        }, this),
                        "核心概念",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "核心概念",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2536
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2405
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2331
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 2189
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 2079
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "force-力导向布局基本原理",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#force-力导向布局基本原理",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3567
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3507
                        }, this),
                        "Force 力导向布局基本原理",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Force-力导向布局基本原理",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3983
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3852
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3778
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3625
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3482
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[14].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4929
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[15].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4966
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[16].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5001
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[17].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5036
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4962
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "核心力详解",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#核心力详解",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5141
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5091
                        }, this),
                        "核心力详解",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "核心力详解",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5537
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5406
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5332
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5189
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5076
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "斥力node-repulsion",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#斥力node-repulsion",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6570
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6509
                        }, this),
                        "斥力（Node Repulsion）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "斥力（Node-Repulsion）",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6992
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6861
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 6787
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6631
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 6483
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7949
                                    }, this),
                                    $$contentTexts[19].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7946
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7942
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[20].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8034
                                    }, this),
                                    $$contentTexts[21].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8103
                                    }, this),
                                    $$contentTexts[23].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8168
                                    }, this),
                                    $$contentTexts[25].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8031
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8027
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8249
                                        }, this),
                                        $$contentTexts[27].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/7udvQ5K8VvMAAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "斥力"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8318
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8246
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[28].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[29].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8473
                                                }, this),
                                                $$contentTexts[30].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[31].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8538
                                                }, this),
                                                $$contentTexts[32].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[33].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[34].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8638
                                                }, this),
                                                $$contentTexts[35].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[36].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 8708
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8439
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8242
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7938
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "边拉力edge-attraction",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#边拉力edge-attraction",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8849
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8786
                        }, this),
                        "边拉力（Edge Attraction）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "边拉力（Edge-Attraction）",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9275
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9144
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9070
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8912
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8758
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[37].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10232
                                    }, this),
                                    $$contentTexts[38].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10229
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10225
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[39].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10317
                                    }, this),
                                    $$contentTexts[40].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[41].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10386
                                    }, this),
                                    $$contentTexts[42].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[43].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10451
                                    }, this),
                                    $$contentTexts[44].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10314
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10310
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[45].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10532
                                        }, this),
                                        $$contentTexts[46].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/WY15QYfpMSAAAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "边拉力"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10601
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10529
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[47].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[48].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10757
                                                }, this),
                                                $$contentTexts[49].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[50].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[51].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10857
                                                }, this),
                                                $$contentTexts[52].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10927
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10723
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10525
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10221
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "向心力gravity",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#向心力gravity",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11052
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10997
                        }, this),
                        "向心力（Gravity）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "向心力（Gravity）",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11462
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11331
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 11257
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 11107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10977
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[54].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12419
                                    }, this),
                                    $$contentTexts[55].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12416
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12412
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[56].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12504
                                    }, this),
                                    $$contentTexts[57].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[58].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12573
                                    }, this),
                                    $$contentTexts[59].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[60].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12638
                                    }, this),
                                    $$contentTexts[61].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12501
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12497
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12719
                                        }, this),
                                        $$contentTexts[63].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/R-26R4Zc09kAAAAAQDAAAAgADpdRAQFr/original",
                                            alt: "向心力"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12788
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12716
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 12944
                                                }, this),
                                                $$contentTexts[66].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12914
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[67].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[68].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 13044
                                                }, this),
                                                $$contentTexts[69].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13014
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 13144
                                                }, this),
                                                $$contentTexts[72].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13114
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12910
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12712
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12408
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "三种力的相互作用",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#三种力的相互作用",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13300
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13247
                        }, this),
                        "三种力的相互作用",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "三种力的相互作用",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13702
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13571
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13497
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13351
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13229
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[73].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14656
                                }, this),
                                $$contentTexts[74].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14652
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[75].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14734
                                }, this),
                                $$contentTexts[76].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14730
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[77].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14812
                                }, this),
                                $$contentTexts[78].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                    src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/R-26R4Zc09kAAAAAQDAAAAgADpdRAQFr/original",
                                    alt: "力的相互作用"
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14881
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14808
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14648
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "物理系统",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#物理系统",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 15075
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15026
                        }, this),
                        "物理系统",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "物理系统",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15469
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15338
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 15264
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15122
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15012
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "节点运动速度公式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#节点运动速度公式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16486
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16433
                        }, this),
                        "节点运动速度公式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "节点运动速度公式",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16888
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16757
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 16683
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 16537
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 16415
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17845
                                        }, this),
                                        $$contentTexts[80].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/4Nk0Q44tWGIAAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "节点运动速度公式"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17914
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17842
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18045
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18080
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[83].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[84].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 18145
                                                }, this),
                                                $$contentTexts[85].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[86].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[87].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 18245
                                                }, this),
                                                $$contentTexts[88].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18215
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18041
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17838
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18332
                                        }, this),
                                        $$contentTexts[90].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18329
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18409
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18444
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18479
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18405
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18325
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17834
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "节点位置公式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#节点位置公式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18596
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18545
                        }, this),
                        "节点位置公式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "节点位置公式",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18994
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18863
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18789
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18645
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 18529
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19951
                                        }, this),
                                        $$contentTexts[95].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/orF2RoAlHwAAAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "节点位置公式"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20020
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19948
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20149
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20184
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[98].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[99].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 20249
                                                }, this),
                                                $$contentTexts[100].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20219
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20145
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19944
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20337
                                        }, this),
                                        $$contentTexts[102].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20334
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[103].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20416
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20452
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[105].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[106].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 20519
                                                }, this),
                                                $$contentTexts[107].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20488
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20412
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20330
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19940
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "聚类中心计算",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#聚类中心计算",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 20673
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20622
                        }, this),
                        "聚类中心计算",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "聚类中心计算",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21071
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20940
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 20866
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20722
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 20606
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22028
                                        }, this),
                                        $$contentTexts[109].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/2jc-TrgcG20AAAAAQDAAAAgADpdRAQFr/original",
                                            alt: "聚类中心计算"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22099
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22025
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22228
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22264
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22224
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22021
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22317
                                        }, this),
                                        $$contentTexts[113].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22314
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22396
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22432
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22468
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22392
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22310
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 22017
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "聚类强度计算",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#聚类强度计算",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 22586
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22535
                        }, this),
                        "聚类强度计算",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "聚类强度计算",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22984
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22853
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 22779
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 22635
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 22519
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23941
                                        }, this),
                                        $$contentTexts[118].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/sVEtTLyM3rwAAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "聚类强度计算"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24012
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23938
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[119].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[120].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 24172
                                                }, this),
                                                $$contentTexts[121].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24244
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24137
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23934
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24297
                                        }, this),
                                        $$contentTexts[124].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24294
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24376
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24412
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24448
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24372
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24290
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23930
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "质量对力的影响",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#质量对力的影响",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 24568
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24516
                        }, this),
                        "质量对力的影响",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "质量对力的影响",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24968
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24837
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 24763
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 24618
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 24499
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25925
                                        }, this),
                                        $$contentTexts[129].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/5ckVQ6gHQygAAAAAQBAAAAgADpdRAQFr/original",
                                            alt: "质量对力的影响"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25996
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25922
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26126
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26162
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26198
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26122
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25918
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26251
                                        }, this),
                                        $$contentTexts[134].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26248
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26330
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26366
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[137].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[138].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26433
                                                }, this),
                                                $$contentTexts[139].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26402
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26326
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 26244
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 25914
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "能量计算",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#能量计算",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 26583
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 26534
                        }, this),
                        "能量计算",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "能量计算",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26977
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26846
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 26772
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 26630
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 26520
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27934
                                        }, this),
                                        $$contentTexts[141].value,
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/M84ERKphqf0AAAAAAAAAAAAADpdRAQFr/original",
                                            alt: "能量计算"
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28005
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27931
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[142].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28132
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28168
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28128
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 27927
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28221
                                        }, this),
                                        $$contentTexts[145].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28218
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28300
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28336
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28296
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 28214
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 27923
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "系统收敛条件",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#系统收敛条件",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 28454
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 28403
                        }, this),
                        "系统收敛条件",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "系统收敛条件",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28852
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28721
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 28647
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 28503
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 28387
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[148].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29809
                                    }, this),
                                    $$contentTexts[149].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                        src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/oBHdRLKIEAcAAAAAQFAAAAgADpdRAQFr/original",
                                        alt: "系统收敛条件"
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29880
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 29806
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 29802
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 30017
                                        }, this),
                                        $$contentTexts[151].value
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30014
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 30096
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 30132
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[154].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[155].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 30199
                                                }, this),
                                                $$contentTexts[156].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 30168
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30092
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 30010
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 29798
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "力相互作用图",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#力相互作用图",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 30353
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 30302
                        }, this),
                        "力相互作用图",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "力相互作用图",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30751
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30620
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 30546
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 30402
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 30286
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_4greni/afts/img/2lI1RruANXoAAAAAAAAAAAAADpdRAQFr/original",
                    alt: "力作用模拟图"
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 31697
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
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 31879
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 31831
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32271
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 32140
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 32066
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 31925
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 31818
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[157].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 33217
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "基础配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 33314
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 33265
                        }, this),
                        "基础配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础配置",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 33708
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33577
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 33503
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 33361
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 33251
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[158].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34672
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[159].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34708
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[160].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34744
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[161].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34780
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 34668
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 34661
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 34840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 34876
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[164].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 34916
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 34912
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 34961
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 34836
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35006
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35042
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35078
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35114
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35002
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35129
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35165
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35201
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35237
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35125
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35252
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35288
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35324
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35360
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35248
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35375
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35411
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35483
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35371
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35498
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35534
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35570
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35606
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35494
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35657
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35693
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35729
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35617
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35744
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[185].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[186].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 35811
                                                }, this),
                                                $$contentTexts[187].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[188].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 35878
                                                }, this),
                                                $$contentTexts[189].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[190].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 35945
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35780
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[191].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 35994
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35990
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36039
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35740
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36054
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36090
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36126
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36132
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36050
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 34829
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 34654
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "力相关配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#力相关配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 36224
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 36174
                        }, this),
                        "力相关配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "力相关配置",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36620
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36489
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 36415
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 36272
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 36159
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "斥力配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#斥力配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 37629
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 37580
                        }, this),
                        "斥力配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "斥力配置",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38023
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37892
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 37818
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 37676
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 37566
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[194].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38987
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[195].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39023
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[196].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39059
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[197].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39095
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 38983
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 38976
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39155
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[199].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39191
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39227
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39263
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39151
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39278
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39314
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39350
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39386
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39274
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39401
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39437
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39473
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39509
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39397
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 39144
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38969
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "边拉力配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#边拉力配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 39601
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 39551
                        }, this),
                        "边拉力配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "边拉力配置",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 39997
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39866
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 39792
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 39649
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 39536
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[207].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 40961
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[208].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 40997
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[209].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41033
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[210].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41069
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 40957
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 40950
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[211].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41129
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[212].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41165
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[213].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41201
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41237
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41125
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41252
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[215].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41288
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[216].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41324
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41360
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41248
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 41118
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 40943
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "向心力配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#向心力配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 41452
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 41402
                        }, this),
                        "向心力配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "向心力配置",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41848
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41717
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 41643
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 41500
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 41387
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[217].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42812
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[218].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42848
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[219].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42884
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[220].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 42920
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 42808
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 42801
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42980
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[222].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43016
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[223].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43052
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43088
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42976
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[224].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43103
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[225].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43139
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[226].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43175
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43211
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43099
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 42969
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 42794
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "聚类配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#聚类配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 43301
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 43252
                        }, this),
                        "聚类配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "聚类配置",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 43695
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43564
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 43490
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 43348
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 43238
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[227].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44659
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[228].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44695
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[229].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44731
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[230].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44767
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 44655
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 44648
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[231].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[232].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[233].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 44894
                                                }, this),
                                                $$contentTexts[234].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[235].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 44961
                                                }, this),
                                                $$contentTexts[236].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[237].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45028
                                                }, this),
                                                $$contentTexts[238].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[239].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45095
                                                }, this),
                                                $$contentTexts[240].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[241].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45162
                                                }, this),
                                                $$contentTexts[242].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[243].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45229
                                                }, this),
                                                $$contentTexts[244].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[245].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45296
                                                }, this),
                                                $$contentTexts[246].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[247].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45363
                                                }, this),
                                                $$contentTexts[248].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[249].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 45439
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45435
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45484
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44823
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[250].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45499
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[251].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[252].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45566
                                                }, this),
                                                $$contentTexts[253].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[254].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45633
                                                }, this),
                                                $$contentTexts[255].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[256].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45700
                                                }, this),
                                                $$contentTexts[257].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45535
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45772
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45778
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 45495
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[258].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45793
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[259].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[260].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45860
                                                }, this),
                                                $$contentTexts[261].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[262].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 45927
                                                }, this),
                                                $$contentTexts[263].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45829
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 45999
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46005
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 45789
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[264].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46020
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[265].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[266].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 46087
                                                }, this),
                                                $$contentTexts[267].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[268].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 46154
                                                }, this),
                                                $$contentTexts[269].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[270].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 46221
                                                }, this),
                                                $$contentTexts[271].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[272].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 46288
                                                }, this),
                                                $$contentTexts[273].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[274].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 46355
                                                }, this),
                                                $$contentTexts[275].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46056
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[276].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46463
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46016
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 44816
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 44641
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "性能与优化配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#性能与优化配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 46559
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 46507
                        }, this),
                        "性能与优化配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "性能与优化配置",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 46959
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46828
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 46754
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 46609
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 46490
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[277].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47923
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[278].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47959
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[279].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47995
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[280].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 48031
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 47919
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 47912
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[281].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48091
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[282].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48127
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[283].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48163
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48199
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48087
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[284].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48214
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[285].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48250
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[286].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48286
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48322
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48210
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[287].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48337
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[288].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48373
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[289].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48409
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48445
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48333
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[290].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48460
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[291].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[292].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 48527
                                                }, this),
                                                $$contentTexts[293].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[294].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 48594
                                                }, this),
                                                $$contentTexts[295].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[296].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 48661
                                                }, this),
                                                $$contentTexts[297].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[298].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 48728
                                                }, this),
                                                $$contentTexts[299].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48496
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[300].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48800
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48836
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48456
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[301].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48851
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[302].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48887
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48929
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48847
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[303].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48944
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[304].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 48984
                                                }, this),
                                                $$contentTexts[305].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[306].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 49051
                                                }, this),
                                                $$contentTexts[307].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48980
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49123
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49129
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48940
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[308].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49144
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[309].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49180
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[310].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49216
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49252
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49140
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 48080
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 47905
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "其他配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#其他配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 49342
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 49293
                        }, this),
                        "其他配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "其他配置",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49736
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49605
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 49531
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 49389
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 49279
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[311].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50700
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[312].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50736
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[313].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50772
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[314].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50808
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 50696
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 50689
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[315].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50868
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[316].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50940
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50946
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50864
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[317].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50961
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[318].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50997
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51033
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51039
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50957
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[319].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51054
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[320].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51090
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51126
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51132
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51050
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[321].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51147
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[322].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[323].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 51214
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51183
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51259
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51265
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51143
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 50857
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 50682
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
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 51355
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 51306
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 51749
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51618
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 51544
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 51402
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 51292
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "基础用法",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础用法",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 52758
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 52709
                        }, this),
                        "基础用法",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础用法",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53152
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53021
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 52947
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 52805
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 52695
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[324].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 54098
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "防止节点重叠",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#防止节点重叠",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 54227
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 54176
                        }, this),
                        "防止节点重叠",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "防止节点重叠",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 54625
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54494
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 54420
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 54276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 54160
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[325].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 55571
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "力导向布局",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#力导向布局",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 55698
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 55648
                        }, this),
                        "力导向布局",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "力导向布局",
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
                                        fileName: "docs/manual/layout/ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56094
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 55963
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 55889
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 55746
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 55633
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[326].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 57040
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[327].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 57074
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[328].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 57136
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[329].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57178
                                }, this),
                                $$contentTexts[330].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 57174
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[331].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57254
                                }, this),
                                $$contentTexts[332].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 57250
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[333].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57330
                                }, this),
                                $$contentTexts[334].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 57326
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[335].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57406
                                }, this),
                                $$contentTexts[336].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 57402
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 57170
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[337].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://g6.antv.antgroup.com/examples/layout/force-directed/#force",
                            children: $$contentTexts[338].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 57513
                        }, this),
                        $$contentTexts[339].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 57483
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/ForceLayout.zh.md",
            lineNumber: 21,
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
                fileName: "docs/manual/layout/ForceLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/ForceLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/ForceLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/ForceLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_ForceLayout_zh_md-async.js.map