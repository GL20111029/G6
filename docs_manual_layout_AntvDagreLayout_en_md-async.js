((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/AntvDagreLayout.en.md'],
{ "docs/manual/layout/AntvDagreLayout.en.md": function (module, exports, __mako_require__){
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
                    id: "overview",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[0].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/dagrejs/dagre/wiki",
                            children: $$contentTexts[1].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1485
                        }, this),
                        $$contentTexts[2].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1587
                        }, this),
                        $$contentTexts[4].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[5].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1650
                        }, this),
                        $$contentTexts[6].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[7].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1713
                        }, this),
                        $$contentTexts[8].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/examples#layout-dagre",
                            children: $$contentTexts[9].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1776
                        }, this),
                        $$contentTexts[10].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/dagrejs/dagre/blob/master/lib/layout.js",
                            children: $$contentTexts[11].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1871
                        }, this),
                        $$contentTexts[12].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://github.com/dagrejs/dagre/wiki",
                            children: $$contentTexts[13].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1996
                        }, this),
                        $$contentTexts[14].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*2uMmRo5wYPUAAAAAAAAAAABkARQnAQ",
                    width: "350",
                    alt: "Dagre Layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2104
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2315
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2257
                        }, this),
                        "Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Configuration",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2727
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2596
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2522
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2371
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2234
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[15].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3673
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "options",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#options",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3803
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3751
                        }, this),
                        "Options",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Options",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4203
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4072
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3998
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3853
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3734
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[16].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[17].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5190
                            }, this),
                            $$contentTexts[18].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://github.com/dagrejs/dagre/wiki#configuring-the-layout",
                                children: $$contentTexts[19].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5255
                            }, this),
                            $$contentTexts[20].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 5161
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5149
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://img.alicdn.com/imgextra/i3/O1CN01OpQHBZ1HcpZuWZLS7_!!6000000000779-0-tps-1274-1234.jpg",
                    width: "400",
                    alt: "Dagre Layout Options Diagram"
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5399
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5572
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5607
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5642
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5677
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5712
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 5568
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5561
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5771
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[28].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5845
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5924
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5767
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[33].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6042
                                                }, this),
                                                $$contentTexts[34].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[35].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6107
                                                }, this),
                                                $$contentTexts[36].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[37].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6172
                                                }, this),
                                                $$contentTexts[38].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[39].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6237
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[40].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 6285
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6281
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6329
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5964
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6379
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[43].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6418
                                                }, this),
                                                $$contentTexts[44].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[45].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6483
                                                }, this),
                                                $$contentTexts[46].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[47].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6548
                                                }, this),
                                                $$contentTexts[48].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[49].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6613
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6414
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 6661
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6657
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6705
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6340
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[51].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6720
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[52].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[53].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6785
                                                }, this),
                                                $$contentTexts[54].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[55].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6850
                                                }, this),
                                                $$contentTexts[56].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[57].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6915
                                                }, this),
                                                $$contentTexts[58].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[59].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6980
                                                }, this),
                                                $$contentTexts[60].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6755
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[61].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7050
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[62].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7085
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7120
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6716
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[63].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7135
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[64].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[65].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7200
                                                }, this),
                                                $$contentTexts[66].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[67].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7265
                                                }, this),
                                                $$contentTexts[68].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[69].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7330
                                                }, this),
                                                $$contentTexts[70].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[71].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7395
                                                }, this),
                                                $$contentTexts[72].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7170
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[73].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7465
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7500
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7506
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7131
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[74].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7521
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[75].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[76].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7586
                                                }, this),
                                                $$contentTexts[77].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[78].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7651
                                                }, this),
                                                $$contentTexts[79].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[80].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7716
                                                }, this),
                                                $$contentTexts[81].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[82].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7781
                                                }, this),
                                                $$contentTexts[83].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7556
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[84].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7851
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[85].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7921
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7517
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[86].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7936
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[87].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[88].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8001
                                                }, this),
                                                $$contentTexts[89].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[90].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8066
                                                }, this),
                                                $$contentTexts[91].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[92].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8131
                                                }, this),
                                                $$contentTexts[93].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[94].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8196
                                                }, this),
                                                $$contentTexts[95].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 7971
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[96].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8266
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8301
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8307
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7932
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8322
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[98].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[99].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8387
                                                }, this),
                                                $$contentTexts[100].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[101].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8453
                                                }, this),
                                                $$contentTexts[102].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[103].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8520
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8357
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[104].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8569
                                                }, this),
                                                $$contentTexts[105].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[106].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8636
                                                }, this),
                                                $$contentTexts[107].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[108].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8703
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8565
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[109].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 8752
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8748
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8797
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8318
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8812
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[111].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[112].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 8879
                                                }, this),
                                                $$contentTexts[113].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8848
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8951
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 8987
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9023
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8808
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[117].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[118].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9105
                                                }, this),
                                                $$contentTexts[119].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[120].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9172
                                                }, this),
                                                $$contentTexts[121].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[122].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9239
                                                }, this),
                                                $$contentTexts[123].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9074
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9311
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9347
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9383
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9034
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9398
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9434
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9470
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9506
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9512
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9394
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9527
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9563
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9599
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9635
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9671
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9523
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9686
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9722
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9758
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9794
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9830
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9682
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9845
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9881
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9917
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9953
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9959
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9841
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9974
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[141].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[142].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10041
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10122
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10158
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9970
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[146].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[147].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 10240
                                                }, this),
                                                $$contentTexts[148].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10209
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10312
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10348
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10354
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10169
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10369
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10405
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10441
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10477
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 10483
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10365
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5760
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 5554
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "align",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#align",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10575
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10525
                        }, this),
                        "align",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "align",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10971
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10840
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 10766
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10623
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10510
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[153].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11932
                            }, this),
                            $$contentTexts[154].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[155].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 11995
                            }, this),
                            $$contentTexts[156].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[157].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12066
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 11929
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 11917
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[158].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12123
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[159].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12165
                                }, this),
                                $$contentTexts[160].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12161
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[161].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12241
                                }, this),
                                $$contentTexts[162].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12237
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[163].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12317
                                }, this),
                                $$contentTexts[164].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12313
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[165].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12393
                                }, this),
                                $$contentTexts[166].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12389
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12157
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "rankdir",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#rankdir",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12539
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12487
                        }, this),
                        "rankdir",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "rankdir",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12939
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12808
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 12734
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 12589
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 12470
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[167].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13900
                            }, this),
                            $$contentTexts[168].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[169].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 13963
                            }, this),
                            $$contentTexts[170].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[171].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14034
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 13897
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 13885
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[172].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14091
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[173].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14133
                                }, this),
                                $$contentTexts[174].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14129
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[175].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14209
                                }, this),
                                $$contentTexts[176].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14205
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[177].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14285
                                }, this),
                                $$contentTexts[178].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14281
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[179].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14361
                                }, this),
                                $$contentTexts[180].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14357
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14125
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "ranker",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#ranker",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14505
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14454
                        }, this),
                        "ranker",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ranker",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14903
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14772
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 14698
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 14554
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 14438
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[181].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15868
                                }, this),
                                $$contentTexts[182].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[183].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15935
                                }, this),
                                $$contentTexts[184].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[185].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16002
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 15864
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 15861
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 15849
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[186].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 16064
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "ranksep",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#ranksep",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16167
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16115
                        }, this),
                        "ranksep",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ranksep",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 16567
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16436
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 16362
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 16217
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 16098
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[187].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17528
                            }, this),
                            $$contentTexts[188].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[189].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17591
                            }, this),
                            $$contentTexts[190].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 17525
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17513
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[191].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17679
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[192].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[193].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17743
                        }, this),
                        $$contentTexts[194].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17713
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "ranksepfunc",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#ranksepfunc",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 17891
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17835
                        }, this),
                        "ranksepFunc",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "ranksepFunc",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18299
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18168
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 18094
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 17945
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 17814
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[195].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19260
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 19257
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19245
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[196].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19313
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[197].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19347
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodesep",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodesep",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19450
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19398
                        }, this),
                        "nodesep",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodesep",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 19850
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19719
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 19645
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 19500
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 19381
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[198].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 20811
                            }, this),
                            $$contentTexts[199].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[200].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 20874
                            }, this),
                            $$contentTexts[201].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 20808
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20796
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[202].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20962
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[203].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[204].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21026
                        }, this),
                        $$contentTexts[205].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 20996
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodesepfunc",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodesepfunc",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21174
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21118
                        }, this),
                        "nodesepFunc",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodesepFunc",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21582
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21451
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 21377
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 21228
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 21097
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[206].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22543
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 22540
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22528
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[207].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22596
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[208].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22630
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "begin",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#begin",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 22729
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22679
                        }, this),
                        "begin",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "begin",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23125
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22994
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 22920
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 22777
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 22664
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[209].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 24086
                            }, this),
                            $$contentTexts[210].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[211].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 24149
                            }, this),
                            $$contentTexts[212].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 24083
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 24071
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[213].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 24237
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "controlpoints",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#controlpoints",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 24352
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24294
                        }, this),
                        "controlPoints",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "controlPoints",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24764
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24633
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 24559
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 24408
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 24271
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[214].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 25725
                            }, this),
                            $$contentTexts[215].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[216].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 25788
                            }, this),
                            $$contentTexts[217].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 25722
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 25710
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[218].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[219].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25906
                        }, this),
                        $$contentTexts[220].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[221].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 25973
                        }, this),
                        $$contentTexts[222].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[223].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26040
                        }, this),
                        $$contentTexts[224].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 25876
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "edgelabelspace",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#edgelabelspace",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 26194
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26135
                        }, this),
                        "edgeLabelSpace",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "edgeLabelSpace",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26608
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26477
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 26403
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 26251
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 26111
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[225].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 27569
                            }, this),
                            $$contentTexts[226].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[227].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 27632
                            }, this),
                            $$contentTexts[228].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 27566
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 27554
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[229].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 27720
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[230].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 27754
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "focusnode",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#focusnode",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 27861
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 27807
                        }, this),
                        "focusNode",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "focusNode",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 28265
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28134
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 28060
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 27913
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 27788
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[231].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 29226
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 29223
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 29211
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[232].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[233].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 29309
                        }, this),
                        $$contentTexts[234].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 29279
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[235].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 29384
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[236].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 29420
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[237].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 29456
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 29380
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodeorder",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodeorder",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 29570
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 29516
                        }, this),
                        "nodeOrder",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodeOrder",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 29974
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 29843
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 29769
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 29622
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 29497
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[238].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 30935
                            }, this),
                            $$contentTexts[239].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[240].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 30998
                            }, this),
                            $$contentTexts[241].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 30932
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 30920
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[242].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 31086
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[243].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 31120
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "nodesize",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodesize",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 31225
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 31172
                        }, this),
                        "nodeSize",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "nodeSize",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 31627
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 31496
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 31422
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 31276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 31154
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[244].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 32588
                            }, this),
                            $$contentTexts[245].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[246].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 32651
                            }, this),
                            $$contentTexts[247].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 32585
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 32573
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[248].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 32739
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[249].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 32773
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "preset",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#preset",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 32874
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 32823
                        }, this),
                        "preset",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "preset",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 33272
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 33141
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 33067
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 32923
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 32807
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[250].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 34233
                            }, this),
                            $$contentTexts[251].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[252].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 34296
                            }, this),
                            $$contentTexts[253].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 34230
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 34218
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[254].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 34384
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[255].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 34418
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "radial",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#radial",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 34519
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 34468
                        }, this),
                        "radial",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "radial",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 34917
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 34786
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 34712
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 34568
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 34452
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                            children: $$contentTexts[256].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 35878
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 35875
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 35863
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[257].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 35931
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "sortbycombo",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#sortbycombo",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 36042
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 35986
                        }, this),
                        "sortByCombo",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "sortByCombo",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 36450
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36319
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 36245
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 36096
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 35965
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("em", {
                                children: $$contentTexts[258].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 37411
                            }, this),
                            $$contentTexts[259].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[260].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 37474
                            }, this),
                            $$contentTexts[261].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 37408
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37396
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[262].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37562
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[263].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37596
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "suitable-scenarios",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#suitable-scenarios",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 37721
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37658
                        }, this),
                        "Suitable Scenarios",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Suitable-Scenarios",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 38143
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38012
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 37938
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 37782
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 37630
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[264].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39097
                                }, this),
                                $$contentTexts[265].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 39093
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[266].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39177
                                }, this),
                                $$contentTexts[267].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 39173
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[268].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39257
                                }, this),
                                $$contentTexts[269].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 39253
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 39089
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "related-documentation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#related-documentation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 39435
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 39369
                        }, this),
                        "Related Documentation",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Related-Documentation",
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
                                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 39863
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39732
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 39658
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 39499
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 39338
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[270].value
                    }, void 0, false, {
                        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 40821
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 40809
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://mp.weixin.qq.com/s/EdyTfFUH7fyMefNSBXI2nA",
                                children: $$contentTexts[271].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 40876
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 40872
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                href: "https://www.yuque.com/antv/g6-blog/xxp5nl",
                                children: $$contentTexts[272].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 40976
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 40972
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 40868
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
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
                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/AntvDagreLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/AntvDagreLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/AntvDagreLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_AntvDagreLayout_en_md-async.js.map