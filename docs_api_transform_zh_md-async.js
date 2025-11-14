((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/transform.zh.md'],
{ "docs/api/transform.zh.md": function (module, exports, __mako_require__){
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
                    id: "数据处理概述",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#数据处理概述",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 105
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 54
                        }, this),
                        "数据处理概述",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "数据处理概述",
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
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 503
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 372
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 298
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 154
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/transform/overview",
                            children: $$contentTexts[0].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 1452
                        }, this),
                        $$contentTexts[1].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 1449
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 1555
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 1589
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 1623
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 1551
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 1662
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "api-参考",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#api-参考",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 1761
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 1710
                        }, this),
                        "API 参考",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "API-参考",
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
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 2159
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2028
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 1954
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 1810
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 1694
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphgettransforms",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphgettransforms",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 3196
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 3133
                        }, this),
                        "Graph.getTransforms()",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.getTransforms()",
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
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3624
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3493
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 3419
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 3260
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 3105
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[6].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 4570
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 4602
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[8].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.zh.md",
                        lineNumber: 21,
                        columnNumber: 4673
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 4670
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[9].value
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4727
                                }, this),
                                $$contentTexts[10].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#transformoptions",
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4795
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 4723
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[12].value
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4866
                                }, this),
                                $$contentTexts[13].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 4862
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 4719
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[14].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.zh.md",
                        lineNumber: 21,
                        columnNumber: 4948
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 4945
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[15].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 4995
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphsettransformstransforms",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphsettransformstransforms",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 5175
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 5102
                        }, this),
                        "Graph.setTransforms(transforms)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.setTransforms(transforms)",
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
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5623
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5492
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 5418
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 5249
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 5064
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[16].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 6569
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[17].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 6602
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[18].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.zh.md",
                        lineNumber: 21,
                        columnNumber: 6674
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 6671
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[19].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6739
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[20].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6774
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6809
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6844
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6879
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 6735
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 6728
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6938
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6973
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#transformoptions",
                                                children: $$contentTexts[26].value
                                            }, void 0, false, {
                                                fileName: "docs/api/transform.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 7012
                                            }, this),
                                            $$contentTexts[27].value
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7008
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[28].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7105
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[29].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 7140
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 6934
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 6927
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 6721
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[30].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.zh.md",
                        lineNumber: 21,
                        columnNumber: 7199
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 7196
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[31].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 7246
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[32].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 7282
                        }, this),
                        $$contentTexts[33].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 7279
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[34].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 7355
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[35].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 7427
                        }, this),
                        $$contentTexts[36].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 7424
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[37].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 7500
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[38].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 7572
                        }, this),
                        $$contentTexts[39].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 7569
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[40].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 7645
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "graphupdatetransformtransform",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#graphupdatetransformtransform",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 7827
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 7753
                        }, this),
                        "Graph.updateTransform(transform)",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Graph.updateTransform(transform)",
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
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8277
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8146
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 8072
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 7902
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 7714
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[41].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[42].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 9252
                        }, this),
                        $$contentTexts[43].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 9223
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[44].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 9321
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[45].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.zh.md",
                        lineNumber: 21,
                        columnNumber: 9393
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 9390
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9458
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9493
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9528
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[49].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9563
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[50].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9598
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 9454
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 9447
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[51].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9657
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[52].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9692
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "#updatetransformoption",
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/api/transform.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 9731
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9727
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[54].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9803
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[55].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9838
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 9653
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 9646
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 9440
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[56].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.zh.md",
                        lineNumber: 21,
                        columnNumber: 9897
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 9894
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[57].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[58].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 9973
                        }, this),
                        $$contentTexts[59].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 9944
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[60].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 10045
                        }, this),
                        $$contentTexts[61].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 10042
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[62].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 10118
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "类型定义",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#类型定义",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 10250
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 10201
                        }, this),
                        "类型定义",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "类型定义",
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
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10644
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10513
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 10439
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 10297
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 10187
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "transformoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#transformoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 11677
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 11616
                        }, this),
                        "TransformOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "TransformOptions",
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
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12095
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11964
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 11890
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 11736
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 11590
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[63].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 13041
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[64].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 13074
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "customtransformoption",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#customtransformoption",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 13240
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 13174
                        }, this),
                        "CustomTransformOption",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "CustomTransformOption",
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
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13668
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13537
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 13463
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 13304
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 13143
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[65].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 14614
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[66].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 14647
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "updatetransformoption",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#updatetransformoption",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 14813
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 14747
                        }, this),
                        "UpdateTransformOption",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "UpdateTransformOption",
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
                                        fileName: "docs/api/transform.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 15241
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15110
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.zh.md",
                                lineNumber: 21,
                                columnNumber: 15036
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.zh.md",
                            lineNumber: 21,
                            columnNumber: 14877
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 14716
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[67].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 16187
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[68].value
                }, void 0, false, {
                    fileName: "docs/api/transform.zh.md",
                    lineNumber: 21,
                    columnNumber: 16220
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/transform.zh.md",
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
                fileName: "docs/api/transform.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/transform.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/transform.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/transform.zh.md",
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
//# sourceMappingURL=docs_api_transform_zh_md-async.js.map