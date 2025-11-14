((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/layout/BaseLayout.zh.md'],
{ "docs/manual/layout/BaseLayout.zh.md": function (module, exports, __mako_require__){
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
                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "通用配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#通用配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/layout/BaseLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 133
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 84
                        }, this),
                        "通用配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "通用配置",
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
                                        fileName: "docs/manual/layout/BaseLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 527
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 396
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/BaseLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 322
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 180
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/BaseLayout.zh.md",
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
                                        fileName: "docs/manual/layout/BaseLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1491
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[2].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/BaseLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1525
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[3].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/BaseLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1559
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/BaseLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1593
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/layout/BaseLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1627
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/layout/BaseLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 1487
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1480
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[6].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1685
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[7].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1719
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#Type",
                                                children: $$contentTexts[8].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/layout/BaseLayout.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 1757
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1753
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[9].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1811
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[10].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1845
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1681
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1924
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[13].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1994
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2029
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1885
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2044
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2079
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[17].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2114
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2149
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2184
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2040
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2199
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2234
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[21].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2269
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2304
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2339
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2195
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2354
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2389
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[25].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2424
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2459
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2494
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2350
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[27].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2509
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[28].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[29].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2579
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[30].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2614
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2649
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2505
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[31].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[32].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2699
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[33].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2734
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[34].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2804
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2660
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 1674
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 1473
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
                                fileName: "docs/manual/layout/BaseLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 2894
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 2845
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
                                        fileName: "docs/manual/layout/BaseLayout.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3288
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3157
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/layout/BaseLayout.zh.md",
                                lineNumber: 21,
                                columnNumber: 3083
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 2941
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 2831
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[35].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4234
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        4
                    ],
                    children: $$contentTexts[36].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4267
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[37].value
                }, void 0, false, {
                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4349
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[38].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4390
                                }, this),
                                $$contentTexts[39].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/antv-dagre-layout",
                                    children: $$contentTexts[40].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4455
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4386
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[41].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4541
                                }, this),
                                $$contentTexts[42].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/circular-layout",
                                    children: $$contentTexts[43].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4606
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4537
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[44].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4690
                                }, this),
                                $$contentTexts[45].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/combo-combined-layout",
                                    children: $$contentTexts[46].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4755
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4686
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[47].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4845
                                }, this),
                                $$contentTexts[48].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/concentric-layout",
                                    children: $$contentTexts[49].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4910
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4841
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[50].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4996
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/d3-force-layout",
                                    children: $$contentTexts[51].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5035
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 4992
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[52].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5119
                                }, this),
                                $$contentTexts[53].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/d3-force3-d-layout",
                                    children: $$contentTexts[54].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5184
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5115
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[55].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5271
                                }, this),
                                $$contentTexts[56].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/dagre-layout",
                                    children: $$contentTexts[57].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5336
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5267
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[58].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5417
                                }, this),
                                $$contentTexts[59].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/fishbone",
                                    children: $$contentTexts[60].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5482
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5413
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[61].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5559
                                }, this),
                                $$contentTexts[62].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/force-layout",
                                    children: $$contentTexts[63].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5624
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5555
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[64].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5705
                                }, this),
                                $$contentTexts[65].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/force-atlas2-layout",
                                    children: $$contentTexts[66].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5770
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5701
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[67].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5858
                                }, this),
                                $$contentTexts[68].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/fruchterman-layout",
                                    children: $$contentTexts[69].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5923
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 5854
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[70].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6010
                                }, this),
                                $$contentTexts[71].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/grid-layout",
                                    children: $$contentTexts[72].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6075
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6006
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[73].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6155
                                }, this),
                                $$contentTexts[74].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/mds-layout",
                                    children: $$contentTexts[75].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6220
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6151
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[76].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6299
                                }, this),
                                $$contentTexts[77].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/radial-layout",
                                    children: $$contentTexts[78].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6364
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6295
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[79].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6446
                                }, this),
                                $$contentTexts[80].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/random-layout",
                                    children: $$contentTexts[81].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6511
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6442
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[82].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6593
                                }, this),
                                $$contentTexts[83].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/snake",
                                    children: $$contentTexts[84].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6658
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6589
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[85].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6732
                                }, this),
                                $$contentTexts[86].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/compact-box-layout",
                                    children: $$contentTexts[87].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6797
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6728
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[88].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6884
                                }, this),
                                $$contentTexts[89].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/dendrogram-layout",
                                    children: $$contentTexts[90].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6949
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 6880
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[91].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7035
                                }, this),
                                $$contentTexts[92].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/mindmap-layout",
                                    children: $$contentTexts[93].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7100
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7031
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[94].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7183
                                }, this),
                                $$contentTexts[95].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/layout/indented-layout",
                                    children: $$contentTexts[96].value
                                }, void 0, false, {
                                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7248
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/layout/BaseLayout.zh.md",
                            lineNumber: 21,
                            columnNumber: 7179
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/layout/BaseLayout.zh.md",
                    lineNumber: 21,
                    columnNumber: 4382
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/layout/BaseLayout.zh.md",
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
                fileName: "docs/manual/layout/BaseLayout.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/layout/BaseLayout.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/layout/BaseLayout.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/layout/BaseLayout.zh.md",
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
//# sourceMappingURL=docs_manual_layout_BaseLayout_zh_md-async.js.map