((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/BaseLayout.en.md'],
{ "docs/manual/layout/BaseLayout.en.md": function (module, exports, __mako_require__){
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
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[0].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/BaseLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "general-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#general-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/BaseLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 167
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 101
                        }, this),
                        "General Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "General-Configuration",
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
                                        fileName: "docs/manual/layout/BaseLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 595
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 464
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/BaseLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 390
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 231
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/BaseLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/BaseLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1559
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[2].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/BaseLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1593
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[3].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/BaseLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1627
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/BaseLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1661
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/BaseLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1695
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/BaseLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 1555
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1548
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[6].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1753
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[7].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1787
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#Type",
                                                children: $$contentTexts[8].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/BaseLayout.en.md",
                                                lineNumber: 21,
                                                columnNumber: 1825
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1821
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[9].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1879
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1913
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1749
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1957
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2027
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2062
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2097
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1953
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2112
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2147
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2182
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2217
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2252
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2108
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2267
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2302
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2337
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2372
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2407
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2263
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2422
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2457
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2492
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2527
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2562
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2418
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2577
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2612
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2717
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2573
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2732
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2767
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2802
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2837
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2872
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2728
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 1742
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/BaseLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 1541
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "type",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#type",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/BaseLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 2962
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 2913
                        }, this),
                        "Type",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Type",
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
                                        fileName: "docs/manual/layout/BaseLayout.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3356
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3225
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/BaseLayout.en.md",
                                lineNumber: 21,
                                columnNumber: 3151
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 3009
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/BaseLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 2899
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[35].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/BaseLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4302
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        4
                    ],
                    children: $$contentTexts[36].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/BaseLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4335
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[37].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/BaseLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4417
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[38].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4458
                                }, this),
                                $$contentTexts[39].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/antv-dagre-layout",
                                    children: $$contentTexts[40].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4523
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4454
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[41].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4612
                                }, this),
                                $$contentTexts[42].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/circular-layout",
                                    children: $$contentTexts[43].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4677
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4608
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[44].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4764
                                }, this),
                                $$contentTexts[45].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/combo-combined-layout",
                                    children: $$contentTexts[46].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4829
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4760
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[47].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4922
                                }, this),
                                $$contentTexts[48].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/concentric-layout",
                                    children: $$contentTexts[49].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4987
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 4918
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[50].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5076
                                }, this),
                                $$contentTexts[51].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/d3-force-layout",
                                    children: $$contentTexts[52].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5141
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5072
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[53].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5228
                                }, this),
                                $$contentTexts[54].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/d3-force3-d-layout",
                                    children: $$contentTexts[55].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5293
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5224
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[56].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5383
                                }, this),
                                $$contentTexts[57].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/dagre-layout",
                                    children: $$contentTexts[58].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5448
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5379
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[59].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5532
                                }, this),
                                $$contentTexts[60].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/fishbone",
                                    children: $$contentTexts[61].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5597
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5528
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[62].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5677
                                }, this),
                                $$contentTexts[63].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/force-layout",
                                    children: $$contentTexts[64].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5742
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5673
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[65].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5826
                                }, this),
                                $$contentTexts[66].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/force-atlas2-layout",
                                    children: $$contentTexts[67].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5891
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5822
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[68].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5982
                                }, this),
                                $$contentTexts[69].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/fruchterman-layout",
                                    children: $$contentTexts[70].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6047
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 5978
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[71].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6137
                                }, this),
                                $$contentTexts[72].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/grid-layout",
                                    children: $$contentTexts[73].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6202
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6133
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[74].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6285
                                }, this),
                                $$contentTexts[75].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/mds-layout",
                                    children: $$contentTexts[76].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6350
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6281
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[77].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6432
                                }, this),
                                $$contentTexts[78].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/radial-layout",
                                    children: $$contentTexts[79].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6497
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6428
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[80].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6582
                                }, this),
                                $$contentTexts[81].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/random-layout",
                                    children: $$contentTexts[82].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6647
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6578
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[83].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6732
                                }, this),
                                $$contentTexts[84].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/snake",
                                    children: $$contentTexts[85].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6797
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6728
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[86].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6874
                                }, this),
                                $$contentTexts[87].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/compact-box-layout",
                                    children: $$contentTexts[88].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6939
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 6870
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[89].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7029
                                }, this),
                                $$contentTexts[90].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/dendrogram-layout",
                                    children: $$contentTexts[91].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7094
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7025
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[92].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7183
                                }, this),
                                $$contentTexts[93].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/mindmap-layout",
                                    children: $$contentTexts[94].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7248
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7179
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[95].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7334
                                }, this),
                                $$contentTexts[96].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/layout/indented-layout",
                                    children: $$contentTexts[97].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7399
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.en.md",
                            lineNumber: 21,
                            columnNumber: 7330
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/BaseLayout.en.md",
                    lineNumber: 21,
                    columnNumber: 4450
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/BaseLayout.en.md",
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
                fileName: "docs/manual/layout/BaseLayout.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/BaseLayout.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/BaseLayout.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/BaseLayout.en.md",
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
//# sourceMappingURL=docs_manual_layout_BaseLayout_en_md-async.js.map