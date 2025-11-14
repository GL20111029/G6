((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/DendrogramLayout.en.md'],
{ "docs/manual/layout/DendrogramLayout.en.md": function (module, exports, __mako_require__){
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
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 109
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
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
                                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 511
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 380
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1457
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*zX7tSLqBvwcAAAAAAAAAAABkARQnAQ",
                    width: "400",
                    alt: "Dendrogram Layout Example"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1489
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
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1713
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1655
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
                                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 2125
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1994
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1920
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1769
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1632
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3071
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
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3200
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3148
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
                                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3600
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3469
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3395
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3250
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 3131
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*tTShQLD_dGoAAAAAAAAAAAAAemJ7AQ/original",
                    width: "400",
                    alt: "Dendrogram Layout Options Illustration"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4546
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[2].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4729
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[3].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4763
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4797
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4831
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 4865
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 4725
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4718
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[7].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[8].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4957
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[9].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 4995
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 4991
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5073
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4919
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5117
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[13].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#direction",
                                                    children: $$contentTexts[14].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5182
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5152
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[15].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5246
                                                }, this),
                                                $$contentTexts[16].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[17].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5311
                                                }, this),
                                                $$contentTexts[18].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[19].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5376
                                                }, this),
                                                $$contentTexts[20].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[21].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5441
                                                }, this),
                                                $$contentTexts[22].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[23].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5506
                                                }, this),
                                                $$contentTexts[24].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[25].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 5571
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5242
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[26].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 5619
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5615
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5663
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5113
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5678
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5713
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5748
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5783
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5818
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5674
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5833
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5868
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5903
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5973
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5829
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[35].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 5988
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[36].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#radial",
                                                    children: $$contentTexts[37].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 6053
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6023
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[38].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[39].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6145
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 6180
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5984
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4912
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4711
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "direction",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#direction",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6280
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6226
                        }, this),
                        "direction",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "direction",
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
                                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6684
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6553
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 6479
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6332
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 6207
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[40].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 7630
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[41].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 7671
                            }, this),
                            $$contentTexts[42].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 7667
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 7663
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*krAnRrLTEnEAAAAAAAAAAABkARQnAQ",
                    width: "115",
                    alt: "TB direction"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 7746
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[43].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 7884
                            }, this),
                            $$contentTexts[44].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 7880
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 7876
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*0HRyS64i7QoAAAAAAAAAAABkARQnAQ",
                    width: "115",
                    alt: "BT direction"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 7959
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[45].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8097
                            }, this),
                            $$contentTexts[46].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 8093
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8089
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*T5KZTJdA2OUAAAAAAAAAAABkARQnAQ",
                    width: "55",
                    alt: "LR direction"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8172
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[47].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8309
                            }, this),
                            $$contentTexts[48].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 8305
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8301
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*q7QJQ5RbQ5kAAAAAAAAAAABkARQnAQ",
                    width: "55",
                    alt: "RL direction"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8384
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[49].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8521
                            }, this),
                            $$contentTexts[50].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 8517
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8513
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*tzIfRJ5CuR8AAAAAAAAAAABkARQnAQ",
                    width: "85",
                    alt: "H direction"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8596
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                children: $$contentTexts[51].value
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 8732
                            }, this),
                            $$contentTexts[52].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                        lineNumber: 21,
                        columnNumber: 8728
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8724
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*B9sjToOzCiAAAAAAAAAAAABkARQnAQ",
                    width: "115",
                    alt: "V direction"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8807
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
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9003
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 8952
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
                                        fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9401
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9270
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 9196
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 9052
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 8936
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[53].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10347
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[54].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[55].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10409
                        }, this),
                        $$contentTexts[56].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[57].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10474
                        }, this),
                        $$contentTexts[58].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[59].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10539
                        }, this),
                        $$contentTexts[60].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[61].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10604
                        }, this),
                        $$contentTexts[62].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[63].value
                        }, void 0, false, {
                            fileName: "docs/manual/layout/DendrogramLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 10669
                        }, this),
                        $$contentTexts[64].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10380
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    src: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*AhopQI5j-bcAAAAAAAAAAABkARQnAQ",
                    width: "175",
                    alt: "Radial Layout"
                }, void 0, false, {
                    fileName: "docs/manual/layout/DendrogramLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 10738
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/DendrogramLayout.en.md",
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
                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/DendrogramLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/DendrogramLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/DendrogramLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_DendrogramLayout_en_md-async.js.map