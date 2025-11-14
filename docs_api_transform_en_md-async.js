((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/api/transform.en.md'],
{ "docs/api/transform.en.md": function (module, exports, __mako_require__){
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
                    id: "overview-of-data-transformation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#overview-of-data-transformation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 155
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 79
                        }, this),
                        "Overview of Data Transformation",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Overview-of-Data-Transformation",
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
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 603
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 472
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 398
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 229
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/manual/transform/overview",
                            children: $$contentTexts[0].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 1552
                        }, this),
                        $$contentTexts[1].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 1549
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[2].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 1658
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[3].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 1692
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[4].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 1726
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 1654
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[5].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 1765
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "api-reference",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#api-reference",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 1878
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 1820
                        }, this),
                        "API Reference",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "API-Reference",
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
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2290
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2159
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 2085
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 1934
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 1797
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
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 3327
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 3264
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
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3755
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3624
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 3550
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 3391
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 3236
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[6].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 4701
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[7].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 4733
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[8].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.en.md",
                        lineNumber: 21,
                        columnNumber: 4804
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 4801
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[9].value
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4858
                                }, this),
                                $$contentTexts[10].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "#transformoptions",
                                    children: $$contentTexts[11].value
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4926
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 4854
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: $$contentTexts[12].value
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4997
                                }, this),
                                $$contentTexts[13].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 4993
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 4850
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[14].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.en.md",
                        lineNumber: 21,
                        columnNumber: 5079
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 5076
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[15].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 5126
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
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 5306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 5233
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
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 5754
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5623
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 5549
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 5380
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 5195
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[16].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 6700
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[17].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 6733
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[18].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.en.md",
                        lineNumber: 21,
                        columnNumber: 6805
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 6802
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[19].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6870
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[20].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6905
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[21].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6940
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[22].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6975
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[23].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7010
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 6866
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 6859
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[24].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7069
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[25].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7104
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#transformoptions",
                                                children: $$contentTexts[26].value
                                            }, void 0, false, {
                                                fileName: "docs/api/transform.en.md",
                                                lineNumber: 21,
                                                columnNumber: 7143
                                            }, this),
                                            $$contentTexts[27].value
                                        ]
                                    }, void 0, true, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7139
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[28].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7236
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[29].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 7271
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 7065
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 7058
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 6852
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[30].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.en.md",
                        lineNumber: 21,
                        columnNumber: 7330
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 7327
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[31].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 7377
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[32].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 7413
                        }, this),
                        $$contentTexts[33].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 7410
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[34].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 7486
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[35].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 7558
                        }, this),
                        $$contentTexts[36].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 7555
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[37].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 7631
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[38].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 7703
                        }, this),
                        $$contentTexts[39].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 7700
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[40].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 7776
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
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 7958
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 7884
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
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8408
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8277
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 8203
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 8033
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 7845
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[41].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[42].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 9383
                        }, this),
                        $$contentTexts[43].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 9354
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[44].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 9452
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[45].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.en.md",
                        lineNumber: 21,
                        columnNumber: 9524
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 9521
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[46].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9589
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[47].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9624
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[48].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9659
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[49].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9694
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[50].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9729
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 9585
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 9578
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[51].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9788
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[52].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9823
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                            to: "#updatetransformoption",
                                            children: $$contentTexts[53].value
                                        }, void 0, false, {
                                            fileName: "docs/api/transform.en.md",
                                            lineNumber: 21,
                                            columnNumber: 9862
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9858
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[54].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9934
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        children: $$contentTexts[55].value
                                    }, void 0, false, {
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9969
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 9784
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 9777
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 9571
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[56].value
                    }, void 0, false, {
                        fileName: "docs/api/transform.en.md",
                        lineNumber: 21,
                        columnNumber: 10028
                    }, this)
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 10025
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[57].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[58].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 10104
                        }, this),
                        $$contentTexts[59].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 10075
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[60].value
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 10176
                        }, this),
                        $$contentTexts[61].value
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 10173
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[62].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 10249
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "type-definitions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#type-definitions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 10405
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 10344
                        }, this),
                        "Type Definitions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Type-Definitions",
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
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10823
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10692
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 10618
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 10464
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 10318
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
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 11856
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 11795
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
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12274
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12143
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 12069
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 11915
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 11769
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[63].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 13220
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[64].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 13253
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
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 13419
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 13353
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
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13847
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13716
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 13642
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 13483
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 13322
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[65].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 14793
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[66].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 14826
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
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 14992
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 14926
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
                                        fileName: "docs/api/transform.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15420
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/api/transform.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15289
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/api/transform.en.md",
                                lineNumber: 21,
                                columnNumber: 15215
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/api/transform.en.md",
                            lineNumber: 21,
                            columnNumber: 15056
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 14895
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[67].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 16366
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[68].value
                }, void 0, false, {
                    fileName: "docs/api/transform.en.md",
                    lineNumber: 21,
                    columnNumber: 16399
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/api/transform.en.md",
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
                fileName: "docs/api/transform.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/api/transform.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/api/transform.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/api/transform.en.md",
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
//# sourceMappingURL=docs_api_transform_en_md-async.js.map