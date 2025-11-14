((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/BaseEdge.zh.md'],
{ "docs/manual/element/edge/BaseEdge.zh.md": function (module, exports, __mako_require__){
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
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "edgeoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#edgeoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 147
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 91
                        }, this),
                        "EdgeOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "EdgeOptions",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 555
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 424
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 350
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 201
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        5,
                        6,
                        7,
                        8,
                        9
                    ],
                    children: $$contentTexts[1].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 1501
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[2].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1612
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[3].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1646
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1680
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1714
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1748
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 1608
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 1601
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[7].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[8].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#type",
                                                children: $$contentTexts[9].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 1878
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1874
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[10].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 1936
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1932
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1980
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1802
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1995
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#style",
                                                children: $$contentTexts[13].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 2069
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2065
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2125
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2160
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1991
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2175
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2210
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#state",
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 2249
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2245
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2305
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2340
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2171
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#palette",
                                                children: $$contentTexts[21].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 2429
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2522
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2351
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2537
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#animation",
                                                children: $$contentTexts[25].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 2611
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2671
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2706
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2533
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 1795
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 1594
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "type",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#type",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 2796
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 2747
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3190
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3059
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 2985
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 2843
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 2733
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[27].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[28].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 4165
                        }, this),
                        $$contentTexts[29].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[30].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 4230
                        }, this),
                        $$contentTexts[31].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 4136
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        3
                    ],
                    children: $$contentTexts[32].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 4303
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[33].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 4388
                        }, this),
                        $$contentTexts[34].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[35].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 4457
                        }, this),
                        $$contentTexts[36].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 4385
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[37].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 4526
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[38].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 4587
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[39].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4628
                                }, this),
                                $$contentTexts[40].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/edge/line",
                                    children: $$contentTexts[41].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4693
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 4624
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[42].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4772
                                }, this),
                                $$contentTexts[43].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/edge/polyline",
                                    children: $$contentTexts[44].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4837
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 4768
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[45].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4920
                                }, this),
                                $$contentTexts[46].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/edge/cubic",
                                    children: $$contentTexts[47].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4985
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 4916
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[48].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5065
                                }, this),
                                $$contentTexts[49].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/edge/cubic-horizontal",
                                    children: $$contentTexts[50].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5130
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 5061
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[51].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5221
                                }, this),
                                $$contentTexts[52].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/edge/cubic-vertical",
                                    children: $$contentTexts[53].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5286
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 5217
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[54].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5375
                                }, this),
                                $$contentTexts[55].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/edge/quadratic",
                                    children: $$contentTexts[56].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5440
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 5371
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 4620
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 5590
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 5540
                        }, this),
                        "Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Style",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 5986
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5855
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 5781
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 5638
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 5525
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[57].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 6932
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        3
                    ],
                    children: $$contentTexts[58].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 6965
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[59].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 7050
                        }, this),
                        $$contentTexts[60].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 7047
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[61].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 7123
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[62].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[63].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 7213
                        }, this),
                        $$contentTexts[64].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[65].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 7278
                        }, this),
                        $$contentTexts[66].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 7184
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[67].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 7347
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "320",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*cVHVQJKLOlgAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 7380
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[68].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7508
                                }, this),
                                $$contentTexts[69].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 7504
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[70].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7582
                                }, this),
                                $$contentTexts[71].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 7578
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[72].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7656
                                }, this),
                                $$contentTexts[73].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 7652
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[74].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7730
                                }, this),
                                $$contentTexts[75].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 7726
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[76].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7804
                                }, this),
                                $$contentTexts[77].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 7800
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[78].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 7878
                                }, this),
                                $$contentTexts[79].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 7874
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 7500
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[80].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 7953
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "主图形样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#主图形样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 8051
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 8001
                        }, this),
                        "主图形样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "主图形样式",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 8447
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8316
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 8242
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 8099
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 7986
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[81].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 9393
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "基础样式配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础样式配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 9493
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 9442
                        }, this),
                        "基础样式配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础样式配置",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9891
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 9760
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 9686
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 9542
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 9426
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[82].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 10837
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 10900
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[83].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 10944
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 10870
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "虚线样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#虚线样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 11074
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 11025
                        }, this),
                        "虚线样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "虚线样式",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 11468
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11337
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 11263
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 11121
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 11011
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 12414
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 12477
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[85].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 12521
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 12447
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "阴影效果",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#阴影效果",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 12651
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 12602
                        }, this),
                        "阴影效果",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "阴影效果",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13045
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 12914
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 12840
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 12698
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 12588
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 13991
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 14054
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[87].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 14098
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 14024
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[88].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 14165
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[89].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14216
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[90].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14251
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[91].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14286
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[92].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14321
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[93].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14356
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 14212
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 14205
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14415
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[95].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[96].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14480
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14450
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14537
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[98].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 14576
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14620
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14411
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14635
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14670
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14706
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[102].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14742
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14778
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14631
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[103].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14793
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14829
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14865
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14901
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14937
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14789
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14952
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 14988
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15024
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15060
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15096
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 14948
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15111
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15147
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15183
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15219
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15255
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15107
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15270
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15306
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15342
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15378
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15414
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15266
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[119].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[120].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#pointerevents",
                                                    children: $$contentTexts[121].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 15496
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15465
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15561
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[123].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15601
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15646
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15425
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15661
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15697
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15733
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15805
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15657
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15820
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15856
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15892
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15928
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15964
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15816
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15979
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16015
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16051
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16087
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16123
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15975
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16138
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16174
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16210
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16246
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16282
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16134
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16297
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16333
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[142].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16373
                                                }, this),
                                                $$contentTexts[143].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[144].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16440
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16369
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[145].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16489
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16485
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16534
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16293
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16549
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16585
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16657
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16693
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16545
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16708
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16744
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16780
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[153].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16820
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16816
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16865
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16704
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16880
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16916
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16952
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16988
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17024
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16876
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17039
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17111
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17147
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17183
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17035
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17198
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17234
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17270
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17306
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17342
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17194
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17357
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17393
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17429
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17465
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17501
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17353
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17516
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17552
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[172].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 17592
                                                }, this),
                                                $$contentTexts[173].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[174].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 17659
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[175].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 17708
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17704
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17753
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17512
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17768
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17804
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17876
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17912
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17764
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 14404
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 14198
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "pointerevents",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#pointerevents",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 18020
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 17962
                        }, this),
                        "PointerEvents",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "PointerEvents",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 18432
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18301
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 18227
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 18076
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 17939
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[180].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 19381
                        }, this),
                        $$contentTexts[181].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
                            children: $$contentTexts[182].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 19448
                        }, this),
                        $$contentTexts[183].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 19378
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[184].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[185].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 19614
                        }, this),
                        $$contentTexts[186].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[187].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 19681
                        }, this),
                        $$contentTexts[188].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[189].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 19748
                        }, this),
                        $$contentTexts[190].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[191].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 19815
                        }, this),
                        $$contentTexts[192].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[193].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 19882
                        }, this),
                        $$contentTexts[194].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[195].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 19949
                        }, this),
                        $$contentTexts[196].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[197].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20016
                        }, this),
                        $$contentTexts[198].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[199].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20083
                        }, this),
                        $$contentTexts[200].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[201].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20150
                        }, this),
                        $$contentTexts[202].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[203].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20217
                        }, this),
                        $$contentTexts[204].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[205].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20284
                        }, this),
                        $$contentTexts[206].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[207].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20351
                        }, this),
                        $$contentTexts[208].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[209].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20418
                        }, this),
                        $$contentTexts[210].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[211].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20485
                        }, this),
                        $$contentTexts[212].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[213].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20552
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 19584
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[214].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[215].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20626
                        }, this),
                        $$contentTexts[216].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[217].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20693
                        }, this),
                        $$contentTexts[218].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 20596
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[219].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20780
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20772
                                }, this),
                                $$contentTexts[220].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[221].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20856
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20768
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[222].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20913
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20905
                                }, this),
                                $$contentTexts[223].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20901
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[224].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21006
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20998
                                }, this),
                                $$contentTexts[225].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[226].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21090
                                                }, this),
                                                $$contentTexts[227].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[228].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21157
                                                }, this),
                                                $$contentTexts[229].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[230].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[231].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21260
                                                }, this),
                                                $$contentTexts[232].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[233].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21327
                                                }, this),
                                                $$contentTexts[234].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21229
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21082
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 20994
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[235].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21421
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21413
                                }, this),
                                $$contentTexts[236].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[237].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21505
                                                }, this),
                                                $$contentTexts[238].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[239].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21572
                                                }, this),
                                                $$contentTexts[240].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21501
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[241].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[242].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21675
                                                }, this),
                                                $$contentTexts[243].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21644
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21497
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 21409
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[244].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 21769
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21761
                                }, this),
                                $$contentTexts[245].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[246].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21853
                                                }, this),
                                                $$contentTexts[247].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[248].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21920
                                                }, this),
                                                $$contentTexts[249].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21849
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[250].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[251].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22023
                                                }, this),
                                                $$contentTexts[252].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 21992
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21845
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 21757
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[253].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22117
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22109
                                }, this),
                                $$contentTexts[254].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[255].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[256].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22228
                                                }, this),
                                                $$contentTexts[257].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[258].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22295
                                                }, this),
                                                $$contentTexts[259].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22197
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[260].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[261].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22398
                                                }, this),
                                                $$contentTexts[262].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22367
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22193
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 22105
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[263].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22492
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22484
                                }, this),
                                $$contentTexts[264].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[265].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[266].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22603
                                                }, this),
                                                $$contentTexts[267].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[268].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[269].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22706
                                                }, this),
                                                $$contentTexts[270].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 22675
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22568
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 22480
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[271].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22800
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22792
                                }, this),
                                $$contentTexts[272].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[273].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22876
                                }, this),
                                $$contentTexts[274].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[275].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 22943
                                }, this),
                                $$contentTexts[276].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 22788
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 20764
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[277].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                        lineNumber: 21,
                        columnNumber: 23023
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 23020
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[278].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 23071
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "cursor",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#cursor",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 23200
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 23149
                        }, this),
                        "Cursor",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Cursor",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 23598
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 23467
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 23393
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 23249
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 23133
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[279].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[280].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 24574
                        }, this),
                        $$contentTexts[281].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[282].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 24641
                        }, this),
                        $$contentTexts[283].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[284].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 24708
                        }, this),
                        $$contentTexts[285].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[286].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 24775
                        }, this),
                        $$contentTexts[287].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[288].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 24842
                        }, this),
                        $$contentTexts[289].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[290].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 24909
                        }, this),
                        $$contentTexts[291].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[292].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 24976
                        }, this),
                        $$contentTexts[293].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[294].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25043
                        }, this),
                        $$contentTexts[295].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[296].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25110
                        }, this),
                        $$contentTexts[297].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[298].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25177
                        }, this),
                        $$contentTexts[299].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[300].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25244
                        }, this),
                        $$contentTexts[301].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[302].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25311
                        }, this),
                        $$contentTexts[303].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[304].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25378
                        }, this),
                        $$contentTexts[305].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[306].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25445
                        }, this),
                        $$contentTexts[307].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[308].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25512
                        }, this),
                        $$contentTexts[309].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[310].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25579
                        }, this),
                        $$contentTexts[311].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[312].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25646
                        }, this),
                        $$contentTexts[313].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[314].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25713
                        }, this),
                        $$contentTexts[315].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[316].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25780
                        }, this),
                        $$contentTexts[317].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[318].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25847
                        }, this),
                        $$contentTexts[319].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[320].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25914
                        }, this),
                        $$contentTexts[321].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[322].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 25981
                        }, this),
                        $$contentTexts[323].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[324].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26048
                        }, this),
                        $$contentTexts[325].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[326].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26115
                        }, this),
                        $$contentTexts[327].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[328].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26182
                        }, this),
                        $$contentTexts[329].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[330].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26249
                        }, this),
                        $$contentTexts[331].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[332].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26316
                        }, this),
                        $$contentTexts[333].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[334].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26383
                        }, this),
                        $$contentTexts[335].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[336].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26450
                        }, this),
                        $$contentTexts[337].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[338].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26517
                        }, this),
                        $$contentTexts[339].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[340].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26584
                        }, this),
                        $$contentTexts[341].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[342].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26651
                        }, this),
                        $$contentTexts[343].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[344].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26718
                        }, this),
                        $$contentTexts[345].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[346].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26785
                        }, this),
                        $$contentTexts[347].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[348].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26852
                        }, this),
                        $$contentTexts[349].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[350].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26919
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 24544
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "标签样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#标签样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 27026
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 26977
                        }, this),
                        "标签样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "标签样式",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27420
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27289
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 27215
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 27073
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 26963
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[351].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 28366
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "基础文本标签",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础文本标签",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 28467
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 28416
                        }, this),
                        "基础文本标签",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础文本标签",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28865
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28734
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 28660
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 28516
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 28400
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[352].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 29811
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 29875
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[353].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 29919
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 29845
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "多行文本标签",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#多行文本标签",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 30054
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 30003
                        }, this),
                        "多行文本标签",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "多行文本标签",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 30452
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 30321
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 30247
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 30103
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 29987
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[354].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 31398
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 31462
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[355].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 31506
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 31432
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "带背景的标签",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#带背景的标签",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 31641
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 31590
                        }, this),
                        "带背景的标签",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "带背景的标签",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32039
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 31908
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 31834
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 31690
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 31574
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[356].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 32985
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 33049
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[357].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 33093
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 33019
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "自动旋转标签",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#自动旋转标签",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 33228
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 33177
                        }, this),
                        "自动旋转标签",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "自动旋转标签",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 33626
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33495
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 33421
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 33277
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 33161
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[358].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 34572
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 34636
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[359].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 34680
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 34606
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[360].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 34748
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[361].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34800
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[362].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34836
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[363].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34872
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[364].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34908
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[365].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 34944
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 34796
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 34789
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[366].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35004
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[367].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35040
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[368].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35076
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[369].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35112
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35148
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35000
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[370].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35163
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[371].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35199
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[372].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35235
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[373].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35271
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35307
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35159
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[374].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35322
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[375].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[376].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 35389
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35358
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[377].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[378].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 35487
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35483
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35532
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35318
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[379].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35547
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[380].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35583
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[381].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35619
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[382].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35655
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35691
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35543
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[383].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35706
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[384].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35742
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[385].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35778
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[386].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35814
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35850
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35702
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[387].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35865
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[388].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35901
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[389].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[390].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 35973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36009
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35861
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[391].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36024
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[392].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36060
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[393].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36100
                                                }, this),
                                                $$contentTexts[394].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[395].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36167
                                                }, this),
                                                $$contentTexts[396].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[397].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36234
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36096
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[398].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36279
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36315
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36020
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[399].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36330
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[400].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36366
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[401].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36406
                                                }, this),
                                                $$contentTexts[402].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[403].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36473
                                                }, this),
                                                $$contentTexts[404].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36402
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[405].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36545
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36581
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36326
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[406].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36596
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[407].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36632
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[408].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36672
                                                }, this),
                                                $$contentTexts[409].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[410].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36739
                                                }, this),
                                                $$contentTexts[411].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[412].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36806
                                                }, this),
                                                $$contentTexts[413].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[414].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36873
                                                }, this),
                                                $$contentTexts[415].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36668
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[416].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36945
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36981
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36592
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[417].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 36996
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[418].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37032
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[419].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37068
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[420].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37104
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37140
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36992
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[421].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37155
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[422].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37191
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[423].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37227
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[424].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37263
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37299
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37151
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[425].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37314
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[426].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37350
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[427].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37386
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[428].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37422
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37458
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37310
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[429].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37473
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[430].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37509
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[431].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37545
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[432].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37581
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37617
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37469
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[433].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37632
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[434].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#labelmaxwidth",
                                                    children: $$contentTexts[435].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 37699
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37668
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[436].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37764
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[437].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 37804
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37800
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37849
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37628
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[438].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37864
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[439].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37900
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[440].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37936
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[441].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 37972
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38008
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 37860
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[442].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38023
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[443].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38059
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[444].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38095
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[445].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38131
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38167
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38019
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[446].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38182
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[447].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38218
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[448].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38254
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[449].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38290
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38326
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38178
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[450].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38341
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[451].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#labelplacement",
                                                    children: $$contentTexts[452].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38408
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38377
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[453].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38474
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[454].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38514
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38510
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38559
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38337
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[455].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38574
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[456].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[457].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38650
                                                }, this),
                                                $$contentTexts[458].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[459].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38717
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[460].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38762
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38798
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38570
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[461].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38813
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[462].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38849
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[463].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38889
                                                }, this),
                                                $$contentTexts[464].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[465].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38956
                                                }, this),
                                                $$contentTexts[466].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[467].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39023
                                                }, this),
                                                $$contentTexts[468].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[469].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39090
                                                }, this),
                                                $$contentTexts[470].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[471].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39157
                                                }, this),
                                                $$contentTexts[472].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[473].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39224
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38885
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[474].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 39273
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39269
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39318
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38809
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[475].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39333
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[476].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39369
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[477].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39409
                                                }, this),
                                                $$contentTexts[478].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[479].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39476
                                                }, this),
                                                $$contentTexts[480].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[481].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39543
                                                }, this),
                                                $$contentTexts[482].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[483].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39610
                                                }, this),
                                                $$contentTexts[484].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[485].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39677
                                                }, this),
                                                $$contentTexts[486].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[487].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39744
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39405
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[488].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39789
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39825
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39329
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[489].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[490].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39876
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[491].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39912
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[492].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39948
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39984
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39836
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[493].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39999
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[494].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40035
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[495].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40071
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[496].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40107
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40143
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39995
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[497].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40158
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[498].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40194
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[499].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40234
                                                }, this),
                                                $$contentTexts[500].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[501].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40301
                                                }, this),
                                                $$contentTexts[502].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[503].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40368
                                                }, this),
                                                $$contentTexts[504].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[505].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40435
                                                }, this),
                                                $$contentTexts[506].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[507].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40502
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40230
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[508].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40547
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40583
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40154
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[509].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40598
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[510].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40634
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[511].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40674
                                                }, this),
                                                $$contentTexts[512].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[513].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40741
                                                }, this),
                                                $$contentTexts[514].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40670
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[515].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40813
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40849
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40594
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[516].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40864
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[517].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40900
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[518].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40936
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[519].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40972
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41008
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40860
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[520].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41023
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[521].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41059
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[522].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41095
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[523].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41131
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41167
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41019
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[524].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41182
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[525].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41218
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[526].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41254
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[527].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41290
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41326
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41178
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 34993
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 34782
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "labelplacement",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#labelplacement",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 41436
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 41377
                        }, this),
                        "LabelPlacement",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "LabelPlacement",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 41850
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41719
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 41645
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 41493
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 41353
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[528].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 42796
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[529].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42838
                                }, this),
                                $$contentTexts[530].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 42834
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[531].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42914
                                }, this),
                                $$contentTexts[532].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 42910
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[533].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42990
                                }, this),
                                $$contentTexts[534].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 42986
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[535].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43066
                                }, this),
                                $$contentTexts[536].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 43062
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 42830
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "labelmaxwidth",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#labelmaxwidth",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 43224
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 43166
                        }, this),
                        "LabelMaxWidth",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "LabelMaxWidth",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 43636
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43505
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 43431
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 43280
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 43143
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[537].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[538].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 44612
                        }, this),
                        $$contentTexts[539].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 44582
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[540].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[541].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44718
                                }, this),
                                $$contentTexts[542].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 44687
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[543].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 44790
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 44683
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[544].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 44831
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[545].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 44865
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "标签背景样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#标签背景样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 44996
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 44945
                        }, this),
                        "标签背景样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "标签背景样式",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 45394
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 45263
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 45189
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 45045
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 44929
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[546].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 46340
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[547].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 46392
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[548].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 46428
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[549].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 46464
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[550].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 46500
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 46388
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 46381
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[551].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46560
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[552].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46596
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[553].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46632
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[554].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46668
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46556
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[555].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46713
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[556].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[557].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 46780
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46749
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[558].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46838
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[559].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 46878
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46874
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46709
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[560].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46932
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[561].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 46968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[562].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47004
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[563].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47040
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 46928
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[564].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47085
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[565].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[566].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47157
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[567].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47193
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47081
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[568].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47238
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[569].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[570].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47310
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[571].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47346
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47234
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[572].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47391
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[573].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[574].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47463
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[575].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47499
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47387
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[576].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[577].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[578].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47616
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[579].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47652
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47540
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[580].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47697
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[581].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47733
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[582].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[583].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47805
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47693
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[584].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[585].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 47917
                                                }, this),
                                                $$contentTexts[586].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 47950
                                                }, this),
                                                $$contentTexts[587].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[588].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 47988
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[589].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48024
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47846
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[590].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48069
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[591].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48105
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[592].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[593].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48177
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48065
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[594].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48222
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[595].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48258
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[596].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48294
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[597].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48330
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48218
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[598].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48375
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[599].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48411
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[600].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[601].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48483
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48371
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[602].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48528
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[603].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48564
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[604].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48600
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[605].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48636
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48524
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[606].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[607].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48717
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[608].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48753
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[609].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48789
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48677
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[610].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48834
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[611].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48870
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[612].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48906
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[613].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48942
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48830
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[614].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 48987
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[615].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49023
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[616].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 49063
                                                }, this),
                                                $$contentTexts[617].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[618].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 49130
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49059
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[619].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49175
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48983
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[620].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49220
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[621].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49256
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[622].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49292
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[623].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 49328
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49216
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 46549
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 46374
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "光晕样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#光晕样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 49448
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 49399
                        }, this),
                        "光晕样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "光晕样式",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49842
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 49711
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 49637
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 49495
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 49385
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[624].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 50788
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "基础光晕效果",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础光晕效果",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 50889
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 50838
                        }, this),
                        "基础光晕效果",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础光晕效果",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 51287
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51156
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 51082
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 50938
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 50822
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[625].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 52233
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 52297
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[626].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 52341
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 52267
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[627].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 52409
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[628].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52461
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[629].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52497
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[630].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52533
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[631].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52569
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[632].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 52605
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 52457
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 52450
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[633].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52665
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[634].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52701
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[635].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52737
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[636].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52773
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52809
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52661
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[637].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52824
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[638].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[639].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 52891
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52860
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[640].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52949
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[641].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 52989
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52985
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53034
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52820
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[642].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53049
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[643].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53085
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[644].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[645].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53157
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53193
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53045
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[646].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[647].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53244
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[648].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53280
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[649].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53316
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53352
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53204
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[650].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53367
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[651].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53403
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[652].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 53443
                                                }, this),
                                                $$contentTexts[653].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[654].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 53510
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53439
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[655].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53555
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53591
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53363
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[656].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53606
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[657].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53642
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[658].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53678
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[659].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53714
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53750
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53602
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[660].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53765
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[661].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53801
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[662].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53837
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[663].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53873
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53909
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53761
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[664].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53924
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[665].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#pointerevents",
                                                    children: $$contentTexts[666].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 53991
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 53960
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[667].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54056
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[668].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 54096
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54092
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54141
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53920
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[669].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[670].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[671].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 54223
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[672].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54272
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[673].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[674].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 54339
                                                }, this),
                                                $$contentTexts[675].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54308
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54411
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54152
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[676].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54426
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[677].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[678].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54498
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[679].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54534
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54570
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54422
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[680].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54585
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[681].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[682].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 54661
                                                }, this),
                                                $$contentTexts[683].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[684].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 54728
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54657
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[685].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 54777
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54773
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54822
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54581
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[686].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54837
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[687].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54873
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[688].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54909
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[689].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54945
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 54981
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54833
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 52654
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 52443
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "箭头样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#箭头样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 55071
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 55022
                        }, this),
                        "箭头样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "箭头样式",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 55465
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 55334
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 55260
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 55118
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 55008
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[690].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 56411
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "基础箭头",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础箭头",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 56508
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 56459
                        }, this),
                        "基础箭头",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础箭头",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56902
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 56771
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 56697
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 56555
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 56445
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[691].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 57848
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 57912
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[692].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 57956
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 57882
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "双向箭头",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#双向箭头",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 58087
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 58038
                        }, this),
                        "双向箭头",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "双向箭头",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 58481
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58350
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 58276
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 58134
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 58024
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[693].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 59427
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 59491
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[694].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 59535
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 59461
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "自定义箭头样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#自定义箭头样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 59672
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 59620
                        }, this),
                        "自定义箭头样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "自定义箭头样式",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 60072
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 59941
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 59867
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 59722
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 59603
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[695].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 61018
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 61082
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[696].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 61126
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 61052
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "起始箭头样式配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#起始箭头样式配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 61265
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 61212
                        }, this),
                        "起始箭头样式配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "起始箭头样式配置",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 61667
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 61536
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 61462
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 61316
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 61194
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[697].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62631
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[698].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62667
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[699].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62703
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[700].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62739
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[701].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62775
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 62627
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 62620
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[702].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 62835
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[703].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 62871
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[704].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 62907
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[705].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 62943
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 62979
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 62831
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[706].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 62994
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[707].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[708].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 63061
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[709].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63119
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[710].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 63159
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63155
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63204
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 62990
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[711].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63219
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[712].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63255
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[713].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63291
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[714].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63327
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63363
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63215
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[715].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63378
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[716].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63414
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[717].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63450
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[718].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63486
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63522
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63374
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[719].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63537
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[720].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[721].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63609
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[722].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63645
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63681
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63533
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[723].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63696
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[724].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63732
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[725].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63768
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[726].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63804
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63840
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63692
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[727].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63855
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[728].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63891
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[729].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63927
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[730].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63963
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 63999
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63851
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[731].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64014
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[732].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64050
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[733].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[734].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64122
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64158
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 64010
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[735].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[736].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64209
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[737].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 64249
                                                }, this),
                                                $$contentTexts[738].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[739].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 64316
                                                }, this),
                                                $$contentTexts[740].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[741].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 64383
                                                }, this),
                                                $$contentTexts[742].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[743].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 64450
                                                }, this),
                                                $$contentTexts[744].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[745].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 64517
                                                }, this),
                                                $$contentTexts[746].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[747].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 64584
                                                }, this),
                                                $$contentTexts[748].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[749].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 64651
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64245
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[750].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 64700
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64696
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 64745
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 64169
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 62824
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 62613
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "结束箭头样式配置",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#结束箭头样式配置",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 64843
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 64790
                        }, this),
                        "结束箭头样式配置",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "结束箭头样式配置",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 65245
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65114
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 65040
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 64894
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 64772
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[751].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 66209
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[752].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 66245
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[753].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 66281
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[754].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 66317
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[755].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 66353
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 66205
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 66198
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[756].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66413
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[757].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66449
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[758].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66485
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[759].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66521
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66557
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66409
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[760].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[761].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[762].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 66639
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[763].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66697
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[764].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66737
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66733
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66782
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66568
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[765].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66797
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[766].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66833
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[767].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66869
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[768].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66905
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66941
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66793
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[769].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66956
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[770].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[771].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67028
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[772].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67064
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67100
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66952
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[773].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[774].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67151
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[775].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67187
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[776].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67223
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67259
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67111
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[777].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[778].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67310
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[779].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67346
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[780].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67382
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67418
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67270
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[781].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67433
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[782].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67469
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[783].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[784].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67541
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67577
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67429
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[785].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67592
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[786].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[787].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[788].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67700
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67736
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67588
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[789].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67751
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[790].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67787
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[791].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 67827
                                                }, this),
                                                $$contentTexts[792].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[793].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 67894
                                                }, this),
                                                $$contentTexts[794].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[795].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 67961
                                                }, this),
                                                $$contentTexts[796].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[797].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68028
                                                }, this),
                                                $$contentTexts[798].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[799].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68095
                                                }, this),
                                                $$contentTexts[800].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[801].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68162
                                                }, this),
                                                $$contentTexts[802].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[803].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68229
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[804].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 68278
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68323
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67747
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 66402
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 66191
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "自环边样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#自环边样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 68415
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 68365
                        }, this),
                        "自环边样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "自环边样式",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 68811
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 68680
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 68606
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 68463
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 68350
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[805].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 69757
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "基础自环边",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础自环边",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 69856
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 69806
                        }, this),
                        "基础自环边",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础自环边",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 70252
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 70121
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 70047
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 69904
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 69791
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[806].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 71198
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 71262
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[807].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 71306
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 71232
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "多个自环边",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#多个自环边",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 71439
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 71389
                        }, this),
                        "多个自环边",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "多个自环边",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 71835
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 71704
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 71630
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 71487
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 71374
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[808].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 72781
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 72845
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[809].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 72889
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 72815
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[810].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 72957
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[811].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 73009
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[812].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 73045
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[813].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 73081
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[814].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 73117
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[815].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 73153
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 73005
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 72998
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[816].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73213
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[817].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73249
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[818].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73285
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[819].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73321
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73357
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73209
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[820].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73372
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[821].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73408
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[822].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73444
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[823].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73480
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73516
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73368
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[824].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73531
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[825].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73567
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[826].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73603
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[827].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73639
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73675
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73527
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[828].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73690
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[829].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73726
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[830].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 73766
                                                }, this),
                                                $$contentTexts[831].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[832].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 73833
                                                }, this),
                                                $$contentTexts[833].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[834].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 73900
                                                }, this),
                                                $$contentTexts[835].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[836].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 73967
                                                }, this),
                                                $$contentTexts[837].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[838].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74034
                                                }, this),
                                                $$contentTexts[839].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[840].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74101
                                                }, this),
                                                $$contentTexts[841].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[842].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74168
                                                }, this),
                                                $$contentTexts[843].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[844].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74235
                                                }, this),
                                                $$contentTexts[845].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[846].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74302
                                                }, this),
                                                $$contentTexts[847].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[848].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74369
                                                }, this),
                                                $$contentTexts[849].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[850].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74436
                                                }, this),
                                                $$contentTexts[851].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[852].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74503
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 73762
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[853].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 74552
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 74548
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 74597
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73686
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 73202
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 72991
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "state",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#state",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 74689
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 74639
                        }, this),
                        "State",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "State",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 75085
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 74954
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 74880
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 74737
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 74624
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[854].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 76031
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[855].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 76065
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "520",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ebBlTpKu2WUAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 76099
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[856].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 76219
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[857].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 76253
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[858].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[859].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 76353
                        }, this),
                        $$contentTexts[860].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 76323
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                    ],
                    children: $$contentTexts[861].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 76424
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[862].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 76522
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 76586
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[863].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 76642
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 76556
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "animation",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#animation",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 76783
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 76729
                        }, this),
                        "Animation",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Animation",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 77187
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 77056
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 76982
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 76835
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 76710
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[864].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 78133
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[865].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                        lineNumber: 21,
                        columnNumber: 78171
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 78167
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[866].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 78212
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    start: "2",
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[867].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                        lineNumber: 21,
                        columnNumber: 78290
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 78276
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[868].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 78331
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[869].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 78373
                                }, this),
                                $$contentTexts[870].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 78369
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[871].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 78449
                                }, this),
                                $$contentTexts[872].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 78445
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[873].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 78525
                                }, this),
                                $$contentTexts[874].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 78521
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[875].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 78601
                                }, this),
                                $$contentTexts[876].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 78597
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[877].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 78677
                                }, this),
                                $$contentTexts[878].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 78673
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[879].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 78753
                                }, this),
                                $$contentTexts[880].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 78749
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[881].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 78829
                                }, this),
                                $$contentTexts[882].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 78825
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 78365
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[883].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/animation/animation#%E5%8A%A8%E7%94%BB%E8%8C%83%E5%BC%8F",
                            children: $$contentTexts[884].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 78936
                        }, this),
                        $$contentTexts[885].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 78906
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[886].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 79077
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[887].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 79141
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[888].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 79175
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[889].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 79239
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[890].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 79273
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "palette",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#palette",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 79406
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 79354
                        }, this),
                        "Palette",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Palette",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 79806
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 79675
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 79601
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 79456
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 79337
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[891].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[892].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 80782
                        }, this),
                        $$contentTexts[893].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 80752
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[894].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/theme/palette",
                                children: $$contentTexts[895].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 80895
                            }, this),
                            $$contentTexts[896].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                        lineNumber: 21,
                        columnNumber: 80865
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 80853
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[897].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 81024
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[898].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 81060
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[899].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 81096
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[900].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 81132
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                lineNumber: 21,
                                columnNumber: 81020
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 81013
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[901].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[902].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81228
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[903].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81264
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[904].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81300
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 81188
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[905].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81345
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[906].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81381
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[907].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81417
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[908].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 81457
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81453
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 81341
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[909].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81511
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[910].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81547
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[911].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81583
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[912].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81619
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 81507
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[913].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[914].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 81731
                                                }, this),
                                                $$contentTexts[915].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[916].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 81764
                                                }, this),
                                                $$contentTexts[917].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 81831
                                                }, this),
                                                $$contentTexts[918].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[919].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 81864
                                                }, this),
                                                $$contentTexts[920].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81700
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[921].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 81940
                                                }, this),
                                                $$contentTexts[922].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[923].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82007
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81936
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[924].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 82056
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82052
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 81660
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 81181
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 81006
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[925].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[926].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 82152
                        }, this),
                        $$contentTexts[927].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 82122
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[928].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 82223
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[929].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 82287
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 82351
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[930].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 82407
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 82321
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[931].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 82475
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[932].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 82509
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[933].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 82573
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 82637
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[934].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                            lineNumber: 21,
                            columnNumber: 82693
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                    lineNumber: 21,
                    columnNumber: 82607
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
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
                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/edge/BaseEdge.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/edge/BaseEdge.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/edge/BaseEdge.zh.md",
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
//# sourceMappingURL=docs_manual_element_edge_BaseEdge_zh_md-async.js.map