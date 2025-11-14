((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/D3ForceLayout.zh.md'],
{ "docs/manual/layout/D3ForceLayout.zh.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 97
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 487
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 356
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://d3js.org/d3-force",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1461
                        }, this),
                        $$contentTexts[2].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1433
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[3].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1555
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[4].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1595
                                }, this),
                                $$contentTexts[5].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1591
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[6].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1671
                                }, this),
                                $$contentTexts[7].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1667
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[8].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1747
                                }, this),
                                $$contentTexts[9].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1818
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1853
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1888
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1814
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1743
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[13].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1937
                                }, this),
                                $$contentTexts[14].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1933
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1587
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    alt: "D3Force 布局示意图",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*-_sFS5IRGGcAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 2016
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
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2207
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 2158
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2601
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2470
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2396
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 2254
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 2144
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "力系统-force-system",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#力系统-force-system",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3634
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3573
                        }, this),
                        "力系统 Force System",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "力系统-Force-System",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4052
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3921
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3847
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 3693
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 3547
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[15].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4998
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "350",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*p5L2S6gtZ2AAAAAAAAAAAAAAemJ7AQ/original",
                    alt: "force"
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5031
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[16].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 5175
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5163
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[17].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5229
                                }, this),
                                $$contentTexts[18].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5225
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[19].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5307
                                }, this),
                                $$contentTexts[20].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5303
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[21].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5385
                                }, this),
                                $$contentTexts[22].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5381
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[23].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5463
                                }, this),
                                $$contentTexts[24].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5459
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[25].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5541
                                }, this),
                                $$contentTexts[26].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5537
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5221
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "迭代系统iteration-system",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#迭代系统iteration-system",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5715
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5650
                        }, this),
                        "迭代系统（Iteration System）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "迭代系统（Iteration-System）",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6145
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6014
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 5940
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5780
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 5620
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[27].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7091
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "alpha-值活力值",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#alpha-值活力值",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7199
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7144
                        }, this),
                        "Alpha 值（活力值）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Alpha-值（活力值）",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7609
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7478
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 7404
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7254
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 7124
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[28].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8555
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[29].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8596
                                }, this),
                                $$contentTexts[30].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8592
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[31].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8674
                                }, this),
                                $$contentTexts[32].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8670
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[33].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8752
                                }, this),
                                $$contentTexts[34].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8748
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8588
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "迭代次数iterations",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#迭代次数iterations",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 8914
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8855
                        }, this),
                        "迭代次数（Iterations）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "迭代次数（Iterations）",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9332
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9201
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 9127
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 8973
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 8831
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[35].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10278
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[36].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10319
                                }, this),
                                $$contentTexts[37].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10315
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[38].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10397
                                }, this),
                                $$contentTexts[39].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[40].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10470
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 10540
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10466
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10393
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10311
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[43].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                        lineNumber: 21,
                        columnNumber: 10602
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10590
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
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10709
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10661
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11101
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10970
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 10896
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 10755
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 10648
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[44].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12065
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[45].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12100
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12135
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12170
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12205
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 12061
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12054
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[49].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12264
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[50].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12299
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12334
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[52].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12369
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12404
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12260
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[54].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12448
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[55].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12483
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[56].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12518
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[57].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12553
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12588
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12444
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[58].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12603
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[59].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12638
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[60].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12673
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12708
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12743
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12599
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12758
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12793
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[64].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12828
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[65].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12898
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12754
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[66].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12913
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[67].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12948
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[68].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12983
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[69].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13018
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13053
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12909
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[70].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13068
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[71].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13103
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[72].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13138
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13208
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13064
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 12253
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 12047
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "迭代控制",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#迭代控制",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13298
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13249
                        }, this),
                        "迭代控制",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "迭代控制",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13692
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13561
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 13487
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 13345
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 13235
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[74].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14656
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[75].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14691
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[76].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14726
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[77].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14761
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[78].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14796
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 14652
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14645
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[79].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14855
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[80].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14890
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[81].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14925
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[82].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14960
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14995
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14851
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[83].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15045
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15080
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15150
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15006
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[87].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15165
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[88].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15200
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[89].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15235
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[90].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15270
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15305
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15161
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[91].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[92].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[93].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15460
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15316
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[95].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15475
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15510
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15545
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[98].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15615
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15471
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 14844
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 14638
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "力模型配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#力模型配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 15707
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15657
                        }, this),
                        "力模型配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "力模型配置",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 16103
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15972
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 15898
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 15755
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 15642
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "链接力link",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#链接力link",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17118
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17066
                        }, this),
                        "链接力（link）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "链接力（link）",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 17522
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17391
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 17317
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 17170
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 17049
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[99].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18486
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[100].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18521
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[101].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18557
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[102].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18593
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[103].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18629
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 18482
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18475
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18689
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18725
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18761
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18797
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18833
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18685
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18848
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18884
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18920
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18956
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18992
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18844
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19007
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19043
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19079
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19151
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19003
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19166
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19202
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19238
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[119].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19310
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19162
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 18678
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 18468
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "多体力manybody",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#多体力manybody",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 19414
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19358
                        }, this),
                        "多体力（manyBody）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "多体力（manyBody）",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 19826
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19695
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 19621
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 19470
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 19337
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[120].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20790
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[121].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20826
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[122].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20862
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[123].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20898
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[124].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20934
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 20786
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20779
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 20994
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21066
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21102
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21138
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20990
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21153
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21189
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21225
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21261
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21297
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21149
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21312
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21348
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21384
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21456
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21308
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21507
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21543
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21579
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21615
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21467
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 20983
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 20772
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "中心力center",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#中心力center",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 21715
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 21661
                        }, this),
                        "中心力（center）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "中心力（center）",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22123
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21992
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 21918
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 21769
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 21642
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[141].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23087
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[142].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23123
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[143].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23159
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[144].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23195
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[145].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23231
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 23083
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23076
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23291
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23327
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23363
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23399
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23435
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23287
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23450
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23486
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23522
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23558
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23594
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23446
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23609
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23645
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23717
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 23753
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23605
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23280
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23069
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "碰撞力collide",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#碰撞力collide",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 23855
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23800
                        }, this),
                        "碰撞力（collide）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "碰撞力（collide）",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24265
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24134
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 24060
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 23910
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 23780
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[158].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25229
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[159].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25265
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[160].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25301
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[161].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25337
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[162].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25373
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 25225
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25218
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25433
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25469
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25541
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25577
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25429
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25592
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25700
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25736
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25588
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25751
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25787
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25859
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25895
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25747
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25422
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 25211
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "径向力radial",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#径向力radial",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 25995
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 25941
                        }, this),
                        "径向力（radial）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "径向力（radial）",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26403
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26272
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 26198
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 26049
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 25922
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[175].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27367
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[176].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27403
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[177].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27439
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[178].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27475
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[179].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27511
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 27363
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 27356
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27571
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27643
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[183].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27679
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27715
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27567
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[184].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27730
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[185].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27766
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27802
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[187].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27838
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27874
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27726
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[188].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27925
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[190].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27961
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27997
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28033
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27885
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28048
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28084
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[194].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28120
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 28192
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28044
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 27560
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 27349
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "x-轴力x",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#x-轴力x",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 28284
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 28234
                        }, this),
                        "X 轴力（x）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "X-轴力（x）",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28684
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28553
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 28479
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 28334
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 28219
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[196].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29648
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[197].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29684
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[198].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29720
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[199].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29756
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[200].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 29792
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 29644
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 29637
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29852
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29888
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29924
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29960
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 29996
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 29848
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 30011
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 30047
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[207].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 30083
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[208].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 30119
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 30155
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30007
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 29841
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 29630
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "y-轴力y",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#y-轴力y",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 30247
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 30197
                        }, this),
                        "Y 轴力（y）",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Y-轴力（y）",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30647
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30516
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 30442
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 30297
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 30182
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[209].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31611
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[210].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31647
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[211].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31683
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[212].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31719
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[213].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 31755
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 31607
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 31600
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 31815
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[215].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 31851
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[216].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 31887
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[217].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 31923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 31959
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31811
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[218].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 31974
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[219].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 32010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[220].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 32046
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 32082
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 32118
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31970
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 31804
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 31593
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
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 32208
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 32159
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32602
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 32471
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 32397
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 32255
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 32145
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
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 33615
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 33564
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34013
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33882
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 33808
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 33664
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 33548
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[222].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 34959
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[223].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples/layout/force-directed/#prevent-overlap",
                            children: $$contentTexts[224].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 35051
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 35021
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "团队聚类布局",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#团队聚类布局",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 35216
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 35165
                        }, this),
                        "团队聚类布局",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "团队聚类布局",
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
                                        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35614
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35483
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 35409
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 35265
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 35149
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[225].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 36560
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 36624
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[226].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 36680
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 36594
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("details", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("summary", {
                            children: $$contentTexts[227].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 36757
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "javascript",
                            children: $$contentTexts[228].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 36803
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 36748
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[229].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 36883
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[230].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36925
                                }, this),
                                $$contentTexts[231].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 36921
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[232].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37001
                                }, this),
                                $$contentTexts[233].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 36997
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[234].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37077
                                }, this),
                                $$contentTexts[235].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 37073
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[236].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37153
                                }, this),
                                $$contentTexts[237].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 37149
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[238].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37229
                                }, this),
                                $$contentTexts[239].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 37225
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 36917
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[240].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/examples/layout/force-directed/#functional-params",
                            children: $$contentTexts[241].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 37336
                        }, this),
                        $$contentTexts[242].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 37306
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
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
                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/D3ForceLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/D3ForceLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/D3ForceLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_D3ForceLayout_zh_md-async.js.map