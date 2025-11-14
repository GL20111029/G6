((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_@antv/g6-site"] || []).push([
        ['docs/manual/element/node/BaseNode.en.md'],
{ "docs/manual/element/node/BaseNode.en.md": function (module, exports, __mako_require__){
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
                    fileName: "docs/manual/element/node/BaseNode.en.md",
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 147
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 555
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 424
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 350
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 201
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
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
                    fileName: "docs/manual/element/node/BaseNode.en.md",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1612
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[3].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1646
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[4].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1680
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[5].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1714
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[6].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 1748
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 1608
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
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
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[8].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1840
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#type",
                                                children: $$contentTexts[9].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 1878
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1874
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[10].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 1936
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1932
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1980
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1802
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[11].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 1995
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[12].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#style",
                                                children: $$contentTexts[13].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 2069
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2065
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[14].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2125
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2160
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 1991
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[15].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2175
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[16].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2210
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#state",
                                                children: $$contentTexts[17].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 2249
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2245
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[18].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2305
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2340
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2171
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[19].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2355
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[20].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2390
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#palette",
                                                children: $$contentTexts[21].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 2429
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2425
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[22].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2522
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2351
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[23].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2537
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[24].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                to: "#animation",
                                                children: $$contentTexts[25].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 2611
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2607
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[26].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2671
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 2706
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 2533
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 1795
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 2796
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 3190
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 3059
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 2985
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 2843
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 2733
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[27].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[28].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 4165
                        }, this),
                        $$contentTexts[29].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[30].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 4230
                        }, this),
                        $$contentTexts[31].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
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
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 4303
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[33].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 4388
                        }, this),
                        $$contentTexts[34].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[35].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 4457
                        }, this),
                        $$contentTexts[36].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 4385
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[37].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 4526
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[38].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
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
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4628
                                }, this),
                                $$contentTexts[40].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/node/circle",
                                    children: $$contentTexts[41].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4693
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 4624
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[42].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4777
                                }, this),
                                $$contentTexts[43].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/node/diamond",
                                    children: $$contentTexts[44].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4842
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 4773
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[45].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4927
                                }, this),
                                $$contentTexts[46].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/node/donut",
                                    children: $$contentTexts[47].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 4992
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 4923
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[48].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5075
                                }, this),
                                $$contentTexts[49].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/node/ellipse",
                                    children: $$contentTexts[50].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5140
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 5071
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[51].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5225
                                }, this),
                                $$contentTexts[52].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/node/hexagon",
                                    children: $$contentTexts[53].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5290
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 5221
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[54].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5375
                                }, this),
                                $$contentTexts[55].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/node/html",
                                    children: $$contentTexts[56].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5440
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 5371
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[57].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5522
                                }, this),
                                $$contentTexts[58].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/node/image",
                                    children: $$contentTexts[59].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5587
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 5518
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[60].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5670
                                }, this),
                                $$contentTexts[61].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/node/rect",
                                    children: $$contentTexts[62].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5735
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 5666
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[63].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5817
                                }, this),
                                $$contentTexts[64].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/node/star",
                                    children: $$contentTexts[65].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5882
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 5813
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[66].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 5964
                                }, this),
                                $$contentTexts[67].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                    to: "/en/manual/element/node/triangle",
                                    children: $$contentTexts[68].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6029
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 5960
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 6181
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 6131
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 6577
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 6446
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 6372
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 6229
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 6116
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[69].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 7523
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        3
                    ],
                    children: $$contentTexts[70].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 7556
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                            children: $$contentTexts[71].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 7641
                        }, this),
                        $$contentTexts[72].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 7638
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[73].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 7714
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[74].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[75].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 7804
                        }, this),
                        $$contentTexts[76].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[77].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 7869
                        }, this),
                        $$contentTexts[78].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 7775
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[79].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 7938
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "200",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*Ot4bSbBx97EAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 7971
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[80].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8099
                                }, this),
                                $$contentTexts[81].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 8095
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[82].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8173
                                }, this),
                                $$contentTexts[83].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 8169
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[84].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8247
                                }, this),
                                $$contentTexts[85].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 8243
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[86].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8321
                                }, this),
                                $$contentTexts[87].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 8317
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[88].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8395
                                }, this),
                                $$contentTexts[89].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 8391
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[90].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8469
                                }, this),
                                $$contentTexts[91].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 8465
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 8091
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[92].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 8544
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "main-graphic-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#main-graphic-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 8668
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 8605
                        }, this),
                        "Main Graphic Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Main-Graphic-Style",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 9090
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 8959
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 8885
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 8729
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 8577
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[93].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 10036
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 10174
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 10104
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 10610
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 10479
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 10405
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 10242
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 10069
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[94].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 11556
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 11619
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[95].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 11663
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 11589
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "transparency-and-shadow-effects",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#transparency-and-shadow-effects",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 11847
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 11771
                        }, this),
                        "Transparency and Shadow Effects",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Transparency-and-Shadow-Effects",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 12295
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 12164
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 12090
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 11921
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 11730
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[96].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 13241
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 13304
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[97].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 13348
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 13274
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "dashed-border-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#dashed-border-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 13508
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 13444
                        }, this),
                        "Dashed Border Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Dashed-Border-Style",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 13932
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 13801
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 13727
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 13570
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 13415
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[98].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 14878
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 14941
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[99].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 14985
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 14911
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[100].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 15052
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[101].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15104
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[102].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15140
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[103].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15176
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[104].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15212
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[105].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 15248
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 15100
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 15093
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[106].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15308
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[107].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[108].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15380
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[109].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15416
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15452
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15304
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15467
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[111].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[112].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 15534
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15592
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15664
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15463
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15679
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15715
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[117].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15751
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[118].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 15791
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15787
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15836
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15675
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[119].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15851
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[120].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15887
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[121].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15923
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[122].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15959
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 15995
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 15847
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[123].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16010
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[124].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16046
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[125].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16082
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[126].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16118
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16154
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16006
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[127].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16169
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[128].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16205
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[129].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16245
                                                }, this),
                                                $$contentTexts[130].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[131].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16312
                                                }, this),
                                                $$contentTexts[132].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[133].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16379
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16241
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[134].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 16428
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16424
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16473
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16165
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[135].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16488
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[136].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16524
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[137].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16560
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[138].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16596
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16632
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16484
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[139].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[140].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16683
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[141].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16719
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[142].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16755
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16791
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16643
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16806
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16842
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[145].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16882
                                                }, this),
                                                $$contentTexts[146].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[147].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 16949
                                                }, this),
                                                $$contentTexts[148].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[149].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 17016
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 16878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[150].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 17065
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17061
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17110
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 16802
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17125
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17161
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[153].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17197
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[154].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17233
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17269
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17121
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[155].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17284
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[156].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[157].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17356
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[158].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17392
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17428
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17280
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[159].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[160].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#pointerevents",
                                                    children: $$contentTexts[161].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 17510
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17479
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[162].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17575
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[163].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 17615
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17611
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17660
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17439
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17675
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[165].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17711
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[166].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17747
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[167].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17783
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17819
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17671
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[168].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17834
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[169].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17870
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17906
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17942
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17978
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17830
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[172].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 17993
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[173].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18029
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[174].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18065
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18101
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18137
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 17989
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18152
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18188
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18224
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18260
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18296
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18148
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18311
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18347
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[182].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 18387
                                                }, this),
                                                $$contentTexts[183].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[184].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 18454
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18383
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[185].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 18503
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18499
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18548
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18307
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[186].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18563
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[187].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#size",
                                                    children: $$contentTexts[188].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 18630
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18599
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[189].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18686
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[190].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18722
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18758
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18559
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[191].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18773
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[192].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18809
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[193].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18845
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[194].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 18885
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18881
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18930
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18769
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[195].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18945
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[196].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 18981
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19017
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19053
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19089
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 18941
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[199].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19104
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19140
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19176
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19212
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19248
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19100
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[203].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19263
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[204].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19299
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19335
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[206].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19371
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19407
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19259
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[207].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19422
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[208].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19458
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[209].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 19498
                                                }, this),
                                                $$contentTexts[210].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[211].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 19565
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19494
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[212].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 19614
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19659
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19418
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[213].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19674
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19710
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[215].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19746
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[216].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19782
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19818
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19670
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[217].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19833
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[218].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19869
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[219].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19905
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[220].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19941
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19977
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19829
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[221].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 19992
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[222].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20028
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[223].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20064
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[224].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20100
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20136
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 19988
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[225].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20151
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[226].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20187
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[227].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20223
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[228].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20259
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 20295
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20147
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 15297
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 15086
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 20385
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 20336
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 20779
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 20648
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 20574
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 20432
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 20322
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[229].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 21725
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[230].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 21763
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[231].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 21799
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[232].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 21835
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 21759
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 21957
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 21899
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 22369
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 22238
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 22164
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 22013
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 21876
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[233].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[234].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 23345
                        }, this),
                        $$contentTexts[235].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            href: "https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events",
                            children: $$contentTexts[236].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 23412
                        }, this),
                        $$contentTexts[237].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 23315
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[238].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[239].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 23578
                        }, this),
                        $$contentTexts[240].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[241].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 23645
                        }, this),
                        $$contentTexts[242].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[243].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 23712
                        }, this),
                        $$contentTexts[244].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[245].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 23779
                        }, this),
                        $$contentTexts[246].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[247].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 23846
                        }, this),
                        $$contentTexts[248].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[249].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 23913
                        }, this),
                        $$contentTexts[250].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[251].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 23980
                        }, this),
                        $$contentTexts[252].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[253].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24047
                        }, this),
                        $$contentTexts[254].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[255].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24114
                        }, this),
                        $$contentTexts[256].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[257].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24181
                        }, this),
                        $$contentTexts[258].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[259].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24248
                        }, this),
                        $$contentTexts[260].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[261].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24315
                        }, this),
                        $$contentTexts[262].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[263].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24382
                        }, this),
                        $$contentTexts[264].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[265].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24449
                        }, this),
                        $$contentTexts[266].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[267].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24516
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 23548
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[268].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[269].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24590
                        }, this),
                        $$contentTexts[270].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[271].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24657
                        }, this),
                        $$contentTexts[272].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[273].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24724
                        }, this),
                        $$contentTexts[274].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 24560
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[275].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24811
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24803
                                }, this),
                                $$contentTexts[276].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[277].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24887
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24799
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[278].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 24944
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 24936
                                }, this),
                                $$contentTexts[279].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 24932
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[280].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25037
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25029
                                }, this),
                                $$contentTexts[281].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[282].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25121
                                                }, this),
                                                $$contentTexts[283].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[284].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25188
                                                }, this),
                                                $$contentTexts[285].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25117
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[286].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[287].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25291
                                                }, this),
                                                $$contentTexts[288].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[289].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25358
                                                }, this),
                                                $$contentTexts[290].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[291].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25425
                                                }, this),
                                                $$contentTexts[292].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[293].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25492
                                                }, this),
                                                $$contentTexts[294].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25260
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25113
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 25025
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[295].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25586
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25578
                                }, this),
                                $$contentTexts[296].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[297].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25670
                                                }, this),
                                                $$contentTexts[298].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[299].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25737
                                                }, this),
                                                $$contentTexts[300].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25666
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[301].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[302].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25840
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25809
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25662
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 25574
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[303].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 25907
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25899
                                }, this),
                                $$contentTexts[304].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[305].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 25991
                                                }, this),
                                                $$contentTexts[306].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[307].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26058
                                                }, this),
                                                $$contentTexts[308].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 25987
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[309].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[310].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26161
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26130
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 25983
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 25895
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[311].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26228
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26220
                                }, this),
                                $$contentTexts[312].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[313].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26312
                                                }, this),
                                                $$contentTexts[314].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[315].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26379
                                                }, this),
                                                $$contentTexts[316].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26308
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[317].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[318].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26482
                                                }, this),
                                                $$contentTexts[319].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[320].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26549
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26451
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26304
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 26216
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[321].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 26616
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26608
                                }, this),
                                $$contentTexts[322].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[323].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[324].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26727
                                                }, this),
                                                $$contentTexts[325].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[326].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26794
                                                }, this),
                                                $$contentTexts[327].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[328].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26861
                                                }, this),
                                                $$contentTexts[329].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[330].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 26928
                                                }, this),
                                                $$contentTexts[331].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 26696
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[332].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[333].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 27031
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27000
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 26692
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 26604
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[334].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27098
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27090
                                }, this),
                                $$contentTexts[335].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[336].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[337].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 27209
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27178
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[338].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[339].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 27285
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27254
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27174
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 27086
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[340].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27352
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27344
                                }, this),
                                $$contentTexts[341].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[342].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[343].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 27463
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27432
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                                            children: [
                                                $$contentTexts[344].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[345].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 27539
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 27508
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27428
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 27340
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                        children: $$contentTexts[346].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 27606
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27598
                                }, this),
                                $$contentTexts[347].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[348].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27682
                                }, this),
                                $$contentTexts[349].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[350].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27749
                                }, this),
                                $$contentTexts[351].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[352].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 27816
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 27594
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 24795
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: $$contentTexts[353].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/BaseNode.en.md",
                        lineNumber: 21,
                        columnNumber: 27869
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 27866
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    children: $$contentTexts[354].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 27917
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 28046
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 27995
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 28444
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 28313
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 28239
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 28095
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 27979
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[355].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[356].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 29420
                        }, this),
                        $$contentTexts[357].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[358].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 29487
                        }, this),
                        $$contentTexts[359].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[360].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 29554
                        }, this),
                        $$contentTexts[361].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[362].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 29621
                        }, this),
                        $$contentTexts[363].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[364].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 29688
                        }, this),
                        $$contentTexts[365].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[366].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 29755
                        }, this),
                        $$contentTexts[367].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[368].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 29822
                        }, this),
                        $$contentTexts[369].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[370].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 29889
                        }, this),
                        $$contentTexts[371].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[372].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 29956
                        }, this),
                        $$contentTexts[373].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[374].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30023
                        }, this),
                        $$contentTexts[375].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[376].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30090
                        }, this),
                        $$contentTexts[377].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[378].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30157
                        }, this),
                        $$contentTexts[379].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[380].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30224
                        }, this),
                        $$contentTexts[381].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[382].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30291
                        }, this),
                        $$contentTexts[383].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[384].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30358
                        }, this),
                        $$contentTexts[385].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[386].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30425
                        }, this),
                        $$contentTexts[387].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[388].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30492
                        }, this),
                        $$contentTexts[389].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[390].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30559
                        }, this),
                        $$contentTexts[391].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[392].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30626
                        }, this),
                        $$contentTexts[393].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[394].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30693
                        }, this),
                        $$contentTexts[395].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[396].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30760
                        }, this),
                        $$contentTexts[397].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[398].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30827
                        }, this),
                        $$contentTexts[399].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[400].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30894
                        }, this),
                        $$contentTexts[401].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[402].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 30961
                        }, this),
                        $$contentTexts[403].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[404].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31028
                        }, this),
                        $$contentTexts[405].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[406].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31095
                        }, this),
                        $$contentTexts[407].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[408].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31162
                        }, this),
                        $$contentTexts[409].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[410].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31229
                        }, this),
                        $$contentTexts[411].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[412].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31296
                        }, this),
                        $$contentTexts[413].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[414].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31363
                        }, this),
                        $$contentTexts[415].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[416].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31430
                        }, this),
                        $$contentTexts[417].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[418].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31497
                        }, this),
                        $$contentTexts[419].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[420].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31564
                        }, this),
                        $$contentTexts[421].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[422].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31631
                        }, this),
                        $$contentTexts[423].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[424].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31698
                        }, this),
                        $$contentTexts[425].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[426].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31765
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 29390
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "label-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#label-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 31886
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31830
                        }, this),
                        "Label Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Label-Style",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 32294
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 32163
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 32089
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 31940
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 31809
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[427].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 33240
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 33361
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 33300
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 33779
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 33648
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 33574
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 33420
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 33274
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[428].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 34725
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 34789
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[429].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 34833
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 34759
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 34998
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 34932
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 35426
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 35295
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 35221
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 35062
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 34901
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[430].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 36372
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 36436
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[431].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 36480
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 36406
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 36645
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 36579
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 37073
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 36942
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 36868
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 36709
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 36548
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[432].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 38019
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 38083
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[433].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 38127
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 38053
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[434].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 38195
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[435].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 38247
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[436].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 38283
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[437].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 38319
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[438].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 38355
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[439].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 38391
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 38243
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 38236
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[440].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38451
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[441].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38487
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[442].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38523
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[443].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38559
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38595
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38447
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[444].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38610
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[445].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[446].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 38677
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38646
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[447].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38735
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[448].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 38775
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38771
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38820
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38606
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[449].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38835
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[450].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38871
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[451].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38907
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[452].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38943
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38979
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38831
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[453].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 38994
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[454].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[455].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39066
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[456].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39102
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39138
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 38990
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[457].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39153
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[458].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39189
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[459].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39225
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[460].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39261
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39297
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39149
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[461].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39312
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[462].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39348
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[463].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39388
                                                }, this),
                                                $$contentTexts[464].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[465].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39455
                                                }, this),
                                                $$contentTexts[466].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[467].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39522
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39384
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[468].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39567
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39603
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39308
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[469].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39618
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[470].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39654
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[471].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39694
                                                }, this),
                                                $$contentTexts[472].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[473].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39761
                                                }, this),
                                                $$contentTexts[474].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39690
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[475].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39833
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39869
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39614
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[476].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39884
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[477].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39920
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[478].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 39960
                                                }, this),
                                                $$contentTexts[479].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[480].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40027
                                                }, this),
                                                $$contentTexts[481].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[482].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40094
                                                }, this),
                                                $$contentTexts[483].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[484].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40161
                                                }, this),
                                                $$contentTexts[485].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 39956
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[486].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40233
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40269
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 39880
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[487].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40284
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[488].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40320
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[489].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40356
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[490].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40392
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40428
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40280
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[491].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40443
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[492].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40479
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[493].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40515
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[494].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40551
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40587
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40439
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[495].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40602
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[496].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40638
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[497].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40674
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[498].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40710
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40746
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40598
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[499].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40761
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[500].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40797
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[501].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40833
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[502].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40869
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40905
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40757
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[503].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40920
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[504].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#labelmaxwidth",
                                                    children: $$contentTexts[505].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 40987
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 40956
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[506].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41052
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[507].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 41092
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41088
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41137
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 40916
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[508].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41152
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[509].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41188
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[510].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41224
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[511].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41260
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41296
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41148
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[512].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41311
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[513].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41347
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[514].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41383
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[515].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41419
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41455
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41307
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[516].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41470
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[517].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41506
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[518].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41542
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[519].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41578
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41614
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41466
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[520].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41629
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[521].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#labelplacement",
                                                    children: $$contentTexts[522].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41696
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41665
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[523].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41762
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[524].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 41802
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41798
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41847
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41625
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[525].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41862
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[526].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41898
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[527].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 41938
                                                }, this),
                                                $$contentTexts[528].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[529].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42005
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 41934
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[530].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42050
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42086
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 41858
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[531].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42101
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[532].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42137
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[533].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42177
                                                }, this),
                                                $$contentTexts[534].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[535].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42244
                                                }, this),
                                                $$contentTexts[536].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[537].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42311
                                                }, this),
                                                $$contentTexts[538].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[539].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42378
                                                }, this),
                                                $$contentTexts[540].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[541].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42445
                                                }, this),
                                                $$contentTexts[542].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[543].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42512
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[544].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 42561
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42557
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42606
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 42097
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[545].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42621
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[546].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42657
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[547].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42697
                                                }, this),
                                                $$contentTexts[548].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[549].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42764
                                                }, this),
                                                $$contentTexts[550].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[551].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42831
                                                }, this),
                                                $$contentTexts[552].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[553].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42898
                                                }, this),
                                                $$contentTexts[554].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[555].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 42965
                                                }, this),
                                                $$contentTexts[556].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[557].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43032
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 42693
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[558].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43077
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43113
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 42617
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[559].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43128
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[560].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43164
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[561].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43200
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[562].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43236
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43272
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43124
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[563].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43287
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[564].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43323
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[565].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43359
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[566].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43395
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43431
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43283
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[567].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43446
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[568].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43482
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[569].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43522
                                                }, this),
                                                $$contentTexts[570].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[571].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43589
                                                }, this),
                                                $$contentTexts[572].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[573].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43656
                                                }, this),
                                                $$contentTexts[574].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[575].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43723
                                                }, this),
                                                $$contentTexts[576].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[577].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43790
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43518
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[578].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43835
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43871
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43442
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[579].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43886
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[580].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43922
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[581].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 43962
                                                }, this),
                                                $$contentTexts[582].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[583].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 44029
                                                }, this),
                                                $$contentTexts[584].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 43958
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[585].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44101
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44137
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 43882
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[586].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44152
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[587].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44188
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[588].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44224
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[589].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44260
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44296
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44148
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[590].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44311
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[591].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44347
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[592].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44383
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[593].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44419
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44455
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44307
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[594].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44470
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[595].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44506
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[596].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44542
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[597].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44578
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 44614
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 44466
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 38440
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 38229
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 44724
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 44665
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 45138
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 45007
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 44933
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 44781
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 44641
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[598].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[599].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46114
                        }, this),
                        $$contentTexts[600].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[601].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46181
                        }, this),
                        $$contentTexts[602].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[603].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46248
                        }, this),
                        $$contentTexts[604].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[605].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46315
                        }, this),
                        $$contentTexts[606].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[607].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46382
                        }, this),
                        $$contentTexts[608].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[609].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46449
                        }, this),
                        $$contentTexts[610].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[611].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46516
                        }, this),
                        $$contentTexts[612].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[613].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46583
                        }, this),
                        $$contentTexts[614].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[615].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46650
                        }, this),
                        $$contentTexts[616].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[617].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46717
                        }, this),
                        $$contentTexts[618].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[619].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46784
                        }, this),
                        $$contentTexts[620].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[621].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46851
                        }, this),
                        $$contentTexts[622].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[623].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46918
                        }, this),
                        $$contentTexts[624].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[625].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 46985
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 46084
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 47110
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 47052
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 47522
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 47391
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 47317
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 47166
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 47029
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[626].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[627].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 48498
                        }, this),
                        $$contentTexts[628].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 48468
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                $$contentTexts[629].value,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[630].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 48604
                                }, this),
                                $$contentTexts[631].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 48573
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: $$contentTexts[632].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 48676
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 48569
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[633].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 48717
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[634].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 48751
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "label-background-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#label-background-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 48914
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 48847
                        }, this),
                        "Label Background Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Label-Background-Style",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 49344
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 49213
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 49139
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 48979
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 48815
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[635].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 50290
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[636].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50342
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[637].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50378
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[638].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50414
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[639].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 50450
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 50338
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 50331
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[640].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50510
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[641].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50546
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[642].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50582
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[643].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50618
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 50506
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[644].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50663
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[645].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[646].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 50730
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50699
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[647].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50788
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[648].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 50828
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50824
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 50659
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[649].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50882
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[650].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50918
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[651].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50954
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[652].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 50990
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 50878
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[653].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51035
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[654].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51071
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[655].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51107
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[656].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51143
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51031
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[657].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51188
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[658].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51224
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[659].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51260
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[660].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51296
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51184
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[661].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51341
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[662].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51377
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[663].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51413
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[664].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51449
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51337
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[665].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51494
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[666].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51530
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[667].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51566
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[668].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51602
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51490
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[669].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51647
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[670].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51683
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[671].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51719
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[672].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51755
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51643
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[673].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51800
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[674].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 51867
                                                }, this),
                                                $$contentTexts[675].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 51900
                                                }, this),
                                                $$contentTexts[676].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51836
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[677].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[678].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 51974
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 51796
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[679].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52019
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[680].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52055
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[681].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52091
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[682].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52127
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52015
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[683].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52172
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[684].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52208
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[685].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52244
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[686].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52280
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52168
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[687].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52325
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[688].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52361
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[689].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52397
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[690].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52433
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52321
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[691].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52478
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[692].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52514
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[693].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52550
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[694].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52586
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52474
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[695].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52631
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[696].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52667
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[697].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52703
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[698].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52739
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52627
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[699].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52784
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[700].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52820
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[701].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52856
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[702].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52892
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52780
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[703].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[704].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 52973
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[705].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 53013
                                                }, this),
                                                $$contentTexts[706].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[707].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 53080
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53009
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[708].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53125
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 52933
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[709].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53170
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[710].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53206
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[711].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53242
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[712].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 53278
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 53166
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 50499
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 50324
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "halo-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#halo-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 53410
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 53355
                        }, this),
                        "Halo Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Halo-Style",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 53816
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 53685
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 53611
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 53463
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 53335
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[713].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 54762
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 54885
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 54823
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 55305
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 55174
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 55100
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 54945
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 54796
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[714].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 56251
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 56315
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[715].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 56359
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 56285
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[716].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 56427
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[717].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 56479
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[718].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 56515
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[719].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 56551
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[720].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 56587
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[721].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 56623
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 56475
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 56468
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[722].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56683
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[723].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56719
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[724].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56755
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[725].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56791
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56827
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 56679
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[726].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56842
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[727].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[728].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 56909
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56878
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[729].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 56967
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[730].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 57007
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57003
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57052
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 56838
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[731].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57067
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[732].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57103
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[733].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57139
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[734].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57175
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57211
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57063
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[735].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57226
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[736].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57262
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[737].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57298
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[738].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57334
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57370
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57222
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[739].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57385
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[740].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57421
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[741].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 57461
                                                }, this),
                                                $$contentTexts[742].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[743].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 57528
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57457
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[744].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57573
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57609
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57381
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[745].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57624
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[746].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57660
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[747].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57696
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[748].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57732
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57768
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57620
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[749].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57783
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[750].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57819
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[751].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57855
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[752].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57891
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57927
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57779
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[753].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57942
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[754].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#pointerevents",
                                                    children: $$contentTexts[755].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 58009
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 57978
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[756].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58074
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[757].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58114
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58110
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58159
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 57938
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[758].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58174
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[759].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: $$contentTexts[760].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 58241
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58210
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[761].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58290
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[762].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58326
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58362
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58170
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[763].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58377
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[764].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58413
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[765].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58449
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[766].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58485
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58521
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58373
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[767].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58536
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[768].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58572
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[769].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 58612
                                                }, this),
                                                $$contentTexts[770].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[771].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 58679
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58608
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[772].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 58728
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58724
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58773
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58532
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[773].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58788
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[774].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58824
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[775].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58860
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[776].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58896
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 58932
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 58784
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 56672
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 56461
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "icon-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#icon-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 59034
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 58979
                        }, this),
                        "Icon Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Icon-Style",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 59440
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 59309
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 59235
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 59087
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 58959
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[777].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 60386
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "1-text-icons",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#1-text-icons",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 60499
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 60442
                        }, this),
                        "1. Text Icons",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "1.-Text-Icons",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 60911
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 60780
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 60706
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 60555
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 60420
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[778].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 61857
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 61921
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[779].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 61965
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 61891
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "2-image-icons",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#2-image-icons",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 62114
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 62056
                        }, this),
                        "2. Image Icons",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "2.-Image-Icons",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 62528
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 62397
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 62323
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 62171
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 62033
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[780].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 63474
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 63538
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[781].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 63582
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 63508
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "3-iconfont-icons",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#3-iconfont-icons",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 63737
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 63676
                        }, this),
                        "3. IconFont Icons",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "3.-IconFont-Icons",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 64157
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 64026
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 63952
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 63797
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 63650
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[782].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 65103
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 65167
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[783].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 65211
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 65137
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[784].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 65279
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[785].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65331
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[786].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65367
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[787].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65403
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[788].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 65439
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 65327
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 65320
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[789].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65499
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[790].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65535
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[791].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65571
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[792].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65607
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 65495
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[793].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65652
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[794].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65688
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[795].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65724
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[796].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65760
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 65648
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[797].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65805
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[798].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65841
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[799].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[800].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65913
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 65801
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[801].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65958
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[802].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 65994
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[803].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66030
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[804].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66066
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 65954
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[805].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66111
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[806].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66147
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[807].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 66187
                                                }, this),
                                                $$contentTexts[808].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[809].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 66254
                                                }, this),
                                                $$contentTexts[810].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[811].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 66321
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66183
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[812].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66370
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66366
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66107
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[813].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66424
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[814].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66460
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[815].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 66500
                                                }, this),
                                                $$contentTexts[816].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[817].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 66567
                                                }, this),
                                                $$contentTexts[818].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66496
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[819].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66643
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66639
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66420
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[820].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66697
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[821].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66733
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[822].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[823].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 66809
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66805
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66693
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[824].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66863
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[825].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66899
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[826].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66935
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[827].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 66971
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 66859
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[828].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67016
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[829].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67052
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[830].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67088
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[831].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67124
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67012
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[832].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67169
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[833].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67205
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[834].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67241
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[835].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67277
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67165
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[836].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67322
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[837].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67358
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[838].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[839].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67430
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67318
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[840].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67475
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[841].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67511
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[842].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67547
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[843].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67583
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67471
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[844].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67628
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[845].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67664
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[846].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67700
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[847].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67736
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67624
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[848].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67781
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[849].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67817
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[850].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67853
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[851].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67889
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67777
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[852].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67934
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[853].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 67970
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[854].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68010
                                                }, this),
                                                $$contentTexts[855].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[856].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68077
                                                }, this),
                                                $$contentTexts[857].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[858].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68144
                                                }, this),
                                                $$contentTexts[859].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[860].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68211
                                                }, this),
                                                $$contentTexts[861].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[862].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68278
                                                }, this),
                                                $$contentTexts[863].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[864].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68345
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68006
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[865].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 68394
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68390
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 67930
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[866].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68448
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[867].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68484
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[868].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68524
                                                }, this),
                                                $$contentTexts[869].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[870].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68591
                                                }, this),
                                                $$contentTexts[871].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[872].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68658
                                                }, this),
                                                $$contentTexts[873].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[874].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68725
                                                }, this),
                                                $$contentTexts[875].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[876].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68792
                                                }, this),
                                                $$contentTexts[877].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[878].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 68859
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68520
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[879].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 68908
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68904
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68444
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[880].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68962
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[881].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 68998
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[882].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69034
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[883].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69070
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 68958
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[884].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69115
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[885].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69151
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[886].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69187
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[887].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69223
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 69111
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[888].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69268
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[889].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69304
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[890].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69344
                                                }, this),
                                                $$contentTexts[891].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[892].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69411
                                                }, this),
                                                $$contentTexts[893].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[894].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69478
                                                }, this),
                                                $$contentTexts[895].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[896].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69545
                                                }, this),
                                                $$contentTexts[897].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[898].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69612
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69340
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[899].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 69661
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69657
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 69264
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[900].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69715
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[901].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69751
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[902].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69791
                                                }, this),
                                                $$contentTexts[903].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[904].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 69858
                                                }, this),
                                                $$contentTexts[905].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69787
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[906].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 69934
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69930
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 69711
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[907].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 69988
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[908].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 70024
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[909].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 70060
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[910].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 70096
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 69984
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[911].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 70141
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[912].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 70177
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[913].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 70213
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[914].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 70249
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 70137
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 65488
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 65313
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "badge-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#badge-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 70383
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 70327
                        }, this),
                        "Badge Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Badge-Style",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 70791
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 70660
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 70586
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 70437
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 70306
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[915].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 71737
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "single-badge",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#single-badge",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 71850
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 71793
                        }, this),
                        "Single Badge",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Single-Badge",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 72260
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 72129
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 72055
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 71905
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 71771
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[916].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 73206
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 73270
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[917].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 73314
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 73240
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "multiple-badges",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#multiple-badges",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 73467
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 73407
                        }, this),
                        "Multiple Badges",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Multiple-Badges",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 73883
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 73752
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 73678
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 73525
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 73382
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[918].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 74829
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 74893
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[919].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 74937
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 74863
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "custom-badge-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#custom-badge-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 75096
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 75033
                        }, this),
                        "Custom Badge Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Custom-Badge-Style",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 75518
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 75387
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 75313
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 75157
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 75005
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[920].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 76464
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 76528
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[921].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 76572
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 76498
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[922].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 76640
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[923].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 76692
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[924].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 76728
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[925].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 76764
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[926].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 76800
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 76688
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 76681
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[927].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 76860
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[928].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 76896
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[929].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 76932
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[930].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 76968
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 76856
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[931].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 77013
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[932].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 77049
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[933].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 77085
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[934].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[935].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 77152
                                                }, this),
                                                $$contentTexts[936].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[937].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 77219
                                                }, this),
                                                $$contentTexts[938].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[939].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 77286
                                                }, this),
                                                $$contentTexts[940].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 77121
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 77009
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[941].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 77367
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[942].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 77403
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#badgestyleprops",
                                                    children: $$contentTexts[943].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 77443
                                                }, this),
                                                $$contentTexts[944].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 77439
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[945].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 77537
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 77363
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 76849
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 76674
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 77679
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 77619
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 78095
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 77964
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 77890
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 77737
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 77594
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[946].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 79059
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[947].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 79095
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[948].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 79131
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[949].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 79167
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 79055
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 79048
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[950].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79227
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[951].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79263
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[952].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79299
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[953].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79335
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79223
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[954].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79380
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[955].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[956].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 79447
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79416
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[957].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[958].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 79545
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79541
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79376
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[959].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79599
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[960].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79635
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[961].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79671
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[962].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79707
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79595
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[963].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79752
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[964].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79788
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[965].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79824
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[966].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79860
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79748
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[967].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79905
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[968].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79941
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[969].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 79977
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[970].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80013
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 79901
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[971].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80058
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[972].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80094
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[973].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80130
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[974].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80166
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 80054
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[975].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80211
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[976].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80247
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[977].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80283
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[978].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80319
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 80207
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[979].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80364
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[980].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80400
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[981].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80436
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[982].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 80360
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[983].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80517
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[984].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80553
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[985].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80589
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[986].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80625
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 80513
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[987].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80670
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[988].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 80737
                                                }, this),
                                                $$contentTexts[989].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 80770
                                                }, this),
                                                $$contentTexts[990].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 80803
                                                }, this),
                                                $$contentTexts[991].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                                    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/padding",
                                                    children: $$contentTexts[992].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 80836
                                                }, this),
                                                $$contentTexts[993].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80706
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[994].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 80966
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[995].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81002
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 80666
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[996].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81047
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[997].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81083
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[998].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81119
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[999].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81155
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 81043
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1000].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81200
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1001].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81237
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1002].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81274
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1003].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81311
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 81196
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1004].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81357
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1005].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81394
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1006].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81431
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1007].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81468
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 81353
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1008].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81514
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1009].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81551
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1010].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81588
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1011].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81625
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 81510
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1012].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81671
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1013].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81708
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1014].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81745
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1015].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81782
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 81667
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1016].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81828
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1017].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81865
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1018].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81902
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1019].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81939
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 81824
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1020].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 81985
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1021].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82022
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1022].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82063
                                                }, this),
                                                $$contentTexts[1023].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1024].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82132
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82059
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1025].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82178
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 81981
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1026].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82224
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1027].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82261
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1028].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82298
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1029].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82335
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 82220
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1030].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82381
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1031].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82418
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1032].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82455
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1033].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82492
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 82377
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1034].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82538
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1035].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82575
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1036].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82612
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1037].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82649
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 82534
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1038].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82695
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1039].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82732
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1040].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82769
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1041].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82806
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 82691
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1042].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82852
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1043].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82889
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1044].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82930
                                                }, this),
                                                $$contentTexts[1045].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1046].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 82999
                                                }, this),
                                                $$contentTexts[1047].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1048].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 83068
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 82926
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1049].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 83118
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83114
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 82848
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1050].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83173
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1051].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83210
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1052].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 83251
                                                }, this),
                                                $$contentTexts[1053].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1054].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 83320
                                                }, this),
                                                $$contentTexts[1055].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83247
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1056].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 83398
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83394
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 83169
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1057].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83453
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1058].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83490
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1059].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83527
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1060].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 83568
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83564
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 83449
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1061].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83623
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1062].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83660
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1063].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83697
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1064].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83734
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 83619
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1065].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83780
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1066].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83817
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1067].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83854
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1068].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83891
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 83776
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1069].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83937
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1070].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 83974
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1071].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84011
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1072].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84048
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 83933
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1073].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84094
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1074].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84131
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1075].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84168
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1076].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84205
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 84090
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1077].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84251
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1078].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84288
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1079].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84325
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1080].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84362
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 84247
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1081].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84408
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1082].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84445
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1083].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84482
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1084].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84519
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 84404
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1085].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84565
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1086].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84602
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1087].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84643
                                                }, this),
                                                $$contentTexts[1088].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1089].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84712
                                                }, this),
                                                $$contentTexts[1090].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1091].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84781
                                                }, this),
                                                $$contentTexts[1092].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1093].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84850
                                                }, this),
                                                $$contentTexts[1094].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1095].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84919
                                                }, this),
                                                $$contentTexts[1096].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1097].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 84988
                                                }, this),
                                                $$contentTexts[1098].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1099].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85057
                                                }, this),
                                                $$contentTexts[1100].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1101].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85126
                                                }, this),
                                                $$contentTexts[1102].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1103].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85195
                                                }, this),
                                                $$contentTexts[1104].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1105].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85264
                                                }, this),
                                                $$contentTexts[1106].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1107].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85333
                                                }, this),
                                                $$contentTexts[1108].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1109].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85402
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 84639
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1110].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 85448
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 84561
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1111].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 85494
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1112].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 85531
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1113].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 85568
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1114].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 85605
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 85490
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1115].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 85651
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1116].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 85688
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1117].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85729
                                                }, this),
                                                $$contentTexts[1118].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1119].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85798
                                                }, this),
                                                $$contentTexts[1120].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1121].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85867
                                                }, this),
                                                $$contentTexts[1122].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1123].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 85936
                                                }, this),
                                                $$contentTexts[1124].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1125].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86005
                                                }, this),
                                                $$contentTexts[1126].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1127].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86074
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 85725
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1128].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 86124
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86120
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 85647
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1129].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1130].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86216
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1131].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86257
                                                }, this),
                                                $$contentTexts[1132].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1133].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86326
                                                }, this),
                                                $$contentTexts[1134].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1135].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86395
                                                }, this),
                                                $$contentTexts[1136].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1137].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86464
                                                }, this),
                                                $$contentTexts[1138].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1139].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86533
                                                }, this),
                                                $$contentTexts[1140].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1141].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 86602
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86253
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1142].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 86652
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86648
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 86175
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1143].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86707
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1144].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86744
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1145].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86781
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1146].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86818
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 86703
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1147].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86864
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1148].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86901
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1149].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86938
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1150].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 86975
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 86860
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1151].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87021
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1152].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87058
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1153].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87099
                                                }, this),
                                                $$contentTexts[1154].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1155].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87168
                                                }, this),
                                                $$contentTexts[1156].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1157].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87237
                                                }, this),
                                                $$contentTexts[1158].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1159].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87306
                                                }, this),
                                                $$contentTexts[1160].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1161].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87375
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87095
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1162].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 87425
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87421
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 87017
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1163].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87480
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1164].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87517
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1165].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87558
                                                }, this),
                                                $$contentTexts[1166].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1167].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87627
                                                }, this),
                                                $$contentTexts[1168].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87554
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1169].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 87705
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87701
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 87476
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1170].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87760
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1171].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87797
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1172].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87838
                                                }, this),
                                                $$contentTexts[1173].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1174].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 87907
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87834
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1175].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87953
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 87756
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1176].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 87999
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1177].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 88036
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1178].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 88073
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1179].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 88110
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 87995
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1180].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 88156
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1181].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 88193
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1182].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 88230
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1183].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 88267
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 88152
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 79216
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 79041
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    id: "port-style",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#port-style",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 88400
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 88345
                        }, this),
                        "Port Style",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Port-Style",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 88806
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 88675
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 88601
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 88453
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 88325
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1184].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 89752
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "basic-ports",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#basic-ports",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 89864
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 89808
                        }, this),
                        "Basic Ports",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Basic-Ports",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 90272
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 90141
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 90067
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 89918
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 89787
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1185].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 91218
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 91283
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1186].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 91327
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 91253
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "custom-position-ports",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#custom-position-ports",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 91493
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 91427
                        }, this),
                        "Custom Position Ports",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Custom-Position-Ports",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 91921
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 91790
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 91716
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 91557
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 91396
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1187].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 92867
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 92932
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1188].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 92976
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 92902
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                    id: "differentiated-port-styles",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            "aria-hidden": "true",
                            tabIndex: "-1",
                            href: "#differentiated-port-styles",
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: "icon icon-link"
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 93152
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 93081
                        }, this),
                        "Differentiated Port Styles",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("button", {
                            title: "Post a comment",
                            "data-feedback-hash": "Differentiated-Port-Styles",
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 93590
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 93459
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 93385
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 93221
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 93045
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1189].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 94536
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 94601
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1190].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 94645
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 94571
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1191].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 94714
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1192].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 94767
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1193].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 94804
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1194].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 94841
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1195].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 94878
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1196].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 94915
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 94763
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 94756
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1197].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 94976
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1198].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 95013
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1199].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 95050
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1200].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 95087
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 95124
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 94972
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1201].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 95139
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1202].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 95176
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#portstyleprops",
                                                    children: $$contentTexts[1203].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 95217
                                                }, this),
                                                $$contentTexts[1204].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 95213
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1205].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 95312
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 95349
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 95135
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 94965
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 94749
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 95459
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 95400
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 95873
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 95742
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 95668
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 95516
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 95376
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1206].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 96837
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1207].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 96874
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1208].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 96911
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1209].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 96948
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1210].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 96985
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 96833
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 96826
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1211].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 97046
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1212].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 97083
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1213].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 97120
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1214].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 97157
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 97194
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 97042
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1215].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 97209
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1216].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 97246
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1217].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97287
                                                }, this),
                                                $$contentTexts[1218].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1219].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97356
                                                }, this),
                                                $$contentTexts[1220].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1221].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97425
                                                }, this),
                                                $$contentTexts[1222].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1223].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97494
                                                }, this),
                                                $$contentTexts[1224].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1225].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97563
                                                }, this),
                                                $$contentTexts[1226].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1227].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97632
                                                }, this),
                                                $$contentTexts[1228].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1229].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97701
                                                }, this),
                                                $$contentTexts[1230].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1231].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97770
                                                }, this),
                                                $$contentTexts[1232].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1233].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97839
                                                }, this),
                                                $$contentTexts[1234].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1235].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97908
                                                }, this),
                                                $$contentTexts[1236].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1237].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 97977
                                                }, this),
                                                $$contentTexts[1238].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1239].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 98046
                                                }, this),
                                                $$contentTexts[1240].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1241].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 98115
                                                }, this),
                                                $$contentTexts[1242].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 97283
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1243].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98189
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1244].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98226
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 97205
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1245].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98272
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[1246].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 98341
                                                }, this),
                                                $$contentTexts[1247].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 98375
                                                }, this),
                                                $$contentTexts[1248].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98309
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1249].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98414
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1250].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98451
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98488
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 98268
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1251].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98503
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[1252].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 98572
                                                }, this),
                                                $$contentTexts[1253].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 98606
                                                }, this),
                                                $$contentTexts[1254].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98540
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1255].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98645
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1256].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98682
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98719
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 98499
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1257].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98734
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[1258].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                                    to: "#cursor",
                                                    children: $$contentTexts[1259].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 98803
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98771
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1260].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98862
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1261].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 98903
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98899
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98949
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 98730
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1262].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 98964
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1263].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99001
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1264].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99038
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1265].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99075
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99112
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 98960
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1266].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99127
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1267].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99164
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1268].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99201
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1269].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99238
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99275
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 99123
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1270].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99290
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1271].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99327
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1272].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99364
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1273].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99401
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99438
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 99286
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1274].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99453
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1275].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99490
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1276].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99527
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1277].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99564
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99601
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 99449
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1278].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99616
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1279].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99653
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1280].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99690
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1281].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99727
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99764
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 99612
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1282].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99779
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1283].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99816
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1284].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99853
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1285].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99890
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99927
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 99775
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1286].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99942
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1287].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 99979
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1288].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100016
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1289].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100053
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100090
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 99938
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1290].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100105
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1291].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100142
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1292].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100179
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1293].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100216
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100253
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 100101
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1294].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100268
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1295].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100305
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1296].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100342
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1297].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100379
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100416
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 100264
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1298].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100431
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1299].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100468
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1300].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100505
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1301].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100542
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100579
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 100427
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1302].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100594
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1303].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100631
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1304].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100668
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1305].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100705
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100742
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 100590
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1306].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100757
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1307].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100794
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1308].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100831
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1309].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100868
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100905
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 100753
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1310].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100920
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1311].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100957
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1312].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 100994
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1313].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101031
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101068
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 100916
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1314].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101083
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1315].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101120
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1316].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 101161
                                                }, this),
                                                $$contentTexts[1317].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1318].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 101230
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101157
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1319].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 101280
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101276
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101326
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 101079
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1320].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101341
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1321].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101378
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1322].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101415
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1323].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101452
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {}, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 101489
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 101337
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 97035
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 96819
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 101581
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 101531
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 101977
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 101846
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 101772
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 101629
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 101516
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1324].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 102923
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1325].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 102958
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                    width: "520",
                    src: "https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*t2qvRp92itkAAAAAAAAAAAAADmJ7AQ/original"
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 102993
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1326].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 103113
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "typescript",
                    children: $$contentTexts[1327].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 103148
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[1328].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[1329].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 103250
                        }, this),
                        $$contentTexts[1330].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 103219
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "js",
                    highlightLines: [
                        4,
                        5,
                        6,
                        7
                    ],
                    children: $$contentTexts[1331].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 103323
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1332].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 103416
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 103481
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1333].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 103537
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 103451
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 103679
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 103625
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 104083
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 103952
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 103878
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 103731
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 103606
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1334].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 105029
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[1335].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/BaseNode.en.md",
                        lineNumber: 21,
                        columnNumber: 105068
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 105064
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1336].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 105110
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ol", {
                    start: "2",
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                        children: $$contentTexts[1337].value
                    }, void 0, false, {
                        fileName: "docs/manual/element/node/BaseNode.en.md",
                        lineNumber: 21,
                        columnNumber: 105189
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 105175
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1338].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 105231
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("ul", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1339].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 105274
                                }, this),
                                $$contentTexts[1340].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 105270
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1341].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 105352
                                }, this),
                                $$contentTexts[1342].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 105348
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1343].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 105430
                                }, this),
                                $$contentTexts[1344].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 105426
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1345].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 105508
                                }, this),
                                $$contentTexts[1346].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 105504
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1347].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 105586
                                }, this),
                                $$contentTexts[1348].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 105582
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1349].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 105664
                                }, this),
                                $$contentTexts[1350].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 105660
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("li", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                    children: $$contentTexts[1351].value
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 105742
                                }, this),
                                $$contentTexts[1352].value
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 105738
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 105266
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[1353].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                            to: "/en/manual/animation/animation#animation-paradigm",
                            children: $$contentTexts[1354].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 105852
                        }, this),
                        $$contentTexts[1355].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 105821
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1356].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 105980
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1357].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 106045
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1358].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 106080
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1359].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 106145
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1360].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 106180
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
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 106314
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 106262
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
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 106714
                                    }, this)
                                }, void 0, false, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 106583
                                }, this)
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 106509
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 106364
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 106245
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[1361].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[1362].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 107691
                        }, this),
                        $$contentTexts[1363].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 107660
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("blockquote", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                        children: [
                            $$contentTexts[1364].value,
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_dumi.Link, {
                                to: "/en/manual/theme/palette",
                                children: $$contentTexts[1365].value
                            }, void 0, false, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 107807
                            }, this),
                            $$contentTexts[1366].value
                        ]
                    }, void 0, true, {
                        fileName: "docs/manual/element/node/BaseNode.en.md",
                        lineNumber: 21,
                        columnNumber: 107776
                    }, this)
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 107764
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index6.default, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1367].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 107941
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1368].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 107978
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1369].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 108015
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                        children: $$contentTexts[1370].value
                                    }, void 0, false, {
                                        fileName: "docs/manual/element/node/BaseNode.en.md",
                                        lineNumber: 21,
                                        columnNumber: 108052
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                lineNumber: 21,
                                columnNumber: 107937
                            }, this)
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 107930
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1371].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108113
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1372].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108150
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1373].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108187
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1374].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108224
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 108109
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1375].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108270
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1376].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108307
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1377].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108344
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1378].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 108385
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108381
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 108266
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1379].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108440
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1380].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108477
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1381].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108514
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1382].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108551
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 108436
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: $$contentTexts[1383].value
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108597
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                $$contentTexts[1384].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 108666
                                                }, this),
                                                $$contentTexts[1385].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1386].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 108700
                                                }, this),
                                                $$contentTexts[1387].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 108769
                                                }, this),
                                                $$contentTexts[1388].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1389].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 108803
                                                }, this),
                                                $$contentTexts[1390].value
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108634
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1391].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 108881
                                                }, this),
                                                $$contentTexts[1392].value,
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                    children: $$contentTexts[1393].value
                                                }, void 0, false, {
                                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                                    lineNumber: 21,
                                                    columnNumber: 108950
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108877
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                                                children: $$contentTexts[1394].value
                                            }, void 0, false, {
                                                fileName: "docs/manual/element/node/BaseNode.en.md",
                                                lineNumber: 21,
                                                columnNumber: 109000
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "docs/manual/element/node/BaseNode.en.md",
                                            lineNumber: 21,
                                            columnNumber: 108996
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "docs/manual/element/node/BaseNode.en.md",
                                    lineNumber: 21,
                                    columnNumber: 108593
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 108102
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 107923
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: [
                        $$contentTexts[1395].value,
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("code", {
                            children: $$contentTexts[1396].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 109098
                        }, this),
                        $$contentTexts[1397].value
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 109067
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1398].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 109171
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1399].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 109236
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 109301
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1400].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 109357
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 109271
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1401].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 109426
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                    lang: "json",
                    children: $$contentTexts[1402].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 109461
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                    children: $$contentTexts[1403].value
                }, void 0, false, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 109526
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: "ob-codeblock",
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                            meta: "| ob { pin: false, inject: true }",
                            lang: "js"
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 109591
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_index5.default, {
                            lang: "js",
                            children: $$contentTexts[1404].value
                        }, void 0, false, {
                            fileName: "docs/manual/element/node/BaseNode.en.md",
                            lineNumber: 21,
                            columnNumber: 109647
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "docs/manual/element/node/BaseNode.en.md",
                    lineNumber: 21,
                    columnNumber: 109561
                }, this)
            ]
        }, void 0, true, {
            fileName: "docs/manual/element/node/BaseNode.en.md",
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
                fileName: "docs/manual/element/node/BaseNode.en.md",
                lineNumber: 28,
                columnNumber: 40
            }, void 0),
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DumiMarkdownInner, {}, void 0, false, {
                fileName: "docs/manual/element/node/BaseNode.en.md",
                lineNumber: 28,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "docs/manual/element/node/BaseNode.en.md",
            lineNumber: 28,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "docs/manual/element/node/BaseNode.en.md",
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
//# sourceMappingURL=docs_manual_element_node_BaseNode_en_md-async.js.map