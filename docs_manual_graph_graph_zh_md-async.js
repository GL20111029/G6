((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/graph/graph.zh.md'],
{ "docs/manual/graph/graph.zh.md": function (module, exports, __mako_require__){
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
                        id: "什么是-graph",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#什么是-graph",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 111
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 57
                            }, this),
                            "什么是 Graph",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "什么是-Graph",
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
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 515
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 384
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 310
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 163
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[0].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 1461
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                $$contentTexts[1].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    href: "https://zhuanlan.zhihu.com/aiux-antv",
                                    children: $$contentTexts[2].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1533
                                }, this),
                                $$contentTexts[3].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    href: "https://zhuanlan.zhihu.com/p/83685690",
                                    children: $$contentTexts[4].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1634
                                }, this),
                                $$contentTexts[5].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/graph.zh.md",
                            lineNumber: 21,
                            columnNumber: 1505
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 1493
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[6].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 1753
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[7].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 1785
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[8].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1825
                                    }, this),
                                    $$contentTexts[9].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[10].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1892
                                    }, this),
                                    $$contentTexts[11].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 1821
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[12].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1966
                                    }, this),
                                    $$contentTexts[13].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 1962
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[14].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2044
                                    }, this),
                                    $$contentTexts[15].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[16].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2113
                                    }, this),
                                    $$contentTexts[17].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 2040
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[18].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2187
                                    }, this),
                                    $$contentTexts[19].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 2183
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: $$contentTexts[20].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2265
                                    }, this),
                                    $$contentTexts[21].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2334
                                    }, this),
                                    $$contentTexts[23].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 2261
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 1817
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "使用-g6-graph",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#使用-g6-graph",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2486
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 2430
                            }, this),
                            "使用 G6 Graph",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "使用-G6-Graph",
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
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2894
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2763
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2689
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 2540
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 2409
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[24].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[25].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 3869
                            }, this),
                            $$contentTexts[26].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 3840
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            children: [
                                $$contentTexts[27].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/getting-started/installation",
                                    children: $$contentTexts[28].value
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3979
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/graph/graph.zh.md",
                            lineNumber: 21,
                            columnNumber: 3950
                        }, this)
                    }, void 0, false, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 3938
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[29].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: $$contentTexts[30].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 4106
                            }, this),
                            $$contentTexts[31].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[32].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 4175
                            }, this),
                            $$contentTexts[33].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 4077
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[34].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 4244
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/graph/graph.zh.md",
                lineNumber: 21,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index3.default, {
                type: "warning",
                title: "注意",
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[35].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[36].value
                        }, void 0, false, {
                            fileName: "docs/manual/graph/graph.zh.md",
                            lineNumber: 21,
                            columnNumber: 4385
                        }, this),
                        $$contentTexts[37].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/graph/graph.zh.md",
                    lineNumber: 21,
                    columnNumber: 4356
                }, this)
            }, void 0, false, {
                fileName: "docs/manual/graph/graph.zh.md",
                lineNumber: 21,
                columnNumber: 4319
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "markdown",
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "图配置项",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#图配置项",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4555
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 4506
                            }, this),
                            "图配置项",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "图配置项",
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
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 4949
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 4818
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4744
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 4602
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 4492
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[38].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/graph/option",
                                children: $$contentTexts[39].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 5924
                            }, this),
                            $$contentTexts[40].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 5895
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[41].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[42].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6072
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[43].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6107
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[44].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 6142
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6033
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 6026
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[45].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6201
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[46].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6236
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[47].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6271
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[48].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6306
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6197
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[49].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6350
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[50].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6385
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[51].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6420
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[52].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6455
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6346
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[53].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6499
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[54].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6534
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[55].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6569
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[56].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6604
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6495
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[57].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6648
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[58].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6683
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[59].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6718
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[60].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6753
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6644
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[61].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6797
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[62].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6832
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[63].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6867
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[64].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6902
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6793
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[65].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6946
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[66].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 6981
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[67].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7016
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[68].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7051
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6942
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[69].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7095
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[70].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7130
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[71].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7165
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[72].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7200
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7091
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[73].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7244
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[74].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7279
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[75].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/graph.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 7318
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7314
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[76].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7362
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7240
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[77].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7406
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[78].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7441
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[79].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7476
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[80].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7511
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7402
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[81].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7555
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[82].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7590
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[83].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7625
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[84].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7660
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7551
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[85].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7704
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[86].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7739
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[87].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7774
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[88].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7809
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7700
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[89].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7853
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[90].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7888
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[91].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7923
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[92].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7958
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7849
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[93].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8002
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[94].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8037
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[95].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8072
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[96].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8107
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7998
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[97].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8151
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[98].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8186
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[99].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8221
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[100].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8256
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8147
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[101].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8301
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[102].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8337
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[103].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8373
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[104].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8409
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8297
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[105].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8454
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[106].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8490
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[107].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8526
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[108].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8562
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8450
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[109].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8607
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[110].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8643
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[111].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8679
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[112].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "/manual/data",
                                                        children: $$contentTexts[113].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 8746
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8715
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8603
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[114].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8818
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[115].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8854
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[116].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8890
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[117].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "/manual/element/node/overview",
                                                        children: $$contentTexts[118].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 8957
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 8926
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8814
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[119].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9046
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[120].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9082
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[121].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9118
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[122].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "/manual/element/edge/overview",
                                                        children: $$contentTexts[123].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 9185
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9154
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9042
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[124].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9274
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[125].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9310
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[126].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9346
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[127].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "/manual/element/combo/overview",
                                                        children: $$contentTexts[128].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 9413
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9382
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9270
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[129].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9503
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[130].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9539
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[131].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9575
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[132].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "/manual/animation/animation",
                                                        children: $$contentTexts[133].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 9642
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9611
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9499
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[134].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9729
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[135].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9765
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[136].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/graph/graph.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 9805
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9801
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[137].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[138].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 9881
                                                    }, this),
                                                    $$contentTexts[139].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                        children: $$contentTexts[140].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 9948
                                                    }, this),
                                                    $$contentTexts[141].value
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 9850
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9725
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[142].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10029
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[143].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10065
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[144].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10101
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[145].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "/manual/layout/overview",
                                                        children: $$contentTexts[146].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 10168
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10137
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10025
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[147].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10251
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[148].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10287
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[149].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10323
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[150].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "/manual/behavior/overview",
                                                        children: $$contentTexts[151].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 10390
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10359
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10247
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[152].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10475
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[153].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10511
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[154].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10547
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[155].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "/manual/plugin/overview",
                                                        children: $$contentTexts[156].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 10614
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10583
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10471
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[157].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10697
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[158].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10733
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[159].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10769
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: [
                                                    $$contentTexts[160].value,
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                        to: "/manual/transform/overview",
                                                        children: $$contentTexts[161].value
                                                    }, void 0, false, {
                                                        fileName: "docs/manual/graph/graph.zh.md",
                                                        lineNumber: 21,
                                                        columnNumber: 10836
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 10805
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10693
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 6190
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 6019
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "图属性",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#图属性",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10995
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 10947
                            }, this),
                            "图属性",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "图属性",
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
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 11387
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11256
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11182
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 11041
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 10934
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: $$contentTexts[162].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 12333
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12421
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 12457
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12381
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 12374
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[166].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12517
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[167].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12553
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[168].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12589
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12513
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[169].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12634
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[170].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12670
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                                children: $$contentTexts[171].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/graph/graph.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 12706
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12630
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 12506
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 12367
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                        id: "参考示例",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#参考示例",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12826
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 12777
                            }, this),
                            "参考示例",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "参考示例",
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
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 13220
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13089
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13015
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 12873
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 12763
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                        id: "完整的创建和配置示例",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                "aria-hidden": "true",
                                tabIndex: "-1",
                                href: "#完整的创建和配置示例",
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    className: "icon icon-link"
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14241
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 14186
                            }, this),
                            "完整的创建和配置示例",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                                title: "Post a comment",
                                "data-feedback-hash": "完整的创建和配置示例",
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
                                            fileName: "docs/manual/graph/graph.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14647
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14516
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/graph/graph.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14442
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 14294
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 14166
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: "ob-codeblock",
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                meta: "| ob { pin: false, inject: true }",
                                lang: "js"
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 15623
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                                lang: "js",
                                children: $$contentTexts[172].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 15679
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 15593
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                        lang: "typescript",
                        children: $$contentTexts[173].value
                    }, void 0, false, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 15747
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: [
                                    $$contentTexts[174].value,
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                        to: "/manual/getting-started/quick-start",
                                        children: $$contentTexts[175].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/graph/graph.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15852
                                    }, this),
                                    $$contentTexts[176].value
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 15821
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                children: $$contentTexts[177].value
                            }, void 0, false, {
                                fileName: "docs/manual/graph/graph.zh.md",
                                lineNumber: 21,
                                columnNumber: 15965
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/graph/graph.zh.md",
                        lineNumber: 21,
                        columnNumber: 15817
                    }, this)
                ]
            }, void 0, true, {
                fileName: "docs/manual/graph/graph.zh.md",
                lineNumber: 21,
                columnNumber: 4466
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
                fileName: "docs/manual/graph/graph.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/graph/graph.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/graph/graph.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/graph/graph.zh.md",
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
//# sourceMappingURL=docs_manual_graph_graph_zh_md-async.js.map