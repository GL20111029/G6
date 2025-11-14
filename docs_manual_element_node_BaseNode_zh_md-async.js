((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/BaseNode.zh.md'],
{ "docs/manual/element/node/BaseNode.zh.md": function (module, exports, __mako_require__){
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
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 38
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    id: "nodeoptions",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#nodeoptions",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 147
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 91
                        }, this),
                        "NodeOptions",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "NodeOptions",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 555
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 424
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 350
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 201
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
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
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1612
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[3].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1646
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1680
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1714
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 1748
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 1608
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
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
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[8].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#type",
                                                children: $$contentTexts[9].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 1878
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1874
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[10].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 1936
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1932
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1980
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1802
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 1995
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#style",
                                                children: $$contentTexts[13].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 2069
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2065
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2125
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2160
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 1991
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2175
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2210
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#state",
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 2249
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2245
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2305
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2340
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2171
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#palette",
                                                children: $$contentTexts[21].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 2429
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2522
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2351
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2537
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#animation",
                                                children: $$contentTexts[25].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 2611
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2671
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 2706
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 2533
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 1795
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 2796
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 3190
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 3059
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 2985
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 2843
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 2733
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[27].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[28].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 4165
                        }, this),
                        $$contentTexts[29].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[30].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 4230
                        }, this),
                        $$contentTexts[31].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
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
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 4303
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[33].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 4388
                        }, this),
                        $$contentTexts[34].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[35].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 4457
                        }, this),
                        $$contentTexts[36].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 4385
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[37].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 4526
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[38].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
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
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4628
                                }, this),
                                $$contentTexts[40].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/node/circle",
                                    children: $$contentTexts[41].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4693
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 4624
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[42].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4774
                                }, this),
                                $$contentTexts[43].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/node/diamond",
                                    children: $$contentTexts[44].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4839
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 4770
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[45].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4921
                                }, this),
                                $$contentTexts[46].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/node/donut",
                                    children: $$contentTexts[47].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 4986
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 4917
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[48].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5066
                                }, this),
                                $$contentTexts[49].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/node/ellipse",
                                    children: $$contentTexts[50].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5131
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 5062
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[51].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5213
                                }, this),
                                $$contentTexts[52].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/node/hexagon",
                                    children: $$contentTexts[53].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5278
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 5209
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[54].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5360
                                }, this),
                                $$contentTexts[55].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/node/html",
                                    children: $$contentTexts[56].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5425
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 5356
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[57].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5504
                                }, this),
                                $$contentTexts[58].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/node/image",
                                    children: $$contentTexts[59].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5569
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 5500
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[60].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5649
                                }, this),
                                $$contentTexts[61].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/node/rect",
                                    children: $$contentTexts[62].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5714
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 5645
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[63].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5793
                                }, this),
                                $$contentTexts[64].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/node/star",
                                    children: $$contentTexts[65].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5858
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 5789
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[66].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 5937
                                }, this),
                                $$contentTexts[67].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/manual/element/node/triangle",
                                    children: $$contentTexts[68].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6002
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 5933
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 6151
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 6101
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 6547
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 6416
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 6342
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 6199
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 6086
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[69].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 7493
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        3
                    ],
                    children: $$contentTexts[70].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 7526
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[71].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 7611
                        }, this),
                        $$contentTexts[72].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 7608
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[73].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 7684
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[74].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[75].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 7774
                        }, this),
                        $$contentTexts[76].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[77].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 7839
                        }, this),
                        $$contentTexts[78].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 7745
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[79].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 7908
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "200",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Ot4bSbBx97EAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 7941
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[80].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8069
                                }, this),
                                $$contentTexts[81].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 8065
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[82].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8143
                                }, this),
                                $$contentTexts[83].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 8139
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[84].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8217
                                }, this),
                                $$contentTexts[85].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 8213
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[86].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8291
                                }, this),
                                $$contentTexts[87].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 8287
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[88].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8365
                                }, this),
                                $$contentTexts[89].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 8361
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[90].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8439
                                }, this),
                                $$contentTexts[91].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 8435
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 8061
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[92].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 8514
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 8612
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 8562
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 9008
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 8877
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 8803
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 8660
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 8547
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[93].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 9954
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 10054
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 10003
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 10452
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 10321
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 10247
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 10103
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 9987
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[94].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 11398
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 11461
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[95].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 11505
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 11431
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "透明度和阴影效果",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#透明度和阴影效果",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 11643
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 11590
                        }, this),
                        "透明度和阴影效果",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "透明度和阴影效果",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 12045
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 11914
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 11840
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 11694
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 11572
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[96].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 12991
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 13054
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[97].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 13098
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 13024
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "虚线边框样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#虚线边框样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 13232
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 13181
                        }, this),
                        "虚线边框样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "虚线边框样式",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 13630
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 13499
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 13425
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 13281
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 13165
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[98].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 14576
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 14639
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[99].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 14683
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 14609
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[100].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 14750
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[101].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14802
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[102].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14838
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[103].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14874
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[104].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14910
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[105].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 14946
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 14798
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 14791
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15006
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15042
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15078
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15114
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15150
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15002
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15165
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[111].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[112].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 15232
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15201
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15290
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15326
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15362
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15161
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15377
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15413
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15449
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[118].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 15489
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15485
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15534
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15373
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[119].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15549
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[120].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15585
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[121].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15657
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15693
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15545
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15708
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15744
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15780
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15816
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15852
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15704
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15903
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[129].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 15943
                                                }, this),
                                                $$contentTexts[130].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[131].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16010
                                                }, this),
                                                $$contentTexts[132].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[133].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16077
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 15939
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[134].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16126
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16122
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16171
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 15863
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16186
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16222
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16258
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16294
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16330
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16182
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16345
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16381
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16417
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[142].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16453
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16489
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16341
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16504
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[145].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16580
                                                }, this),
                                                $$contentTexts[146].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[147].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16647
                                                }, this),
                                                $$contentTexts[148].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[149].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16714
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16576
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[150].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 16763
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16759
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16808
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16500
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16823
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16859
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16895
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16931
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16967
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16819
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 16982
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17018
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17054
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17090
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17126
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 16978
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[160].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#pointerevents",
                                                    children: $$contentTexts[161].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 17208
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17273
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[163].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 17313
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17358
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17137
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17373
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17409
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17445
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17481
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17517
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17369
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17532
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17568
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17604
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17640
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17676
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17528
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17691
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17799
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17835
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17687
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17922
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17958
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 17994
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 17846
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18045
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[182].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 18085
                                                }, this),
                                                $$contentTexts[183].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[184].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 18152
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18081
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[185].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 18201
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18197
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18246
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18005
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18261
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[187].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#size",
                                                    children: $$contentTexts[188].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 18328
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18297
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18384
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[190].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18456
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18257
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18507
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18543
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[194].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 18583
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18579
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18628
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18467
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18643
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[196].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18679
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18715
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18751
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18787
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18639
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[199].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18802
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18838
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18874
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18910
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18946
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18798
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18961
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 18997
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19033
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19069
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19105
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 18957
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[207].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19120
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[208].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[209].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 19196
                                                }, this),
                                                $$contentTexts[210].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[211].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 19263
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[212].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 19312
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19308
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19357
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19116
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[213].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19372
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19408
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[215].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19444
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[216].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19480
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19516
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19368
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[217].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19531
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[218].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19567
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[219].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19603
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[220].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19639
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19675
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19527
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19690
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[222].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19726
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[223].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19762
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[224].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19798
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19834
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19686
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[225].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19849
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[226].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19885
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[227].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19921
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[228].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19957
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 19993
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 19845
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 14995
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 14784
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "size",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#size",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 20083
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 20034
                        }, this),
                        "Size",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Size",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 20477
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 20346
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 20272
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 20130
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 20020
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[229].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 21423
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[230].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 21461
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[231].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 21497
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[232].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 21533
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 21457
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 21655
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 21597
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 22067
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 21936
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 21862
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 21711
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 21574
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[233].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23016
                        }, this),
                        $$contentTexts[234].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
                            children: $$contentTexts[235].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23083
                        }, this),
                        $$contentTexts[236].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 23013
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[237].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[238].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23249
                        }, this),
                        $$contentTexts[239].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[240].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23316
                        }, this),
                        $$contentTexts[241].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[242].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23383
                        }, this),
                        $$contentTexts[243].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[244].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23450
                        }, this),
                        $$contentTexts[245].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[246].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23517
                        }, this),
                        $$contentTexts[247].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[248].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23584
                        }, this),
                        $$contentTexts[249].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[250].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23651
                        }, this),
                        $$contentTexts[251].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[252].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23718
                        }, this),
                        $$contentTexts[253].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[254].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23785
                        }, this),
                        $$contentTexts[255].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[256].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23852
                        }, this),
                        $$contentTexts[257].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[258].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23919
                        }, this),
                        $$contentTexts[259].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[260].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 23986
                        }, this),
                        $$contentTexts[261].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[262].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 24053
                        }, this),
                        $$contentTexts[263].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[264].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 24120
                        }, this),
                        $$contentTexts[265].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[266].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 24187
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 23219
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[267].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[268].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 24261
                        }, this),
                        $$contentTexts[269].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[270].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 24328
                        }, this),
                        $$contentTexts[271].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[272].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 24395
                        }, this),
                        $$contentTexts[273].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 24231
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[274].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24482
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24474
                                }, this),
                                $$contentTexts[275].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[276].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24558
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 24470
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[277].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24615
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24607
                                }, this),
                                $$contentTexts[278].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 24603
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[279].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 24708
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24700
                                }, this),
                                $$contentTexts[280].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[281].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 24792
                                                }, this),
                                                $$contentTexts[282].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[283].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 24859
                                                }, this),
                                                $$contentTexts[284].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24788
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[285].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[286].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 24962
                                                }, this),
                                                $$contentTexts[287].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[288].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25029
                                                }, this),
                                                $$contentTexts[289].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[290].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25096
                                                }, this),
                                                $$contentTexts[291].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[292].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25163
                                                }, this),
                                                $$contentTexts[293].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 24931
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 24784
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 24696
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[294].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25257
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25249
                                }, this),
                                $$contentTexts[295].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[296].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25341
                                                }, this),
                                                $$contentTexts[297].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[298].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25408
                                                }, this),
                                                $$contentTexts[299].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25337
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[300].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[301].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25511
                                                }, this),
                                                $$contentTexts[302].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25480
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25333
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 25245
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[303].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25605
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25597
                                }, this),
                                $$contentTexts[304].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[305].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25689
                                                }, this),
                                                $$contentTexts[306].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[307].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25756
                                                }, this),
                                                $$contentTexts[308].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25685
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[309].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[310].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25859
                                                }, this),
                                                $$contentTexts[311].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 25828
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25681
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 25593
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[312].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 25953
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 25945
                                }, this),
                                $$contentTexts[313].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[314].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26037
                                                }, this),
                                                $$contentTexts[315].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[316].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26104
                                                }, this),
                                                $$contentTexts[317].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26033
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[318].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[319].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26207
                                                }, this),
                                                $$contentTexts[320].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[321].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26274
                                                }, this),
                                                $$contentTexts[322].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26176
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26029
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 25941
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[323].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26368
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26360
                                }, this),
                                $$contentTexts[324].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[325].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[326].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26479
                                                }, this),
                                                $$contentTexts[327].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[328].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26546
                                                }, this),
                                                $$contentTexts[329].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[330].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26613
                                                }, this),
                                                $$contentTexts[331].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[332].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26680
                                                }, this),
                                                $$contentTexts[333].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26448
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[334].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[335].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26783
                                                }, this),
                                                $$contentTexts[336].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26752
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26444
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 26356
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[337].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 26877
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26869
                                }, this),
                                $$contentTexts[338].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[339].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[340].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26988
                                                }, this),
                                                $$contentTexts[341].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 26957
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[342].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[343].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 27091
                                                }, this),
                                                $$contentTexts[344].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27060
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 26953
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 26865
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[345].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27185
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27177
                                }, this),
                                $$contentTexts[346].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[347].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[348].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 27296
                                                }, this),
                                                $$contentTexts[349].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27265
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[350].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[351].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 27399
                                                }, this),
                                                $$contentTexts[352].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 27368
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27261
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 27173
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[353].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 27493
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27485
                                }, this),
                                $$contentTexts[354].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[355].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27569
                                }, this),
                                $$contentTexts[356].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[357].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27636
                                }, this),
                                $$contentTexts[358].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[359].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 27703
                                }, this),
                                $$contentTexts[360].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 27481
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 24466
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[361].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                        lineNumber: 21,
                        columnNumber: 27783
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 27780
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[362].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 27831
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 27960
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 27909
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 28358
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 28227
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 28153
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 28009
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 27893
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[363].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[364].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 29334
                        }, this),
                        $$contentTexts[365].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[366].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 29401
                        }, this),
                        $$contentTexts[367].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[368].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 29468
                        }, this),
                        $$contentTexts[369].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[370].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 29535
                        }, this),
                        $$contentTexts[371].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[372].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 29602
                        }, this),
                        $$contentTexts[373].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[374].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 29669
                        }, this),
                        $$contentTexts[375].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[376].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 29736
                        }, this),
                        $$contentTexts[377].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[378].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 29803
                        }, this),
                        $$contentTexts[379].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[380].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 29870
                        }, this),
                        $$contentTexts[381].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[382].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 29937
                        }, this),
                        $$contentTexts[383].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[384].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30004
                        }, this),
                        $$contentTexts[385].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[386].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30071
                        }, this),
                        $$contentTexts[387].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[388].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30138
                        }, this),
                        $$contentTexts[389].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[390].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30205
                        }, this),
                        $$contentTexts[391].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[392].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30272
                        }, this),
                        $$contentTexts[393].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[394].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30339
                        }, this),
                        $$contentTexts[395].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[396].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30406
                        }, this),
                        $$contentTexts[397].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[398].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30473
                        }, this),
                        $$contentTexts[399].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[400].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30540
                        }, this),
                        $$contentTexts[401].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[402].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30607
                        }, this),
                        $$contentTexts[403].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[404].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30674
                        }, this),
                        $$contentTexts[405].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[406].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30741
                        }, this),
                        $$contentTexts[407].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[408].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30808
                        }, this),
                        $$contentTexts[409].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[410].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30875
                        }, this),
                        $$contentTexts[411].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[412].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 30942
                        }, this),
                        $$contentTexts[413].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[414].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31009
                        }, this),
                        $$contentTexts[415].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[416].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31076
                        }, this),
                        $$contentTexts[417].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[418].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31143
                        }, this),
                        $$contentTexts[419].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[420].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31210
                        }, this),
                        $$contentTexts[421].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[422].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31277
                        }, this),
                        $$contentTexts[423].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[424].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31344
                        }, this),
                        $$contentTexts[425].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[426].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31411
                        }, this),
                        $$contentTexts[427].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[428].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31478
                        }, this),
                        $$contentTexts[429].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[430].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31545
                        }, this),
                        $$contentTexts[431].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[432].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31612
                        }, this),
                        $$contentTexts[433].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[434].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31679
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 29304
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 31786
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31737
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 32180
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 32049
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 31975
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 31833
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 31723
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[435].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 33126
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 33227
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 33176
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 33625
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 33494
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 33420
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 33276
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 33160
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[436].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 34571
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 34635
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[437].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 34679
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 34605
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 34814
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 34763
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 35212
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 35081
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 35007
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 34863
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 34747
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[438].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 36158
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 36222
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[439].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 36266
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 36192
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 36401
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 36350
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 36799
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 36668
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 36594
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 36450
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 36334
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[440].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 37745
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 37809
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[441].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 37853
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 37779
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[442].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 37921
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[443].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 37973
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[444].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38009
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[445].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38045
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[446].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38081
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[447].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 38117
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 37969
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 37962
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[448].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[449].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38213
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[450].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38249
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[451].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38285
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38321
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38173
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[452].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38336
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[453].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[454].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38403
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38372
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[455].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38461
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[456].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 38501
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38497
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38546
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38332
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[457].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38561
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[458].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[459].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38633
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[460].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38669
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38705
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38557
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[461].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38720
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[462].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38756
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[463].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38792
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[464].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38828
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38864
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38716
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[465].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38879
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[466].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38915
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[467].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38951
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[468].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 38987
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39023
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 38875
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[469].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[470].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39074
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[471].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39114
                                                }, this),
                                                $$contentTexts[472].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[473].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39181
                                                }, this),
                                                $$contentTexts[474].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[475].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39248
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[476].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39329
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39034
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[477].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[478].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39380
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[479].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39420
                                                }, this),
                                                $$contentTexts[480].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[481].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39487
                                                }, this),
                                                $$contentTexts[482].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39416
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[483].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39559
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39595
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39340
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[484].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[485].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[486].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39686
                                                }, this),
                                                $$contentTexts[487].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[488].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39753
                                                }, this),
                                                $$contentTexts[489].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[490].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39820
                                                }, this),
                                                $$contentTexts[491].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[492].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39887
                                                }, this),
                                                $$contentTexts[493].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[494].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 39995
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 39606
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[495].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[496].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40046
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[497].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40082
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[498].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40118
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40154
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40006
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[499].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40169
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[500].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40205
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[501].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40241
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[502].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40277
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40313
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40165
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[503].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40328
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[504].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40364
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[505].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40400
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[506].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40324
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[507].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[508].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40523
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[509].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40559
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[510].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40595
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40631
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40483
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[511].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[512].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#labelmaxwidth",
                                                    children: $$contentTexts[513].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40713
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[514].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40778
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[515].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 40818
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40814
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40863
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40642
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[516].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[517].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40914
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[518].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40950
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[519].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 40986
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41022
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 40874
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[520].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[521].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[522].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41109
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[523].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41145
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41181
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41033
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[524].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41196
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[525].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41232
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[526].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41268
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[527].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41304
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41340
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41192
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[528].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[529].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#labelplacement",
                                                    children: $$contentTexts[530].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41422
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41391
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[531].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41488
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[532].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 41528
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41524
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41573
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41351
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[533].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[534].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41624
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[535].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41664
                                                }, this),
                                                $$contentTexts[536].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[537].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41731
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41660
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[538].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41776
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41812
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41584
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[539].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[540].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[541].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41903
                                                }, this),
                                                $$contentTexts[542].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[543].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41970
                                                }, this),
                                                $$contentTexts[544].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[545].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42037
                                                }, this),
                                                $$contentTexts[546].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[547].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42104
                                                }, this),
                                                $$contentTexts[548].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[549].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42171
                                                }, this),
                                                $$contentTexts[550].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[551].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42238
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 41899
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[552].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 42287
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42283
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42332
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 41823
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[553].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42347
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[554].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42383
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[555].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42423
                                                }, this),
                                                $$contentTexts[556].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[557].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42490
                                                }, this),
                                                $$contentTexts[558].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[559].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42557
                                                }, this),
                                                $$contentTexts[560].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[561].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42624
                                                }, this),
                                                $$contentTexts[562].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[563].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42691
                                                }, this),
                                                $$contentTexts[564].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[565].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42758
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42419
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[566].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42803
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42839
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42343
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[567].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42854
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[568].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42890
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[569].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42926
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[570].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42962
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 42998
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 42850
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[571].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43013
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[572].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43049
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[573].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43085
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[574].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43121
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43157
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43009
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[575].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43172
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[576].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[577].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43248
                                                }, this),
                                                $$contentTexts[578].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[579].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43315
                                                }, this),
                                                $$contentTexts[580].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[581].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43382
                                                }, this),
                                                $$contentTexts[582].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[583].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43449
                                                }, this),
                                                $$contentTexts[584].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[585].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43516
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43244
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[586].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43561
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43597
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43168
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[587].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43612
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[588].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43648
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[589].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43688
                                                }, this),
                                                $$contentTexts[590].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[591].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43755
                                                }, this),
                                                $$contentTexts[592].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43684
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[593].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43827
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43863
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43608
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[594].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[595].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43914
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[596].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43950
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[597].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 43986
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44022
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 43874
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[598].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[599].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[600].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44109
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[601].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44145
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44181
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44033
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[602].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44196
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[603].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44232
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[604].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44268
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[605].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44304
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 44340
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44192
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 38166
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 37955
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 44450
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 44391
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 44864
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 44733
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 44659
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 44507
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 44367
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[606].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[607].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 45840
                        }, this),
                        $$contentTexts[608].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[609].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 45907
                        }, this),
                        $$contentTexts[610].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[611].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 45974
                        }, this),
                        $$contentTexts[612].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[613].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46041
                        }, this),
                        $$contentTexts[614].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[615].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46108
                        }, this),
                        $$contentTexts[616].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[617].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46175
                        }, this),
                        $$contentTexts[618].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[619].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46242
                        }, this),
                        $$contentTexts[620].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[621].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46309
                        }, this),
                        $$contentTexts[622].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[623].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46376
                        }, this),
                        $$contentTexts[624].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[625].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46443
                        }, this),
                        $$contentTexts[626].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[627].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46510
                        }, this),
                        $$contentTexts[628].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[629].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46577
                        }, this),
                        $$contentTexts[630].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[631].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46644
                        }, this),
                        $$contentTexts[632].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[633].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46711
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 45810
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 46836
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46778
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 47248
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 47117
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 47043
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 46892
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 46755
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[634].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[635].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 48224
                        }, this),
                        $$contentTexts[636].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 48194
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[637].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[638].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48330
                                }, this),
                                $$contentTexts[639].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 48299
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[640].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 48402
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 48295
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[641].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 48443
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[642].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 48477
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 48608
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 48557
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 49006
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 48875
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 48801
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 48657
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 48541
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[643].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 49952
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[644].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50004
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[645].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50040
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[646].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50076
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[647].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 50112
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 50000
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 49993
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[648].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50172
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[649].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[650].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50244
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[651].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50280
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50168
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[652].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50325
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[653].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[654].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 50392
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50361
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[655].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50450
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[656].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 50490
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50486
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50321
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[657].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50544
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[658].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50580
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[659].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50616
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[660].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50652
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50540
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[661].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50697
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[662].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50733
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[663].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[664].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50805
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50693
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[665].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50850
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[666].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[667].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50922
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[668].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 50958
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50846
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[669].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[670].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51039
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[671].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[672].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51111
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 50999
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[673].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[674].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51192
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[675].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51228
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[676].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51264
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51152
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[677].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[678].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51345
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[679].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51381
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[680].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51417
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51305
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[681].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51462
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[682].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 51529
                                                }, this),
                                                $$contentTexts[683].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 51562
                                                }, this),
                                                $$contentTexts[684].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51498
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[685].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51600
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[686].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51636
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51458
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[687].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51681
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[688].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51717
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[689].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51753
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[690].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51789
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51677
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[691].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51834
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[692].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51870
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[693].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51906
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[694].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51942
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51830
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[695].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 51987
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[696].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52023
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[697].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52059
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[698].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52095
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 51983
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[699].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52140
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[700].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52176
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[701].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52212
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[702].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52248
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52136
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[703].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52293
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[704].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52329
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[705].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52365
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[706].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52401
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52289
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[707].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52446
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[708].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52482
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[709].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52518
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[710].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52554
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52442
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[711].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52599
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[712].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52635
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[713].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 52675
                                                }, this),
                                                $$contentTexts[714].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[715].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 52742
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52671
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[716].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52787
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52595
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[717].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52832
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[718].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52868
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[719].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[720].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 52940
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 52828
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 50161
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 49986
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 53060
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 53011
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 53454
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 53323
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 53249
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 53107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 52997
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[721].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 54400
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 54501
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 54450
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 54899
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 54768
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 54694
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 54550
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 54434
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[722].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 55845
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 55909
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[723].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 55953
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 55879
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[724].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 56021
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[725].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56073
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[726].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56109
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[727].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56145
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[728].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56181
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[729].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 56217
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 56069
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 56062
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[730].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56277
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[731].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56313
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[732].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56349
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[733].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56421
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 56273
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[734].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[735].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[736].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 56503
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56472
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[737].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56561
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[738].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 56601
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56646
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 56432
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[739].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56661
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[740].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56697
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[741].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56733
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[742].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56805
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 56657
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[743].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56820
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[744].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56856
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[745].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56892
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[746].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56928
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56964
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 56816
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[747].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 56979
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[748].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57015
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[749].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 57055
                                                }, this),
                                                $$contentTexts[750].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[751].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 57122
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57051
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[752].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57167
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57203
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 56975
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[753].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57218
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[754].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57254
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[755].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57290
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[756].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57326
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57362
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57214
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[757].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57377
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[758].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57413
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[759].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57449
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[760].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57485
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57521
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57373
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[761].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57536
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[762].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#pointerevents",
                                                    children: $$contentTexts[763].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 57603
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[764].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57668
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[765].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 57708
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57704
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57753
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57532
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[766].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57768
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[767].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[768].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 57835
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57804
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[769].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57884
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[770].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[771].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 57951
                                                }, this),
                                                $$contentTexts[772].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 57920
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58023
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 57764
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[773].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[774].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58074
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[775].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[776].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58146
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58182
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58034
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[777].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58197
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[778].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58233
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[779].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 58273
                                                }, this),
                                                $$contentTexts[780].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[781].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 58340
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58269
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[782].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 58389
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58434
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58193
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[783].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58449
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[784].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58485
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[785].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58521
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[786].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58557
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 58593
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58445
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 56266
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 56055
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "图标样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#图标样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 58683
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 58634
                        }, this),
                        "图标样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "图标样式",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 59077
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 58946
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 58872
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 58730
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 58620
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[787].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 60023
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "1-文字图标",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#1-文字图标",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 60124
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 60073
                        }, this),
                        "1. 文字图标",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "1.-文字图标",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 60524
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 60393
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 60319
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 60174
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 60057
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[788].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 61470
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 61534
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[789].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 61578
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 61504
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "2-图片图标",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#2-图片图标",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 61713
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 61662
                        }, this),
                        "2. 图片图标",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "2.-图片图标",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 62113
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 61982
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 61908
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 61763
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 61646
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[790].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 63059
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 63123
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[791].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 63167
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 63093
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "3-iconfont-图标",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#3-iconfont-图标",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 63316
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 63258
                        }, this),
                        "3. IconFont 图标",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "3.-IconFont-图标",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 63730
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 63599
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 63525
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 63373
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 63235
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[792].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 64676
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 64740
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[793].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 64784
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 64710
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[794].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 64852
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[795].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 64904
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[796].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 64940
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[797].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 64976
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[798].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 65012
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 64900
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 64893
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[799].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65072
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[800].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65108
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[801].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65144
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[802].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65180
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65068
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[803].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65225
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[804].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65261
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[805].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65297
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[806].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65333
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65221
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[807].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65378
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[808].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65414
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[809].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65450
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[810].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65486
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65374
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[811].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65531
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[812].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65567
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[813].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65603
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[814].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65639
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65527
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[815].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65684
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[816].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65720
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[817].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 65760
                                                }, this),
                                                $$contentTexts[818].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[819].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 65827
                                                }, this),
                                                $$contentTexts[820].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[821].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 65894
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65756
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[822].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 65943
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65939
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65680
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[823].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 65997
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[824].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66033
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[825].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 66073
                                                }, this),
                                                $$contentTexts[826].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[827].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 66140
                                                }, this),
                                                $$contentTexts[828].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66069
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[829].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66216
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 65993
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[830].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66270
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[831].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66306
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[832].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66342
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[833].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 66382
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66378
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66266
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[834].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[835].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66472
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[836].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66508
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[837].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66544
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66432
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[838].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66589
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[839].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66625
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[840].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66661
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[841].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66697
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66585
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[842].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66742
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[843].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66778
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[844].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66814
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[845].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66850
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66738
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[846].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66895
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[847].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66931
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[848].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 66967
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[849].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67003
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 66891
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[850].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67048
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[851].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67084
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[852].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67120
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[853].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67156
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67044
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[854].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67201
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[855].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67237
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[856].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67273
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[857].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67309
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67197
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[858].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67354
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[859].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[860].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67426
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[861].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67462
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67350
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[862].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67507
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[863].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67543
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[864].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 67583
                                                }, this),
                                                $$contentTexts[865].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[866].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 67650
                                                }, this),
                                                $$contentTexts[867].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[868].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 67717
                                                }, this),
                                                $$contentTexts[869].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[870].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 67784
                                                }, this),
                                                $$contentTexts[871].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[872].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 67851
                                                }, this),
                                                $$contentTexts[873].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[874].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 67918
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67579
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[875].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 67967
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 67963
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 67503
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[876].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68021
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[877].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68057
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[878].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68097
                                                }, this),
                                                $$contentTexts[879].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[880].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68164
                                                }, this),
                                                $$contentTexts[881].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[882].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68231
                                                }, this),
                                                $$contentTexts[883].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[884].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68298
                                                }, this),
                                                $$contentTexts[885].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[886].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68365
                                                }, this),
                                                $$contentTexts[887].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[888].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68432
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68093
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[889].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 68481
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68477
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 68017
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[890].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68535
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[891].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68571
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[892].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[893].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68643
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 68531
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[894].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68688
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[895].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68724
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[896].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68760
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[897].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68796
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 68684
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[898].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[899].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[900].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68917
                                                }, this),
                                                $$contentTexts[901].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[902].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68984
                                                }, this),
                                                $$contentTexts[903].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[904].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69051
                                                }, this),
                                                $$contentTexts[905].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[906].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69118
                                                }, this),
                                                $$contentTexts[907].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[908].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69185
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 68913
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[909].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 69234
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69230
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 68837
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[910].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69288
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[911].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69324
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[912].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69364
                                                }, this),
                                                $$contentTexts[913].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[914].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69431
                                                }, this),
                                                $$contentTexts[915].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69360
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[916].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 69507
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69503
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 69284
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[917].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69561
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[918].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[919].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69633
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[920].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69669
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 69557
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[921].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69714
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[922].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69750
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[923].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69786
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[924].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 69822
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 69710
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 65061
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 64886
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "徽标样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#徽标样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 69942
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 69893
                        }, this),
                        "徽标样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "徽标样式",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 70336
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 70205
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 70131
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 69989
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 69879
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[925].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 71282
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "单个徽标",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#单个徽标",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 71379
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 71330
                        }, this),
                        "单个徽标",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "单个徽标",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 71773
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 71642
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 71568
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 71426
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 71316
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[926].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 72719
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 72783
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[927].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 72827
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 72753
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "多个徽标",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#多个徽标",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 72958
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 72909
                        }, this),
                        "多个徽标",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "多个徽标",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 73352
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 73221
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 73147
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 73005
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 72895
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[928].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 74298
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 74362
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[929].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 74406
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 74332
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "自定义徽标样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#自定义徽标样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 74543
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 74491
                        }, this),
                        "自定义徽标样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "自定义徽标样式",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 74943
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 74812
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 74738
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 74593
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 74474
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[930].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 75889
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 75953
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[931].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 75997
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 75923
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[932].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 76065
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[933].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 76117
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[934].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 76153
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[935].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 76189
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[936].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 76225
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 76113
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 76106
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[937].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76285
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[938].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76321
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[939].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76357
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[940].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76393
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 76281
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[941].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76438
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[942].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76474
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[943].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76510
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[944].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[945].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 76577
                                                }, this),
                                                $$contentTexts[946].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[947].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 76644
                                                }, this),
                                                $$contentTexts[948].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[949].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 76711
                                                }, this),
                                                $$contentTexts[950].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76546
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 76434
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[951].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76792
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[952].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76828
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#badgestyleprops",
                                                    children: $$contentTexts[953].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 76868
                                                }, this),
                                                $$contentTexts[954].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76864
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[955].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 76962
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 76788
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 76274
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 76099
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "badgestyleprops",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#badgestyleprops",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 77104
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 77044
                        }, this),
                        "BadgeStyleProps",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "BadgeStyleProps",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 77520
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 77389
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 77315
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 77162
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 77019
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[956].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 78484
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[957].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 78520
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[958].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 78556
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[959].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 78592
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 78480
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 78473
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[960].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 78652
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[961].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 78688
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[962].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 78724
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[963].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 78760
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 78648
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[964].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 78805
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[965].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[966].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 78872
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 78841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[967].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 78930
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[968].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 78970
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 78966
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 78801
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[969].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79024
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[970].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79060
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[971].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79096
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[972].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79132
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 79020
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[973].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[974].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79213
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[975].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79249
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[976].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79285
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 79173
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[977].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79330
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[978].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79366
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[979].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79402
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[980].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79438
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 79326
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[981].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79483
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[982].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79519
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[983].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79555
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[984].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79591
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 79479
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[985].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79636
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[986].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79672
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[987].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79708
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[988].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79744
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 79632
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[989].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79789
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[990].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79825
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[991].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79861
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[992].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79897
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 79785
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[993].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79942
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[994].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 79978
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[995].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80014
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[996].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80050
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 79938
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[997].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80095
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[998].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 80162
                                                }, this),
                                                $$contentTexts[999].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 80195
                                                }, this),
                                                $$contentTexts[1000].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 80229
                                                }, this),
                                                $$contentTexts[1001].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding",
                                                    children: $$contentTexts[1002].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 80263
                                                }, this),
                                                $$contentTexts[1003].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80131
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1004].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80395
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1005].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80432
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 80091
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1006].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80478
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1007].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80515
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1008].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80552
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1009].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80589
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 80474
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1010].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80635
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1011].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80672
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1012].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80709
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1013].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80746
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 80631
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1014].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80792
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1015].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80829
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1016].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80866
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1017].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80903
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 80788
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1018].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80949
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1019].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 80986
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1020].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81023
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1021].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81060
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 80945
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1022].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81106
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1023].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81143
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1024].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81180
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1025].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81217
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 81102
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1026].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81263
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1027].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81300
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1028].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81337
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1029].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81374
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 81259
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1030].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81420
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1031].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81457
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1032].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 81498
                                                }, this),
                                                $$contentTexts[1033].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1034].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 81567
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81494
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1035].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81613
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 81416
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1036].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81659
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1037].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81696
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1038].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81733
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1039].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81770
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 81655
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1040].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81816
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1041].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81853
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1042].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81890
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1043].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81927
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 81812
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1044].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 81973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1045].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1046].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82047
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1047].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82084
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 81969
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1048].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82130
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1049].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82167
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1050].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82204
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1051].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82241
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 82126
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1052].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82287
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1053].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82324
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1054].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82365
                                                }, this),
                                                $$contentTexts[1055].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1056].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82434
                                                }, this),
                                                $$contentTexts[1057].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1058].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82503
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82361
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1059].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 82553
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82549
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 82283
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1060].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1061].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82645
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1062].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82686
                                                }, this),
                                                $$contentTexts[1063].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1064].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82755
                                                }, this),
                                                $$contentTexts[1065].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1066].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 82833
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82829
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 82604
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1067].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82888
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1068].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82925
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1069].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82962
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1070].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 83003
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 82999
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 82884
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1071].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83058
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1072].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83095
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1073].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83132
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1074].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83169
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 83054
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1075].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83215
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1076].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83252
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1077].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83289
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1078].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83326
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 83211
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1079].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83372
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1080].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83409
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1081].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83446
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1082].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83483
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 83368
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1083].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83529
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1084].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83566
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1085].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83603
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1086].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83640
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 83525
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1087].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83686
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1088].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83723
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1089].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83760
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1090].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83797
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 83682
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1091].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83843
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1092].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83880
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1093].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83917
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1094].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 83954
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 83839
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1095].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 84000
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1096].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 84037
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1097].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84078
                                                }, this),
                                                $$contentTexts[1098].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1099].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84147
                                                }, this),
                                                $$contentTexts[1100].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1101].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84216
                                                }, this),
                                                $$contentTexts[1102].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1103].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84285
                                                }, this),
                                                $$contentTexts[1104].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1105].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84354
                                                }, this),
                                                $$contentTexts[1106].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1107].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84423
                                                }, this),
                                                $$contentTexts[1108].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1109].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84492
                                                }, this),
                                                $$contentTexts[1110].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1111].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84561
                                                }, this),
                                                $$contentTexts[1112].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1113].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84630
                                                }, this),
                                                $$contentTexts[1114].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1115].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84699
                                                }, this),
                                                $$contentTexts[1116].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1117].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84768
                                                }, this),
                                                $$contentTexts[1118].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1119].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84837
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 84074
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1120].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 84883
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 83996
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1121].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 84929
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 84966
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 85003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 85040
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 84925
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 85086
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 85123
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1127].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85164
                                                }, this),
                                                $$contentTexts[1128].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1129].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85233
                                                }, this),
                                                $$contentTexts[1130].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1131].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85302
                                                }, this),
                                                $$contentTexts[1132].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1133].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85371
                                                }, this),
                                                $$contentTexts[1134].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1135].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85440
                                                }, this),
                                                $$contentTexts[1136].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1137].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85509
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 85160
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1138].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 85559
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 85555
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 85082
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 85614
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 85651
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1141].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85692
                                                }, this),
                                                $$contentTexts[1142].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1143].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85761
                                                }, this),
                                                $$contentTexts[1144].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1145].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85830
                                                }, this),
                                                $$contentTexts[1146].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1147].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85899
                                                }, this),
                                                $$contentTexts[1148].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1149].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85968
                                                }, this),
                                                $$contentTexts[1150].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1151].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86037
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 85688
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1152].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 86087
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86083
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 85610
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86142
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86216
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86253
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 86138
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86299
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86336
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86373
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1160].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86410
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 86295
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1161].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86456
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86493
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1163].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86534
                                                }, this),
                                                $$contentTexts[1164].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1165].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86603
                                                }, this),
                                                $$contentTexts[1166].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1167].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86672
                                                }, this),
                                                $$contentTexts[1168].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1169].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86741
                                                }, this),
                                                $$contentTexts[1170].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1171].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86810
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86530
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1172].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 86860
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86856
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 86452
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86915
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86952
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1175].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86993
                                                }, this),
                                                $$contentTexts[1176].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1177].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87062
                                                }, this),
                                                $$contentTexts[1178].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 86989
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1179].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 87140
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87136
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 86911
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87195
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87232
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1182].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87273
                                                }, this),
                                                $$contentTexts[1183].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1184].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87342
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87269
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1185].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87388
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 87191
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1186].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87434
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1187].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87471
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1188].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87508
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1189].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87545
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 87430
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1190].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87591
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87665
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 87702
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 87587
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 78641
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 78466
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "连接桩样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#连接桩样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 87825
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 87775
                        }, this),
                        "连接桩样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "连接桩样式",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 88221
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 88090
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 88016
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 87873
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 87760
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1194].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 89167
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "基础连接桩",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#基础连接桩",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 89267
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 89217
                        }, this),
                        "基础连接桩",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "基础连接桩",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 89663
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 89532
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 89458
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 89315
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 89202
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1195].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 90609
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 90674
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1196].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 90718
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 90644
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "自定义位置连接桩",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#自定义位置连接桩",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 90858
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 90805
                        }, this),
                        "自定义位置连接桩",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "自定义位置连接桩",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 91260
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 91129
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 91055
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 90909
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 90787
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1197].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 92206
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 92271
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1198].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 92315
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 92241
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "差异化连接桩样式",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#差异化连接桩样式",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 92455
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 92402
                        }, this),
                        "差异化连接桩样式",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "差异化连接桩样式",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 92857
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 92726
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 92652
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 92506
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 92384
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1199].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 93803
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 93868
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1200].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 93912
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 93838
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1201].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 93981
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1202].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 94034
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1203].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 94071
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1204].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 94108
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1205].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 94145
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1206].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 94182
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 94030
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 94023
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1207].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 94243
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1208].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 94280
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1209].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 94317
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1210].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 94354
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 94391
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 94239
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1211].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 94406
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1212].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 94443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#portstyleprops",
                                                    children: $$contentTexts[1213].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 94484
                                                }, this),
                                                $$contentTexts[1214].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 94480
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 94579
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 94585
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 94402
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 94232
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 94016
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "portstyleprops",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#portstyleprops",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 94695
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 94636
                        }, this),
                        "PortStyleProps",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "PortStyleProps",
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 95109
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 94978
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 94904
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 94752
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 94612
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1215].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 96073
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1216].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 96110
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1217].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 96147
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1218].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 96184
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1219].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 96221
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 96069
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 96062
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1220].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 96282
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1221].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 96319
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1222].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 96356
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1223].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 96393
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 96430
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 96278
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1224].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 96445
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1225].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 96482
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1226].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 96523
                                                }, this),
                                                $$contentTexts[1227].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1228].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 96592
                                                }, this),
                                                $$contentTexts[1229].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1230].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 96661
                                                }, this),
                                                $$contentTexts[1231].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1232].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 96730
                                                }, this),
                                                $$contentTexts[1233].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1234].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 96799
                                                }, this),
                                                $$contentTexts[1235].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1236].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 96868
                                                }, this),
                                                $$contentTexts[1237].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1238].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 96937
                                                }, this),
                                                $$contentTexts[1239].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1240].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97006
                                                }, this),
                                                $$contentTexts[1241].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1242].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97075
                                                }, this),
                                                $$contentTexts[1243].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1244].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97144
                                                }, this),
                                                $$contentTexts[1245].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1246].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97213
                                                }, this),
                                                $$contentTexts[1247].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1248].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97282
                                                }, this),
                                                $$contentTexts[1249].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1250].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97351
                                                }, this),
                                                $$contentTexts[1251].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 96519
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1252].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1253].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97462
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 96441
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1254].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97508
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[1255].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97577
                                                }, this),
                                                $$contentTexts[1256].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97611
                                                }, this),
                                                $$contentTexts[1257].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97545
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1258].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97650
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1259].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97687
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97724
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 97504
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1260].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97739
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[1261].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97808
                                                }, this),
                                                $$contentTexts[1262].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97842
                                                }, this),
                                                $$contentTexts[1263].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97776
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1264].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97881
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1265].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97918
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97955
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 97735
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1266].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 97970
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[1267].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[1268].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 98039
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98007
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1269].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98098
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1270].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 98139
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98135
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98185
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 97966
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1271].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98200
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1272].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98237
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1273].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1274].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98311
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98348
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 98196
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1275].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98363
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1276].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98400
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1277].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98437
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1278].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98474
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98511
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 98359
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1279].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98526
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1280].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98563
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1281].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98600
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1282].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98637
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98674
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 98522
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1283].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98689
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1284].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98726
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1285].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98763
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1286].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98800
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98837
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 98685
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1287].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98852
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1288].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1289].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98926
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1290].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 98963
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99000
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 98848
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1291].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99015
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1292].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99052
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1293].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99089
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1294].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99126
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99163
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 99011
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1295].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99178
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1296].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99215
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1297].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99252
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1298].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99289
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99326
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 99174
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1299].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99341
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1300].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99378
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1301].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99415
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1302].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99452
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99489
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 99337
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1303].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99504
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1304].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99541
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1305].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99578
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1306].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99615
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99652
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 99500
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1307].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1308].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99704
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1309].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99741
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1310].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99778
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99815
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 99663
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1311].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99830
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1312].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99867
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1313].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99904
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1314].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99941
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99978
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 99826
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1315].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 99993
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1316].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1317].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100067
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1318].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100104
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100141
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 99989
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1319].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1320].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100193
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1321].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100230
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1322].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100267
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100304
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 100152
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1323].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100319
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1324].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100356
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1325].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 100397
                                                }, this),
                                                $$contentTexts[1326].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1327].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 100466
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100393
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1328].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 100516
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100512
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100562
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 100315
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1329].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100577
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1330].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100614
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1331].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100651
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1332].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100688
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 100725
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 100573
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 96271
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 96055
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 100817
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 100767
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 101213
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 101082
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 101008
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 100865
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 100752
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1333].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 102159
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1334].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 102194
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "520",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*t2qvRp92itkAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 102229
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1335].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 102349
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[1336].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 102384
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[1337].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[1338].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 102486
                        }, this),
                        $$contentTexts[1339].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 102455
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        4,
                        5,
                        6,
                        7
                    ],
                    children: $$contentTexts[1340].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 102559
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1341].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 102652
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 102717
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1342].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 102773
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 102687
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 102915
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 102861
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 103319
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 103188
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 103114
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 102967
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 102842
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1343].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 104265
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[1344].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                        lineNumber: 21,
                        columnNumber: 104304
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 104300
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1345].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 104346
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    start: "2",
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[1346].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                        lineNumber: 21,
                        columnNumber: 104425
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 104411
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1347].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 104467
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1348].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 104510
                                }, this),
                                $$contentTexts[1349].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 104506
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1350].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 104588
                                }, this),
                                $$contentTexts[1351].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 104584
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1352].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 104666
                                }, this),
                                $$contentTexts[1353].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 104662
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1354].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 104744
                                }, this),
                                $$contentTexts[1355].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 104740
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1356].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 104822
                                }, this),
                                $$contentTexts[1357].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 104818
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1358].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 104900
                                }, this),
                                $$contentTexts[1359].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 104896
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1360].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 104978
                                }, this),
                                $$contentTexts[1361].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 104974
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 104502
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[1362].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/manual/animation/animation#%E5%8A%A8%E7%94%BB%E8%8C%83%E5%BC%8F",
                            children: $$contentTexts[1363].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 105088
                        }, this),
                        $$contentTexts[1364].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 105057
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1365].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 105231
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1366].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 105296
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1367].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 105331
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1368].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 105396
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1369].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 105431
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
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 105565
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 105513
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
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 105965
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 105834
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 105760
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 105615
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 105496
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[1370].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[1371].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 106942
                        }, this),
                        $$contentTexts[1372].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 106911
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[1373].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/manual/theme/palette",
                                children: $$contentTexts[1374].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 107058
                            }, this),
                            $$contentTexts[1375].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                        lineNumber: 21,
                        columnNumber: 107027
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 107015
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1376].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 107189
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1377].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 107226
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1378].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 107263
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1379].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.zh.md",
                                        lineNumber: 21,
                                        columnNumber: 107300
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                lineNumber: 21,
                                columnNumber: 107185
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 107178
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1380].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107361
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1381].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107398
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1382].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107435
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1383].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 107357
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1384].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107518
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1385].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107555
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1386].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107592
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1387].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 107633
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107629
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 107514
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1388].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107688
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1389].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107725
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1390].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107762
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1391].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107799
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 107684
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1392].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107845
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[1393].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 107914
                                                }, this),
                                                $$contentTexts[1394].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1395].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 107948
                                                }, this),
                                                $$contentTexts[1396].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 108017
                                                }, this),
                                                $$contentTexts[1397].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1398].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 108051
                                                }, this),
                                                $$contentTexts[1399].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 107882
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1400].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 108129
                                                }, this),
                                                $$contentTexts[1401].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1402].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                    lineNumber: 21,
                                                    columnNumber: 108198
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 108125
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1403].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.zh.md",
                                                lineNumber: 21,
                                                columnNumber: 108248
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                                            lineNumber: 21,
                                            columnNumber: 108244
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                                    lineNumber: 21,
                                    columnNumber: 107841
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 107350
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 107171
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[1404].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[1405].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 108346
                        }, this),
                        $$contentTexts[1406].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 108315
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1407].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 108419
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1408].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 108484
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 108549
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1409].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 108605
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 108519
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1410].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 108674
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1411].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 108709
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1412].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 108774
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 108839
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1413].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.zh.md",
                            lineNumber: 21,
                            columnNumber: 108895
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.zh.md",
                    lineNumber: 21,
                    columnNumber: 108809
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/element/node/BaseNode.zh.md",
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
                fileName: "docs/manual/element/node/BaseNode.zh.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/node/BaseNode.zh.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/node/BaseNode.zh.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/node/BaseNode.zh.md",
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
//# sourceMappingURL=docs_manual_element_node_BaseNode_zh_md-async.js.map