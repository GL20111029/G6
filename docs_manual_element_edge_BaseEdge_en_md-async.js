((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/edge/BaseEdge.en.md'],
{ "docs/manual/element/edge/BaseEdge.en.md": function (module, exports, __mako_require__){
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
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 147
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 555
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 424
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 350
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 201
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1612
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[3].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1646
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1680
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1714
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1748
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 1608
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[8].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#type",
                                                children: $$contentTexts[9].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 1878
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1874
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[10].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 1936
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1932
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1980
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1802
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1995
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#style",
                                                children: $$contentTexts[13].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 2069
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2065
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2125
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2160
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1991
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2175
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2210
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#state",
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 2249
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2245
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2305
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2340
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2171
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#palette",
                                                children: $$contentTexts[21].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 2429
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2522
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2351
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2537
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#animation",
                                                children: $$contentTexts[25].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 2611
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2671
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2706
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2533
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 1795
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 2796
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3190
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3059
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 2985
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 2843
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 2733
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[27].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[28].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 4165
                        }, this),
                        $$contentTexts[29].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[30].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 4230
                        }, this),
                        $$contentTexts[31].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 4303
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[33].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 4388
                        }, this),
                        $$contentTexts[34].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[35].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 4457
                        }, this),
                        $$contentTexts[36].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 4385
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[37].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 4526
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[38].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4628
                                }, this),
                                $$contentTexts[40].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/edge/line",
                                    children: $$contentTexts[41].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4693
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 4624
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[42].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4775
                                }, this),
                                $$contentTexts[43].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/edge/polyline",
                                    children: $$contentTexts[44].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4840
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 4771
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[45].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4926
                                }, this),
                                $$contentTexts[46].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/edge/cubic",
                                    children: $$contentTexts[47].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4991
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 4922
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[48].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5074
                                }, this),
                                $$contentTexts[49].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/edge/cubic-horizontal",
                                    children: $$contentTexts[50].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5139
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 5070
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[51].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5233
                                }, this),
                                $$contentTexts[52].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/edge/cubic-vertical",
                                    children: $$contentTexts[53].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5298
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 5229
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[54].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5390
                                }, this),
                                $$contentTexts[55].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/edge/quadratic",
                                    children: $$contentTexts[56].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5455
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 5386
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 5608
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 5558
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6004
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5873
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 5799
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 5656
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 5543
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[57].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 6950
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        3
                    ],
                    children: $$contentTexts[58].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 6983
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[59].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 7068
                        }, this),
                        $$contentTexts[60].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 7065
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[61].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 7141
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[62].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[63].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 7231
                        }, this),
                        $$contentTexts[64].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[65].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 7296
                        }, this),
                        $$contentTexts[66].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 7202
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[67].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 7365
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "320",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*cVHVQJKLOlgAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 7398
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[68].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7526
                                }, this),
                                $$contentTexts[69].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 7522
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[70].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7600
                                }, this),
                                $$contentTexts[71].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 7596
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[72].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7674
                                }, this),
                                $$contentTexts[73].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 7670
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[74].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7748
                                }, this),
                                $$contentTexts[75].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 7744
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[76].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7822
                                }, this),
                                $$contentTexts[77].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 7818
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[78].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 7896
                                }, this),
                                $$contentTexts[79].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 7892
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 7518
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[80].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 7971
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "main-graphic-styles",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#main-graphic-styles",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 8097
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 8033
                        }, this),
                        "Main Graphic Styles",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Main-Graphic-Styles",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 8521
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8390
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 8316
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 8159
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 8004
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[81].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 9467
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "basic-style-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-style-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 9605
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 9535
                        }, this),
                        "Basic Style Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Style-Configuration",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10041
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 9910
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 9836
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 9673
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 9500
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[82].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 10987
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 11050
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[83].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 11094
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 11020
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "dashed-line-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#dashed-line-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 11250
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 11188
                        }, this),
                        "Dashed Line Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Dashed-Line-Style",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 11670
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 11539
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 11465
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 11310
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 11161
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[84].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 12616
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 12679
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[85].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 12723
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 12649
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "shadow-effect",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#shadow-effect",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 12871
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 12813
                        }, this),
                        "Shadow Effect",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Shadow-Effect",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13283
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13152
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 13078
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 12927
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 12790
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[86].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 14229
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 14292
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[87].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 14336
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 14262
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[88].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 14403
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[89].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14454
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[90].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14489
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[91].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14524
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[92].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14559
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[93].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 14594
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 14450
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 14443
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[94].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14653
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[95].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[96].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 14718
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14688
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[97].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14775
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[98].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 14814
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14810
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14858
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14649
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[99].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14873
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[100].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14908
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[101].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14944
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[102].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 14980
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15016
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 14869
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[103].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15031
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[104].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15067
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[105].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15103
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15139
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15175
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15027
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15190
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15226
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15262
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15298
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15334
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15186
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15349
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15421
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15457
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15493
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15345
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15508
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[118].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15616
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15652
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15504
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[119].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[120].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#pointerevents",
                                                    children: $$contentTexts[121].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 15734
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15799
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[123].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 15839
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15835
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15884
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15663
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15899
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15935
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15971
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16007
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16043
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15895
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16058
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16094
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16130
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[131].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16166
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16202
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16054
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[132].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16217
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[133].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16253
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[134].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16289
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16325
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16361
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16213
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16376
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16412
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16448
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16484
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16520
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16372
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16535
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16571
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[142].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16611
                                                }, this),
                                                $$contentTexts[143].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[144].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16678
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[145].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 16727
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16723
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16772
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16531
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16787
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16859
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16895
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16931
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16783
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16946
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17018
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[153].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 17058
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17054
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17103
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16942
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17118
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17154
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17190
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17226
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17262
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17114
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17277
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17313
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17349
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[161].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17421
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17273
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17472
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17508
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17580
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17432
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17595
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17631
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17739
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17591
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17754
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17790
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[172].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 17830
                                                }, this),
                                                $$contentTexts[173].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[174].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 17897
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17826
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[175].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 17946
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17942
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17991
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17750
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18006
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18042
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18078
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18114
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18150
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18002
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 14642
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 14436
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
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 18258
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 18200
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 18670
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18539
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 18465
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 18314
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 18177
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[180].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[181].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 19646
                        }, this),
                        $$contentTexts[182].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
                            children: $$contentTexts[183].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 19713
                        }, this),
                        $$contentTexts[184].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 19616
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[185].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[186].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 19879
                        }, this),
                        $$contentTexts[187].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[188].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 19946
                        }, this),
                        $$contentTexts[189].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[190].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20013
                        }, this),
                        $$contentTexts[191].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[192].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20080
                        }, this),
                        $$contentTexts[193].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[194].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20147
                        }, this),
                        $$contentTexts[195].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[196].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20214
                        }, this),
                        $$contentTexts[197].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[198].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20281
                        }, this),
                        $$contentTexts[199].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[200].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20348
                        }, this),
                        $$contentTexts[201].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[202].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20415
                        }, this),
                        $$contentTexts[203].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[204].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20482
                        }, this),
                        $$contentTexts[205].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[206].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20549
                        }, this),
                        $$contentTexts[207].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[208].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20616
                        }, this),
                        $$contentTexts[209].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[210].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20683
                        }, this),
                        $$contentTexts[211].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[212].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20750
                        }, this),
                        $$contentTexts[213].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[214].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20817
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 19849
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[215].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[216].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20891
                        }, this),
                        $$contentTexts[217].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[218].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 20958
                        }, this),
                        $$contentTexts[219].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 20861
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[220].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21045
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21037
                                }, this),
                                $$contentTexts[221].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[222].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21121
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 21033
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[223].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21178
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21170
                                }, this),
                                $$contentTexts[224].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 21166
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[225].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21271
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21263
                                }, this),
                                $$contentTexts[226].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[227].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21355
                                                }, this),
                                                $$contentTexts[228].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[229].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21422
                                                }, this),
                                                $$contentTexts[230].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21351
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[231].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[232].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21525
                                                }, this),
                                                $$contentTexts[233].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[234].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21592
                                                }, this),
                                                $$contentTexts[235].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21494
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21347
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 21259
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[236].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 21686
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21678
                                }, this),
                                $$contentTexts[237].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[238].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21770
                                                }, this),
                                                $$contentTexts[239].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[240].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21837
                                                }, this),
                                                $$contentTexts[241].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21766
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[242].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[243].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 21940
                                                }, this),
                                                $$contentTexts[244].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 21909
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 21762
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 21674
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[245].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22034
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22026
                                }, this),
                                $$contentTexts[246].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[247].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22118
                                                }, this),
                                                $$contentTexts[248].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[249].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22185
                                                }, this),
                                                $$contentTexts[250].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22114
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[251].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[252].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22288
                                                }, this),
                                                $$contentTexts[253].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22257
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22110
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 22022
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[254].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22382
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22374
                                }, this),
                                $$contentTexts[255].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[256].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[257].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22493
                                                }, this),
                                                $$contentTexts[258].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[259].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22560
                                                }, this),
                                                $$contentTexts[260].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[261].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[262].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22663
                                                }, this),
                                                $$contentTexts[263].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22632
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22458
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 22370
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[264].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22757
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22749
                                }, this),
                                $$contentTexts[265].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[266].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[267].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22868
                                                }, this),
                                                $$contentTexts[268].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22837
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[269].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[270].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 22971
                                                }, this),
                                                $$contentTexts[271].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 22940
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22833
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 22745
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[272].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23065
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23057
                                }, this),
                                $$contentTexts[273].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[274].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23141
                                }, this),
                                $$contentTexts[275].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[276].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23208
                                }, this),
                                $$contentTexts[277].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 23053
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 21029
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[278].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                        lineNumber: 21,
                        columnNumber: 23288
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 23285
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[279].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 23336
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
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 23465
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 23414
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 23863
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 23732
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 23658
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 23514
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 23398
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[280].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[281].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 24839
                        }, this),
                        $$contentTexts[282].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[283].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 24906
                        }, this),
                        $$contentTexts[284].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[285].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 24973
                        }, this),
                        $$contentTexts[286].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[287].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25040
                        }, this),
                        $$contentTexts[288].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[289].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25107
                        }, this),
                        $$contentTexts[290].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[291].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25174
                        }, this),
                        $$contentTexts[292].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[293].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25241
                        }, this),
                        $$contentTexts[294].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[295].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25308
                        }, this),
                        $$contentTexts[296].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[297].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25375
                        }, this),
                        $$contentTexts[298].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[299].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25442
                        }, this),
                        $$contentTexts[300].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[301].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25509
                        }, this),
                        $$contentTexts[302].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[303].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25576
                        }, this),
                        $$contentTexts[304].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[305].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25643
                        }, this),
                        $$contentTexts[306].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[307].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25710
                        }, this),
                        $$contentTexts[308].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[309].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25777
                        }, this),
                        $$contentTexts[310].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[311].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25844
                        }, this),
                        $$contentTexts[312].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[313].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25911
                        }, this),
                        $$contentTexts[314].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[315].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 25978
                        }, this),
                        $$contentTexts[316].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[317].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26045
                        }, this),
                        $$contentTexts[318].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[319].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26112
                        }, this),
                        $$contentTexts[320].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[321].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26179
                        }, this),
                        $$contentTexts[322].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[323].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26246
                        }, this),
                        $$contentTexts[324].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[325].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26313
                        }, this),
                        $$contentTexts[326].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[327].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26380
                        }, this),
                        $$contentTexts[328].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[329].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26447
                        }, this),
                        $$contentTexts[330].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[331].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26514
                        }, this),
                        $$contentTexts[332].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[333].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26581
                        }, this),
                        $$contentTexts[334].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[335].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26648
                        }, this),
                        $$contentTexts[336].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[337].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26715
                        }, this),
                        $$contentTexts[338].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[339].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26782
                        }, this),
                        $$contentTexts[340].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[341].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26849
                        }, this),
                        $$contentTexts[342].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[343].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26916
                        }, this),
                        $$contentTexts[344].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[345].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 26983
                        }, this),
                        $$contentTexts[346].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[347].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 27050
                        }, this),
                        $$contentTexts[348].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[349].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 27117
                        }, this),
                        $$contentTexts[350].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[351].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 27184
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 24809
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "label-styles",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#label-styles",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 27307
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 27250
                        }, this),
                        "Label Styles",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Label-Styles",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27717
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27586
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 27512
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 27362
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 27228
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[352].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 28663
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "basic-text-label",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-text-label",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 28784
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 28723
                        }, this),
                        "Basic Text Label",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Text-Label",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 29202
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 29071
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 28997
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 28843
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 28697
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[353].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 30148
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 30212
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[354].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 30256
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 30182
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "multi-line-text-label",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#multi-line-text-label",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 30421
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 30355
                        }, this),
                        "Multi-line Text Label",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Multi-line-Text-Label",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 30849
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 30718
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 30644
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 30485
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 30324
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[355].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 31795
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 31859
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[356].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 31903
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 31829
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "label-with-background",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#label-with-background",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 32068
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 32002
                        }, this),
                        "Label with Background",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Label-with-Background",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 32496
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 32365
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 32291
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 32132
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 31971
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[357].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 33442
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 33506
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[358].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 33550
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 33476
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "auto-rotating-label",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#auto-rotating-label",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 33711
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 33647
                        }, this),
                        "Auto-rotating Label",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Auto-rotating-Label",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 34135
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 34004
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 33930
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 33773
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 33618
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[359].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 35081
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 35145
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[360].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 35189
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 35115
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[361].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 35257
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[362].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35309
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[363].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35345
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[364].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35381
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[365].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35417
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[366].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35453
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 35305
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 35298
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[367].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35513
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[368].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35549
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[369].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35585
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[370].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35657
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 35509
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[371].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35672
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[372].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35708
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[373].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35744
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[374].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35780
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35816
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 35668
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[375].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35831
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[376].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[377].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 35898
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[378].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35956
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[379].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 35996
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 35992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36041
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 35827
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[380].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36056
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[381].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36092
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[382].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36128
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[383].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36164
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36200
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36052
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[384].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36215
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[385].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36251
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[386].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36287
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[387].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36323
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36359
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36211
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[388].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36374
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[389].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36410
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[390].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36446
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[391].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36482
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36518
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36370
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[392].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36533
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[393].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36569
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[394].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36609
                                                }, this),
                                                $$contentTexts[395].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[396].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36676
                                                }, this),
                                                $$contentTexts[397].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[398].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36743
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36605
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[399].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36788
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36824
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36529
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[400].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36839
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[401].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36875
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[402].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36915
                                                }, this),
                                                $$contentTexts[403].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[404].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 36982
                                                }, this),
                                                $$contentTexts[405].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 36911
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[406].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37054
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37090
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36835
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[407].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37105
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[408].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[409].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 37181
                                                }, this),
                                                $$contentTexts[410].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[411].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 37248
                                                }, this),
                                                $$contentTexts[412].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[413].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 37315
                                                }, this),
                                                $$contentTexts[414].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[415].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 37382
                                                }, this),
                                                $$contentTexts[416].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[417].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37454
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37490
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37101
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[418].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[419].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37541
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[420].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37577
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[421].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37613
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37649
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37501
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[422].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[423].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37700
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[424].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37736
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[425].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37772
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37808
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37660
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[426].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[427].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37859
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[428].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37895
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[429].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37931
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37967
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37819
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[430].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 37982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[431].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38018
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[432].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38054
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[433].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38090
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38126
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 37978
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[434].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[435].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#labelmaxwidth",
                                                    children: $$contentTexts[436].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38208
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[437].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38273
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[438].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 38313
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38358
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38137
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[439].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38373
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[440].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38409
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[441].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38445
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[442].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38481
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38517
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38369
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[443].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38532
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[444].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38568
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[445].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38604
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[446].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38640
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38676
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38528
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[447].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38691
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[448].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[449].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[450].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38799
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38835
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38687
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[451].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[452].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#labelplacement",
                                                    children: $$contentTexts[453].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38917
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[454].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38983
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[455].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39023
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39019
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39068
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38846
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[456].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39083
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[457].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39119
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[458].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39159
                                                }, this),
                                                $$contentTexts[459].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[460].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39226
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39155
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[461].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39271
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39307
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39079
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[462].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39322
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[463].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39358
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[464].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39398
                                                }, this),
                                                $$contentTexts[465].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[466].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39465
                                                }, this),
                                                $$contentTexts[467].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[468].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39532
                                                }, this),
                                                $$contentTexts[469].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[470].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39599
                                                }, this),
                                                $$contentTexts[471].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[472].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39666
                                                }, this),
                                                $$contentTexts[473].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[474].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39733
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[475].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 39782
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39778
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39827
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39318
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[476].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39842
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[477].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[478].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39918
                                                }, this),
                                                $$contentTexts[479].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[480].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39985
                                                }, this),
                                                $$contentTexts[481].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[482].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40052
                                                }, this),
                                                $$contentTexts[483].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[484].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40119
                                                }, this),
                                                $$contentTexts[485].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[486].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40186
                                                }, this),
                                                $$contentTexts[487].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[488].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40253
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39914
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[489].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40298
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40334
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39838
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[490].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40349
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[491].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[492].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40421
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[493].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40457
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40493
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40345
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[494].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40508
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[495].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[496].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[497].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40616
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40652
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40504
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[498].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[499].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[500].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40743
                                                }, this),
                                                $$contentTexts[501].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[502].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40810
                                                }, this),
                                                $$contentTexts[503].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[504].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40877
                                                }, this),
                                                $$contentTexts[505].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[506].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40944
                                                }, this),
                                                $$contentTexts[507].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[508].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41011
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[509].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41056
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41092
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40663
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[510].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41107
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[511].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41143
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[512].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41183
                                                }, this),
                                                $$contentTexts[513].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[514].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41250
                                                }, this),
                                                $$contentTexts[515].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[516].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41322
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41358
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41103
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[517].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41373
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[518].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41409
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[519].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41445
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[520].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41481
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41517
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41369
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[521].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41532
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[522].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41568
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[523].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41604
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[524].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41640
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41676
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41528
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[525].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41691
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[526].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[527].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[528].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41799
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41835
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41687
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 35502
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 35291
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
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 41945
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 41886
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 42359
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 42228
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 42154
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 42002
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 41862
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[529].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 43305
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[530].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43347
                                }, this),
                                $$contentTexts[531].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 43343
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[532].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43423
                                }, this),
                                $$contentTexts[533].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 43419
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[534].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43499
                                }, this),
                                $$contentTexts[535].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 43495
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[536].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43575
                                }, this),
                                $$contentTexts[537].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 43571
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 43339
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
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 43733
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 43675
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 44145
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44014
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 43940
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 43789
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 43652
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[538].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[539].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 45121
                        }, this),
                        $$contentTexts[540].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 45091
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[541].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[542].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 45227
                                }, this),
                                $$contentTexts[543].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 45196
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[544].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 45299
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 45192
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[545].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 45340
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[546].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 45374
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "label-background-styles",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#label-background-styles",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 45539
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 45471
                        }, this),
                        "Label Background Styles",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Label-Background-Styles",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 45971
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 45840
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 45766
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 45605
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 45438
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[547].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 46917
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[548].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 46969
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[549].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47005
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[550].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47041
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[551].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47077
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 46965
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 46958
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[552].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47137
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[553].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[554].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47209
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[555].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47245
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47133
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[556].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47290
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[557].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[558].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 47357
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47326
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[559].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47415
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[560].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 47455
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47451
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47286
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[561].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47509
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[562].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47545
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[563].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47581
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[564].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47617
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47505
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[565].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47662
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[566].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47698
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[567].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47734
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[568].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47770
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47658
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[569].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47815
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[570].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47851
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[571].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47887
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[572].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47923
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47811
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[573].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 47968
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[574].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48004
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[575].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48040
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[576].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48076
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47964
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[577].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[578].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48157
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[579].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48193
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[580].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48229
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48117
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[581].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[582].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48310
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[583].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48346
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[584].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48382
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48270
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[585].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48427
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[586].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 48494
                                                }, this),
                                                $$contentTexts[587].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 48527
                                                }, this),
                                                $$contentTexts[588].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48463
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[589].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48565
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[590].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48601
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48423
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[591].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[592].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[593].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48718
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[594].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48754
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48642
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[595].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48799
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[596].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48835
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[597].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48871
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[598].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48907
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48795
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[599].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48952
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[600].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 48988
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[601].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49024
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[602].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49060
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48948
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[603].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49105
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[604].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[605].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[606].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49213
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49101
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[607].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49258
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[608].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49294
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[609].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49330
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[610].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49366
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49254
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[611].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49411
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[612].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[613].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49483
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[614].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49519
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49407
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[615].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49564
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[616].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49600
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[617].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 49640
                                                }, this),
                                                $$contentTexts[618].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[619].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 49707
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49636
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[620].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49752
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49560
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[621].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49797
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[622].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49833
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[623].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49869
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[624].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 49905
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49793
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 47126
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 46951
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "halo-styles",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#halo-styles",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 50039
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 49983
                        }, this),
                        "Halo Styles",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Halo-Styles",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50447
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 50316
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 50242
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 50093
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 49962
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[625].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 51393
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "basic-halo-effect",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-halo-effect",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 51516
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 51454
                        }, this),
                        "Basic Halo Effect",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Halo-Effect",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 51936
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51805
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 51731
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 51576
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 51427
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[626].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 52882
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 52946
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[627].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 52990
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 52916
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[628].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 53058
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[629].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53110
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[630].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53146
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[631].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53182
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[632].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53218
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[633].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53254
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 53106
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 53099
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[634].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53314
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[635].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53350
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[636].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53386
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[637].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53422
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53458
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 53310
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[638].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53473
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[639].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[640].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 53540
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53509
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[641].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53598
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[642].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 53638
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53634
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53683
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 53469
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[643].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53698
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[644].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53734
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[645].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53770
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[646].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53842
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 53694
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[647].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53857
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[648].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53893
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[649].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53929
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[650].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53965
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54001
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 53853
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[651].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54016
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[652].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54052
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[653].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 54092
                                                }, this),
                                                $$contentTexts[654].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[655].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 54159
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54088
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[656].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54204
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54240
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54012
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[657].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54255
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[658].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54291
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[659].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54327
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[660].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54363
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54399
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54251
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[661].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54414
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[662].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54450
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[663].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54486
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[664].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54522
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54558
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54410
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[665].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[666].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#pointerevents",
                                                    children: $$contentTexts[667].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 54640
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54609
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[668].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54705
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[669].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 54745
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54741
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54790
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54569
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[670].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54805
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[671].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[672].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 54872
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[673].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54921
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[674].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54957
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 54993
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 54801
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[675].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55008
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[676].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55044
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[677].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55080
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[678].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55116
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55152
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55004
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[679].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55167
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[680].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55203
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[681].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 55243
                                                }, this),
                                                $$contentTexts[682].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[683].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 55310
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55239
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[684].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 55359
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55404
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55163
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[685].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55419
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[686].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55455
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[687].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55491
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[688].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55527
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 55563
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55415
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 53303
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 53092
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "arrow-styles",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#arrow-styles",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 55669
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 55612
                        }, this),
                        "Arrow Styles",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Arrow-Styles",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 56079
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55948
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 55874
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 55724
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 55590
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[689].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 57025
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "basic-arrow",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-arrow",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 57136
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 57080
                        }, this),
                        "Basic Arrow",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Arrow",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 57544
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57413
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 57339
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 57190
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 57059
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[690].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 58490
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 58554
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[691].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 58598
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 58524
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "bidirectional-arrows",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#bidirectional-arrows",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 58761
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 58696
                        }, this),
                        "Bidirectional Arrows",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Bidirectional-Arrows",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 59187
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59056
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 58982
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 58824
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 58666
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[692].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 60133
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 60197
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[693].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 60241
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 60167
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "custom-arrow-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#custom-arrow-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 60400
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 60337
                        }, this),
                        "Custom Arrow Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Custom-Arrow-Style",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 60822
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 60691
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 60617
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 60461
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 60309
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[694].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 61768
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 61832
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[695].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 61876
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 61802
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "start-arrow-style-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#start-arrow-style-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 62061
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 61985
                        }, this),
                        "Start Arrow Style Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Start-Arrow-Style-Configuration",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 62509
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 62378
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 62304
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 62135
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 61944
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[696].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 63473
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[697].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 63509
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[698].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 63545
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[699].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 63581
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[700].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 63617
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 63469
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 63462
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[701].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63677
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[702].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63713
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[703].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63749
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[704].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63785
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63821
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 63673
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[705].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63836
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[706].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[707].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 63903
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63872
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[708].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63961
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[709].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 64001
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 63997
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64046
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 63832
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[710].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64061
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[711].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64097
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[712].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64133
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[713].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64169
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64205
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64057
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[714].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64220
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[715].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64256
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[716].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64292
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[717].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64328
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64364
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64216
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[718].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64379
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[719].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64415
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[720].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64451
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[721].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64523
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64375
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[722].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64538
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[723].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64574
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[724].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[725].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64682
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64534
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[726].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64697
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[727].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64733
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[728].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[729].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64805
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64841
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64693
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[730].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64856
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[731].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64892
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[732].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64928
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[733].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 64964
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65000
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64852
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[734].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65015
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[735].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65051
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[736].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 65091
                                                }, this),
                                                $$contentTexts[737].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[738].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 65158
                                                }, this),
                                                $$contentTexts[739].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[740].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 65225
                                                }, this),
                                                $$contentTexts[741].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[742].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 65292
                                                }, this),
                                                $$contentTexts[743].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[744].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 65359
                                                }, this),
                                                $$contentTexts[745].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[746].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 65426
                                                }, this),
                                                $$contentTexts[747].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[748].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 65493
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65087
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[749].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 65542
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65538
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65587
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 65011
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 63666
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 63455
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "end-arrow-style-configuration",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#end-arrow-style-configuration",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 65727
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 65653
                        }, this),
                        "End Arrow Style Configuration",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "End-Arrow-Style-Configuration",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 66171
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66040
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 65966
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 65799
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 65614
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[750].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 67135
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[751].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 67171
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[752].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 67207
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[753].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 67243
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[754].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 67279
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 67131
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 67124
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[755].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67339
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[756].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67375
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[757].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67411
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[758].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67447
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67483
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67335
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[759].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67498
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[760].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[761].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 67565
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67534
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[762].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67623
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[763].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 67663
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67659
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67708
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67494
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[764].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67723
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[765].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67759
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[766].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67795
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[767].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67831
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67867
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67719
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[768].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67882
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[769].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67918
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[770].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67954
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[771].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67990
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68026
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67878
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[772].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68041
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[773].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68077
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[774].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68113
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[775].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68149
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68185
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68037
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[776].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68200
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[777].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68236
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[778].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68272
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[779].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68308
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68344
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68196
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[780].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68359
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[781].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68395
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[782].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68431
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[783].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68467
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68503
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68355
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[784].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68518
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[785].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68554
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[786].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68590
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[787].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68626
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68662
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68514
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[788].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68677
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[789].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68713
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[790].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68753
                                                }, this),
                                                $$contentTexts[791].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[792].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68820
                                                }, this),
                                                $$contentTexts[793].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[794].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68887
                                                }, this),
                                                $$contentTexts[795].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[796].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68954
                                                }, this),
                                                $$contentTexts[797].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[798].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69021
                                                }, this),
                                                $$contentTexts[799].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[800].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69088
                                                }, this),
                                                $$contentTexts[801].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[802].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69155
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68749
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[803].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 69204
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69200
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69249
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68673
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 67328
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 67117
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "loop-edge-styles",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#loop-edge-styles",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 69363
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 69302
                        }, this),
                        "Loop Edge Styles",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Loop-Edge-Styles",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 69781
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 69650
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 69576
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 69422
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 69276
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[804].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 70727
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "basic-loop-edge",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-loop-edge",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 70846
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 70786
                        }, this),
                        "Basic Loop Edge",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Loop-Edge",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 71262
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 71131
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 71057
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 70904
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 70761
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[805].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 72208
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 72272
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[806].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 72316
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 72242
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "multiple-loop-edges",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#multiple-loop-edges",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 72477
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 72413
                        }, this),
                        "Multiple Loop Edges",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Multiple-Loop-Edges",
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 72901
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 72770
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 72696
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 72539
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 72384
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[807].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 73847
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 73911
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[808].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 73955
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 73881
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[809].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 74023
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[810].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 74075
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[811].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 74111
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[812].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 74147
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[813].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 74183
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[814].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 74219
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 74071
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 74064
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[815].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74279
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[816].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74315
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[817].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74351
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[818].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74387
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74423
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 74275
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[819].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74438
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[820].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74474
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[821].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74510
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[822].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74546
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74582
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 74434
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[823].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[824].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74633
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[825].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74669
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[826].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74705
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74741
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 74593
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[827].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74756
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[828].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74792
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[829].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74832
                                                }, this),
                                                $$contentTexts[830].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[831].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74899
                                                }, this),
                                                $$contentTexts[832].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[833].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 74966
                                                }, this),
                                                $$contentTexts[834].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[835].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 75033
                                                }, this),
                                                $$contentTexts[836].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[837].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 75100
                                                }, this),
                                                $$contentTexts[838].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[839].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 75167
                                                }, this),
                                                $$contentTexts[840].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[841].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 75234
                                                }, this),
                                                $$contentTexts[842].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[843].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 75301
                                                }, this),
                                                $$contentTexts[844].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[845].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 75368
                                                }, this),
                                                $$contentTexts[846].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[847].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 75435
                                                }, this),
                                                $$contentTexts[848].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[849].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 75502
                                                }, this),
                                                $$contentTexts[850].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[851].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 75569
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 74828
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[852].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 75618
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 75614
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 75663
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 74752
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 74268
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 74057
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
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 75755
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 75705
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 76151
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 76020
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 75946
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 75803
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 75690
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[853].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 77097
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[854].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 77131
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "520",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*ebBlTpKu2WUAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 77165
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[855].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 77285
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[856].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 77319
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[857].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[858].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 77419
                        }, this),
                        $$contentTexts[859].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 77389
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
                    children: $$contentTexts[860].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 77490
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[861].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 77588
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 77652
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[862].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 77708
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 77622
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
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 77849
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 77795
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 78253
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 78122
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 78048
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 77901
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 77776
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[863].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 79199
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[864].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                        lineNumber: 21,
                        columnNumber: 79237
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 79233
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[865].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 79278
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    start: "2",
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[866].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                        lineNumber: 21,
                        columnNumber: 79356
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 79342
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[867].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 79397
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[868].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79439
                                }, this),
                                $$contentTexts[869].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 79435
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[870].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79515
                                }, this),
                                $$contentTexts[871].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 79511
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[872].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79591
                                }, this),
                                $$contentTexts[873].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 79587
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[874].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79667
                                }, this),
                                $$contentTexts[875].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 79663
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[876].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79743
                                }, this),
                                $$contentTexts[877].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 79739
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[878].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79819
                                }, this),
                                $$contentTexts[879].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 79815
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[880].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79895
                                }, this),
                                $$contentTexts[881].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 79891
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 79431
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[882].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/manual/animation/animation#%E5%8A%A8%E7%94%BB%E8%8C%83%E5%BC%8F",
                            children: $$contentTexts[883].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 80002
                        }, this),
                        $$contentTexts[884].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 79972
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[885].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 80146
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[886].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 80210
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[887].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 80244
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[888].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 80308
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[889].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 80342
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
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 80475
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 80423
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
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 80875
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 80744
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 80670
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 80525
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 80406
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[890].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[891].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 81851
                        }, this),
                        $$contentTexts[892].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 81821
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[893].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/theme/palette",
                                children: $$contentTexts[894].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 81964
                            }, this),
                            $$contentTexts[895].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                        lineNumber: 21,
                        columnNumber: 81934
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 81922
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[896].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 82096
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[897].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 82132
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[898].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 82168
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[899].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                        lineNumber: 21,
                                        columnNumber: 82204
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                lineNumber: 21,
                                columnNumber: 82092
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 82085
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[900].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82264
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[901].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82300
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[902].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82336
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[903].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82372
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 82260
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[904].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82417
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[905].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82453
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[906].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82489
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[907].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 82529
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82525
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 82413
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[908].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82583
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[909].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82619
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[910].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82655
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[911].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82691
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 82579
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[912].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82736
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[913].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82803
                                                }, this),
                                                $$contentTexts[914].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[915].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82836
                                                }, this),
                                                $$contentTexts[916].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82903
                                                }, this),
                                                $$contentTexts[917].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[918].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82936
                                                }, this),
                                                $$contentTexts[919].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82772
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[920].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 83012
                                                }, this),
                                                $$contentTexts[921].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[922].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 83079
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83008
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[923].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                                lineNumber: 21,
                                                columnNumber: 83128
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83124
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                                    lineNumber: 21,
                                    columnNumber: 82732
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 82253
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 82078
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[924].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[925].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 83224
                        }, this),
                        $$contentTexts[926].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 83194
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[927].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 83295
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[928].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 83359
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 83423
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[929].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 83479
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 83393
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[930].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 83547
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[931].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 83581
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[932].value
                }, void 0, false, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 83645
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 83709
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[933].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/edge/BaseEdge.en.md",
                            lineNumber: 21,
                            columnNumber: 83765
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/edge/BaseEdge.en.md",
                    lineNumber: 21,
                    columnNumber: 83679
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/edge/BaseEdge.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/edge/BaseEdge.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/edge/BaseEdge.en.md",
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
//# sourceMappingURL=docs_manual_element_edge_BaseEdge_en_md-async.js.map